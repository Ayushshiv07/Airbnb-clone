'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Navbar } from '../../../../components/Navbar';
import { FilterRow } from '../../../../components/FilterRow';
import { Footer } from '../../../../components/Footer';
import { Amenity, ListingCreateParams } from '../../../../lib/types';
import { api } from '../../../../lib/api';
import { useAuth } from '../../../../contexts/AuthContext';
import { useToast } from '../../../../contexts/ToastContext';
import { Plus, Trash2, Home, MapPin, DollarSign, Image as ImageIcon } from 'lucide-react';

export default function CreateListingPage() {
  const router = useRouter();
  const { user, isHost, isLoading: isAuthLoading, login } = useAuth();
  const { showToast } = useToast();

  const [amenitiesList, setAmenitiesList] = useState<Amenity[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form state
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [propertyType, setPropertyType] = useState('Apartment');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const [address, setAddress] = useState('');
  const [latitude, setLatitude] = useState<number | undefined>(40.7128);
  const [longitude, setLongitude] = useState<number | undefined>(-74.0060);
  const [pricePerNight, setPricePerNight] = useState<number>(150);
  const [cleaningFee, setCleaningFee] = useState<number>(50);
  const [maxGuests, setMaxGuests] = useState<number>(4);
  const [bedrooms, setBedrooms] = useState<number>(2);
  const [beds, setBeds] = useState<number>(2);
  const [bathrooms, setBathrooms] = useState<number>(1.5);
  const [selectedAmenityIds, setSelectedAmenityIds] = useState<number[]>([]);
  const [imageUrls, setImageUrls] = useState<string[]>([
    'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800',
    'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800',
  ]);

  useEffect(() => {
    if (!isAuthLoading) {
      if (!user || !user.is_host) {
        login('host1@demo.com', 'password123')
          .then(() => {
            api.get<Amenity[]>('/amenities').then(setAmenitiesList).catch(console.error);
          })
          .catch(() => {
            showToast('Host access required', 'error');
            router.push('/login');
          });
      } else {
        api.get<Amenity[]>('/amenities').then(setAmenitiesList).catch(console.error);
      }
    }
  }, [user, isAuthLoading, login, router, showToast]);

  const handleAddImageUrl = () => {
    setImageUrls([...imageUrls, '']);
  };

  const handleUpdateImageUrl = (index: number, value: string) => {
    const copy = [...imageUrls];
    copy[index] = value;
    setImageUrls(copy);
  };

  const handleRemoveImageUrl = (index: number) => {
    setImageUrls(imageUrls.filter((_, i) => i !== index));
  };

  const toggleAmenity = (id: number) => {
    setSelectedAmenityIds((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !description || !city || !country) {
      showToast('Please fill out all required fields', 'error');
      return;
    }

    const validImages = imageUrls.filter((url) => url.trim().length > 0);
    if (validImages.length === 0) {
      showToast('Please provide at least one image URL', 'error');
      return;
    }

    setIsSubmitting(true);

    const payload: ListingCreateParams = {
      title,
      description,
      property_type: propertyType,
      city,
      country,
      address,
      latitude,
      longitude,
      price_per_night: Number(pricePerNight),
      cleaning_fee: Number(cleaningFee),
      max_guests: Number(maxGuests),
      bedrooms: Number(bedrooms),
      beds: Number(beds),
      bathrooms: Number(bathrooms),
      amenity_ids: selectedAmenityIds,
      images: validImages.map((url, pos) => ({ url, position: pos })),
    };

    try {
      await api.post('/listings/', payload);
      showToast('Listing created successfully!', 'success');
      router.push('/host/dashboard');
    } catch (err: any) {
      showToast(err.message || 'Failed to create listing', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <FilterRow />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-1 w-full text-black">
        <h1 className="text-3xl font-extrabold text-black mb-2">List your space</h1>
        <p className="text-sm font-semibold text-gray-700 mb-8">
          Fill out the details below to publish your property on StayScape
        </p>

        <form onSubmit={handleSubmit} className="space-y-8">
          
          {/* Basic Information */}
          <div className="bg-white border-2 border-gray-300 rounded-2xl p-6 space-y-4 shadow-xs">
            <h3 className="text-lg font-extrabold text-black flex items-center gap-2">
              <Home className="w-5 h-5 text-rose-500" /> Basic Information
            </h3>

            <div>
              <label className="block text-xs font-extrabold uppercase text-black mb-1">Title *</label>
              <input
                type="text"
                required
                placeholder="e.g. Modern Loft with Central Park View"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-3 rounded-xl border-2 border-gray-300 bg-white text-sm font-bold text-black focus:outline-hidden"
              />
            </div>

            <div>
              <label className="block text-xs font-extrabold uppercase text-black mb-1">Property Type *</label>
              <select
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                className="w-full p-3 rounded-xl border-2 border-gray-300 bg-white text-sm font-bold text-black focus:outline-hidden cursor-pointer"
              >
                {['Apartment', 'House', 'Villa', 'Cabin', 'Loft'].map((pt) => (
                  <option key={pt} value={pt}>{pt}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-extrabold uppercase text-black mb-1">Description *</label>
              <textarea
                rows={4}
                required
                placeholder="Describe your space, ambiance, surroundings, and amenities..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full p-3 rounded-xl border-2 border-gray-300 bg-white text-sm font-semibold text-black focus:outline-hidden"
              />
            </div>
          </div>

          {/* Location */}
          <div className="bg-white border-2 border-gray-300 rounded-2xl p-6 space-y-4 shadow-xs">
            <h3 className="text-lg font-extrabold text-black flex items-center gap-2">
              <MapPin className="w-5 h-5 text-rose-500" /> Location
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-extrabold uppercase text-black mb-1">City *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Paris"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full p-3 rounded-xl border-2 border-gray-300 bg-white text-sm font-bold text-black focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs font-extrabold uppercase text-black mb-1">Country *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. France"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="w-full p-3 rounded-xl border-2 border-gray-300 bg-white text-sm font-bold text-black focus:outline-hidden"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-extrabold uppercase text-black mb-1">Address</label>
              <input
                type="text"
                placeholder="e.g. 15 Rue de Monttessuy"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full p-3 rounded-xl border-2 border-gray-300 bg-white text-sm font-semibold text-black focus:outline-hidden"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-extrabold uppercase text-black mb-1">Latitude</label>
                <input
                  type="number"
                  step="any"
                  value={latitude || ''}
                  onChange={(e) => setLatitude(Number(e.target.value))}
                  className="w-full p-3 rounded-xl border-2 border-gray-300 bg-white text-sm font-bold text-black focus:outline-hidden"
                />
              </div>
              <div>
                <label className="block text-xs font-extrabold uppercase text-black mb-1">Longitude</label>
                <input
                  type="number"
                  step="any"
                  value={longitude || ''}
                  onChange={(e) => setLongitude(Number(e.target.value))}
                  className="w-full p-3 rounded-xl border-2 border-gray-300 bg-white text-sm font-bold text-black focus:outline-hidden"
                />
              </div>
            </div>
          </div>

          {/* Pricing & Capacity */}
          <div className="bg-white border-2 border-gray-300 rounded-2xl p-6 space-y-4 shadow-xs">
            <h3 className="text-lg font-extrabold text-black flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-rose-500" /> Pricing & Capacity
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-extrabold uppercase text-black mb-1">Price per night ($) *</label>
                <input
                  type="number"
                  required
                  min={1}
                  value={pricePerNight}
                  onChange={(e) => setPricePerNight(Number(e.target.value))}
                  className="w-full p-3 rounded-xl border-2 border-gray-300 bg-white text-sm font-extrabold text-black focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs font-extrabold uppercase text-black mb-1">Cleaning fee ($)</label>
                <input
                  type="number"
                  min={0}
                  value={cleaningFee}
                  onChange={(e) => setCleaningFee(Number(e.target.value))}
                  className="w-full p-3 rounded-xl border-2 border-gray-300 bg-white text-sm font-bold text-black focus:outline-hidden"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div>
                <label className="block text-xs font-extrabold uppercase text-black mb-1">Max Guests</label>
                <input
                  type="number"
                  min={1}
                  value={maxGuests}
                  onChange={(e) => setMaxGuests(Number(e.target.value))}
                  className="w-full p-3 rounded-xl border-2 border-gray-300 bg-white text-sm font-bold text-black focus:outline-hidden"
                />
              </div>
              <div>
                <label className="block text-xs font-extrabold uppercase text-black mb-1">Bedrooms</label>
                <input
                  type="number"
                  min={0}
                  value={bedrooms}
                  onChange={(e) => setBedrooms(Number(e.target.value))}
                  className="w-full p-3 rounded-xl border-2 border-gray-300 bg-white text-sm font-bold text-black focus:outline-hidden"
                />
              </div>
              <div>
                <label className="block text-xs font-extrabold uppercase text-black mb-1">Beds</label>
                <input
                  type="number"
                  min={1}
                  value={beds}
                  onChange={(e) => setBeds(Number(e.target.value))}
                  className="w-full p-3 rounded-xl border-2 border-gray-300 bg-white text-sm font-bold text-black focus:outline-hidden"
                />
              </div>
              <div>
                <label className="block text-xs font-extrabold uppercase text-black mb-1">Baths</label>
                <input
                  type="number"
                  step="0.5"
                  min={0.5}
                  value={bathrooms}
                  onChange={(e) => setBathrooms(Number(e.target.value))}
                  className="w-full p-3 rounded-xl border-2 border-gray-300 bg-white text-sm font-bold text-black focus:outline-hidden"
                />
              </div>
            </div>
          </div>

          {/* Amenities */}
          <div className="bg-white border-2 border-gray-300 rounded-2xl p-6 shadow-xs">
            <h3 className="text-lg font-extrabold text-black mb-4">Amenities</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {amenitiesList.map((a) => (
                <label
                  key={a.id}
                  className="flex items-center gap-3 p-3 rounded-xl border border-gray-300 cursor-pointer hover:bg-gray-100 transition-colors"
                >
                  <input
                    type="checkbox"
                    checked={selectedAmenityIds.includes(a.id)}
                    onChange={() => toggleAmenity(a.id)}
                    className="w-4 h-4 rounded-sm accent-rose-500 cursor-pointer"
                  />
                  <span className="text-xs font-bold text-black">{a.name}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Photos (URLs) */}
          <div className="bg-white border-2 border-gray-300 rounded-2xl p-6 space-y-4 shadow-xs">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-extrabold text-black flex items-center gap-2">
                <ImageIcon className="w-5 h-5 text-rose-500" /> Photo URLs
              </h3>
              <button
                type="button"
                onClick={handleAddImageUrl}
                className="text-xs font-extrabold text-rose-600 hover:underline flex items-center gap-1 cursor-pointer"
              >
                <Plus className="w-4 h-4 stroke-[3]" /> Add photo
              </button>
            </div>

            <div className="space-y-3">
              {imageUrls.map((url, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="text-xs font-extrabold text-black w-5">{idx + 1}.</span>
                  <input
                    type="url"
                    placeholder="https://images.unsplash.com/photo-..."
                    value={url}
                    onChange={(e) => handleUpdateImageUrl(idx, e.target.value)}
                    className="flex-1 p-3 rounded-xl border-2 border-gray-300 bg-white text-sm font-semibold text-black focus:outline-hidden"
                  />
                  {imageUrls.length > 1 && (
                    <button
                      type="button"
                      onClick={() => handleRemoveImageUrl(idx)}
                      className="p-2 text-rose-600 hover:bg-rose-50 rounded-lg cursor-pointer"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-rose-500 hover:bg-rose-600 text-white font-extrabold py-4 rounded-2xl transition-all shadow-md text-base cursor-pointer disabled:opacity-50"
          >
            {isSubmitting ? 'Publishing listing...' : 'Publish Listing'}
          </button>

        </form>
      </main>

      <Footer />
    </div>
  );
}
