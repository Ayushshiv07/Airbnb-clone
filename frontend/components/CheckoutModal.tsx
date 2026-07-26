'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Modal } from './Modal';
import { ListingDetail, Booking } from '../lib/types';
import { formatCurrency, formatDate } from '../lib/utils';
import { api, ApiError } from '../lib/api';
import { useToast } from '../contexts/ToastContext';
import { CheckCircle2, ShieldCheck, CreditCard } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  listing: ListingDetail;
  checkIn: string;
  checkOut: string;
  guestsCount: number;
  nightlyRate: number;
  nights: number;
  cleaningFee: number;
  serviceFee: number;
  totalPrice: number;
}

export function CheckoutModal({
  isOpen,
  onClose,
  listing,
  checkIn,
  checkOut,
  guestsCount,
  nightlyRate,
  nights,
  cleaningFee,
  serviceFee,
  totalPrice,
}: CheckoutModalProps) {
  const router = useRouter();
  const { showToast } = useToast();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmedBooking, setConfirmedBooking] = useState<Booking | null>(null);

  const handleConfirmBooking = async () => {
    setIsSubmitting(true);
    try {
      const res = await api.post<Booking>('/bookings/', {
        listing_id: listing.id,
        check_in: checkIn,
        check_out: checkOut,
        guests_count: guestsCount,
      });

      setConfirmedBooking(res);
      showToast('Booking confirmed successfully!', 'success');
    } catch (err: any) {
      if (err instanceof ApiError && err.status === 409) {
        showToast('These dates are no longer available for this property.', 'error');
      } else {
        showToast(err.message || 'Failed to create booking', 'error');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleModalClose = () => {
    if (confirmedBooking) {
      setConfirmedBooking(null);
      onClose();
      router.push('/trips');
    } else {
      onClose();
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleModalClose}
      title={confirmedBooking ? 'Booking Confirmed!' : 'Confirm and Pay'}
      maxWidth="max-w-xl"
    >
      {confirmedBooking ? (
        /* Success State */
        <div className="flex flex-col items-center text-center py-6 space-y-4">
          <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center animate-bounce">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            You're going to {listing.city}!
          </h3>
          <p className="text-sm text-gray-500 dark:text-zinc-400 max-w-sm">
            Your reservation for <strong>{listing.title}</strong> is confirmed.
          </p>

          <div className="w-full bg-gray-50 dark:bg-zinc-800/60 rounded-2xl p-4 text-left text-xs space-y-2 border border-gray-200 dark:border-zinc-700 my-4">
            <div className="flex justify-between">
              <span className="text-gray-500">Booking Reference:</span>
              <span className="font-mono font-bold text-gray-900 dark:text-white">#BK-{confirmedBooking.id}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Dates:</span>
              <span className="font-semibold text-gray-900 dark:text-white">
                {formatDate(checkIn)} - {formatDate(checkOut)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500">Total Paid:</span>
              <span className="font-bold text-rose-500 text-sm">{formatCurrency(totalPrice)}</span>
            </div>
          </div>

          <button
            onClick={handleModalClose}
            className="w-full bg-rose-500 hover:bg-rose-600 text-white font-semibold py-3.5 rounded-xl transition-all shadow-md"
          >
            View My Trips
          </button>
        </div>
      ) : (
        /* Summary & Mocked Checkout Form */
        <div className="space-y-6">
          
          {/* Listing Thumbnail & Title */}
          <div className="flex gap-4 p-3 bg-gray-50 dark:bg-zinc-800/50 rounded-2xl border border-gray-200 dark:border-zinc-800">
            <img
              src={listing.images[0]?.url || 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800'}
              alt={listing.title}
              className="w-20 h-20 rounded-xl object-cover"
            />
            <div className="flex flex-col justify-center">
              <span className="text-xs uppercase font-bold text-rose-500">{listing.property_type}</span>
              <h4 className="font-semibold text-sm text-gray-900 dark:text-white line-clamp-1">{listing.title}</h4>
              <p className="text-xs text-gray-500">{listing.city}, {listing.country}</p>
            </div>
          </div>

          {/* Trip Details */}
          <div className="space-y-3">
            <h4 className="font-semibold text-sm text-gray-900 dark:text-white">Your trip details</h4>
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="p-3 border border-gray-200 dark:border-zinc-800 rounded-xl">
                <span className="block text-gray-400 uppercase font-bold">Dates</span>
                <span className="font-semibold text-gray-900 dark:text-white mt-1 block">
                  {formatDate(checkIn)} - {formatDate(checkOut)} ({nights} nights)
                </span>
              </div>
              <div className="p-3 border border-gray-200 dark:border-zinc-800 rounded-xl">
                <span className="block text-gray-400 uppercase font-bold">Guests</span>
                <span className="font-semibold text-gray-900 dark:text-white mt-1 block">
                  {guestsCount} {guestsCount === 1 ? 'guest' : 'guests'}
                </span>
              </div>
            </div>
          </div>

          {/* Price Breakdown */}
          <div className="space-y-2 text-xs border-t border-gray-200 dark:border-zinc-800 pt-4">
            <h4 className="font-semibold text-sm text-gray-900 dark:text-white mb-2">Price details</h4>
            <div className="flex justify-between text-gray-600 dark:text-zinc-400">
              <span>{formatCurrency(nightlyRate)} × {nights} nights</span>
              <span>{formatCurrency(nightlyRate * nights)}</span>
            </div>
            {cleaningFee > 0 && (
              <div className="flex justify-between text-gray-600 dark:text-zinc-400">
                <span>Cleaning fee</span>
                <span>{formatCurrency(cleaningFee)}</span>
              </div>
            )}
            <div className="flex justify-between text-gray-600 dark:text-zinc-400">
              <span>Airbnb service fee</span>
              <span>{formatCurrency(serviceFee)}</span>
            </div>
            <div className="flex justify-between font-bold text-sm text-gray-900 dark:text-white pt-2 border-t border-gray-200 dark:border-zinc-800">
              <span>Total (USD)</span>
              <span className="text-rose-500">{formatCurrency(totalPrice)}</span>
            </div>
          </div>

          {/* Mocked Payment Notice */}
          <div className="flex items-center gap-3 p-3 bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900 text-amber-800 dark:text-amber-300 rounded-xl text-xs">
            <CreditCard className="w-5 h-5 flex-shrink-0" />
            <span>Mock Checkout — No real credit card charge will be made.</span>
          </div>

          {/* Action Button */}
          <button
            onClick={handleConfirmBooking}
            disabled={isSubmitting}
            className="w-full bg-rose-500 hover:bg-rose-600 text-white font-semibold py-3.5 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
          >
            <ShieldCheck className="w-5 h-5" />
            <span>{isSubmitting ? 'Confirming...' : `Confirm & Pay ${formatCurrency(totalPrice)}`}</span>
          </button>

        </div>
      )}
    </Modal>
  );
}
