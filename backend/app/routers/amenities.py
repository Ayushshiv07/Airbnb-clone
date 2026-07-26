"""
Amenities router for fetching available property amenities.
"""

from typing import List
from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from ..database import get_db
from .. import models, schemas

router = APIRouter(prefix="/amenities", tags=["Amenities"])


@router.get("/", response_model=List[schemas.AmenityOut])
def get_amenities(db: Session = Depends(get_db)):
    """Get all amenities available in the system."""
    return db.query(models.Amenity).all()
