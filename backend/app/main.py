"""
FastAPI Main Application entrypoint for Airbnb Clone backend.

Features:
- CORS middleware enabled for localhost and 127.0.0.1 origins
- Database initialization and auto-seeding on startup
- Routers included under /api prefix: auth, listings, bookings, reviews, wishlist, amenities
"""

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from contextlib import asynccontextmanager

from .database import engine, Base
from .seed import seed_database
from .routers import auth, listings, bookings, reviews, wishlist, amenities


@asynccontextmanager
async def lifespan(app: FastAPI):
    """
    Application lifespan context manager: runs startup and shutdown tasks.
    Creates DB tables and runs seed_database() on startup if DB is empty.
    """
    print("[*] Starting Airbnb Clone Backend...")
    Base.metadata.create_all(bind=engine)
    seed_database()
    yield
    print("[*] Shutting down Airbnb Clone Backend...")


app = FastAPI(
    title="Airbnb Clone API",
    description="Full-stack Airbnb Clone backend API built with FastAPI, SQLAlchemy, and SQLite.",
    version="1.0.0",
    lifespan=lifespan,
)

# Configure CORS (allow_credentials=True requires explicit origins/regex, not wildcard "*")
origins = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
    "http://localhost:3001",
    "http://127.0.0.1:3001",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_origin_regex=r"http://(localhost|127\.0\.0\.1)(:\d+)?",
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include all API routers under /api prefix
app.include_router(auth.router, prefix="/api")
app.include_router(listings.router, prefix="/api")
app.include_router(bookings.router, prefix="/api")
app.include_router(reviews.router, prefix="/api")
app.include_router(wishlist.router, prefix="/api")
app.include_router(amenities.router, prefix="/api")


@app.get("/api/health", tags=["Health"])
def health_check():
    """Health check endpoint to verify backend status."""
    return {"status": "ok", "service": "Airbnb Clone API"}
