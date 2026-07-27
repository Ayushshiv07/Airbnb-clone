'use client';

import React, { useEffect, useState } from 'react';
import { MapPin } from 'lucide-react';

interface MapSectionProps {
  latitude?: number | null;
  longitude?: number | null;
  city: string;
  country: string;
}

const CITY_COORDINATES: Record<string, [number, number]> = {
  delhi: [28.6139, 77.2090],
  'new delhi': [28.6139, 77.2090],
  india: [28.6139, 77.2090],
  paris: [48.8566, 2.3522],
  tokyo: [35.6762, 139.6503],
  barcelona: [41.3851, 2.1734],
  bali: [-8.4095, 115.1889],
  ubud: [-8.5069, 115.2625],
  seminyak: [-8.6914, 115.1593],
  canggu: [-8.6478, 115.1385],
  'new york': [40.7128, -73.9352],
  brooklyn: [40.6782, -73.9442],
  manhattan: [40.7831, -73.9712],
};

function getCoordinates(city: string, country: string, lat?: number | null, lng?: number | null): [number, number] {
  const cleanCity = (city || '').toLowerCase().trim();
  const cleanCountry = (country || '').toLowerCase().trim();

  // 1. Direct match for Delhi / India
  if (cleanCity.includes('delhi') || cleanCountry.includes('india')) {
    return [28.6139, 77.2090];
  }

  // 2. Exact coordinates if valid and non-default
  if (lat && lng && (Math.abs(lat - 40.7128) > 0.001 || Math.abs(lng - (-74.0060)) > 0.001)) {
    return [lat, lng];
  }

  // 3. Known city dictionary match
  for (const key of Object.keys(CITY_COORDINATES)) {
    if (cleanCity.includes(key) || cleanCountry.includes(key)) {
      return CITY_COORDINATES[key];
    }
  }

  return [28.6139, 77.2090];
}

export function MapSection({ latitude, longitude, city, country }: MapSectionProps) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const [lat, lng] = getCoordinates(city, country, latitude, longitude);

  if (!isClient) {
    return (
      <div className="py-8 border-t-2 border-gray-300">
        <h3 className="text-xl font-bold text-black mb-4">Where you'll be</h3>
        <div className="w-full h-80 bg-gray-100 rounded-2xl animate-pulse" />
      </div>
    );
  }

  // Dynamic Leaflet render
  const { MapContainer, TileLayer, Marker, Popup } = require('react-leaflet');
  const L = require('leaflet');

  // Fix default icon URL issue in Next.js/Leaflet
  const customIcon = L.divIcon({
    className: 'custom-leaflet-marker',
    html: `<div style="background-color: #FF385C; color: white; padding: 10px; border-radius: 50%; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 10px rgba(0,0,0,0.3); border: 2px solid white;"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg></div>`,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  return (
    <div className="py-8 border-t-2 border-gray-300">
      <h3 className="text-xl font-bold text-black mb-2">Where you'll be</h3>
      <p className="text-sm font-bold text-black mb-6 flex items-center gap-1">
        <MapPin className="w-4 h-4 text-rose-500" />
        <span>{city}, {country}</span>
      </p>

      <div className="w-full h-80 rounded-2xl overflow-hidden shadow-xs border-2 border-gray-300 z-0">
        <MapContainer
          key={`${lat}-${lng}`}
          center={[lat, lng]}
          zoom={13}
          scrollWheelZoom={false}
          className="w-full h-full"
        >
          <TileLayer
            attribution='&copy; <a href="https://carto.com/">CARTO</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
          />
          <Marker position={[lat, lng]} icon={customIcon}>
            <Popup>
              <div className="font-extrabold text-xs text-black">
                {city}, {country}
              </div>
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}
