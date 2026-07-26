"""
Mocked authentication for the Airbnb clone.

Token format: base64(user_id:email)
This is intentionally simple — NOT production-grade auth.

In production you would use:
  - bcrypt/argon2 for password hashing
  - JWT with proper signing key, expiration, refresh tokens
  - HTTPS-only cookies or secure token storage

This mock keeps the *shape* of real auth (Bearer token, /me endpoint,
protected routes) so the code reads as intentional, not skipped.
"""

import base64
from typing import Optional

from fastapi import Depends, HTTPException, status
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from sqlalchemy.orm import Session

from .database import get_db
from . import models

# HTTPBearer extracts "Authorization: Bearer <token>" header.
# auto_error=False means it returns None instead of 403 when header is missing.
security = HTTPBearer(auto_error=False)


def create_token(user: models.User) -> str:
    """
    Create a mock auth token by base64-encoding 'user_id:email'.
    
    Example: User(id=1, email='host@demo.com') → 'MTpob3N0QGRlbW8uY29t'
    
    Why base64 and not a plain string?
    It looks like a real token to the frontend, making the mock more realistic.
    """
    payload = f"{user.id}:{user.email}"
    return base64.b64encode(payload.encode()).decode()


def decode_token(token: str) -> tuple[int, str]:
    """
    Decode a mock token back to (user_id, email).
    Raises ValueError if the token format is invalid.
    """
    try:
        decoded = base64.b64decode(token.encode()).decode()
        parts = decoded.split(":", 1)
        if len(parts) != 2:
            raise ValueError("Invalid token structure")
        user_id = int(parts[0])
        email = parts[1]
        return user_id, email
    except Exception as e:
        raise ValueError(f"Invalid token: {e}")


async def get_current_user(
    credentials: HTTPAuthorizationCredentials = Depends(security),
    db: Session = Depends(get_db),
) -> models.User:
    """
    FastAPI dependency: extracts and validates the Bearer token.
    
    Used on protected endpoints:
        @router.post("/bookings")
        def create_booking(user: models.User = Depends(get_current_user)):
            ...
    
    Returns the authenticated User model instance.
    Raises 401 if token is missing, malformed, or references a non-existent user.
    """
    if credentials is None:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Authentication required",
            headers={"WWW-Authenticate": "Bearer"},
        )

    try:
        user_id, email = decode_token(credentials.credentials)
    except ValueError:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid authentication token",
            headers={"WWW-Authenticate": "Bearer"},
        )

    # Verify the user actually exists in the database.
    # Both id AND email must match — prevents token reuse after email change.
    user = db.query(models.User).filter(
        models.User.id == user_id,
        models.User.email == email,
    ).first()

    if user is None:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="User not found — token may be expired or invalid",
            headers={"WWW-Authenticate": "Bearer"},
        )

    return user


async def get_current_host(
    user: models.User = Depends(get_current_user),
) -> models.User:
    """
    FastAPI dependency: requires the current user to be a host.
    
    Wraps get_current_user, then checks is_host flag.
    Used on host-only endpoints (create/edit/delete listings, host dashboard).
    
    Raises 403 Forbidden if the authenticated user is not a host.
    """
    if not user.is_host:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Host access required. Switch to host mode or register as a host.",
        )
    return user


async def get_optional_user(
    credentials: HTTPAuthorizationCredentials = Depends(security),
    db: Session = Depends(get_db),
) -> Optional[models.User]:
    """
    FastAPI dependency: returns the authenticated user or None.
    
    Used for public endpoints that optionally personalize content:
    - Listing cards show filled/unfilled wishlist heart
    - Listing detail shows wishlist status
    
    Never raises an exception — gracefully returns None for unauthenticated requests.
    """
    if credentials is None:
        return None

    try:
        user_id, email = decode_token(credentials.credentials)
    except ValueError:
        return None

    return db.query(models.User).filter(
        models.User.id == user_id,
        models.User.email == email,
    ).first()
