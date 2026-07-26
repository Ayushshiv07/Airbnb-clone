'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useRouter } from 'next/navigation';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { ListingGrid } from '../../components/ListingGrid';
import { SkeletonGrid } from '../../components/Skeleton';
import { EmptyState } from '../../components/EmptyState';
import { ListingCard as ListingCardType } from '../../lib/types';
import { api } from '../../lib/api';
import { useAuth } from '../../contexts/AuthContext';
import { Heart } from 'lucide-react';

function WishlistContent() {
  const router = useRouter();
  const { user, isLoading: isAuthLoading } = useAuth();

  const [wishlistItems, setWishlistItems] = useState<ListingCardType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!isAuthLoading && !user) {
      router.push('/login');
      return;
    }
    if (user) {
      setIsLoading(true);
      api
        .get<ListingCardType[]>('/wishlist/mine')
        .then(setWishlistItems)
        .catch(console.error)
        .finally(() => setIsLoading(false));
    }
  }, [user, isAuthLoading, router]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-1 w-full">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Wishlists</h1>
            <p className="text-sm text-gray-500 dark:text-zinc-400 mt-1">
              Your saved properties and dream stays
            </p>
          </div>
        </div>

        {isLoading ? (
          <ListingGrid listings={[]} isLoading={true} total={0} page={1} pages={1} />
        ) : wishlistItems.length === 0 ? (
          <EmptyState
            icon={<Heart className="w-8 h-8" />}
            title="Your wishlist is empty"
            description="As you search, tap the heart icon on any stay or experience to save your favorites here."
            actionText="Start exploring"
            actionHref="/"
          />
        ) : (
          <ListingGrid listings={wishlistItems} isLoading={false} total={wishlistItems.length} page={1} pages={1} />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default function WishlistPage() {
  return (
    <Suspense fallback={<div className="p-8"><SkeletonGrid count={4} /></div>}>
      <WishlistContent />
    </Suspense>
  );
}
