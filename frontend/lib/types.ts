/**
 * TypeScript interfaces matching backend Pydantic schemas.
 */

export interface User {
  id: number;
  name: string;
  email: string;
  is_host: boolean;
  avatar_url?: string | null;
  bio?: string | null;
  is_superhost: boolean;
  created_at: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}

export interface ListingImage {
  id: number;
  url: string;
  position: number;
}

export interface Amenity {
  id: number;
  name: string;
  icon: string;
}

export interface ListingCard {
  id: number;
  title: string;
  city: string;
  country: string;
  price_per_night: number;
  property_type: string;
  images: ListingImage[];
  avg_rating?: number | null;
  review_count: number;
  is_wishlisted: boolean;
}

export interface BookedRange {
  check_in: string;
  check_out: string;
}

export interface HostInfo {
  id: number;
  name: string;
  email?: string;
  phone?: string;
  avatar_url?: string | null;
  is_superhost: boolean;
  bio?: string | null;
  created_at: string;
}

export interface Review {
  id: number;
  rating: number;
  comment: string;
  created_at: string;
  guest: User;
}

export interface ListingDetail {
  id: number;
  host: HostInfo;
  title: string;
  description: string;
  property_type: string;
  city: string;
  country: string;
  address?: string | null;
  latitude?: number | null;
  longitude?: number | null;
  price_per_night: number;
  cleaning_fee: number;
  service_fee_pct: number;
  max_guests: number;
  bedrooms: number;
  beds: number;
  bathrooms: number;
  images: ListingImage[];
  amenities: Amenity[];
  reviews: Review[];
  avg_rating?: number | null;
  review_count: number;
  booked_ranges: BookedRange[];
  is_wishlisted: boolean;
  created_at: string;
}

export interface PaginatedListings {
  items: ListingCard[];
  total: number;
  page: number;
  pages: number;
  page_size: number;
}

export interface ListingSnapshot {
  id: number;
  title: string;
  city: string;
  country: string;
  images: ListingImage[];
  property_type: string;
}

export interface Booking {
  id: number;
  listing: ListingSnapshot;
  guest: User;
  check_in: string;
  check_out: string;
  guests_count: number;
  nightly_rate: number;
  nights: number;
  cleaning_fee: number;
  service_fee: number;
  total_price: number;
  status: 'confirmed' | 'cancelled' | 'completed';
  created_at: string;
  has_review: boolean;
}

export interface HostListing {
  id: number;
  title: string;
  city: string;
  country: string;
  price_per_night: number;
  property_type: string;
  images: ListingImage[];
  booking_count: number;
  created_at: string;
}

export interface ListingCreateParams {
  title: string;
  description: string;
  property_type: string;
  city: string;
  country: string;
  address?: string;
  latitude?: number;
  longitude?: number;
  price_per_night: number;
  cleaning_fee: number;
  max_guests: number;
  bedrooms: number;
  beds: number;
  bathrooms: number;
  amenity_ids: number[];
  images: { url: string; position: number }[];
}
