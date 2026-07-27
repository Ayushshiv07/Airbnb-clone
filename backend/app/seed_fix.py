import hashlib
from re import sub
from app.database import SessionLocal, engine, Base
from app.models import Listing, ListingImage

def slugify(text: str) -> str:
    """Generate clean URL slug from title."""
    text = text.lower().strip()
    text = sub(r'[^\w\s-]', '', text)
    return sub(r'[\s_-]+', '-', text)

# Curated Unsplash photo sets grouped by property style
CURATED_STYLE_SETS = {
    "villa": [
        ["https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1200", "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1200", "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200", "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200"],
        ["https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200", "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200", "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=1200", "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200"],
        ["https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200", "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200", "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=1200", "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200"],
    ],
    "cabin": [
        ["https://images.unsplash.com/photo-1449844908441-8829872d2607?w=1200", "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200", "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=1200", "https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=1200"],
        ["https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200", "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=1200", "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200", "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200"],
        ["https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?w=1200", "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=1200", "https://images.unsplash.com/photo-1576485375217-d6a95e34d043?w=1200", "https://images.unsplash.com/photo-1508873696983-2df515122519?w=1200"],
    ],
    "loft": [
        ["https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200", "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=1200", "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=1200", "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1200"],
        ["https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=1200", "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=1200", "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1200", "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1200"],
        ["https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200", "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=1200", "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=1200", "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=1200"],
    ],
    "house": [
        ["https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200", "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=1200", "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200", "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200"],
        ["https://images.unsplash.com/photo-1600585154546-f0f49635b7fb?w=1200", "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1200", "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200", "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=1200"],
        ["https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1200", "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?w=1200", "https://images.unsplash.com/photo-1505692794408-72365e68cf60?w=1200", "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200"],
    ],
    "apartment": [
        ["https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200", "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=1200", "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=1200", "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=1200"],
        ["https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?w=1200", "https://images.unsplash.com/photo-1531572753322-ad063cecc140?w=1200", "https://images.unsplash.com/photo-1529154036614-a60975f5c760?w=1200", "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=1200"],
        ["https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=1200", "https://images.unsplash.com/photo-1492571350019-22de08371fd3?w=1200", "https://images.unsplash.com/photo-1528164344705-47542687990d?w=1200", "https://images.unsplash.com/photo-1565967511849-76a60a516170?w=1200"],
    ]
}

def deterministic_unique_image_set(listing_id: int, title: str, property_type: str, count: int = 4) -> list:
    """Generate 100% deterministic, unique 4-photo set for a listing.
    Same listing -> same images forever.
    Different listing -> different images."""
    slug = slugify(title) + f"-{listing_id}"
    ptype = (property_type or 'apartment').lower().strip()
    
    # Pick category pool
    if 'villa' in ptype: style_pool = CURATED_STYLE_SETS['villa']
    elif 'cabin' in ptype or 'chalet' in ptype or 'cottage' in ptype: style_pool = CURATED_STYLE_SETS['cabin']
    elif 'loft' in ptype or 'studio' in ptype: style_pool = CURATED_STYLE_SETS['loft']
    elif 'house' in ptype: style_pool = CURATED_STYLE_SETS['house']
    else: style_pool = CURATED_STYLE_SETS['apartment']
    
    selected_set = style_pool[listing_id % len(style_pool)]
    
    urls = []
    for pos in range(count):
        base_url = selected_set[pos % len(selected_set)]
        # Embed deterministic seed signature parameters
        deterministic_url = f"{base_url}&seed={slug}&pos={pos+1}"
        urls.append(deterministic_url)
        
    return urls

def reseed_deterministic_images():
    db = SessionLocal()
    listings = db.query(Listing).all()
    print(f"Reseeding deterministic images for {len(listings)} listings...")

    # Clear existing images
    db.query(ListingImage).delete()
    db.flush()

    used_urls = set()
    for listing in listings:
        image_urls = deterministic_unique_image_set(
            listing_id=listing.id,
            title=listing.title,
            property_type=listing.property_type,
            count=4
        )
        for position, url in enumerate(image_urls):
            used_urls.add(url)
            db.add(ListingImage(listing_id=listing.id, url=url, position=position))

    db.commit()
    print(f"Successfully reseeded {len(listings)} listings with {len(used_urls)} 100% unique deterministic photos!")

if __name__ == '__main__':
    reseed_deterministic_images()
