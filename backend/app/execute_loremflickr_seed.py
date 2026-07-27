import sys
from app.database import SessionLocal, engine, Base
from app.models import Listing, ListingImage

PROPERTY_TYPE_KEYWORDS = {
    "Apartment":     ["apartment", "modern-interior"],
    "House":         ["house", "living-room"],
    "Villa":         ["villa", "luxury-interior"],
    "Cabin":         ["cabin", "rustic-interior"],
    "Loft":          ["loft", "industrial-interior"],
    "Cottage":       ["cottage", "cozy-interior"],
    "Penthouse":     ["penthouse", "skyline"],
    "Farmhouse":     ["farmhouse", "countryside"],
    "Treehouse":     ["treehouse", "forest"],
    "Houseboat":     ["houseboat", "lake"],
}

SHOT_TYPES = ["exterior", "living-room", "bedroom", "interior-design"]

def image_set_for_listing(listing_id: int, property_type: str, width=1200, height=800) -> list:
    """
    Returns 4 unique, thematically-consistent, permanently-stable image URLs
    for one listing using LoremFlickr keywords and lock parameter.
    Same listing_id -> same 4 URLs, forever.
    Different listing_id -> guaranteed different `lock` values -> different photos.
    """
    ptype = property_type.title() if property_type else "Apartment"
    base_keywords = PROPERTY_TYPE_KEYWORDS.get(ptype, ["house", "interior"])
    urls = []
    for i, shot in enumerate(SHOT_TYPES):
        keywords = ",".join(base_keywords + [shot])
        # lock must be a unique positive integer per (listing, photo) pair
        lock = listing_id * 10 + i
        urls.append(f"https://loremflickr.com/{width}/{height}/{keywords}?lock={lock}")
    return urls

def execute_loremflickr_seed():
    db = SessionLocal()
    listings = db.query(Listing).all()
    print(f"[*] Executing LoremFlickr Master Prompt for {len(listings)} listings...")

    # Clear existing images
    db.query(ListingImage).delete()
    db.flush()

    used_urls = set()
    for listing in listings:
        urls = image_set_for_listing(listing_id=listing.id, property_type=listing.property_type)
        for position, url in enumerate(urls):
            used_urls.add(url)
            db.add(ListingImage(listing_id=listing.id, url=url, position=position))

    db.commit()
    print(f"[SUCCESS] LoremFlickr Master Prompt Executed: {len(listings)} listings seeded with {len(used_urls)} unique themed URLs!")

if __name__ == '__main__':
    execute_loremflickr_seed()
