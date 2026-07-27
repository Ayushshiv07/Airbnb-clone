'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { useRouter, useSearchParams } from 'next/navigation';
import { ListingCard } from './ListingCard';
import { SkeletonCard } from './Skeleton';
import { EmptyState } from './EmptyState';
import { ListingCard as ListingCardType } from '../lib/types';
import { ChevronLeft, ChevronRight, SearchX, MapPin, Map, List, Sparkles } from 'lucide-react';

const ExploreMap = dynamic(() => import('./ExploreMap').then((mod) => mod.ExploreMap), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full min-h-[500px] bg-gray-100 dark:bg-zinc-800 rounded-3xl animate-pulse flex items-center justify-center text-xs text-gray-400 font-bold">
      Loading Interactive Map...
    </div>
  ),
});

interface ListingGridProps {
  listings: ListingCardType[];
  mapListings?: ListingCardType[];
  isLoading: boolean;
  total: number;
  page: number;
  pages: number;
}

const popularCities = ['New York', 'Paris', 'Tokyo', 'Barcelona', 'Bali', 'Delhi', 'Mumbai', 'Kolkata'];

export function ListingGrid({ listings, mapListings, isLoading, page, pages, total }: ListingGridProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isMapView, setIsMapView] = useState(true);

  const handlePageChange = (newPage: number) => {
    if (newPage < 1 || newPage > pages) return;
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', String(newPage));
    router.push(`/?${params.toString()}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const searchedLocation = searchParams.get('location');

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array.from({ length: 12 }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      </div>
    );
  }

  if (listings.length === 0) {
    return (
      <div className="py-12 max-w-xl mx-auto px-4 text-center">
        <EmptyState
          icon={<SearchX className="w-8 h-8 text-rose-500" />}
          title={searchedLocation ? `No stays found in "${searchedLocation}"` : 'No exact matches found'}
          description="Try changing or clearing your search filters to explore available stays across our featured cities."
          actionText="Clear all filters"
          onAction={() => router.push('/')}
        />

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-zinc-800">
          <p className="text-xs uppercase tracking-wider font-bold text-gray-800 dark:text-zinc-200 mb-3">
            Explore featured destinations:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {popularCities.map((city) => (
              <button
                key={city}
                onClick={() => router.push(`/?location=${encodeURIComponent(city)}`)}
                className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-gray-100 dark:bg-zinc-800 hover:bg-rose-500 hover:text-white dark:hover:bg-rose-500 text-gray-900 dark:text-white text-xs font-bold border border-gray-300 dark:border-zinc-700 transition-all cursor-pointer shadow-xs"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>{city}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  const activeMapItems = mapListings && mapListings.length > 0 ? mapListings : listings;

  return (
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      
      {/* Professional Pitch Banner Header */}
      <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-gray-200 dark:border-zinc-800 pb-4">
        <div>
          <h2 className="text-xl font-extrabold text-black dark:text-white tracking-tight flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-rose-500" />
            <span>Discover Handpicked Stays Across the World</span>
          </h2>
          <p className="text-xs font-semibold text-gray-600 dark:text-zinc-400 mt-0.5">
            Luxury beachfront villas, Himalayan chalets, heritage havelis & urban lofts across India, Europe, Asia & the Americas
          </p>
        </div>
        <span className="text-xs font-extrabold px-3.5 py-1.5 rounded-full bg-rose-50 text-rose-600 border border-rose-200 dark:bg-rose-950/40 dark:text-rose-400 dark:border-rose-900 flex-shrink-0">
          {total} Verified Stays Available
        </span>
      </div>

      {/* Floating View Switcher Toggle Button (Bottom Center) */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40">
        <button
          onClick={() => setIsMapView((prev) => !prev)}
          className="flex items-center gap-2 px-5 py-3 rounded-full bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-extrabold text-sm shadow-2xl hover:scale-105 active:scale-95 transition-all border-2 border-white dark:border-gray-900 cursor-pointer"
        >
          {isMapView ? (
            <>
              <span>Show list</span>
              <List className="w-4 h-4" />
            </>
          ) : (
            <>
              <span>Show map</span>
              <Map className="w-4 h-4" />
            </>
          )}
        </button>
      </div>

      {/* Grid vs Split-Screen Map View */}
      {isMapView ? (
        /* Split-Screen Layout: Cards on Left, Interactive Price Map on Right */
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* Cards Column */}
          <div className="w-full lg:w-3/5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-8">
              {listings.map((listing) => (
                <ListingCard key={listing.id} listing={listing} />
              ))}
            </div>
          </div>

          {/* Sticky Interactive Map Column */}
          <div className="w-full lg:w-2/5 sticky top-28 h-[calc(100vh-140px)] hidden lg:block">
            <ExploreMap listings={activeMapItems} />
          </div>

        </div>
      ) : (
        /* Full Grid Layout */
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
          {listings.map((listing) => (
            <ListingCard key={listing.id} listing={listing} />
          ))}
        </div>
      )}

      {/* Pagination Controls */}
      {pages > 1 && (
        <div className="flex items-center justify-center gap-4 mt-16 pt-8 border-t-2 border-gray-900">
          
          {/* Previous Button */}
          <button
            onClick={() => handlePageChange(page - 1)}
            disabled={page === 1}
            className={`flex items-center gap-1.5 px-5 py-2.5 rounded-full border-2 border-gray-900 font-extrabold text-sm text-black bg-white transition-all shadow-xs ${
              page === 1
                ? 'opacity-40 cursor-not-allowed bg-gray-200 text-gray-600 border-gray-400'
                : 'hover:bg-gray-900 hover:text-white cursor-pointer'
            }`}
          >
            <ChevronLeft className="w-4.5 h-4.5 stroke-[3]" />
            <span>Previous</span>
          </button>

          {/* Page Numbers */}
          <div className="flex items-center gap-2.5">
            {Array.from({ length: pages }).map((_, idx) => {
              const pageNum = idx + 1;
              const isActive = pageNum === page;
              return (
                <button
                  key={pageNum}
                  onClick={() => handlePageChange(pageNum)}
                  className={`w-10 h-10 rounded-full font-extrabold text-sm transition-all cursor-pointer border-2 ${
                    isActive
                      ? 'bg-gray-900 text-white border-gray-900 shadow-md scale-105'
                      : 'text-black border-gray-900 bg-white hover:bg-gray-900 hover:text-white'
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}
          </div>

          {/* Next Button */}
          <button
            onClick={() => handlePageChange(page + 1)}
            disabled={page === pages}
            className={`flex items-center gap-1.5 px-5 py-2.5 rounded-full border-2 border-gray-900 font-extrabold text-sm text-black bg-white transition-all shadow-xs ${
              page === pages
                ? 'opacity-40 cursor-not-allowed bg-gray-200 text-gray-600 border-gray-400'
                : 'hover:bg-gray-900 hover:text-white cursor-pointer'
            }`}
          >
            <span>Next</span>
            <ChevronRight className="w-4.5 h-4.5 stroke-[3]" />
          </button>

        </div>
      )}
    </div>
  );
}
