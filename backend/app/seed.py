"""
Seed script — populates the database with demo data on first startup.

Includes:
  - 10 amenities with lucide-react icon names
  - 5 host users + 3 guest users (clearly labeled credentials)
  - 18 listings across 5 cities with 3–5 images each
  - ~15 bookings (mix of past/current/future)
  - ~8 reviews on completed bookings

Run: automatically called from main.py on startup if DB is empty.
Manual: python -m app.seed
"""

from datetime import date, datetime, timezone, timedelta
from sqlalchemy.orm import Session
from .database import SessionLocal, engine, Base
from .models import User, Listing, ListingImage, Amenity, Booking, Review, listing_amenities


def seed_database():
    """Main seed function. Idempotent — skips if data already exists."""
    Base.metadata.create_all(bind=engine)
    db = SessionLocal()

    try:
        # Skip if already seeded
        if db.query(User).count() > 0:
            return

        print("\n" + "=" * 60)
        print("[*] Seeding Airbnb Clone Database...")
        print("=" * 60)

        # ==================================================================
        # AMENITIES
        # ==================================================================
        amenities_data = [
            {"name": "WiFi", "icon": "wifi"},
            {"name": "Kitchen", "icon": "cooking-pot"},
            {"name": "Free parking", "icon": "car"},
            {"name": "Pool", "icon": "waves"},
            {"name": "Air conditioning", "icon": "snowflake"},
            {"name": "Washer", "icon": "washing-machine"},
            {"name": "TV", "icon": "tv"},
            {"name": "Workspace", "icon": "laptop"},
            {"name": "Pet friendly", "icon": "paw-print"},
            {"name": "Hot tub", "icon": "bath"},
        ]
        amenities = []
        for a_data in amenities_data:
            amenity = Amenity(**a_data)
            db.add(amenity)
            amenities.append(amenity)
        db.flush()

        # ==================================================================
        # USERS
        # ==================================================================
        hosts = []
        guests = []

        hosts_data = [
            {
                "name": "Sarah Johnson",
                "email": "host1@demo.com",
                "password": "password123",
                "is_host": True,
                "avatar_url": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
                "bio": "Superhost with 5+ years of experience. I love sharing beautiful spaces with travelers from around the world.",
                "is_superhost": True,
            },
            {
                "name": "Marco Rossi",
                "email": "host2@demo.com",
                "password": "password123",
                "is_host": True,
                "avatar_url": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
                "bio": "Barcelona local sharing my favorite city spots. Architecture enthusiast and foodie.",
                "is_superhost": False,
            },
            {
                "name": "Yuki Tanaka",
                "email": "host3@demo.com",
                "password": "password123",
                "is_host": True,
                "avatar_url": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
                "bio": "Tokyo native offering authentic Japanese living experiences. Tea ceremony instructor.",
                "is_superhost": True,
            },
            {
                "name": "Emily Chen",
                "email": "host4@demo.com",
                "password": "password123",
                "is_host": True,
                "avatar_url": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop",
                "bio": "NYC apartment curator. I find and design the most Instagram-worthy spaces in Manhattan.",
                "is_superhost": True,
            },
            {
                "name": "Wayan Sudarma",
                "email": "host5@demo.com",
                "password": "password123",
                "is_host": True,
                "avatar_url": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
                "bio": "Bali hospitality expert. Providing tropical paradise retreats for over a decade.",
                "is_superhost": False,
            },
        ]

        guests_data = [
            {
                "name": "Alex Thompson",
                "email": "guest1@demo.com",
                "password": "password123",
                "is_host": False,
                "avatar_url": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
                "bio": "Digital nomad and travel enthusiast.",
            },
            {
                "name": "Lisa Park",
                "email": "guest2@demo.com",
                "password": "password123",
                "is_host": False,
                "avatar_url": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop",
                "bio": "Weekend explorer and food lover.",
            },
            {
                "name": "James Wilson",
                "email": "guest3@demo.com",
                "password": "password123",
                "is_host": False,
                "avatar_url": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop",
                "bio": "Business traveler who appreciates a good view.",
            },
        ]

        for h_data in hosts_data:
            user = User(**h_data)
            db.add(user)
            hosts.append(user)

        for g_data in guests_data:
            user = User(**g_data)
            db.add(user)
            guests.append(user)

        db.flush()

        # ==================================================================
        # LISTINGS (18 across 5 cities)
        # ==================================================================
        listings_data = [
            # ----- NEW YORK (4 listings, host: Emily Chen) -----
            {
                "host": hosts[3],
                "title": "Stunning Manhattan Loft with Skyline Views",
                "description": "Wake up to breathtaking views of the NYC skyline in this modern, sun-drenched loft in the heart of Manhattan. Floor-to-ceiling windows, designer furniture, and a fully equipped gourmet kitchen make this the perfect urban retreat. Steps from Central Park, world-class dining, and iconic landmarks.",
                "property_type": "Loft",
                "city": "New York",
                "country": "United States",
                "address": "245 W 25th St, Chelsea",
                "latitude": 40.7448,
                "longitude": -73.9957,
                "price_per_night": 285.0,
                "cleaning_fee": 75.0,
                "max_guests": 4,
                "bedrooms": 2,
                "beds": 2,
                "bathrooms": 1.5,
                "amenity_indices": [0, 1, 4, 6, 7],  # WiFi, Kitchen, AC, TV, Workspace
                "images": [
                    "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800",
                    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800",
                    "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800",
                    "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800",
                    "https://images.unsplash.com/photo-1560185127-6a3c65a55ef8?w=800",
                ],
            },
            {
                "host": hosts[3],
                "title": "Cozy Brooklyn Brownstone Apartment",
                "description": "Charming 1-bedroom in a classic Brooklyn brownstone. Exposed brick walls, hardwood floors, and modern amenities blend seamlessly in this quintessentially New York space. Located in vibrant Williamsburg with easy access to L train.",
                "property_type": "Apartment",
                "city": "New York",
                "country": "United States",
                "address": "178 Bedford Ave, Williamsburg",
                "latitude": 40.7142,
                "longitude": -73.9614,
                "price_per_night": 165.0,
                "cleaning_fee": 50.0,
                "max_guests": 2,
                "bedrooms": 1,
                "beds": 1,
                "bathrooms": 1.0,
                "amenity_indices": [0, 1, 4, 5, 6],
                "images": [
                    "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800",
                    "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=800",
                    "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800",
                    "https://images.unsplash.com/photo-1560185008-a33f5c7b1844?w=800",
                ],
            },
            {
                "host": hosts[0],
                "title": "Luxury Penthouse near Times Square",
                "description": "Experience NYC from the top! This luxurious penthouse features panoramic city views, a private terrace, and designer interiors. Premium building amenities include gym, doorman, and rooftop lounge. Walking distance to Broadway theaters.",
                "property_type": "Apartment",
                "city": "New York",
                "country": "United States",
                "address": "350 W 42nd St, Midtown",
                "latitude": 40.7580,
                "longitude": -73.9910,
                "price_per_night": 450.0,
                "cleaning_fee": 100.0,
                "max_guests": 6,
                "bedrooms": 3,
                "beds": 4,
                "bathrooms": 2.5,
                "amenity_indices": [0, 1, 4, 5, 6, 7],
                "images": [
                    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
                    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
                    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800",
                    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
                    "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800",
                ],
            },
            {
                "host": hosts[0],
                "title": "Artist's Studio in SoHo",
                "description": "Creative and unique studio in the heart of SoHo. Original art adorns the walls, and the open floor plan provides a spacious feel. Perfect for solo travelers or couples seeking an authentic NYC artistic experience.",
                "property_type": "Loft",
                "city": "New York",
                "country": "United States",
                "address": "89 Mercer St, SoHo",
                "latitude": 40.7234,
                "longitude": -73.9990,
                "price_per_night": 195.0,
                "cleaning_fee": 45.0,
                "max_guests": 2,
                "bedrooms": 1,
                "beds": 1,
                "bathrooms": 1.0,
                "amenity_indices": [0, 1, 4, 6, 7],
                "images": [
                    "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800",
                    "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800",
                    "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800",
                    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800",
                ],
            },
            # ----- PARIS (4 listings, host: Sarah Johnson) -----
            {
                "host": hosts[0],
                "title": "Elegant Parisian Apartment near Eiffel Tower",
                "description": "Live like a Parisian in this beautifully appointed apartment with Eiffel Tower views from the balcony. Classic Haussmann architecture meets modern comfort. Marble fireplace, herringbone parquet floors, and a fully equipped French kitchen.",
                "property_type": "Apartment",
                "city": "Paris",
                "country": "France",
                "address": "15 Rue de Monttessuy, 7th Arrondissement",
                "latitude": 48.8584,
                "longitude": 2.2945,
                "price_per_night": 320.0,
                "cleaning_fee": 80.0,
                "max_guests": 4,
                "bedrooms": 2,
                "beds": 2,
                "bathrooms": 1.0,
                "amenity_indices": [0, 1, 4, 5, 6],
                "images": [
                    "https://images.unsplash.com/photo-1549638441-b787d2e11f14?w=800",
                    "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800",
                    "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800",
                    "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?w=800",
                    "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=800",
                ],
            },
            {
                "host": hosts[0],
                "title": "Charming Montmartre Studio with Sacré-Cœur View",
                "description": "Cozy studio in the artistic Montmartre neighborhood. Watch the sunset over Paris from your window with Sacré-Cœur just steps away. Cobblestone streets, local cafés, and the bohemian spirit of old Paris surround you.",
                "property_type": "Apartment",
                "city": "Paris",
                "country": "France",
                "address": "42 Rue Lepic, Montmartre",
                "latitude": 48.8845,
                "longitude": 2.3323,
                "price_per_night": 145.0,
                "cleaning_fee": 40.0,
                "max_guests": 2,
                "bedrooms": 1,
                "beds": 1,
                "bathrooms": 1.0,
                "amenity_indices": [0, 1, 4, 6],
                "images": [
                    "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800",
                    "https://images.unsplash.com/photo-1600573472591-ee6981cf81d6?w=800",
                    "https://images.unsplash.com/photo-1560448075-cbc16bb4af8e?w=800",
                    "https://images.unsplash.com/photo-1564078516393-cf04bd966897?w=800",
                ],
            },
            {
                "host": hosts[1],
                "title": "Le Marais Luxury Townhouse",
                "description": "Exquisite 17th-century townhouse in the prestigious Le Marais district. Three stories of refined luxury with a private courtyard garden. Antique furnishings harmonize with contemporary amenities for the discerning traveler.",
                "property_type": "House",
                "city": "Paris",
                "country": "France",
                "address": "28 Rue des Francs-Bourgeois, Le Marais",
                "latitude": 48.8566,
                "longitude": 2.3619,
                "price_per_night": 495.0,
                "cleaning_fee": 120.0,
                "max_guests": 8,
                "bedrooms": 4,
                "beds": 5,
                "bathrooms": 3.0,
                "amenity_indices": [0, 1, 4, 5, 6, 7],
                "images": [
                    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
                    "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800",
                    "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800",
                    "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=800",
                    "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800",
                ],
            },
            {
                "host": hosts[1],
                "title": "Saint-Germain Writer's Retreat",
                "description": "Inspiring one-bedroom in literary Saint-Germain-des-Prés. This apartment has hosted writers and artists for decades. Built-in bookshelves, a vintage writing desk, and views of rooftops create the perfect creative haven.",
                "property_type": "Apartment",
                "city": "Paris",
                "country": "France",
                "address": "67 Rue de Seine, Saint-Germain",
                "latitude": 48.8546,
                "longitude": 2.3375,
                "price_per_night": 175.0,
                "cleaning_fee": 45.0,
                "max_guests": 2,
                "bedrooms": 1,
                "beds": 1,
                "bathrooms": 1.0,
                "amenity_indices": [0, 1, 6, 7],
                "images": [
                    "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=800",
                    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800",
                    "https://images.unsplash.com/photo-1600585153490-76fb20a32601?w=800",
                    "https://images.unsplash.com/photo-1600566752447-f4e9e9e2a6c8?w=800",
                ],
            },
            # ----- TOKYO (4 listings, host: Yuki Tanaka) -----
            {
                "host": hosts[2],
                "title": "Modern Shibuya Apartment with City Views",
                "description": "Ultra-modern apartment in the heart of Shibuya. Floor-to-ceiling windows overlook the famous Shibuya crossing. Minimalist Japanese design with smart home features. Walking distance to the best shopping, dining, and nightlife in Tokyo.",
                "property_type": "Apartment",
                "city": "Tokyo",
                "country": "Japan",
                "address": "2-21-1 Shibuya, Shibuya-ku",
                "latitude": 35.6580,
                "longitude": 139.7016,
                "price_per_night": 220.0,
                "cleaning_fee": 60.0,
                "max_guests": 3,
                "bedrooms": 1,
                "beds": 2,
                "bathrooms": 1.0,
                "amenity_indices": [0, 1, 4, 5, 6, 7],
                "images": [
                    "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800",
                    "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800",
                    "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800",
                    "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=800",
                ],
            },
            {
                "host": hosts[2],
                "title": "Traditional Asakusa Machiya Townhouse",
                "description": "Experience authentic Japanese living in this beautifully restored machiya (traditional townhouse) near Senso-ji temple. Tatami rooms, a Japanese soaking tub (ofuro), and a tranquil inner garden create an oasis of calm in bustling Tokyo.",
                "property_type": "House",
                "city": "Tokyo",
                "country": "Japan",
                "address": "3-15-8 Asakusa, Taito-ku",
                "latitude": 35.7148,
                "longitude": 139.7967,
                "price_per_night": 180.0,
                "cleaning_fee": 50.0,
                "max_guests": 5,
                "bedrooms": 2,
                "beds": 4,
                "bathrooms": 1.5,
                "amenity_indices": [0, 1, 5, 9],  # WiFi, Kitchen, Washer, Hot tub
                "images": [
                    "https://images.unsplash.com/photo-1480796927426-f609979314bd?w=800",
                    "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800",
                    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
                    "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=800",
                    "https://images.unsplash.com/photo-1600573472591-ee6981cf81d6?w=800",
                ],
            },
            {
                "host": hosts[2],
                "title": "Minimalist Shinjuku Studio",
                "description": "Clean, minimalist studio in Shinjuku — Tokyo's vibrant entertainment hub. Compact but perfectly designed Japanese-style space with everything you need. Shinjuku Gyoen garden is your backyard.",
                "property_type": "Apartment",
                "city": "Tokyo",
                "country": "Japan",
                "address": "1-4-15 Shinjuku, Shinjuku-ku",
                "latitude": 35.6938,
                "longitude": 139.7034,
                "price_per_night": 95.0,
                "cleaning_fee": 30.0,
                "max_guests": 2,
                "bedrooms": 1,
                "beds": 1,
                "bathrooms": 1.0,
                "amenity_indices": [0, 4, 5, 6],
                "images": [
                    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800",
                    "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=800",
                    "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800",
                ],
            },
            {
                "host": hosts[2],
                "title": "Roppongi Hills Designer Condo",
                "description": "Sleek designer condo in the prestigious Roppongi Hills complex. High-end finishes, concierge service, and stunning Tokyo Tower views. Perfect for business travelers or anyone seeking luxury in the city center.",
                "property_type": "Apartment",
                "city": "Tokyo",
                "country": "Japan",
                "address": "6-10-1 Roppongi, Minato-ku",
                "latitude": 35.6604,
                "longitude": 139.7292,
                "price_per_night": 350.0,
                "cleaning_fee": 80.0,
                "max_guests": 4,
                "bedrooms": 2,
                "beds": 2,
                "bathrooms": 2.0,
                "amenity_indices": [0, 1, 4, 5, 6, 7],
                "images": [
                    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
                    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
                    "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800",
                    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
                ],
            },
            # ----- BARCELONA (3 listings, host: Marco Rossi) -----
            {
                "host": hosts[1],
                "title": "Gothic Quarter Penthouse with Terrace",
                "description": "Stunning penthouse in Barcelona's historic Gothic Quarter. A large private terrace with views of the cathedral makes this a one-of-a-kind property. Walk to La Rambla, the beach, and Picasso Museum in minutes.",
                "property_type": "Apartment",
                "city": "Barcelona",
                "country": "Spain",
                "address": "Carrer del Bisbe 8, Gothic Quarter",
                "latitude": 41.3839,
                "longitude": 2.1764,
                "price_per_night": 240.0,
                "cleaning_fee": 65.0,
                "max_guests": 4,
                "bedrooms": 2,
                "beds": 2,
                "bathrooms": 1.5,
                "amenity_indices": [0, 1, 4, 6, 7],
                "images": [
                    "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=800",
                    "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?w=800",
                    "https://images.unsplash.com/photo-1600585153490-76fb20a32601?w=800",
                    "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800",
                    "https://images.unsplash.com/photo-1560448075-cbc16bb4af8e?w=800",
                ],
            },
            {
                "host": hosts[1],
                "title": "Beachfront Villa in Barceloneta",
                "description": "Direct beach access from this renovated villa in Barceloneta. Open-plan living, Mediterranean decor, and a sun-drenched patio. Fall asleep to the sound of waves and wake up steps from the sand.",
                "property_type": "Villa",
                "city": "Barcelona",
                "country": "Spain",
                "address": "Passeig Marítim 45, Barceloneta",
                "latitude": 41.3784,
                "longitude": 2.1925,
                "price_per_night": 380.0,
                "cleaning_fee": 90.0,
                "max_guests": 6,
                "bedrooms": 3,
                "beds": 4,
                "bathrooms": 2.0,
                "amenity_indices": [0, 1, 2, 3, 4, 5, 6, 8],
                "images": [
                    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
                    "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800",
                    "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800",
                    "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=800",
                ],
            },
            {
                "host": hosts[1],
                "title": "Eixample Modernist Flat",
                "description": "Gorgeous flat in a Gaudí-era modernist building. Original mosaic floors, ornate ceilings, and an interior balcony overlooking Passeig de Gràcia. Near Sagrada Família and Casa Batlló.",
                "property_type": "Apartment",
                "city": "Barcelona",
                "country": "Spain",
                "address": "Passeig de Gràcia 78, Eixample",
                "latitude": 41.3954,
                "longitude": 2.1632,
                "price_per_night": 200.0,
                "cleaning_fee": 55.0,
                "max_guests": 4,
                "bedrooms": 2,
                "beds": 2,
                "bathrooms": 1.0,
                "amenity_indices": [0, 1, 4, 5, 6],
                "images": [
                    "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800",
                    "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800",
                    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800",
                    "https://images.unsplash.com/photo-1560185008-a33f5c7b1844?w=800",
                ],
            },
            # ----- BALI (3 listings, host: Wayan Sudarma) -----
            {
                "host": hosts[4],
                "title": "Ubud Jungle Villa with Infinity Pool",
                "description": "Escape to this breathtaking villa nestled in Ubud's lush tropical jungle. An infinity pool overlooks the rice terraces, and open-air living lets you commune with nature. Daily breakfast and housekeeping included.",
                "property_type": "Villa",
                "city": "Bali",
                "country": "Indonesia",
                "address": "Jl. Raya Tegallalang, Ubud",
                "latitude": -8.4312,
                "longitude": 115.2792,
                "price_per_night": 155.0,
                "cleaning_fee": 25.0,
                "max_guests": 4,
                "bedrooms": 2,
                "beds": 2,
                "bathrooms": 2.0,
                "amenity_indices": [0, 1, 3, 4, 8, 9],  # WiFi, Kitchen, Pool, AC, Pets, Hot tub
                "images": [
                    "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800",
                    "https://images.unsplash.com/photo-1570213489059-0aac6626cade?w=800",
                    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
                    "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=800",
                    "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800",
                ],
            },
            {
                "host": hosts[4],
                "title": "Seminyak Beach Cabana",
                "description": "Laid-back beach cabana just 100 meters from Seminyak Beach. Surf-inspired decor, outdoor shower, and a private garden with hammock. The perfect base for beach lovers and sunset chasers.",
                "property_type": "Cabin",
                "city": "Bali",
                "country": "Indonesia",
                "address": "Jl. Kayu Aya, Seminyak",
                "latitude": -8.6914,
                "longitude": 115.1593,
                "price_per_night": 85.0,
                "cleaning_fee": 15.0,
                "max_guests": 2,
                "bedrooms": 1,
                "beds": 1,
                "bathrooms": 1.0,
                "amenity_indices": [0, 4, 8],
                "images": [
                    "https://images.unsplash.com/photo-1559628233-100c798642d4?w=800",
                    "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800",
                    "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=800",
                ],
            },
            {
                "host": hosts[4],
                "title": "Canggu Surf House with Rooftop",
                "description": "Modern surf house in trendy Canggu with a rooftop terrace and ocean views. Shared surfboard rack, outdoor movie area, and a communal kitchen. Great for solo travelers and groups alike.",
                "property_type": "House",
                "city": "Bali",
                "country": "Indonesia",
                "address": "Jl. Pantai Batu Bolong, Canggu",
                "latitude": -8.6478,
                "longitude": 115.1385,
                "price_per_night": 120.0,
                "cleaning_fee": 20.0,
                "max_guests": 6,
                "bedrooms": 3,
                "beds": 4,
                "bathrooms": 2.0,
                "amenity_indices": [0, 1, 2, 3, 4, 8],
                "images": [
                    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800",
                    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
                    "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800",
                    "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800",
                ],
            },
        ]

        listings = []
        for l_data in listings_data:
            host = l_data.pop("host")
            amenity_indices = l_data.pop("amenity_indices")
            image_urls = l_data.pop("images")

            listing = Listing(host_id=host.id, **l_data)
            listing.amenities = [amenities[i] for i in amenity_indices]
            db.add(listing)
            db.flush()

            for pos, url in enumerate(image_urls):
                img = ListingImage(listing_id=listing.id, url=url, position=pos)
                db.add(img)

            listings.append(listing)

        db.flush()

        # ==================================================================
        # BOOKINGS (mix of past/current/future)
        # ==================================================================
        today = date.today()

        bookings_data = [
            # ----- PAST / COMPLETED bookings (for reviews + My Trips history) -----
            {
                "listing": listings[0],  # Manhattan Loft
                "guest": guests[0],      # Alex
                "check_in": today - timedelta(days=60),
                "check_out": today - timedelta(days=55),
                "guests_count": 2,
                "status": "completed",
            },
            {
                "listing": listings[4],  # Paris Eiffel
                "guest": guests[1],      # Lisa
                "check_in": today - timedelta(days=45),
                "check_out": today - timedelta(days=40),
                "guests_count": 2,
                "status": "completed",
            },
            {
                "listing": listings[8],  # Shibuya
                "guest": guests[0],      # Alex
                "check_in": today - timedelta(days=90),
                "check_out": today - timedelta(days=85),
                "guests_count": 1,
                "status": "completed",
            },
            {
                "listing": listings[12],  # Barcelona Gothic
                "guest": guests[2],       # James
                "check_in": today - timedelta(days=30),
                "check_out": today - timedelta(days=25),
                "guests_count": 3,
                "status": "completed",
            },
            {
                "listing": listings[15],  # Ubud Villa
                "guest": guests[1],       # Lisa
                "check_in": today - timedelta(days=75),
                "check_out": today - timedelta(days=68),
                "guests_count": 2,
                "status": "completed",
            },
            {
                "listing": listings[1],  # Brooklyn Brownstone
                "guest": guests[2],      # James
                "check_in": today - timedelta(days=50),
                "check_out": today - timedelta(days=47),
                "guests_count": 2,
                "status": "completed",
            },
            {
                "listing": listings[9],  # Asakusa Machiya
                "guest": guests[1],      # Lisa
                "check_in": today - timedelta(days=120),
                "check_out": today - timedelta(days=114),
                "guests_count": 3,
                "status": "completed",
            },
            {
                "listing": listings[5],  # Montmartre Studio
                "guest": guests[0],      # Alex
                "check_in": today - timedelta(days=20),
                "check_out": today - timedelta(days=16),
                "guests_count": 1,
                "status": "completed",
            },
            # ----- CANCELLED booking -----
            {
                "listing": listings[2],  # NYC Penthouse
                "guest": guests[0],      # Alex
                "check_in": today - timedelta(days=10),
                "check_out": today - timedelta(days=7),
                "guests_count": 4,
                "status": "cancelled",
            },
            # ----- CURRENT booking (overlapping today) -----
            {
                "listing": listings[13],  # Barceloneta Villa
                "guest": guests[0],       # Alex
                "check_in": today - timedelta(days=2),
                "check_out": today + timedelta(days=5),
                "guests_count": 4,
                "status": "confirmed",
            },
            # ----- FUTURE bookings -----
            {
                "listing": listings[0],  # Manhattan Loft
                "guest": guests[1],      # Lisa
                "check_in": today + timedelta(days=10),
                "check_out": today + timedelta(days=15),
                "guests_count": 2,
                "status": "confirmed",
            },
            {
                "listing": listings[4],  # Paris Eiffel
                "guest": guests[2],      # James
                "check_in": today + timedelta(days=20),
                "check_out": today + timedelta(days=27),
                "guests_count": 3,
                "status": "confirmed",
            },
            {
                "listing": listings[15],  # Ubud Villa
                "guest": guests[0],       # Alex
                "check_in": today + timedelta(days=30),
                "check_out": today + timedelta(days=37),
                "guests_count": 2,
                "status": "confirmed",
            },
            {
                "listing": listings[8],  # Shibuya
                "guest": guests[2],      # James
                "check_in": today + timedelta(days=14),
                "check_out": today + timedelta(days=21),
                "guests_count": 2,
                "status": "confirmed",
            },
            {
                "listing": listings[11],  # Roppongi
                "guest": guests[1],       # Lisa
                "check_in": today + timedelta(days=45),
                "check_out": today + timedelta(days=50),
                "guests_count": 2,
                "status": "confirmed",
            },
        ]

        bookings = []
        for b_data in bookings_data:
            listing = b_data.pop("listing")
            guest = b_data.pop("guest")
            check_in = b_data["check_in"]
            check_out = b_data["check_out"]
            nights = (check_out - check_in).days
            nightly_rate = listing.price_per_night
            cleaning_fee = listing.cleaning_fee
            subtotal = nightly_rate * nights
            service_fee = round(subtotal * listing.service_fee_pct, 2)
            total_price = round(subtotal + cleaning_fee + service_fee, 2)

            booking = Booking(
                listing_id=listing.id,
                guest_id=guest.id,
                nightly_rate=nightly_rate,
                nights=nights,
                cleaning_fee=cleaning_fee,
                service_fee=service_fee,
                total_price=total_price,
                **b_data,
            )
            db.add(booking)
            bookings.append(booking)

        db.flush()

        # ==================================================================
        # REVIEWS (on completed bookings)
        # ==================================================================
        reviews_data = [
            {
                "booking": bookings[0],  # Alex @ Manhattan Loft
                "rating": 5,
                "comment": "Absolutely stunning loft! The skyline views are even better in person. Sarah was a wonderful host — responsive and thoughtful. Will definitely be back!",
            },
            {
                "booking": bookings[1],  # Lisa @ Paris Eiffel
                "rating": 5,
                "comment": "A dream come true! Watching the Eiffel Tower light up from the balcony every night was magical. The apartment is beautifully decorated and perfectly located.",
            },
            {
                "booking": bookings[2],  # Alex @ Shibuya
                "rating": 4,
                "comment": "Great location right in the heart of Shibuya. The apartment is compact but has everything you need. Yuki provided excellent local restaurant recommendations.",
            },
            {
                "booking": bookings[3],  # James @ Barcelona Gothic
                "rating": 5,
                "comment": "The terrace views of the Gothic Quarter are unreal. Marco was an amazing host and even arranged a private food tour for us. Highly recommend!",
            },
            {
                "booking": bookings[4],  # Lisa @ Ubud Villa
                "rating": 5,
                "comment": "This villa is paradise. Waking up to jungle views and swimming in the infinity pool overlooking rice terraces was unforgettable. Wayan's hospitality is next level.",
            },
            {
                "booking": bookings[5],  # James @ Brooklyn Brownstone
                "rating": 4,
                "comment": "Love the Brooklyn vibe! The brownstone has real character with the exposed brick. Neighborhood cafés and bars are fantastic. Only wish it had a workspace setup.",
            },
            {
                "booking": bookings[6],  # Lisa @ Asakusa Machiya
                "rating": 5,
                "comment": "The most unique accommodation I've ever stayed in. The tatami rooms and Japanese bath were an incredible experience. Senso-ji temple right around the corner!",
            },
            {
                "booking": bookings[7],  # Alex @ Montmartre
                "rating": 4,
                "comment": "Charming studio in the best neighborhood of Paris. Loved the artistic atmosphere and local cafés. The view of Sacré-Cœur from nearby streets is spectacular.",
            },
        ]

        for r_data in reviews_data:
            booking = r_data.pop("booking")
            review = Review(
                listing_id=booking.listing_id,
                booking_id=booking.id,
                guest_id=booking.guest_id,
                **r_data,
            )
            db.add(review)

        db.commit()

        # ==================================================================
        # Print demo credentials
        # ==================================================================
        print("\n[OK] Database seeded successfully!\n")
        print("Demo Credentials:")
        print("-" * 40)
        print("HOST ACCOUNTS:")
        for h in hosts_data:
            superhost = " [Superhost]" if h.get("is_superhost") else ""
            print(f"  {h['email']} / {h['password']} -- {h['name']}{superhost}")
        print("\nGUEST ACCOUNTS:")
        for g in guests_data:
            print(f"  {g['email']} / {g['password']} -- {g['name']}")
        print("-" * 40)
        print(f"Seeded: {len(hosts_data)} hosts, {len(guests_data)} guests, "
              f"{len(listings_data)} listings, {len(bookings_data)} bookings, "
              f"{len(reviews_data)} reviews, {len(amenities_data)} amenities")
        print("=" * 60 + "\n")

    except Exception as e:
        db.rollback()
        print(f"[ERROR] Seed error: {e}")
        raise
    finally:
        db.close()


if __name__ == "__main__":
    seed_database()
