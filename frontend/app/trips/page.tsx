'use client';

import React, { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { EmptyState } from '../../components/EmptyState';
import { ReviewForm } from '../../components/ReviewsSection';
import { Booking } from '../../lib/types';
import { formatCurrency, formatDate } from '../../lib/utils';
import { api } from '../../lib/api';
import { useAuth } from '../../contexts/AuthContext';
import { useToast } from '../../contexts/ToastContext';
import { Compass, Calendar, MapPin, XCircle, CheckCircle, MessageSquare } from 'lucide-react';

function TripsContent() {
  const router = useRouter();
  const { user, isLoading: isAuthLoading } = useAuth();
  const { showToast } = useToast();

  const [bookings, setBookings] = useState<Booking[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');
  const [reviewingBookingId, setReviewingBookingId] = useState<number | null>(null);

  const fetchBookings = () => {
    setIsLoading(true);
    api
      .get<Booking[]>('/bookings/mine')
      .then(setBookings)
      .catch((err) => console.error(err))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    if (!isAuthLoading && !user) {
      router.push('/login');
      return;
    }
    if (user) {
      fetchBookings();
    }
  }, [user, isAuthLoading, router]);

  const handleCancelBooking = async (bookingId: number) => {
    if (!confirm('Are you sure you want to cancel this booking?')) return;

    try {
      await api.post(`/bookings/${bookingId}/cancel`);
      showToast('Booking cancelled successfully', 'success');
      fetchBookings();
    } catch (err: any) {
      showToast(err.message || 'Failed to cancel booking', 'error');
    }
  };

  const todayStr = new Date().toISOString().split('T')[0];

  const upcomingBookings = bookings.filter(
    (b) => b.check_out >= todayStr && b.status === 'confirmed'
  );

  const pastBookings = bookings.filter(
    (b) => b.check_out < todayStr || b.status !== 'confirmed'
  );

  const displayedBookings = activeTab === 'upcoming' ? upcomingBookings : pastBookings;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-1 w-full">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">My Trips</h1>

        {/* Tab switcher */}
        <div className="flex items-center gap-4 border-b border-gray-200 dark:border-zinc-800 mb-8">
          <button
            onClick={() => setActiveTab('upcoming')}
            className={`pb-3 font-semibold text-sm transition-colors border-b-2 cursor-pointer ${
              activeTab === 'upcoming'
                ? 'border-gray-900 dark:border-white text-gray-900 dark:text-white'
                : 'border-transparent text-gray-500 hover:text-gray-900 dark:hover:text-zinc-200'
            }`}
          >
            Upcoming stays ({upcomingBookings.length})
          </button>

          <button
            onClick={() => setActiveTab('past')}
            className={`pb-3 font-semibold text-sm transition-colors border-b-2 cursor-pointer ${
              activeTab === 'past'
                ? 'border-gray-900 dark:border-white text-gray-900 dark:text-white'
                : 'border-transparent text-gray-500 hover:text-gray-900 dark:hover:text-zinc-200'
            }`}
          >
            Past & cancelled stays ({pastBookings.length})
          </button>
        </div>

        {/* Bookings List */}
        {isLoading ? (
          <div className="space-y-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="h-40 bg-gray-100 dark:bg-zinc-800 rounded-2xl animate-pulse" />
            ))}
          </div>
        ) : displayedBookings.length === 0 ? (
          <EmptyState
            icon={<Compass className="w-8 h-8" />}
            title={activeTab === 'upcoming' ? 'No trips booked... yet!' : 'No past trips found'}
            description="Time to dust off your bags and start planning your next adventure."
            actionText="Start searching"
            actionHref="/"
          />
        ) : (
          <div className="space-y-6">
            {displayedBookings.map((b) => (
              <div
                key={b.id}
                className="flex flex-col md:flex-row gap-6 p-6 rounded-2xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xs hover:shadow-md transition-shadow"
              >
                {/* Thumbnail */}
                <Link
                  href={`/listing/${b.listing.id}`}
                  className="w-full md:w-64 h-48 rounded-xl overflow-hidden flex-shrink-0 bg-gray-100 dark:bg-zinc-800"
                >
                  <img
                    src={b.listing.images[0]?.url || 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800'}
                    alt={b.listing.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                </Link>

                {/* Details */}
                <div className="flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs uppercase font-bold text-rose-500">{b.listing.property_type}</span>
                      <span
                        className={`text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${
                          b.status === 'confirmed'
                            ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300'
                            : b.status === 'completed'
                            ? 'bg-blue-100 text-blue-800 dark:bg-blue-950/60 dark:text-blue-300'
                            : 'bg-rose-100 text-rose-800 dark:bg-rose-950/60 dark:text-rose-300'
                        }`}
                      >
                        {b.status}
                      </span>
                    </div>

                    <Link href={`/listing/${b.listing.id}`}>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white mt-1 hover:underline">
                        {b.listing.title}
                      </h3>
                    </Link>

                    <p className="text-xs text-gray-500 dark:text-zinc-400 flex items-center gap-1 mt-1">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{b.listing.city}, {b.listing.country}</span>
                    </p>
                  </div>

                  {/* Stay metadata */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs bg-gray-50 dark:bg-zinc-800/50 p-3 rounded-xl">
                    <div>
                      <span className="text-gray-400 block font-bold uppercase">Dates</span>
                      <span className="font-medium text-gray-900 dark:text-white">
                        {formatDate(b.check_in)} - {formatDate(b.check_out)}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-400 block font-bold uppercase">Nights & Guests</span>
                      <span className="font-medium text-gray-900 dark:text-white">
                        {b.nights} {b.nights === 1 ? 'night' : 'nights'}, {b.guests_count} {b.guests_count === 1 ? 'guest' : 'guests'}
                      </span>
                    </div>
                    <div>
                      <span className="text-gray-400 block font-bold uppercase">Total Price</span>
                      <span className="font-bold text-rose-500">{formatCurrency(b.total_price)}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-xs text-gray-400">Reservation #{b.id}</span>

                    <div className="flex items-center gap-3">
                      {activeTab === 'upcoming' && b.status === 'confirmed' && (
                        <button
                          onClick={() => handleCancelBooking(b.id)}
                          className="flex items-center gap-1 text-xs font-semibold text-rose-600 dark:text-rose-400 hover:underline cursor-pointer"
                        >
                          <XCircle className="w-4 h-4" /> Cancel Booking
                        </button>
                      )}

                      {activeTab === 'past' && !b.has_review && b.status === 'completed' && (
                        <button
                          onClick={() => setReviewingBookingId(reviewingBookingId === b.id ? null : b.id)}
                          className="flex items-center gap-1 text-xs font-semibold text-rose-500 hover:underline cursor-pointer"
                        >
                          <MessageSquare className="w-4 h-4" />
                          {reviewingBookingId === b.id ? 'Close' : 'Leave a review'}
                        </button>
                      )}

                      {b.has_review && (
                        <span className="text-xs text-emerald-600 font-semibold flex items-center gap-1">
                          <CheckCircle className="w-4 h-4" /> Review Submitted
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Review inline form */}
                  {reviewingBookingId === b.id && (
                    <ReviewForm
                      bookingId={b.id}
                      onSuccess={() => {
                        setReviewingBookingId(null);
                        fetchBookings();
                      }}
                    />
                  )}

                </div>
              </div>
            ))}
          </div>
        )}

      </main>
      <Footer />
    </div>
  );
}

export default function TripsPage() {
  return (
    <Suspense fallback={<div className="p-8"><div className="h-64 bg-gray-100 dark:bg-zinc-800 rounded-2xl animate-pulse" /></div>}>
      <TripsContent />
    </Suspense>
  );
}
