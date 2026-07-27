import { ListingCard, ListingDetail } from './types';

export const MOCK_LISTINGS: ListingCard[] = [
  {
    id: 1,
    title: "Stunning Manhattan Loft with Skyline Views",
    city: "New York",
    country: "United States",
    price_per_night: 285.0,
    property_type: "Loft",
    avg_rating: 4.95,
    review_count: 38,
    is_wishlisted: false,
    images: [
      { id: 1, url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&id=1&p=1", position: 0 },
      { id: 2, url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&id=1&p=2", position: 1 },
      { id: 3, url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&id=1&p=3", position: 2 },
      { id: 4, url: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800&id=1&p=4", position: 3 }
    ]
  },
  {
    id: 2,
    title: "Cozy Brooklyn Brownstone Apartment",
    city: "New York",
    country: "United States",
    price_per_night: 165.0,
    property_type: "Apartment",
    avg_rating: 4.88,
    review_count: 24,
    is_wishlisted: false,
    images: [
      { id: 5, url: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&id=2&p=1", position: 0 },
      { id: 6, url: "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?w=800&id=2&p=2", position: 1 },
      { id: 7, url: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&id=2&p=3", position: 2 },
      { id: 8, url: "https://images.unsplash.com/photo-1560185008-a33f5c7b1844?w=800&id=2&p=4", position: 3 }
    ]
  },
  {
    id: 3,
    title: "Luxury Penthouse near Times Square",
    city: "New York",
    country: "United States",
    price_per_night: 450.0,
    property_type: "Apartment",
    avg_rating: 4.98,
    review_count: 52,
    is_wishlisted: false,
    images: [
      { id: 9, url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&id=3&p=1", position: 0 },
      { id: 10, url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&id=3&p=2", position: 1 },
      { id: 11, url: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&id=3&p=3", position: 2 },
      { id: 12, url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&id=3&p=4", position: 3 }
    ]
  },
  {
    id: 4,
    title: "Artist's Studio in SoHo",
    city: "New York",
    country: "United States",
    price_per_night: 195.0,
    property_type: "Loft",
    avg_rating: 4.90,
    review_count: 19,
    is_wishlisted: false,
    images: [
      { id: 13, url: "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=800&id=4&p=1", position: 0 },
      { id: 14, url: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&id=4&p=2", position: 1 },
      { id: 15, url: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800&id=4&p=3", position: 2 },
      { id: 16, url: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&id=4&p=4", position: 3 }
    ]
  },
  {
    id: 5,
    title: "Elegant Parisian Apartment near Eiffel Tower",
    city: "Paris",
    country: "France",
    price_per_night: 320.0,
    property_type: "Apartment",
    avg_rating: 4.96,
    review_count: 45,
    is_wishlisted: false,
    images: [
      { id: 17, url: "https://images.unsplash.com/photo-1549638441-b787d2e11f14?w=800&id=5&p=1", position: 0 },
      { id: 18, url: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&id=5&p=2", position: 1 },
      { id: 19, url: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&id=5&p=3", position: 2 },
      { id: 20, url: "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?w=800&id=5&p=4", position: 3 }
    ]
  },
  {
    id: 6,
    title: "Charming Montmartre Studio with Sacré-Cœur View",
    city: "Paris",
    country: "France",
    price_per_night: 145.0,
    property_type: "Apartment",
    avg_rating: 4.87,
    review_count: 31,
    is_wishlisted: false,
    images: [
      { id: 21, url: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&id=6&p=1", position: 0 },
      { id: 22, url: "https://images.unsplash.com/photo-1600573472591-ee6981cf81d6?w=800&id=6&p=2", position: 1 },
      { id: 23, url: "https://images.unsplash.com/photo-1560448075-cbc16bb4af8e?w=800&id=6&p=3", position: 2 },
      { id: 24, url: "https://images.unsplash.com/photo-1564078516393-cf04bd966897?w=800&id=6&p=4", position: 3 }
    ]
  }
];

export function getMockListingDetail(id: number): ListingDetail {
  const card = MOCK_LISTINGS.find((l) => l.id === id) || MOCK_LISTINGS[0];
  return {
    ...card,
    description: "Welcome to a stunning, light-filled sanctuary designed for comfort, luxury, and unforgettable memories. Featuring floor-to-ceiling windows, high-speed WiFi, modern gourmet kitchen, and premium amenities.",
    address: `${card.city} Central District`,
    latitude: 40.7128,
    longitude: -74.0060,
    cleaning_fee: 50.0,
    service_fee_pct: 14.0,
    max_guests: 4,
    bedrooms: 2,
    beds: 2,
    bathrooms: 2,
    host: {
      id: 1,
      name: "Emily Chen",
      email: "emily.chen@demo.com",
      phone: "+1 (555) 234-5678",
      avatar_url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200",
      is_superhost: true,
      bio: "Passionate traveler, designer, and Superhost for over 5 years. I love sharing my city with wonderful guests!",
      created_at: "2021-03-15T00:00:00Z"
    },
    amenities: [
      { id: 1, name: "Fast WiFi", icon: "Wifi" },
      { id: 2, name: "Free Parking", icon: "Car" },
      { id: 3, name: "Air Conditioning", icon: "Wind" },
      { id: 4, name: "Kitchen", icon: "Utensils" },
      { id: 5, name: "TV", icon: "Tv" },
      { id: 6, name: "Workspace", icon: "Monitor" },
      { id: 7, name: "Self check-in", icon: "Key" }
    ],
    reviews: [
      {
        id: 101,
        rating: 5,
        comment: "Absolutely breathtaking place! Clean, beautifully decorated, and close to everything. Emily was a fantastic host!",
        created_at: "2024-05-10T00:00:00Z",
        guest: {
          id: 2,
          name: "Michael R.",
          email: "guest@demo.com",
          is_host: false,
          avatar_url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200",
          is_superhost: false,
          created_at: "2022-01-01T00:00:00Z"
        }
      }
    ],
    booked_ranges: []
  };
}
