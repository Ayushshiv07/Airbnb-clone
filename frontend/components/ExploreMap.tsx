'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { ListingCard as ListingCardType } from '../lib/types';
import { useCurrency } from '../contexts/CurrencyContext';

interface ExploreMapProps {
  listings: ListingCardType[];
}

const CITY_COORDS: Record<string, [number, number]> = {
  kolkata: [22.5726, 88.3639],
  varanasi: [25.3176, 82.9739],
  siliguri: [26.7271, 88.3953],
  mumbai: [19.0760, 72.8777],
  goa: [15.2993, 74.1240],
  jaipur: [26.9124, 75.7873],
  udaipur: [24.5854, 73.6833],
  manali: [32.2432, 77.1892],
  agra: [27.1751, 78.0421],
  kochi: [9.9312, 76.2673],
  bengaluru: [12.9716, 77.5946],
  bangalore: [12.9716, 77.5946],
  darjeeling: [27.0410, 88.2663],
  rishikesh: [30.1265, 78.3248],
  shimla: [31.1048, 77.1734],
  hyderabad: [17.3850, 78.4867],
  ooty: [11.4102, 76.6950],
  delhi: [28.6139, 77.2090],
  'new delhi': [28.6139, 77.2090],
  kerala: [9.6006, 76.2999],
  london: [51.5074, -0.1278],
  rome: [41.9028, 12.4964],
  kyoto: [35.0116, 135.7681],
  dubai: [25.2048, 55.2708],
  sydney: [-33.8688, 151.2093],
  amsterdam: [52.3676, 4.9041],
  singapore: [1.3521, 103.8198],
  santorini: [36.3932, 25.4615],
  maui: [20.7984, -156.3319],
  zurich: [47.3769, 8.5417],
  paris: [48.8566, 2.3522],
  tokyo: [35.6762, 139.6503],
  barcelona: [41.3851, 2.1734],
  bali: [-8.4095, 115.1889],
  ubud: [-8.5069, 115.2625],
  seminyak: [-8.6914, 115.1593],
  canggu: [-8.6478, 115.1385],
  'new york': [40.7128, -73.9352],
  brooklyn: [40.6782, -73.9442],
  soho: [40.7248, -73.9982],
};

export function ExploreMap({ listings }: ExploreMapProps) {
  const [isClient, setIsClient] = useState(false);
  const { formatPrice } = useCurrency();

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient || typeof window === 'undefined') {
    return (
      <div className="w-full h-full min-h-[500px] bg-gray-100 dark:bg-zinc-800 rounded-3xl animate-pulse flex items-center justify-center text-xs text-gray-400 font-bold">
        Loading Interactive Map...
      </div>
    );
  }

  // Dynamic Leaflet imports on client only
  const { MapContainer, TileLayer, Marker, Popup } = require('react-leaflet');
  const L = require('leaflet');

  // Default map center (India / Global center view)
  const defaultCenter: [number, number] = [20.5937, 78.9629]; // India center

  return (
    <div className="relative w-full h-full min-h-[600px] rounded-3xl overflow-hidden shadow-lg border-2 border-gray-300 dark:border-zinc-700 z-0">
      <MapContainer
        center={defaultCenter}
        zoom={4}
        scrollWheelZoom={true}
        className="w-full h-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://carto.com/">CARTO</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        />

        {listings.map((l) => {
          let lat = l.latitude;
          let lng = l.longitude;

          if (!lat || !lng) {
            const city = (l.city || '').toLowerCase().trim();
            const country = (l.country || '').toLowerCase().trim();

            for (const key of Object.keys(CITY_COORDS)) {
              if (city.includes(key) || country.includes(key)) {
                [lat, lng] = CITY_COORDS[key];
                break;
              }
            }

            if (!lat || !lng) {
              lat = 28.6139;
              lng = 77.2090;
            }
          }

          const priceTag = formatPrice(l.price_per_night);

          // Custom Price Pill Icon matching Airbnb
          const priceIcon = L.divIcon({
            className: 'custom-price-pill-marker',
            html: `<div style="background-color: white; color: black; font-weight: 800; font-size: 11px; padding: 5px 10px; border-radius: 20px; border: 2px solid #222; box-shadow: 0 4px 12px rgba(0,0,0,0.25); white-space: nowrap; cursor: pointer; transition: transform 0.15s ease;" onmouseover="this.style.transform='scale(1.15)'; this.style.backgroundColor='#222'; this.style.color='white';" onmouseout="this.style.transform='scale(1)'; this.style.backgroundColor='white'; this.style.color='black';">${priceTag}</div>`,
            iconSize: [85, 28],
            iconAnchor: [42, 14],
          });

          return (
            <Marker key={l.id} position={[lat, lng]} icon={priceIcon}>
              <Popup className="airbnb-map-popup">
                <div className="w-56 p-1 space-y-2 text-black">
                  <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-100">
                    <img
                      src={l.images[0]?.url || 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800'}
                      alt={l.title}
                      onError={(e) => {
                        e.currentTarget.src = 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800';
                      }}
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
