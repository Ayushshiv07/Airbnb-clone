'use client';

import React, { useState } from 'react';
import { Grid, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { ListingImage } from '../lib/types';

interface GalleryProps {
  images: ListingImage[];
  title: string;
}

const FALLBACK_PHOTOS = [
  'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800',
  'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800',
  'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800',
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
  'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800',
];

export function Gallery({ images, title }: GalleryProps) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [activePhotoIdx, setActivePhotoIdx] = useState(0);

  const displayImages = images.length > 0
    ? images
    : [{ id: 0, url: FALLBACK_PHOTOS[0], position: 0 }];

  const openLightbox = (index: number) => {
    setActivePhotoIdx(index);
    setIsLightboxOpen(true);
  };

  const handleImgError = (e: React.SyntheticEvent<HTMLImageElement, Event>, idx: number) => {
    const target = e.currentTarget;
    const fallback = FALLBACK_PHOTOS[idx % FALLBACK_PHOTOS.length];
    if (target.src !== fallback) {
      target.src = fallback;
    }
  };

  return (
    <>
      {/* 5-Photo Mosaic Grid */}
      <div className="relative rounded-2xl overflow-hidden shadow-xs border-2 border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2 h-[350px] sm:h-[450px]">
          
          {/* Main Large Photo */}
          <div
            onClick={() => openLightbox(0)}
            className="md:col-span-2 h-full cursor-pointer relative group overflow-hidden bg-gray-100"
          >
            <img
              src={displayImages[0].url}
              alt={`${title} - Main photo`}
              onError={(e) => handleImgError(e, 0)}
              className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
          </div>

          {/* 4 Secondary Grid Photos */}
          <div className="hidden md:grid grid-cols-2 col-span-2 gap-2 h-full">
            {displayImages.slice(1, 5).map((img, idx) => (
              <div
                key={img.id || idx}
                onClick={() => openLightbox(idx + 1)}
                className="h-full cursor-pointer relative group overflow-hidden bg-gray-100"
              >
                <img
                  src={img.url}
                  alt={`${title} - Photo ${idx + 2}`}
                  onError={(e) => handleImgError(e, idx + 1)}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
              </div>
            ))}
          </div>
        </div>

        {/* Show all photos button */}
        <button
          onClick={() => openLightbox(0)}
          className="absolute bottom-4 right-4 bg-white border-2 border-gray-900 text-black font-extrabold text-xs px-4 py-2 rounded-xl shadow-md flex items-center gap-2 hover:bg-black hover:text-white transition-all cursor-pointer"
        >
          <Grid className="w-4 h-4" />
          <span>Show all {displayImages.length} photos</span>
        </button>
      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex flex-col justify-between p-4 sm:p-8 animate-in fade-in duration-200">
          
          {/* Lightbox Header */}
          <div className="flex items-center justify-between text-white font-bold">
            <span className="text-sm font-extrabold">
              {activePhotoIdx + 1} / {displayImages.length}
            </span>
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="p-2 rounded-full hover:bg-white/20 transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Active Photo */}
          <div className="relative flex-1 flex items-center justify-center my-4 max-h-[80vh]">
            <img
              src={displayImages[activePhotoIdx].url}
              alt={`${title} - Fullscreen photo ${activePhotoIdx + 1}`}
              onError={(e) => handleImgError(e, activePhotoIdx)}
              className="max-h-full max-w-full object-contain rounded-lg shadow-2xl"
            />

            {/* Prev / Next Buttons */}
            {displayImages.length > 1 && (
              <>
                <button
                  onClick={() => setActivePhotoIdx((prev) => (prev - 1 + displayImages.length) % displayImages.length)}
                  className="absolute left-2 sm:left-4 p-3 rounded-full bg-white/20 hover:bg-white/40 text-white transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-6 h-6 stroke-[3]" />
                </button>

                <button
                  onClick={() => setActivePhotoIdx((prev) => (prev + 1) % displayImages.length)}
                  className="absolute right-2 sm:right-4 p-3 rounded-full bg-white/20 hover:bg-white/40 text-white transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-6 h-6 stroke-[3]" />
                </button>
              </>
            )}
          </div>

          {/* Lightbox Footer Thumbnail Bar */}
          <div className="flex items-center justify-center gap-2 overflow-x-auto no-scrollbar py-2">
            {displayImages.map((img, idx) => (
              <button
                key={img.id || idx}
                onClick={() => setActivePhotoIdx(idx)}
                className={`w-16 h-12 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-all cursor-pointer ${
                  idx === activePhotoIdx ? 'border-white scale-105 opacity-100' : 'border-transparent opacity-50 hover:opacity-80'
                }`}
              >
                <img
                  src={img.url}
                  alt=""
                  onError={(e) => handleImgError(e, idx)}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

        </div>
      )}
    </>
  );
}
