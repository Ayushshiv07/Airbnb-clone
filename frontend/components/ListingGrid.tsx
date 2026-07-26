'use client';

import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { ListingCard } from './ListingCard';
import { SkeletonCard } from './Skeleton';
import { EmptyState } from './EmptyState';
import { ListingCard as ListingCardType } from '../lib/types';
import { ChevronLeft, ChevronRight, SearchX, MapPin } from 'lucide-react';

interface ListingGridProps {
  listings: ListingCardType[];
  isLoading: boolean;
  total: number;
  page: number;
  pages: number;
}

const popularCities = ['New York', 'Paris', 'Tokyo', 'Barcelona', 'Bali'];

export function ListingGrid({ listings, isLoading, page, pages }: ListingGridProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

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

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-10">
        {listings.map((listing) => (
          <ListingCard key={listing.id} listing={listing} />
        ))}
      </div>

      {/* Pagination Controls - High Contrast Solid Black Styling */}
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
