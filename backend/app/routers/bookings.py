"""
Bookings router for creating, listing, cancelling, and viewing host bookings.
"""

from typing import List
from datetime import date
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from ..database import get_db
from .. import models, schemas, auth

router = APIRouter(prefix="/bookings", tags=["Bookings"])


@router.post("/", response_model=schemas.BookingOut, status_code=status.HTTP_201_CREATED)
def create_booking(
    booking_in: schemas.BookingCreate,
    db: Session = Depends(get_db),
    current_user: models.User = Depends(auth.get_current_user),
):
    """
    Create a new booking with overlap validation and server-side pricing computation.
    
    Overlapping dates rule:
    Two ranges [a_in, a_out) and [b_in, b_out) overlap if:
      a_in < b_out AND b_in < a_out
    """
    if booking_in.check_in >= booking_in.check_out:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Check-out date must be after check-in date",
        )

    if booking_in.check_in < date.today():
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Check-in date cannot be in the past",
        )

    # Fetch listing
    listing = db.query(models.Listing).filter(models.Listing.id == booking_in.listing_id).first()
    if not listing:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Listing not found",
        )

    # Validate max guests
    if booking_in.guests_count > listing.max_guests:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail=f"Guests count ({booking_in.guests_count}) exceeds maximum allowed ({listing.max_guests})",
        )

    # Prevent hosts from booking their own property
    if listing.host_id == current_user.id:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Hosts cannot book their own property",
        )

    # Overlap check query inside transaction
    # A confirmed booking [b.check_in, b.check_out) overlaps with [requested.check_in, requested.check_out)
    # iff b.check_in < requested.check_out AND requested.check_in < b.check_out
    overlapping_booking = db.query(models.Booking).filter(
        models.Booking.listing_id == listing.id,
        models.Booking.status == "confirmed",
        models.Booking.check_in < booking_in.check_out,
        models.Booking.check_out > booking_in.check_in,
    ).first()

    if overlapping_booking:
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="Selected dates are no longer available for this listing",
        )

    # Server-side pricing calculation
    nights = (booking_in.check_out - booking_in.check_in).days
    nightly_rate = listing.price_per_night
    cleaning_fee = listing.cleaning_fee
    subtotal = nightly_rate * nights
    service_fee = round(subtotal * listing.service_fee_pct, 2)
    total_price = round(subtotal + cleaning_fee + service_fee, 2)

    booking = models.Booking(
        listing_id=listing.id,
        guest_id=current_user.id,
        check_in=booking_in.check_in,
        check_out=booking_in.check_out,
        guests_count=booking_in.guests_count,
        nightly_rate=nightly_rate,
        nights=nights,
        cleaning_fee=cleaning_fee,
        service_fee=service_fee,
        total_price=total_price,
        status="confirmed",
    )

    db.add(booking)
    db.commit()
    db.refresh(booking)

    # Build response
    listing_snap = schemas.ListingSnapshot(
        id=listing.id,
        title=listing.title,
        city=listing.city,
        country=listing.country,
        images=[schemas.ListingImageOut.model_validate(img) for img in listing.images],
        property_type=listing.property_type,
    )

    return schemas.BookingOut(
        id=booking.id,
        listing=listing_snap,
        guest=schemas.UserOut.model_validate(current_user),
        check_in=booking.check_in,
        check_out=booking.check_out,
        guests_count=booking.guests_count,
        nightly_rate=booking.nightly_rate,
        nights=booking.nights,
        cleaning_fee=booking.cleaning_fee,
        service_fee=booking.service_fee,
        total_price=booking.total_price,
        status=booking.status,
        created_at=booking.created_at,
        has_review=False,
    )


@router.get("/mine", response_model=List[schemas.BookingOut])
def get_my_bookings(
    db: Session = Depends(get_db),
    current_user: models.User = Depends(auth.get_current_user),
):
    """Get all bookings for the current user ("My Trips")."""
    bookings = (
        db.query(models.Booking)
        .filter(models.Booking.guest_id == current_user.id)
        .order_by(models.Booking.check_in.desc())
        .all()
    )

    results = []
    for b in bookings:
        listing = b.listing
        listing_snap = schemas.ListingSnapshot(
            id=listing.id,
            title=listing.title,
            city=listing.city,
            country=listing.country,
            images=[schemas.ListingImageOut.model_validate(img) for img in listing.images],
            property_type=listing.property_type,
        )
        has_review = db.query(models.Review).filter(models.Review.booking_id == b.id).first() is not None

        results.append(
            schemas.BookingOut(
                id=b.id,
                listing=listing_snap,
                guest=schemas.UserOut.model_validate(current_user),
                check_in=b.check_in,
                check_out=b.check_out,
                guests_count=b.guests_count,
                nightly_rate=b.nightly_rate,
                nights=b.nights,
                cleaning_fee=b.cleaning_fee,
                service_fee=b.service_fee,
                total_price=b.total_price,
                status=b.status,
                created_at=b.created_at,
                has_review=has_review,
            )
        )

    return results


@router.post("/{booking_id}/cancel", response_model=schemas.BookingOut)
def cancel_booking(
    booking_id: int,
    db: Session = Depends(get_db),
    current_user: models.User = Depends(auth.get_current_user),
):
    """Guest cancels their own upcoming booking."""
    booking = db.query(models.Booking).filter(models.Booking.id == booking_id).first()
    if not booking:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Booking not found")

    if booking.guest_id != current_user.id:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="You can only cancel your own bookings",
        )

    if booking.status == "cancelled":
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Booking is already cancelled",
        )

    booking.status = "cancelled"
    db.commit()
    db.refresh(booking)

    listing = booking.listing
    listing_snap = schemas.ListingSnapshot(
        id=listing.id,
        title=listing.title,
        city=listing.city,
        country=listing.country,
        images=[schemas.ListingImageOut.model_validate(img) for img in listing.images],
        property_type=listing.property_type,
    )
    has_review = db.query(models.Review).filter(models.Review.booking_id == booking.id).first() is not None

    return schemas.BookingOut(
        id=booking.id,
        listing=listing_snap,
        guest=schemas.UserOut.model_validate(current_user),
        check_in=booking.check_in,
        check_out=booking.check_out,
        guests_count=booking.guests_count,
        nightly_rate=booking.nightly_rate,
        nights=booking.nights,
        cleaning_fee=booking.cleaning_fee,
        service_fee=booking.service_fee,
        total_price=booking.total_price,
        status=booking.status,
        created_at=booking.created_at,
        has_review=has_review,
    )


@router.get("/host/{listing_id}", response_model=List[schemas.BookingOut])
def get_host_listing_bookings(
    listing_id: int,
    db: Session = Depends(get_db),
    current_host: models.User = Depends(auth.get_current_host),
):
    """Host views bookings for one of their listings."""
    listing = db.query(models.Listing).filter(models.Listing.id == listing_id).first()
    if not listing:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Listing not found")

    if listing.host_id != current_host.id:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="You can only view bookings for your own listings",
        )

    bookings = (
        db.query(models.Booking)
        .filter(models.Booking.listing_id == listing_id)
        .order_by(models.Booking.check_in.desc())
        .all()
    )

    results = []
    listing_snap = schemas.ListingSnapshot(
        id=listing.id,
        title=listing.title,
        city=listing.city,
        country=listing.country,
        images=[schemas.ListingImageOut.model_validate(img) for img in listing.images],
        property_type=listing.property_type,
    )

    for b in bookings:
        guest = db.query(models.User).filter(models.User.id == b.guest_id).first()
        has_review = db.query(models.Review).filter(models.Review.booking_id == b.id).first() is not None
        results.append(
            schemas.BookingOut(
                id=b.id,
                listing=listing_snap,
                guest=schemas.UserOut.model_validate(guest),
                check_in=b.check_in,
                check_out=b.check_out,
                guests_count=b.guests_count,
                nightly_rate=b.nightly_rate,
                nights=b.nights,
                cleaning_fee=b.cleaning_fee,
                service_fee=b.service_fee,
                total_price=b.total_price,
                status=b.status,
                created_at=b.created_at,
                has_review=has_review,
            )
        )

    return results
