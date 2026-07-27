'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Heart, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { ListingCard as ListingCardType } from '../lib/types';
import { api } from '../lib/api';
import { useAuth } from '../contexts/AuthContext';
import { useToast } from '../contexts/ToastContext';
import { useCurrency } from '../contexts/CurrencyContext';

interface ListingCardProps {
  listing: ListingCardType;
}

export function ListingCard({ listing }: ListingCardProps) {
  const { user } = useAuth();
  const { showToast } = useToast();
  const { formatPrice } = useCurrency();

  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(listing.is_wishlisted);

  const images = listing.images.length > 0
    ? listing.images
    : [{ id: 0, url: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800', position: 0 }];

  const handleNextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleWishlistToggle = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (!user) {
      showToast('Please log in to save listings to your wishlist', 'info');
      return;
    }

    // Optimistic UI toggle
    const prev = isWishlisted;
    setIsWishlisted(!prev);

    try {
      const res = await api.post<{ wishlisted: boolean }>('/wishlist/toggle', {
        listing_id: listing.id,
      });
      setIsWishlisted(res.wishlisted);
      showToast(
        res.wishlisted ? 'Saved to Wishlist' : 'Removed from Wishlist',
        'success'
      );
    } catch (err: any) {
      setIsWishlisted(prev); // Revert on failure
      showToast(err.message || 'Failed to update wishlist', 'error');
    }
  };

  return (
    <Link href={`/listing/${listing.id}`} className="group flex flex-col gap-2.5 cursor-pointer">
      
      {/* Image Container with Hover Carousel */}
      <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-gray-100 dark:bg-zinc-800">
        
        {/* Photos */}
        <img
          src={images[currentImgIndex]?.url || images[0].url}
          alt={listing.title}
          onError={(e) => {
            e.currentTarget.src = 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800';
          }}
          className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300 ease-out"
        />

        {/* Wishlist Heart Button */}
        <button
          onClick={handleWishlistToggle}
          className="absolute top-3 right-3 p-2 rounded-full hover:scale-110 active:scale-95 transition-transform z-10"
        >
          <Heart
            className={`w-6 h-6 stroke-[2] drop-shadow-md transition-colors ${
              isWishlisted
                ? 'fill-rose-500 stroke-rose-500'
                : 'fill-black/30 stroke-white'
            }`}
          />
        </button>

        {/* Property Type Badge */}
        <span className="absolute top-3 left-3 bg-black/60 backdrop-blur-xs text-white text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full">
          {listing.property_type}
        </span>

        {/* Carousel Navigation Arrows (Visible on hover if >1 image) */}
        {images.length > 1 && (
          <>
            <button
              onClick={handlePrevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white/90 text-gray-900 flex items-center justify-center opacity-0 group-hover:opacity-100 hover:bg-white transition-opacity shadow-md"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white/90 text-gray-900 flex items-center justify-center opacity-0 group-hover:opacity-100 hover:bg-white transition-opacity shadow-md"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            {/* Pagination Dots */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10">
              {images.map((_, idx) => (
                <div
                  key={idx}
                  className={`w-1.5 h-1.5 rounded-full transition-all ${
                    idx === currentImgIndex
                      ? 'bg-white w-2.5'
                      : 'bg-white/60'
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Info Section - High Contrast Crisp Black Text */}
      <div className="flex flex-col gap-0.5">
        <div className="flex items-center justify-between font-bold text-black text-sm">
          <span className="truncate text-black">{listing.city}, {listing.country}</span>
          <div className="flex items-center gap-1 flex-shrink-0 text-sm font-bold text-black">
            <Star className="w-3.5 h-3.5 fill-black text-black" />
            <span>{listing.avg_rating ? listing.avg_rating.toFixed(2) : 'New'}</span>
          </div>
        </div>

        <p className="text-gray-800 text-sm truncate font-medium">{listing.title}</p>

        <div className="mt-1 flex items-baseline gap-1">
          <span className="font-bold text-black text-base">
            {formatPrice(listing.price_per_night)}
          </span>
          <span className="text-black font-semibold text-sm">night</span>
        </div>
      </div>

    </Link>
  );
}
