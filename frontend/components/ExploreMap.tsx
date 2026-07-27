'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ListingCard as ListingCardType } from '../lib/types';
import { useCurrency } from '../contexts/CurrencyContext';

interface ExploreMapProps {
  listings: ListingCardType[];
}

export function ExploreMap({ listings }: ExploreMapProps) {
  const [isClient, setIsClient] = useState(false);
  const { formatPrice } = useCurrency();

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div className="w-full h-full min-h-[500px] bg-gray-100 dark:bg-zinc-800 rounded-3xl animate-pulse flex items-center justify-center text-xs text-gray-400 font-bold">
        Loading Interactive Map...
      </div>
    );
  }

  // Dynamic Leaflet imports
  const { MapContainer, TileLayer, Marker, Popup } = require('react-leaflet');
  const L = require('leaflet');

  // Default map center (World / Asia / Europe mix)
  const defaultCenter: [number, number] = [28.6139, 77.2090]; // Delhi / Central

  return (
    <div className="relative w-full h-full min-h-[600px] rounded-3xl overflow-hidden shadow-lg border-2 border-gray-300 dark:border-zinc-700 z-0">
      <MapContainer
        center={defaultCenter}
        zoom={5}
        scrollWheelZoom={true}
        className="w-full h-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {listings.map((l) => {
          // Resolve coordinates: if latitude/longitude present, use them; else fallback based on city
          let lat = l.latitude;
          let lng = l.longitude;

          if (!lat || !lng) {
            const city = (l.city || '').toLowerCase();
            if (city.includes('paris')) { lat = 48.8566; lng = 2.3522; }
            else if (city.includes('tokyo')) { lat = 35.6762; lng = 139.6503; }
            else if (city.includes('barcelona')) { lat = 41.3851; lng = 2.1734; }
            else if (city.includes('bali') || city.includes('ubud') || city.includes('seminyak')) { lat = -8.4095; lng = 115.1889; }
            else if (city.includes('new york') || city.includes('soho')) { lat = 40.7128; lng = -73.9352; }
            else { lat = 28.6139; lng = 77.2090; }
          }

          const priceTag = formatPrice(l.price_per_night);

          // Custom Price Pill Icon matching Airbnb
          const priceIcon = L.divIcon({
            className: 'custom-price-pill-marker',
            html: `<div style="background-color: white; color: black; font-weight: 800; font-size: 12px; padding: 6px 12px; border-radius: 20px; border: 2px solid #222; box-shadow: 0 4px 12px rgba(0,0,0,0.25); white-space: nowrap; cursor: pointer; transition: transform 0.15s ease;" onmouseover="this.style.transform='scale(1.15)'; this.style.backgroundColor='#222'; this.style.color='white';" onmouseout="this.style.transform='scale(1)'; this.style.backgroundColor='white'; this.style.color='black';">${priceTag}</div>`,
            iconSize: [80, 30],
            iconAnchor: [40, 15],
          });

          return (
            <Marker key={l.id} position={[lat, lng]} icon={priceIcon}>
              <Popup className="airbnb-map-popup">
                <div className="w-56 p-1 space-y-2 text-black">
                  <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-100">
                    <img
                      src={l.images[0]?.url || 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800'}
                      alt={l.title}
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-1 left-1 bg-black/70 text-white text-[9px] font-extrabold uppercase px-2 py-0.5 rounded-full">
                      {l.property_type}
                    </span>
                  </div>

                  <div>
                    <h5 className="font-extrabold text-xs text-black line-clamp-1">{l.title}</h5>
                    <p className="text-[11px] font-semibold text-gray-600">{l.city}, {l.country}</p>
                    <div className="flex items-center justify-between mt-1 pt-1 border-t border-gray-200">
                      <span className="font-extrabold text-xs text-black">{priceTag} / night</span>
                      <Link
                        href={`/listing/${l.id}`}
                        className="text-[10px] font-extrabold text-white bg-rose-500 hover:bg-rose-600 px-2.5 py-1 rounded-lg"
                      >
                        View Stay
                      </Link>
                    </div>
                  </div>
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
}
