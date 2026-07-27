import re
from app.database import SessionLocal, engine, Base
from app.models import Listing, ListingImage

def slugify(text: str) -> str:
    """Generate clean URL slug from title."""
    text = text.lower().strip()
    text = re.sub(r'[^\w\s-]', '', text)
    return re.sub(r'[\s_-]+', '-', text)

def image_set_for_listing(slug: str, count: int = 4) -> list:
    """
    Deterministic, unique 4-photo set for a listing using Picsum Photos seed API.
    Same slug -> same images, forever. Different slug -> different images.
    No API key required, 100% stable, zero deprecation risk.
    """
    urls = []
    for i in range(1, count + 1):
        seed = f"{slug}-{i}"
        urls.append(f"https://picsum.photos/seed/{seed}/1200/800")
    return urls

def execute_picsum_seed():
    db = SessionLocal()
    listings = db.query(Listing).all()
    print(f"[*] Executing Master Prompt Step 2 (Picsum Seeded Photos) for {len(listings)} listings...")

    # Clear existing images
    db.query(ListingImage).delete()
    db.flush()

    used_urls = set()
    for listing in listings:
        slug = slugify(listing.title) + f"-{listing.id}"
        urls = image_set_for_listing(slug=slug, count=4)
        for position, url in enumerate(urls):
            used_urls.add(url)
            db.add(ListingImage(listing_id=listing.id, url=url, position=position))

    db.commit()
    print(f"[SUCCESS] Master Prompt Step 2 Completed: {len(listings)} listings seeded with {len(used_urls)} 100% unique deterministic Picsum URLs!")

if __name__ == '__main__':
    execute_picsum_seed()
