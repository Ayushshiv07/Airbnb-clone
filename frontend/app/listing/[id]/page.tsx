'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Navbar } from '../../../components/Navbar';
import { Footer } from '../../../components/Footer';
import { Gallery } from '../../../components/Gallery';
import { DateRangeCalendar } from '../../../components/DateRangeCalendar';
import { BookingWidget } from '../../../components/BookingWidget';
import { ReviewsSection } from '../../../components/ReviewsSection';
import { MapSection } from '../../../components/MapSection';
import { SkeletonDetail } from '../../../components/Skeleton';
import { PlaceholderSection } from '../../../components/PlaceholderSection';
import { ListingDetail as ListingDetailType } from '../../../lib/types';
import { api } from '../../../lib/api';
import { Star, ShieldCheck, Heart, Share2, Award, Sparkles, User as UserIcon } from 'lucide-react';
import { useAuth } from '../../../contexts/AuthContext';
import { useToast } from '../../../contexts/ToastContext';

export default function ListingDetailPage() {
  const params = useParams();
  const router = useRouter();
  const listingId = params.id;

  const { user } = useAuth();
  const { showToast } = useToast();

  const [listing, setListing] = useState<ListingDetailType | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [isWishlisted, setIsWishlisted] = useState(false);

  useEffect(() => {
    if (!listingId) return;
    setIsLoading(true);

    api
      .get<ListingDetailType>(`/listings/${listingId}`)
      .then((data) => {
        setListing(data);
        setIsWishlisted(data.is_wishlisted);
      })
      .catch((err) => {
        showToast('Listing not found', 'error');
        router.push('/');
      })
      .finally(() => setIsLoading(false));
  }, [listingId, router, showToast]);

  const handleWishlistToggle = async () => {
    if (!user) {
      showToast('Please log in to save listings', 'info');
      return;
    }
    const prev = isWishlisted;
    setIsWishlisted(!prev);

    try {
      const res = await api.post<{ wishlisted: boolean }>('/wishlist/toggle', {
        listing_id: Number(listingId),
      });
      setIsWishlisted(res.wishlisted);
      showToast(res.wishlisted ? 'Saved to Wishlist' : 'Removed from Wishlist', 'success');
    } catch {
      setIsWishlisted(prev);
    }
  };

  if (isLoading || !listing) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <SkeletonDetail />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 w-full text-black">
        
        {/* Title & Action Bar */}
        <div className="mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-black tracking-tight">
            {listing.title}
          </h1>

          <div className="flex flex-wrap items-center justify-between gap-4 mt-2 text-sm text-black font-semibold">
            <div className="flex items-center gap-2 font-bold text-black">
              {listing.avg_rating && (
                <>
                  <Star className="w-4 h-4 fill-black text-black" />
                  <span>{listing.avg_rating.toFixed(2)}</span>
                  <span className="text-gray-400">·</span>
                </>
              )}
              <span className="underline font-bold text-black">{listing.review_count} reviews</span>
              <span className="text-gray-400">·</span>
              {listing.host.is_superhost && (
                <>
                  <span className="text-rose-500 font-bold flex items-center gap-1">
                    <Award className="w-4 h-4" /> Superhost
                  </span>
                  <span className="text-gray-400">·</span>
                </>
              )}
              <span className="text-black font-semibold">{listing.city}, {listing.country}</span>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  showToast('Link copied to clipboard!', 'success');
                }}
                className="flex items-center gap-1.5 text-sm font-bold underline text-black hover:text-rose-500 cursor-pointer"
              >
                <Share2 className="w-4 h-4" /> Share
              </button>

              <button
                onClick={handleWishlistToggle}
                className="flex items-center gap-1.5 text-sm font-bold underline text-black hover:text-rose-500 cursor-pointer"
              >
                <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-rose-500 text-rose-500' : ''}`} />
                {isWishlisted ? 'Saved' : 'Save'}
              </button>
            </div>
          </div>
        </div>

        {/* Gallery */}
        <Gallery images={listing.images} title={listing.title} />

        {/* Main Content & Sticky Booking Widget */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 pt-8">
          
          {/* Left Column: Details, Host, Amenities, Calendar, Reviews */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Host Brief Header */}
            <div className="flex items-center justify-between pb-6 border-b border-gray-300">
              <div>
                <h2 className="text-xl font-bold text-black">
                  {listing.property_type} hosted by {listing.host.name}
                </h2>
                <p className="text-sm text-black font-semibold mt-1">
                  {listing.max_guests} guests · {listing.bedrooms} bedrooms · {listing.beds} beds · {listing.bathrooms} baths
                </p>
              </div>

              <div className="w-14 h-14 rounded-full bg-gray-700 text-white font-bold flex items-center justify-center overflow-hidden text-xl shadow-md">
                {listing.host.avatar_url ? (
                  <img src={listing.host.avatar_url} alt={listing.host.name} className="w-full h-full object-cover" />
                ) : (
                  listing.host.name.charAt(0).toUpperCase()
                )}
              </div>
            </div>

            {/* Feature Highlights */}
            <div className="space-y-4 pb-6 border-b border-gray-300 text-sm">
              {listing.host.is_superhost && (
                <div className="flex gap-4 items-start">
                  <Award className="w-6 h-6 text-rose-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-black">{listing.host.name} is a Superhost</h4>
                    <p className="text-gray-900 font-medium text-xs mt-0.5">Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.</p>
                  </div>
                </div>
              )}

              <div className="flex gap-4 items-start">
                <Sparkles className="w-6 h-6 text-rose-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-black">Great location</h4>
                  <p className="text-gray-900 font-medium text-xs mt-0.5">95% of recent guests gave the location a 5-star rating.</p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="pb-6 border-b border-gray-300">
              <h3 className="text-xl font-bold text-black mb-3">About this space</h3>
              <p className="text-black text-sm font-medium leading-relaxed whitespace-pre-line">
                {listing.description}
              </p>
            </div>

            {/* Amenities Grid */}
            <div className="pb-6 border-b border-gray-300">
              <h3 className="text-xl font-bold text-black mb-4">What this place offers</h3>
              <div className="grid grid-cols-2 gap-4">
                {listing.amenities.map((amenity) => (
                  <div key={amenity.id} className="flex items-center gap-3 text-sm text-black font-bold">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                    <span>{amenity.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Date Range Calendar */}
            <div className="pb-6">
              <h3 className="text-xl font-bold text-black mb-2">Select check-in date</h3>
              <p className="text-xs text-black font-semibold mb-6">Add your travel dates for exact pricing</p>
              <DateRangeCalendar
                checkIn={checkIn}
                checkOut={checkOut}
                onChange={(inDate, outDate) => {
                  setCheckIn(inDate);
                  setCheckOut(outDate);
                }}
                bookedRanges={listing.booked_ranges}
              />
            </div>

            {/* Placeholder section: Messaging */}
            <PlaceholderSection
              title="Host Messaging"
              description="Direct in-app chat between guest and host will be available soon."
            />

            {/* Map */}
            <MapSection
              latitude={listing.latitude}
              longitude={listing.longitude}
              city={listing.city}
              country={listing.country}
            />

            {/* Reviews */}
            <ReviewsSection
              reviews={listing.reviews}
              avgRating={listing.avg_rating}
              reviewCount={listing.review_count}
            />

          </div>

          {/* Right Column: Sticky Booking Card */}
          <div className="lg:col-span-1">
            <BookingWidget
              listing={listing}
              checkIn={checkIn}
              checkOut={checkOut}
              onDatesChange={(inDate, outDate) => {
                setCheckIn(inDate);
                setCheckOut(outDate);
              }}
            />
          </div>

        </div>

      </main>

      <Footer />
    </div>
  );
}
