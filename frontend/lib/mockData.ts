import { ListingCard, ListingDetail } from "./types";

export const MOCK_LISTINGS: ListingDetail[] = [
  {
    "id": 1,
    "title": "Stunning Manhattan Loft with Skyline Views",
    "city": "New York",
    "country": "United States",
    "price_per_night": 285.0,
    "property_type": "Loft",
    "avg_rating": 5.0,
    "review_count": 3,
    "is_wishlisted": false,
    "images": [
      {
        "id": 1,
        "url": "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&id=1&p=1",
        "position": 0
      },
      {
        "id": 2,
        "url": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&id=1&p=2",
        "position": 1
      },
      {
        "id": 3,
        "url": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&id=1&p=3",
        "position": 2
      },
      {
        "id": 4,
        "url": "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800&id=1&p=4",
        "position": 3
      }
    ],
    "description": "Wake up to breathtaking views of the NYC skyline in this modern, sun-drenched loft in the heart of Manhattan. Floor-to-ceiling windows, designer furniture, and a fully equipped gourmet kitchen make this the perfect urban retreat. Steps from Central Park, world-class dining, and iconic landmarks.",
    "address": "245 W 25th St, Chelsea",
    "latitude": 40.7448,
    "longitude": -73.9957,
    "cleaning_fee": 75.0,
    "service_fee_pct": 14.0,
    "max_guests": 4,
    "bedrooms": 2,
    "beds": 2,
    "bathrooms": 1.5,
    "host": {
      "id": 4,
      "name": "Emily Chen",
      "email": "host4@demo.com",
      "phone": "+1 (555) 234-5678",
      "avatar_url": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop",
      "is_superhost": true,
      "bio": "NYC apartment curator. I find and design the most Instagram-worthy spaces in Manhattan.",
      "created_at": "2021-03-15T00:00:00Z"
    },
    "amenities": [
      {
        "id": 2,
        "name": "Kitchen",
        "icon": "cooking-pot"
      },
      {
        "id": 4,
        "name": "Pool",
        "icon": "waves"
      },
      {
        "id": 7,
        "name": "TV",
        "icon": "tv"
      },
      {
        "id": 11,
        "name": "Wifi",
        "icon": "wifi"
      },
      {
        "id": 12,
        "name": "Free parking on premises",
        "icon": "car"
      },
      {
        "id": 13,
        "name": "Allows pets",
        "icon": "dog"
      },
      {
        "id": 15,
        "name": "Washing machine",
        "icon": "disc"
      },
      {
        "id": 16,
        "name": "Dryer",
        "icon": "sun"
      },
      {
        "id": 17,
        "name": "Private patio or balcony",
        "icon": "sun"
      },
      {
        "id": 19,
        "name": "Bathtub",
        "icon": "bath"
      },
      {
        "id": 20,
        "name": "Hair dryer",
        "icon": "wind"
      },
      {
        "id": 21,
        "name": "Hot water",
        "icon": "flame"
      },
      {
        "id": 22,
        "name": "Shampoo & Body Wash",
        "icon": "sparkles"
      },
      {
        "id": 23,
        "name": "Room-darkening shades",
        "icon": "moon"
      },
      {
        "id": 24,
        "name": "Extra pillows & blankets",
        "icon": "bed"
      },
      {
        "id": 25,
        "name": "Iron & Board",
        "icon": "shirt"
      },
      {
        "id": 26,
        "name": "Refrigerator",
        "icon": "box"
      },
      {
        "id": 27,
        "name": "Microwave",
        "icon": "box"
      },
      {
        "id": 29,
        "name": "Coffee maker",
        "icon": "coffee"
      },
      {
        "id": 31,
        "name": "Dishes & silverware",
        "icon": "utensils"
      },
      {
        "id": 32,
        "name": "Wine glasses",
        "icon": "wine"
      },
      {
        "id": 33,
        "name": "Toaster",
        "icon": "flame"
      },
      {
        "id": 34,
        "name": "Fire pit & Outdoor Lounge",
        "icon": "flame"
      },
      {
        "id": 35,
        "name": "BBQ grill",
        "icon": "flame"
      },
      {
        "id": 36,
        "name": "Garden Backyard View",
        "icon": "trees"
      },
      {
        "id": 39,
        "name": "First aid kit",
        "icon": "cross"
      },
      {
        "id": 40,
        "name": "Smart Keypad Lock",
        "icon": "key"
      },
      {
        "id": 41,
        "name": "EV charger",
        "icon": "zap"
      }
    ],
    "reviews": [
      {
        "id": 1,
        "rating": 5,
        "comment": "Absolutely stunning loft! The skyline views are even better in person. Sarah was a wonderful host \u2014 responsive and thoughtful. Will definitely be back!",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 6,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      },
      {
        "id": 9,
        "rating": 5,
        "comment": "Wonderful experience from start to finish. The bed was extremely comfortable and the neighborhood was quiet yet accessible.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 1,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      },
      {
        "id": 10,
        "rating": 5,
        "comment": "Wonderful experience from start to finish. The bed was extremely comfortable and the neighborhood was quiet yet accessible.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 2,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      }
    ],
    "booked_ranges": []
  },
  {
    "id": 2,
    "title": "Cozy Brooklyn Brownstone Apartment",
    "city": "New York",
    "country": "United States",
    "price_per_night": 165.0,
    "property_type": "Apartment",
    "avg_rating": 4.67,
    "review_count": 3,
    "is_wishlisted": false,
    "images": [
      {
        "id": 5,
        "url": "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&id=2&p=1",
        "position": 0
      },
      {
        "id": 6,
        "url": "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=800&id=2&p=2",
        "position": 1
      },
      {
        "id": 7,
        "url": "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&id=2&p=3",
        "position": 2
      },
      {
        "id": 8,
        "url": "https://images.unsplash.com/photo-1560185008-a33f5c7b1844?w=800&id=2&p=4",
        "position": 3
      }
    ],
    "description": "Charming 1-bedroom in a classic Brooklyn brownstone. Exposed brick walls, hardwood floors, and modern amenities blend seamlessly in this quintessentially New York space. Located in vibrant Williamsburg with easy access to L train.",
    "address": "178 Bedford Ave, Williamsburg",
    "latitude": 40.7142,
    "longitude": -73.9614,
    "cleaning_fee": 50.0,
    "service_fee_pct": 14.0,
    "max_guests": 2,
    "bedrooms": 1,
    "beds": 1,
    "bathrooms": 1.0,
    "host": {
      "id": 4,
      "name": "Emily Chen",
      "email": "host4@demo.com",
      "phone": "+1 (555) 234-5678",
      "avatar_url": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop",
      "is_superhost": true,
      "bio": "NYC apartment curator. I find and design the most Instagram-worthy spaces in Manhattan.",
      "created_at": "2021-03-15T00:00:00Z"
    },
    "amenities": [
      {
        "id": 2,
        "name": "Kitchen",
        "icon": "cooking-pot"
      },
      {
        "id": 4,
        "name": "Pool",
        "icon": "waves"
      },
      {
        "id": 5,
        "name": "Air conditioning",
        "icon": "snowflake"
      },
      {
        "id": 11,
        "name": "Wifi",
        "icon": "wifi"
      },
      {
        "id": 12,
        "name": "Free parking on premises",
        "icon": "car"
      },
      {
        "id": 13,
        "name": "Allows pets",
        "icon": "dog"
      },
      {
        "id": 16,
        "name": "Dryer",
        "icon": "sun"
      },
      {
        "id": 17,
        "name": "Private patio or balcony",
        "icon": "sun"
      },
      {
        "id": 18,
        "name": "Exterior security cameras",
        "icon": "shield-check"
      },
      {
        "id": 19,
        "name": "Bathtub",
        "icon": "bath"
      },
      {
        "id": 20,
        "name": "Hair dryer",
        "icon": "wind"
      },
      {
        "id": 21,
        "name": "Hot water",
        "icon": "flame"
      },
      {
        "id": 22,
        "name": "Shampoo & Body Wash",
        "icon": "sparkles"
      },
      {
        "id": 23,
        "name": "Room-darkening shades",
        "icon": "moon"
      },
      {
        "id": 24,
        "name": "Extra pillows & blankets",
        "icon": "bed"
      },
      {
        "id": 27,
        "name": "Microwave",
        "icon": "box"
      },
      {
        "id": 28,
        "name": "Dishwasher",
        "icon": "sparkles"
      },
      {
        "id": 29,
        "name": "Coffee maker",
        "icon": "coffee"
      },
      {
        "id": 30,
        "name": "Cooking basics",
        "icon": "utensils"
      },
      {
        "id": 34,
        "name": "Fire pit & Outdoor Lounge",
        "icon": "flame"
      },
      {
        "id": 36,
        "name": "Garden Backyard View",
        "icon": "trees"
      },
      {
        "id": 38,
        "name": "Carbon monoxide alarm",
        "icon": "shield"
      },
      {
        "id": 39,
        "name": "First aid kit",
        "icon": "cross"
      },
      {
        "id": 40,
        "name": "Smart Keypad Lock",
        "icon": "key"
      },
      {
        "id": 41,
        "name": "EV charger",
        "icon": "zap"
      }
    ],
    "reviews": [
      {
        "id": 6,
        "rating": 4,
        "comment": "Love the Brooklyn vibe! The brownstone has real character with the exposed brick. Neighborhood caf\u00e9s and bars are fantastic. Only wish it had a workspace setup.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 8,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      },
      {
        "id": 11,
        "rating": 5,
        "comment": "A true gem! The interior design is gorgeous and check-in was seamless. 5 stars all around.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 1,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      },
      {
        "id": 12,
        "rating": 5,
        "comment": "Absolutely loved staying here! Spotlessly clean, fantastic location, and the host was super helpful.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 2,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      }
    ],
    "booked_ranges": []
  },
  {
    "id": 3,
    "title": "Luxury Penthouse near Times Square",
    "city": "New York",
    "country": "United States",
    "price_per_night": 450.0,
    "property_type": "Apartment",
    "avg_rating": 5.0,
    "review_count": 3,
    "is_wishlisted": false,
    "images": [
      {
        "id": 9,
        "url": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&id=3&p=1",
        "position": 0
      },
      {
        "id": 10,
        "url": "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&id=3&p=2",
        "position": 1
      },
      {
        "id": 11,
        "url": "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&id=3&p=3",
        "position": 2
      },
      {
        "id": 12,
        "url": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&id=3&p=4",
        "position": 3
      }
    ],
    "description": "Experience NYC from the top! This luxurious penthouse features panoramic city views, a private terrace, and designer interiors. Premium building amenities include gym, doorman, and rooftop lounge. Walking distance to Broadway theaters.",
    "address": "350 W 42nd St, Midtown",
    "latitude": 40.758,
    "longitude": -73.991,
    "cleaning_fee": 100.0,
    "service_fee_pct": 14.0,
    "max_guests": 6,
    "bedrooms": 3,
    "beds": 4,
    "bathrooms": 2.5,
    "host": {
      "id": 1,
      "name": "Sarah Johnson",
      "email": "host1@demo.com",
      "phone": "+1 (555) 234-5678",
      "avatar_url": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
      "is_superhost": true,
      "bio": "Superhost with 5+ years of experience. I love sharing beautiful spaces with travelers from around the world.",
      "created_at": "2021-03-15T00:00:00Z"
    },
    "amenities": [
      {
        "id": 2,
        "name": "Kitchen",
        "icon": "cooking-pot"
      },
      {
        "id": 4,
        "name": "Pool",
        "icon": "waves"
      },
      {
        "id": 5,
        "name": "Air conditioning",
        "icon": "snowflake"
      },
      {
        "id": 7,
        "name": "TV",
        "icon": "tv"
      },
      {
        "id": 11,
        "name": "Wifi",
        "icon": "wifi"
      },
      {
        "id": 12,
        "name": "Free parking on premises",
        "icon": "car"
      },
      {
        "id": 13,
        "name": "Allows pets",
        "icon": "dog"
      },
      {
        "id": 14,
        "name": "Dedicated workspace",
        "icon": "monitor"
      },
      {
        "id": 15,
        "name": "Washing machine",
        "icon": "disc"
      },
      {
        "id": 16,
        "name": "Dryer",
        "icon": "sun"
      },
      {
        "id": 17,
        "name": "Private patio or balcony",
        "icon": "sun"
      },
      {
        "id": 18,
        "name": "Exterior security cameras",
        "icon": "shield-check"
      },
      {
        "id": 19,
        "name": "Bathtub",
        "icon": "bath"
      },
      {
        "id": 20,
        "name": "Hair dryer",
        "icon": "wind"
      },
      {
        "id": 21,
        "name": "Hot water",
        "icon": "flame"
      },
      {
        "id": 22,
        "name": "Shampoo & Body Wash",
        "icon": "sparkles"
      },
      {
        "id": 24,
        "name": "Extra pillows & blankets",
        "icon": "bed"
      },
      {
        "id": 25,
        "name": "Iron & Board",
        "icon": "shirt"
      },
      {
        "id": 27,
        "name": "Microwave",
        "icon": "box"
      },
      {
        "id": 28,
        "name": "Dishwasher",
        "icon": "sparkles"
      },
      {
        "id": 29,
        "name": "Coffee maker",
        "icon": "coffee"
      },
      {
        "id": 30,
        "name": "Cooking basics",
        "icon": "utensils"
      },
      {
        "id": 31,
        "name": "Dishes & silverware",
        "icon": "utensils"
      },
      {
        "id": 32,
        "name": "Wine glasses",
        "icon": "wine"
      },
      {
        "id": 33,
        "name": "Toaster",
        "icon": "flame"
      },
      {
        "id": 34,
        "name": "Fire pit & Outdoor Lounge",
        "icon": "flame"
      },
      {
        "id": 35,
        "name": "BBQ grill",
        "icon": "flame"
      },
      {
        "id": 39,
        "name": "First aid kit",
        "icon": "cross"
      },
      {
        "id": 40,
        "name": "Smart Keypad Lock",
        "icon": "key"
      },
      {
        "id": 41,
        "name": "EV charger",
        "icon": "zap"
      }
    ],
    "reviews": [
      {
        "id": 13,
        "rating": 5,
        "comment": "Charming, comfortable, and close to amazing local dining spots. Highly recommended for couples or solo travelers.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 1,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      },
      {
        "id": 14,
        "rating": 5,
        "comment": "A true gem! The interior design is gorgeous and check-in was seamless. 5 stars all around.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 2,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      },
      {
        "id": 15,
        "rating": 5,
        "comment": "A true gem! The interior design is gorgeous and check-in was seamless. 5 stars all around.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 3,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      }
    ],
    "booked_ranges": []
  },
  {
    "id": 4,
    "title": "Artist's Studio in SoHo",
    "city": "New York",
    "country": "United States",
    "price_per_night": 195.0,
    "property_type": "Loft",
    "avg_rating": 4.33,
    "review_count": 3,
    "is_wishlisted": false,
    "images": [
      {
        "id": 13,
        "url": "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800&id=4&p=1",
        "position": 0
      },
      {
        "id": 14,
        "url": "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&id=4&p=2",
        "position": 1
      },
      {
        "id": 15,
        "url": "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800&id=4&p=3",
        "position": 2
      },
      {
        "id": 16,
        "url": "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&id=4&p=4",
        "position": 3
      }
    ],
    "description": "Creative and unique studio in the heart of SoHo. Original art adorns the walls, and the open floor plan provides a spacious feel. Perfect for solo travelers or couples seeking an authentic NYC artistic experience.",
    "address": "89 Mercer St, SoHo",
    "latitude": 40.7234,
    "longitude": -73.999,
    "cleaning_fee": 45.0,
    "service_fee_pct": 14.0,
    "max_guests": 2,
    "bedrooms": 1,
    "beds": 1,
    "bathrooms": 1.0,
    "host": {
      "id": 1,
      "name": "Sarah Johnson",
      "email": "host1@demo.com",
      "phone": "+1 (555) 234-5678",
      "avatar_url": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
      "is_superhost": true,
      "bio": "Superhost with 5+ years of experience. I love sharing beautiful spaces with travelers from around the world.",
      "created_at": "2021-03-15T00:00:00Z"
    },
    "amenities": [
      {
        "id": 5,
        "name": "Air conditioning",
        "icon": "snowflake"
      },
      {
        "id": 7,
        "name": "TV",
        "icon": "tv"
      },
      {
        "id": 11,
        "name": "Wifi",
        "icon": "wifi"
      },
      {
        "id": 12,
        "name": "Free parking on premises",
        "icon": "car"
      },
      {
        "id": 14,
        "name": "Dedicated workspace",
        "icon": "monitor"
      },
      {
        "id": 15,
        "name": "Washing machine",
        "icon": "disc"
      },
      {
        "id": 16,
        "name": "Dryer",
        "icon": "sun"
      },
      {
        "id": 17,
        "name": "Private patio or balcony",
        "icon": "sun"
      },
      {
        "id": 19,
        "name": "Bathtub",
        "icon": "bath"
      },
      {
        "id": 20,
        "name": "Hair dryer",
        "icon": "wind"
      },
      {
        "id": 21,
        "name": "Hot water",
        "icon": "flame"
      },
      {
        "id": 23,
        "name": "Room-darkening shades",
        "icon": "moon"
      },
      {
        "id": 24,
        "name": "Extra pillows & blankets",
        "icon": "bed"
      },
      {
        "id": 25,
        "name": "Iron & Board",
        "icon": "shirt"
      },
      {
        "id": 26,
        "name": "Refrigerator",
        "icon": "box"
      },
      {
        "id": 27,
        "name": "Microwave",
        "icon": "box"
      },
      {
        "id": 28,
        "name": "Dishwasher",
        "icon": "sparkles"
      },
      {
        "id": 29,
        "name": "Coffee maker",
        "icon": "coffee"
      },
      {
        "id": 30,
        "name": "Cooking basics",
        "icon": "utensils"
      },
      {
        "id": 31,
        "name": "Dishes & silverware",
        "icon": "utensils"
      },
      {
        "id": 32,
        "name": "Wine glasses",
        "icon": "wine"
      },
      {
        "id": 33,
        "name": "Toaster",
        "icon": "flame"
      },
      {
        "id": 34,
        "name": "Fire pit & Outdoor Lounge",
        "icon": "flame"
      },
      {
        "id": 35,
        "name": "BBQ grill",
        "icon": "flame"
      },
      {
        "id": 37,
        "name": "Smoke alarm",
        "icon": "shield"
      },
      {
        "id": 38,
        "name": "Carbon monoxide alarm",
        "icon": "shield"
      },
      {
        "id": 39,
        "name": "First aid kit",
        "icon": "cross"
      },
      {
        "id": 40,
        "name": "Smart Keypad Lock",
        "icon": "key"
      }
    ],
    "reviews": [
      {
        "id": 16,
        "rating": 4,
        "comment": "A true gem! The interior design is gorgeous and check-in was seamless. 5 stars all around.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 1,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      },
      {
        "id": 17,
        "rating": 4,
        "comment": "Absolutely loved staying here! Spotlessly clean, fantastic location, and the host was super helpful.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 2,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      },
      {
        "id": 18,
        "rating": 5,
        "comment": "Absolutely loved staying here! Spotlessly clean, fantastic location, and the host was super helpful.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 3,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      }
    ],
    "booked_ranges": []
  },
  {
    "id": 5,
    "title": "Elegant Parisian Apartment near Eiffel Tower",
    "city": "Paris",
    "country": "France",
    "price_per_night": 320.0,
    "property_type": "Apartment",
    "avg_rating": 4.67,
    "review_count": 3,
    "is_wishlisted": false,
    "images": [
      {
        "id": 17,
        "url": "https://images.unsplash.com/photo-1549638441-b787d2e11f14?w=800&id=5&p=1",
        "position": 0
      },
      {
        "id": 18,
        "url": "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&id=5&p=2",
        "position": 1
      },
      {
        "id": 19,
        "url": "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&id=5&p=3",
        "position": 2
      },
      {
        "id": 20,
        "url": "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?w=800&id=5&p=4",
        "position": 3
      }
    ],
    "description": "Live like a Parisian in this beautifully appointed apartment with Eiffel Tower views from the balcony. Classic Haussmann architecture meets modern comfort. Marble fireplace, herringbone parquet floors, and a fully equipped French kitchen.",
    "address": "15 Rue de Monttessuy, 7th Arrondissement",
    "latitude": 48.8584,
    "longitude": 2.2945,
    "cleaning_fee": 80.0,
    "service_fee_pct": 14.0,
    "max_guests": 4,
    "bedrooms": 2,
    "beds": 2,
    "bathrooms": 1.0,
    "host": {
      "id": 1,
      "name": "Sarah Johnson",
      "email": "host1@demo.com",
      "phone": "+1 (555) 234-5678",
      "avatar_url": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
      "is_superhost": true,
      "bio": "Superhost with 5+ years of experience. I love sharing beautiful spaces with travelers from around the world.",
      "created_at": "2021-03-15T00:00:00Z"
    },
    "amenities": [
      {
        "id": 2,
        "name": "Kitchen",
        "icon": "cooking-pot"
      },
      {
        "id": 5,
        "name": "Air conditioning",
        "icon": "snowflake"
      },
      {
        "id": 12,
        "name": "Free parking on premises",
        "icon": "car"
      },
      {
        "id": 13,
        "name": "Allows pets",
        "icon": "dog"
      },
      {
        "id": 14,
        "name": "Dedicated workspace",
        "icon": "monitor"
      },
      {
        "id": 15,
        "name": "Washing machine",
        "icon": "disc"
      },
      {
        "id": 16,
        "name": "Dryer",
        "icon": "sun"
      },
      {
        "id": 17,
        "name": "Private patio or balcony",
        "icon": "sun"
      },
      {
        "id": 18,
        "name": "Exterior security cameras",
        "icon": "shield-check"
      },
      {
        "id": 19,
        "name": "Bathtub",
        "icon": "bath"
      },
      {
        "id": 20,
        "name": "Hair dryer",
        "icon": "wind"
      },
      {
        "id": 21,
        "name": "Hot water",
        "icon": "flame"
      },
      {
        "id": 23,
        "name": "Room-darkening shades",
        "icon": "moon"
      },
      {
        "id": 25,
        "name": "Iron & Board",
        "icon": "shirt"
      },
      {
        "id": 27,
        "name": "Microwave",
        "icon": "box"
      },
      {
        "id": 28,
        "name": "Dishwasher",
        "icon": "sparkles"
      },
      {
        "id": 29,
        "name": "Coffee maker",
        "icon": "coffee"
      },
      {
        "id": 30,
        "name": "Cooking basics",
        "icon": "utensils"
      },
      {
        "id": 31,
        "name": "Dishes & silverware",
        "icon": "utensils"
      },
      {
        "id": 32,
        "name": "Wine glasses",
        "icon": "wine"
      },
      {
        "id": 34,
        "name": "Fire pit & Outdoor Lounge",
        "icon": "flame"
      },
      {
        "id": 35,
        "name": "BBQ grill",
        "icon": "flame"
      },
      {
        "id": 37,
        "name": "Smoke alarm",
        "icon": "shield"
      },
      {
        "id": 38,
        "name": "Carbon monoxide alarm",
        "icon": "shield"
      },
      {
        "id": 39,
        "name": "First aid kit",
        "icon": "cross"
      },
      {
        "id": 40,
        "name": "Smart Keypad Lock",
        "icon": "key"
      },
      {
        "id": 41,
        "name": "EV charger",
        "icon": "zap"
      }
    ],
    "reviews": [
      {
        "id": 2,
        "rating": 5,
        "comment": "A dream come true! Watching the Eiffel Tower light up from the balcony every night was magical. The apartment is beautifully decorated and perfectly located.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 7,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      },
      {
        "id": 19,
        "rating": 5,
        "comment": "Charming, comfortable, and close to amazing local dining spots. Highly recommended for couples or solo travelers.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 1,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      },
      {
        "id": 20,
        "rating": 4,
        "comment": "Absolutely loved staying here! Spotlessly clean, fantastic location, and the host was super helpful.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 2,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      }
    ],
    "booked_ranges": []
  },
  {
    "id": 6,
    "title": "Charming Montmartre Studio with Sacr\u00e9-C\u0153ur View",
    "city": "Paris",
    "country": "France",
    "price_per_night": 145.0,
    "property_type": "Apartment",
    "avg_rating": 4.0,
    "review_count": 3,
    "is_wishlisted": false,
    "images": [
      {
        "id": 21,
        "url": "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&id=6&p=1",
        "position": 0
      },
      {
        "id": 22,
        "url": "https://images.unsplash.com/photo-1600573472591-ee6981cf81d6?w=800&id=6&p=2",
        "position": 1
      },
      {
        "id": 23,
        "url": "https://images.unsplash.com/photo-1560448075-cbc16bb4af8e?w=800&id=6&p=3",
        "position": 2
      },
      {
        "id": 24,
        "url": "https://images.unsplash.com/photo-1564078516393-cf04bd966897?w=800&id=6&p=4",
        "position": 3
      }
    ],
    "description": "Cozy studio in the artistic Montmartre neighborhood. Watch the sunset over Paris from your window with Sacr\u00e9-C\u0153ur just steps away. Cobblestone streets, local caf\u00e9s, and the bohemian spirit of old Paris surround you.",
    "address": "42 Rue Lepic, Montmartre",
    "latitude": 48.8845,
    "longitude": 2.3323,
    "cleaning_fee": 40.0,
    "service_fee_pct": 14.0,
    "max_guests": 2,
    "bedrooms": 1,
    "beds": 1,
    "bathrooms": 1.0,
    "host": {
      "id": 1,
      "name": "Sarah Johnson",
      "email": "host1@demo.com",
      "phone": "+1 (555) 234-5678",
      "avatar_url": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
      "is_superhost": true,
      "bio": "Superhost with 5+ years of experience. I love sharing beautiful spaces with travelers from around the world.",
      "created_at": "2021-03-15T00:00:00Z"
    },
    "amenities": [
      {
        "id": 2,
        "name": "Kitchen",
        "icon": "cooking-pot"
      },
      {
        "id": 4,
        "name": "Pool",
        "icon": "waves"
      },
      {
        "id": 7,
        "name": "TV",
        "icon": "tv"
      },
      {
        "id": 11,
        "name": "Wifi",
        "icon": "wifi"
      },
      {
        "id": 12,
        "name": "Free parking on premises",
        "icon": "car"
      },
      {
        "id": 13,
        "name": "Allows pets",
        "icon": "dog"
      },
      {
        "id": 14,
        "name": "Dedicated workspace",
        "icon": "monitor"
      },
      {
        "id": 15,
        "name": "Washing machine",
        "icon": "disc"
      },
      {
        "id": 16,
        "name": "Dryer",
        "icon": "sun"
      },
      {
        "id": 17,
        "name": "Private patio or balcony",
        "icon": "sun"
      },
      {
        "id": 18,
        "name": "Exterior security cameras",
        "icon": "shield-check"
      },
      {
        "id": 19,
        "name": "Bathtub",
        "icon": "bath"
      },
      {
        "id": 21,
        "name": "Hot water",
        "icon": "flame"
      },
      {
        "id": 23,
        "name": "Room-darkening shades",
        "icon": "moon"
      },
      {
        "id": 24,
        "name": "Extra pillows & blankets",
        "icon": "bed"
      },
      {
        "id": 25,
        "name": "Iron & Board",
        "icon": "shirt"
      },
      {
        "id": 26,
        "name": "Refrigerator",
        "icon": "box"
      },
      {
        "id": 27,
        "name": "Microwave",
        "icon": "box"
      },
      {
        "id": 28,
        "name": "Dishwasher",
        "icon": "sparkles"
      },
      {
        "id": 29,
        "name": "Coffee maker",
        "icon": "coffee"
      },
      {
        "id": 30,
        "name": "Cooking basics",
        "icon": "utensils"
      },
      {
        "id": 31,
        "name": "Dishes & silverware",
        "icon": "utensils"
      },
      {
        "id": 32,
        "name": "Wine glasses",
        "icon": "wine"
      },
      {
        "id": 34,
        "name": "Fire pit & Outdoor Lounge",
        "icon": "flame"
      },
      {
        "id": 35,
        "name": "BBQ grill",
        "icon": "flame"
      },
      {
        "id": 37,
        "name": "Smoke alarm",
        "icon": "shield"
      },
      {
        "id": 38,
        "name": "Carbon monoxide alarm",
        "icon": "shield"
      },
      {
        "id": 39,
        "name": "First aid kit",
        "icon": "cross"
      },
      {
        "id": 40,
        "name": "Smart Keypad Lock",
        "icon": "key"
      },
      {
        "id": 41,
        "name": "EV charger",
        "icon": "zap"
      }
    ],
    "reviews": [
      {
        "id": 8,
        "rating": 4,
        "comment": "Charming studio in the best neighborhood of Paris. Loved the artistic atmosphere and local caf\u00e9s. The view of Sacr\u00e9-C\u0153ur from nearby streets is spectacular.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 6,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      },
      {
        "id": 21,
        "rating": 4,
        "comment": "Incredible stay! The host went above and beyond with local recommendations and thoughtful touches throughout the space.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 1,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      },
      {
        "id": 22,
        "rating": 4,
        "comment": "Absolutely loved staying here! Spotlessly clean, fantastic location, and the host was super helpful.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 2,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      }
    ],
    "booked_ranges": []
  },
  {
    "id": 7,
    "title": "Le Marais Luxury Townhouse",
    "city": "Paris",
    "country": "France",
    "price_per_night": 495.0,
    "property_type": "House",
    "avg_rating": 4.67,
    "review_count": 3,
    "is_wishlisted": false,
    "images": [
      {
        "id": 25,
        "url": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&id=7&p=1",
        "position": 0
      },
      {
        "id": 26,
        "url": "https://images.unsplash.com/photo-1600607687644-c7171b42498f?w=800&id=7&p=2",
        "position": 1
      },
      {
        "id": 27,
        "url": "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800&id=7&p=3",
        "position": 2
      },
      {
        "id": 28,
        "url": "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=800&id=7&p=4",
        "position": 3
      }
    ],
    "description": "Exquisite 17th-century townhouse in the prestigious Le Marais district. Three stories of refined luxury with a private courtyard garden. Antique furnishings harmonize with contemporary amenities for the discerning traveler.",
    "address": "28 Rue des Francs-Bourgeois, Le Marais",
    "latitude": 48.8566,
    "longitude": 2.3619,
    "cleaning_fee": 120.0,
    "service_fee_pct": 14.0,
    "max_guests": 8,
    "bedrooms": 4,
    "beds": 5,
    "bathrooms": 3.0,
    "host": {
      "id": 2,
      "name": "Marco Rossi",
      "email": "host2@demo.com",
      "phone": "+1 (555) 234-5678",
      "avatar_url": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
      "is_superhost": false,
      "bio": "Barcelona local sharing my favorite city spots. Architecture enthusiast and foodie.",
      "created_at": "2021-03-15T00:00:00Z"
    },
    "amenities": [
      {
        "id": 2,
        "name": "Kitchen",
        "icon": "cooking-pot"
      },
      {
        "id": 4,
        "name": "Pool",
        "icon": "waves"
      },
      {
        "id": 5,
        "name": "Air conditioning",
        "icon": "snowflake"
      },
      {
        "id": 7,
        "name": "TV",
        "icon": "tv"
      },
      {
        "id": 11,
        "name": "Wifi",
        "icon": "wifi"
      },
      {
        "id": 12,
        "name": "Free parking on premises",
        "icon": "car"
      },
      {
        "id": 13,
        "name": "Allows pets",
        "icon": "dog"
      },
      {
        "id": 17,
        "name": "Private patio or balcony",
        "icon": "sun"
      },
      {
        "id": 18,
        "name": "Exterior security cameras",
        "icon": "shield-check"
      },
      {
        "id": 19,
        "name": "Bathtub",
        "icon": "bath"
      },
      {
        "id": 20,
        "name": "Hair dryer",
        "icon": "wind"
      },
      {
        "id": 21,
        "name": "Hot water",
        "icon": "flame"
      },
      {
        "id": 22,
        "name": "Shampoo & Body Wash",
        "icon": "sparkles"
      },
      {
        "id": 24,
        "name": "Extra pillows & blankets",
        "icon": "bed"
      },
      {
        "id": 25,
        "name": "Iron & Board",
        "icon": "shirt"
      },
      {
        "id": 26,
        "name": "Refrigerator",
        "icon": "box"
      },
      {
        "id": 27,
        "name": "Microwave",
        "icon": "box"
      },
      {
        "id": 28,
        "name": "Dishwasher",
        "icon": "sparkles"
      },
      {
        "id": 30,
        "name": "Cooking basics",
        "icon": "utensils"
      },
      {
        "id": 33,
        "name": "Toaster",
        "icon": "flame"
      },
      {
        "id": 34,
        "name": "Fire pit & Outdoor Lounge",
        "icon": "flame"
      },
      {
        "id": 36,
        "name": "Garden Backyard View",
        "icon": "trees"
      },
      {
        "id": 37,
        "name": "Smoke alarm",
        "icon": "shield"
      },
      {
        "id": 39,
        "name": "First aid kit",
        "icon": "cross"
      },
      {
        "id": 41,
        "name": "EV charger",
        "icon": "zap"
      }
    ],
    "reviews": [
      {
        "id": 23,
        "rating": 5,
        "comment": "Breathtaking views and top-notch amenities. Everything matched the photos perfectly. Would definitely book again!",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 1,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      },
      {
        "id": 24,
        "rating": 5,
        "comment": "Wonderful experience from start to finish. The bed was extremely comfortable and the neighborhood was quiet yet accessible.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 2,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      },
      {
        "id": 25,
        "rating": 4,
        "comment": "A true gem! The interior design is gorgeous and check-in was seamless. 5 stars all around.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 3,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      }
    ],
    "booked_ranges": []
  },
  {
    "id": 8,
    "title": "Saint-Germain Writer's Retreat",
    "city": "Paris",
    "country": "France",
    "price_per_night": 175.0,
    "property_type": "Apartment",
    "avg_rating": 4.67,
    "review_count": 3,
    "is_wishlisted": false,
    "images": [
      {
        "id": 29,
        "url": "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=800&id=8&p=1",
        "position": 0
      },
      {
        "id": 30,
        "url": "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&id=8&p=2",
        "position": 1
      },
      {
        "id": 31,
        "url": "https://images.unsplash.com/photo-1600585153490-76fb20a32601?w=800&id=8&p=3",
        "position": 2
      },
      {
        "id": 32,
        "url": "https://images.unsplash.com/photo-1600566752447-f4e9e9e2a6c8?w=800&id=8&p=4",
        "position": 3
      }
    ],
    "description": "Inspiring one-bedroom in literary Saint-Germain-des-Pr\u00e9s. This apartment has hosted writers and artists for decades. Built-in bookshelves, a vintage writing desk, and views of rooftops create the perfect creative haven.",
    "address": "67 Rue de Seine, Saint-Germain",
    "latitude": 48.8546,
    "longitude": 2.3375,
    "cleaning_fee": 45.0,
    "service_fee_pct": 14.0,
    "max_guests": 2,
    "bedrooms": 1,
    "beds": 1,
    "bathrooms": 1.0,
    "host": {
      "id": 2,
      "name": "Marco Rossi",
      "email": "host2@demo.com",
      "phone": "+1 (555) 234-5678",
      "avatar_url": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
      "is_superhost": false,
      "bio": "Barcelona local sharing my favorite city spots. Architecture enthusiast and foodie.",
      "created_at": "2021-03-15T00:00:00Z"
    },
    "amenities": [
      {
        "id": 4,
        "name": "Pool",
        "icon": "waves"
      },
      {
        "id": 7,
        "name": "TV",
        "icon": "tv"
      },
      {
        "id": 11,
        "name": "Wifi",
        "icon": "wifi"
      },
      {
        "id": 12,
        "name": "Free parking on premises",
        "icon": "car"
      },
      {
        "id": 13,
        "name": "Allows pets",
        "icon": "dog"
      },
      {
        "id": 14,
        "name": "Dedicated workspace",
        "icon": "monitor"
      },
      {
        "id": 16,
        "name": "Dryer",
        "icon": "sun"
      },
      {
        "id": 17,
        "name": "Private patio or balcony",
        "icon": "sun"
      },
      {
        "id": 18,
        "name": "Exterior security cameras",
        "icon": "shield-check"
      },
      {
        "id": 19,
        "name": "Bathtub",
        "icon": "bath"
      },
      {
        "id": 20,
        "name": "Hair dryer",
        "icon": "wind"
      },
      {
        "id": 21,
        "name": "Hot water",
        "icon": "flame"
      },
      {
        "id": 22,
        "name": "Shampoo & Body Wash",
        "icon": "sparkles"
      },
      {
        "id": 23,
        "name": "Room-darkening shades",
        "icon": "moon"
      },
      {
        "id": 24,
        "name": "Extra pillows & blankets",
        "icon": "bed"
      },
      {
        "id": 26,
        "name": "Refrigerator",
        "icon": "box"
      },
      {
        "id": 27,
        "name": "Microwave",
        "icon": "box"
      },
      {
        "id": 28,
        "name": "Dishwasher",
        "icon": "sparkles"
      },
      {
        "id": 29,
        "name": "Coffee maker",
        "icon": "coffee"
      },
      {
        "id": 30,
        "name": "Cooking basics",
        "icon": "utensils"
      },
      {
        "id": 31,
        "name": "Dishes & silverware",
        "icon": "utensils"
      },
      {
        "id": 32,
        "name": "Wine glasses",
        "icon": "wine"
      },
      {
        "id": 33,
        "name": "Toaster",
        "icon": "flame"
      },
      {
        "id": 34,
        "name": "Fire pit & Outdoor Lounge",
        "icon": "flame"
      },
      {
        "id": 35,
        "name": "BBQ grill",
        "icon": "flame"
      },
      {
        "id": 36,
        "name": "Garden Backyard View",
        "icon": "trees"
      },
      {
        "id": 39,
        "name": "First aid kit",
        "icon": "cross"
      },
      {
        "id": 40,
        "name": "Smart Keypad Lock",
        "icon": "key"
      },
      {
        "id": 41,
        "name": "EV charger",
        "icon": "zap"
      }
    ],
    "reviews": [
      {
        "id": 26,
        "rating": 5,
        "comment": "A true gem! The interior design is gorgeous and check-in was seamless. 5 stars all around.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 1,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      },
      {
        "id": 27,
        "rating": 4,
        "comment": "Incredible stay! The host went above and beyond with local recommendations and thoughtful touches throughout the space.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 2,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      },
      {
        "id": 28,
        "rating": 5,
        "comment": "Wonderful experience from start to finish. The bed was extremely comfortable and the neighborhood was quiet yet accessible.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 3,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      }
    ],
    "booked_ranges": []
  },
  {
    "id": 9,
    "title": "Modern Shibuya Apartment with City Views",
    "city": "Tokyo",
    "country": "Japan",
    "price_per_night": 220.0,
    "property_type": "Apartment",
    "avg_rating": 4.67,
    "review_count": 3,
    "is_wishlisted": false,
    "images": [
      {
        "id": 33,
        "url": "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&id=9&p=1",
        "position": 0
      },
      {
        "id": 34,
        "url": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&id=9&p=2",
        "position": 1
      },
      {
        "id": 35,
        "url": "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800&id=9&p=3",
        "position": 2
      },
      {
        "id": 36,
        "url": "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=800&id=9&p=4",
        "position": 3
      }
    ],
    "description": "Ultra-modern apartment in the heart of Shibuya. Floor-to-ceiling windows overlook the famous Shibuya crossing. Minimalist Japanese design with smart home features. Walking distance to the best shopping, dining, and nightlife in Tokyo.",
    "address": "2-21-1 Shibuya, Shibuya-ku",
    "latitude": 35.658,
    "longitude": 139.7016,
    "cleaning_fee": 60.0,
    "service_fee_pct": 14.0,
    "max_guests": 3,
    "bedrooms": 1,
    "beds": 2,
    "bathrooms": 1.0,
    "host": {
      "id": 3,
      "name": "Yuki Tanaka",
      "email": "host3@demo.com",
      "phone": "+1 (555) 234-5678",
      "avatar_url": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
      "is_superhost": true,
      "bio": "Tokyo native offering authentic Japanese living experiences. Tea ceremony instructor.",
      "created_at": "2021-03-15T00:00:00Z"
    },
    "amenities": [
      {
        "id": 2,
        "name": "Kitchen",
        "icon": "cooking-pot"
      },
      {
        "id": 4,
        "name": "Pool",
        "icon": "waves"
      },
      {
        "id": 5,
        "name": "Air conditioning",
        "icon": "snowflake"
      },
      {
        "id": 7,
        "name": "TV",
        "icon": "tv"
      },
      {
        "id": 11,
        "name": "Wifi",
        "icon": "wifi"
      },
      {
        "id": 12,
        "name": "Free parking on premises",
        "icon": "car"
      },
      {
        "id": 14,
        "name": "Dedicated workspace",
        "icon": "monitor"
      },
      {
        "id": 15,
        "name": "Washing machine",
        "icon": "disc"
      },
      {
        "id": 18,
        "name": "Exterior security cameras",
        "icon": "shield-check"
      },
      {
        "id": 19,
        "name": "Bathtub",
        "icon": "bath"
      },
      {
        "id": 20,
        "name": "Hair dryer",
        "icon": "wind"
      },
      {
        "id": 21,
        "name": "Hot water",
        "icon": "flame"
      },
      {
        "id": 22,
        "name": "Shampoo & Body Wash",
        "icon": "sparkles"
      },
      {
        "id": 23,
        "name": "Room-darkening shades",
        "icon": "moon"
      },
      {
        "id": 24,
        "name": "Extra pillows & blankets",
        "icon": "bed"
      },
      {
        "id": 25,
        "name": "Iron & Board",
        "icon": "shirt"
      },
      {
        "id": 26,
        "name": "Refrigerator",
        "icon": "box"
      },
      {
        "id": 27,
        "name": "Microwave",
        "icon": "box"
      },
      {
        "id": 28,
        "name": "Dishwasher",
        "icon": "sparkles"
      },
      {
        "id": 29,
        "name": "Coffee maker",
        "icon": "coffee"
      },
      {
        "id": 30,
        "name": "Cooking basics",
        "icon": "utensils"
      },
      {
        "id": 31,
        "name": "Dishes & silverware",
        "icon": "utensils"
      },
      {
        "id": 32,
        "name": "Wine glasses",
        "icon": "wine"
      },
      {
        "id": 33,
        "name": "Toaster",
        "icon": "flame"
      },
      {
        "id": 34,
        "name": "Fire pit & Outdoor Lounge",
        "icon": "flame"
      },
      {
        "id": 36,
        "name": "Garden Backyard View",
        "icon": "trees"
      },
      {
        "id": 37,
        "name": "Smoke alarm",
        "icon": "shield"
      },
      {
        "id": 38,
        "name": "Carbon monoxide alarm",
        "icon": "shield"
      },
      {
        "id": 41,
        "name": "EV charger",
        "icon": "zap"
      }
    ],
    "reviews": [
      {
        "id": 3,
        "rating": 4,
        "comment": "Great location right in the heart of Shibuya. The apartment is compact but has everything you need. Yuki provided excellent local restaurant recommendations.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 6,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      },
      {
        "id": 29,
        "rating": 5,
        "comment": "Breathtaking views and top-notch amenities. Everything matched the photos perfectly. Would definitely book again!",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 1,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      },
      {
        "id": 30,
        "rating": 5,
        "comment": "Breathtaking views and top-notch amenities. Everything matched the photos perfectly. Would definitely book again!",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 2,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      }
    ],
    "booked_ranges": []
  },
  {
    "id": 10,
    "title": "Traditional Asakusa Machiya Townhouse",
    "city": "Tokyo",
    "country": "Japan",
    "price_per_night": 180.0,
    "property_type": "House",
    "avg_rating": 5.0,
    "review_count": 3,
    "is_wishlisted": false,
    "images": [
      {
        "id": 37,
        "url": "https://images.unsplash.com/photo-1480796927426-f609979314bd?w=800&id=10&p=1",
        "position": 0
      },
      {
        "id": 38,
        "url": "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&id=10&p=2",
        "position": 1
      },
      {
        "id": 39,
        "url": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&id=10&p=3",
        "position": 2
      },
      {
        "id": 40,
        "url": "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=800&id=10&p=4",
        "position": 3
      }
    ],
    "description": "Experience authentic Japanese living in this beautifully restored machiya (traditional townhouse) near Senso-ji temple. Tatami rooms, a Japanese soaking tub (ofuro), and a tranquil inner garden create an oasis of calm in bustling Tokyo.",
    "address": "3-15-8 Asakusa, Taito-ku",
    "latitude": 35.7148,
    "longitude": 139.7967,
    "cleaning_fee": 50.0,
    "service_fee_pct": 14.0,
    "max_guests": 5,
    "bedrooms": 2,
    "beds": 4,
    "bathrooms": 1.5,
    "host": {
      "id": 3,
      "name": "Yuki Tanaka",
      "email": "host3@demo.com",
      "phone": "+1 (555) 234-5678",
      "avatar_url": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
      "is_superhost": true,
      "bio": "Tokyo native offering authentic Japanese living experiences. Tea ceremony instructor.",
      "created_at": "2021-03-15T00:00:00Z"
    },
    "amenities": [
      {
        "id": 2,
        "name": "Kitchen",
        "icon": "cooking-pot"
      },
      {
        "id": 7,
        "name": "TV",
        "icon": "tv"
      },
      {
        "id": 11,
        "name": "Wifi",
        "icon": "wifi"
      },
      {
        "id": 12,
        "name": "Free parking on premises",
        "icon": "car"
      },
      {
        "id": 13,
        "name": "Allows pets",
        "icon": "dog"
      },
      {
        "id": 15,
        "name": "Washing machine",
        "icon": "disc"
      },
      {
        "id": 16,
        "name": "Dryer",
        "icon": "sun"
      },
      {
        "id": 17,
        "name": "Private patio or balcony",
        "icon": "sun"
      },
      {
        "id": 18,
        "name": "Exterior security cameras",
        "icon": "shield-check"
      },
      {
        "id": 19,
        "name": "Bathtub",
        "icon": "bath"
      },
      {
        "id": 20,
        "name": "Hair dryer",
        "icon": "wind"
      },
      {
        "id": 21,
        "name": "Hot water",
        "icon": "flame"
      },
      {
        "id": 22,
        "name": "Shampoo & Body Wash",
        "icon": "sparkles"
      },
      {
        "id": 25,
        "name": "Iron & Board",
        "icon": "shirt"
      },
      {
        "id": 26,
        "name": "Refrigerator",
        "icon": "box"
      },
      {
        "id": 27,
        "name": "Microwave",
        "icon": "box"
      },
      {
        "id": 28,
        "name": "Dishwasher",
        "icon": "sparkles"
      },
      {
        "id": 29,
        "name": "Coffee maker",
        "icon": "coffee"
      },
      {
        "id": 30,
        "name": "Cooking basics",
        "icon": "utensils"
      },
      {
        "id": 31,
        "name": "Dishes & silverware",
        "icon": "utensils"
      },
      {
        "id": 32,
        "name": "Wine glasses",
        "icon": "wine"
      },
      {
        "id": 33,
        "name": "Toaster",
        "icon": "flame"
      },
      {
        "id": 35,
        "name": "BBQ grill",
        "icon": "flame"
      },
      {
        "id": 36,
        "name": "Garden Backyard View",
        "icon": "trees"
      },
      {
        "id": 37,
        "name": "Smoke alarm",
        "icon": "shield"
      },
      {
        "id": 38,
        "name": "Carbon monoxide alarm",
        "icon": "shield"
      },
      {
        "id": 40,
        "name": "Smart Keypad Lock",
        "icon": "key"
      },
      {
        "id": 41,
        "name": "EV charger",
        "icon": "zap"
      }
    ],
    "reviews": [
      {
        "id": 7,
        "rating": 5,
        "comment": "The most unique accommodation I've ever stayed in. The tatami rooms and Japanese bath were an incredible experience. Senso-ji temple right around the corner!",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 7,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      },
      {
        "id": 31,
        "rating": 5,
        "comment": "Wonderful experience from start to finish. The bed was extremely comfortable and the neighborhood was quiet yet accessible.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 1,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      },
      {
        "id": 32,
        "rating": 5,
        "comment": "Incredible stay! The host went above and beyond with local recommendations and thoughtful touches throughout the space.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 2,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      }
    ],
    "booked_ranges": []
  },
  {
    "id": 11,
    "title": "Minimalist Shinjuku Studio",
    "city": "Tokyo",
    "country": "Japan",
    "price_per_night": 95.0,
    "property_type": "Apartment",
    "avg_rating": 5.0,
    "review_count": 3,
    "is_wishlisted": false,
    "images": [
      {
        "id": 41,
        "url": "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&id=11&p=1",
        "position": 0
      },
      {
        "id": 42,
        "url": "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800&id=11&p=2",
        "position": 1
      },
      {
        "id": 43,
        "url": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&id=11&p=3",
        "position": 2
      },
      {
        "id": 44,
        "url": "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800&id=11&p=4",
        "position": 3
      }
    ],
    "description": "Clean, minimalist studio in Shinjuku \u2014 Tokyo's vibrant entertainment hub. Compact but perfectly designed Japanese-style space with everything you need. Shinjuku Gyoen garden is your backyard.",
    "address": "1-4-15 Shinjuku, Shinjuku-ku",
    "latitude": 35.6938,
    "longitude": 139.7034,
    "cleaning_fee": 30.0,
    "service_fee_pct": 14.0,
    "max_guests": 2,
    "bedrooms": 1,
    "beds": 1,
    "bathrooms": 1.0,
    "host": {
      "id": 3,
      "name": "Yuki Tanaka",
      "email": "host3@demo.com",
      "phone": "+1 (555) 234-5678",
      "avatar_url": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
      "is_superhost": true,
      "bio": "Tokyo native offering authentic Japanese living experiences. Tea ceremony instructor.",
      "created_at": "2021-03-15T00:00:00Z"
    },
    "amenities": [
      {
        "id": 2,
        "name": "Kitchen",
        "icon": "cooking-pot"
      },
      {
        "id": 4,
        "name": "Pool",
        "icon": "waves"
      },
      {
        "id": 5,
        "name": "Air conditioning",
        "icon": "snowflake"
      },
      {
        "id": 7,
        "name": "TV",
        "icon": "tv"
      },
      {
        "id": 11,
        "name": "Wifi",
        "icon": "wifi"
      },
      {
        "id": 12,
        "name": "Free parking on premises",
        "icon": "car"
      },
      {
        "id": 14,
        "name": "Dedicated workspace",
        "icon": "monitor"
      },
      {
        "id": 15,
        "name": "Washing machine",
        "icon": "disc"
      },
      {
        "id": 16,
        "name": "Dryer",
        "icon": "sun"
      },
      {
        "id": 20,
        "name": "Hair dryer",
        "icon": "wind"
      },
      {
        "id": 23,
        "name": "Room-darkening shades",
        "icon": "moon"
      },
      {
        "id": 24,
        "name": "Extra pillows & blankets",
        "icon": "bed"
      },
      {
        "id": 25,
        "name": "Iron & Board",
        "icon": "shirt"
      },
      {
        "id": 26,
        "name": "Refrigerator",
        "icon": "box"
      },
      {
        "id": 29,
        "name": "Coffee maker",
        "icon": "coffee"
      },
      {
        "id": 30,
        "name": "Cooking basics",
        "icon": "utensils"
      },
      {
        "id": 31,
        "name": "Dishes & silverware",
        "icon": "utensils"
      },
      {
        "id": 32,
        "name": "Wine glasses",
        "icon": "wine"
      },
      {
        "id": 33,
        "name": "Toaster",
        "icon": "flame"
      },
      {
        "id": 34,
        "name": "Fire pit & Outdoor Lounge",
        "icon": "flame"
      },
      {
        "id": 36,
        "name": "Garden Backyard View",
        "icon": "trees"
      },
      {
        "id": 37,
        "name": "Smoke alarm",
        "icon": "shield"
      },
      {
        "id": 38,
        "name": "Carbon monoxide alarm",
        "icon": "shield"
      },
      {
        "id": 39,
        "name": "First aid kit",
        "icon": "cross"
      },
      {
        "id": 40,
        "name": "Smart Keypad Lock",
        "icon": "key"
      }
    ],
    "reviews": [
      {
        "id": 33,
        "rating": 5,
        "comment": "Absolutely loved staying here! Spotlessly clean, fantastic location, and the host was super helpful.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 1,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      },
      {
        "id": 34,
        "rating": 5,
        "comment": "A true gem! The interior design is gorgeous and check-in was seamless. 5 stars all around.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 2,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      },
      {
        "id": 35,
        "rating": 5,
        "comment": "A true gem! The interior design is gorgeous and check-in was seamless. 5 stars all around.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 3,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      }
    ],
    "booked_ranges": []
  },
  {
    "id": 12,
    "title": "Roppongi Hills Designer Condo",
    "city": "Tokyo",
    "country": "Japan",
    "price_per_night": 350.0,
    "property_type": "Apartment",
    "avg_rating": 4.67,
    "review_count": 3,
    "is_wishlisted": false,
    "images": [
      {
        "id": 45,
        "url": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&id=12&p=1",
        "position": 0
      },
      {
        "id": 46,
        "url": "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&id=12&p=2",
        "position": 1
      },
      {
        "id": 47,
        "url": "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800&id=12&p=3",
        "position": 2
      },
      {
        "id": 48,
        "url": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&id=12&p=4",
        "position": 3
      }
    ],
    "description": "Sleek designer condo in the prestigious Roppongi Hills complex. High-end finishes, concierge service, and stunning Tokyo Tower views. Perfect for business travelers or anyone seeking luxury in the city center.",
    "address": "6-10-1 Roppongi, Minato-ku",
    "latitude": 35.6604,
    "longitude": 139.7292,
    "cleaning_fee": 80.0,
    "service_fee_pct": 14.0,
    "max_guests": 4,
    "bedrooms": 2,
    "beds": 2,
    "bathrooms": 2.0,
    "host": {
      "id": 3,
      "name": "Yuki Tanaka",
      "email": "host3@demo.com",
      "phone": "+1 (555) 234-5678",
      "avatar_url": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
      "is_superhost": true,
      "bio": "Tokyo native offering authentic Japanese living experiences. Tea ceremony instructor.",
      "created_at": "2021-03-15T00:00:00Z"
    },
    "amenities": [
      {
        "id": 2,
        "name": "Kitchen",
        "icon": "cooking-pot"
      },
      {
        "id": 4,
        "name": "Pool",
        "icon": "waves"
      },
      {
        "id": 7,
        "name": "TV",
        "icon": "tv"
      },
      {
        "id": 11,
        "name": "Wifi",
        "icon": "wifi"
      },
      {
        "id": 12,
        "name": "Free parking on premises",
        "icon": "car"
      },
      {
        "id": 13,
        "name": "Allows pets",
        "icon": "dog"
      },
      {
        "id": 14,
        "name": "Dedicated workspace",
        "icon": "monitor"
      },
      {
        "id": 15,
        "name": "Washing machine",
        "icon": "disc"
      },
      {
        "id": 17,
        "name": "Private patio or balcony",
        "icon": "sun"
      },
      {
        "id": 18,
        "name": "Exterior security cameras",
        "icon": "shield-check"
      },
      {
        "id": 19,
        "name": "Bathtub",
        "icon": "bath"
      },
      {
        "id": 22,
        "name": "Shampoo & Body Wash",
        "icon": "sparkles"
      },
      {
        "id": 23,
        "name": "Room-darkening shades",
        "icon": "moon"
      },
      {
        "id": 24,
        "name": "Extra pillows & blankets",
        "icon": "bed"
      },
      {
        "id": 28,
        "name": "Dishwasher",
        "icon": "sparkles"
      },
      {
        "id": 29,
        "name": "Coffee maker",
        "icon": "coffee"
      },
      {
        "id": 30,
        "name": "Cooking basics",
        "icon": "utensils"
      },
      {
        "id": 31,
        "name": "Dishes & silverware",
        "icon": "utensils"
      },
      {
        "id": 32,
        "name": "Wine glasses",
        "icon": "wine"
      },
      {
        "id": 33,
        "name": "Toaster",
        "icon": "flame"
      },
      {
        "id": 34,
        "name": "Fire pit & Outdoor Lounge",
        "icon": "flame"
      },
      {
        "id": 38,
        "name": "Carbon monoxide alarm",
        "icon": "shield"
      },
      {
        "id": 39,
        "name": "First aid kit",
        "icon": "cross"
      },
      {
        "id": 40,
        "name": "Smart Keypad Lock",
        "icon": "key"
      },
      {
        "id": 41,
        "name": "EV charger",
        "icon": "zap"
      }
    ],
    "reviews": [
      {
        "id": 36,
        "rating": 4,
        "comment": "Breathtaking views and top-notch amenities. Everything matched the photos perfectly. Would definitely book again!",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 1,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      },
      {
        "id": 37,
        "rating": 5,
        "comment": "Breathtaking views and top-notch amenities. Everything matched the photos perfectly. Would definitely book again!",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 2,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      },
      {
        "id": 38,
        "rating": 5,
        "comment": "A true gem! The interior design is gorgeous and check-in was seamless. 5 stars all around.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 3,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      }
    ],
    "booked_ranges": []
  },
  {
    "id": 13,
    "title": "Gothic Quarter Penthouse with Terrace",
    "city": "Barcelona",
    "country": "Spain",
    "price_per_night": 240.0,
    "property_type": "Apartment",
    "avg_rating": 5.0,
    "review_count": 3,
    "is_wishlisted": false,
    "images": [
      {
        "id": 49,
        "url": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&id=13&p=1",
        "position": 0
      },
      {
        "id": 50,
        "url": "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=800&id=13&p=2",
        "position": 1
      },
      {
        "id": 51,
        "url": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&id=13&p=3",
        "position": 2
      },
      {
        "id": 52,
        "url": "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&id=13&p=4",
        "position": 3
      }
    ],
    "description": "Stunning penthouse in Barcelona's historic Gothic Quarter. A large private terrace with views of the cathedral makes this a one-of-a-kind property. Walk to La Rambla, the beach, and Picasso Museum in minutes.",
    "address": "Carrer del Bisbe 8, Gothic Quarter",
    "latitude": 41.3839,
    "longitude": 2.1764,
    "cleaning_fee": 65.0,
    "service_fee_pct": 14.0,
    "max_guests": 4,
    "bedrooms": 2,
    "beds": 2,
    "bathrooms": 1.5,
    "host": {
      "id": 2,
      "name": "Marco Rossi",
      "email": "host2@demo.com",
      "phone": "+1 (555) 234-5678",
      "avatar_url": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
      "is_superhost": false,
      "bio": "Barcelona local sharing my favorite city spots. Architecture enthusiast and foodie.",
      "created_at": "2021-03-15T00:00:00Z"
    },
    "amenities": [
      {
        "id": 2,
        "name": "Kitchen",
        "icon": "cooking-pot"
      },
      {
        "id": 4,
        "name": "Pool",
        "icon": "waves"
      },
      {
        "id": 7,
        "name": "TV",
        "icon": "tv"
      },
      {
        "id": 11,
        "name": "Wifi",
        "icon": "wifi"
      },
      {
        "id": 12,
        "name": "Free parking on premises",
        "icon": "car"
      },
      {
        "id": 13,
        "name": "Allows pets",
        "icon": "dog"
      },
      {
        "id": 15,
        "name": "Washing machine",
        "icon": "disc"
      },
      {
        "id": 16,
        "name": "Dryer",
        "icon": "sun"
      },
      {
        "id": 17,
        "name": "Private patio or balcony",
        "icon": "sun"
      },
      {
        "id": 19,
        "name": "Bathtub",
        "icon": "bath"
      },
      {
        "id": 20,
        "name": "Hair dryer",
        "icon": "wind"
      },
      {
        "id": 21,
        "name": "Hot water",
        "icon": "flame"
      },
      {
        "id": 22,
        "name": "Shampoo & Body Wash",
        "icon": "sparkles"
      },
      {
        "id": 23,
        "name": "Room-darkening shades",
        "icon": "moon"
      },
      {
        "id": 24,
        "name": "Extra pillows & blankets",
        "icon": "bed"
      },
      {
        "id": 25,
        "name": "Iron & Board",
        "icon": "shirt"
      },
      {
        "id": 26,
        "name": "Refrigerator",
        "icon": "box"
      },
      {
        "id": 27,
        "name": "Microwave",
        "icon": "box"
      },
      {
        "id": 28,
        "name": "Dishwasher",
        "icon": "sparkles"
      },
      {
        "id": 29,
        "name": "Coffee maker",
        "icon": "coffee"
      },
      {
        "id": 30,
        "name": "Cooking basics",
        "icon": "utensils"
      },
      {
        "id": 31,
        "name": "Dishes & silverware",
        "icon": "utensils"
      },
      {
        "id": 32,
        "name": "Wine glasses",
        "icon": "wine"
      },
      {
        "id": 34,
        "name": "Fire pit & Outdoor Lounge",
        "icon": "flame"
      },
      {
        "id": 35,
        "name": "BBQ grill",
        "icon": "flame"
      },
      {
        "id": 37,
        "name": "Smoke alarm",
        "icon": "shield"
      },
      {
        "id": 38,
        "name": "Carbon monoxide alarm",
        "icon": "shield"
      },
      {
        "id": 39,
        "name": "First aid kit",
        "icon": "cross"
      },
      {
        "id": 40,
        "name": "Smart Keypad Lock",
        "icon": "key"
      },
      {
        "id": 41,
        "name": "EV charger",
        "icon": "zap"
      }
    ],
    "reviews": [
      {
        "id": 4,
        "rating": 5,
        "comment": "The terrace views of the Gothic Quarter are unreal. Marco was an amazing host and even arranged a private food tour for us. Highly recommend!",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 8,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      },
      {
        "id": 39,
        "rating": 5,
        "comment": "Absolutely loved staying here! Spotlessly clean, fantastic location, and the host was super helpful.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 1,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      },
      {
        "id": 40,
        "rating": 5,
        "comment": "Charming, comfortable, and close to amazing local dining spots. Highly recommended for couples or solo travelers.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 2,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      }
    ],
    "booked_ranges": []
  },
  {
    "id": 14,
    "title": "Beachfront Villa in Barceloneta",
    "city": "Barcelona",
    "country": "Spain",
    "price_per_night": 380.0,
    "property_type": "Villa",
    "avg_rating": 4.67,
    "review_count": 3,
    "is_wishlisted": false,
    "images": [
      {
        "id": 53,
        "url": "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&id=14&p=1",
        "position": 0
      },
      {
        "id": 54,
        "url": "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&id=14&p=2",
        "position": 1
      },
      {
        "id": 55,
        "url": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&id=14&p=3",
        "position": 2
      },
      {
        "id": 56,
        "url": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&id=14&p=4",
        "position": 3
      }
    ],
    "description": "Direct beach access from this renovated villa in Barceloneta. Open-plan living, Mediterranean decor, and a sun-drenched patio. Fall asleep to the sound of waves and wake up steps from the sand.",
    "address": "Passeig Mar\u00edtim 45, Barceloneta",
    "latitude": 41.3784,
    "longitude": 2.1925,
    "cleaning_fee": 90.0,
    "service_fee_pct": 14.0,
    "max_guests": 6,
    "bedrooms": 3,
    "beds": 4,
    "bathrooms": 2.0,
    "host": {
      "id": 2,
      "name": "Marco Rossi",
      "email": "host2@demo.com",
      "phone": "+1 (555) 234-5678",
      "avatar_url": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
      "is_superhost": false,
      "bio": "Barcelona local sharing my favorite city spots. Architecture enthusiast and foodie.",
      "created_at": "2021-03-15T00:00:00Z"
    },
    "amenities": [
      {
        "id": 2,
        "name": "Kitchen",
        "icon": "cooking-pot"
      },
      {
        "id": 5,
        "name": "Air conditioning",
        "icon": "snowflake"
      },
      {
        "id": 7,
        "name": "TV",
        "icon": "tv"
      },
      {
        "id": 11,
        "name": "Wifi",
        "icon": "wifi"
      },
      {
        "id": 12,
        "name": "Free parking on premises",
        "icon": "car"
      },
      {
        "id": 13,
        "name": "Allows pets",
        "icon": "dog"
      },
      {
        "id": 16,
        "name": "Dryer",
        "icon": "sun"
      },
      {
        "id": 17,
        "name": "Private patio or balcony",
        "icon": "sun"
      },
      {
        "id": 18,
        "name": "Exterior security cameras",
        "icon": "shield-check"
      },
      {
        "id": 19,
        "name": "Bathtub",
        "icon": "bath"
      },
      {
        "id": 20,
        "name": "Hair dryer",
        "icon": "wind"
      },
      {
        "id": 21,
        "name": "Hot water",
        "icon": "flame"
      },
      {
        "id": 22,
        "name": "Shampoo & Body Wash",
        "icon": "sparkles"
      },
      {
        "id": 23,
        "name": "Room-darkening shades",
        "icon": "moon"
      },
      {
        "id": 26,
        "name": "Refrigerator",
        "icon": "box"
      },
      {
        "id": 28,
        "name": "Dishwasher",
        "icon": "sparkles"
      },
      {
        "id": 29,
        "name": "Coffee maker",
        "icon": "coffee"
      },
      {
        "id": 30,
        "name": "Cooking basics",
        "icon": "utensils"
      },
      {
        "id": 31,
        "name": "Dishes & silverware",
        "icon": "utensils"
      },
      {
        "id": 32,
        "name": "Wine glasses",
        "icon": "wine"
      },
      {
        "id": 33,
        "name": "Toaster",
        "icon": "flame"
      },
      {
        "id": 34,
        "name": "Fire pit & Outdoor Lounge",
        "icon": "flame"
      },
      {
        "id": 35,
        "name": "BBQ grill",
        "icon": "flame"
      },
      {
        "id": 36,
        "name": "Garden Backyard View",
        "icon": "trees"
      },
      {
        "id": 38,
        "name": "Carbon monoxide alarm",
        "icon": "shield"
      },
      {
        "id": 39,
        "name": "First aid kit",
        "icon": "cross"
      },
      {
        "id": 40,
        "name": "Smart Keypad Lock",
        "icon": "key"
      },
      {
        "id": 41,
        "name": "EV charger",
        "icon": "zap"
      }
    ],
    "reviews": [
      {
        "id": 41,
        "rating": 5,
        "comment": "Wonderful experience from start to finish. The bed was extremely comfortable and the neighborhood was quiet yet accessible.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 1,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      },
      {
        "id": 42,
        "rating": 5,
        "comment": "Incredible stay! The host went above and beyond with local recommendations and thoughtful touches throughout the space.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 2,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      },
      {
        "id": 43,
        "rating": 4,
        "comment": "Wonderful experience from start to finish. The bed was extremely comfortable and the neighborhood was quiet yet accessible.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 3,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      }
    ],
    "booked_ranges": []
  },
  {
    "id": 15,
    "title": "Eixample Modernist Flat",
    "city": "Barcelona",
    "country": "Spain",
    "price_per_night": 200.0,
    "property_type": "Apartment",
    "avg_rating": 5.0,
    "review_count": 3,
    "is_wishlisted": false,
    "images": [
      {
        "id": 57,
        "url": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&id=15&p=1",
        "position": 0
      },
      {
        "id": 58,
        "url": "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&id=15&p=2",
        "position": 1
      },
      {
        "id": 59,
        "url": "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=800&id=15&p=3",
        "position": 2
      },
      {
        "id": 60,
        "url": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&id=15&p=4",
        "position": 3
      }
    ],
    "description": "Gorgeous flat in a Gaud\u00ed-era modernist building. Original mosaic floors, ornate ceilings, and an interior balcony overlooking Passeig de Gr\u00e0cia. Near Sagrada Fam\u00edlia and Casa Batll\u00f3.",
    "address": "Passeig de Gr\u00e0cia 78, Eixample",
    "latitude": 41.3954,
    "longitude": 2.1632,
    "cleaning_fee": 55.0,
    "service_fee_pct": 14.0,
    "max_guests": 4,
    "bedrooms": 2,
    "beds": 2,
    "bathrooms": 1.0,
    "host": {
      "id": 2,
      "name": "Marco Rossi",
      "email": "host2@demo.com",
      "phone": "+1 (555) 234-5678",
      "avatar_url": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
      "is_superhost": false,
      "bio": "Barcelona local sharing my favorite city spots. Architecture enthusiast and foodie.",
      "created_at": "2021-03-15T00:00:00Z"
    },
    "amenities": [
      {
        "id": 2,
        "name": "Kitchen",
        "icon": "cooking-pot"
      },
      {
        "id": 5,
        "name": "Air conditioning",
        "icon": "snowflake"
      },
      {
        "id": 7,
        "name": "TV",
        "icon": "tv"
      },
      {
        "id": 11,
        "name": "Wifi",
        "icon": "wifi"
      },
      {
        "id": 12,
        "name": "Free parking on premises",
        "icon": "car"
      },
      {
        "id": 13,
        "name": "Allows pets",
        "icon": "dog"
      },
      {
        "id": 14,
        "name": "Dedicated workspace",
        "icon": "monitor"
      },
      {
        "id": 15,
        "name": "Washing machine",
        "icon": "disc"
      },
      {
        "id": 19,
        "name": "Bathtub",
        "icon": "bath"
      },
      {
        "id": 20,
        "name": "Hair dryer",
        "icon": "wind"
      },
      {
        "id": 21,
        "name": "Hot water",
        "icon": "flame"
      },
      {
        "id": 22,
        "name": "Shampoo & Body Wash",
        "icon": "sparkles"
      },
      {
        "id": 23,
        "name": "Room-darkening shades",
        "icon": "moon"
      },
      {
        "id": 26,
        "name": "Refrigerator",
        "icon": "box"
      },
      {
        "id": 27,
        "name": "Microwave",
        "icon": "box"
      },
      {
        "id": 28,
        "name": "Dishwasher",
        "icon": "sparkles"
      },
      {
        "id": 29,
        "name": "Coffee maker",
        "icon": "coffee"
      },
      {
        "id": 30,
        "name": "Cooking basics",
        "icon": "utensils"
      },
      {
        "id": 32,
        "name": "Wine glasses",
        "icon": "wine"
      },
      {
        "id": 33,
        "name": "Toaster",
        "icon": "flame"
      },
      {
        "id": 35,
        "name": "BBQ grill",
        "icon": "flame"
      },
      {
        "id": 36,
        "name": "Garden Backyard View",
        "icon": "trees"
      },
      {
        "id": 37,
        "name": "Smoke alarm",
        "icon": "shield"
      },
      {
        "id": 38,
        "name": "Carbon monoxide alarm",
        "icon": "shield"
      },
      {
        "id": 39,
        "name": "First aid kit",
        "icon": "cross"
      },
      {
        "id": 41,
        "name": "EV charger",
        "icon": "zap"
      }
    ],
    "reviews": [
      {
        "id": 44,
        "rating": 5,
        "comment": "Absolutely loved staying here! Spotlessly clean, fantastic location, and the host was super helpful.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 1,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      },
      {
        "id": 45,
        "rating": 5,
        "comment": "Breathtaking views and top-notch amenities. Everything matched the photos perfectly. Would definitely book again!",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 2,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      },
      {
        "id": 46,
        "rating": 5,
        "comment": "Incredible stay! The host went above and beyond with local recommendations and thoughtful touches throughout the space.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 3,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      }
    ],
    "booked_ranges": []
  },
  {
    "id": 16,
    "title": "Ubud Jungle Villa with Infinity Pool",
    "city": "Bali",
    "country": "Indonesia",
    "price_per_night": 155.0,
    "property_type": "Villa",
    "avg_rating": 4.67,
    "review_count": 3,
    "is_wishlisted": false,
    "images": [
      {
        "id": 61,
        "url": "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&id=16&p=1",
        "position": 0
      },
      {
        "id": 62,
        "url": "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&id=16&p=2",
        "position": 1
      },
      {
        "id": 63,
        "url": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&id=16&p=3",
        "position": 2
      },
      {
        "id": 64,
        "url": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&id=16&p=4",
        "position": 3
      }
    ],
    "description": "Escape to this breathtaking villa nestled in Ubud's lush tropical jungle. An infinity pool overlooks the rice terraces, and open-air living lets you commune with nature. Daily breakfast and housekeeping included.",
    "address": "Jl. Raya Tegallalang, Ubud",
    "latitude": -8.4312,
    "longitude": 115.2792,
    "cleaning_fee": 25.0,
    "service_fee_pct": 14.0,
    "max_guests": 4,
    "bedrooms": 2,
    "beds": 2,
    "bathrooms": 2.0,
    "host": {
      "id": 5,
      "name": "Wayan Sudarma",
      "email": "host5@demo.com",
      "phone": "+1 (555) 234-5678",
      "avatar_url": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
      "is_superhost": false,
      "bio": "Bali hospitality expert. Providing tropical paradise retreats for over a decade.",
      "created_at": "2021-03-15T00:00:00Z"
    },
    "amenities": [
      {
        "id": 2,
        "name": "Kitchen",
        "icon": "cooking-pot"
      },
      {
        "id": 7,
        "name": "TV",
        "icon": "tv"
      },
      {
        "id": 11,
        "name": "Wifi",
        "icon": "wifi"
      },
      {
        "id": 12,
        "name": "Free parking on premises",
        "icon": "car"
      },
      {
        "id": 13,
        "name": "Allows pets",
        "icon": "dog"
      },
      {
        "id": 14,
        "name": "Dedicated workspace",
        "icon": "monitor"
      },
      {
        "id": 15,
        "name": "Washing machine",
        "icon": "disc"
      },
      {
        "id": 16,
        "name": "Dryer",
        "icon": "sun"
      },
      {
        "id": 17,
        "name": "Private patio or balcony",
        "icon": "sun"
      },
      {
        "id": 18,
        "name": "Exterior security cameras",
        "icon": "shield-check"
      },
      {
        "id": 20,
        "name": "Hair dryer",
        "icon": "wind"
      },
      {
        "id": 22,
        "name": "Shampoo & Body Wash",
        "icon": "sparkles"
      },
      {
        "id": 23,
        "name": "Room-darkening shades",
        "icon": "moon"
      },
      {
        "id": 24,
        "name": "Extra pillows & blankets",
        "icon": "bed"
      },
      {
        "id": 26,
        "name": "Refrigerator",
        "icon": "box"
      },
      {
        "id": 27,
        "name": "Microwave",
        "icon": "box"
      },
      {
        "id": 29,
        "name": "Coffee maker",
        "icon": "coffee"
      },
      {
        "id": 30,
        "name": "Cooking basics",
        "icon": "utensils"
      },
      {
        "id": 31,
        "name": "Dishes & silverware",
        "icon": "utensils"
      },
      {
        "id": 32,
        "name": "Wine glasses",
        "icon": "wine"
      },
      {
        "id": 35,
        "name": "BBQ grill",
        "icon": "flame"
      },
      {
        "id": 36,
        "name": "Garden Backyard View",
        "icon": "trees"
      },
      {
        "id": 38,
        "name": "Carbon monoxide alarm",
        "icon": "shield"
      },
      {
        "id": 39,
        "name": "First aid kit",
        "icon": "cross"
      },
      {
        "id": 40,
        "name": "Smart Keypad Lock",
        "icon": "key"
      }
    ],
    "reviews": [
      {
        "id": 5,
        "rating": 5,
        "comment": "This villa is paradise. Waking up to jungle views and swimming in the infinity pool overlooking rice terraces was unforgettable. Wayan's hospitality is next level.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 7,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      },
      {
        "id": 47,
        "rating": 4,
        "comment": "A true gem! The interior design is gorgeous and check-in was seamless. 5 stars all around.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 1,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      },
      {
        "id": 48,
        "rating": 5,
        "comment": "Charming, comfortable, and close to amazing local dining spots. Highly recommended for couples or solo travelers.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 2,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      }
    ],
    "booked_ranges": []
  },
  {
    "id": 17,
    "title": "Seminyak Beach Cabana",
    "city": "Bali",
    "country": "Indonesia",
    "price_per_night": 85.0,
    "property_type": "Cabin",
    "avg_rating": 4.67,
    "review_count": 3,
    "is_wishlisted": false,
    "images": [
      {
        "id": 65,
        "url": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&id=17&p=1",
        "position": 0
      },
      {
        "id": 66,
        "url": "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&id=17&p=2",
        "position": 1
      },
      {
        "id": 67,
        "url": "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&id=17&p=3",
        "position": 2
      },
      {
        "id": 68,
        "url": "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&id=17&p=4",
        "position": 3
      }
    ],
    "description": "Laid-back beach cabana just 100 meters from Seminyak Beach. Surf-inspired decor, outdoor shower, and a private garden with hammock. The perfect base for beach lovers and sunset chasers.",
    "address": "Jl. Kayu Aya, Seminyak",
    "latitude": -8.6914,
    "longitude": 115.1593,
    "cleaning_fee": 15.0,
    "service_fee_pct": 14.0,
    "max_guests": 2,
    "bedrooms": 1,
    "beds": 1,
    "bathrooms": 1.0,
    "host": {
      "id": 5,
      "name": "Wayan Sudarma",
      "email": "host5@demo.com",
      "phone": "+1 (555) 234-5678",
      "avatar_url": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
      "is_superhost": false,
      "bio": "Bali hospitality expert. Providing tropical paradise retreats for over a decade.",
      "created_at": "2021-03-15T00:00:00Z"
    },
    "amenities": [
      {
        "id": 2,
        "name": "Kitchen",
        "icon": "cooking-pot"
      },
      {
        "id": 4,
        "name": "Pool",
        "icon": "waves"
      },
      {
        "id": 12,
        "name": "Free parking on premises",
        "icon": "car"
      },
      {
        "id": 13,
        "name": "Allows pets",
        "icon": "dog"
      },
      {
        "id": 14,
        "name": "Dedicated workspace",
        "icon": "monitor"
      },
      {
        "id": 15,
        "name": "Washing machine",
        "icon": "disc"
      },
      {
        "id": 16,
        "name": "Dryer",
        "icon": "sun"
      },
      {
        "id": 17,
        "name": "Private patio or balcony",
        "icon": "sun"
      },
      {
        "id": 19,
        "name": "Bathtub",
        "icon": "bath"
      },
      {
        "id": 20,
        "name": "Hair dryer",
        "icon": "wind"
      },
      {
        "id": 21,
        "name": "Hot water",
        "icon": "flame"
      },
      {
        "id": 22,
        "name": "Shampoo & Body Wash",
        "icon": "sparkles"
      },
      {
        "id": 23,
        "name": "Room-darkening shades",
        "icon": "moon"
      },
      {
        "id": 24,
        "name": "Extra pillows & blankets",
        "icon": "bed"
      },
      {
        "id": 25,
        "name": "Iron & Board",
        "icon": "shirt"
      },
      {
        "id": 26,
        "name": "Refrigerator",
        "icon": "box"
      },
      {
        "id": 27,
        "name": "Microwave",
        "icon": "box"
      },
      {
        "id": 28,
        "name": "Dishwasher",
        "icon": "sparkles"
      },
      {
        "id": 30,
        "name": "Cooking basics",
        "icon": "utensils"
      },
      {
        "id": 31,
        "name": "Dishes & silverware",
        "icon": "utensils"
      },
      {
        "id": 33,
        "name": "Toaster",
        "icon": "flame"
      },
      {
        "id": 34,
        "name": "Fire pit & Outdoor Lounge",
        "icon": "flame"
      },
      {
        "id": 35,
        "name": "BBQ grill",
        "icon": "flame"
      },
      {
        "id": 36,
        "name": "Garden Backyard View",
        "icon": "trees"
      },
      {
        "id": 37,
        "name": "Smoke alarm",
        "icon": "shield"
      },
      {
        "id": 39,
        "name": "First aid kit",
        "icon": "cross"
      },
      {
        "id": 40,
        "name": "Smart Keypad Lock",
        "icon": "key"
      },
      {
        "id": 41,
        "name": "EV charger",
        "icon": "zap"
      }
    ],
    "reviews": [
      {
        "id": 49,
        "rating": 4,
        "comment": "Wonderful experience from start to finish. The bed was extremely comfortable and the neighborhood was quiet yet accessible.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 1,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      },
      {
        "id": 50,
        "rating": 5,
        "comment": "Charming, comfortable, and close to amazing local dining spots. Highly recommended for couples or solo travelers.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 2,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      },
      {
        "id": 51,
        "rating": 5,
        "comment": "Charming, comfortable, and close to amazing local dining spots. Highly recommended for couples or solo travelers.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 3,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      }
    ],
    "booked_ranges": []
  },
  {
    "id": 18,
    "title": "Canggu Surf House with Rooftop",
    "city": "Bali",
    "country": "Indonesia",
    "price_per_night": 120.0,
    "property_type": "House",
    "avg_rating": 5.0,
    "review_count": 3,
    "is_wishlisted": false,
    "images": [
      {
        "id": 69,
        "url": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&id=18&p=1",
        "position": 0
      },
      {
        "id": 70,
        "url": "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&id=18&p=2",
        "position": 1
      },
      {
        "id": 71,
        "url": "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?w=800&id=18&p=3",
        "position": 2
      },
      {
        "id": 72,
        "url": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&id=18&p=4",
        "position": 3
      }
    ],
    "description": "Modern surf house in trendy Canggu with a rooftop terrace and ocean views. Shared surfboard rack, outdoor movie area, and a communal kitchen. Great for solo travelers and groups alike.",
    "address": "Jl. Pantai Batu Bolong, Canggu",
    "latitude": -8.6478,
    "longitude": 115.1385,
    "cleaning_fee": 20.0,
    "service_fee_pct": 14.0,
    "max_guests": 6,
    "bedrooms": 3,
    "beds": 4,
    "bathrooms": 2.0,
    "host": {
      "id": 5,
      "name": "Wayan Sudarma",
      "email": "host5@demo.com",
      "phone": "+1 (555) 234-5678",
      "avatar_url": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
      "is_superhost": false,
      "bio": "Bali hospitality expert. Providing tropical paradise retreats for over a decade.",
      "created_at": "2021-03-15T00:00:00Z"
    },
    "amenities": [
      {
        "id": 2,
        "name": "Kitchen",
        "icon": "cooking-pot"
      },
      {
        "id": 7,
        "name": "TV",
        "icon": "tv"
      },
      {
        "id": 11,
        "name": "Wifi",
        "icon": "wifi"
      },
      {
        "id": 12,
        "name": "Free parking on premises",
        "icon": "car"
      },
      {
        "id": 13,
        "name": "Allows pets",
        "icon": "dog"
      },
      {
        "id": 14,
        "name": "Dedicated workspace",
        "icon": "monitor"
      },
      {
        "id": 15,
        "name": "Washing machine",
        "icon": "disc"
      },
      {
        "id": 16,
        "name": "Dryer",
        "icon": "sun"
      },
      {
        "id": 18,
        "name": "Exterior security cameras",
        "icon": "shield-check"
      },
      {
        "id": 19,
        "name": "Bathtub",
        "icon": "bath"
      },
      {
        "id": 20,
        "name": "Hair dryer",
        "icon": "wind"
      },
      {
        "id": 21,
        "name": "Hot water",
        "icon": "flame"
      },
      {
        "id": 22,
        "name": "Shampoo & Body Wash",
        "icon": "sparkles"
      },
      {
        "id": 23,
        "name": "Room-darkening shades",
        "icon": "moon"
      },
      {
        "id": 24,
        "name": "Extra pillows & blankets",
        "icon": "bed"
      },
      {
        "id": 26,
        "name": "Refrigerator",
        "icon": "box"
      },
      {
        "id": 28,
        "name": "Dishwasher",
        "icon": "sparkles"
      },
      {
        "id": 29,
        "name": "Coffee maker",
        "icon": "coffee"
      },
      {
        "id": 31,
        "name": "Dishes & silverware",
        "icon": "utensils"
      },
      {
        "id": 32,
        "name": "Wine glasses",
        "icon": "wine"
      },
      {
        "id": 33,
        "name": "Toaster",
        "icon": "flame"
      },
      {
        "id": 35,
        "name": "BBQ grill",
        "icon": "flame"
      },
      {
        "id": 36,
        "name": "Garden Backyard View",
        "icon": "trees"
      },
      {
        "id": 37,
        "name": "Smoke alarm",
        "icon": "shield"
      },
      {
        "id": 38,
        "name": "Carbon monoxide alarm",
        "icon": "shield"
      },
      {
        "id": 39,
        "name": "First aid kit",
        "icon": "cross"
      },
      {
        "id": 40,
        "name": "Smart Keypad Lock",
        "icon": "key"
      },
      {
        "id": 41,
        "name": "EV charger",
        "icon": "zap"
      }
    ],
    "reviews": [
      {
        "id": 52,
        "rating": 5,
        "comment": "A true gem! The interior design is gorgeous and check-in was seamless. 5 stars all around.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 1,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      },
      {
        "id": 53,
        "rating": 5,
        "comment": "Wonderful experience from start to finish. The bed was extremely comfortable and the neighborhood was quiet yet accessible.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 2,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      },
      {
        "id": 54,
        "rating": 5,
        "comment": "Incredible stay! The host went above and beyond with local recommendations and thoughtful touches throughout the space.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 3,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      }
    ],
    "booked_ranges": []
  },
  {
    "id": 19,
    "title": "Modern loft ",
    "city": "delhi",
    "country": "india",
    "price_per_night": 150.0,
    "property_type": "Apartment",
    "avg_rating": 4.67,
    "review_count": 3,
    "is_wishlisted": false,
    "images": [
      {
        "id": 73,
        "url": "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=800&id=19&p=1",
        "position": 0
      },
      {
        "id": 74,
        "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&id=19&p=2",
        "position": 1
      },
      {
        "id": 75,
        "url": "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=800&id=19&p=3",
        "position": 2
      },
      {
        "id": 76,
        "url": "https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=800&id=19&p=4",
        "position": 3
      }
    ],
    "description": "Experience unmatched luxury at our 5-star hotel, where sophisticated elegance meets world-class hospitality. Indulge in beautifully designed accommodations, gourmet dining, rejuvenating spa treatments, state-of-the-art fitness facilities, and impeccable service tailored to your every need. Whether you're traveling for business or leisure, every stay promises comfort, style, and unforgettable memories.",
    "address": "delhi Central District",
    "latitude": 28.6139,
    "longitude": 77.209,
    "cleaning_fee": 50.0,
    "service_fee_pct": 14.0,
    "max_guests": 4,
    "bedrooms": 2,
    "beds": 2,
    "bathrooms": 1.5,
    "host": {
      "id": 1,
      "name": "Sarah Johnson",
      "email": "host1@demo.com",
      "phone": "+1 (555) 234-5678",
      "avatar_url": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
      "is_superhost": true,
      "bio": "Superhost with 5+ years of experience. I love sharing beautiful spaces with travelers from around the world.",
      "created_at": "2021-03-15T00:00:00Z"
    },
    "amenities": [
      {
        "id": 4,
        "name": "Pool",
        "icon": "waves"
      },
      {
        "id": 5,
        "name": "Air conditioning",
        "icon": "snowflake"
      },
      {
        "id": 7,
        "name": "TV",
        "icon": "tv"
      },
      {
        "id": 12,
        "name": "Free parking on premises",
        "icon": "car"
      },
      {
        "id": 13,
        "name": "Allows pets",
        "icon": "dog"
      },
      {
        "id": 14,
        "name": "Dedicated workspace",
        "icon": "monitor"
      },
      {
        "id": 15,
        "name": "Washing machine",
        "icon": "disc"
      },
      {
        "id": 16,
        "name": "Dryer",
        "icon": "sun"
      },
      {
        "id": 17,
        "name": "Private patio or balcony",
        "icon": "sun"
      },
      {
        "id": 18,
        "name": "Exterior security cameras",
        "icon": "shield-check"
      },
      {
        "id": 20,
        "name": "Hair dryer",
        "icon": "wind"
      },
      {
        "id": 21,
        "name": "Hot water",
        "icon": "flame"
      },
      {
        "id": 22,
        "name": "Shampoo & Body Wash",
        "icon": "sparkles"
      },
      {
        "id": 23,
        "name": "Room-darkening shades",
        "icon": "moon"
      },
      {
        "id": 24,
        "name": "Extra pillows & blankets",
        "icon": "bed"
      },
      {
        "id": 25,
        "name": "Iron & Board",
        "icon": "shirt"
      },
      {
        "id": 26,
        "name": "Refrigerator",
        "icon": "box"
      },
      {
        "id": 27,
        "name": "Microwave",
        "icon": "box"
      },
      {
        "id": 29,
        "name": "Coffee maker",
        "icon": "coffee"
      },
      {
        "id": 30,
        "name": "Cooking basics",
        "icon": "utensils"
      },
      {
        "id": 32,
        "name": "Wine glasses",
        "icon": "wine"
      },
      {
        "id": 33,
        "name": "Toaster",
        "icon": "flame"
      },
      {
        "id": 34,
        "name": "Fire pit & Outdoor Lounge",
        "icon": "flame"
      },
      {
        "id": 35,
        "name": "BBQ grill",
        "icon": "flame"
      },
      {
        "id": 36,
        "name": "Garden Backyard View",
        "icon": "trees"
      },
      {
        "id": 37,
        "name": "Smoke alarm",
        "icon": "shield"
      },
      {
        "id": 38,
        "name": "Carbon monoxide alarm",
        "icon": "shield"
      },
      {
        "id": 39,
        "name": "First aid kit",
        "icon": "cross"
      },
      {
        "id": 40,
        "name": "Smart Keypad Lock",
        "icon": "key"
      },
      {
        "id": 41,
        "name": "EV charger",
        "icon": "zap"
      }
    ],
    "reviews": [
      {
        "id": 55,
        "rating": 5,
        "comment": "Absolutely loved staying here! Spotlessly clean, fantastic location, and the host was super helpful.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 1,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      },
      {
        "id": 56,
        "rating": 5,
        "comment": "Wonderful experience from start to finish. The bed was extremely comfortable and the neighborhood was quiet yet accessible.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 2,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      },
      {
        "id": 57,
        "rating": 4,
        "comment": "Absolutely loved staying here! Spotlessly clean, fantastic location, and the host was super helpful.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 3,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      }
    ],
    "booked_ranges": []
  },
  {
    "id": 20,
    "title": "Cliffside Luxury Villa with Private Infinity Pool",
    "city": "Bali",
    "country": "Indonesia",
    "price_per_night": 520.0,
    "property_type": "Villa",
    "avg_rating": 4.67,
    "review_count": 3,
    "is_wishlisted": false,
    "images": [
      {
        "id": 77,
        "url": "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800&id=20&p=1",
        "position": 0
      },
      {
        "id": 78,
        "url": "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&id=20&p=2",
        "position": 1
      },
      {
        "id": 79,
        "url": "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800&id=20&p=3",
        "position": 2
      },
      {
        "id": 80,
        "url": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&id=20&p=4",
        "position": 3
      }
    ],
    "description": "Breathtaking luxury villa featuring an open-air lounge, private infinity pool overlooking turquoise ocean waters, and sun loungers. Perfect for romantic getaways or group retreats.",
    "address": "Jl. Sunset Coast, Uluwatu",
    "latitude": -8.8149,
    "longitude": 115.0884,
    "cleaning_fee": 110.0,
    "service_fee_pct": 14.0,
    "max_guests": 6,
    "bedrooms": 3,
    "beds": 4,
    "bathrooms": 3.0,
    "host": {
      "id": 1,
      "name": "Sarah Johnson",
      "email": "host1@demo.com",
      "phone": "+1 (555) 234-5678",
      "avatar_url": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
      "is_superhost": true,
      "bio": "Superhost with 5+ years of experience. I love sharing beautiful spaces with travelers from around the world.",
      "created_at": "2021-03-15T00:00:00Z"
    },
    "amenities": [
      {
        "id": 2,
        "name": "Kitchen",
        "icon": "cooking-pot"
      },
      {
        "id": 4,
        "name": "Pool",
        "icon": "waves"
      },
      {
        "id": 7,
        "name": "TV",
        "icon": "tv"
      },
      {
        "id": 13,
        "name": "Allows pets",
        "icon": "dog"
      },
      {
        "id": 15,
        "name": "Washing machine",
        "icon": "disc"
      },
      {
        "id": 16,
        "name": "Dryer",
        "icon": "sun"
      },
      {
        "id": 17,
        "name": "Private patio or balcony",
        "icon": "sun"
      },
      {
        "id": 18,
        "name": "Exterior security cameras",
        "icon": "shield-check"
      },
      {
        "id": 20,
        "name": "Hair dryer",
        "icon": "wind"
      },
      {
        "id": 21,
        "name": "Hot water",
        "icon": "flame"
      },
      {
        "id": 22,
        "name": "Shampoo & Body Wash",
        "icon": "sparkles"
      },
      {
        "id": 23,
        "name": "Room-darkening shades",
        "icon": "moon"
      },
      {
        "id": 25,
        "name": "Iron & Board",
        "icon": "shirt"
      },
      {
        "id": 26,
        "name": "Refrigerator",
        "icon": "box"
      },
      {
        "id": 28,
        "name": "Dishwasher",
        "icon": "sparkles"
      },
      {
        "id": 29,
        "name": "Coffee maker",
        "icon": "coffee"
      },
      {
        "id": 30,
        "name": "Cooking basics",
        "icon": "utensils"
      },
      {
        "id": 31,
        "name": "Dishes & silverware",
        "icon": "utensils"
      },
      {
        "id": 32,
        "name": "Wine glasses",
        "icon": "wine"
      },
      {
        "id": 33,
        "name": "Toaster",
        "icon": "flame"
      },
      {
        "id": 34,
        "name": "Fire pit & Outdoor Lounge",
        "icon": "flame"
      },
      {
        "id": 35,
        "name": "BBQ grill",
        "icon": "flame"
      },
      {
        "id": 36,
        "name": "Garden Backyard View",
        "icon": "trees"
      },
      {
        "id": 37,
        "name": "Smoke alarm",
        "icon": "shield"
      },
      {
        "id": 39,
        "name": "First aid kit",
        "icon": "cross"
      },
      {
        "id": 40,
        "name": "Smart Keypad Lock",
        "icon": "key"
      },
      {
        "id": 41,
        "name": "EV charger",
        "icon": "zap"
      }
    ],
    "reviews": [
      {
        "id": 58,
        "rating": 4,
        "comment": "Pure luxury! The views were spectacular and everything was impeccably clean.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 6,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      },
      {
        "id": 59,
        "rating": 5,
        "comment": "Sublime place! The design and ambiance exceeded all expectations. Host was incredible.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 7,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      },
      {
        "id": 60,
        "rating": 5,
        "comment": "Pure luxury! The views were spectacular and everything was impeccably clean.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 8,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      }
    ],
    "booked_ranges": []
  },
  {
    "id": 21,
    "title": "Modern Oceanfront Villa in Seminyak",
    "city": "Bali",
    "country": "Indonesia",
    "price_per_night": 380.0,
    "property_type": "Villa",
    "avg_rating": 5.0,
    "review_count": 3,
    "is_wishlisted": false,
    "images": [
      {
        "id": 81,
        "url": "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&id=21&p=1",
        "position": 0
      },
      {
        "id": 82,
        "url": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&id=21&p=2",
        "position": 1
      },
      {
        "id": 83,
        "url": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&id=21&p=3",
        "position": 2
      },
      {
        "id": 84,
        "url": "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&id=21&p=4",
        "position": 3
      }
    ],
    "description": "Contemporary 4-bedroom villa with lush tropical gardens, a private swimming pool, and direct beach access. Includes daily gourmet breakfast and butler service.",
    "address": "Jl. Petitenget 88, Seminyak",
    "latitude": -8.6812,
    "longitude": 115.1524,
    "cleaning_fee": 85.0,
    "service_fee_pct": 14.0,
    "max_guests": 8,
    "bedrooms": 4,
    "beds": 5,
    "bathrooms": 4.0,
    "host": {
      "id": 2,
      "name": "Marco Rossi",
      "email": "host2@demo.com",
      "phone": "+1 (555) 234-5678",
      "avatar_url": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
      "is_superhost": false,
      "bio": "Barcelona local sharing my favorite city spots. Architecture enthusiast and foodie.",
      "created_at": "2021-03-15T00:00:00Z"
    },
    "amenities": [
      {
        "id": 2,
        "name": "Kitchen",
        "icon": "cooking-pot"
      },
      {
        "id": 4,
        "name": "Pool",
        "icon": "waves"
      },
      {
        "id": 5,
        "name": "Air conditioning",
        "icon": "snowflake"
      },
      {
        "id": 7,
        "name": "TV",
        "icon": "tv"
      },
      {
        "id": 12,
        "name": "Free parking on premises",
        "icon": "car"
      },
      {
        "id": 13,
        "name": "Allows pets",
        "icon": "dog"
      },
      {
        "id": 14,
        "name": "Dedicated workspace",
        "icon": "monitor"
      },
      {
        "id": 15,
        "name": "Washing machine",
        "icon": "disc"
      },
      {
        "id": 16,
        "name": "Dryer",
        "icon": "sun"
      },
      {
        "id": 17,
        "name": "Private patio or balcony",
        "icon": "sun"
      },
      {
        "id": 18,
        "name": "Exterior security cameras",
        "icon": "shield-check"
      },
      {
        "id": 19,
        "name": "Bathtub",
        "icon": "bath"
      },
      {
        "id": 20,
        "name": "Hair dryer",
        "icon": "wind"
      },
      {
        "id": 21,
        "name": "Hot water",
        "icon": "flame"
      },
      {
        "id": 22,
        "name": "Shampoo & Body Wash",
        "icon": "sparkles"
      },
      {
        "id": 23,
        "name": "Room-darkening shades",
        "icon": "moon"
      },
      {
        "id": 24,
        "name": "Extra pillows & blankets",
        "icon": "bed"
      },
      {
        "id": 26,
        "name": "Refrigerator",
        "icon": "box"
      },
      {
        "id": 27,
        "name": "Microwave",
        "icon": "box"
      },
      {
        "id": 28,
        "name": "Dishwasher",
        "icon": "sparkles"
      },
      {
        "id": 30,
        "name": "Cooking basics",
        "icon": "utensils"
      },
      {
        "id": 32,
        "name": "Wine glasses",
        "icon": "wine"
      },
      {
        "id": 34,
        "name": "Fire pit & Outdoor Lounge",
        "icon": "flame"
      },
      {
        "id": 36,
        "name": "Garden Backyard View",
        "icon": "trees"
      },
      {
        "id": 37,
        "name": "Smoke alarm",
        "icon": "shield"
      },
      {
        "id": 38,
        "name": "Carbon monoxide alarm",
        "icon": "shield"
      },
      {
        "id": 39,
        "name": "First aid kit",
        "icon": "cross"
      },
      {
        "id": 40,
        "name": "Smart Keypad Lock",
        "icon": "key"
      },
      {
        "id": 41,
        "name": "EV charger",
        "icon": "zap"
      }
    ],
    "reviews": [
      {
        "id": 61,
        "rating": 5,
        "comment": "Pure luxury! The views were spectacular and everything was impeccably clean.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 6,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      },
      {
        "id": 62,
        "rating": 5,
        "comment": "Amazing stay! Comfortable beds, great amenities, and super fast WiFi.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 7,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      },
      {
        "id": 63,
        "rating": 5,
        "comment": "Pure luxury! The views were spectacular and everything was impeccably clean.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 8,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      }
    ],
    "booked_ranges": []
  },
  {
    "id": 22,
    "title": "Mediterranean Sunset Villa with Garden",
    "city": "Barcelona",
    "country": "Spain",
    "price_per_night": 460.0,
    "property_type": "Villa",
    "avg_rating": 5.0,
    "review_count": 3,
    "is_wishlisted": false,
    "images": [
      {
        "id": 85,
        "url": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&id=22&p=1",
        "position": 0
      },
      {
        "id": 86,
        "url": "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&id=22&p=2",
        "position": 1
      },
      {
        "id": 87,
        "url": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&id=22&p=3",
        "position": 2
      },
      {
        "id": 88,
        "url": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&id=22&p=4",
        "position": 3
      }
    ],
    "description": "Elegant Villa in Barcelona with panoramic Mediterranean views, stone terrace, outdoor barbecue grill, and private swimming pool.",
    "address": "Avinguda del Tibidabo 34",
    "latitude": 41.4124,
    "longitude": 2.1378,
    "cleaning_fee": 95.0,
    "service_fee_pct": 14.0,
    "max_guests": 6,
    "bedrooms": 3,
    "beds": 4,
    "bathrooms": 2.5,
    "host": {
      "id": 3,
      "name": "Yuki Tanaka",
      "email": "host3@demo.com",
      "phone": "+1 (555) 234-5678",
      "avatar_url": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
      "is_superhost": true,
      "bio": "Tokyo native offering authentic Japanese living experiences. Tea ceremony instructor.",
      "created_at": "2021-03-15T00:00:00Z"
    },
    "amenities": [
      {
        "id": 2,
        "name": "Kitchen",
        "icon": "cooking-pot"
      },
      {
        "id": 5,
        "name": "Air conditioning",
        "icon": "snowflake"
      },
      {
        "id": 7,
        "name": "TV",
        "icon": "tv"
      },
      {
        "id": 11,
        "name": "Wifi",
        "icon": "wifi"
      },
      {
        "id": 12,
        "name": "Free parking on premises",
        "icon": "car"
      },
      {
        "id": 14,
        "name": "Dedicated workspace",
        "icon": "monitor"
      },
      {
        "id": 15,
        "name": "Washing machine",
        "icon": "disc"
      },
      {
        "id": 16,
        "name": "Dryer",
        "icon": "sun"
      },
      {
        "id": 18,
        "name": "Exterior security cameras",
        "icon": "shield-check"
      },
      {
        "id": 20,
        "name": "Hair dryer",
        "icon": "wind"
      },
      {
        "id": 22,
        "name": "Shampoo & Body Wash",
        "icon": "sparkles"
      },
      {
        "id": 23,
        "name": "Room-darkening shades",
        "icon": "moon"
      },
      {
        "id": 24,
        "name": "Extra pillows & blankets",
        "icon": "bed"
      },
      {
        "id": 25,
        "name": "Iron & Board",
        "icon": "shirt"
      },
      {
        "id": 26,
        "name": "Refrigerator",
        "icon": "box"
      },
      {
        "id": 29,
        "name": "Coffee maker",
        "icon": "coffee"
      },
      {
        "id": 30,
        "name": "Cooking basics",
        "icon": "utensils"
      },
      {
        "id": 32,
        "name": "Wine glasses",
        "icon": "wine"
      },
      {
        "id": 33,
        "name": "Toaster",
        "icon": "flame"
      },
      {
        "id": 34,
        "name": "Fire pit & Outdoor Lounge",
        "icon": "flame"
      },
      {
        "id": 35,
        "name": "BBQ grill",
        "icon": "flame"
      },
      {
        "id": 36,
        "name": "Garden Backyard View",
        "icon": "trees"
      },
      {
        "id": 37,
        "name": "Smoke alarm",
        "icon": "shield"
      },
      {
        "id": 38,
        "name": "Carbon monoxide alarm",
        "icon": "shield"
      },
      {
        "id": 39,
        "name": "First aid kit",
        "icon": "cross"
      },
      {
        "id": 40,
        "name": "Smart Keypad Lock",
        "icon": "key"
      },
      {
        "id": 41,
        "name": "EV charger",
        "icon": "zap"
      }
    ],
    "reviews": [
      {
        "id": 64,
        "rating": 5,
        "comment": "Amazing stay! Comfortable beds, great amenities, and super fast WiFi.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 6,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      },
      {
        "id": 65,
        "rating": 5,
        "comment": "Sublime place! The design and ambiance exceeded all expectations. Host was incredible.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 7,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      },
      {
        "id": 66,
        "rating": 5,
        "comment": "Sublime place! The design and ambiance exceeded all expectations. Host was incredible.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 8,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      }
    ],
    "booked_ranges": []
  },
  {
    "id": 23,
    "title": "Cozy Alpine Timber Cabin with Hot Tub",
    "city": "Paris",
    "country": "France",
    "price_per_night": 240.0,
    "property_type": "Cabin",
    "avg_rating": 4.67,
    "review_count": 3,
    "is_wishlisted": false,
    "images": [
      {
        "id": 89,
        "url": "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&id=23&p=1",
        "position": 0
      },
      {
        "id": 90,
        "url": "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&id=23&p=2",
        "position": 1
      },
      {
        "id": 91,
        "url": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&id=23&p=3",
        "position": 2
      },
      {
        "id": 92,
        "url": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&id=23&p=4",
        "position": 3
      }
    ],
    "description": "Rustic wooden timber cabin surrounded by pine trees. Features a stone fireplace, outdoor heated Jacuzzi hot tub, stargazing deck, and ski-in/ski-out convenience.",
    "address": "Route des Alpes 12",
    "latitude": 48.8566,
    "longitude": 2.3522,
    "cleaning_fee": 55.0,
    "service_fee_pct": 14.0,
    "max_guests": 4,
    "bedrooms": 2,
    "beds": 2,
    "bathrooms": 1.5,
    "host": {
      "id": 4,
      "name": "Emily Chen",
      "email": "host4@demo.com",
      "phone": "+1 (555) 234-5678",
      "avatar_url": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop",
      "is_superhost": true,
      "bio": "NYC apartment curator. I find and design the most Instagram-worthy spaces in Manhattan.",
      "created_at": "2021-03-15T00:00:00Z"
    },
    "amenities": [
      {
        "id": 2,
        "name": "Kitchen",
        "icon": "cooking-pot"
      },
      {
        "id": 4,
        "name": "Pool",
        "icon": "waves"
      },
      {
        "id": 11,
        "name": "Wifi",
        "icon": "wifi"
      },
      {
        "id": 12,
        "name": "Free parking on premises",
        "icon": "car"
      },
      {
        "id": 13,
        "name": "Allows pets",
        "icon": "dog"
      },
      {
        "id": 14,
        "name": "Dedicated workspace",
        "icon": "monitor"
      },
      {
        "id": 15,
        "name": "Washing machine",
        "icon": "disc"
      },
      {
        "id": 17,
        "name": "Private patio or balcony",
        "icon": "sun"
      },
      {
        "id": 18,
        "name": "Exterior security cameras",
        "icon": "shield-check"
      },
      {
        "id": 19,
        "name": "Bathtub",
        "icon": "bath"
      },
      {
        "id": 20,
        "name": "Hair dryer",
        "icon": "wind"
      },
      {
        "id": 21,
        "name": "Hot water",
        "icon": "flame"
      },
      {
        "id": 22,
        "name": "Shampoo & Body Wash",
        "icon": "sparkles"
      },
      {
        "id": 23,
        "name": "Room-darkening shades",
        "icon": "moon"
      },
      {
        "id": 25,
        "name": "Iron & Board",
        "icon": "shirt"
      },
      {
        "id": 26,
        "name": "Refrigerator",
        "icon": "box"
      },
      {
        "id": 27,
        "name": "Microwave",
        "icon": "box"
      },
      {
        "id": 28,
        "name": "Dishwasher",
        "icon": "sparkles"
      },
      {
        "id": 29,
        "name": "Coffee maker",
        "icon": "coffee"
      },
      {
        "id": 30,
        "name": "Cooking basics",
        "icon": "utensils"
      },
      {
        "id": 31,
        "name": "Dishes & silverware",
        "icon": "utensils"
      },
      {
        "id": 32,
        "name": "Wine glasses",
        "icon": "wine"
      },
      {
        "id": 33,
        "name": "Toaster",
        "icon": "flame"
      },
      {
        "id": 35,
        "name": "BBQ grill",
        "icon": "flame"
      },
      {
        "id": 37,
        "name": "Smoke alarm",
        "icon": "shield"
      },
      {
        "id": 38,
        "name": "Carbon monoxide alarm",
        "icon": "shield"
      },
      {
        "id": 39,
        "name": "First aid kit",
        "icon": "cross"
      },
      {
        "id": 41,
        "name": "EV charger",
        "icon": "zap"
      }
    ],
    "reviews": [
      {
        "id": 67,
        "rating": 5,
        "comment": "Pure luxury! The views were spectacular and everything was impeccably clean.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 6,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      },
      {
        "id": 68,
        "rating": 5,
        "comment": "Pure luxury! The views were spectacular and everything was impeccably clean.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 7,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      },
      {
        "id": 69,
        "rating": 4,
        "comment": "Sublime place! The design and ambiance exceeded all expectations. Host was incredible.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 8,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      }
    ],
    "booked_ranges": []
  },
  {
    "id": 24,
    "title": "Secluded Bamboo Forest Cabin",
    "city": "Bali",
    "country": "Indonesia",
    "price_per_night": 130.0,
    "property_type": "Cabin",
    "avg_rating": 5.0,
    "review_count": 3,
    "is_wishlisted": false,
    "images": [
      {
        "id": 93,
        "url": "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=800&id=24&p=1",
        "position": 0
      },
      {
        "id": 94,
        "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&id=24&p=2",
        "position": 1
      },
      {
        "id": 95,
        "url": "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=800&id=24&p=3",
        "position": 2
      },
      {
        "id": 96,
        "url": "https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=800&id=24&p=4",
        "position": 3
      }
    ],
    "description": "Eco-friendly hand-crafted bamboo cabin hidden in the peaceful forest. Open-air living room, hammock overlooking river streams, and organic morning tea.",
    "address": "Jl. Bamboo Ridge, Sidemen",
    "latitude": -8.4831,
    "longitude": 115.4412,
    "cleaning_fee": 25.0,
    "service_fee_pct": 14.0,
    "max_guests": 2,
    "bedrooms": 1,
    "beds": 1,
    "bathrooms": 1.0,
    "host": {
      "id": 5,
      "name": "Wayan Sudarma",
      "email": "host5@demo.com",
      "phone": "+1 (555) 234-5678",
      "avatar_url": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
      "is_superhost": false,
      "bio": "Bali hospitality expert. Providing tropical paradise retreats for over a decade.",
      "created_at": "2021-03-15T00:00:00Z"
    },
    "amenities": [
      {
        "id": 2,
        "name": "Kitchen",
        "icon": "cooking-pot"
      },
      {
        "id": 4,
        "name": "Pool",
        "icon": "waves"
      },
      {
        "id": 5,
        "name": "Air conditioning",
        "icon": "snowflake"
      },
      {
        "id": 7,
        "name": "TV",
        "icon": "tv"
      },
      {
        "id": 11,
        "name": "Wifi",
        "icon": "wifi"
      },
      {
        "id": 12,
        "name": "Free parking on premises",
        "icon": "car"
      },
      {
        "id": 14,
        "name": "Dedicated workspace",
        "icon": "monitor"
      },
      {
        "id": 15,
        "name": "Washing machine",
        "icon": "disc"
      },
      {
        "id": 17,
        "name": "Private patio or balcony",
        "icon": "sun"
      },
      {
        "id": 18,
        "name": "Exterior security cameras",
        "icon": "shield-check"
      },
      {
        "id": 19,
        "name": "Bathtub",
        "icon": "bath"
      },
      {
        "id": 20,
        "name": "Hair dryer",
        "icon": "wind"
      },
      {
        "id": 21,
        "name": "Hot water",
        "icon": "flame"
      },
      {
        "id": 22,
        "name": "Shampoo & Body Wash",
        "icon": "sparkles"
      },
      {
        "id": 23,
        "name": "Room-darkening shades",
        "icon": "moon"
      },
      {
        "id": 24,
        "name": "Extra pillows & blankets",
        "icon": "bed"
      },
      {
        "id": 25,
        "name": "Iron & Board",
        "icon": "shirt"
      },
      {
        "id": 26,
        "name": "Refrigerator",
        "icon": "box"
      },
      {
        "id": 27,
        "name": "Microwave",
        "icon": "box"
      },
      {
        "id": 28,
        "name": "Dishwasher",
        "icon": "sparkles"
      },
      {
        "id": 30,
        "name": "Cooking basics",
        "icon": "utensils"
      },
      {
        "id": 31,
        "name": "Dishes & silverware",
        "icon": "utensils"
      },
      {
        "id": 32,
        "name": "Wine glasses",
        "icon": "wine"
      },
      {
        "id": 33,
        "name": "Toaster",
        "icon": "flame"
      },
      {
        "id": 34,
        "name": "Fire pit & Outdoor Lounge",
        "icon": "flame"
      },
      {
        "id": 36,
        "name": "Garden Backyard View",
        "icon": "trees"
      },
      {
        "id": 37,
        "name": "Smoke alarm",
        "icon": "shield"
      },
      {
        "id": 38,
        "name": "Carbon monoxide alarm",
        "icon": "shield"
      },
      {
        "id": 40,
        "name": "Smart Keypad Lock",
        "icon": "key"
      },
      {
        "id": 41,
        "name": "EV charger",
        "icon": "zap"
      }
    ],
    "reviews": [
      {
        "id": 70,
        "rating": 5,
        "comment": "Amazing stay! Comfortable beds, great amenities, and super fast WiFi.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 6,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      },
      {
        "id": 71,
        "rating": 5,
        "comment": "Sublime place! The design and ambiance exceeded all expectations. Host was incredible.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 7,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      },
      {
        "id": 72,
        "rating": 5,
        "comment": "Amazing stay! Comfortable beds, great amenities, and super fast WiFi.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 8,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      }
    ],
    "booked_ranges": []
  },
  {
    "id": 25,
    "title": "Mountain View Log Cabin with Fireplace",
    "city": "Tokyo",
    "country": "Japan",
    "price_per_night": 195.0,
    "property_type": "Cabin",
    "avg_rating": 4.67,
    "review_count": 3,
    "is_wishlisted": false,
    "images": [
      {
        "id": 97,
        "url": "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800&id=25&p=1",
        "position": 0
      },
      {
        "id": 98,
        "url": "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&id=25&p=2",
        "position": 1
      },
      {
        "id": 99,
        "url": "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800&id=25&p=3",
        "position": 2
      },
      {
        "id": 100,
        "url": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&id=25&p=4",
        "position": 3
      }
    ],
    "description": "Tranquil mountain log cabin with vaulted wooden ceilings, cozy wood-burning stove, large deck, and panoramic forest views.",
    "address": "55 Okutama Valley, Tokyo-to",
    "latitude": 35.8092,
    "longitude": 139.0964,
    "cleaning_fee": 40.0,
    "service_fee_pct": 14.0,
    "max_guests": 4,
    "bedrooms": 2,
    "beds": 3,
    "bathrooms": 1.0,
    "host": {
      "id": 10,
      "name": "shivem",
      "email": "shivemkumar8434@gmail.com",
      "phone": "+1 (555) 234-5678",
      "avatar_url": null,
      "is_superhost": false,
      "bio": null,
      "created_at": "2021-03-15T00:00:00Z"
    },
    "amenities": [
      {
        "id": 2,
        "name": "Kitchen",
        "icon": "cooking-pot"
      },
      {
        "id": 4,
        "name": "Pool",
        "icon": "waves"
      },
      {
        "id": 7,
        "name": "TV",
        "icon": "tv"
      },
      {
        "id": 11,
        "name": "Wifi",
        "icon": "wifi"
      },
      {
        "id": 15,
        "name": "Washing machine",
        "icon": "disc"
      },
      {
        "id": 16,
        "name": "Dryer",
        "icon": "sun"
      },
      {
        "id": 17,
        "name": "Private patio or balcony",
        "icon": "sun"
      },
      {
        "id": 18,
        "name": "Exterior security cameras",
        "icon": "shield-check"
      },
      {
        "id": 19,
        "name": "Bathtub",
        "icon": "bath"
      },
      {
        "id": 20,
        "name": "Hair dryer",
        "icon": "wind"
      },
      {
        "id": 21,
        "name": "Hot water",
        "icon": "flame"
      },
      {
        "id": 22,
        "name": "Shampoo & Body Wash",
        "icon": "sparkles"
      },
      {
        "id": 23,
        "name": "Room-darkening shades",
        "icon": "moon"
      },
      {
        "id": 24,
        "name": "Extra pillows & blankets",
        "icon": "bed"
      },
      {
        "id": 26,
        "name": "Refrigerator",
        "icon": "box"
      },
      {
        "id": 28,
        "name": "Dishwasher",
        "icon": "sparkles"
      },
      {
        "id": 30,
        "name": "Cooking basics",
        "icon": "utensils"
      },
      {
        "id": 31,
        "name": "Dishes & silverware",
        "icon": "utensils"
      },
      {
        "id": 32,
        "name": "Wine glasses",
        "icon": "wine"
      },
      {
        "id": 34,
        "name": "Fire pit & Outdoor Lounge",
        "icon": "flame"
      },
      {
        "id": 35,
        "name": "BBQ grill",
        "icon": "flame"
      },
      {
        "id": 36,
        "name": "Garden Backyard View",
        "icon": "trees"
      },
      {
        "id": 38,
        "name": "Carbon monoxide alarm",
        "icon": "shield"
      },
      {
        "id": 40,
        "name": "Smart Keypad Lock",
        "icon": "key"
      },
      {
        "id": 41,
        "name": "EV charger",
        "icon": "zap"
      }
    ],
    "reviews": [
      {
        "id": 73,
        "rating": 5,
        "comment": "Amazing stay! Comfortable beds, great amenities, and super fast WiFi.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 6,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      },
      {
        "id": 74,
        "rating": 4,
        "comment": "Sublime place! The design and ambiance exceeded all expectations. Host was incredible.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 7,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      },
      {
        "id": 75,
        "rating": 5,
        "comment": "Pure luxury! The views were spectacular and everything was impeccably clean.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 8,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      }
    ],
    "booked_ranges": []
  },
  {
    "id": 26,
    "title": "Industrial Chic SoHo Designer Loft",
    "city": "New York",
    "country": "United States",
    "price_per_night": 310.0,
    "property_type": "Loft",
    "avg_rating": 5.0,
    "review_count": 3,
    "is_wishlisted": false,
    "images": [
      {
        "id": 101,
        "url": "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&id=26&p=1",
        "position": 0
      },
      {
        "id": 102,
        "url": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&id=26&p=2",
        "position": 1
      },
      {
        "id": 103,
        "url": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&id=26&p=3",
        "position": 2
      },
      {
        "id": 104,
        "url": "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&id=26&p=4",
        "position": 3
      }
    ],
    "description": "Sprawling 1,800 sq ft industrial loft in SoHo with soaring 14ft ceilings, exposed brick walls, polished concrete floors, and curated contemporary artwork.",
    "address": "112 Spring St, SoHo",
    "latitude": 40.7248,
    "longitude": -73.9982,
    "cleaning_fee": 75.0,
    "service_fee_pct": 14.0,
    "max_guests": 4,
    "bedrooms": 2,
    "beds": 2,
    "bathrooms": 2.0,
    "host": {
      "id": 1,
      "name": "Sarah Johnson",
      "email": "host1@demo.com",
      "phone": "+1 (555) 234-5678",
      "avatar_url": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
      "is_superhost": true,
      "bio": "Superhost with 5+ years of experience. I love sharing beautiful spaces with travelers from around the world.",
      "created_at": "2021-03-15T00:00:00Z"
    },
    "amenities": [
      {
        "id": 2,
        "name": "Kitchen",
        "icon": "cooking-pot"
      },
      {
        "id": 4,
        "name": "Pool",
        "icon": "waves"
      },
      {
        "id": 7,
        "name": "TV",
        "icon": "tv"
      },
      {
        "id": 12,
        "name": "Free parking on premises",
        "icon": "car"
      },
      {
        "id": 13,
        "name": "Allows pets",
        "icon": "dog"
      },
      {
        "id": 14,
        "name": "Dedicated workspace",
        "icon": "monitor"
      },
      {
        "id": 16,
        "name": "Dryer",
        "icon": "sun"
      },
      {
        "id": 17,
        "name": "Private patio or balcony",
        "icon": "sun"
      },
      {
        "id": 18,
        "name": "Exterior security cameras",
        "icon": "shield-check"
      },
      {
        "id": 20,
        "name": "Hair dryer",
        "icon": "wind"
      },
      {
        "id": 21,
        "name": "Hot water",
        "icon": "flame"
      },
      {
        "id": 22,
        "name": "Shampoo & Body Wash",
        "icon": "sparkles"
      },
      {
        "id": 23,
        "name": "Room-darkening shades",
        "icon": "moon"
      },
      {
        "id": 24,
        "name": "Extra pillows & blankets",
        "icon": "bed"
      },
      {
        "id": 25,
        "name": "Iron & Board",
        "icon": "shirt"
      },
      {
        "id": 26,
        "name": "Refrigerator",
        "icon": "box"
      },
      {
        "id": 27,
        "name": "Microwave",
        "icon": "box"
      },
      {
        "id": 28,
        "name": "Dishwasher",
        "icon": "sparkles"
      },
      {
        "id": 30,
        "name": "Cooking basics",
        "icon": "utensils"
      },
      {
        "id": 31,
        "name": "Dishes & silverware",
        "icon": "utensils"
      },
      {
        "id": 32,
        "name": "Wine glasses",
        "icon": "wine"
      },
      {
        "id": 33,
        "name": "Toaster",
        "icon": "flame"
      },
      {
        "id": 35,
        "name": "BBQ grill",
        "icon": "flame"
      },
      {
        "id": 36,
        "name": "Garden Backyard View",
        "icon": "trees"
      },
      {
        "id": 37,
        "name": "Smoke alarm",
        "icon": "shield"
      },
      {
        "id": 38,
        "name": "Carbon monoxide alarm",
        "icon": "shield"
      },
      {
        "id": 39,
        "name": "First aid kit",
        "icon": "cross"
      },
      {
        "id": 40,
        "name": "Smart Keypad Lock",
        "icon": "key"
      },
      {
        "id": 41,
        "name": "EV charger",
        "icon": "zap"
      }
    ],
    "reviews": [
      {
        "id": 76,
        "rating": 5,
        "comment": "Pure luxury! The views were spectacular and everything was impeccably clean.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 6,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      },
      {
        "id": 77,
        "rating": 5,
        "comment": "Pure luxury! The views were spectacular and everything was impeccably clean.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 7,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      },
      {
        "id": 78,
        "rating": 5,
        "comment": "Pure luxury! The views were spectacular and everything was impeccably clean.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 8,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      }
    ],
    "booked_ranges": []
  },
  {
    "id": 27,
    "title": "High-Ceiling Parisian Artist Loft",
    "city": "Paris",
    "country": "France",
    "price_per_night": 260.0,
    "property_type": "Loft",
    "avg_rating": 4.67,
    "review_count": 3,
    "is_wishlisted": false,
    "images": [
      {
        "id": 105,
        "url": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&id=27&p=1",
        "position": 0
      },
      {
        "id": 106,
        "url": "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&id=27&p=2",
        "position": 1
      },
      {
        "id": 107,
        "url": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&id=27&p=3",
        "position": 2
      },
      {
        "id": 108,
        "url": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&id=27&p=4",
        "position": 3
      }
    ],
    "description": "Light-filled artist loft in Canal Saint-Martin with skylights, vintage furnishings, grand piano, and private balcony overlooking tree-lined streets.",
    "address": "84 Quai de Valmy, 10th Arr.",
    "latitude": 48.8712,
    "longitude": 2.3648,
    "cleaning_fee": 60.0,
    "service_fee_pct": 14.0,
    "max_guests": 3,
    "bedrooms": 1,
    "beds": 2,
    "bathrooms": 1.5,
    "host": {
      "id": 2,
      "name": "Marco Rossi",
      "email": "host2@demo.com",
      "phone": "+1 (555) 234-5678",
      "avatar_url": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
      "is_superhost": false,
      "bio": "Barcelona local sharing my favorite city spots. Architecture enthusiast and foodie.",
      "created_at": "2021-03-15T00:00:00Z"
    },
    "amenities": [
      {
        "id": 2,
        "name": "Kitchen",
        "icon": "cooking-pot"
      },
      {
        "id": 4,
        "name": "Pool",
        "icon": "waves"
      },
      {
        "id": 5,
        "name": "Air conditioning",
        "icon": "snowflake"
      },
      {
        "id": 7,
        "name": "TV",
        "icon": "tv"
      },
      {
        "id": 11,
        "name": "Wifi",
        "icon": "wifi"
      },
      {
        "id": 13,
        "name": "Allows pets",
        "icon": "dog"
      },
      {
        "id": 14,
        "name": "Dedicated workspace",
        "icon": "monitor"
      },
      {
        "id": 15,
        "name": "Washing machine",
        "icon": "disc"
      },
      {
        "id": 16,
        "name": "Dryer",
        "icon": "sun"
      },
      {
        "id": 18,
        "name": "Exterior security cameras",
        "icon": "shield-check"
      },
      {
        "id": 19,
        "name": "Bathtub",
        "icon": "bath"
      },
      {
        "id": 22,
        "name": "Shampoo & Body Wash",
        "icon": "sparkles"
      },
      {
        "id": 23,
        "name": "Room-darkening shades",
        "icon": "moon"
      },
      {
        "id": 24,
        "name": "Extra pillows & blankets",
        "icon": "bed"
      },
      {
        "id": 25,
        "name": "Iron & Board",
        "icon": "shirt"
      },
      {
        "id": 28,
        "name": "Dishwasher",
        "icon": "sparkles"
      },
      {
        "id": 29,
        "name": "Coffee maker",
        "icon": "coffee"
      },
      {
        "id": 30,
        "name": "Cooking basics",
        "icon": "utensils"
      },
      {
        "id": 31,
        "name": "Dishes & silverware",
        "icon": "utensils"
      },
      {
        "id": 32,
        "name": "Wine glasses",
        "icon": "wine"
      },
      {
        "id": 35,
        "name": "BBQ grill",
        "icon": "flame"
      },
      {
        "id": 36,
        "name": "Garden Backyard View",
        "icon": "trees"
      },
      {
        "id": 37,
        "name": "Smoke alarm",
        "icon": "shield"
      },
      {
        "id": 38,
        "name": "Carbon monoxide alarm",
        "icon": "shield"
      },
      {
        "id": 40,
        "name": "Smart Keypad Lock",
        "icon": "key"
      },
      {
        "id": 41,
        "name": "EV charger",
        "icon": "zap"
      }
    ],
    "reviews": [
      {
        "id": 79,
        "rating": 5,
        "comment": "Amazing stay! Comfortable beds, great amenities, and super fast WiFi.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 6,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      },
      {
        "id": 80,
        "rating": 5,
        "comment": "Amazing stay! Comfortable beds, great amenities, and super fast WiFi.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 7,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      },
      {
        "id": 81,
        "rating": 4,
        "comment": "Amazing stay! Comfortable beds, great amenities, and super fast WiFi.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 8,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      }
    ],
    "booked_ranges": []
  },
  {
    "id": 28,
    "title": "Skyline Penthouse Loft in Shibuya",
    "city": "Tokyo",
    "country": "Japan",
    "price_per_night": 290.0,
    "property_type": "Loft",
    "avg_rating": 4.67,
    "review_count": 3,
    "is_wishlisted": false,
    "images": [
      {
        "id": 109,
        "url": "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&id=28&p=1",
        "position": 0
      },
      {
        "id": 110,
        "url": "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&id=28&p=2",
        "position": 1
      },
      {
        "id": 111,
        "url": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&id=28&p=3",
        "position": 2
      },
      {
        "id": 112,
        "url": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&id=28&p=4",
        "position": 3
      }
    ],
    "description": "Double-height glass penthouse loft overlooking Shibuya skyline. Features private roof deck, sound system, and smart home lighting.",
    "address": "1-14-6 Jinnan, Shibuya-ku",
    "latitude": 35.6621,
    "longitude": 139.7002,
    "cleaning_fee": 65.0,
    "service_fee_pct": 14.0,
    "max_guests": 4,
    "bedrooms": 2,
    "beds": 2,
    "bathrooms": 1.5,
    "host": {
      "id": 3,
      "name": "Yuki Tanaka",
      "email": "host3@demo.com",
      "phone": "+1 (555) 234-5678",
      "avatar_url": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
      "is_superhost": true,
      "bio": "Tokyo native offering authentic Japanese living experiences. Tea ceremony instructor.",
      "created_at": "2021-03-15T00:00:00Z"
    },
    "amenities": [
      {
        "id": 4,
        "name": "Pool",
        "icon": "waves"
      },
      {
        "id": 7,
        "name": "TV",
        "icon": "tv"
      },
      {
        "id": 11,
        "name": "Wifi",
        "icon": "wifi"
      },
      {
        "id": 12,
        "name": "Free parking on premises",
        "icon": "car"
      },
      {
        "id": 13,
        "name": "Allows pets",
        "icon": "dog"
      },
      {
        "id": 14,
        "name": "Dedicated workspace",
        "icon": "monitor"
      },
      {
        "id": 16,
        "name": "Dryer",
        "icon": "sun"
      },
      {
        "id": 17,
        "name": "Private patio or balcony",
        "icon": "sun"
      },
      {
        "id": 18,
        "name": "Exterior security cameras",
        "icon": "shield-check"
      },
      {
        "id": 21,
        "name": "Hot water",
        "icon": "flame"
      },
      {
        "id": 22,
        "name": "Shampoo & Body Wash",
        "icon": "sparkles"
      },
      {
        "id": 23,
        "name": "Room-darkening shades",
        "icon": "moon"
      },
      {
        "id": 25,
        "name": "Iron & Board",
        "icon": "shirt"
      },
      {
        "id": 26,
        "name": "Refrigerator",
        "icon": "box"
      },
      {
        "id": 28,
        "name": "Dishwasher",
        "icon": "sparkles"
      },
      {
        "id": 29,
        "name": "Coffee maker",
        "icon": "coffee"
      },
      {
        "id": 30,
        "name": "Cooking basics",
        "icon": "utensils"
      },
      {
        "id": 31,
        "name": "Dishes & silverware",
        "icon": "utensils"
      },
      {
        "id": 34,
        "name": "Fire pit & Outdoor Lounge",
        "icon": "flame"
      },
      {
        "id": 35,
        "name": "BBQ grill",
        "icon": "flame"
      },
      {
        "id": 37,
        "name": "Smoke alarm",
        "icon": "shield"
      },
      {
        "id": 38,
        "name": "Carbon monoxide alarm",
        "icon": "shield"
      },
      {
        "id": 39,
        "name": "First aid kit",
        "icon": "cross"
      },
      {
        "id": 40,
        "name": "Smart Keypad Lock",
        "icon": "key"
      },
      {
        "id": 41,
        "name": "EV charger",
        "icon": "zap"
      }
    ],
    "reviews": [
      {
        "id": 82,
        "rating": 5,
        "comment": "Amazing stay! Comfortable beds, great amenities, and super fast WiFi.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 6,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      },
      {
        "id": 83,
        "rating": 5,
        "comment": "Amazing stay! Comfortable beds, great amenities, and super fast WiFi.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 7,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      },
      {
        "id": 84,
        "rating": 4,
        "comment": "Sublime place! The design and ambiance exceeded all expectations. Host was incredible.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 8,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      }
    ],
    "booked_ranges": []
  },
  {
    "id": 29,
    "title": "2BHK Vintage Kolkata Heritage Home",
    "city": "Kolkata",
    "country": "India",
    "price_per_night": 85.0,
    "property_type": "Villa",
    "avg_rating": 4.67,
    "review_count": 3,
    "is_wishlisted": false,
    "images": [
      {
        "id": 113,
        "url": "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=800&id=29&p=1",
        "position": 0
      },
      {
        "id": 114,
        "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&id=29&p=2",
        "position": 1
      },
      {
        "id": 115,
        "url": "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=800&id=29&p=3",
        "position": 2
      },
      {
        "id": 116,
        "url": "https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=800&id=29&p=4",
        "position": 3
      }
    ],
    "description": "Spacious heritage property with classic high ceilings, antique teak furniture, and private courtyard in cultural Kolkata.",
    "address": "Ballygunge Circular Rd",
    "latitude": 22.528,
    "longitude": 88.3659,
    "cleaning_fee": 15.0,
    "service_fee_pct": 14.0,
    "max_guests": 5,
    "bedrooms": 2,
    "beds": 2,
    "bathrooms": 2.0,
    "host": {
      "id": 1,
      "name": "Sarah Johnson",
      "email": "host1@demo.com",
      "phone": "+1 (555) 234-5678",
      "avatar_url": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
      "is_superhost": true,
      "bio": "Superhost with 5+ years of experience. I love sharing beautiful spaces with travelers from around the world.",
      "created_at": "2021-03-15T00:00:00Z"
    },
    "amenities": [
      {
        "id": 2,
        "name": "Kitchen",
        "icon": "cooking-pot"
      },
      {
        "id": 4,
        "name": "Pool",
        "icon": "waves"
      },
      {
        "id": 12,
        "name": "Free parking on premises",
        "icon": "car"
      },
      {
        "id": 13,
        "name": "Allows pets",
        "icon": "dog"
      },
      {
        "id": 14,
        "name": "Dedicated workspace",
        "icon": "monitor"
      },
      {
        "id": 15,
        "name": "Washing machine",
        "icon": "disc"
      },
      {
        "id": 16,
        "name": "Dryer",
        "icon": "sun"
      },
      {
        "id": 18,
        "name": "Exterior security cameras",
        "icon": "shield-check"
      },
      {
        "id": 19,
        "name": "Bathtub",
        "icon": "bath"
      },
      {
        "id": 20,
        "name": "Hair dryer",
        "icon": "wind"
      },
      {
        "id": 21,
        "name": "Hot water",
        "icon": "flame"
      },
      {
        "id": 22,
        "name": "Shampoo & Body Wash",
        "icon": "sparkles"
      },
      {
        "id": 23,
        "name": "Room-darkening shades",
        "icon": "moon"
      },
      {
        "id": 24,
        "name": "Extra pillows & blankets",
        "icon": "bed"
      },
      {
        "id": 26,
        "name": "Refrigerator",
        "icon": "box"
      },
      {
        "id": 27,
        "name": "Microwave",
        "icon": "box"
      },
      {
        "id": 29,
        "name": "Coffee maker",
        "icon": "coffee"
      },
      {
        "id": 30,
        "name": "Cooking basics",
        "icon": "utensils"
      },
      {
        "id": 32,
        "name": "Wine glasses",
        "icon": "wine"
      },
      {
        "id": 33,
        "name": "Toaster",
        "icon": "flame"
      },
      {
        "id": 34,
        "name": "Fire pit & Outdoor Lounge",
        "icon": "flame"
      },
      {
        "id": 35,
        "name": "BBQ grill",
        "icon": "flame"
      },
      {
        "id": 38,
        "name": "Carbon monoxide alarm",
        "icon": "shield"
      },
      {
        "id": 40,
        "name": "Smart Keypad Lock",
        "icon": "key"
      },
      {
        "id": 41,
        "name": "EV charger",
        "icon": "zap"
      }
    ],
    "reviews": [
      {
        "id": 85,
        "rating": 5,
        "comment": "Amazing stay! Comfortable beds, great amenities, and super fast WiFi.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 6,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      },
      {
        "id": 86,
        "rating": 5,
        "comment": "Sublime place! The design and ambiance exceeded all expectations. Host was incredible.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 7,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      },
      {
        "id": 87,
        "rating": 4,
        "comment": "Amazing stay! Comfortable beds, great amenities, and super fast WiFi.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 8,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      }
    ],
    "booked_ranges": []
  },
  {
    "id": 30,
    "title": "Aura Kashi Luxury Haveli near Ghats",
    "city": "Varanasi",
    "country": "India",
    "price_per_night": 120.0,
    "property_type": "House",
    "avg_rating": 4.33,
    "review_count": 3,
    "is_wishlisted": false,
    "images": [
      {
        "id": 117,
        "url": "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800&id=30&p=1",
        "position": 0
      },
      {
        "id": 118,
        "url": "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&id=30&p=2",
        "position": 1
      },
      {
        "id": 119,
        "url": "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800&id=30&p=3",
        "position": 2
      },
      {
        "id": 120,
        "url": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&id=30&p=4",
        "position": 3
      }
    ],
    "description": "Restored royal Haveli steps away from the sacred Dashashwamedh Ghat. Features marble courtyards and rooftop river views.",
    "address": "Ghat Road, Kashi",
    "latitude": 25.3176,
    "longitude": 82.9739,
    "cleaning_fee": 20.0,
    "service_fee_pct": 14.0,
    "max_guests": 6,
    "bedrooms": 3,
    "beds": 3,
    "bathrooms": 3.0,
    "host": {
      "id": 2,
      "name": "Marco Rossi",
      "email": "host2@demo.com",
      "phone": "+1 (555) 234-5678",
      "avatar_url": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
      "is_superhost": false,
      "bio": "Barcelona local sharing my favorite city spots. Architecture enthusiast and foodie.",
      "created_at": "2021-03-15T00:00:00Z"
    },
    "amenities": [
      {
        "id": 2,
        "name": "Kitchen",
        "icon": "cooking-pot"
      },
      {
        "id": 4,
        "name": "Pool",
        "icon": "waves"
      },
      {
        "id": 7,
        "name": "TV",
        "icon": "tv"
      },
      {
        "id": 12,
        "name": "Free parking on premises",
        "icon": "car"
      },
      {
        "id": 13,
        "name": "Allows pets",
        "icon": "dog"
      },
      {
        "id": 15,
        "name": "Washing machine",
        "icon": "disc"
      },
      {
        "id": 18,
        "name": "Exterior security cameras",
        "icon": "shield-check"
      },
      {
        "id": 19,
        "name": "Bathtub",
        "icon": "bath"
      },
      {
        "id": 20,
        "name": "Hair dryer",
        "icon": "wind"
      },
      {
        "id": 21,
        "name": "Hot water",
        "icon": "flame"
      },
      {
        "id": 22,
        "name": "Shampoo & Body Wash",
        "icon": "sparkles"
      },
      {
        "id": 23,
        "name": "Room-darkening shades",
        "icon": "moon"
      },
      {
        "id": 24,
        "name": "Extra pillows & blankets",
        "icon": "bed"
      },
      {
        "id": 25,
        "name": "Iron & Board",
        "icon": "shirt"
      },
      {
        "id": 27,
        "name": "Microwave",
        "icon": "box"
      },
      {
        "id": 29,
        "name": "Coffee maker",
        "icon": "coffee"
      },
      {
        "id": 30,
        "name": "Cooking basics",
        "icon": "utensils"
      },
      {
        "id": 31,
        "name": "Dishes & silverware",
        "icon": "utensils"
      },
      {
        "id": 32,
        "name": "Wine glasses",
        "icon": "wine"
      },
      {
        "id": 33,
        "name": "Toaster",
        "icon": "flame"
      },
      {
        "id": 35,
        "name": "BBQ grill",
        "icon": "flame"
      },
      {
        "id": 36,
        "name": "Garden Backyard View",
        "icon": "trees"
      },
      {
        "id": 37,
        "name": "Smoke alarm",
        "icon": "shield"
      },
      {
        "id": 38,
        "name": "Carbon monoxide alarm",
        "icon": "shield"
      },
      {
        "id": 41,
        "name": "EV charger",
        "icon": "zap"
      }
    ],
    "reviews": [
      {
        "id": 88,
        "rating": 4,
        "comment": "Sublime place! The design and ambiance exceeded all expectations. Host was incredible.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 6,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      },
      {
        "id": 89,
        "rating": 4,
        "comment": "Amazing stay! Comfortable beds, great amenities, and super fast WiFi.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 7,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      },
      {
        "id": 90,
        "rating": 5,
        "comment": "Amazing stay! Comfortable beds, great amenities, and super fast WiFi.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 8,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      }
    ],
    "booked_ranges": []
  },
  {
    "id": 31,
    "title": "Ratna Villas & Himalayan Gardens",
    "city": "Siliguri",
    "country": "India",
    "price_per_night": 160.0,
    "property_type": "Villa",
    "avg_rating": 5.0,
    "review_count": 3,
    "is_wishlisted": false,
    "images": [
      {
        "id": 121,
        "url": "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&id=31&p=1",
        "position": 0
      },
      {
        "id": 122,
        "url": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&id=31&p=2",
        "position": 1
      },
      {
        "id": 123,
        "url": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&id=31&p=3",
        "position": 2
      },
      {
        "id": 124,
        "url": "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&id=31&p=4",
        "position": 3
      }
    ],
    "description": "Peaceful luxury villa surrounded by tea gardens and Himalayan foothills with private swimming pool and veranda.",
    "address": "Hill Cart Road",
    "latitude": 26.7271,
    "longitude": 88.3953,
    "cleaning_fee": 30.0,
    "service_fee_pct": 14.0,
    "max_guests": 8,
    "bedrooms": 4,
    "beds": 4,
    "bathrooms": 4.0,
    "host": {
      "id": 3,
      "name": "Yuki Tanaka",
      "email": "host3@demo.com",
      "phone": "+1 (555) 234-5678",
      "avatar_url": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
      "is_superhost": true,
      "bio": "Tokyo native offering authentic Japanese living experiences. Tea ceremony instructor.",
      "created_at": "2021-03-15T00:00:00Z"
    },
    "amenities": [
      {
        "id": 2,
        "name": "Kitchen",
        "icon": "cooking-pot"
      },
      {
        "id": 4,
        "name": "Pool",
        "icon": "waves"
      },
      {
        "id": 7,
        "name": "TV",
        "icon": "tv"
      },
      {
        "id": 11,
        "name": "Wifi",
        "icon": "wifi"
      },
      {
        "id": 12,
        "name": "Free parking on premises",
        "icon": "car"
      },
      {
        "id": 13,
        "name": "Allows pets",
        "icon": "dog"
      },
      {
        "id": 15,
        "name": "Washing machine",
        "icon": "disc"
      },
      {
        "id": 16,
        "name": "Dryer",
        "icon": "sun"
      },
      {
        "id": 17,
        "name": "Private patio or balcony",
        "icon": "sun"
      },
      {
        "id": 18,
        "name": "Exterior security cameras",
        "icon": "shield-check"
      },
      {
        "id": 20,
        "name": "Hair dryer",
        "icon": "wind"
      },
      {
        "id": 21,
        "name": "Hot water",
        "icon": "flame"
      },
      {
        "id": 22,
        "name": "Shampoo & Body Wash",
        "icon": "sparkles"
      },
      {
        "id": 23,
        "name": "Room-darkening shades",
        "icon": "moon"
      },
      {
        "id": 24,
        "name": "Extra pillows & blankets",
        "icon": "bed"
      },
      {
        "id": 25,
        "name": "Iron & Board",
        "icon": "shirt"
      },
      {
        "id": 27,
        "name": "Microwave",
        "icon": "box"
      },
      {
        "id": 30,
        "name": "Cooking basics",
        "icon": "utensils"
      },
      {
        "id": 31,
        "name": "Dishes & silverware",
        "icon": "utensils"
      },
      {
        "id": 34,
        "name": "Fire pit & Outdoor Lounge",
        "icon": "flame"
      },
      {
        "id": 35,
        "name": "BBQ grill",
        "icon": "flame"
      },
      {
        "id": 36,
        "name": "Garden Backyard View",
        "icon": "trees"
      },
      {
        "id": 37,
        "name": "Smoke alarm",
        "icon": "shield"
      },
      {
        "id": 40,
        "name": "Smart Keypad Lock",
        "icon": "key"
      },
      {
        "id": 41,
        "name": "EV charger",
        "icon": "zap"
      }
    ],
    "reviews": [
      {
        "id": 91,
        "rating": 5,
        "comment": "Unforgettable experience! Wonderful host, peaceful location, highly recommended.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 6,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      },
      {
        "id": 92,
        "rating": 5,
        "comment": "Sublime place! The design and ambiance exceeded all expectations. Host was incredible.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 7,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      },
      {
        "id": 93,
        "rating": 5,
        "comment": "Sublime place! The design and ambiance exceeded all expectations. Host was incredible.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 8,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      }
    ],
    "booked_ranges": []
  },
  {
    "id": 32,
    "title": "Sea View Luxury Penthouse in Marine Drive",
    "city": "Mumbai",
    "country": "India",
    "price_per_night": 250.0,
    "property_type": "Apartment",
    "avg_rating": 4.33,
    "review_count": 3,
    "is_wishlisted": false,
    "images": [
      {
        "id": 125,
        "url": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&id=32&p=1",
        "position": 0
      },
      {
        "id": 126,
        "url": "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&id=32&p=2",
        "position": 1
      },
      {
        "id": 127,
        "url": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&id=32&p=3",
        "position": 2
      },
      {
        "id": 128,
        "url": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&id=32&p=4",
        "position": 3
      }
    ],
    "description": "Iconic Arabian Sea view penthouse on Marine Drive with private balcony, designer interiors, and sunset lounge.",
    "address": "Marine Drive, Nariman Point",
    "latitude": 18.9438,
    "longitude": 72.8232,
    "cleaning_fee": 40.0,
    "service_fee_pct": 14.0,
    "max_guests": 4,
    "bedrooms": 2,
    "beds": 2,
    "bathrooms": 2.0,
    "host": {
      "id": 4,
      "name": "Emily Chen",
      "email": "host4@demo.com",
      "phone": "+1 (555) 234-5678",
      "avatar_url": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop",
      "is_superhost": true,
      "bio": "NYC apartment curator. I find and design the most Instagram-worthy spaces in Manhattan.",
      "created_at": "2021-03-15T00:00:00Z"
    },
    "amenities": [
      {
        "id": 2,
        "name": "Kitchen",
        "icon": "cooking-pot"
      },
      {
        "id": 4,
        "name": "Pool",
        "icon": "waves"
      },
      {
        "id": 5,
        "name": "Air conditioning",
        "icon": "snowflake"
      },
      {
        "id": 11,
        "name": "Wifi",
        "icon": "wifi"
      },
      {
        "id": 12,
        "name": "Free parking on premises",
        "icon": "car"
      },
      {
        "id": 13,
        "name": "Allows pets",
        "icon": "dog"
      },
      {
        "id": 14,
        "name": "Dedicated workspace",
        "icon": "monitor"
      },
      {
        "id": 15,
        "name": "Washing machine",
        "icon": "disc"
      },
      {
        "id": 16,
        "name": "Dryer",
        "icon": "sun"
      },
      {
        "id": 17,
        "name": "Private patio or balcony",
        "icon": "sun"
      },
      {
        "id": 19,
        "name": "Bathtub",
        "icon": "bath"
      },
      {
        "id": 20,
        "name": "Hair dryer",
        "icon": "wind"
      },
      {
        "id": 21,
        "name": "Hot water",
        "icon": "flame"
      },
      {
        "id": 22,
        "name": "Shampoo & Body Wash",
        "icon": "sparkles"
      },
      {
        "id": 23,
        "name": "Room-darkening shades",
        "icon": "moon"
      },
      {
        "id": 24,
        "name": "Extra pillows & blankets",
        "icon": "bed"
      },
      {
        "id": 25,
        "name": "Iron & Board",
        "icon": "shirt"
      },
      {
        "id": 27,
        "name": "Microwave",
        "icon": "box"
      },
      {
        "id": 28,
        "name": "Dishwasher",
        "icon": "sparkles"
      },
      {
        "id": 31,
        "name": "Dishes & silverware",
        "icon": "utensils"
      },
      {
        "id": 32,
        "name": "Wine glasses",
        "icon": "wine"
      },
      {
        "id": 33,
        "name": "Toaster",
        "icon": "flame"
      },
      {
        "id": 34,
        "name": "Fire pit & Outdoor Lounge",
        "icon": "flame"
      },
      {
        "id": 35,
        "name": "BBQ grill",
        "icon": "flame"
      },
      {
        "id": 36,
        "name": "Garden Backyard View",
        "icon": "trees"
      },
      {
        "id": 37,
        "name": "Smoke alarm",
        "icon": "shield"
      },
      {
        "id": 38,
        "name": "Carbon monoxide alarm",
        "icon": "shield"
      },
      {
        "id": 39,
        "name": "First aid kit",
        "icon": "cross"
      },
      {
        "id": 40,
        "name": "Smart Keypad Lock",
        "icon": "key"
      },
      {
        "id": 41,
        "name": "EV charger",
        "icon": "zap"
      }
    ],
    "reviews": [
      {
        "id": 94,
        "rating": 4,
        "comment": "Pure luxury! The views were spectacular and everything was impeccably clean.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 6,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      },
      {
        "id": 95,
        "rating": 4,
        "comment": "Unforgettable experience! Wonderful host, peaceful location, highly recommended.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 7,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      },
      {
        "id": 96,
        "rating": 5,
        "comment": "Unforgettable experience! Wonderful host, peaceful location, highly recommended.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 8,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      }
    ],
    "booked_ranges": []
  },
  {
    "id": 33,
    "title": "Traditional Goan Portuguese Villa with Private Pool",
    "city": "Goa",
    "country": "India",
    "price_per_night": 210.0,
    "property_type": "Villa",
    "avg_rating": 4.67,
    "review_count": 3,
    "is_wishlisted": false,
    "images": [
      {
        "id": 129,
        "url": "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&id=33&p=1",
        "position": 0
      },
      {
        "id": 130,
        "url": "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&id=33&p=2",
        "position": 1
      },
      {
        "id": 131,
        "url": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&id=33&p=3",
        "position": 2
      },
      {
        "id": 132,
        "url": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&id=33&p=4",
        "position": 3
      }
    ],
    "description": "Heritage 18th-century Portuguese villa with private swimming pool, coconut grove garden, and outdoor veranda in Anjuna.",
    "address": "Anjuna Beach Rd",
    "latitude": 15.5843,
    "longitude": 73.7449,
    "cleaning_fee": 35.0,
    "service_fee_pct": 14.0,
    "max_guests": 6,
    "bedrooms": 3,
    "beds": 4,
    "bathrooms": 3.0,
    "host": {
      "id": 5,
      "name": "Wayan Sudarma",
      "email": "host5@demo.com",
      "phone": "+1 (555) 234-5678",
      "avatar_url": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
      "is_superhost": false,
      "bio": "Bali hospitality expert. Providing tropical paradise retreats for over a decade.",
      "created_at": "2021-03-15T00:00:00Z"
    },
    "amenities": [
      {
        "id": 4,
        "name": "Pool",
        "icon": "waves"
      },
      {
        "id": 5,
        "name": "Air conditioning",
        "icon": "snowflake"
      },
      {
        "id": 11,
        "name": "Wifi",
        "icon": "wifi"
      },
      {
        "id": 12,
        "name": "Free parking on premises",
        "icon": "car"
      },
      {
        "id": 13,
        "name": "Allows pets",
        "icon": "dog"
      },
      {
        "id": 14,
        "name": "Dedicated workspace",
        "icon": "monitor"
      },
      {
        "id": 15,
        "name": "Washing machine",
        "icon": "disc"
      },
      {
        "id": 17,
        "name": "Private patio or balcony",
        "icon": "sun"
      },
      {
        "id": 18,
        "name": "Exterior security cameras",
        "icon": "shield-check"
      },
      {
        "id": 21,
        "name": "Hot water",
        "icon": "flame"
      },
      {
        "id": 22,
        "name": "Shampoo & Body Wash",
        "icon": "sparkles"
      },
      {
        "id": 23,
        "name": "Room-darkening shades",
        "icon": "moon"
      },
      {
        "id": 24,
        "name": "Extra pillows & blankets",
        "icon": "bed"
      },
      {
        "id": 25,
        "name": "Iron & Board",
        "icon": "shirt"
      },
      {
        "id": 26,
        "name": "Refrigerator",
        "icon": "box"
      },
      {
        "id": 27,
        "name": "Microwave",
        "icon": "box"
      },
      {
        "id": 30,
        "name": "Cooking basics",
        "icon": "utensils"
      },
      {
        "id": 32,
        "name": "Wine glasses",
        "icon": "wine"
      },
      {
        "id": 33,
        "name": "Toaster",
        "icon": "flame"
      },
      {
        "id": 34,
        "name": "Fire pit & Outdoor Lounge",
        "icon": "flame"
      },
      {
        "id": 37,
        "name": "Smoke alarm",
        "icon": "shield"
      },
      {
        "id": 38,
        "name": "Carbon monoxide alarm",
        "icon": "shield"
      },
      {
        "id": 39,
        "name": "First aid kit",
        "icon": "cross"
      },
      {
        "id": 40,
        "name": "Smart Keypad Lock",
        "icon": "key"
      },
      {
        "id": 41,
        "name": "EV charger",
        "icon": "zap"
      }
    ],
    "reviews": [
      {
        "id": 97,
        "rating": 5,
        "comment": "Pure luxury! The views were spectacular and everything was impeccably clean.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 6,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      },
      {
        "id": 98,
        "rating": 5,
        "comment": "Unforgettable experience! Wonderful host, peaceful location, highly recommended.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 7,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      },
      {
        "id": 99,
        "rating": 4,
        "comment": "Amazing stay! Comfortable beds, great amenities, and super fast WiFi.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 8,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      }
    ],
    "booked_ranges": []
  },
  {
    "id": 34,
    "title": "Royal Heritage Palace Suite in Pink City",
    "city": "Jaipur",
    "country": "India",
    "price_per_night": 175.0,
    "property_type": "Villa",
    "avg_rating": 4.0,
    "review_count": 3,
    "is_wishlisted": false,
    "images": [
      {
        "id": 133,
        "url": "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=800&id=34&p=1",
        "position": 0
      },
      {
        "id": 134,
        "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&id=34&p=2",
        "position": 1
      },
      {
        "id": 135,
        "url": "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=800&id=34&p=3",
        "position": 2
      },
      {
        "id": 136,
        "url": "https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=800&id=34&p=4",
        "position": 3
      }
    ],
    "description": "Regal Rajasthani suite with hand-carved jharokhas, antique mirror work, and rooftop views of Amer Fort.",
    "address": "Bani Park, Jaipur",
    "latitude": 26.9124,
    "longitude": 75.7873,
    "cleaning_fee": 25.0,
    "service_fee_pct": 14.0,
    "max_guests": 4,
    "bedrooms": 2,
    "beds": 2,
    "bathrooms": 2.0,
    "host": {
      "id": 10,
      "name": "shivem",
      "email": "shivemkumar8434@gmail.com",
      "phone": "+1 (555) 234-5678",
      "avatar_url": null,
      "is_superhost": false,
      "bio": null,
      "created_at": "2021-03-15T00:00:00Z"
    },
    "amenities": [
      {
        "id": 2,
        "name": "Kitchen",
        "icon": "cooking-pot"
      },
      {
        "id": 4,
        "name": "Pool",
        "icon": "waves"
      },
      {
        "id": 5,
        "name": "Air conditioning",
        "icon": "snowflake"
      },
      {
        "id": 7,
        "name": "TV",
        "icon": "tv"
      },
      {
        "id": 11,
        "name": "Wifi",
        "icon": "wifi"
      },
      {
        "id": 14,
        "name": "Dedicated workspace",
        "icon": "monitor"
      },
      {
        "id": 15,
        "name": "Washing machine",
        "icon": "disc"
      },
      {
        "id": 16,
        "name": "Dryer",
        "icon": "sun"
      },
      {
        "id": 17,
        "name": "Private patio or balcony",
        "icon": "sun"
      },
      {
        "id": 18,
        "name": "Exterior security cameras",
        "icon": "shield-check"
      },
      {
        "id": 20,
        "name": "Hair dryer",
        "icon": "wind"
      },
      {
        "id": 21,
        "name": "Hot water",
        "icon": "flame"
      },
      {
        "id": 22,
        "name": "Shampoo & Body Wash",
        "icon": "sparkles"
      },
      {
        "id": 24,
        "name": "Extra pillows & blankets",
        "icon": "bed"
      },
      {
        "id": 25,
        "name": "Iron & Board",
        "icon": "shirt"
      },
      {
        "id": 27,
        "name": "Microwave",
        "icon": "box"
      },
      {
        "id": 28,
        "name": "Dishwasher",
        "icon": "sparkles"
      },
      {
        "id": 29,
        "name": "Coffee maker",
        "icon": "coffee"
      },
      {
        "id": 31,
        "name": "Dishes & silverware",
        "icon": "utensils"
      },
      {
        "id": 32,
        "name": "Wine glasses",
        "icon": "wine"
      },
      {
        "id": 33,
        "name": "Toaster",
        "icon": "flame"
      },
      {
        "id": 34,
        "name": "Fire pit & Outdoor Lounge",
        "icon": "flame"
      },
      {
        "id": 35,
        "name": "BBQ grill",
        "icon": "flame"
      },
      {
        "id": 36,
        "name": "Garden Backyard View",
        "icon": "trees"
      },
      {
        "id": 37,
        "name": "Smoke alarm",
        "icon": "shield"
      },
      {
        "id": 38,
        "name": "Carbon monoxide alarm",
        "icon": "shield"
      },
      {
        "id": 39,
        "name": "First aid kit",
        "icon": "cross"
      },
      {
        "id": 40,
        "name": "Smart Keypad Lock",
        "icon": "key"
      }
    ],
    "reviews": [
      {
        "id": 100,
        "rating": 4,
        "comment": "Unforgettable experience! Wonderful host, peaceful location, highly recommended.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 6,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      },
      {
        "id": 101,
        "rating": 4,
        "comment": "Unforgettable experience! Wonderful host, peaceful location, highly recommended.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 7,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      },
      {
        "id": 102,
        "rating": 4,
        "comment": "Pure luxury! The views were spectacular and everything was impeccably clean.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 8,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      }
    ],
    "booked_ranges": []
  },
  {
    "id": 35,
    "title": "Lakeside Marble Palace Haveli",
    "city": "Udaipur",
    "country": "India",
    "price_per_night": 230.0,
    "property_type": "House",
    "avg_rating": 4.33,
    "review_count": 3,
    "is_wishlisted": false,
    "images": [
      {
        "id": 137,
        "url": "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800&id=35&p=1",
        "position": 0
      },
      {
        "id": 138,
        "url": "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&id=35&p=2",
        "position": 1
      },
      {
        "id": 139,
        "url": "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800&id=35&p=3",
        "position": 2
      },
      {
        "id": 140,
        "url": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&id=35&p=4",
        "position": 3
      }
    ],
    "description": "Exquisite lakefront palace home on Lake Pichola with private boat jetty, rooftop dining, and sunset views.",
    "address": "Lake Pichola Promenade",
    "latitude": 24.5854,
    "longitude": 73.6833,
    "cleaning_fee": 40.0,
    "service_fee_pct": 14.0,
    "max_guests": 6,
    "bedrooms": 3,
    "beds": 3,
    "bathrooms": 3.0,
    "host": {
      "id": 1,
      "name": "Sarah Johnson",
      "email": "host1@demo.com",
      "phone": "+1 (555) 234-5678",
      "avatar_url": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
      "is_superhost": true,
      "bio": "Superhost with 5+ years of experience. I love sharing beautiful spaces with travelers from around the world.",
      "created_at": "2021-03-15T00:00:00Z"
    },
    "amenities": [
      {
        "id": 2,
        "name": "Kitchen",
        "icon": "cooking-pot"
      },
      {
        "id": 4,
        "name": "Pool",
        "icon": "waves"
      },
      {
        "id": 5,
        "name": "Air conditioning",
        "icon": "snowflake"
      },
      {
        "id": 7,
        "name": "TV",
        "icon": "tv"
      },
      {
        "id": 11,
        "name": "Wifi",
        "icon": "wifi"
      },
      {
        "id": 13,
        "name": "Allows pets",
        "icon": "dog"
      },
      {
        "id": 15,
        "name": "Washing machine",
        "icon": "disc"
      },
      {
        "id": 16,
        "name": "Dryer",
        "icon": "sun"
      },
      {
        "id": 17,
        "name": "Private patio or balcony",
        "icon": "sun"
      },
      {
        "id": 18,
        "name": "Exterior security cameras",
        "icon": "shield-check"
      },
      {
        "id": 19,
        "name": "Bathtub",
        "icon": "bath"
      },
      {
        "id": 22,
        "name": "Shampoo & Body Wash",
        "icon": "sparkles"
      },
      {
        "id": 23,
        "name": "Room-darkening shades",
        "icon": "moon"
      },
      {
        "id": 24,
        "name": "Extra pillows & blankets",
        "icon": "bed"
      },
      {
        "id": 25,
        "name": "Iron & Board",
        "icon": "shirt"
      },
      {
        "id": 26,
        "name": "Refrigerator",
        "icon": "box"
      },
      {
        "id": 27,
        "name": "Microwave",
        "icon": "box"
      },
      {
        "id": 28,
        "name": "Dishwasher",
        "icon": "sparkles"
      },
      {
        "id": 29,
        "name": "Coffee maker",
        "icon": "coffee"
      },
      {
        "id": 30,
        "name": "Cooking basics",
        "icon": "utensils"
      },
      {
        "id": 31,
        "name": "Dishes & silverware",
        "icon": "utensils"
      },
      {
        "id": 32,
        "name": "Wine glasses",
        "icon": "wine"
      },
      {
        "id": 33,
        "name": "Toaster",
        "icon": "flame"
      },
      {
        "id": 35,
        "name": "BBQ grill",
        "icon": "flame"
      },
      {
        "id": 36,
        "name": "Garden Backyard View",
        "icon": "trees"
      },
      {
        "id": 39,
        "name": "First aid kit",
        "icon": "cross"
      },
      {
        "id": 40,
        "name": "Smart Keypad Lock",
        "icon": "key"
      },
      {
        "id": 41,
        "name": "EV charger",
        "icon": "zap"
      }
    ],
    "reviews": [
      {
        "id": 103,
        "rating": 5,
        "comment": "Amazing stay! Comfortable beds, great amenities, and super fast WiFi.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 6,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      },
      {
        "id": 104,
        "rating": 4,
        "comment": "Sublime place! The design and ambiance exceeded all expectations. Host was incredible.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 7,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      },
      {
        "id": 105,
        "rating": 4,
        "comment": "Pure luxury! The views were spectacular and everything was impeccably clean.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 8,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      }
    ],
    "booked_ranges": []
  },
  {
    "id": 36,
    "title": "Pine Forest Log Cabin in Himalayan Slopes",
    "city": "Manali",
    "country": "India",
    "price_per_night": 140.0,
    "property_type": "Cabin",
    "avg_rating": 4.67,
    "review_count": 3,
    "is_wishlisted": false,
    "images": [
      {
        "id": 141,
        "url": "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&id=36&p=1",
        "position": 0
      },
      {
        "id": 142,
        "url": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&id=36&p=2",
        "position": 1
      },
      {
        "id": 143,
        "url": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&id=36&p=3",
        "position": 2
      },
      {
        "id": 144,
        "url": "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&id=36&p=4",
        "position": 3
      }
    ],
    "description": "Rustic cedar wood log cabin perched on pine forested cliffs in Solang Valley with outdoor firepit.",
    "address": "Solang Valley Rd",
    "latitude": 32.2432,
    "longitude": 77.1892,
    "cleaning_fee": 20.0,
    "service_fee_pct": 14.0,
    "max_guests": 4,
    "bedrooms": 2,
    "beds": 2,
    "bathrooms": 1.5,
    "host": {
      "id": 2,
      "name": "Marco Rossi",
      "email": "host2@demo.com",
      "phone": "+1 (555) 234-5678",
      "avatar_url": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
      "is_superhost": false,
      "bio": "Barcelona local sharing my favorite city spots. Architecture enthusiast and foodie.",
      "created_at": "2021-03-15T00:00:00Z"
    },
    "amenities": [
      {
        "id": 2,
        "name": "Kitchen",
        "icon": "cooking-pot"
      },
      {
        "id": 5,
        "name": "Air conditioning",
        "icon": "snowflake"
      },
      {
        "id": 11,
        "name": "Wifi",
        "icon": "wifi"
      },
      {
        "id": 12,
        "name": "Free parking on premises",
        "icon": "car"
      },
      {
        "id": 14,
        "name": "Dedicated workspace",
        "icon": "monitor"
      },
      {
        "id": 15,
        "name": "Washing machine",
        "icon": "disc"
      },
      {
        "id": 16,
        "name": "Dryer",
        "icon": "sun"
      },
      {
        "id": 17,
        "name": "Private patio or balcony",
        "icon": "sun"
      },
      {
        "id": 18,
        "name": "Exterior security cameras",
        "icon": "shield-check"
      },
      {
        "id": 19,
        "name": "Bathtub",
        "icon": "bath"
      },
      {
        "id": 22,
        "name": "Shampoo & Body Wash",
        "icon": "sparkles"
      },
      {
        "id": 23,
        "name": "Room-darkening shades",
        "icon": "moon"
      },
      {
        "id": 24,
        "name": "Extra pillows & blankets",
        "icon": "bed"
      },
      {
        "id": 25,
        "name": "Iron & Board",
        "icon": "shirt"
      },
      {
        "id": 26,
        "name": "Refrigerator",
        "icon": "box"
      },
      {
        "id": 27,
        "name": "Microwave",
        "icon": "box"
      },
      {
        "id": 30,
        "name": "Cooking basics",
        "icon": "utensils"
      },
      {
        "id": 32,
        "name": "Wine glasses",
        "icon": "wine"
      },
      {
        "id": 33,
        "name": "Toaster",
        "icon": "flame"
      },
      {
        "id": 34,
        "name": "Fire pit & Outdoor Lounge",
        "icon": "flame"
      },
      {
        "id": 35,
        "name": "BBQ grill",
        "icon": "flame"
      },
      {
        "id": 36,
        "name": "Garden Backyard View",
        "icon": "trees"
      },
      {
        "id": 38,
        "name": "Carbon monoxide alarm",
        "icon": "shield"
      },
      {
        "id": 39,
        "name": "First aid kit",
        "icon": "cross"
      },
      {
        "id": 40,
        "name": "Smart Keypad Lock",
        "icon": "key"
      },
      {
        "id": 41,
        "name": "EV charger",
        "icon": "zap"
      }
    ],
    "reviews": [
      {
        "id": 106,
        "rating": 5,
        "comment": "Unforgettable experience! Wonderful host, peaceful location, highly recommended.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 6,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      },
      {
        "id": 107,
        "rating": 4,
        "comment": "Sublime place! The design and ambiance exceeded all expectations. Host was incredible.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 7,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      },
      {
        "id": 108,
        "rating": 5,
        "comment": "Sublime place! The design and ambiance exceeded all expectations. Host was incredible.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 8,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      }
    ],
    "booked_ranges": []
  },
  {
    "id": 37,
    "title": "Taj View Luxury Terrace Apartment",
    "city": "Agra",
    "country": "India",
    "price_per_night": 110.0,
    "property_type": "Apartment",
    "avg_rating": 4.0,
    "review_count": 3,
    "is_wishlisted": false,
    "images": [
      {
        "id": 145,
        "url": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&id=37&p=1",
        "position": 0
      },
      {
        "id": 146,
        "url": "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&id=37&p=2",
        "position": 1
      },
      {
        "id": 147,
        "url": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&id=37&p=3",
        "position": 2
      },
      {
        "id": 148,
        "url": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&id=37&p=4",
        "position": 3
      }
    ],
    "description": "Unobstructed rooftop balcony views of the Taj Mahal. Modern 2BHK with air conditioning and gourmet breakfast.",
    "address": "Taj East Gate Rd",
    "latitude": 27.1751,
    "longitude": 78.0421,
    "cleaning_fee": 15.0,
    "service_fee_pct": 14.0,
    "max_guests": 4,
    "bedrooms": 2,
    "beds": 2,
    "bathrooms": 2.0,
    "host": {
      "id": 3,
      "name": "Yuki Tanaka",
      "email": "host3@demo.com",
      "phone": "+1 (555) 234-5678",
      "avatar_url": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
      "is_superhost": true,
      "bio": "Tokyo native offering authentic Japanese living experiences. Tea ceremony instructor.",
      "created_at": "2021-03-15T00:00:00Z"
    },
    "amenities": [
      {
        "id": 2,
        "name": "Kitchen",
        "icon": "cooking-pot"
      },
      {
        "id": 5,
        "name": "Air conditioning",
        "icon": "snowflake"
      },
      {
        "id": 7,
        "name": "TV",
        "icon": "tv"
      },
      {
        "id": 11,
        "name": "Wifi",
        "icon": "wifi"
      },
      {
        "id": 12,
        "name": "Free parking on premises",
        "icon": "car"
      },
      {
        "id": 13,
        "name": "Allows pets",
        "icon": "dog"
      },
      {
        "id": 14,
        "name": "Dedicated workspace",
        "icon": "monitor"
      },
      {
        "id": 15,
        "name": "Washing machine",
        "icon": "disc"
      },
      {
        "id": 16,
        "name": "Dryer",
        "icon": "sun"
      },
      {
        "id": 17,
        "name": "Private patio or balcony",
        "icon": "sun"
      },
      {
        "id": 18,
        "name": "Exterior security cameras",
        "icon": "shield-check"
      },
      {
        "id": 19,
        "name": "Bathtub",
        "icon": "bath"
      },
      {
        "id": 20,
        "name": "Hair dryer",
        "icon": "wind"
      },
      {
        "id": 22,
        "name": "Shampoo & Body Wash",
        "icon": "sparkles"
      },
      {
        "id": 23,
        "name": "Room-darkening shades",
        "icon": "moon"
      },
      {
        "id": 24,
        "name": "Extra pillows & blankets",
        "icon": "bed"
      },
      {
        "id": 25,
        "name": "Iron & Board",
        "icon": "shirt"
      },
      {
        "id": 27,
        "name": "Microwave",
        "icon": "box"
      },
      {
        "id": 28,
        "name": "Dishwasher",
        "icon": "sparkles"
      },
      {
        "id": 29,
        "name": "Coffee maker",
        "icon": "coffee"
      },
      {
        "id": 30,
        "name": "Cooking basics",
        "icon": "utensils"
      },
      {
        "id": 31,
        "name": "Dishes & silverware",
        "icon": "utensils"
      },
      {
        "id": 32,
        "name": "Wine glasses",
        "icon": "wine"
      },
      {
        "id": 33,
        "name": "Toaster",
        "icon": "flame"
      },
      {
        "id": 34,
        "name": "Fire pit & Outdoor Lounge",
        "icon": "flame"
      },
      {
        "id": 37,
        "name": "Smoke alarm",
        "icon": "shield"
      },
      {
        "id": 38,
        "name": "Carbon monoxide alarm",
        "icon": "shield"
      },
      {
        "id": 39,
        "name": "First aid kit",
        "icon": "cross"
      },
      {
        "id": 41,
        "name": "EV charger",
        "icon": "zap"
      }
    ],
    "reviews": [
      {
        "id": 109,
        "rating": 4,
        "comment": "Amazing stay! Comfortable beds, great amenities, and super fast WiFi.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 6,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      },
      {
        "id": 110,
        "rating": 4,
        "comment": "Unforgettable experience! Wonderful host, peaceful location, highly recommended.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 7,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      },
      {
        "id": 111,
        "rating": 4,
        "comment": "Sublime place! The design and ambiance exceeded all expectations. Host was incredible.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 8,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      }
    ],
    "booked_ranges": []
  },
  {
    "id": 38,
    "title": "Backwater Eco Cottage & Houseboat Stay",
    "city": "Kochi",
    "country": "India",
    "price_per_night": 125.0,
    "property_type": "Cabin",
    "avg_rating": 5.0,
    "review_count": 3,
    "is_wishlisted": false,
    "images": [
      {
        "id": 149,
        "url": "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&id=38&p=1",
        "position": 0
      },
      {
        "id": 150,
        "url": "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&id=38&p=2",
        "position": 1
      },
      {
        "id": 151,
        "url": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&id=38&p=3",
        "position": 2
      },
      {
        "id": 152,
        "url": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&id=38&p=4",
        "position": 3
      }
    ],
    "description": "Traditional Kerala wooden eco-cottage with private deck right on Alleppey backwaters. Includes canoe tours.",
    "address": "Vembanad Lake Side",
    "latitude": 9.9312,
    "longitude": 76.2673,
    "cleaning_fee": 20.0,
    "service_fee_pct": 14.0,
    "max_guests": 3,
    "bedrooms": 1,
    "beds": 2,
    "bathrooms": 1.0,
    "host": {
      "id": 4,
      "name": "Emily Chen",
      "email": "host4@demo.com",
      "phone": "+1 (555) 234-5678",
      "avatar_url": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop",
      "is_superhost": true,
      "bio": "NYC apartment curator. I find and design the most Instagram-worthy spaces in Manhattan.",
      "created_at": "2021-03-15T00:00:00Z"
    },
    "amenities": [
      {
        "id": 2,
        "name": "Kitchen",
        "icon": "cooking-pot"
      },
      {
        "id": 4,
        "name": "Pool",
        "icon": "waves"
      },
      {
        "id": 7,
        "name": "TV",
        "icon": "tv"
      },
      {
        "id": 12,
        "name": "Free parking on premises",
        "icon": "car"
      },
      {
        "id": 13,
        "name": "Allows pets",
        "icon": "dog"
      },
      {
        "id": 14,
        "name": "Dedicated workspace",
        "icon": "monitor"
      },
      {
        "id": 15,
        "name": "Washing machine",
        "icon": "disc"
      },
      {
        "id": 16,
        "name": "Dryer",
        "icon": "sun"
      },
      {
        "id": 17,
        "name": "Private patio or balcony",
        "icon": "sun"
      },
      {
        "id": 18,
        "name": "Exterior security cameras",
        "icon": "shield-check"
      },
      {
        "id": 19,
        "name": "Bathtub",
        "icon": "bath"
      },
      {
        "id": 20,
        "name": "Hair dryer",
        "icon": "wind"
      },
      {
        "id": 21,
        "name": "Hot water",
        "icon": "flame"
      },
      {
        "id": 22,
        "name": "Shampoo & Body Wash",
        "icon": "sparkles"
      },
      {
        "id": 23,
        "name": "Room-darkening shades",
        "icon": "moon"
      },
      {
        "id": 25,
        "name": "Iron & Board",
        "icon": "shirt"
      },
      {
        "id": 31,
        "name": "Dishes & silverware",
        "icon": "utensils"
      },
      {
        "id": 32,
        "name": "Wine glasses",
        "icon": "wine"
      },
      {
        "id": 33,
        "name": "Toaster",
        "icon": "flame"
      },
      {
        "id": 34,
        "name": "Fire pit & Outdoor Lounge",
        "icon": "flame"
      },
      {
        "id": 35,
        "name": "BBQ grill",
        "icon": "flame"
      },
      {
        "id": 37,
        "name": "Smoke alarm",
        "icon": "shield"
      },
      {
        "id": 39,
        "name": "First aid kit",
        "icon": "cross"
      },
      {
        "id": 40,
        "name": "Smart Keypad Lock",
        "icon": "key"
      },
      {
        "id": 41,
        "name": "EV charger",
        "icon": "zap"
      }
    ],
    "reviews": [
      {
        "id": 112,
        "rating": 5,
        "comment": "Amazing stay! Comfortable beds, great amenities, and super fast WiFi.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 6,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      },
      {
        "id": 113,
        "rating": 5,
        "comment": "Pure luxury! The views were spectacular and everything was impeccably clean.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 7,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      },
      {
        "id": 114,
        "rating": 5,
        "comment": "Sublime place! The design and ambiance exceeded all expectations. Host was incredible.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 8,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      }
    ],
    "booked_ranges": []
  },
  {
    "id": 39,
    "title": "Modern High-Rise Tech Penthouse",
    "city": "Bengaluru",
    "country": "India",
    "price_per_night": 190.0,
    "property_type": "Loft",
    "avg_rating": 4.67,
    "review_count": 3,
    "is_wishlisted": false,
    "images": [
      {
        "id": 153,
        "url": "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=800&id=39&p=1",
        "position": 0
      },
      {
        "id": 154,
        "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&id=39&p=2",
        "position": 1
      },
      {
        "id": 155,
        "url": "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=800&id=39&p=3",
        "position": 2
      },
      {
        "id": 156,
        "url": "https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=800&id=39&p=4",
        "position": 3
      }
    ],
    "description": "Ultra-modern 30th floor penthouse in Indiranagar with high-speed fiber WiFi, private Jacuzzi, and city skyline balcony.",
    "address": "100ft Rd, Indiranagar",
    "latitude": 12.9784,
    "longitude": 77.6408,
    "cleaning_fee": 30.0,
    "service_fee_pct": 14.0,
    "max_guests": 4,
    "bedrooms": 2,
    "beds": 2,
    "bathrooms": 2.0,
    "host": {
      "id": 5,
      "name": "Wayan Sudarma",
      "email": "host5@demo.com",
      "phone": "+1 (555) 234-5678",
      "avatar_url": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
      "is_superhost": false,
      "bio": "Bali hospitality expert. Providing tropical paradise retreats for over a decade.",
      "created_at": "2021-03-15T00:00:00Z"
    },
    "amenities": [
      {
        "id": 2,
        "name": "Kitchen",
        "icon": "cooking-pot"
      },
      {
        "id": 4,
        "name": "Pool",
        "icon": "waves"
      },
      {
        "id": 5,
        "name": "Air conditioning",
        "icon": "snowflake"
      },
      {
        "id": 12,
        "name": "Free parking on premises",
        "icon": "car"
      },
      {
        "id": 13,
        "name": "Allows pets",
        "icon": "dog"
      },
      {
        "id": 15,
        "name": "Washing machine",
        "icon": "disc"
      },
      {
        "id": 16,
        "name": "Dryer",
        "icon": "sun"
      },
      {
        "id": 17,
        "name": "Private patio or balcony",
        "icon": "sun"
      },
      {
        "id": 18,
        "name": "Exterior security cameras",
        "icon": "shield-check"
      },
      {
        "id": 19,
        "name": "Bathtub",
        "icon": "bath"
      },
      {
        "id": 21,
        "name": "Hot water",
        "icon": "flame"
      },
      {
        "id": 24,
        "name": "Extra pillows & blankets",
        "icon": "bed"
      },
      {
        "id": 25,
        "name": "Iron & Board",
        "icon": "shirt"
      },
      {
        "id": 26,
        "name": "Refrigerator",
        "icon": "box"
      },
      {
        "id": 27,
        "name": "Microwave",
        "icon": "box"
      },
      {
        "id": 29,
        "name": "Coffee maker",
        "icon": "coffee"
      },
      {
        "id": 31,
        "name": "Dishes & silverware",
        "icon": "utensils"
      },
      {
        "id": 32,
        "name": "Wine glasses",
        "icon": "wine"
      },
      {
        "id": 33,
        "name": "Toaster",
        "icon": "flame"
      },
      {
        "id": 34,
        "name": "Fire pit & Outdoor Lounge",
        "icon": "flame"
      },
      {
        "id": 35,
        "name": "BBQ grill",
        "icon": "flame"
      },
      {
        "id": 36,
        "name": "Garden Backyard View",
        "icon": "trees"
      },
      {
        "id": 37,
        "name": "Smoke alarm",
        "icon": "shield"
      },
      {
        "id": 38,
        "name": "Carbon monoxide alarm",
        "icon": "shield"
      },
      {
        "id": 39,
        "name": "First aid kit",
        "icon": "cross"
      },
      {
        "id": 40,
        "name": "Smart Keypad Lock",
        "icon": "key"
      },
      {
        "id": 41,
        "name": "EV charger",
        "icon": "zap"
      }
    ],
    "reviews": [
      {
        "id": 115,
        "rating": 5,
        "comment": "Amazing stay! Comfortable beds, great amenities, and super fast WiFi.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 6,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      },
      {
        "id": 116,
        "rating": 5,
        "comment": "Sublime place! The design and ambiance exceeded all expectations. Host was incredible.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 7,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      },
      {
        "id": 117,
        "rating": 4,
        "comment": "Unforgettable experience! Wonderful host, peaceful location, highly recommended.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 8,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      }
    ],
    "booked_ranges": []
  },
  {
    "id": 40,
    "title": "Colonial Tea Garden Villa",
    "city": "Darjeeling",
    "country": "India",
    "price_per_night": 150.0,
    "property_type": "Villa",
    "avg_rating": 5.0,
    "review_count": 3,
    "is_wishlisted": false,
    "images": [
      {
        "id": 157,
        "url": "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800&id=40&p=1",
        "position": 0
      },
      {
        "id": 158,
        "url": "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&id=40&p=2",
        "position": 1
      },
      {
        "id": 159,
        "url": "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800&id=40&p=3",
        "position": 2
      },
      {
        "id": 160,
        "url": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&id=40&p=4",
        "position": 3
      }
    ],
    "description": "Charming British colonial era bungalow set inside rolling tea estates with fireplace and mountain panoramic terrace.",
    "address": "Happy Valley Tea Estate",
    "latitude": 27.041,
    "longitude": 88.2663,
    "cleaning_fee": 25.0,
    "service_fee_pct": 14.0,
    "max_guests": 5,
    "bedrooms": 2,
    "beds": 3,
    "bathrooms": 2.0,
    "host": {
      "id": 10,
      "name": "shivem",
      "email": "shivemkumar8434@gmail.com",
      "phone": "+1 (555) 234-5678",
      "avatar_url": null,
      "is_superhost": false,
      "bio": null,
      "created_at": "2021-03-15T00:00:00Z"
    },
    "amenities": [
      {
        "id": 5,
        "name": "Air conditioning",
        "icon": "snowflake"
      },
      {
        "id": 7,
        "name": "TV",
        "icon": "tv"
      },
      {
        "id": 11,
        "name": "Wifi",
        "icon": "wifi"
      },
      {
        "id": 12,
        "name": "Free parking on premises",
        "icon": "car"
      },
      {
        "id": 13,
        "name": "Allows pets",
        "icon": "dog"
      },
      {
        "id": 14,
        "name": "Dedicated workspace",
        "icon": "monitor"
      },
      {
        "id": 15,
        "name": "Washing machine",
        "icon": "disc"
      },
      {
        "id": 16,
        "name": "Dryer",
        "icon": "sun"
      },
      {
        "id": 18,
        "name": "Exterior security cameras",
        "icon": "shield-check"
      },
      {
        "id": 19,
        "name": "Bathtub",
        "icon": "bath"
      },
      {
        "id": 21,
        "name": "Hot water",
        "icon": "flame"
      },
      {
        "id": 22,
        "name": "Shampoo & Body Wash",
        "icon": "sparkles"
      },
      {
        "id": 23,
        "name": "Room-darkening shades",
        "icon": "moon"
      },
      {
        "id": 24,
        "name": "Extra pillows & blankets",
        "icon": "bed"
      },
      {
        "id": 25,
        "name": "Iron & Board",
        "icon": "shirt"
      },
      {
        "id": 26,
        "name": "Refrigerator",
        "icon": "box"
      },
      {
        "id": 27,
        "name": "Microwave",
        "icon": "box"
      },
      {
        "id": 28,
        "name": "Dishwasher",
        "icon": "sparkles"
      },
      {
        "id": 30,
        "name": "Cooking basics",
        "icon": "utensils"
      },
      {
        "id": 31,
        "name": "Dishes & silverware",
        "icon": "utensils"
      },
      {
        "id": 32,
        "name": "Wine glasses",
        "icon": "wine"
      },
      {
        "id": 34,
        "name": "Fire pit & Outdoor Lounge",
        "icon": "flame"
      },
      {
        "id": 35,
        "name": "BBQ grill",
        "icon": "flame"
      },
      {
        "id": 36,
        "name": "Garden Backyard View",
        "icon": "trees"
      },
      {
        "id": 38,
        "name": "Carbon monoxide alarm",
        "icon": "shield"
      },
      {
        "id": 39,
        "name": "First aid kit",
        "icon": "cross"
      },
      {
        "id": 40,
        "name": "Smart Keypad Lock",
        "icon": "key"
      }
    ],
    "reviews": [
      {
        "id": 118,
        "rating": 5,
        "comment": "Amazing stay! Comfortable beds, great amenities, and super fast WiFi.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 6,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      },
      {
        "id": 119,
        "rating": 5,
        "comment": "Pure luxury! The views were spectacular and everything was impeccably clean.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 7,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      },
      {
        "id": 120,
        "rating": 5,
        "comment": "Amazing stay! Comfortable beds, great amenities, and super fast WiFi.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 8,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      }
    ],
    "booked_ranges": []
  },
  {
    "id": 41,
    "title": "Ganges Riverside Yoga Retreat Studio",
    "city": "Rishikesh",
    "country": "India",
    "price_per_night": 95.0,
    "property_type": "Cabin",
    "avg_rating": 4.0,
    "review_count": 3,
    "is_wishlisted": false,
    "images": [
      {
        "id": 161,
        "url": "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&id=41&p=1",
        "position": 0
      },
      {
        "id": 162,
        "url": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&id=41&p=2",
        "position": 1
      },
      {
        "id": 163,
        "url": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&id=41&p=3",
        "position": 2
      },
      {
        "id": 164,
        "url": "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&id=41&p=4",
        "position": 3
      }
    ],
    "description": "Serene riverside wooden cabin near Laxman Jhula with private yoga deck overlooking the clear turquoise Ganges.",
    "address": "Tapovan, Laxman Jhula",
    "latitude": 30.1265,
    "longitude": 78.3248,
    "cleaning_fee": 15.0,
    "service_fee_pct": 14.0,
    "max_guests": 2,
    "bedrooms": 1,
    "beds": 1,
    "bathrooms": 1.0,
    "host": {
      "id": 1,
      "name": "Sarah Johnson",
      "email": "host1@demo.com",
      "phone": "+1 (555) 234-5678",
      "avatar_url": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
      "is_superhost": true,
      "bio": "Superhost with 5+ years of experience. I love sharing beautiful spaces with travelers from around the world.",
      "created_at": "2021-03-15T00:00:00Z"
    },
    "amenities": [
      {
        "id": 2,
        "name": "Kitchen",
        "icon": "cooking-pot"
      },
      {
        "id": 4,
        "name": "Pool",
        "icon": "waves"
      },
      {
        "id": 5,
        "name": "Air conditioning",
        "icon": "snowflake"
      },
      {
        "id": 7,
        "name": "TV",
        "icon": "tv"
      },
      {
        "id": 11,
        "name": "Wifi",
        "icon": "wifi"
      },
      {
        "id": 12,
        "name": "Free parking on premises",
        "icon": "car"
      },
      {
        "id": 13,
        "name": "Allows pets",
        "icon": "dog"
      },
      {
        "id": 16,
        "name": "Dryer",
        "icon": "sun"
      },
      {
        "id": 17,
        "name": "Private patio or balcony",
        "icon": "sun"
      },
      {
        "id": 18,
        "name": "Exterior security cameras",
        "icon": "shield-check"
      },
      {
        "id": 19,
        "name": "Bathtub",
        "icon": "bath"
      },
      {
        "id": 20,
        "name": "Hair dryer",
        "icon": "wind"
      },
      {
        "id": 21,
        "name": "Hot water",
        "icon": "flame"
      },
      {
        "id": 22,
        "name": "Shampoo & Body Wash",
        "icon": "sparkles"
      },
      {
        "id": 23,
        "name": "Room-darkening shades",
        "icon": "moon"
      },
      {
        "id": 24,
        "name": "Extra pillows & blankets",
        "icon": "bed"
      },
      {
        "id": 25,
        "name": "Iron & Board",
        "icon": "shirt"
      },
      {
        "id": 26,
        "name": "Refrigerator",
        "icon": "box"
      },
      {
        "id": 27,
        "name": "Microwave",
        "icon": "box"
      },
      {
        "id": 28,
        "name": "Dishwasher",
        "icon": "sparkles"
      },
      {
        "id": 29,
        "name": "Coffee maker",
        "icon": "coffee"
      },
      {
        "id": 33,
        "name": "Toaster",
        "icon": "flame"
      },
      {
        "id": 34,
        "name": "Fire pit & Outdoor Lounge",
        "icon": "flame"
      },
      {
        "id": 37,
        "name": "Smoke alarm",
        "icon": "shield"
      },
      {
        "id": 41,
        "name": "EV charger",
        "icon": "zap"
      }
    ],
    "reviews": [
      {
        "id": 121,
        "rating": 4,
        "comment": "Sublime place! The design and ambiance exceeded all expectations. Host was incredible.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 6,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      },
      {
        "id": 122,
        "rating": 4,
        "comment": "Amazing stay! Comfortable beds, great amenities, and super fast WiFi.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 7,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      },
      {
        "id": 123,
        "rating": 4,
        "comment": "Amazing stay! Comfortable beds, great amenities, and super fast WiFi.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 8,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      }
    ],
    "booked_ranges": []
  },
  {
    "id": 42,
    "title": "Himalayan Mountain View Chalet",
    "city": "Shimla",
    "country": "India",
    "price_per_night": 165.0,
    "property_type": "Cabin",
    "avg_rating": 4.67,
    "review_count": 3,
    "is_wishlisted": false,
    "images": [
      {
        "id": 165,
        "url": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&id=42&p=1",
        "position": 0
      },
      {
        "id": 166,
        "url": "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&id=42&p=2",
        "position": 1
      },
      {
        "id": 167,
        "url": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&id=42&p=3",
        "position": 2
      },
      {
        "id": 168,
        "url": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&id=42&p=4",
        "position": 3
      }
    ],
    "description": "Warm wooden chalet in Shimla with snow peak views, glass sunroom, and wood-burning stove.",
    "address": "Mall Road Ridge",
    "latitude": 31.1048,
    "longitude": 77.1734,
    "cleaning_fee": 25.0,
    "service_fee_pct": 14.0,
    "max_guests": 4,
    "bedrooms": 2,
    "beds": 2,
    "bathrooms": 2.0,
    "host": {
      "id": 2,
      "name": "Marco Rossi",
      "email": "host2@demo.com",
      "phone": "+1 (555) 234-5678",
      "avatar_url": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
      "is_superhost": false,
      "bio": "Barcelona local sharing my favorite city spots. Architecture enthusiast and foodie.",
      "created_at": "2021-03-15T00:00:00Z"
    },
    "amenities": [
      {
        "id": 4,
        "name": "Pool",
        "icon": "waves"
      },
      {
        "id": 5,
        "name": "Air conditioning",
        "icon": "snowflake"
      },
      {
        "id": 7,
        "name": "TV",
        "icon": "tv"
      },
      {
        "id": 12,
        "name": "Free parking on premises",
        "icon": "car"
      },
      {
        "id": 13,
        "name": "Allows pets",
        "icon": "dog"
      },
      {
        "id": 15,
        "name": "Washing machine",
        "icon": "disc"
      },
      {
        "id": 16,
        "name": "Dryer",
        "icon": "sun"
      },
      {
        "id": 17,
        "name": "Private patio or balcony",
        "icon": "sun"
      },
      {
        "id": 18,
        "name": "Exterior security cameras",
        "icon": "shield-check"
      },
      {
        "id": 19,
        "name": "Bathtub",
        "icon": "bath"
      },
      {
        "id": 20,
        "name": "Hair dryer",
        "icon": "wind"
      },
      {
        "id": 21,
        "name": "Hot water",
        "icon": "flame"
      },
      {
        "id": 22,
        "name": "Shampoo & Body Wash",
        "icon": "sparkles"
      },
      {
        "id": 23,
        "name": "Room-darkening shades",
        "icon": "moon"
      },
      {
        "id": 24,
        "name": "Extra pillows & blankets",
        "icon": "bed"
      },
      {
        "id": 25,
        "name": "Iron & Board",
        "icon": "shirt"
      },
      {
        "id": 27,
        "name": "Microwave",
        "icon": "box"
      },
      {
        "id": 28,
        "name": "Dishwasher",
        "icon": "sparkles"
      },
      {
        "id": 29,
        "name": "Coffee maker",
        "icon": "coffee"
      },
      {
        "id": 30,
        "name": "Cooking basics",
        "icon": "utensils"
      },
      {
        "id": 31,
        "name": "Dishes & silverware",
        "icon": "utensils"
      },
      {
        "id": 32,
        "name": "Wine glasses",
        "icon": "wine"
      },
      {
        "id": 34,
        "name": "Fire pit & Outdoor Lounge",
        "icon": "flame"
      },
      {
        "id": 35,
        "name": "BBQ grill",
        "icon": "flame"
      },
      {
        "id": 36,
        "name": "Garden Backyard View",
        "icon": "trees"
      },
      {
        "id": 37,
        "name": "Smoke alarm",
        "icon": "shield"
      },
      {
        "id": 38,
        "name": "Carbon monoxide alarm",
        "icon": "shield"
      },
      {
        "id": 39,
        "name": "First aid kit",
        "icon": "cross"
      },
      {
        "id": 40,
        "name": "Smart Keypad Lock",
        "icon": "key"
      },
      {
        "id": 41,
        "name": "EV charger",
        "icon": "zap"
      }
    ],
    "reviews": [
      {
        "id": 124,
        "rating": 5,
        "comment": "Pure luxury! The views were spectacular and everything was impeccably clean.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 6,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      },
      {
        "id": 125,
        "rating": 4,
        "comment": "Sublime place! The design and ambiance exceeded all expectations. Host was incredible.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 7,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      },
      {
        "id": 126,
        "rating": 5,
        "comment": "Unforgettable experience! Wonderful host, peaceful location, highly recommended.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 8,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      }
    ],
    "booked_ranges": []
  },
  {
    "id": 43,
    "title": "Nizam Heritage Mansion in Jubilee Hills",
    "city": "Hyderabad",
    "country": "India",
    "price_per_night": 280.0,
    "property_type": "House",
    "avg_rating": 4.33,
    "review_count": 3,
    "is_wishlisted": false,
    "images": [
      {
        "id": 169,
        "url": "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&id=43&p=1",
        "position": 0
      },
      {
        "id": 170,
        "url": "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&id=43&p=2",
        "position": 1
      },
      {
        "id": 171,
        "url": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&id=43&p=3",
        "position": 2
      },
      {
        "id": 172,
        "url": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&id=43&p=4",
        "position": 3
      }
    ],
    "description": "Sprawling mansion in Hyderabad with marble colonnades, private garden, swimming pool, and gourmet kitchen.",
    "address": "Road No. 36, Jubilee Hills",
    "latitude": 17.4319,
    "longitude": 78.4073,
    "cleaning_fee": 45.0,
    "service_fee_pct": 14.0,
    "max_guests": 10,
    "bedrooms": 5,
    "beds": 6,
    "bathrooms": 5.0,
    "host": {
      "id": 3,
      "name": "Yuki Tanaka",
      "email": "host3@demo.com",
      "phone": "+1 (555) 234-5678",
      "avatar_url": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
      "is_superhost": true,
      "bio": "Tokyo native offering authentic Japanese living experiences. Tea ceremony instructor.",
      "created_at": "2021-03-15T00:00:00Z"
    },
    "amenities": [
      {
        "id": 2,
        "name": "Kitchen",
        "icon": "cooking-pot"
      },
      {
        "id": 4,
        "name": "Pool",
        "icon": "waves"
      },
      {
        "id": 5,
        "name": "Air conditioning",
        "icon": "snowflake"
      },
      {
        "id": 11,
        "name": "Wifi",
        "icon": "wifi"
      },
      {
        "id": 12,
        "name": "Free parking on premises",
        "icon": "car"
      },
      {
        "id": 14,
        "name": "Dedicated workspace",
        "icon": "monitor"
      },
      {
        "id": 15,
        "name": "Washing machine",
        "icon": "disc"
      },
      {
        "id": 17,
        "name": "Private patio or balcony",
        "icon": "sun"
      },
      {
        "id": 18,
        "name": "Exterior security cameras",
        "icon": "shield-check"
      },
      {
        "id": 19,
        "name": "Bathtub",
        "icon": "bath"
      },
      {
        "id": 20,
        "name": "Hair dryer",
        "icon": "wind"
      },
      {
        "id": 21,
        "name": "Hot water",
        "icon": "flame"
      },
      {
        "id": 22,
        "name": "Shampoo & Body Wash",
        "icon": "sparkles"
      },
      {
        "id": 23,
        "name": "Room-darkening shades",
        "icon": "moon"
      },
      {
        "id": 24,
        "name": "Extra pillows & blankets",
        "icon": "bed"
      },
      {
        "id": 25,
        "name": "Iron & Board",
        "icon": "shirt"
      },
      {
        "id": 27,
        "name": "Microwave",
        "icon": "box"
      },
      {
        "id": 28,
        "name": "Dishwasher",
        "icon": "sparkles"
      },
      {
        "id": 29,
        "name": "Coffee maker",
        "icon": "coffee"
      },
      {
        "id": 32,
        "name": "Wine glasses",
        "icon": "wine"
      },
      {
        "id": 34,
        "name": "Fire pit & Outdoor Lounge",
        "icon": "flame"
      },
      {
        "id": 35,
        "name": "BBQ grill",
        "icon": "flame"
      },
      {
        "id": 37,
        "name": "Smoke alarm",
        "icon": "shield"
      },
      {
        "id": 38,
        "name": "Carbon monoxide alarm",
        "icon": "shield"
      },
      {
        "id": 39,
        "name": "First aid kit",
        "icon": "cross"
      },
      {
        "id": 40,
        "name": "Smart Keypad Lock",
        "icon": "key"
      },
      {
        "id": 41,
        "name": "EV charger",
        "icon": "zap"
      }
    ],
    "reviews": [
      {
        "id": 127,
        "rating": 4,
        "comment": "Pure luxury! The views were spectacular and everything was impeccably clean.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 6,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      },
      {
        "id": 128,
        "rating": 5,
        "comment": "Amazing stay! Comfortable beds, great amenities, and super fast WiFi.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 7,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      },
      {
        "id": 129,
        "rating": 4,
        "comment": "Pure luxury! The views were spectacular and everything was impeccably clean.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 8,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      }
    ],
    "booked_ranges": []
  },
  {
    "id": 44,
    "title": "Nilgiri Cloud Forest Timber Cabin",
    "city": "Ooty",
    "country": "India",
    "price_per_night": 115.0,
    "property_type": "Cabin",
    "avg_rating": 5.0,
    "review_count": 3,
    "is_wishlisted": false,
    "images": [
      {
        "id": 173,
        "url": "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=800&id=44&p=1",
        "position": 0
      },
      {
        "id": 174,
        "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&id=44&p=2",
        "position": 1
      },
      {
        "id": 175,
        "url": "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=800&id=44&p=3",
        "position": 2
      },
      {
        "id": 176,
        "url": "https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=800&id=44&p=4",
        "position": 3
      }
    ],
    "description": "Cosy hilltop cabin surrounded by Eucalyptus and Tea gardens in Ooty with mountain fog views.",
    "address": "Doddabetta Peak Rd",
    "latitude": 11.4102,
    "longitude": 76.695,
    "cleaning_fee": 20.0,
    "service_fee_pct": 14.0,
    "max_guests": 3,
    "bedrooms": 1,
    "beds": 2,
    "bathrooms": 1.0,
    "host": {
      "id": 4,
      "name": "Emily Chen",
      "email": "host4@demo.com",
      "phone": "+1 (555) 234-5678",
      "avatar_url": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop",
      "is_superhost": true,
      "bio": "NYC apartment curator. I find and design the most Instagram-worthy spaces in Manhattan.",
      "created_at": "2021-03-15T00:00:00Z"
    },
    "amenities": [
      {
        "id": 2,
        "name": "Kitchen",
        "icon": "cooking-pot"
      },
      {
        "id": 4,
        "name": "Pool",
        "icon": "waves"
      },
      {
        "id": 5,
        "name": "Air conditioning",
        "icon": "snowflake"
      },
      {
        "id": 7,
        "name": "TV",
        "icon": "tv"
      },
      {
        "id": 11,
        "name": "Wifi",
        "icon": "wifi"
      },
      {
        "id": 12,
        "name": "Free parking on premises",
        "icon": "car"
      },
      {
        "id": 13,
        "name": "Allows pets",
        "icon": "dog"
      },
      {
        "id": 14,
        "name": "Dedicated workspace",
        "icon": "monitor"
      },
      {
        "id": 15,
        "name": "Washing machine",
        "icon": "disc"
      },
      {
        "id": 16,
        "name": "Dryer",
        "icon": "sun"
      },
      {
        "id": 17,
        "name": "Private patio or balcony",
        "icon": "sun"
      },
      {
        "id": 18,
        "name": "Exterior security cameras",
        "icon": "shield-check"
      },
      {
        "id": 19,
        "name": "Bathtub",
        "icon": "bath"
      },
      {
        "id": 20,
        "name": "Hair dryer",
        "icon": "wind"
      },
      {
        "id": 21,
        "name": "Hot water",
        "icon": "flame"
      },
      {
        "id": 22,
        "name": "Shampoo & Body Wash",
        "icon": "sparkles"
      },
      {
        "id": 23,
        "name": "Room-darkening shades",
        "icon": "moon"
      },
      {
        "id": 24,
        "name": "Extra pillows & blankets",
        "icon": "bed"
      },
      {
        "id": 25,
        "name": "Iron & Board",
        "icon": "shirt"
      },
      {
        "id": 26,
        "name": "Refrigerator",
        "icon": "box"
      },
      {
        "id": 27,
        "name": "Microwave",
        "icon": "box"
      },
      {
        "id": 28,
        "name": "Dishwasher",
        "icon": "sparkles"
      },
      {
        "id": 29,
        "name": "Coffee maker",
        "icon": "coffee"
      },
      {
        "id": 30,
        "name": "Cooking basics",
        "icon": "utensils"
      },
      {
        "id": 31,
        "name": "Dishes & silverware",
        "icon": "utensils"
      },
      {
        "id": 34,
        "name": "Fire pit & Outdoor Lounge",
        "icon": "flame"
      },
      {
        "id": 35,
        "name": "BBQ grill",
        "icon": "flame"
      },
      {
        "id": 38,
        "name": "Carbon monoxide alarm",
        "icon": "shield"
      },
      {
        "id": 39,
        "name": "First aid kit",
        "icon": "cross"
      },
      {
        "id": 41,
        "name": "EV charger",
        "icon": "zap"
      }
    ],
    "reviews": [
      {
        "id": 130,
        "rating": 5,
        "comment": "Pure luxury! The views were spectacular and everything was impeccably clean.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 6,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      },
      {
        "id": 131,
        "rating": 5,
        "comment": "Pure luxury! The views were spectacular and everything was impeccably clean.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 7,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      },
      {
        "id": 132,
        "rating": 5,
        "comment": "Amazing stay! Comfortable beds, great amenities, and super fast WiFi.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 8,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      }
    ],
    "booked_ranges": []
  },
  {
    "id": 45,
    "title": "South Delhi Designer Loft with Garden Terrace",
    "city": "New Delhi",
    "country": "India",
    "price_per_night": 180.0,
    "property_type": "Loft",
    "avg_rating": 4.67,
    "review_count": 3,
    "is_wishlisted": false,
    "images": [
      {
        "id": 177,
        "url": "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800&id=45&p=1",
        "position": 0
      },
      {
        "id": 178,
        "url": "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&id=45&p=2",
        "position": 1
      },
      {
        "id": 179,
        "url": "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800&id=45&p=3",
        "position": 2
      },
      {
        "id": 180,
        "url": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&id=45&p=4",
        "position": 3
      }
    ],
    "description": "Sun-drenched luxury loft in Greater Kailash featuring a private rooftop terrace garden and modern art pieces.",
    "address": "GK 2 M Block",
    "latitude": 28.5355,
    "longitude": 77.241,
    "cleaning_fee": 25.0,
    "service_fee_pct": 14.0,
    "max_guests": 4,
    "bedrooms": 2,
    "beds": 2,
    "bathrooms": 2.0,
    "host": {
      "id": 5,
      "name": "Wayan Sudarma",
      "email": "host5@demo.com",
      "phone": "+1 (555) 234-5678",
      "avatar_url": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
      "is_superhost": false,
      "bio": "Bali hospitality expert. Providing tropical paradise retreats for over a decade.",
      "created_at": "2021-03-15T00:00:00Z"
    },
    "amenities": [
      {
        "id": 2,
        "name": "Kitchen",
        "icon": "cooking-pot"
      },
      {
        "id": 4,
        "name": "Pool",
        "icon": "waves"
      },
      {
        "id": 5,
        "name": "Air conditioning",
        "icon": "snowflake"
      },
      {
        "id": 7,
        "name": "TV",
        "icon": "tv"
      },
      {
        "id": 12,
        "name": "Free parking on premises",
        "icon": "car"
      },
      {
        "id": 13,
        "name": "Allows pets",
        "icon": "dog"
      },
      {
        "id": 14,
        "name": "Dedicated workspace",
        "icon": "monitor"
      },
      {
        "id": 15,
        "name": "Washing machine",
        "icon": "disc"
      },
      {
        "id": 16,
        "name": "Dryer",
        "icon": "sun"
      },
      {
        "id": 18,
        "name": "Exterior security cameras",
        "icon": "shield-check"
      },
      {
        "id": 21,
        "name": "Hot water",
        "icon": "flame"
      },
      {
        "id": 22,
        "name": "Shampoo & Body Wash",
        "icon": "sparkles"
      },
      {
        "id": 23,
        "name": "Room-darkening shades",
        "icon": "moon"
      },
      {
        "id": 25,
        "name": "Iron & Board",
        "icon": "shirt"
      },
      {
        "id": 26,
        "name": "Refrigerator",
        "icon": "box"
      },
      {
        "id": 27,
        "name": "Microwave",
        "icon": "box"
      },
      {
        "id": 30,
        "name": "Cooking basics",
        "icon": "utensils"
      },
      {
        "id": 31,
        "name": "Dishes & silverware",
        "icon": "utensils"
      },
      {
        "id": 33,
        "name": "Toaster",
        "icon": "flame"
      },
      {
        "id": 34,
        "name": "Fire pit & Outdoor Lounge",
        "icon": "flame"
      },
      {
        "id": 35,
        "name": "BBQ grill",
        "icon": "flame"
      },
      {
        "id": 37,
        "name": "Smoke alarm",
        "icon": "shield"
      },
      {
        "id": 39,
        "name": "First aid kit",
        "icon": "cross"
      },
      {
        "id": 40,
        "name": "Smart Keypad Lock",
        "icon": "key"
      },
      {
        "id": 41,
        "name": "EV charger",
        "icon": "zap"
      }
    ],
    "reviews": [
      {
        "id": 133,
        "rating": 5,
        "comment": "Amazing stay! Comfortable beds, great amenities, and super fast WiFi.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 6,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      },
      {
        "id": 134,
        "rating": 4,
        "comment": "Sublime place! The design and ambiance exceeded all expectations. Host was incredible.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 7,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      },
      {
        "id": 135,
        "rating": 5,
        "comment": "Amazing stay! Comfortable beds, great amenities, and super fast WiFi.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 8,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      }
    ],
    "booked_ranges": []
  },
  {
    "id": 46,
    "title": "Bandra Chic Studio near Seaside Promenade",
    "city": "Mumbai",
    "country": "India",
    "price_per_night": 135.0,
    "property_type": "Apartment",
    "avg_rating": 5.0,
    "review_count": 3,
    "is_wishlisted": false,
    "images": [
      {
        "id": 181,
        "url": "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&id=46&p=1",
        "position": 0
      },
      {
        "id": 182,
        "url": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&id=46&p=2",
        "position": 1
      },
      {
        "id": 183,
        "url": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&id=46&p=3",
        "position": 2
      },
      {
        "id": 184,
        "url": "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&id=46&p=4",
        "position": 3
      }
    ],
    "description": "Trendy studio apartment in Bandra West steps away from Carter Road promenade, caf\u00e9s, and nightlife.",
    "address": "Carter Road, Bandra West",
    "latitude": 19.06,
    "longitude": 72.8285,
    "cleaning_fee": 20.0,
    "service_fee_pct": 14.0,
    "max_guests": 2,
    "bedrooms": 1,
    "beds": 1,
    "bathrooms": 1.0,
    "host": {
      "id": 10,
      "name": "shivem",
      "email": "shivemkumar8434@gmail.com",
      "phone": "+1 (555) 234-5678",
      "avatar_url": null,
      "is_superhost": false,
      "bio": null,
      "created_at": "2021-03-15T00:00:00Z"
    },
    "amenities": [
      {
        "id": 4,
        "name": "Pool",
        "icon": "waves"
      },
      {
        "id": 5,
        "name": "Air conditioning",
        "icon": "snowflake"
      },
      {
        "id": 7,
        "name": "TV",
        "icon": "tv"
      },
      {
        "id": 11,
        "name": "Wifi",
        "icon": "wifi"
      },
      {
        "id": 12,
        "name": "Free parking on premises",
        "icon": "car"
      },
      {
        "id": 13,
        "name": "Allows pets",
        "icon": "dog"
      },
      {
        "id": 14,
        "name": "Dedicated workspace",
        "icon": "monitor"
      },
      {
        "id": 15,
        "name": "Washing machine",
        "icon": "disc"
      },
      {
        "id": 16,
        "name": "Dryer",
        "icon": "sun"
      },
      {
        "id": 17,
        "name": "Private patio or balcony",
        "icon": "sun"
      },
      {
        "id": 20,
        "name": "Hair dryer",
        "icon": "wind"
      },
      {
        "id": 21,
        "name": "Hot water",
        "icon": "flame"
      },
      {
        "id": 22,
        "name": "Shampoo & Body Wash",
        "icon": "sparkles"
      },
      {
        "id": 24,
        "name": "Extra pillows & blankets",
        "icon": "bed"
      },
      {
        "id": 25,
        "name": "Iron & Board",
        "icon": "shirt"
      },
      {
        "id": 26,
        "name": "Refrigerator",
        "icon": "box"
      },
      {
        "id": 27,
        "name": "Microwave",
        "icon": "box"
      },
      {
        "id": 28,
        "name": "Dishwasher",
        "icon": "sparkles"
      },
      {
        "id": 29,
        "name": "Coffee maker",
        "icon": "coffee"
      },
      {
        "id": 30,
        "name": "Cooking basics",
        "icon": "utensils"
      },
      {
        "id": 31,
        "name": "Dishes & silverware",
        "icon": "utensils"
      },
      {
        "id": 32,
        "name": "Wine glasses",
        "icon": "wine"
      },
      {
        "id": 34,
        "name": "Fire pit & Outdoor Lounge",
        "icon": "flame"
      },
      {
        "id": 35,
        "name": "BBQ grill",
        "icon": "flame"
      },
      {
        "id": 36,
        "name": "Garden Backyard View",
        "icon": "trees"
      },
      {
        "id": 37,
        "name": "Smoke alarm",
        "icon": "shield"
      },
      {
        "id": 38,
        "name": "Carbon monoxide alarm",
        "icon": "shield"
      },
      {
        "id": 39,
        "name": "First aid kit",
        "icon": "cross"
      },
      {
        "id": 40,
        "name": "Smart Keypad Lock",
        "icon": "key"
      }
    ],
    "reviews": [
      {
        "id": 136,
        "rating": 5,
        "comment": "Pure luxury! The views were spectacular and everything was impeccably clean.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 6,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      },
      {
        "id": 137,
        "rating": 5,
        "comment": "Amazing stay! Comfortable beds, great amenities, and super fast WiFi.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 7,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      },
      {
        "id": 138,
        "rating": 5,
        "comment": "Unforgettable experience! Wonderful host, peaceful location, highly recommended.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 8,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      }
    ],
    "booked_ranges": []
  },
  {
    "id": 47,
    "title": "Candolim Beachfront Luxury Villa",
    "city": "Goa",
    "country": "India",
    "price_per_night": 340.0,
    "property_type": "Villa",
    "avg_rating": 4.67,
    "review_count": 3,
    "is_wishlisted": false,
    "images": [
      {
        "id": 185,
        "url": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&id=47&p=1",
        "position": 0
      },
      {
        "id": 186,
        "url": "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&id=47&p=2",
        "position": 1
      },
      {
        "id": 187,
        "url": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&id=47&p=3",
        "position": 2
      },
      {
        "id": 188,
        "url": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&id=47&p=4",
        "position": 3
      }
    ],
    "description": "Direct private walkway to Candolim beach. Includes infinity pool, lawn, gazebo, and private chef.",
    "address": "Candolim Beach Rd",
    "latitude": 15.5173,
    "longitude": 73.7628,
    "cleaning_fee": 50.0,
    "service_fee_pct": 14.0,
    "max_guests": 8,
    "bedrooms": 4,
    "beds": 4,
    "bathrooms": 4.0,
    "host": {
      "id": 1,
      "name": "Sarah Johnson",
      "email": "host1@demo.com",
      "phone": "+1 (555) 234-5678",
      "avatar_url": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
      "is_superhost": true,
      "bio": "Superhost with 5+ years of experience. I love sharing beautiful spaces with travelers from around the world.",
      "created_at": "2021-03-15T00:00:00Z"
    },
    "amenities": [
      {
        "id": 2,
        "name": "Kitchen",
        "icon": "cooking-pot"
      },
      {
        "id": 4,
        "name": "Pool",
        "icon": "waves"
      },
      {
        "id": 11,
        "name": "Wifi",
        "icon": "wifi"
      },
      {
        "id": 12,
        "name": "Free parking on premises",
        "icon": "car"
      },
      {
        "id": 13,
        "name": "Allows pets",
        "icon": "dog"
      },
      {
        "id": 14,
        "name": "Dedicated workspace",
        "icon": "monitor"
      },
      {
        "id": 15,
        "name": "Washing machine",
        "icon": "disc"
      },
      {
        "id": 16,
        "name": "Dryer",
        "icon": "sun"
      },
      {
        "id": 18,
        "name": "Exterior security cameras",
        "icon": "shield-check"
      },
      {
        "id": 19,
        "name": "Bathtub",
        "icon": "bath"
      },
      {
        "id": 20,
        "name": "Hair dryer",
        "icon": "wind"
      },
      {
        "id": 21,
        "name": "Hot water",
        "icon": "flame"
      },
      {
        "id": 22,
        "name": "Shampoo & Body Wash",
        "icon": "sparkles"
      },
      {
        "id": 23,
        "name": "Room-darkening shades",
        "icon": "moon"
      },
      {
        "id": 25,
        "name": "Iron & Board",
        "icon": "shirt"
      },
      {
        "id": 27,
        "name": "Microwave",
        "icon": "box"
      },
      {
        "id": 28,
        "name": "Dishwasher",
        "icon": "sparkles"
      },
      {
        "id": 29,
        "name": "Coffee maker",
        "icon": "coffee"
      },
      {
        "id": 31,
        "name": "Dishes & silverware",
        "icon": "utensils"
      },
      {
        "id": 32,
        "name": "Wine glasses",
        "icon": "wine"
      },
      {
        "id": 36,
        "name": "Garden Backyard View",
        "icon": "trees"
      },
      {
        "id": 38,
        "name": "Carbon monoxide alarm",
        "icon": "shield"
      },
      {
        "id": 39,
        "name": "First aid kit",
        "icon": "cross"
      },
      {
        "id": 40,
        "name": "Smart Keypad Lock",
        "icon": "key"
      },
      {
        "id": 41,
        "name": "EV charger",
        "icon": "zap"
      }
    ],
    "reviews": [
      {
        "id": 139,
        "rating": 4,
        "comment": "Unforgettable experience! Wonderful host, peaceful location, highly recommended.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 6,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      },
      {
        "id": 140,
        "rating": 5,
        "comment": "Sublime place! The design and ambiance exceeded all expectations. Host was incredible.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 7,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      },
      {
        "id": 141,
        "rating": 5,
        "comment": "Amazing stay! Comfortable beds, great amenities, and super fast WiFi.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 8,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      }
    ],
    "booked_ranges": []
  },
  {
    "id": 48,
    "title": "Lutyens Heritage Bungalow Suite",
    "city": "New Delhi",
    "country": "India",
    "price_per_night": 220.0,
    "property_type": "House",
    "avg_rating": 4.67,
    "review_count": 3,
    "is_wishlisted": false,
    "images": [
      {
        "id": 189,
        "url": "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&id=48&p=1",
        "position": 0
      },
      {
        "id": 190,
        "url": "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&id=48&p=2",
        "position": 1
      },
      {
        "id": 191,
        "url": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&id=48&p=3",
        "position": 2
      },
      {
        "id": 192,
        "url": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&id=48&p=4",
        "position": 3
      }
    ],
    "description": "Colonial heritage bungalow suite with lush manicured lawns near Lodi Gardens and Khan Market.",
    "address": "Amrita Shergill Marg",
    "latitude": 28.5933,
    "longitude": 77.2215,
    "cleaning_fee": 35.0,
    "service_fee_pct": 14.0,
    "max_guests": 4,
    "bedrooms": 2,
    "beds": 2,
    "bathrooms": 2.0,
    "host": {
      "id": 2,
      "name": "Marco Rossi",
      "email": "host2@demo.com",
      "phone": "+1 (555) 234-5678",
      "avatar_url": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
      "is_superhost": false,
      "bio": "Barcelona local sharing my favorite city spots. Architecture enthusiast and foodie.",
      "created_at": "2021-03-15T00:00:00Z"
    },
    "amenities": [
      {
        "id": 2,
        "name": "Kitchen",
        "icon": "cooking-pot"
      },
      {
        "id": 4,
        "name": "Pool",
        "icon": "waves"
      },
      {
        "id": 5,
        "name": "Air conditioning",
        "icon": "snowflake"
      },
      {
        "id": 11,
        "name": "Wifi",
        "icon": "wifi"
      },
      {
        "id": 12,
        "name": "Free parking on premises",
        "icon": "car"
      },
      {
        "id": 13,
        "name": "Allows pets",
        "icon": "dog"
      },
      {
        "id": 16,
        "name": "Dryer",
        "icon": "sun"
      },
      {
        "id": 17,
        "name": "Private patio or balcony",
        "icon": "sun"
      },
      {
        "id": 20,
        "name": "Hair dryer",
        "icon": "wind"
      },
      {
        "id": 21,
        "name": "Hot water",
        "icon": "flame"
      },
      {
        "id": 22,
        "name": "Shampoo & Body Wash",
        "icon": "sparkles"
      },
      {
        "id": 23,
        "name": "Room-darkening shades",
        "icon": "moon"
      },
      {
        "id": 24,
        "name": "Extra pillows & blankets",
        "icon": "bed"
      },
      {
        "id": 27,
        "name": "Microwave",
        "icon": "box"
      },
      {
        "id": 28,
        "name": "Dishwasher",
        "icon": "sparkles"
      },
      {
        "id": 29,
        "name": "Coffee maker",
        "icon": "coffee"
      },
      {
        "id": 31,
        "name": "Dishes & silverware",
        "icon": "utensils"
      },
      {
        "id": 32,
        "name": "Wine glasses",
        "icon": "wine"
      },
      {
        "id": 33,
        "name": "Toaster",
        "icon": "flame"
      },
      {
        "id": 34,
        "name": "Fire pit & Outdoor Lounge",
        "icon": "flame"
      },
      {
        "id": 36,
        "name": "Garden Backyard View",
        "icon": "trees"
      },
      {
        "id": 37,
        "name": "Smoke alarm",
        "icon": "shield"
      },
      {
        "id": 39,
        "name": "First aid kit",
        "icon": "cross"
      },
      {
        "id": 40,
        "name": "Smart Keypad Lock",
        "icon": "key"
      },
      {
        "id": 41,
        "name": "EV charger",
        "icon": "zap"
      }
    ],
    "reviews": [
      {
        "id": 142,
        "rating": 5,
        "comment": "Pure luxury! The views were spectacular and everything was impeccably clean.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 6,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      },
      {
        "id": 143,
        "rating": 5,
        "comment": "Amazing stay! Comfortable beds, great amenities, and super fast WiFi.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 7,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      },
      {
        "id": 144,
        "rating": 4,
        "comment": "Unforgettable experience! Wonderful host, peaceful location, highly recommended.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 8,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      }
    ],
    "booked_ranges": []
  },
  {
    "id": 49,
    "title": "Alleppey Palm Grove Pool Villa",
    "city": "Kerala",
    "country": "India",
    "price_per_night": 195.0,
    "property_type": "Villa",
    "avg_rating": 5.0,
    "review_count": 3,
    "is_wishlisted": false,
    "images": [
      {
        "id": 193,
        "url": "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=800&id=49&p=1",
        "position": 0
      },
      {
        "id": 194,
        "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&id=49&p=2",
        "position": 1
      },
      {
        "id": 195,
        "url": "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=800&id=49&p=3",
        "position": 2
      },
      {
        "id": 196,
        "url": "https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=800&id=49&p=4",
        "position": 3
      }
    ],
    "description": "Serene tropical palm grove villa with private plunge pool, outdoor rain shower, and traditional Kerala cuisine.",
    "address": "Marari Beach Promenade",
    "latitude": 9.6006,
    "longitude": 76.2999,
    "cleaning_fee": 30.0,
    "service_fee_pct": 14.0,
    "max_guests": 6,
    "bedrooms": 3,
    "beds": 3,
    "bathrooms": 3.0,
    "host": {
      "id": 3,
      "name": "Yuki Tanaka",
      "email": "host3@demo.com",
      "phone": "+1 (555) 234-5678",
      "avatar_url": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
      "is_superhost": true,
      "bio": "Tokyo native offering authentic Japanese living experiences. Tea ceremony instructor.",
      "created_at": "2021-03-15T00:00:00Z"
    },
    "amenities": [
      {
        "id": 2,
        "name": "Kitchen",
        "icon": "cooking-pot"
      },
      {
        "id": 4,
        "name": "Pool",
        "icon": "waves"
      },
      {
        "id": 5,
        "name": "Air conditioning",
        "icon": "snowflake"
      },
      {
        "id": 7,
        "name": "TV",
        "icon": "tv"
      },
      {
        "id": 12,
        "name": "Free parking on premises",
        "icon": "car"
      },
      {
        "id": 13,
        "name": "Allows pets",
        "icon": "dog"
      },
      {
        "id": 14,
        "name": "Dedicated workspace",
        "icon": "monitor"
      },
      {
        "id": 16,
        "name": "Dryer",
        "icon": "sun"
      },
      {
        "id": 17,
        "name": "Private patio or balcony",
        "icon": "sun"
      },
      {
        "id": 18,
        "name": "Exterior security cameras",
        "icon": "shield-check"
      },
      {
        "id": 19,
        "name": "Bathtub",
        "icon": "bath"
      },
      {
        "id": 20,
        "name": "Hair dryer",
        "icon": "wind"
      },
      {
        "id": 22,
        "name": "Shampoo & Body Wash",
        "icon": "sparkles"
      },
      {
        "id": 23,
        "name": "Room-darkening shades",
        "icon": "moon"
      },
      {
        "id": 25,
        "name": "Iron & Board",
        "icon": "shirt"
      },
      {
        "id": 26,
        "name": "Refrigerator",
        "icon": "box"
      },
      {
        "id": 27,
        "name": "Microwave",
        "icon": "box"
      },
      {
        "id": 28,
        "name": "Dishwasher",
        "icon": "sparkles"
      },
      {
        "id": 29,
        "name": "Coffee maker",
        "icon": "coffee"
      },
      {
        "id": 30,
        "name": "Cooking basics",
        "icon": "utensils"
      },
      {
        "id": 31,
        "name": "Dishes & silverware",
        "icon": "utensils"
      },
      {
        "id": 32,
        "name": "Wine glasses",
        "icon": "wine"
      },
      {
        "id": 33,
        "name": "Toaster",
        "icon": "flame"
      },
      {
        "id": 35,
        "name": "BBQ grill",
        "icon": "flame"
      },
      {
        "id": 37,
        "name": "Smoke alarm",
        "icon": "shield"
      },
      {
        "id": 38,
        "name": "Carbon monoxide alarm",
        "icon": "shield"
      },
      {
        "id": 39,
        "name": "First aid kit",
        "icon": "cross"
      }
    ],
    "reviews": [
      {
        "id": 145,
        "rating": 5,
        "comment": "Sublime place! The design and ambiance exceeded all expectations. Host was incredible.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 6,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      },
      {
        "id": 146,
        "rating": 5,
        "comment": "Sublime place! The design and ambiance exceeded all expectations. Host was incredible.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 7,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      },
      {
        "id": 147,
        "rating": 5,
        "comment": "Unforgettable experience! Wonderful host, peaceful location, highly recommended.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 8,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      }
    ],
    "booked_ranges": []
  },
  {
    "id": 50,
    "title": "Historic Townhouse near Big Ben",
    "city": "London",
    "country": "United Kingdom",
    "price_per_night": 360.0,
    "property_type": "House",
    "avg_rating": 4.67,
    "review_count": 3,
    "is_wishlisted": false,
    "images": [
      {
        "id": 197,
        "url": "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800&id=50&p=1",
        "position": 0
      },
      {
        "id": 198,
        "url": "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&id=50&p=2",
        "position": 1
      },
      {
        "id": 199,
        "url": "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800&id=50&p=3",
        "position": 2
      },
      {
        "id": 200,
        "url": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&id=50&p=4",
        "position": 3
      }
    ],
    "description": "Classic 4-story Victorian townhouse in Westminster with private courtyard garden and historic fireplace.",
    "address": "Great College St, Westminster",
    "latitude": 51.4975,
    "longitude": -0.1278,
    "cleaning_fee": 70.0,
    "service_fee_pct": 14.0,
    "max_guests": 6,
    "bedrooms": 3,
    "beds": 3,
    "bathrooms": 2.5,
    "host": {
      "id": 4,
      "name": "Emily Chen",
      "email": "host4@demo.com",
      "phone": "+1 (555) 234-5678",
      "avatar_url": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop",
      "is_superhost": true,
      "bio": "NYC apartment curator. I find and design the most Instagram-worthy spaces in Manhattan.",
      "created_at": "2021-03-15T00:00:00Z"
    },
    "amenities": [
      {
        "id": 4,
        "name": "Pool",
        "icon": "waves"
      },
      {
        "id": 5,
        "name": "Air conditioning",
        "icon": "snowflake"
      },
      {
        "id": 12,
        "name": "Free parking on premises",
        "icon": "car"
      },
      {
        "id": 13,
        "name": "Allows pets",
        "icon": "dog"
      },
      {
        "id": 14,
        "name": "Dedicated workspace",
        "icon": "monitor"
      },
      {
        "id": 15,
        "name": "Washing machine",
        "icon": "disc"
      },
      {
        "id": 16,
        "name": "Dryer",
        "icon": "sun"
      },
      {
        "id": 17,
        "name": "Private patio or balcony",
        "icon": "sun"
      },
      {
        "id": 19,
        "name": "Bathtub",
        "icon": "bath"
      },
      {
        "id": 20,
        "name": "Hair dryer",
        "icon": "wind"
      },
      {
        "id": 21,
        "name": "Hot water",
        "icon": "flame"
      },
      {
        "id": 22,
        "name": "Shampoo & Body Wash",
        "icon": "sparkles"
      },
      {
        "id": 23,
        "name": "Room-darkening shades",
        "icon": "moon"
      },
      {
        "id": 24,
        "name": "Extra pillows & blankets",
        "icon": "bed"
      },
      {
        "id": 28,
        "name": "Dishwasher",
        "icon": "sparkles"
      },
      {
        "id": 30,
        "name": "Cooking basics",
        "icon": "utensils"
      },
      {
        "id": 31,
        "name": "Dishes & silverware",
        "icon": "utensils"
      },
      {
        "id": 32,
        "name": "Wine glasses",
        "icon": "wine"
      },
      {
        "id": 33,
        "name": "Toaster",
        "icon": "flame"
      },
      {
        "id": 34,
        "name": "Fire pit & Outdoor Lounge",
        "icon": "flame"
      },
      {
        "id": 35,
        "name": "BBQ grill",
        "icon": "flame"
      },
      {
        "id": 36,
        "name": "Garden Backyard View",
        "icon": "trees"
      },
      {
        "id": 37,
        "name": "Smoke alarm",
        "icon": "shield"
      },
      {
        "id": 38,
        "name": "Carbon monoxide alarm",
        "icon": "shield"
      },
      {
        "id": 39,
        "name": "First aid kit",
        "icon": "cross"
      },
      {
        "id": 41,
        "name": "EV charger",
        "icon": "zap"
      }
    ],
    "reviews": [
      {
        "id": 148,
        "rating": 5,
        "comment": "Amazing stay! Comfortable beds, great amenities, and super fast WiFi.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 6,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      },
      {
        "id": 149,
        "rating": 4,
        "comment": "Pure luxury! The views were spectacular and everything was impeccably clean.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 7,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      },
      {
        "id": 150,
        "rating": 5,
        "comment": "Pure luxury! The views were spectacular and everything was impeccably clean.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 8,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      }
    ],
    "booked_ranges": []
  },
  {
    "id": 51,
    "title": "Colosseum View Luxury Penthouse",
    "city": "Rome",
    "country": "Italy",
    "price_per_night": 390.0,
    "property_type": "Apartment",
    "avg_rating": 4.67,
    "review_count": 3,
    "is_wishlisted": false,
    "images": [
      {
        "id": 201,
        "url": "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&id=51&p=1",
        "position": 0
      },
      {
        "id": 202,
        "url": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&id=51&p=2",
        "position": 1
      },
      {
        "id": 203,
        "url": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&id=51&p=3",
        "position": 2
      },
      {
        "id": 204,
        "url": "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&id=51&p=4",
        "position": 3
      }
    ],
    "description": "Panoramic terrace views directly overlooking the Roman Colosseum. Marble floors, wine cellar, and sunbed.",
    "address": "Via dei Fori Imperiali",
    "latitude": 41.8902,
    "longitude": 12.4922,
    "cleaning_fee": 75.0,
    "service_fee_pct": 14.0,
    "max_guests": 4,
    "bedrooms": 2,
    "beds": 2,
    "bathrooms": 2.0,
    "host": {
      "id": 5,
      "name": "Wayan Sudarma",
      "email": "host5@demo.com",
      "phone": "+1 (555) 234-5678",
      "avatar_url": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
      "is_superhost": false,
      "bio": "Bali hospitality expert. Providing tropical paradise retreats for over a decade.",
      "created_at": "2021-03-15T00:00:00Z"
    },
    "amenities": [
      {
        "id": 2,
        "name": "Kitchen",
        "icon": "cooking-pot"
      },
      {
        "id": 4,
        "name": "Pool",
        "icon": "waves"
      },
      {
        "id": 7,
        "name": "TV",
        "icon": "tv"
      },
      {
        "id": 11,
        "name": "Wifi",
        "icon": "wifi"
      },
      {
        "id": 12,
        "name": "Free parking on premises",
        "icon": "car"
      },
      {
        "id": 13,
        "name": "Allows pets",
        "icon": "dog"
      },
      {
        "id": 14,
        "name": "Dedicated workspace",
        "icon": "monitor"
      },
      {
        "id": 15,
        "name": "Washing machine",
        "icon": "disc"
      },
      {
        "id": 17,
        "name": "Private patio or balcony",
        "icon": "sun"
      },
      {
        "id": 18,
        "name": "Exterior security cameras",
        "icon": "shield-check"
      },
      {
        "id": 19,
        "name": "Bathtub",
        "icon": "bath"
      },
      {
        "id": 20,
        "name": "Hair dryer",
        "icon": "wind"
      },
      {
        "id": 21,
        "name": "Hot water",
        "icon": "flame"
      },
      {
        "id": 22,
        "name": "Shampoo & Body Wash",
        "icon": "sparkles"
      },
      {
        "id": 23,
        "name": "Room-darkening shades",
        "icon": "moon"
      },
      {
        "id": 25,
        "name": "Iron & Board",
        "icon": "shirt"
      },
      {
        "id": 27,
        "name": "Microwave",
        "icon": "box"
      },
      {
        "id": 28,
        "name": "Dishwasher",
        "icon": "sparkles"
      },
      {
        "id": 29,
        "name": "Coffee maker",
        "icon": "coffee"
      },
      {
        "id": 30,
        "name": "Cooking basics",
        "icon": "utensils"
      },
      {
        "id": 31,
        "name": "Dishes & silverware",
        "icon": "utensils"
      },
      {
        "id": 33,
        "name": "Toaster",
        "icon": "flame"
      },
      {
        "id": 34,
        "name": "Fire pit & Outdoor Lounge",
        "icon": "flame"
      },
      {
        "id": 35,
        "name": "BBQ grill",
        "icon": "flame"
      },
      {
        "id": 36,
        "name": "Garden Backyard View",
        "icon": "trees"
      },
      {
        "id": 37,
        "name": "Smoke alarm",
        "icon": "shield"
      },
      {
        "id": 38,
        "name": "Carbon monoxide alarm",
        "icon": "shield"
      },
      {
        "id": 39,
        "name": "First aid kit",
        "icon": "cross"
      },
      {
        "id": 40,
        "name": "Smart Keypad Lock",
        "icon": "key"
      },
      {
        "id": 41,
        "name": "EV charger",
        "icon": "zap"
      }
    ],
    "reviews": [
      {
        "id": 151,
        "rating": 5,
        "comment": "Pure luxury! The views were spectacular and everything was impeccably clean.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 6,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      },
      {
        "id": 152,
        "rating": 4,
        "comment": "Unforgettable experience! Wonderful host, peaceful location, highly recommended.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 7,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      },
      {
        "id": 153,
        "rating": 5,
        "comment": "Sublime place! The design and ambiance exceeded all expectations. Host was incredible.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 8,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      }
    ],
    "booked_ranges": []
  },
  {
    "id": 52,
    "title": "Traditional Zen Bamboo Machiya",
    "city": "Kyoto",
    "country": "Japan",
    "price_per_night": 280.0,
    "property_type": "House",
    "avg_rating": 5.0,
    "review_count": 3,
    "is_wishlisted": false,
    "images": [
      {
        "id": 205,
        "url": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&id=52&p=1",
        "position": 0
      },
      {
        "id": 206,
        "url": "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&id=52&p=2",
        "position": 1
      },
      {
        "id": 207,
        "url": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&id=52&p=3",
        "position": 2
      },
      {
        "id": 208,
        "url": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&id=52&p=4",
        "position": 3
      }
    ],
    "description": "Authentic 100-year-old wooden Machiya house in Gion with private Japanese rock garden and cedar bath.",
    "address": "Gion-machi, Higashiyama-ku",
    "latitude": 35.0037,
    "longitude": 135.7772,
    "cleaning_fee": 50.0,
    "service_fee_pct": 14.0,
    "max_guests": 5,
    "bedrooms": 2,
    "beds": 4,
    "bathrooms": 1.5,
    "host": {
      "id": 10,
      "name": "shivem",
      "email": "shivemkumar8434@gmail.com",
      "phone": "+1 (555) 234-5678",
      "avatar_url": null,
      "is_superhost": false,
      "bio": null,
      "created_at": "2021-03-15T00:00:00Z"
    },
    "amenities": [
      {
        "id": 2,
        "name": "Kitchen",
        "icon": "cooking-pot"
      },
      {
        "id": 4,
        "name": "Pool",
        "icon": "waves"
      },
      {
        "id": 5,
        "name": "Air conditioning",
        "icon": "snowflake"
      },
      {
        "id": 7,
        "name": "TV",
        "icon": "tv"
      },
      {
        "id": 11,
        "name": "Wifi",
        "icon": "wifi"
      },
      {
        "id": 12,
        "name": "Free parking on premises",
        "icon": "car"
      },
      {
        "id": 13,
        "name": "Allows pets",
        "icon": "dog"
      },
      {
        "id": 14,
        "name": "Dedicated workspace",
        "icon": "monitor"
      },
      {
        "id": 15,
        "name": "Washing machine",
        "icon": "disc"
      },
      {
        "id": 16,
        "name": "Dryer",
        "icon": "sun"
      },
      {
        "id": 17,
        "name": "Private patio or balcony",
        "icon": "sun"
      },
      {
        "id": 18,
        "name": "Exterior security cameras",
        "icon": "shield-check"
      },
      {
        "id": 19,
        "name": "Bathtub",
        "icon": "bath"
      },
      {
        "id": 20,
        "name": "Hair dryer",
        "icon": "wind"
      },
      {
        "id": 21,
        "name": "Hot water",
        "icon": "flame"
      },
      {
        "id": 22,
        "name": "Shampoo & Body Wash",
        "icon": "sparkles"
      },
      {
        "id": 24,
        "name": "Extra pillows & blankets",
        "icon": "bed"
      },
      {
        "id": 25,
        "name": "Iron & Board",
        "icon": "shirt"
      },
      {
        "id": 26,
        "name": "Refrigerator",
        "icon": "box"
      },
      {
        "id": 29,
        "name": "Coffee maker",
        "icon": "coffee"
      },
      {
        "id": 31,
        "name": "Dishes & silverware",
        "icon": "utensils"
      },
      {
        "id": 32,
        "name": "Wine glasses",
        "icon": "wine"
      },
      {
        "id": 33,
        "name": "Toaster",
        "icon": "flame"
      },
      {
        "id": 34,
        "name": "Fire pit & Outdoor Lounge",
        "icon": "flame"
      },
      {
        "id": 35,
        "name": "BBQ grill",
        "icon": "flame"
      },
      {
        "id": 36,
        "name": "Garden Backyard View",
        "icon": "trees"
      },
      {
        "id": 37,
        "name": "Smoke alarm",
        "icon": "shield"
      },
      {
        "id": 38,
        "name": "Carbon monoxide alarm",
        "icon": "shield"
      },
      {
        "id": 40,
        "name": "Smart Keypad Lock",
        "icon": "key"
      },
      {
        "id": 41,
        "name": "EV charger",
        "icon": "zap"
      }
    ],
    "reviews": [
      {
        "id": 154,
        "rating": 5,
        "comment": "Amazing stay! Comfortable beds, great amenities, and super fast WiFi.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 6,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      },
      {
        "id": 155,
        "rating": 5,
        "comment": "Amazing stay! Comfortable beds, great amenities, and super fast WiFi.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 7,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      },
      {
        "id": 156,
        "rating": 5,
        "comment": "Unforgettable experience! Wonderful host, peaceful location, highly recommended.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 8,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      }
    ],
    "booked_ranges": []
  },
  {
    "id": 53,
    "title": "Burj Khalifa Skyline Luxury Suite",
    "city": "Dubai",
    "country": "United Arab Emirates",
    "price_per_night": 450.0,
    "property_type": "Apartment",
    "avg_rating": 5.0,
    "review_count": 3,
    "is_wishlisted": false,
    "images": [
      {
        "id": 209,
        "url": "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&id=53&p=1",
        "position": 0
      },
      {
        "id": 210,
        "url": "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&id=53&p=2",
        "position": 1
      },
      {
        "id": 211,
        "url": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&id=53&p=3",
        "position": 2
      },
      {
        "id": 212,
        "url": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&id=53&p=4",
        "position": 3
      }
    ],
    "description": "Ultra-luxury high floor suite in Downtown Dubai with balcony looking at Burj Khalifa and Dubai Fountain.",
    "address": "Downtown Dubai Blvd",
    "latitude": 25.1972,
    "longitude": 55.2744,
    "cleaning_fee": 90.0,
    "service_fee_pct": 14.0,
    "max_guests": 4,
    "bedrooms": 2,
    "beds": 2,
    "bathrooms": 2.0,
    "host": {
      "id": 1,
      "name": "Sarah Johnson",
      "email": "host1@demo.com",
      "phone": "+1 (555) 234-5678",
      "avatar_url": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
      "is_superhost": true,
      "bio": "Superhost with 5+ years of experience. I love sharing beautiful spaces with travelers from around the world.",
      "created_at": "2021-03-15T00:00:00Z"
    },
    "amenities": [
      {
        "id": 2,
        "name": "Kitchen",
        "icon": "cooking-pot"
      },
      {
        "id": 4,
        "name": "Pool",
        "icon": "waves"
      },
      {
        "id": 5,
        "name": "Air conditioning",
        "icon": "snowflake"
      },
      {
        "id": 11,
        "name": "Wifi",
        "icon": "wifi"
      },
      {
        "id": 12,
        "name": "Free parking on premises",
        "icon": "car"
      },
      {
        "id": 13,
        "name": "Allows pets",
        "icon": "dog"
      },
      {
        "id": 15,
        "name": "Washing machine",
        "icon": "disc"
      },
      {
        "id": 16,
        "name": "Dryer",
        "icon": "sun"
      },
      {
        "id": 17,
        "name": "Private patio or balcony",
        "icon": "sun"
      },
      {
        "id": 19,
        "name": "Bathtub",
        "icon": "bath"
      },
      {
        "id": 20,
        "name": "Hair dryer",
        "icon": "wind"
      },
      {
        "id": 21,
        "name": "Hot water",
        "icon": "flame"
      },
      {
        "id": 22,
        "name": "Shampoo & Body Wash",
        "icon": "sparkles"
      },
      {
        "id": 26,
        "name": "Refrigerator",
        "icon": "box"
      },
      {
        "id": 27,
        "name": "Microwave",
        "icon": "box"
      },
      {
        "id": 28,
        "name": "Dishwasher",
        "icon": "sparkles"
      },
      {
        "id": 31,
        "name": "Dishes & silverware",
        "icon": "utensils"
      },
      {
        "id": 32,
        "name": "Wine glasses",
        "icon": "wine"
      },
      {
        "id": 33,
        "name": "Toaster",
        "icon": "flame"
      },
      {
        "id": 34,
        "name": "Fire pit & Outdoor Lounge",
        "icon": "flame"
      },
      {
        "id": 35,
        "name": "BBQ grill",
        "icon": "flame"
      },
      {
        "id": 36,
        "name": "Garden Backyard View",
        "icon": "trees"
      },
      {
        "id": 37,
        "name": "Smoke alarm",
        "icon": "shield"
      },
      {
        "id": 38,
        "name": "Carbon monoxide alarm",
        "icon": "shield"
      },
      {
        "id": 40,
        "name": "Smart Keypad Lock",
        "icon": "key"
      }
    ],
    "reviews": [
      {
        "id": 157,
        "rating": 5,
        "comment": "Pure luxury! The views were spectacular and everything was impeccably clean.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 6,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      },
      {
        "id": 158,
        "rating": 5,
        "comment": "Pure luxury! The views were spectacular and everything was impeccably clean.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 7,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      },
      {
        "id": 159,
        "rating": 5,
        "comment": "Amazing stay! Comfortable beds, great amenities, and super fast WiFi.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 8,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      }
    ],
    "booked_ranges": []
  },
  {
    "id": 54,
    "title": "Sydney Harbour View Designer Loft",
    "city": "Sydney",
    "country": "Australia",
    "price_per_night": 340.0,
    "property_type": "Loft",
    "avg_rating": 4.33,
    "review_count": 3,
    "is_wishlisted": false,
    "images": [
      {
        "id": 213,
        "url": "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=800&id=54&p=1",
        "position": 0
      },
      {
        "id": 214,
        "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&id=54&p=2",
        "position": 1
      },
      {
        "id": 215,
        "url": "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=800&id=54&p=3",
        "position": 2
      },
      {
        "id": 216,
        "url": "https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=800&id=54&p=4",
        "position": 3
      }
    ],
    "description": "Waterfront designer loft in Rocks with views of Sydney Opera House and Harbour Bridge.",
    "address": "George St, The Rocks",
    "latitude": -33.8568,
    "longitude": 151.2093,
    "cleaning_fee": 65.0,
    "service_fee_pct": 14.0,
    "max_guests": 4,
    "bedrooms": 2,
    "beds": 2,
    "bathrooms": 2.0,
    "host": {
      "id": 2,
      "name": "Marco Rossi",
      "email": "host2@demo.com",
      "phone": "+1 (555) 234-5678",
      "avatar_url": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
      "is_superhost": false,
      "bio": "Barcelona local sharing my favorite city spots. Architecture enthusiast and foodie.",
      "created_at": "2021-03-15T00:00:00Z"
    },
    "amenities": [
      {
        "id": 2,
        "name": "Kitchen",
        "icon": "cooking-pot"
      },
      {
        "id": 4,
        "name": "Pool",
        "icon": "waves"
      },
      {
        "id": 11,
        "name": "Wifi",
        "icon": "wifi"
      },
      {
        "id": 12,
        "name": "Free parking on premises",
        "icon": "car"
      },
      {
        "id": 13,
        "name": "Allows pets",
        "icon": "dog"
      },
      {
        "id": 15,
        "name": "Washing machine",
        "icon": "disc"
      },
      {
        "id": 16,
        "name": "Dryer",
        "icon": "sun"
      },
      {
        "id": 18,
        "name": "Exterior security cameras",
        "icon": "shield-check"
      },
      {
        "id": 19,
        "name": "Bathtub",
        "icon": "bath"
      },
      {
        "id": 20,
        "name": "Hair dryer",
        "icon": "wind"
      },
      {
        "id": 21,
        "name": "Hot water",
        "icon": "flame"
      },
      {
        "id": 22,
        "name": "Shampoo & Body Wash",
        "icon": "sparkles"
      },
      {
        "id": 23,
        "name": "Room-darkening shades",
        "icon": "moon"
      },
      {
        "id": 24,
        "name": "Extra pillows & blankets",
        "icon": "bed"
      },
      {
        "id": 25,
        "name": "Iron & Board",
        "icon": "shirt"
      },
      {
        "id": 27,
        "name": "Microwave",
        "icon": "box"
      },
      {
        "id": 28,
        "name": "Dishwasher",
        "icon": "sparkles"
      },
      {
        "id": 30,
        "name": "Cooking basics",
        "icon": "utensils"
      },
      {
        "id": 31,
        "name": "Dishes & silverware",
        "icon": "utensils"
      },
      {
        "id": 32,
        "name": "Wine glasses",
        "icon": "wine"
      },
      {
        "id": 33,
        "name": "Toaster",
        "icon": "flame"
      },
      {
        "id": 34,
        "name": "Fire pit & Outdoor Lounge",
        "icon": "flame"
      },
      {
        "id": 35,
        "name": "BBQ grill",
        "icon": "flame"
      },
      {
        "id": 36,
        "name": "Garden Backyard View",
        "icon": "trees"
      },
      {
        "id": 37,
        "name": "Smoke alarm",
        "icon": "shield"
      },
      {
        "id": 38,
        "name": "Carbon monoxide alarm",
        "icon": "shield"
      },
      {
        "id": 39,
        "name": "First aid kit",
        "icon": "cross"
      },
      {
        "id": 40,
        "name": "Smart Keypad Lock",
        "icon": "key"
      },
      {
        "id": 41,
        "name": "EV charger",
        "icon": "zap"
      }
    ],
    "reviews": [
      {
        "id": 160,
        "rating": 4,
        "comment": "Sublime place! The design and ambiance exceeded all expectations. Host was incredible.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 6,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      },
      {
        "id": 161,
        "rating": 4,
        "comment": "Unforgettable experience! Wonderful host, peaceful location, highly recommended.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 7,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      },
      {
        "id": 162,
        "rating": 5,
        "comment": "Unforgettable experience! Wonderful host, peaceful location, highly recommended.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 8,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      }
    ],
    "booked_ranges": []
  },
  {
    "id": 55,
    "title": "Canal View Classic Dutch Houseboat",
    "city": "Amsterdam",
    "country": "Netherlands",
    "price_per_night": 220.0,
    "property_type": "Cabin",
    "avg_rating": 4.67,
    "review_count": 3,
    "is_wishlisted": false,
    "images": [
      {
        "id": 217,
        "url": "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800&id=55&p=1",
        "position": 0
      },
      {
        "id": 218,
        "url": "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&id=55&p=2",
        "position": 1
      },
      {
        "id": 219,
        "url": "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800&id=55&p=3",
        "position": 2
      },
      {
        "id": 220,
        "url": "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&id=55&p=4",
        "position": 3
      }
    ],
    "description": "Charming wooden canal house on Prinsengracht with water terrace, swans, and cozy Scandinavian fireplace.",
    "address": "Prinsengracht Canal",
    "latitude": 52.3676,
    "longitude": 4.8833,
    "cleaning_fee": 40.0,
    "service_fee_pct": 14.0,
    "max_guests": 3,
    "bedrooms": 1,
    "beds": 2,
    "bathrooms": 1.0,
    "host": {
      "id": 3,
      "name": "Yuki Tanaka",
      "email": "host3@demo.com",
      "phone": "+1 (555) 234-5678",
      "avatar_url": "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
      "is_superhost": true,
      "bio": "Tokyo native offering authentic Japanese living experiences. Tea ceremony instructor.",
      "created_at": "2021-03-15T00:00:00Z"
    },
    "amenities": [
      {
        "id": 2,
        "name": "Kitchen",
        "icon": "cooking-pot"
      },
      {
        "id": 12,
        "name": "Free parking on premises",
        "icon": "car"
      },
      {
        "id": 13,
        "name": "Allows pets",
        "icon": "dog"
      },
      {
        "id": 15,
        "name": "Washing machine",
        "icon": "disc"
      },
      {
        "id": 16,
        "name": "Dryer",
        "icon": "sun"
      },
      {
        "id": 17,
        "name": "Private patio or balcony",
        "icon": "sun"
      },
      {
        "id": 18,
        "name": "Exterior security cameras",
        "icon": "shield-check"
      },
      {
        "id": 19,
        "name": "Bathtub",
        "icon": "bath"
      },
      {
        "id": 20,
        "name": "Hair dryer",
        "icon": "wind"
      },
      {
        "id": 22,
        "name": "Shampoo & Body Wash",
        "icon": "sparkles"
      },
      {
        "id": 23,
        "name": "Room-darkening shades",
        "icon": "moon"
      },
      {
        "id": 24,
        "name": "Extra pillows & blankets",
        "icon": "bed"
      },
      {
        "id": 25,
        "name": "Iron & Board",
        "icon": "shirt"
      },
      {
        "id": 26,
        "name": "Refrigerator",
        "icon": "box"
      },
      {
        "id": 28,
        "name": "Dishwasher",
        "icon": "sparkles"
      },
      {
        "id": 30,
        "name": "Cooking basics",
        "icon": "utensils"
      },
      {
        "id": 31,
        "name": "Dishes & silverware",
        "icon": "utensils"
      },
      {
        "id": 32,
        "name": "Wine glasses",
        "icon": "wine"
      },
      {
        "id": 33,
        "name": "Toaster",
        "icon": "flame"
      },
      {
        "id": 34,
        "name": "Fire pit & Outdoor Lounge",
        "icon": "flame"
      },
      {
        "id": 35,
        "name": "BBQ grill",
        "icon": "flame"
      },
      {
        "id": 36,
        "name": "Garden Backyard View",
        "icon": "trees"
      },
      {
        "id": 38,
        "name": "Carbon monoxide alarm",
        "icon": "shield"
      },
      {
        "id": 39,
        "name": "First aid kit",
        "icon": "cross"
      },
      {
        "id": 40,
        "name": "Smart Keypad Lock",
        "icon": "key"
      },
      {
        "id": 41,
        "name": "EV charger",
        "icon": "zap"
      }
    ],
    "reviews": [
      {
        "id": 163,
        "rating": 4,
        "comment": "Pure luxury! The views were spectacular and everything was impeccably clean.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 6,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      },
      {
        "id": 164,
        "rating": 5,
        "comment": "Sublime place! The design and ambiance exceeded all expectations. Host was incredible.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 7,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      },
      {
        "id": 165,
        "rating": 5,
        "comment": "Pure luxury! The views were spectacular and everything was impeccably clean.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 8,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      }
    ],
    "booked_ranges": []
  },
  {
    "id": 56,
    "title": "Marina Bay Sands View High-Rise",
    "city": "Singapore",
    "country": "Singapore",
    "price_per_night": 380.0,
    "property_type": "Apartment",
    "avg_rating": 4.33,
    "review_count": 3,
    "is_wishlisted": false,
    "images": [
      {
        "id": 221,
        "url": "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&id=56&p=1",
        "position": 0
      },
      {
        "id": 222,
        "url": "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&id=56&p=2",
        "position": 1
      },
      {
        "id": 223,
        "url": "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&id=56&p=3",
        "position": 2
      },
      {
        "id": 224,
        "url": "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&id=56&p=4",
        "position": 3
      }
    ],
    "description": "Sleek luxury apartment in Marina Bay with floor-to-ceiling windows and rooftop infinity pool access.",
    "address": "Marina Boulevard",
    "latitude": 1.2823,
    "longitude": 103.858,
    "cleaning_fee": 70.0,
    "service_fee_pct": 14.0,
    "max_guests": 4,
    "bedrooms": 2,
    "beds": 2,
    "bathrooms": 2.0,
    "host": {
      "id": 4,
      "name": "Emily Chen",
      "email": "host4@demo.com",
      "phone": "+1 (555) 234-5678",
      "avatar_url": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop",
      "is_superhost": true,
      "bio": "NYC apartment curator. I find and design the most Instagram-worthy spaces in Manhattan.",
      "created_at": "2021-03-15T00:00:00Z"
    },
    "amenities": [
      {
        "id": 2,
        "name": "Kitchen",
        "icon": "cooking-pot"
      },
      {
        "id": 4,
        "name": "Pool",
        "icon": "waves"
      },
      {
        "id": 5,
        "name": "Air conditioning",
        "icon": "snowflake"
      },
      {
        "id": 7,
        "name": "TV",
        "icon": "tv"
      },
      {
        "id": 11,
        "name": "Wifi",
        "icon": "wifi"
      },
      {
        "id": 12,
        "name": "Free parking on premises",
        "icon": "car"
      },
      {
        "id": 13,
        "name": "Allows pets",
        "icon": "dog"
      },
      {
        "id": 16,
        "name": "Dryer",
        "icon": "sun"
      },
      {
        "id": 19,
        "name": "Bathtub",
        "icon": "bath"
      },
      {
        "id": 20,
        "name": "Hair dryer",
        "icon": "wind"
      },
      {
        "id": 21,
        "name": "Hot water",
        "icon": "flame"
      },
      {
        "id": 23,
        "name": "Room-darkening shades",
        "icon": "moon"
      },
      {
        "id": 24,
        "name": "Extra pillows & blankets",
        "icon": "bed"
      },
      {
        "id": 25,
        "name": "Iron & Board",
        "icon": "shirt"
      },
      {
        "id": 26,
        "name": "Refrigerator",
        "icon": "box"
      },
      {
        "id": 27,
        "name": "Microwave",
        "icon": "box"
      },
      {
        "id": 28,
        "name": "Dishwasher",
        "icon": "sparkles"
      },
      {
        "id": 30,
        "name": "Cooking basics",
        "icon": "utensils"
      },
      {
        "id": 31,
        "name": "Dishes & silverware",
        "icon": "utensils"
      },
      {
        "id": 34,
        "name": "Fire pit & Outdoor Lounge",
        "icon": "flame"
      },
      {
        "id": 35,
        "name": "BBQ grill",
        "icon": "flame"
      },
      {
        "id": 36,
        "name": "Garden Backyard View",
        "icon": "trees"
      },
      {
        "id": 37,
        "name": "Smoke alarm",
        "icon": "shield"
      },
      {
        "id": 38,
        "name": "Carbon monoxide alarm",
        "icon": "shield"
      },
      {
        "id": 39,
        "name": "First aid kit",
        "icon": "cross"
      },
      {
        "id": 40,
        "name": "Smart Keypad Lock",
        "icon": "key"
      }
    ],
    "reviews": [
      {
        "id": 166,
        "rating": 4,
        "comment": "Pure luxury! The views were spectacular and everything was impeccably clean.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 6,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      },
      {
        "id": 167,
        "rating": 5,
        "comment": "Sublime place! The design and ambiance exceeded all expectations. Host was incredible.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 7,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      },
      {
        "id": 168,
        "rating": 4,
        "comment": "Amazing stay! Comfortable beds, great amenities, and super fast WiFi.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 8,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      }
    ],
    "booked_ranges": []
  },
  {
    "id": 57,
    "title": "White Caldera Infinity Villa",
    "city": "Santorini",
    "country": "Greece",
    "price_per_night": 580.0,
    "property_type": "Villa",
    "avg_rating": 4.67,
    "review_count": 3,
    "is_wishlisted": false,
    "images": [
      {
        "id": 225,
        "url": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&id=57&p=1",
        "position": 0
      },
      {
        "id": 226,
        "url": "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&id=57&p=2",
        "position": 1
      },
      {
        "id": 227,
        "url": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&id=57&p=3",
        "position": 2
      },
      {
        "id": 228,
        "url": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&id=57&p=4",
        "position": 3
      }
    ],
    "description": "Iconic whitewashed Santorini villa carved into cliffs with private cave pool and Aegean sunset lounge.",
    "address": "Oia Cliffside Promenade",
    "latitude": 36.4618,
    "longitude": 25.3753,
    "cleaning_fee": 120.0,
    "service_fee_pct": 14.0,
    "max_guests": 4,
    "bedrooms": 2,
    "beds": 2,
    "bathrooms": 2.0,
    "host": {
      "id": 5,
      "name": "Wayan Sudarma",
      "email": "host5@demo.com",
      "phone": "+1 (555) 234-5678",
      "avatar_url": "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
      "is_superhost": false,
      "bio": "Bali hospitality expert. Providing tropical paradise retreats for over a decade.",
      "created_at": "2021-03-15T00:00:00Z"
    },
    "amenities": [
      {
        "id": 2,
        "name": "Kitchen",
        "icon": "cooking-pot"
      },
      {
        "id": 4,
        "name": "Pool",
        "icon": "waves"
      },
      {
        "id": 5,
        "name": "Air conditioning",
        "icon": "snowflake"
      },
      {
        "id": 7,
        "name": "TV",
        "icon": "tv"
      },
      {
        "id": 11,
        "name": "Wifi",
        "icon": "wifi"
      },
      {
        "id": 12,
        "name": "Free parking on premises",
        "icon": "car"
      },
      {
        "id": 15,
        "name": "Washing machine",
        "icon": "disc"
      },
      {
        "id": 16,
        "name": "Dryer",
        "icon": "sun"
      },
      {
        "id": 17,
        "name": "Private patio or balcony",
        "icon": "sun"
      },
      {
        "id": 18,
        "name": "Exterior security cameras",
        "icon": "shield-check"
      },
      {
        "id": 19,
        "name": "Bathtub",
        "icon": "bath"
      },
      {
        "id": 21,
        "name": "Hot water",
        "icon": "flame"
      },
      {
        "id": 22,
        "name": "Shampoo & Body Wash",
        "icon": "sparkles"
      },
      {
        "id": 23,
        "name": "Room-darkening shades",
        "icon": "moon"
      },
      {
        "id": 24,
        "name": "Extra pillows & blankets",
        "icon": "bed"
      },
      {
        "id": 25,
        "name": "Iron & Board",
        "icon": "shirt"
      },
      {
        "id": 26,
        "name": "Refrigerator",
        "icon": "box"
      },
      {
        "id": 29,
        "name": "Coffee maker",
        "icon": "coffee"
      },
      {
        "id": 30,
        "name": "Cooking basics",
        "icon": "utensils"
      },
      {
        "id": 31,
        "name": "Dishes & silverware",
        "icon": "utensils"
      },
      {
        "id": 32,
        "name": "Wine glasses",
        "icon": "wine"
      },
      {
        "id": 33,
        "name": "Toaster",
        "icon": "flame"
      },
      {
        "id": 35,
        "name": "BBQ grill",
        "icon": "flame"
      },
      {
        "id": 36,
        "name": "Garden Backyard View",
        "icon": "trees"
      },
      {
        "id": 37,
        "name": "Smoke alarm",
        "icon": "shield"
      },
      {
        "id": 38,
        "name": "Carbon monoxide alarm",
        "icon": "shield"
      },
      {
        "id": 39,
        "name": "First aid kit",
        "icon": "cross"
      }
    ],
    "reviews": [
      {
        "id": 169,
        "rating": 4,
        "comment": "Sublime place! The design and ambiance exceeded all expectations. Host was incredible.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 6,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      },
      {
        "id": 170,
        "rating": 5,
        "comment": "Amazing stay! Comfortable beds, great amenities, and super fast WiFi.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 7,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      },
      {
        "id": 171,
        "rating": 5,
        "comment": "Unforgettable experience! Wonderful host, peaceful location, highly recommended.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 8,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      }
    ],
    "booked_ranges": []
  },
  {
    "id": 58,
    "title": "Beachfront Ocean Chalet in Wailea",
    "city": "Maui",
    "country": "United States",
    "price_per_night": 490.0,
    "property_type": "Villa",
    "avg_rating": 5.0,
    "review_count": 3,
    "is_wishlisted": false,
    "images": [
      {
        "id": 229,
        "url": "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&id=58&p=1",
        "position": 0
      },
      {
        "id": 230,
        "url": "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&id=58&p=2",
        "position": 1
      },
      {
        "id": 231,
        "url": "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&id=58&p=3",
        "position": 2
      },
      {
        "id": 232,
        "url": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&id=58&p=4",
        "position": 3
      }
    ],
    "description": "Luxury Hawaiian beach chalet with private ocean access, palm gardens, and outdoor lanai.",
    "address": "Wailea Alanui Dr",
    "latitude": 20.69,
    "longitude": -156.4419,
    "cleaning_fee": 100.0,
    "service_fee_pct": 14.0,
    "max_guests": 6,
    "bedrooms": 3,
    "beds": 4,
    "bathrooms": 3.0,
    "host": {
      "id": 10,
      "name": "shivem",
      "email": "shivemkumar8434@gmail.com",
      "phone": "+1 (555) 234-5678",
      "avatar_url": null,
      "is_superhost": false,
      "bio": null,
      "created_at": "2021-03-15T00:00:00Z"
    },
    "amenities": [
      {
        "id": 2,
        "name": "Kitchen",
        "icon": "cooking-pot"
      },
      {
        "id": 4,
        "name": "Pool",
        "icon": "waves"
      },
      {
        "id": 5,
        "name": "Air conditioning",
        "icon": "snowflake"
      },
      {
        "id": 11,
        "name": "Wifi",
        "icon": "wifi"
      },
      {
        "id": 12,
        "name": "Free parking on premises",
        "icon": "car"
      },
      {
        "id": 13,
        "name": "Allows pets",
        "icon": "dog"
      },
      {
        "id": 14,
        "name": "Dedicated workspace",
        "icon": "monitor"
      },
      {
        "id": 15,
        "name": "Washing machine",
        "icon": "disc"
      },
      {
        "id": 16,
        "name": "Dryer",
        "icon": "sun"
      },
      {
        "id": 17,
        "name": "Private patio or balcony",
        "icon": "sun"
      },
      {
        "id": 18,
        "name": "Exterior security cameras",
        "icon": "shield-check"
      },
      {
        "id": 19,
        "name": "Bathtub",
        "icon": "bath"
      },
      {
        "id": 20,
        "name": "Hair dryer",
        "icon": "wind"
      },
      {
        "id": 21,
        "name": "Hot water",
        "icon": "flame"
      },
      {
        "id": 23,
        "name": "Room-darkening shades",
        "icon": "moon"
      },
      {
        "id": 24,
        "name": "Extra pillows & blankets",
        "icon": "bed"
      },
      {
        "id": 27,
        "name": "Microwave",
        "icon": "box"
      },
      {
        "id": 29,
        "name": "Coffee maker",
        "icon": "coffee"
      },
      {
        "id": 30,
        "name": "Cooking basics",
        "icon": "utensils"
      },
      {
        "id": 32,
        "name": "Wine glasses",
        "icon": "wine"
      },
      {
        "id": 33,
        "name": "Toaster",
        "icon": "flame"
      },
      {
        "id": 34,
        "name": "Fire pit & Outdoor Lounge",
        "icon": "flame"
      },
      {
        "id": 35,
        "name": "BBQ grill",
        "icon": "flame"
      },
      {
        "id": 38,
        "name": "Carbon monoxide alarm",
        "icon": "shield"
      },
      {
        "id": 40,
        "name": "Smart Keypad Lock",
        "icon": "key"
      },
      {
        "id": 41,
        "name": "EV charger",
        "icon": "zap"
      }
    ],
    "reviews": [
      {
        "id": 172,
        "rating": 5,
        "comment": "Amazing stay! Comfortable beds, great amenities, and super fast WiFi.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 6,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      },
      {
        "id": 173,
        "rating": 5,
        "comment": "Amazing stay! Comfortable beds, great amenities, and super fast WiFi.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 7,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      },
      {
        "id": 174,
        "rating": 5,
        "comment": "Amazing stay! Comfortable beds, great amenities, and super fast WiFi.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 8,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      }
    ],
    "booked_ranges": []
  },
  {
    "id": 59,
    "title": "Alpine Lake View Chalet in Old Town",
    "city": "Zurich",
    "country": "Switzerland",
    "price_per_night": 320.0,
    "property_type": "Cabin",
    "avg_rating": 5.0,
    "review_count": 3,
    "is_wishlisted": false,
    "images": [
      {
        "id": 233,
        "url": "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=800&id=59&p=1",
        "position": 0
      },
      {
        "id": 234,
        "url": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&id=59&p=2",
        "position": 1
      },
      {
        "id": 235,
        "url": "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=800&id=59&p=3",
        "position": 2
      },
      {
        "id": 236,
        "url": "https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=800&id=59&p=4",
        "position": 3
      }
    ],
    "description": "Elegant timber chalet overlooking Lake Zurich with fireplace, sauna, and mountain balcony.",
    "address": "Seestrasse 14, Zurich",
    "latitude": 47.3686,
    "longitude": 8.543,
    "cleaning_fee": 60.0,
    "service_fee_pct": 14.0,
    "max_guests": 4,
    "bedrooms": 2,
    "beds": 2,
    "bathrooms": 2.0,
    "host": {
      "id": 1,
      "name": "Sarah Johnson",
      "email": "host1@demo.com",
      "phone": "+1 (555) 234-5678",
      "avatar_url": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
      "is_superhost": true,
      "bio": "Superhost with 5+ years of experience. I love sharing beautiful spaces with travelers from around the world.",
      "created_at": "2021-03-15T00:00:00Z"
    },
    "amenities": [
      {
        "id": 2,
        "name": "Kitchen",
        "icon": "cooking-pot"
      },
      {
        "id": 4,
        "name": "Pool",
        "icon": "waves"
      },
      {
        "id": 7,
        "name": "TV",
        "icon": "tv"
      },
      {
        "id": 12,
        "name": "Free parking on premises",
        "icon": "car"
      },
      {
        "id": 13,
        "name": "Allows pets",
        "icon": "dog"
      },
      {
        "id": 18,
        "name": "Exterior security cameras",
        "icon": "shield-check"
      },
      {
        "id": 19,
        "name": "Bathtub",
        "icon": "bath"
      },
      {
        "id": 21,
        "name": "Hot water",
        "icon": "flame"
      },
      {
        "id": 24,
        "name": "Extra pillows & blankets",
        "icon": "bed"
      },
      {
        "id": 25,
        "name": "Iron & Board",
        "icon": "shirt"
      },
      {
        "id": 26,
        "name": "Refrigerator",
        "icon": "box"
      },
      {
        "id": 27,
        "name": "Microwave",
        "icon": "box"
      },
      {
        "id": 28,
        "name": "Dishwasher",
        "icon": "sparkles"
      },
      {
        "id": 29,
        "name": "Coffee maker",
        "icon": "coffee"
      },
      {
        "id": 30,
        "name": "Cooking basics",
        "icon": "utensils"
      },
      {
        "id": 31,
        "name": "Dishes & silverware",
        "icon": "utensils"
      },
      {
        "id": 32,
        "name": "Wine glasses",
        "icon": "wine"
      },
      {
        "id": 33,
        "name": "Toaster",
        "icon": "flame"
      },
      {
        "id": 34,
        "name": "Fire pit & Outdoor Lounge",
        "icon": "flame"
      },
      {
        "id": 35,
        "name": "BBQ grill",
        "icon": "flame"
      },
      {
        "id": 37,
        "name": "Smoke alarm",
        "icon": "shield"
      },
      {
        "id": 38,
        "name": "Carbon monoxide alarm",
        "icon": "shield"
      },
      {
        "id": 39,
        "name": "First aid kit",
        "icon": "cross"
      },
      {
        "id": 40,
        "name": "Smart Keypad Lock",
        "icon": "key"
      },
      {
        "id": 41,
        "name": "EV charger",
        "icon": "zap"
      }
    ],
    "reviews": [
      {
        "id": 175,
        "rating": 5,
        "comment": "Amazing stay! Comfortable beds, great amenities, and super fast WiFi.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 6,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      },
      {
        "id": 176,
        "rating": 5,
        "comment": "Pure luxury! The views were spectacular and everything was impeccably clean.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 7,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      },
      {
        "id": 177,
        "rating": 5,
        "comment": "Sublime place! The design and ambiance exceeded all expectations. Host was incredible.",
        "created_at": "2024-05-10T00:00:00Z",
        "guest": {
          "id": 8,
          "name": "Michael R.",
          "email": "guest1@demo.com",
          "is_host": false,
          "avatar_url": "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          "is_superhost": false,
          "created_at": "2022-01-01T00:00:00Z"
        }
      }
    ],
    "booked_ranges": []
  }
];

export function getMockListingDetail(id: number): ListingDetail {
  const found = MOCK_LISTINGS.find((l) => l.id === id);
  if (found) return found;
  return MOCK_LISTINGS[0];
}
