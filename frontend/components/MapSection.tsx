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
  ooty: [11.4102, 76.6950],
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
  manhattan: [40.7831, -73.9712],
  soho: [40.7248, -73.9982],
};

function getCoordinates(city: string, country: string, lat?: number | null, lng?: number | null): [number, number] {
  // 1. Explicit listing coordinates if non-zero & non-default
  if (lat && lng && (Math.abs(lat - 40.7128) > 0.001 || Math.abs(lng - (-74.0060)) > 0.001)) {
    return [lat, lng];
  }

  const cleanCity = (city || '').toLowerCase().trim();
  const cleanCountry = (country || '').toLowerCase().trim();

  // 2. Exact city match
  for (const key of Object.keys(CITY_COORDINATES)) {
    if (cleanCity.includes(key)) {
      return CITY_COORDINATES[key];
    }
  }

  // 3. Exact country match
  for (const key of Object.keys(CITY_COORDINATES)) {
    if (cleanCountry.includes(key)) {
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

  // Custom location pin icon
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
            attribution='&copy; <a href="https://www.google.com/maps">Google Maps</a>'
            url="https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
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
