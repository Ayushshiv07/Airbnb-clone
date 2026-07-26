"""
Pydantic v2 schemas for request validation and response serialization.

Each schema group corresponds to an API domain:
  Auth → user creation, login, token response
  Listings → CRUD + search + detail with nested data
  Bookings → create + output with price snapshot
  Reviews → create + output
  Wishlist → toggle + listing cards
  Amenities → read-only
"""

from pydantic import BaseModel, Field
from datetime import date, datetime
from typing import Optional, List


# ===========================================================================
# Auth
# ===========================================================================

class UserCreate(BaseModel):
    name: str = Field(..., min_length=1, max_length=100)
    email: str = Field(..., min_length=5, max_length=255)
    password: str = Field(..., min_length=6, max_length=255)
    is_host: bool = False


class UserOut(BaseModel):
    id: int
    name: str
    email: str
    is_host: bool
    avatar_url: Optional[str] = None
    bio: Optional[str] = None
    is_superhost: bool = False
    created_at: datetime

    model_config = {"from_attributes": True}


class LoginRequest(BaseModel):
    email: str
    password: str


class AuthResponse(BaseModel):
    user: UserOut
    token: str


# ===========================================================================
# Amenity
# ===========================================================================

class AmenityOut(BaseModel):
    id: int
    name: str
    icon: str

    model_config = {"from_attributes": True}


# ===========================================================================
# Listing Image
# ===========================================================================

class ListingImageOut(BaseModel):
    id: int
    url: str
    position: int

    model_config = {"from_attributes": True}


class ListingImageCreate(BaseModel):
    url: str = Field(..., max_length=500)
    position: int = 0


# ===========================================================================
# Review
# ===========================================================================

class ReviewCreate(BaseModel):
    booking_id: int
    rating: int = Field(..., ge=1, le=5)
    comment: str = Field(..., min_length=1)


class ReviewOut(BaseModel):
    id: int
    rating: int
    comment: str
    created_at: datetime
    guest: UserOut

    model_config = {"from_attributes": True}


# ===========================================================================
# Listing — Card (grid/search results)
# ===========================================================================

class ListingCardOut(BaseModel):
    """Compact listing representation for grid cards and search results."""
    id: int
    title: str
    city: str
    country: str
    price_per_night: float
    property_type: str
    images: List[ListingImageOut] = []
    avg_rating: Optional[float] = None
    review_count: int = 0
    is_wishlisted: bool = False

    model_config = {"from_attributes": True}


# ===========================================================================
# Listing — Detail (full page)
# ===========================================================================

class BookedRange(BaseModel):
    """Date range of a confirmed booking — used to grey out calendar dates."""
    check_in: date
    check_out: date


class HostInfo(BaseModel):
    """Host details shown on the listing detail page."""
    id: int
    name: str
    avatar_url: Optional[str] = None
    is_superhost: bool = False
    bio: Optional[str] = None
    created_at: datetime

    model_config = {"from_attributes": True}


class ListingDetailOut(BaseModel):
    """Full listing detail including nested images, amenities, reviews, host info."""
    id: int
    host: HostInfo
    title: str
    description: str
    property_type: str
    city: str
    country: str
    address: Optional[str] = None
    latitude: Optional[float] = None
    longitude: Optional[float] = None
    price_per_night: float
    cleaning_fee: float
    service_fee_pct: float
    max_guests: int
    bedrooms: int
    beds: int
    bathrooms: float
    images: List[ListingImageOut] = []
    amenities: List[AmenityOut] = []
    reviews: List[ReviewOut] = []
    avg_rating: Optional[float] = None
    review_count: int = 0
    booked_ranges: List[BookedRange] = []
    is_wishlisted: bool = False
    created_at: datetime

    model_config = {"from_attributes": True}


# ===========================================================================
# Listing — Paginated response
# ===========================================================================

class PaginatedListings(BaseModel):
    items: List[ListingCardOut]
    total: int
    page: int
    pages: int
    page_size: int


# ===========================================================================
# Listing — Create / Update
# ===========================================================================

class ListingCreate(BaseModel):
    title: str = Field(..., min_length=1, max_length=200)
    description: str = Field(..., min_length=1)
    property_type: str = Field(..., max_length=50)
    city: str = Field(..., max_length=100)
    country: str = Field(..., max_length=100)
    address: Optional[str] = None
    latitude: Optional[float] = None
    longitude: Optional[float] = None
    price_per_night: float = Field(..., gt=0)
    cleaning_fee: float = Field(default=0.0, ge=0)
    max_guests: int = Field(..., ge=1)
    bedrooms: int = Field(..., ge=0)
    beds: int = Field(..., ge=1)
    bathrooms: float = Field(..., ge=0.5)
    amenity_ids: List[int] = []
    images: List[ListingImageCreate] = []


class ListingUpdate(BaseModel):
    title: Optional[str] = Field(default=None, max_length=200)
    description: Optional[str] = None
    property_type: Optional[str] = None
    city: Optional[str] = None
    country: Optional[str] = None
    address: Optional[str] = None
    latitude: Optional[float] = None
    longitude: Optional[float] = None
    price_per_night: Optional[float] = Field(default=None, gt=0)
    cleaning_fee: Optional[float] = Field(default=None, ge=0)
    max_guests: Optional[int] = Field(default=None, ge=1)
    bedrooms: Optional[int] = Field(default=None, ge=0)
    beds: Optional[int] = Field(default=None, ge=1)
    bathrooms: Optional[float] = Field(default=None, ge=0.5)
    amenity_ids: Optional[List[int]] = None
    images: Optional[List[ListingImageCreate]] = None


# ===========================================================================
# Booking
# ===========================================================================

class BookingCreate(BaseModel):
    listing_id: int
    check_in: date
    check_out: date
    guests_count: int = Field(..., ge=1)


class ListingSnapshot(BaseModel):
    """Minimal listing info embedded in booking responses."""
    id: int
    title: str
    city: str
    country: str
    images: List[ListingImageOut] = []
    property_type: str = ""

    model_config = {"from_attributes": True}


class BookingOut(BaseModel):
    id: int
    listing: ListingSnapshot
    guest: UserOut
    check_in: date
    check_out: date
    guests_count: int
    nightly_rate: float
    nights: int
    cleaning_fee: float
    service_fee: float
    total_price: float
    status: str
    created_at: datetime
    has_review: bool = False

    model_config = {"from_attributes": True}


# ===========================================================================
# Wishlist
# ===========================================================================

class WishlistToggle(BaseModel):
    listing_id: int


class WishlistResponse(BaseModel):
    wishlisted: bool


# ===========================================================================
# Host Dashboard
# ===========================================================================

class HostListingOut(BaseModel):
    """Listing card for the host dashboard, includes booking count."""
    id: int
    title: str
    city: str
    country: str
    price_per_night: float
    property_type: str
    images: List[ListingImageOut] = []
    booking_count: int = 0
    created_at: datetime

    model_config = {"from_attributes": True}
