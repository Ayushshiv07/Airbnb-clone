"""
SQLAlchemy ORM models for the Airbnb clone.

Schema design rationale:
- User is one table for guests and hosts, distinguished by is_host flag.
  Mirrors how Airbnb accounts work: every host is also a guest.
- Listing -> ListingImage is one-to-many, photos stored as URLs, ordered by position.
- Listing <-> Amenity is many-to-many via listing_amenities association table.
- Availability has NO separate "blocked dates" table. It's derived by querying
  Booking rows with status='confirmed' that overlap a requested range.
  Single source of truth, no sync bugs.
- Review references a Booking (not just guest+listing), so a review can only
  exist for a stay that actually happened.
- Wishlist is a simple User <-> Listing join table.
"""

from sqlalchemy import (
    Column, Integer, String, Float, Boolean, DateTime, Date,
    ForeignKey, Table, Text, UniqueConstraint,
)
from sqlalchemy.orm import relationship
from datetime import datetime, timezone

from .database import Base


# ---------------------------------------------------------------------------
# Many-to-many association table: Listing <-> Amenity
# ---------------------------------------------------------------------------
listing_amenities = Table(
    "listing_amenities",
    Base.metadata,
    Column("listing_id", Integer, ForeignKey("listings.id", ondelete="CASCADE"), primary_key=True),
    Column("amenity_id", Integer, ForeignKey("amenities.id", ondelete="CASCADE"), primary_key=True),
)


def _utcnow():
    """Timezone-aware UTC timestamp factory for column defaults."""
    return datetime.now(timezone.utc)


# ---------------------------------------------------------------------------
# User
# ---------------------------------------------------------------------------
class User(Base):
    """
    Single table for both guests and hosts.
    Every Airbnb host is also a guest — the is_host flag simply unlocks
    host-specific features (create listings, host dashboard).
    """
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100), nullable=False)
    email = Column(String(255), unique=True, index=True, nullable=False)
    password = Column(String(255), nullable=False)  # Plaintext — mocked auth (see README)
    is_host = Column(Boolean, default=False)
    avatar_url = Column(String(500), nullable=True)
    bio = Column(Text, nullable=True)
    is_superhost = Column(Boolean, default=False)
    created_at = Column(DateTime, default=_utcnow)

    # Relationships
    listings = relationship("Listing", back_populates="host", cascade="all, delete-orphan")
    bookings = relationship("Booking", back_populates="guest", cascade="all, delete-orphan")
    reviews = relationship("Review", back_populates="guest")
    wishlists = relationship("Wishlist", back_populates="user", cascade="all, delete-orphan")


# ---------------------------------------------------------------------------
# Listing
# ---------------------------------------------------------------------------
class Listing(Base):
    __tablename__ = "listings"

    id = Column(Integer, primary_key=True, index=True)
    host_id = Column(Integer, ForeignKey("users.id", ondelete="CASCADE"), nullable=False)
    title = Column(String(200), nullable=False)
    description = Column(Text, nullable=False)
    property_type = Column(String(50), nullable=False)  # Apartment | House | Villa | Cabin | Loft
    city = Column(String(100), nullable=False)
    country = Column(String(100), nullable=False)
    address = Column(String(300), nullable=True)
    latitude = Column(Float, nullable=True)
    longitude = Column(Float, nullable=True)
    price_per_night = Column(Float, nullable=False)
    cleaning_fee = Column(Float, default=0.0)
    service_fee_pct = Column(Float, default=0.12)  # 12% Airbnb service fee
    max_guests = Column(Integer, nullable=False)
    bedrooms = Column(Integer, nullable=False)
    beds = Column(Integer, nullable=False)
    bathrooms = Column(Float, nullable=False)  # Float allows "1.5 bathrooms"
    created_at = Column(DateTime, default=_utcnow)

    # Relationships
    host = relationship("User", back_populates="listings")
    images = relationship(
        "ListingImage",
        back_populates="listing",
        order_by="ListingImage.position",
        cascade="all, delete-orphan",
    )
    amenities = relationship("Amenity", secondary=listing_amenities, back_populates="listings")
    bookings = relationship("Booking", back_populates="listing", cascade="all, delete-orphan")
    reviews = relationship("Review", back_populates="listing", cascade="all, delete-orphan")
    wishlists = relationship("Wishlist", back_populates="listing", cascade="all, delete-orphan")


# ---------------------------------------------------------------------------
# ListingImage
# ---------------------------------------------------------------------------
class ListingImage(Base):
    __tablename__ = "listing_images"

    id = Column(Integer, primary_key=True, index=True)
    listing_id = Column(Integer, ForeignKey("listings.id", ondelete="CASCADE"), nullable=False)
    url = Column(String(500), nullable=False)
    position = Column(Integer, default=0)  # 0 = primary/cover image

    listing = relationship("Listing", back_populates="images")


# ---------------------------------------------------------------------------
# Amenity
# ---------------------------------------------------------------------------
class Amenity(Base):
    """
    Amenities shared across listings via many-to-many.
    The icon field stores a lucide-react icon name for frontend rendering.
    """
    __tablename__ = "amenities"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100), unique=True, nullable=False)
    icon = Column(String(50), nullable=False)  # e.g. "wifi", "car", "waves"

    listings = relationship("Listing", secondary=listing_amenities, back_populates="amenities")


# ---------------------------------------------------------------------------
# Booking
# ---------------------------------------------------------------------------
class Booking(Base):
    """
    Bookings snapshot pricing at creation time — nightly_rate, cleaning_fee,
    service_fee, and total_price are all captured at booking, never recomputed.
    
    Availability is derived from confirmed bookings (no separate blocked-dates table).
    Overlap check: [a_in, a_out) and [b_in, b_out) overlap iff a_in < b_out AND b_in < a_out.
    This is enforced in the booking-creation endpoint inside a transaction.
    """
    __tablename__ = "bookings"

    id = Column(Integer, primary_key=True, index=True)
    listing_id = Column(Integer, ForeignKey("listings.id", ondelete="CASCADE"), nullable=False)
    guest_id = Column(Integer, ForeignKey("users.id", ondelete="CASCADE"), nullable=False)
    check_in = Column(Date, nullable=False)
    check_out = Column(Date, nullable=False)
    guests_count = Column(Integer, nullable=False)
    # ----- Price snapshot (computed server-side at booking time) -----
    nightly_rate = Column(Float, nullable=False)
    nights = Column(Integer, nullable=False)
    cleaning_fee = Column(Float, nullable=False)
    service_fee = Column(Float, nullable=False)
    total_price = Column(Float, nullable=False)
    # ----------------------------------------------------------------
    status = Column(String(20), default="confirmed")  # confirmed | cancelled | completed
    created_at = Column(DateTime, default=_utcnow)

    # Relationships
    listing = relationship("Listing", back_populates="bookings")
    guest = relationship("User", back_populates="bookings")
    review = relationship("Review", back_populates="booking", uselist=False)


# ---------------------------------------------------------------------------
# Review
# ---------------------------------------------------------------------------
class Review(Base):
    """
    Reviews reference a Booking (not just guest+listing).
    This ensures a review can only exist for a stay that actually happened.
    booking_id has a unique constraint — one review per booking.
    """
    __tablename__ = "reviews"

    id = Column(Integer, primary_key=True, index=True)
    listing_id = Column(Integer, ForeignKey("listings.id", ondelete="CASCADE"), nullable=False)
    booking_id = Column(Integer, ForeignKey("bookings.id", ondelete="CASCADE"), unique=True, nullable=False)
    guest_id = Column(Integer, ForeignKey("users.id", ondelete="CASCADE"), nullable=False)
    rating = Column(Integer, nullable=False)  # 1–5
    comment = Column(Text, nullable=False)
    created_at = Column(DateTime, default=_utcnow)

    # Relationships
    listing = relationship("Listing", back_populates="reviews")
    booking = relationship("Booking", back_populates="review")
    guest = relationship("User", back_populates="reviews")


# ---------------------------------------------------------------------------
# Wishlist
# ---------------------------------------------------------------------------
class Wishlist(Base):
    """Simple join table: User saves Listing to wishlist. Unique per (user, listing)."""
    __tablename__ = "wishlists"

    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(Integer, ForeignKey("users.id", ondelete="CASCADE"), nullable=False)
    listing_id = Column(Integer, ForeignKey("listings.id", ondelete="CASCADE"), nullable=False)
    created_at = Column(DateTime, default=_utcnow)

    user = relationship("User", back_populates="wishlists")
    listing = relationship("Listing", back_populates="wishlists")

    __table_args__ = (
        UniqueConstraint("user_id", "listing_id", name="uq_user_listing_wishlist"),
    )
