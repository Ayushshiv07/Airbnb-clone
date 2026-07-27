"""
Listings router for browsing, searching, detail view, and Host CRUD operations.
"""

from typing import List, Optional
from datetime import date
from math import ceil
from fastapi import APIRouter, Depends, HTTPException, Query, status
from sqlalchemy.orm import Session
from sqlalchemy import func, or_

from ..database import get_db
from .. import models, schemas, auth

router = APIRouter(prefix="/listings", tags=["Listings"])


@router.get("/", response_model=schemas.PaginatedListings)
def get_listings(
    location: Optional[str] = None,
    check_in: Optional[date] = None,
    check_out: Optional[date] = None,
    guests: Optional[int] = None,
    min_price: Optional[float] = None,
    max_price: Optional[float] = None,
    property_type: Optional[str] = None,
    amenities: Optional[str] = None,  # comma-separated amenity IDs
    page: int = Query(1, ge=1),
    page_size: int = Query(12, ge=1, le=500),
    db: Session = Depends(get_db),
    current_user: Optional[models.User] = Depends(auth.get_optional_user),
):
    """
    Paginated search and filter endpoint for property listings.
    
    Filters:
    - location: matches city or country (case-insensitive substring)
    - check_in & check_out: excludes listings with overlapping confirmed bookings
    - guests: max_guests >= requested guests
    - min_price & max_price: price_per_night range filter
    - property_type: exact match (Apartment, House, Villa, Cabin, Loft)
    - amenities: comma-separated amenity IDs (must have ALL specified amenities)
    """
    query = db.query(models.Listing)

    # Location filter (city or country)
    if location:
        loc_pattern = f"%{location.strip()}%"
        query = query.filter(
            or_(
                models.Listing.city.ilike(loc_pattern),
                models.Listing.country.ilike(loc_pattern),
                models.Listing.title.ilike(loc_pattern),
            )
        )

    # Guest capacity filter
    if guests:
        query = query.filter(models.Listing.max_guests >= guests)

    # Price range filter
    if min_price is not None:
        query = query.filter(models.Listing.price_per_night >= min_price)
    if max_price is not None:
        query = query.filter(models.Listing.price_per_night <= max_price)

    # Property type filter
    if property_type:
        query = query.filter(models.Listing.property_type == property_type)

    # Amenities filter (must match all given amenity IDs)
    if amenities:
        try:
            amenity_id_list = [int(a.strip()) for a in amenities.split(",") if a.strip()]
            for a_id in amenity_id_list:
                query = query.filter(
                    models.Listing.amenities.any(models.Amenity.id == a_id)
                )
        except ValueError:
            pass

    # Availability filter: exclude listings that have overlapping confirmed bookings
    if check_in and check_out:
        if check_in >= check_out:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Check-out date must be after check-in date",
            )
        
        # Subquery: listing IDs that have an overlapping confirmed booking
        booked_listing_ids = (
            db.query(models.Booking.listing_id)
            .filter(
                models.Booking.status == "confirmed",
                models.Booking.check_in < check_out,
                models.Booking.check_out > check_in,
            )
            .subquery()
        )
        
        query = query.filter(models.Listing.id.not_in(booked_listing_ids))

    # Pagination calculation
    total = query.count()
    pages = ceil(total / page_size) if total > 0 else 1
    offset = (page - 1) * page_size

    from sqlalchemy.orm import joinedload
    listings = (
        query.options(
            joinedload(models.Listing.images),
            joinedload(models.Listing.reviews)
        )
        .order_by(models.Listing.id.desc())
        .offset(offset)
        .limit(page_size)
        .unique()
        .all()
    )

    # User's wishlist set for fast O(1) lookup
    user_wishlist_set = set()
    if current_user:
        w_items = db.query(models.Wishlist.listing_id).filter(models.Wishlist.user_id == current_user.id).all()
        user_wishlist_set = {w[0] for w in w_items}

    # Format result cards
    items = []
    for l in listings:
        ratings = [r.rating for r in l.reviews]
        avg_rating = round(sum(ratings) / len(ratings), 2) if ratings else None
        
        card = schemas.ListingCardOut(
            id=l.id,
            title=l.title,
            city=l.city,
            country=l.country,
            price_per_night=l.price_per_night,
            property_type=l.property_type,
            images=[schemas.ListingImageOut.model_validate(img) for img in l.images],
            avg_rating=avg_rating,
            review_count=len(ratings),
            is_wishlisted=l.id in user_wishlist_set,
        )
        items.append(card)

    return schemas.PaginatedListings(
        items=items,
        total=total,
        page=page,
        pages=pages,
        page_size=page_size,
    )


@router.get("/host/mine", response_model=List[schemas.HostListingOut])
def get_my_host_listings(
    db: Session = Depends(get_db),
    current_host: models.User = Depends(auth.get_current_host),
):
    """Host dashboard endpoint: returns all listings owned by the host with booking counts."""
    listings = (
        db.query(models.Listing)
        .filter(models.Listing.host_id == current_host.id)
        .order_by(models.Listing.created_at.desc())
        .all()
    )

    results = []
    for l in listings:
        booking_count = db.query(models.Booking).filter(
            models.Booking.listing_id == l.id,
            models.Booking.status == "confirmed",
        ).count()

        item = schemas.HostListingOut(
            id=l.id,
            title=l.title,
            city=l.city,
            country=l.country,
            price_per_night=l.price_per_night,
            property_type=l.property_type,
            images=[schemas.ListingImageOut.model_validate(img) for img in l.images],
            booking_count=booking_count,
            created_at=l.created_at,
        )
        results.append(item)

    return results


@router.get("/{listing_id}", response_model=schemas.ListingDetailOut)
def get_listing_detail(
    listing_id: int,
    db: Session = Depends(get_db),
    current_user: Optional[models.User] = Depends(auth.get_optional_user),
):
    """
    Get full listing detail including host info, images, amenities,
    reviews, average rating, and booked date ranges for the calendar.
    """
    listing = db.query(models.Listing).filter(models.Listing.id == listing_id).first()
    if not listing:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Listing not found",
        )

    # Fetch confirmed upcoming/active bookings to pass booked_ranges to calendar
    today = date.today()
    confirmed_bookings = (
        db.query(models.Booking)
        .filter(
            models.Booking.listing_id == listing_id,
            models.Booking.status == "confirmed",
            models.Booking.check_out >= today,
        )
        .all()
    )
    booked_ranges = [
        schemas.BookedRange(check_in=b.check_in, check_out=b.check_out)
        for b in confirmed_bookings
    ]

    # Calculate review stats
    ratings = [r.rating for r in listing.reviews]
    avg_rating = round(sum(ratings) / len(ratings), 2) if ratings else None

    # Check if wishlisted
    is_wishlisted = False
    if current_user:
        w = db.query(models.Wishlist).filter(
            models.Wishlist.user_id == current_user.id,
            models.Wishlist.listing_id == listing_id,
        ).first()
        is_wishlisted = w is not None

    # Format reviews with guest info
    reviews_out = []
    for r in listing.reviews:
        reviews_out.append(
            schemas.ReviewOut(
                id=r.id,
                rating=r.rating,
                comment=r.comment,
                created_at=r.created_at,
                guest=schemas.UserOut.model_validate(r.guest),
            )
        )

    return schemas.ListingDetailOut(
        id=listing.id,
        host=schemas.HostInfo.model_validate(listing.host),
        title=listing.title,
        description=listing.description,
        property_type=listing.property_type,
        city=listing.city,
        country=listing.country,
        address=listing.address,
        latitude=listing.latitude,
        longitude=listing.longitude,
        price_per_night=listing.price_per_night,
        cleaning_fee=listing.cleaning_fee,
        service_fee_pct=listing.service_fee_pct,
        max_guests=listing.max_guests,
        bedrooms=listing.bedrooms,
        beds=listing.beds,
        bathrooms=listing.bathrooms,
        images=[schemas.ListingImageOut.model_validate(img) for img in listing.images],
        amenities=[schemas.AmenityOut.model_validate(a) for a in listing.amenities],
        reviews=reviews_out,
        avg_rating=avg_rating,
        review_count=len(ratings),
        booked_ranges=booked_ranges,
        is_wishlisted=is_wishlisted,
        created_at=listing.created_at,
    )


@router.post("/", response_model=schemas.ListingDetailOut, status_code=status.HTTP_201_CREATED)
def create_listing(
    listing_in: schemas.ListingCreate,
    db: Session = Depends(get_db),
    current_host: models.User = Depends(auth.get_current_host),
):
    """Host creates a new listing."""
    listing = models.Listing(
        host_id=current_host.id,
        title=listing_in.title,
        description=listing_in.description,
        property_type=listing_in.property_type,
        city=listing_in.city,
        country=listing_in.country,
        address=listing_in.address,
        latitude=listing_in.latitude,
        longitude=listing_in.longitude,
        price_per_night=listing_in.price_per_night,
        cleaning_fee=listing_in.cleaning_fee,
        max_guests=listing_in.max_guests,
        bedrooms=listing_in.bedrooms,
        beds=listing_in.beds,
        bathrooms=listing_in.bathrooms,
    )

    # Attach amenities
    if listing_in.amenity_ids:
        amenities = db.query(models.Amenity).filter(models.Amenity.id.in_(listing_in.amenity_ids)).all()
        listing.amenities = amenities

    db.add(listing)
    db.flush()

    # Attach images
    for pos, img_data in enumerate(listing_in.images):
        img = models.ListingImage(listing_id=listing.id, url=img_data.url, position=img_data.position or pos)
        db.add(img)

    db.commit()
    db.refresh(listing)

    return get_listing_detail(listing_id=listing.id, db=db, current_user=current_host)


@router.put("/{listing_id}", response_model=schemas.ListingDetailOut)
def update_listing(
    listing_id: int,
    listing_in: schemas.ListingUpdate,
    db: Session = Depends(get_db),
    current_host: models.User = Depends(auth.get_current_host),
):
    """Host updates an existing listing they own."""
    listing = db.query(models.Listing).filter(models.Listing.id == listing_id).first()
    if not listing:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Listing not found")

    if listing.host_id != current_host.id:
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="You can only edit your own listings")

    # Update basic fields if provided
    for field in [
        "title", "description", "property_type", "city", "country", "address",
        "latitude", "longitude", "price_per_night", "cleaning_fee",
        "max_guests", "bedrooms", "beds", "bathrooms",
    ]:
        val = getattr(listing_in, field)
        if val is not None:
            setattr(listing, field, val)

    # Update amenities if provided
    if listing_in.amenity_ids is not None:
        amenities = db.query(models.Amenity).filter(models.Amenity.id.in_(listing_in.amenity_ids)).all()
        listing.amenities = amenities

    # Update images if provided
    if listing_in.images is not None:
        db.query(models.ListingImage).filter(models.ListingImage.listing_id == listing.id).delete()
        for pos, img_data in enumerate(listing_in.images):
            img = models.ListingImage(listing_id=listing.id, url=img_data.url, position=img_data.position or pos)
            db.add(img)

    db.commit()
    db.refresh(listing)

    return get_listing_detail(listing_id=listing.id, db=db, current_user=current_host)


@router.delete("/{listing_id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_listing(
    listing_id: int,
    db: Session = Depends(get_db),
    current_host: models.User = Depends(auth.get_current_host),
):
    """
    Host deletes a listing they own.
    
    Constraint: Cannot delete a listing if it has future confirmed bookings.
    Returns 409 Conflict with clear message if violated.
    """
    listing = db.query(models.Listing).filter(models.Listing.id == listing_id).first()
    if not listing:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Listing not found")

    if listing.host_id != current_host.id:
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail="You can only delete your own listings")

    # Check for future confirmed bookings
    today = date.today()
    future_bookings = db.query(models.Booking).filter(
        models.Booking.listing_id == listing_id,
        models.Booking.status == "confirmed",
        models.Booking.check_out >= today,
    ).count()

    if future_bookings > 0:
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail=f"Cannot delete listing: it has {future_bookings} upcoming confirmed booking(s)",
        )

    db.delete(listing)
    db.commit()
    return None
