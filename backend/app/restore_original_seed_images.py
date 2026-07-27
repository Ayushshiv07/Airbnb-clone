import sys
from app.database import SessionLocal, engine, Base
from app.models import Listing, ListingImage
from app.seed import seed_database

def restore_original_images():
    db = SessionLocal()
    
    # Check if database has listings
    listings = db.query(Listing).all()
    print(f"[*] Restoring original curated photo galleries for all {len(listings)} listings...")

    # Clear ListingImage table completely
    db.query(ListingImage).delete()
    db.flush()

    # Re-populate images using exact property-matched photo sets from seed definitions
    # Map title to curated image list
    photo_map = {
        # New York
        "Stunning Manhattan Loft with Skyline Views": [
            "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800",
            "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800",
            "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
            "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800"
        ],
        "Cozy Brooklyn Brownstone Apartment": [
            "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800",
            "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=800",
            "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800",
            "https://images.unsplash.com/photo-1560185008-a33f5c7b1844?w=800"
        ],
        "Luxury Penthouse near Times Square": [
            "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
            "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800"
        ],
        "Artist's Studio in SoHo": [
            "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800",
            "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800",
            "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800",
            "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800"
        ],
        # Paris
        "Elegant Parisian Apartment near Eiffel Tower": [
            "https://images.unsplash.com/photo-1549638441-b787d2e11f14?w=800",
            "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800",
            "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800",
            "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?w=800"
        ],
        "Charming Montmartre Studio with Sacré-Cœur View": [
            "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800",
            "https://images.unsplash.com/photo-1600573472591-ee6981cf81d6?w=800",
            "https://images.unsplash.com/photo-1560448075-cbc16bb4af8e?w=800",
            "https://images.unsplash.com/photo-1564078516393-cf04bd966897?w=800"
        ],
        "Le Marais Luxury Townhouse": [
            "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
            "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800",
            "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800",
            "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=800"
        ],
        "Saint-Germain Writer's Retreat": [
            "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=800",
            "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800",
            "https://images.unsplash.com/photo-1600585153490-76fb20a32601?w=800",
            "https://images.unsplash.com/photo-1600566752447-f4e9e9e2a6c8?w=800"
        ],
        # Tokyo
        "Modern Shibuya Apartment with City Views": [
            "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800",
            "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800",
            "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800",
            "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=800"
        ],
        "Traditional Asakusa Machiya Townhouse": [
            "https://images.unsplash.com/photo-1480796927426-f609979314bd?w=800",
            "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
            "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=800"
        ],
        "Minimalist Shinjuku Studio": [
            "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800",
            "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800",
            "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
            "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800"
        ],
        "Roppongi Hills Designer Condo": [
            "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800",
            "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800",
            "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800",
            "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800"
        ],
        # Barcelona
        "Gothic Quarter Penthouse with Terrace": [
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800",
            "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=800",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
            "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800"
        ],
        "Beachfront Villa in Barceloneta": [
            "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800",
            "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800"
        ],
        "Eixample Modernist Flat": [
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
            "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800",
            "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=800",
            "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800"
        ],
        # Bali
        "Ubud Jungle Villa with Infinity Pool": [
            "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800",
            "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800",
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800"
        ],
        "Seminyak Beach Cabana": [
            "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800",
            "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800",
            "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800",
            "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800"
        ],
        "Canggu Surf House with Rooftop": [
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
            "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800",
            "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=800",
            "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800"
        ]
    }

    # Backup realistic photo sets for any listing without explicit map
    backup_sets = [
        ["https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800", "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800", "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800", "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800"],
        ["https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800", "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800", "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800", "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800"],
        ["https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800", "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800", "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800", "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800"],
        ["https://images.unsplash.com/photo-1449844908441-8829872d2607?w=800", "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800", "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=800", "https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=800"],
        ["https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800", "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800", "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800", "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800"],
    ]

    total_added = 0
    for l_idx, l in enumerate(listings):
        images = photo_map.get(l.title)
        if not images:
            images = backup_sets[l_idx % len(backup_sets)]

        for pos, base_url in enumerate(images):
            # Unique signature per listing so browser cache never clashes
            final_url = f"{base_url}&id={l.id}&p={pos+1}"
            db.add(ListingImage(listing_id=l.id, url=final_url, position=pos))
            total_added += 1

    db.commit()
    print(f"[SUCCESS] Restored original gallery photos for all {len(listings)} listings (Total images: {total_added})!")

if __name__ == '__main__':
    restore_original_images()
