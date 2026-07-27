import json
from app.database import SessionLocal
from app.models import Listing

def export_all_59_listings():
    db = SessionLocal()
    listings = db.query(Listing).all()
    print(f"[*] Exporting all {len(listings)} seeded listings to frontend/lib/mockData.ts...")

    items = []
    for l in listings:
        ratings = [r.rating for r in l.reviews]
        avg_rating = round(sum(ratings) / len(ratings), 2) if ratings else 4.95
        
        item = {
            "id": l.id,
            "title": l.title,
            "city": l.city,
            "country": l.country,
            "price_per_night": l.price_per_night,
            "property_type": l.property_type,
            "avg_rating": avg_rating,
            "review_count": len(ratings) if ratings else 24,
            "is_wishlisted": False,
            "images": [{"id": img.id, "url": img.url, "position": img.position} for img in l.images],
            "description": l.description,
            "address": l.address or f"{l.city} Central District",
            "latitude": l.latitude,
            "longitude": l.longitude,
            "cleaning_fee": l.cleaning_fee or 50.0,
            "service_fee_pct": 14.0,
            "max_guests": l.max_guests,
            "bedrooms": l.bedrooms,
            "beds": l.beds,
            "bathrooms": l.bathrooms,
            "host": {
                "id": l.host.id if l.host else 1,
                "name": l.host.name if l.host else "Emily Chen",
                "email": l.host.email if l.host else "host1@demo.com",
                "phone": "+1 (555) 234-5678",
                "avatar_url": l.host.avatar_url if l.host else "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200",
                "is_superhost": getattr(l.host, "is_superhost", True),
                "bio": getattr(l.host, "bio", "Superhost for over 5 years. Dedicated to exceptional guest stays."),
                "created_at": "2021-03-15T00:00:00Z"
            },
            "amenities": [{"id": a.id, "name": a.name, "icon": a.icon} for a in l.amenities],
            "reviews": [
                {
                    "id": r.id,
                    "rating": r.rating,
                    "comment": r.comment,
                    "created_at": "2024-05-10T00:00:00Z",
                    "guest": {
                        "id": r.guest_id,
                        "name": "Michael R.",
                        "email": "guest1@demo.com",
                        "is_host": False,
                        "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
                        "is_superhost": False,
                        "created_at": "2022-01-01T00:00:00Z"
                    }
                }
                for r in l.reviews
            ],
            "booked_ranges": []
        }
        items.append(item)

    file_content = (
        'import { ListingCard, ListingDetail } from "./types";\n\n'
        'export const MOCK_LISTINGS: ListingDetail[] = ' + json.dumps(items, indent=2) + ';\n\n'
        'export function getMockListingDetail(id: number): ListingDetail {\n'
        '  const found = MOCK_LISTINGS.find((l) => l.id === id);\n'
        '  if (found) return found;\n'
        '  return MOCK_LISTINGS[0];\n'
        '}\n'
    )

    with open('../frontend/lib/mockData.ts', 'w', encoding='utf-8') as f:
        f.write(file_content)

    print(f"[SUCCESS] Exported all {len(items)} listings to frontend/lib/mockData.ts!")

if __name__ == '__main__':
    export_all_59_listings()
