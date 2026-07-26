"""
Wishlist router for toggling and fetching user wishlisted listings.
"""

from typing import List
from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from ..database import get_db
from .. import models, schemas, auth

router = APIRouter(prefix="/wishlist", tags=["Wishlist"])


@router.post("/toggle", response_model=schemas.WishlistResponse)
def toggle_wishlist(
    payload: schemas.WishlistToggle,
    db: Session = Depends(get_db),
    current_user: models.User = Depends(auth.get_current_user),
):
    """Toggle a listing on/off the current user's wishlist."""
    listing = db.query(models.Listing).filter(models.Listing.id == payload.listing_id).first()
    if not listing:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Listing not found",
        )

    existing = db.query(models.Wishlist).filter(
        models.Wishlist.user_id == current_user.id,
        models.Wishlist.listing_id == payload.listing_id,
    ).first()

    if existing:
        db.delete(existing)
        db.commit()
        return schemas.WishlistResponse(wishlisted=False)
    else:
        wishlist_item = models.Wishlist(user_id=current_user.id, listing_id=payload.listing_id)
        db.add(wishlist_item)
        db.commit()
        return schemas.WishlistResponse(wishlisted=True)


@router.get("/mine", response_model=List[schemas.ListingCardOut])
def get_my_wishlist(
    db: Session = Depends(get_db),
    current_user: models.User = Depends(auth.get_current_user),
):
    """Get all wishlisted listings for the current user."""
    wishlists = db.query(models.Wishlist).filter(models.Wishlist.user_id == current_user.id).all()
    results = []
    for item in wishlists:
        listing = item.listing
        # Calculate rating
        ratings = [r.rating for r in listing.reviews]
        avg_rating = round(sum(ratings) / len(ratings), 2) if ratings else None
        
        card = schemas.ListingCardOut(
            id=listing.id,
            title=listing.title,
            city=listing.city,
            country=listing.country,
            price_per_night=listing.price_per_night,
            property_type=listing.property_type,
            images=[schemas.ListingImageOut.model_validate(img) for img in listing.images],
            avg_rating=avg_rating,
            review_count=len(ratings),
            is_wishlisted=True,
        )
        results.append(card)

    return results
