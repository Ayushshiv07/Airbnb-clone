'use client';

import React from 'react';

export function SkeletonCard() {
  return (
    <div className="flex flex-col gap-3 animate-pulse">
      <div className="w-full aspect-square bg-gray-200 dark:bg-zinc-800 rounded-2xl" />
      <div className="flex justify-between items-start gap-2">
        <div className="h-4 bg-gray-200 dark:bg-zinc-800 rounded-md w-3/4" />
        <div className="h-4 bg-gray-200 dark:bg-zinc-800 rounded-md w-1/8" />
      </div>
      <div className="h-3.5 bg-gray-200 dark:bg-zinc-800 rounded-md w-1/2" />
      <div className="h-4 bg-gray-200 dark:bg-zinc-800 rounded-md w-1/3" />
    </div>
  );
}

export function SkeletonGrid({ count = 8 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {Array.from({ length: count }).map((_, idx) => (
        <SkeletonCard key={idx} />
      ))}
    </div>
  );
}

export function SkeletonDetail() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-pulse space-y-8">
      {/* Title skeleton */}
      <div className="space-y-3">
        <div className="h-8 bg-gray-200 dark:bg-zinc-800 rounded-lg w-2/3" />
        <div className="h-4 bg-gray-200 dark:bg-zinc-800 rounded-md w-1/3" />
      </div>

      {/* Gallery skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 h-[400px] rounded-2xl overflow-hidden">
        <div className="md:col-span-2 h-full bg-gray-200 dark:bg-zinc-800" />
        <div className="hidden md:grid grid-cols-2 col-span-2 gap-3 h-full">
          <div className="bg-gray-200 dark:bg-zinc-800" />
          <div className="bg-gray-200 dark:bg-zinc-800" />
          <div className="bg-gray-200 dark:bg-zinc-800" />
          <div className="bg-gray-200 dark:bg-zinc-800" />
        </div>
      </div>

      {/* Main & sidebar skeleton */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 pt-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="h-14 bg-gray-200 dark:bg-zinc-800 rounded-xl" />
          <div className="h-32 bg-gray-200 dark:bg-zinc-800 rounded-xl" />
          <div className="h-40 bg-gray-200 dark:bg-zinc-800 rounded-xl" />
        </div>
        <div className="h-96 bg-gray-200 dark:bg-zinc-800 rounded-2xl" />
      </div>
    </div>
  );
}
