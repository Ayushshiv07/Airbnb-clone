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
import { Modal } from '../../../components/Modal';
import { ListingDetail as ListingDetailType } from '../../../lib/types';
import { api } from '../../../lib/api';
import {
  Star,
  ShieldCheck,
  Heart,
  Share2,
  Award,
  Sparkles,
  Wifi,
  Car,
  Waves,
  Utensils,
  Wind,
  Dog,
  Monitor,
  Tv,
  Disc,
  Sun,
  Bath,
  Flame,
  Moon,
  Bed,
  Shirt,
  Box,
  Coffee,
  Wine,
  Trees,
  Shield,
  Cross,
  Zap,
  CheckCircle2,
  Mail,
  Phone,
  MessageSquare,
  Clock,
} from 'lucide-react';
import { useAuth } from '../../../contexts/AuthContext';
import { useToast } from '../../../contexts/ToastContext';

const getAmenityIcon = (name: string) => {
  const n = name.toLowerCase();
  if (n.includes('wifi')) return <Wifi className="w-5 h-5 text-gray-800 dark:text-zinc-200" />;
  if (n.includes('park') || n.includes('car')) return <Car className="w-5 h-5 text-gray-800 dark:text-zinc-200" />;
  if (n.includes('pool')) return <Waves className="w-5 h-5 text-gray-800 dark:text-zinc-200" />;
  if (n.includes('kitchen') || n.includes('cook') || n.includes('dish')) return <Utensils className="w-5 h-5 text-gray-800 dark:text-zinc-200" />;
  if (n.includes('air') || n.includes('hair')) return <Wind className="w-5 h-5 text-gray-800 dark:text-zinc-200" />;
  if (n.includes('pet') || n.includes('dog')) return <Dog className="w-5 h-5 text-gray-800 dark:text-zinc-200" />;
  if (n.includes('work') || n.includes('desk')) return <Monitor className="w-5 h-5 text-gray-800 dark:text-zinc-200" />;
  if (n.includes('tv')) return <Tv className="w-5 h-5 text-gray-800 dark:text-zinc-200" />;
  if (n.includes('wash') || n.includes('dry')) return <Disc className="w-5 h-5 text-gray-800 dark:text-zinc-200" />;
  if (n.includes('patio') || n.includes('balcony')) return <Sun className="w-5 h-5 text-gray-800 dark:text-zinc-200" />;
  if (n.includes('tub') || n.includes('bath')) return <Bath className="w-5 h-5 text-gray-800 dark:text-zinc-200" />;
  if (n.includes('fire') || n.includes('bbq') || n.includes('toaster') || n.includes('hot water')) return <Flame className="w-5 h-5 text-gray-800 dark:text-zinc-200" />;
  if (n.includes('shade') || n.includes('dark')) return <Moon className="w-5 h-5 text-gray-800 dark:text-zinc-200" />;
  if (n.includes('bed') || n.includes('pillow')) return <Bed className="w-5 h-5 text-gray-800 dark:text-zinc-200" />;
  if (n.includes('iron') || n.includes('shirt')) return <Shirt className="w-5 h-5 text-gray-800 dark:text-zinc-200" />;
  if (n.includes('coffee')) return <Coffee className="w-5 h-5 text-gray-800 dark:text-zinc-200" />;
  if (n.includes('wine')) return <Wine className="w-5 h-5 text-gray-800 dark:text-zinc-200" />;
  if (n.includes('garden') || n.includes('tree')) return <Trees className="w-5 h-5 text-gray-800 dark:text-zinc-200" />;
  if (n.includes('alarm') || n.includes('camera') || n.includes('shield')) return <ShieldCheck className="w-5 h-5 text-gray-800 dark:text-zinc-200" />;
  if (n.includes('key') || n.includes('lock')) return <Key className="w-5 h-5 text-gray-800 dark:text-zinc-200" />;
  if (n.includes('ev') || n.includes('charger')) return <Zap className="w-5 h-5 text-gray-800 dark:text-zinc-200" />;
  return <CheckCircle2 className="w-5 h-5 text-rose-500" />;
};

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
  const [isAmenitiesModalOpen, setIsAmenitiesModalOpen] = useState(false);

  useEffect(() => {
    if (!listingId) return;
    setIsLoading(true);

    api
      .get<ListingDetailType>(`/listings/${listingId}`)
      .then((data) => setListing(data))
      .catch((err) => {
        console.error('Listing fetch failed:', err);
        showToast('Listing not found', 'error');
        router.push('/');
      })
      .finally(() => setIsLoading(false));
  }, [listingId]);

  const handleWishlistToggle = () => {
    if (!user) {
      showToast('Please sign in to save stays to your wishlist', 'error');
      return;
    }
    setIsWishlisted((prev) => !prev);
    showToast(isWishlisted ? 'Removed from wishlist' : 'Saved to wishlist!', 'success');
  };

  if (isLoading || !listing) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 max-w-7xl mx-auto px-4 py-8 w-full">
          <SkeletonDetail />
        </main>
        <Footer />
      </div>
    );
  }

  const featuredAmenities = listing.amenities.slice(0, 10);

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-zinc-900 text-black dark:text-white">
      <Navbar />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        {/* Title Header */}
        <div className="mb-6">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-black dark:text-white tracking-tight">
            {listing.title}
          </h1>

          <div className="flex flex-wrap items-center justify-between gap-4 mt-2 text-sm text-gray-800 dark:text-zinc-200">
            <div className="flex items-center gap-2 flex-wrap font-semibold">
              <Star className="w-4 h-4 fill-rose-500 text-rose-500" />
              <span className="font-extrabold text-black dark:text-white">{listing.avg_rating.toFixed(2)}</span>
              <span className="underline font-bold">{listing.review_count} reviews</span>
              <span>·</span>
              {listing.host.is_superhost && (
                <>
                  <span className="text-rose-500 font-bold flex items-center gap-1">
                    <Award className="w-4 h-4" /> Superhost
                  </span>
                  <span>·</span>
                </>
              )}
              <span className="font-semibold">{listing.city}, {listing.country}</span>
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  showToast('Link copied to clipboard!', 'success');
                }}
                className="flex items-center gap-1.5 text-sm font-bold underline hover:text-rose-500 cursor-pointer"
              >
                <Share2 className="w-4 h-4" /> Share
              </button>

              <button
                onClick={handleWishlistToggle}
                className="flex items-center gap-1.5 text-sm font-bold underline hover:text-rose-500 cursor-pointer"
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
            <div className="flex items-center justify-between pb-6 border-b border-gray-200 dark:border-zinc-800">
              <div>
                <h2 className="text-xl font-bold">
                  {listing.property_type} hosted by {listing.host.name}
                </h2>
                <p className="text-sm font-semibold text-gray-600 dark:text-zinc-400 mt-1">
                  {listing.max_guests} guests · {listing.bedrooms} bedrooms · {listing.beds} beds · {listing.bathrooms} baths
                </p>
              </div>

              <div className="w-14 h-14 rounded-full bg-gray-700 text-white font-bold flex items-center justify-center overflow-hidden text-xl shadow-md flex-shrink-0">
                {listing.host.avatar_url ? (
                  <img src={listing.host.avatar_url} alt={listing.host.name} className="w-full h-full object-cover" />
                ) : (
                  listing.host.name.charAt(0).toUpperCase()
                )}
              </div>
            </div>

            {/* Feature Highlights */}
            <div className="space-y-4 pb-6 border-b border-gray-200 dark:border-zinc-800 text-sm">
              {listing.host.is_superhost && (
                <div className="flex gap-4 items-start">
                  <Award className="w-6 h-6 text-rose-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold">{listing.host.name} is a Superhost</h4>
                    <p className="text-gray-600 dark:text-zinc-400 text-xs mt-0.5">Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.</p>
                  </div>
                </div>
              )}

              <div className="flex gap-4 items-start">
                <Sparkles className="w-6 h-6 text-rose-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold">Great location</h4>
                  <p className="text-gray-600 dark:text-zinc-400 text-xs mt-0.5">95% of recent guests gave the location a 5-star rating.</p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="pb-6 border-b border-gray-200 dark:border-zinc-800">
              <h3 className="text-xl font-bold mb-3">About this space</h3>
              <p className="text-sm font-medium leading-relaxed whitespace-pre-line text-gray-800 dark:text-zinc-200">
                {listing.description}
              </p>
            </div>

            {/* Host Contact & Short Details Card */}
            <div className="p-5 rounded-2xl bg-gray-50 dark:bg-zinc-800/60 border border-gray-200 dark:border-zinc-700/60 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-rose-500 text-white font-bold flex items-center justify-center text-lg overflow-hidden flex-shrink-0 shadow-xs">
                    {listing.host.avatar_url ? (
                      <img src={listing.host.avatar_url} alt={listing.host.name} className="w-full h-full object-cover" />
                    ) : (
                      listing.host.name.charAt(0).toUpperCase()
                    )}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-extrabold text-base text-gray-900 dark:text-white">{listing.host.name}</h4>
                      {listing.host.is_superhost && (
                        <span className="bg-rose-100 text-rose-700 dark:bg-rose-950/60 dark:text-rose-300 text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                          <Award className="w-3 h-3" /> Superhost
                        </span>
                      )}
                    </div>
                    <p className="text-xs font-semibold text-gray-500 dark:text-zinc-400">
                      Host since {new Date(listing.host.created_at).getFullYear()}
                    </p>
                  </div>
                </div>
              </div>

              {listing.host.bio && (
                <p className="text-xs font-medium text-gray-600 dark:text-zinc-300 italic border-l-2 border-rose-500 pl-3">
                  "{listing.host.bio}"
                </p>
              )}

              {/* Host Contact Details Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                <div className="flex items-center gap-2 text-xs font-bold text-gray-800 dark:text-zinc-200 bg-white dark:bg-zinc-900 p-2.5 rounded-xl border border-gray-200 dark:border-zinc-700">
                  <Mail className="w-4 h-4 text-rose-500 flex-shrink-0" />
                  <span className="truncate">{listing.host.email || 'host@demo.com'}</span>
                </div>

                <div className="flex items-center gap-2 text-xs font-bold text-gray-800 dark:text-zinc-200 bg-white dark:bg-zinc-900 p-2.5 rounded-xl border border-gray-200 dark:border-zinc-700">
                  <Phone className="w-4 h-4 text-rose-500 flex-shrink-0" />
                  <span>{listing.host.phone || '+1 (555) 234-5678'}</span>
                </div>

                <div className="flex items-center gap-2 text-xs font-bold text-gray-800 dark:text-zinc-200 bg-white dark:bg-zinc-900 p-2.5 rounded-xl border border-gray-200 dark:border-zinc-700">
                  <Clock className="w-4 h-4 text-rose-500 flex-shrink-0" />
                  <span>Responds within an hour</span>
                </div>

                <div className="flex items-center gap-2 text-xs font-bold text-gray-800 dark:text-zinc-200 bg-white dark:bg-zinc-900 p-2.5 rounded-xl border border-gray-200 dark:border-zinc-700">
                  <MessageSquare className="w-4 h-4 text-rose-500 flex-shrink-0" />
                  <span>100% Response Rate</span>
                </div>
              </div>
            </div>

            {/* Amenities Grid (Matching Screenshot) */}
            <div className="pb-6 border-b border-gray-200 dark:border-zinc-800">
              <h3 className="text-xl font-bold mb-4">What this place offers</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {featuredAmenities.map((amenity) => (
                  <div key={amenity.id} className="flex items-center gap-3 text-sm font-bold text-gray-900 dark:text-white">
                    {getAmenityIcon(amenity.name)}
                    <span>{amenity.name}</span>
                  </div>
                ))}
              </div>

              {/* Show All Amenities Button Matching User Screenshot */}
              <button
                onClick={() => setIsAmenitiesModalOpen(true)}
                className="mt-6 px-6 py-3 border-2 border-gray-900 dark:border-zinc-500 rounded-xl font-extrabold text-sm hover:border-rose-500 hover:text-rose-500 transition-all cursor-pointer shadow-xs"
              >
                Show all {listing.amenities.length} amenities
              </button>
            </div>

            {/* Date Range Calendar */}
            <div className="pb-6 border-b border-gray-200 dark:border-zinc-800">
              <h3 className="text-xl font-bold mb-1">Select check-in date</h3>
              <p className="text-xs font-semibold text-gray-500 dark:text-zinc-400 mb-6">Add your travel dates for exact pricing</p>
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
              listingId={listing.id}
              onReviewAdded={() => {
                api
                  .get<ListingDetailType>(`/listings/${listingId}`)
                  .then(setListing)
                  .catch(console.error);
              }}
            />

          </div>

          {/* Right Column: Sticky Booking Widget */}
          <div className="lg:col-span-1">
            <div className="sticky top-28">
              <BookingWidget
                listing={listing}
                checkIn={checkIn}
                checkOut={checkOut}
                onDateChange={(inDate, outDate) => {
                  setCheckIn(inDate);
                  setCheckOut(outDate);
                }}
              />
            </div>
          </div>

        </div>
      </main>

      {/* Full 30+ Amenities Modal */}
      <Modal
        isOpen={isAmenitiesModalOpen}
        onClose={() => setIsAmenitiesModalOpen(false)}
        title="What this place offers"
      >
        <div className="space-y-6 max-h-[70vh] overflow-y-auto pr-2">
          <p className="text-xs text-gray-500 dark:text-zinc-400 font-semibold mb-4">
            This stay includes {listing.amenities.length} verified amenities & features
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {listing.amenities.map((amenity) => (
              <div
                key={amenity.id}
                className="flex items-center gap-3.5 p-3 rounded-xl border border-gray-200 dark:border-zinc-800 hover:border-gray-900 transition-colors"
              >
                {getAmenityIcon(amenity.name)}
                <span className="text-sm font-extrabold text-gray-900 dark:text-white">{amenity.name}</span>
              </div>
            ))}
          </div>
        </div>
      </Modal>

      <Footer />
    </div>
  );
}
