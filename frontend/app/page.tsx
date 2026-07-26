'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Navbar } from '../components/Navbar';
import { SearchBar } from '../components/SearchBar';
import { FilterRow } from '../components/FilterRow';
import { ListingGrid } from '../components/ListingGrid';
import { SkeletonGrid } from '../components/Skeleton';
import { Footer } from '../components/Footer';
import { PaginatedListings } from '../lib/types';
import { api } from '../lib/api';
import { useToast } from '../contexts/ToastContext';

function HomeContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { showToast } = useToast();
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);

  const [listingsData, setListingsData] = useState<PaginatedListings>({
    items: [],
    total: 0,
    page: 1,
    pages: 1,
    page_size: 12,
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const queryString = searchParams.toString();
    const endpoint = `/listings/?${queryString}`;

    api
      .get<PaginatedListings>(endpoint)
      .then((data) => {
        setListingsData(data);
      })
      .catch((err: any) => {
        console.error('Failed to fetch listings:', err);
        showToast(err.message || 'Failed to fetch listings. Please check your search parameters.', 'error');
        setListingsData({
          items: [],
          total: 0,
          page: 1,
          pages: 1,
          page_size: 12,
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [searchParams, showToast]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header & Navigation */}
      <Navbar
        onSearchClick={() => setIsSearchExpanded((prev) => !prev)}
        isSearchExpanded={isSearchExpanded}
      />

      {/* Search Bar Overlay */}
      <SearchBar
        isExpanded={isSearchExpanded}
        onClose={() => setIsSearchExpanded(false)}
      />

      {/* Property Categories & Filters Bar */}
      <FilterRow />

      {/* Listing Grid */}
      <main className="flex-1">
        <ListingGrid
          listings={listingsData.items}
          isLoading={isLoading}
          total={listingsData.total}
          page={listingsData.page}
          pages={listingsData.pages}
        />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default function HomePage() {
  return (
    <Suspense fallback={<div className="p-8"><SkeletonGrid count={8} /></div>}>
      <HomeContent />
    </Suspense>
  );
}
