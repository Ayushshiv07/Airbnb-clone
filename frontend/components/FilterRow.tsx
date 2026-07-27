'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { SlidersHorizontal, Building, Home as HomeIcon, Castle, Tent, Warehouse } from 'lucide-react';
import { Modal } from './Modal';
import { Amenity } from '../lib/types';
import { api } from '../lib/api';

const propertyTypes = [
  { label: 'All Homes', type: '', icon: Building },
  { label: 'Apartment', type: 'Apartment', icon: Building },
  { label: 'House', type: 'House', icon: HomeIcon },
  { label: 'Villa', type: 'Villa', icon: Castle },
  { label: 'Cabin', type: 'Cabin', icon: Tent },
  { label: 'Loft', type: 'Loft', icon: Warehouse },
];

const quickAmenities = [
  { name: 'Free parking', id: 4 },
  { name: 'Wifi', id: 1 },
  { name: 'Air conditioning', id: 5 },
  { name: 'Allows pets', id: 6 },
  { name: 'Pool', id: 3 },
  { name: 'Kitchen', id: 2 },
  { name: 'TV', id: 8 },
];

function FilterRowContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentPropType = searchParams.get('property_type') || '';
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
  const [amenitiesList, setAmenitiesList] = useState<Amenity[]>([]);

  // Filter Modal state
  const [minPrice, setMinPrice] = useState(searchParams.get('min_price') || '');
  const [maxPrice, setMaxPrice] = useState(searchParams.get('max_price') || '');
  const [selectedPropType, setSelectedPropType] = useState(currentPropType);
  const [selectedAmenities, setSelectedAmenities] = useState<number[]>(
    searchParams.get('amenities')
      ? searchParams.get('amenities')!.split(',').map(Number)
      : []
  );

  useEffect(() => {
    api.get<Amenity[]>('/amenities').then(setAmenitiesList).catch(console.error);
  }, []);

  const handleSelectPropType = (type: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (type) {
      params.set('property_type', type);
    } else {
      params.delete('property_type');
    }
    params.set('page', '1');
    router.push(`/?${params.toString()}`);
  };

  const handleToggleQuickAmenity = (amenityId: number) => {
    const params = new URLSearchParams(searchParams.toString());
    let currentArr = searchParams.get('amenities')
      ? searchParams.get('amenities')!.split(',').map(Number)
      : [];

    if (currentArr.includes(amenityId)) {
      currentArr = currentArr.filter((a) => a !== amenityId);
    } else {
      currentArr.push(amenityId);
    }

    if (currentArr.length > 0) {
      params.set('amenities', currentArr.join(','));
    } else {
      params.delete('amenities');
    }
    params.set('page', '1');
    router.push(`/?${params.toString()}`);
  };

  const handleApplyFilters = () => {
    const params = new URLSearchParams(searchParams.toString());

    if (minPrice) params.set('min_price', minPrice);
    else params.delete('min_price');

    if (maxPrice) params.set('max_price', maxPrice);
    else params.delete('max_price');

    if (selectedPropType) params.set('property_type', selectedPropType);
    else params.delete('property_type');

    if (selectedAmenities.length > 0) params.set('amenities', selectedAmenities.join(','));
    else params.delete('amenities');

    params.set('page', '1');
    router.push(`/?${params.toString()}`);
    setIsFilterModalOpen(false);
  };

  const handleClearFilters = () => {
    setMinPrice('');
    setMaxPrice('');
    setSelectedPropType('');
    setSelectedAmenities([]);
    const params = new URLSearchParams(searchParams.toString());
    ['min_price', 'max_price', 'property_type', 'amenities'].forEach((k) => params.delete(k));
    params.set('page', '1');
    router.push(`/?${params.toString()}`);
    setIsFilterModalOpen(false);
  };

  const toggleAmenity = (id: number) => {
    setSelectedAmenities((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]
    );
  };

  const activeFilterCount =
    (searchParams.get('min_price') ? 1 : 0) +
    (searchParams.get('max_price') ? 1 : 0) +
    (searchParams.get('property_type') ? 1 : 0) +
    (searchParams.get('amenities') ? searchParams.get('amenities')!.split(',').length : 0);

  const activeAmenityIds = searchParams.get('amenities')
    ? searchParams.get('amenities')!.split(',').map(Number)
    : [];

  return (
    <div className="border-b border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 sticky top-20 z-30 py-4 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        
        {/* Category Chips Scroll */}
        <div className="flex items-center gap-6 overflow-x-auto no-scrollbar py-1 flex-1">
          {propertyTypes.map((item) => {
            const Icon = item.icon;
            const isActive = currentPropType === item.type;
            return (
              <button
                key={item.label}
                onClick={() => handleSelectPropType(item.type)}
                className={`flex flex-col items-center gap-2 pb-2 border-b-2 transition-all group whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'border-gray-900 dark:border-white text-black dark:text-white font-bold'
                    : 'border-transparent text-gray-700 dark:text-zinc-300 font-semibold hover:text-black dark:hover:text-white hover:border-gray-400'
                }`}
              >
                <Icon className={`w-5 h-5 transition-transform group-hover:scale-110 ${isActive ? 'text-black dark:text-white' : 'text-gray-700 dark:text-zinc-300'}`} />
                <span className="text-xs">{item.label}</span>
              </button>
            );
          })}

          <div className="h-6 w-px bg-gray-300 dark:bg-zinc-700 flex-shrink-0" />

          {/* Quick Amenity Pills (Matching Screenshot) */}
          <div className="hidden sm:flex items-center gap-2 flex-shrink-0">
            {quickAmenities.map((qa) => {
              const isSelected = activeAmenityIds.includes(qa.id);
              return (
                <button
                  key={qa.id}
                  onClick={() => handleToggleQuickAmenity(qa.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-extrabold border transition-all cursor-pointer whitespace-nowrap ${
                    isSelected
                      ? 'bg-gray-900 text-white border-gray-900 dark:bg-white dark:text-gray-900'
                      : 'bg-white dark:bg-zinc-800 text-gray-800 dark:text-zinc-200 border-gray-300 dark:border-zinc-700 hover:border-gray-900'
                  }`}
                >
                  {qa.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* Filters Button */}
        <button
          onClick={() => setIsFilterModalOpen(true)}
          className="flex items-center gap-2 border-2 border-gray-900 dark:border-zinc-500 rounded-xl px-4 py-2.5 text-xs font-bold text-black dark:text-white hover:border-black dark:hover:border-white transition-all shadow-xs flex-shrink-0 cursor-pointer"
        >
          <SlidersHorizontal className="w-4 h-4 stroke-[2.5]" />
          <span>Filters</span>
          {activeFilterCount > 0 && (
            <span className="w-5 h-5 bg-rose-500 text-white rounded-full flex items-center justify-center text-[10px] font-bold">
              {activeFilterCount}
            </span>
          )}
        </button>

      </div>

      {/* Filter Modal */}
      <Modal
        isOpen={isFilterModalOpen}
        onClose={() => setIsFilterModalOpen(false)}
        title="Filters"
      >
        <div className="space-y-8">
          
          {/* Price Range */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white text-base mb-1">Price range</h4>
            <p className="text-xs text-gray-500 dark:text-zinc-400 mb-4">Nightly prices before taxes and fees</p>

            <div className="flex items-center gap-4">
              <div className="flex-1 border border-gray-300 dark:border-zinc-700 rounded-xl p-3">
                <label className="block text-[10px] uppercase font-bold text-gray-400">Minimum</label>
                <div className="flex items-center gap-1 mt-0.5">
                  <span className="text-gray-500 text-sm">$</span>
                  <input
                    type="number"
                    placeholder="0"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                    className="w-full bg-transparent text-sm text-gray-900 dark:text-white focus:outline-hidden font-medium"
                  />
                </div>
              </div>

              <span className="text-gray-400 font-bold">-</span>

              <div className="flex-1 border border-gray-300 dark:border-zinc-700 rounded-xl p-3">
                <label className="block text-[10px] uppercase font-bold text-gray-400">Maximum</label>
                <div className="flex items-center gap-1 mt-0.5">
                  <span className="text-gray-500 text-sm">$</span>
                  <input
                    type="number"
                    placeholder="1000+"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                    className="w-full bg-transparent text-sm text-gray-900 dark:text-white focus:outline-hidden font-medium"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 dark:border-zinc-800" />

          {/* Property Type */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white text-base mb-3">Property type</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {propertyTypes.slice(1).map((pt) => {
                const Icon = pt.icon;
                const isSelected = selectedPropType === pt.type;
                return (
                  <button
                    key={pt.type}
                    type="button"
                    onClick={() => setSelectedPropType(isSelected ? '' : pt.type)}
                    className={`flex flex-col items-start gap-2 p-4 rounded-xl border text-left transition-all ${
                      isSelected
                        ? 'border-gray-900 dark:border-white bg-gray-50 dark:bg-zinc-800 font-semibold'
                        : 'border-gray-200 dark:border-zinc-700 hover:border-gray-400'
                    }`}
                  >
                    <Icon className="w-5 h-5 text-gray-700 dark:text-zinc-300" />
                    <span className="text-sm text-gray-900 dark:text-white">{pt.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="border-t border-gray-200 dark:border-zinc-800" />

          {/* Amenities */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white text-base mb-3">Amenities</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {amenitiesList.map((amenity) => {
                const isChecked = selectedAmenities.includes(amenity.id);
                return (
                  <label
                    key={amenity.id}
                    className="flex items-center gap-3 p-3 rounded-xl border border-gray-200 dark:border-zinc-800 cursor-pointer hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors"
                  >
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => toggleAmenity(amenity.id)}
                      className="w-4 h-4 rounded-sm accent-rose-500"
                    />
                    <span className="text-sm text-gray-800 dark:text-zinc-200 font-medium">{amenity.name}</span>
                  </label>
                );
              })}
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between pt-6 border-t border-gray-200 dark:border-zinc-800 mt-6">
          <button
            onClick={handleClearFilters}
            className="text-sm font-semibold underline text-gray-800 dark:text-zinc-200 hover:text-black"
          >
            Clear all
          </button>
          <button
            onClick={handleApplyFilters}
            className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold px-6 py-3 rounded-xl hover:bg-black transition-colors"
          >
            Show results
          </button>
        </div>
      </Modal>
    </div>
  );
}

export function FilterRow() {
  return (
    <Suspense fallback={<div className="h-16 border-b border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900" />}>
      <FilterRowContent />
    </Suspense>
  );
}
