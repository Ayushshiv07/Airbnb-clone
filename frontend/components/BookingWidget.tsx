'use client';

import React, { useState } from 'react';
import { Star } from 'lucide-react';
import { ListingDetail } from '../lib/types';
import { calculateNights } from '../lib/utils';
import { CheckoutModal } from './CheckoutModal';
import { useAuth } from '../contexts/AuthContext';
import { useToast } from '../contexts/ToastContext';
import { useCurrency } from '../contexts/CurrencyContext';

interface BookingWidgetProps {
  listing: ListingDetail;
  checkIn: string;
  checkOut: string;
  onDatesChange: (checkIn: string, checkOut: string) => void;
}

export function BookingWidget({
  listing,
  checkIn,
  checkOut,
  onDatesChange,
}: BookingWidgetProps) {
  const { user } = useAuth();
  const { showToast } = useToast();
  const { formatPrice } = useCurrency();

  const [guestsCount, setGuestsCount] = useState(1);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const nights = calculateNights(checkIn, checkOut);
  const subtotal = listing.price_per_night * nights;
  const cleaningFee = listing.cleaning_fee;
  const serviceFee = Math.round(subtotal * listing.service_fee_pct);
  const totalPrice = subtotal + cleaningFee + serviceFee;

  const handleReserveClick = () => {
    if (!user) {
      showToast('Please log in to make a booking', 'info');
      return;
    }

    if (!checkIn || !checkOut) {
      showToast('Please select check-in and check-out dates', 'error');
      return;
    }

    if (nights <= 0) {
      showToast('Check-out date must be after check-in date', 'error');
      return;
    }

    setIsCheckoutOpen(true);
  };

  return (
    <>
      <div className="sticky top-28 bg-white border-2 border-gray-300 rounded-3xl p-6 shadow-xl text-black">
        
        {/* Header Price & Rating */}
        <div className="flex items-baseline justify-between mb-6">
          <div>
            <span className="text-2xl font-extrabold text-black">
              {formatPrice(listing.price_per_night)}
            </span>
            <span className="text-black font-semibold text-sm ml-1">night</span>
          </div>

          {listing.avg_rating && (
            <div className="flex items-center gap-1 text-sm font-bold text-black">
              <Star className="w-4 h-4 fill-black text-black" />
              <span>{listing.avg_rating.toFixed(2)}</span>
              <span className="text-gray-700 font-semibold">({listing.review_count})</span>
            </div>
          )}
        </div>

        {/* Date & Guest Input Box */}
        <div className="border-2 border-gray-400 rounded-2xl overflow-hidden mb-4 bg-gray-50">
          <div className="grid grid-cols-2 border-b-2 border-gray-400">
            <div className="p-3 border-r-2 border-gray-400">
              <label className="block text-[10px] font-extrabold uppercase tracking-wider text-black">
                Check-in
              </label>
              <input
                type="date"
                value={checkIn}
                onChange={(e) => onDatesChange(e.target.value, checkOut)}
                className="w-full bg-transparent text-xs font-bold text-black focus:outline-hidden mt-0.5"
              />
            </div>

            <div className="p-3">
              <label className="block text-[10px] font-extrabold uppercase tracking-wider text-black">
                Checkout
              </label>
              <input
                type="date"
                value={checkOut}
                onChange={(e) => onDatesChange(checkIn, e.target.value)}
                className="w-full bg-transparent text-xs font-bold text-black focus:outline-hidden mt-0.5"
              />
            </div>
          </div>

          <div className="p-3">
            <label className="block text-[10px] font-extrabold uppercase tracking-wider text-black">
              Guests
            </label>
            <div className="flex items-center justify-between mt-1">
              <span className="text-xs text-black font-bold">
                {guestsCount} {guestsCount === 1 ? 'guest' : 'guests'} (max {listing.max_guests})
              </span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setGuestsCount((g) => Math.max(1, g - 1))}
                  className="w-7 h-7 rounded-full border-2 border-gray-900 bg-white hover:bg-black hover:text-white flex items-center justify-center text-xs font-extrabold cursor-pointer transition-colors text-black"
                >
                  -
                </button>
                <button
                  type="button"
                  onClick={() => setGuestsCount((g) => Math.min(listing.max_guests, g + 1))}
                  className="w-7 h-7 rounded-full border-2 border-gray-900 bg-white hover:bg-black hover:text-white flex items-center justify-center text-xs font-extrabold cursor-pointer transition-colors text-black"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Reserve CTA */}
        <button
          onClick={handleReserveClick}
          className="w-full bg-rose-500 hover:bg-rose-600 text-white font-extrabold py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg text-base cursor-pointer"
        >
          {nights > 0 ? 'Reserve' : 'Check availability'}
        </button>

        <p className="text-center text-xs text-gray-800 font-bold mt-3">
          You won't be charged yet
        </p>

        {/* Price Breakdown */}
        {nights > 0 && (
          <div className="mt-6 space-y-3 pt-6 border-t-2 border-gray-300 text-sm font-semibold text-black">
            <div className="flex justify-between text-black">
              <span className="underline">
                {formatPrice(listing.price_per_night)} × {nights} {nights === 1 ? 'night' : 'nights'}
              </span>
              <span className="font-bold">{formatPrice(subtotal)}</span>
            </div>

            {cleaningFee > 0 && (
              <div className="flex justify-between text-black">
                <span className="underline">Cleaning fee</span>
                <span className="font-bold">{formatPrice(cleaningFee)}</span>
              </div>
            )}

            <div className="flex justify-between text-black">
              <span className="underline">StayScape service fee (12%)</span>
              <span className="font-bold">{formatPrice(serviceFee)}</span>
            </div>

            <div className="pt-4 border-t-2 border-gray-300 flex justify-between font-extrabold text-base text-black">
              <span>Total before taxes</span>
              <span className="text-rose-600 font-extrabold">{formatPrice(totalPrice)}</span>
            </div>
          </div>
        )}

      </div>

      {/* Checkout Confirmation Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        listing={listing}
        checkIn={checkIn}
        checkOut={checkOut}
        guestsCount={guestsCount}
        nightlyRate={listing.price_per_night}
        nights={nights}
        cleaningFee={cleaningFee}
        serviceFee={serviceFee}
        totalPrice={totalPrice}
      />
    </>
  );
}
