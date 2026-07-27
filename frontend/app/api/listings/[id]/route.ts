import { NextResponse } from 'next/server';

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const id = parseInt(params.id) || 1;
  
  return NextResponse.json({
    id: id,
    title: "Stunning Manhattan Loft with Skyline Views",
    city: "New York",
    country: "United States",
    price_per_night: 285.0,
    property_type: "Loft",
    avg_rating: 4.95,
    review_count: 38,
    is_wishlisted: false,
    description: "Welcome to a stunning, light-filled sanctuary designed for comfort, luxury, and unforgettable memories. Featuring floor-to-ceiling windows, high-speed WiFi, modern gourmet kitchen, and premium amenities.",
    address: "Central District",
    latitude: 40.7128,
    longitude: -74.0060,
    cleaning_fee: 50.0,
    service_fee_pct: 14.0,
    max_guests: 4,
    bedrooms: 2,
    beds: 2,
    bathrooms: 2,
    images: [
      { id: 1, url: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&id=1&p=1", position: 0 },
      { id: 2, url: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&id=1&p=2", position: 1 },
      { id: 3, url: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&id=1&p=3", position: 2 },
      { id: 4, url: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800&id=1&p=4", position: 3 }
    ],
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
          avatar_url: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=200",
          is_superhost: false,
          created_at: "2022-01-01T00:00:00Z"
        }
      }
    ],
    booked_ranges: []
  });
}
