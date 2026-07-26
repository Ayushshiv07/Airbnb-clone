'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Navbar } from '../../../components/Navbar';
import { FilterRow } from '../../../components/FilterRow';
import { Footer } from '../../../components/Footer';
import { EmptyState } from '../../../components/EmptyState';
import { HostListing, Booking } from '../../../lib/types';
import { formatCurrency, formatDate } from '../../../lib/utils';
import { api, ApiError } from '../../../lib/api';
import { useAuth } from '../../../contexts/AuthContext';
import { useToast } from '../../../contexts/ToastContext';
import { Home, Plus, Edit, Trash2, Calendar, Users, Eye } from 'lucide-react';

export default function HostDashboardPage() {
  const router = useRouter();
  const { user, isHost, isLoading: isAuthLoading, login } = useAuth();
  const { showToast } = useToast();

  const [hostListings, setHostListings] = useState<HostListing[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedListingBookings, setSelectedListingBookings] = useState<{ id: number; bookings: Booking[] } | null>(null);

  const fetchHostListings = () => {
    setIsLoading(true);
    api
      .get<HostListing[]>('/listings/host/mine')
      .then(setHostListings)
      .catch((err) => {
        showToast(err.message || 'Failed to load host listings', 'error');
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    if (!isAuthLoading) {
      if (!user || !user.is_host) {
        login('host1@demo.com', 'password123')
          .then(() => fetchHostListings())
          .catch(() => {
            showToast('Host access required', 'error');
            router.push('/login');
          });
      } else {
        fetchHostListings();
      }
    }
  }, [user, isAuthLoading, login, router, showToast]);

  const handleDeleteListing = async (listingId: number, title: string) => {
    if (!confirm(`Are you sure you want to delete "${title}"?`)) return;

    try {
      await api.delete(`/listings/${listingId}`);
      showToast('Listing deleted successfully', 'success');
      fetchHostListings();
    } catch (err: any) {
      if (err instanceof ApiError && err.status === 409) {
        showToast(err.message || 'Cannot delete listing with upcoming confirmed bookings.', 'error');
      } else {
        showToast(err.message || 'Failed to delete listing', 'error');
      }
    }
  };

  const handleViewBookings = async (listingId: number) => {
    if (selectedListingBookings?.id === listingId) {
      setSelectedListingBookings(null);
      return;
    }

    try {
      const bookings = await api.get<Booking[]>(`/bookings/host/${listingId}`);
      setSelectedListingBookings({ id: listingId, bookings });
    } catch (err: any) {
      showToast(err.message || 'Failed to load bookings', 'error');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <FilterRow />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-1 w-full text-black">
        
        {/* Header Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-extrabold text-black">Host Dashboard</h1>
            <p className="text-sm font-semibold text-gray-700 mt-1">
              Manage your properties, pricing, and guest reservations
            </p>
          </div>

          <Link
            href="/host/listings/new"
            className="bg-rose-500 hover:bg-rose-600 text-white font-extrabold px-5 py-3 rounded-xl flex items-center gap-2 transition-all shadow-md cursor-pointer"
          >
            <Plus className="w-5 h-5 stroke-[3]" />
            <span>Create new listing</span>
          </Link>
        </div>

        {/* Listings List */}
        {isLoading ? (
          <div className="space-y-4">
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="h-32 bg-gray-100 rounded-2xl animate-pulse" />
            ))}
          </div>
        ) : hostListings.length === 0 ? (
          <EmptyState
            icon={<Home className="w-8 h-8 text-rose-500" />}
            title="You don't have any listings yet"
            description="Start hosting travelers by creating your first property listing."
            actionText="Create a listing"
            actionHref="/host/listings/new"
          />
        ) : (
          <div className="space-y-6">
            {hostListings.map((l) => (
              <div
                key={l.id}
                className="bg-white border-2 border-gray-300 rounded-2xl p-6 shadow-xs hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  
                  {/* Thumbnail & Title */}
                  <div className="flex items-center gap-4">
                    <img
                      src={l.images[0]?.url || 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800'}
                      alt={l.title}
                      onError={(e) => {
                        e.currentTarget.src = 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800';
                      }}
                      className="w-20 h-20 rounded-xl object-cover border border-gray-300"
                    />
                    <div>
                      <span className="text-[10px] uppercase font-extrabold text-rose-600">{l.property_type}</span>
                      <h3 className="font-extrabold text-base text-black line-clamp-1">{l.title}</h3>
                      <p className="text-xs font-semibold text-gray-700">{l.city}, {l.country}</p>
                      <div className="flex items-center gap-4 mt-2 text-xs font-bold text-black">
                        <span>{formatCurrency(l.price_per_night)}/night</span>
                        <span>·</span>
                        <span className="text-rose-600 font-extrabold">{l.booking_count} active bookings</span>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 self-end sm:self-center">
                    <Link
                      href={`/listing/${l.id}`}
                      className="p-2.5 rounded-xl border-2 border-gray-900 text-black hover:bg-black hover:text-white transition-colors"
                      title="View listing"
                    >
                      <Eye className="w-4 h-4" />
                    </Link>

                    <button
                      onClick={() => handleViewBookings(l.id)}
                      className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl border-2 border-gray-900 text-xs font-extrabold text-black hover:bg-black hover:text-white transition-colors cursor-pointer"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Bookings ({l.booking_count})</span>
                    </button>

                    <Link
                      href={`/host/listings/${l.id}/edit`}
                      className="p-2.5 rounded-xl border-2 border-gray-900 text-black hover:bg-black hover:text-white transition-colors"
                      title="Edit listing"
                    >
                      <Edit className="w-4 h-4" />
                    </Link>

                    <button
                      onClick={() => handleDeleteListing(l.id, l.title)}
                      className="p-2.5 rounded-xl border-2 border-rose-600 text-rose-600 hover:bg-rose-600 hover:text-white transition-colors cursor-pointer"
                      title="Delete listing"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                </div>

                {/* Expanded Host Bookings Sub-View */}
                {selectedListingBookings?.id === l.id && (
                  <div className="mt-6 pt-6 border-t-2 border-gray-200 space-y-3">
                    <h4 className="font-extrabold text-sm text-black">Reservations for this property</h4>

                    {selectedListingBookings.bookings.length === 0 ? (
                      <p className="text-xs font-bold text-gray-700">No reservations found for this property.</p>
                    ) : (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {selectedListingBookings.bookings.map((b) => (
                          <div key={b.id} className="p-3.5 bg-gray-50 rounded-xl border border-gray-300 text-xs space-y-1.5">
                            <div className="flex justify-between font-extrabold text-black">
                              <span>{b.guest.name}</span>
                              <span className="text-rose-600 font-extrabold">{formatCurrency(b.total_price)}</span>
                            </div>
                            <p className="text-black font-semibold">
                              {formatDate(b.check_in)} - {formatDate(b.check_out)} ({b.nights} nights, {b.guests_count} guests)
                            </p>
                            <span className="inline-block uppercase text-[9px] font-extrabold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-900 border border-emerald-300">
                              {b.status}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}

              </div>
            ))}
          </div>
        )}

      </main>

      <Footer />
    </div>
  );
}
