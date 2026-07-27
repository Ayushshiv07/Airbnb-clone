import sqlite3
import reprlib
import pprint
import os

def export_db_to_seed():
    db_path = os.path.join(os.path.dirname(__file__), '..', 'airbnb.db')
    if not os.path.exists(db_path):
        print(f"[ERROR] Database file not found at {db_path}")
        return

    conn = sqlite3.connect(db_path)
    conn.row_factory = sqlite3.Row
    cur = conn.cursor()

    amenities = [dict(r) for r in cur.execute('SELECT id, name, icon FROM amenities ORDER BY id').fetchall()]
    users = [dict(r) for r in cur.execute('SELECT id, name, email, password, is_host, avatar_url, bio, is_superhost FROM users ORDER BY id').fetchall()]
    listings = [dict(r) for r in cur.execute('SELECT * FROM listings ORDER BY id').fetchall()]
    images = [dict(r) for r in cur.execute('SELECT listing_id, url, position FROM listing_images ORDER BY id').fetchall()]

    la_map = {}
    for la in cur.execute('SELECT listing_id, amenity_id FROM listing_amenities').fetchall():
        la_map.setdefault(la[0], []).append(la[1])

    img_map = {}
    for img in images:
        img_map.setdefault(img['listing_id'], []).append({'url': img['url'], 'position': img['position']})

    reviews = [dict(r) for r in cur.execute('SELECT listing_id, guest_id, rating, comment, created_at FROM reviews ORDER BY id').fetchall()]

    seed_file_path = os.path.join(os.path.dirname(__file__), 'seed.py')

    content = f'''"""
Seed script — populates database with ALL 59 unique accommodations, 236 images, and 177 reviews.
Automatically called on startup from main.py if DB is empty or missing listings.
"""

from datetime import datetime
from .database import SessionLocal, engine, Base
from .models import User, Listing, ListingImage, Amenity, Review, listing_amenities

AMENITIES_DATA = {pprint.pformat(amenities, indent=4)}

USERS_DATA = {pprint.pformat(users, indent=4)}

LISTINGS_DATA = {pprint.pformat(listings, indent=4)}

LA_MAP = {pprint.pformat(la_map, indent=4)}

IMG_MAP = {pprint.pformat(img_map, indent=4)}

REVIEWS_DATA = {pprint.pformat(reviews, indent=4)}


def seed_database():
    Base.metadata.create_all(bind=engine)
    db = SessionLocal()

    try:
        if db.query(Listing).count() >= 59:
            print("[*] Database already has 59 listings. Skipping seed.")
            return

        print("[*] Seeding Airbnb Clone Database with all 59 listings...")

        # Clear partial data if needed
        db.query(Review).delete()
        db.query(ListingImage).delete()
        db.execute(listing_amenities.delete())
        db.query(Listing).delete()
        db.query(User).delete()
        db.query(Amenity).delete()
        db.commit()

        # Seed Amenities
        amenity_obj_map = {{}}
        for a in AMENITIES_DATA:
            obj = Amenity(id=a['id'], name=a['name'], icon=a['icon'])
            db.add(obj)
            amenity_obj_map[a['id']] = obj
        db.flush()

        # Seed Users
        user_obj_map = {{}}
        for u in USERS_DATA:
            obj = User(
                id=u['id'],
                name=u['name'],
                email=u['email'],
                password=u['password'],
                is_host=u['is_host'],
                avatar_url=u['avatar_url'],
                bio=u['bio'],
                is_superhost=u['is_superhost']
            )
            db.add(obj)
            user_obj_map[u['id']] = obj
        db.flush()

        # Seed Listings
        listing_obj_map = {{}}
        for l in LISTINGS_DATA:
            obj = Listing(
                id=l['id'],
                host_id=l['host_id'],
                title=l['title'],
                description=l['description'],
                property_type=l['property_type'],
                city=l['city'],
                country=l['country'],
                address=l['address'],
                latitude=l['latitude'],
                longitude=l['longitude'],
                price_per_night=l['price_per_night'],
                cleaning_fee=l['cleaning_fee'],
                service_fee_pct=l['service_fee_pct'],
                max_guests=l['max_guests'],
                bedrooms=l['bedrooms'],
                beds=l['beds'],
                bathrooms=l['bathrooms']
            )
            db.add(obj)
            listing_obj_map[l['id']] = obj

            # Amenities
            a_ids = LA_MAP.get(str(l['id'])) or LA_MAP.get(l['id']) or []
            for a_id in a_ids:
                if a_id in amenity_obj_map:
                    obj.amenities.append(amenity_obj_map[a_id])

        db.flush()

        # Seed Images
        for l_id_str, imgs in IMG_MAP.items():
            l_id = int(l_id_str)
            for img in imgs:
                img_obj = ListingImage(listing_id=l_id, url=img['url'], position=img['position'])
                db.add(img_obj)

        db.flush()

        # Seed Reviews
        for r in REVIEWS_DATA:
            rev_obj = Review(
                listing_id=r['listing_id'],
                guest_id=r['guest_id'],
                rating=r['rating'],
                comment=r['comment']
            )
            db.add(rev_obj)

        db.commit()
        print("[OK] Successfully seeded all 59 listings, 236 images, and 177 reviews!")

    except Exception as e:
        db.rollback()
        print(f"[ERROR] Seed failed: {{e}}")
    finally:
        db.close()


if __name__ == "__main__":
    seed_database()
'''

    with open(seed_file_path, 'w', encoding='utf-8') as f:
        f.write(content)

    print(f"[SUCCESS] Exported DB to {seed_file_path}")

if __name__ == "__main__":
    export_db_to_seed()
