import { NextResponse } from 'next/server';

const MOCK_LISTINGS = [
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

export async function GET() {
  return NextResponse.json({
    items: MOCK_LISTINGS,
    total: MOCK_LISTINGS.length,
    page: 1,
    pages: 1,
    page_size: MOCK_LISTINGS.length,
  });
}
