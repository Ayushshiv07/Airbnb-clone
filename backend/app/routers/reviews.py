"""
Reviews router for adding reviews to completed bookings.
"""

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
from datetime import date

from ..database import get_db
from .. import models, schemas, auth

router = APIRouter(prefix="/reviews", tags=["Reviews"])


@router.post("/", response_model=schemas.ReviewOut, status_code=status.HTTP_201_CREATED)
def create_review(
    review_in: schemas.ReviewCreate,
    db: Session = Depends(get_db),
    current_user: models.User = Depends(auth.get_current_user),
):
    """
    Create a review for a stay.
    Business rules enforced:
    1. Booking must exist and belong to current user.
    2. Booking status must be completed or check_out date must be in the past.
    3. No existing review for this booking.
    """
    booking = db.query(models.Booking).filter(models.Booking.id == review_in.booking_id).first()
    if not booking:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail="Booking not found",
        )

    if booking.guest_id != current_user.id:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="You can only review stays you booked",
        )

    # Check if stay is finished
    if booking.check_out >= date.today() and booking.status != "completed":
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="You can only leave a review after your stay has completed",
        )

    # Check for existing review
    existing = db.query(models.Review).filter(models.Review.booking_id == booking.id).first()
    if existing:
        raise HTTPException(
            status_code=status.HTTP_409_CONFLICT,
            detail="A review has already been submitted for this booking",
        )

    review = models.Review(
        listing_id=booking.listing_id,
        booking_id=booking.id,
        guest_id=current_user.id,
        rating=review_in.rating,
        comment=review_in.comment,
    )
    db.add(review)
    
    # Auto update booking status to completed if it was confirmed
    if booking.status == "confirmed":
        booking.status = "completed"

    db.commit()
    db.refresh(review)

    return schemas.ReviewOut(
        id=review.id,
        rating=review.rating,
        comment=review.comment,
        created_at=review.created_at,
        guest=schemas.UserOut.model_validate(current_user),
    )
