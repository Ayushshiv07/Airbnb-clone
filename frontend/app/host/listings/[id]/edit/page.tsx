'use client';

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Navbar } from '../../../../../components/Navbar';
import { Amenity, ListingDetail } from '../../../../../lib/types';
import { api } from '../../../../../lib/api';
import { useAuth } from '../../../../../contexts/AuthContext';
import { useToast } from '../../../../../contexts/ToastContext';
import { Plus, Trash2, Home, MapPin, DollarSign, Image as ImageIcon } from 'lucide-react';

export default function EditListingPage() {
  const params = useParams();
  const router = useRouter();
  const listingId = params.id;

  const { user, isLoading: isAuthLoading } = useAuth();
  const { showToast } = useToast();

  const [amenitiesList, setAmenitiesList] = useState<Amenity[]>([]);
  const [isLoading, setIsLoading] = useState(true);
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
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  useEffect(() => {
    if (!isAuthLoading && (!user || !user.is_host)) {
      showToast('Host access required', 'error');
      router.push('/');
      return;
    }

    if (listingId) {
      setIsLoading(true);
      Promise.all([
        api.get<Amenity[]>('/amenities'),
        api.get<ListingDetail>(`/listings/${listingId}`),
      ])
        .then(([amenitiesData, listingData]) => {
          setAmenitiesList(amenitiesData);
          
          if (listingData.host.id !== user?.id) {
            showToast('You can only edit your own listings', 'error');
            router.push('/host/dashboard');
            return;
          }

          setTitle(listingData.title);
          setDescription(listingData.description);
          setPropertyType(listingData.property_type);
          setCity(listingData.city);
          setCountry(listingData.country);
          setAddress(listingData.address || '');
          setLatitude(listingData.latitude || 40.7128);
          setLongitude(listingData.longitude || -74.0060);
          setPricePerNight(listingData.price_per_night);
          setCleaningFee(listingData.cleaning_fee);
          setMaxGuests(listingData.max_guests);
          setBedrooms(listingData.bedrooms);
          setBeds(listingData.beds);
          setBathrooms(listingData.bathrooms);
          setSelectedAmenityIds(listingData.amenities.map((a) => a.id));
          setImageUrls(listingData.images.map((img) => img.url));
        })
        .catch((err) => {
          showToast('Failed to load listing details', 'error');
          router.push('/host/dashboard');
        })
        .finally(() => setIsLoading(false));
    }
  }, [listingId, user, isAuthLoading, router, showToast]);

  const handleAddImageUrl = () => setImageUrls([...imageUrls, '']);

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
    const validImages = imageUrls.filter((url) => url.trim().length > 0);
    if (validImages.length === 0) {
      showToast('Please provide at least one image URL', 'error');
      return;
    }

    setIsSubmitting(true);

    const payload = {
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
      await api.put(`/listings/${listingId}`, payload);
      showToast('Listing updated successfully!', 'success');
      router.push('/host/dashboard');
    } catch (err: any) {
      showToast(err.message || 'Failed to update listing', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="max-w-3xl mx-auto p-8 space-y-4">
          <div className="h-10 bg-gray-200 dark:bg-zinc-800 rounded-xl animate-pulse" />
          <div className="h-64 bg-gray-200 dark:bg-zinc-800 rounded-xl animate-pulse" />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-1 w-full">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Edit Listing</h1>
        <p className="text-sm text-gray-500 dark:text-zinc-400 mb-8">
          Update pricing, details, or amenities for "{title}"
        </p>

        <form onSubmit={handleSubmit} className="space-y-8">
          
          {/* Basic Information */}
          <div className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-2xl p-6 space-y-4">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <Home className="w-5 h-5 text-rose-500" /> Basic Information
            </h3>

            <div>
              <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Title *</label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-3 rounded-xl border border-gray-300 dark:border-zinc-700 bg-transparent text-sm text-gray-900 dark:text-white focus:outline-hidden"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Property Type *</label>
              <select
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                className="w-full p-3 rounded-xl border border-gray-300 dark:border-zinc-700 bg-transparent text-sm text-gray-900 dark:text-white focus:outline-hidden"
              >
                {['Apartment', 'House', 'Villa', 'Cabin', 'Loft'].map((pt) => (
                  <option key={pt} value={pt} className="dark:bg-zinc-900">{pt}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Description *</label>
              <textarea
                rows={4}
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full p-3 rounded-xl border border-gray-300 dark:border-zinc-700 bg-transparent text-sm text-gray-900 dark:text-white focus:outline-hidden"
              />
            </div>
          </div>

          {/* Location */}
          <div className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-2xl p-6 space-y-4">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <MapPin className="w-5 h-5 text-rose-500" /> Location
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase text-gray-500 mb-1">City *</label>
                <input
                  type="text"
                  required
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full p-3 rounded-xl border border-gray-300 dark:border-zinc-700 bg-transparent text-sm text-gray-900 dark:text-white focus:outline-hidden"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Country *</label>
                <input
                  type="text"
                  required
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="w-full p-3 rounded-xl border border-gray-300 dark:border-zinc-700 bg-transparent text-sm text-gray-900 dark:text-white focus:outline-hidden"
                />
              </div>
            </div>
          </div>

          {/* Pricing & Capacity */}
          <div className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-2xl p-6 space-y-4">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-rose-500" /> Pricing & Capacity
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Price per night ($) *</label>
                <input
                  type="number"
                  required
                  min={1}
                  value={pricePerNight}
                  onChange={(e) => setPricePerNight(Number(e.target.value))}
                  className="w-full p-3 rounded-xl border border-gray-300 dark:border-zinc-700 bg-transparent text-sm text-gray-900 dark:text-white font-semibold"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Cleaning fee ($)</label>
                <input
                  type="number"
                  min={0}
                  value={cleaningFee}
                  onChange={(e) => setCleaningFee(Number(e.target.value))}
                  className="w-full p-3 rounded-xl border border-gray-300 dark:border-zinc-700 bg-transparent text-sm text-gray-900 dark:text-white"
                />
              </div>
            </div>
          </div>

          {/* Amenities */}
          <div className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-2xl p-6">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Amenities</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {amenitiesList.map((a) => (
                <label
                  key={a.id}
                  className="flex items-center gap-3 p-3 rounded-xl border border-gray-200 dark:border-zinc-800 cursor-pointer hover:bg-gray-50 dark:hover:bg-zinc-800 transition-colors"
                >
                  <input
                    type="checkbox"
                    checked={selectedAmenityIds.includes(a.id)}
                    onChange={() => toggleAmenity(a.id)}
                    className="w-4 h-4 rounded-sm accent-rose-500"
                  />
                  <span className="text-xs font-medium text-gray-800 dark:text-zinc-200">{a.name}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Photos */}
          <div className="bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-2xl p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center gap-2">
                <ImageIcon className="w-5 h-5 text-rose-500" /> Photo URLs
              </h3>
              <button
                type="button"
                onClick={handleAddImageUrl}
                className="text-xs font-semibold text-rose-500 hover:underline flex items-center gap-1 cursor-pointer"
              >
                <Plus className="w-4 h-4" /> Add photo
              </button>
            </div>

            <div className="space-y-3">
              {imageUrls.map((url, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="text-xs font-bold text-gray-400 w-5">{idx + 1}.</span>
                  <input
                    type="url"
                    value={url}
                    onChange={(e) => handleUpdateImageUrl(idx, e.target.value)}
                    className="flex-1 p-3 rounded-xl border border-gray-300 dark:border-zinc-700 bg-transparent text-sm text-gray-900 dark:text-white"
                  />
                  {imageUrls.length > 1 && (
                    <button
                      type="button"
                      onClick={() => handleRemoveImageUrl(idx)}
                      className="p-2 text-rose-500 hover:bg-rose-50 rounded-lg"
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
            className="w-full bg-rose-500 hover:bg-rose-600 text-white font-semibold py-4 rounded-2xl transition-all shadow-md text-base cursor-pointer disabled:opacity-50"
          >
            {isSubmitting ? 'Saving changes...' : 'Save Changes'}
          </button>

        </form>
      </main>
    </div>
  );
}
