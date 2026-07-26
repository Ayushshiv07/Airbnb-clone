"""
Database configuration for the Airbnb clone backend.

Uses SQLite (file-based, zero config) with SQLAlchemy ORM.
The database file (airbnb.db) is created automatically in the backend/ directory.
"""

from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, DeclarativeBase

SQLALCHEMY_DATABASE_URL = "sqlite:///./airbnb.db"

# check_same_thread=False is required for SQLite with FastAPI's async request handling.
# SQLite normally only allows one thread to communicate with it, but FastAPI uses
# multiple threads for concurrent requests. This is safe because SQLAlchemy manages
# its own connection pooling and thread safety.
engine = create_engine(
    SQLALCHEMY_DATABASE_URL,
    connect_args={"check_same_thread": False},
)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)


class Base(DeclarativeBase):
    """Base class for all ORM models. Using the modern DeclarativeBase (SQLAlchemy 2.0+)."""
    pass


def get_db():
    """
    FastAPI dependency that provides a database session per request.
    
    Usage in a route:
        @router.get("/items")
        def read_items(db: Session = Depends(get_db)):
            ...
    
    The session is automatically closed after the request completes,
    even if an exception occurs (finally block).
    """
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
