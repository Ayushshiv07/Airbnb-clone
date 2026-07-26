'use client';

import React, { useState } from 'react';
import { Star, MessageSquare } from 'lucide-react';
import { Review } from '../lib/types';
import { formatDate } from '../lib/utils';
import { api } from '../lib/api';
import { useToast } from '../contexts/ToastContext';

interface ReviewsSectionProps {
  reviews: Review[];
  avgRating?: number | null;
  reviewCount: number;
}

export function ReviewsSection({ reviews, avgRating, reviewCount }: ReviewsSectionProps) {
  return (
    <div className="py-8 border-t-2 border-gray-300">
      
      {/* Rating Summary Header */}
      <div className="flex items-center gap-2 mb-8">
        <Star className="w-6 h-6 fill-black text-black" />
        <h3 className="text-2xl font-extrabold text-black">
          {avgRating ? avgRating.toFixed(2) : 'No reviews yet'}
        </h3>
        {reviewCount > 0 && (
          <span className="text-xl font-extrabold text-black">
            · {reviewCount} {reviewCount === 1 ? 'review' : 'reviews'}
          </span>
        )}
      </div>

      {/* Reviews Grid */}
      {reviews.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((rev) => (
            <div key={rev.id} className="space-y-3 p-4 rounded-2xl border-2 border-gray-200 bg-gray-50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-800 text-white font-bold flex items-center justify-center overflow-hidden">
                  {rev.guest?.avatar_url ? (
                    <img src={rev.guest.avatar_url} alt={rev.guest.name} className="w-full h-full object-cover" />
                  ) : (
                    rev.guest?.name.charAt(0).toUpperCase() || 'G'
                  )}
                </div>
                <div>
                  <h4 className="font-extrabold text-sm text-black">
                    {rev.guest?.name || 'Guest'}
                  </h4>
                  <span className="text-xs text-gray-700 font-bold">{formatDate(rev.created_at)}</span>
                </div>
              </div>

              {/* Star rating */}
              <div className="flex items-center gap-1 text-amber-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < rev.rating ? 'fill-amber-500 text-amber-500' : 'text-gray-300'}`}
                  />
                ))}
              </div>

              <p className="text-sm text-black font-semibold leading-relaxed">
                {rev.comment}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-black font-bold text-sm">
          No reviews have been written for this property yet.
        </p>
      )}

    </div>
  );
}

interface ReviewFormProps {
  bookingId: number;
  onSuccess: () => void;
}

export function ReviewForm({ bookingId, onSuccess }: ReviewFormProps) {
  const { showToast } = useToast();
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!comment.trim()) {
      showToast('Please write a comment for your review', 'error');
      return;
    }

    setIsSubmitting(true);
    try {
      await api.post('/reviews/', {
        booking_id: bookingId,
        rating,
        comment: comment.trim(),
      });

      showToast('Review submitted successfully!', 'success');
      onSuccess();
    } catch (err: any) {
      showToast(err.message || 'Failed to submit review', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-50 p-6 rounded-2xl border-2 border-gray-300 space-y-4 my-4">
      <div className="flex items-center gap-2 text-black font-extrabold text-base">
        <MessageSquare className="w-5 h-5 text-rose-500" />
        <span>Leave a Review</span>
      </div>

      {/* Star Selector */}
      <div>
        <label className="block text-xs font-extrabold uppercase text-black mb-1">Rating</label>
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => setRating(star)}
              onMouseEnter={() => setHoverRating(star)}
              onMouseLeave={() => setHoverRating(0)}
              className="p-1 focus:outline-hidden"
            >
              <Star
                className={`w-6 h-6 transition-colors ${
                  star <= (hoverRating || rating)
                    ? 'fill-amber-400 text-amber-400'
                    : 'text-gray-300'
                }`}
              />
            </button>
          ))}
          <span className="text-xs text-black font-bold ml-2">{hoverRating || rating} / 5 stars</span>
        </div>
      </div>

      {/* Comment Textarea */}
      <div>
        <label className="block text-xs font-extrabold uppercase text-black mb-1">Comment</label>
        <textarea
          rows={3}
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Share your experience during the stay..."
          className="w-full p-3 rounded-xl bg-white border-2 border-gray-300 text-sm font-semibold text-black focus:outline-hidden"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-rose-500 hover:bg-rose-600 text-white font-extrabold px-5 py-2.5 rounded-xl text-sm transition-all shadow-xs cursor-pointer disabled:opacity-50"
      >
        {isSubmitting ? 'Submitting...' : 'Submit Review'}
      </button>
    </form>
  );
}
