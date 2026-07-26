'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Search, MapPin, Calendar, Users, X } from 'lucide-react';
import { useToast } from '../contexts/ToastContext';

interface SearchBarProps {
  isExpanded: boolean;
  onClose: () => void;
}

function SearchBarContent({ isExpanded, onClose }: SearchBarProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { showToast } = useToast();

  const [location, setLocation] = useState(searchParams.get('location') || '');
  const [checkIn, setCheckIn] = useState(searchParams.get('check_in') || '');
  const [checkOut, setCheckOut] = useState(searchParams.get('check_out') || '');
  const [guests, setGuests] = useState(Number(searchParams.get('guests')) || 1);

  const [activeSegment, setActiveSegment] = useState<'where' | 'dates' | 'guests'>('where');

  useEffect(() => {
    setLocation(searchParams.get('location') || '');
    setCheckIn(searchParams.get('check_in') || '');
    setCheckOut(searchParams.get('check_out') || '');
    setGuests(Number(searchParams.get('guests')) || 1);
  }, [searchParams]);

  if (!isExpanded) return null;

  const handleSearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    if (checkIn && checkOut && checkOut <= checkIn) {
      showToast('Check-out date must be after check-in date', 'error');
      return;
    }

    const params = new URLSearchParams(searchParams.toString());

    if (location.trim()) params.set('location', location.trim());
    else params.delete('location');

    if (checkIn) params.set('check_in', checkIn);
    else params.delete('check_in');

    if (checkOut) params.set('check_out', checkOut);
    else params.delete('check_out');

    if (guests > 1) params.set('guests', String(guests));
    else params.delete('guests');

    params.set('page', '1');
    router.push(`/?${params.toString()}`);
    onClose();
  };

  const popularCities = ['New York', 'Paris', 'Tokyo', 'Barcelona', 'Bali'];

  return (
    <div className="bg-white dark:bg-zinc-900 border-b border-gray-200 dark:border-zinc-800 shadow-xl py-6 px-4 transition-all animate-in slide-in-from-top duration-200">
      <div className="max-w-4xl mx-auto relative">
        <button
          onClick={onClose}
          className="absolute -top-3 right-0 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors"
        >
          <X className="w-5 h-5 text-gray-500" />
        </button>

        <form onSubmit={handleSearch} className="bg-gray-100 dark:bg-zinc-800 rounded-full p-2 flex flex-col md:flex-row items-center border border-gray-200 dark:border-zinc-700 shadow-lg">
          
          {/* Segment 1: Where */}
          <div
            onClick={() => setActiveSegment('where')}
            className={`flex-1 w-full md:w-auto px-6 py-3 rounded-full cursor-pointer transition-colors ${
              activeSegment === 'where' ? 'bg-white dark:bg-zinc-900 shadow-md' : 'hover:bg-gray-200/60 dark:hover:bg-zinc-700/50'
            }`}
          >
            <label className="block text-xs font-bold text-gray-800 dark:text-zinc-200 uppercase tracking-wider">
              Where
            </label>
            <input
              type="text"
              placeholder="Search destinations (e.g. Paris, Tokyo)"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full bg-transparent text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-hidden mt-0.5"
            />
          </div>

          <div className="hidden md:block h-8 w-px bg-gray-300 dark:bg-zinc-700 my-auto" />

          {/* Segment 2: Dates */}
          <div
            onClick={() => setActiveSegment('dates')}
            className={`flex-1 w-full md:w-auto px-6 py-3 rounded-full cursor-pointer transition-colors ${
              activeSegment === 'dates' ? 'bg-white dark:bg-zinc-900 shadow-md' : 'hover:bg-gray-200/60 dark:hover:bg-zinc-700/50'
            }`}
          >
            <label className="block text-xs font-bold text-gray-800 dark:text-zinc-200 uppercase tracking-wider">
              Dates
            </label>
            <div className="flex items-center gap-2 mt-0.5">
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-1/2 bg-transparent text-xs text-gray-900 dark:text-white focus:outline-hidden"
              />
              <span className="text-gray-400">-</span>
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-1/2 bg-transparent text-xs text-gray-900 dark:text-white focus:outline-hidden"
              />
            </div>
          </div>

          <div className="hidden md:block h-8 w-px bg-gray-300 dark:bg-zinc-700 my-auto" />

          {/* Segment 3: Guests */}
          <div
            onClick={() => setActiveSegment('guests')}
            className={`flex-1 w-full md:w-auto px-6 py-3 rounded-full cursor-pointer transition-colors flex items-center justify-between ${
              activeSegment === 'guests' ? 'bg-white dark:bg-zinc-900 shadow-md' : 'hover:bg-gray-200/60 dark:hover:bg-zinc-700/50'
            }`}
          >
            <div>
              <label className="block text-xs font-bold text-gray-800 dark:text-zinc-200 uppercase tracking-wider">
                Who
              </label>
              <span className="text-sm text-gray-900 dark:text-white mt-0.5 block">
                {guests} {guests === 1 ? 'guest' : 'guests'}
              </span>
            </div>

            <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
              <button
                type="button"
                onClick={() => setGuests((g) => Math.max(1, g - 1))}
                className="w-7 h-7 rounded-full border border-gray-300 dark:border-zinc-600 flex items-center justify-center font-bold text-gray-600 dark:text-zinc-300 hover:border-gray-900"
              >
                -
              </button>
              <button
                type="button"
                onClick={() => setGuests((g) => g + 1)}
                className="w-7 h-7 rounded-full border border-gray-300 dark:border-zinc-600 flex items-center justify-center font-bold text-gray-600 dark:text-zinc-300 hover:border-gray-900"
              >
                +
              </button>
            </div>
          </div>

          {/* Submit Search Button */}
          <button
            type="submit"
            className="w-full md:w-auto mt-2 md:mt-0 bg-rose-500 hover:bg-rose-600 text-white font-semibold px-6 py-3.5 rounded-full flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg cursor-pointer"
          >
            <Search className="w-5 h-5" />
            <span>Search</span>
          </button>
        </form>

        {/* Popular Destination Suggestions */}
        {activeSegment === 'where' && (
          <div className="mt-4 flex items-center gap-2 overflow-x-auto no-scrollbar py-2">
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider whitespace-nowrap">
              Popular:
            </span>
            {popularCities.map((city) => (
              <button
                key={city}
                type="button"
                onClick={() => setLocation(city)}
                className="px-3.5 py-1.5 rounded-full bg-gray-100 dark:bg-zinc-800 hover:bg-rose-50 text-gray-700 dark:text-zinc-300 text-xs font-medium border border-gray-200 dark:border-zinc-700 transition-colors whitespace-nowrap"
              >
                {city}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export function SearchBar(props: SearchBarProps) {
  return (
    <Suspense fallback={null}>
      <SearchBarContent {...props} />
    </Suspense>
  );
}
