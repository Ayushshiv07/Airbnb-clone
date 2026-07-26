"""
Auth router for user registration, login, and profile fetching.
"""

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session

from ..database import get_db
from .. import models, schemas, auth

router = APIRouter(prefix="/auth", tags=["Auth"])


@router.post("/register", response_model=schemas.AuthResponse, status_code=status.HTTP_201_CREATED)
def register(user_in: schemas.UserCreate, db: Session = Depends(get_db)):
    """Register a new user (guest or host). Returns user profile and mock auth token."""
    existing_user = db.query(models.User).filter(models.User.email == user_in.email).first()
    if existing_user:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Email address is already registered",
        )

    user = models.User(
        name=user_in.name,
        email=user_in.email,
        password=user_in.password,  # Plaintext in mock auth
        is_host=user_in.is_host,
    )
    db.add(user)
    db.commit()
    db.refresh(user)

    token = auth.create_token(user)
    return schemas.AuthResponse(user=schemas.UserOut.model_validate(user), token=token)


@router.post("/login", response_model=schemas.AuthResponse)
def login(credentials: schemas.LoginRequest, db: Session = Depends(get_db)):
    """Authenticate user with email and password. Returns user profile and mock auth token."""
    user = db.query(models.User).filter(models.User.email == credentials.email).first()
    if not user or user.password != credentials.password:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid email or password",
        )

    token = auth.create_token(user)
    return schemas.AuthResponse(user=schemas.UserOut.model_validate(user), token=token)


@router.get("/me", response_model=schemas.UserOut)
def get_me(current_user: models.User = Depends(auth.get_current_user)):
    """Get current authenticated user's profile."""
    return current_user
