'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Modal } from './Modal';
import { ShieldCheck, FileText, Map, Home, Compass, Heart, LayoutDashboard, PlusCircle, LogIn, UserPlus } from 'lucide-react';

export function Footer() {
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | 'sitemap' | null>(null);

  return (
    <footer className="border-t-2 border-gray-300 dark:border-zinc-800 py-6 bg-white dark:bg-zinc-900 mt-auto transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-800 dark:text-zinc-200 font-semibold gap-4">
        <p>© 2026 Airbnb Clone, Inc. · SDE Fullstack Assignment Demo</p>
        
        <div className="flex items-center gap-6 font-bold text-black dark:text-white">
          <button
            onClick={() => setActiveModal('privacy')}
            className="hover:underline cursor-pointer transition-colors"
          >
            Privacy
          </button>
          
          <button
            onClick={() => setActiveModal('terms')}
            className="hover:underline cursor-pointer transition-colors"
          >
            Terms
          </button>
          
          <button
            onClick={() => setActiveModal('sitemap')}
            className="hover:underline cursor-pointer transition-colors"
          >
            Sitemap
          </button>
        </div>
      </div>

      {/* Privacy Policy Modal */}
      <Modal
        isOpen={activeModal === 'privacy'}
        onClose={() => setActiveModal(null)}
        title="Privacy Policy"
        maxWidth="max-w-3xl"
      >
        <div className="space-y-6 text-sm text-gray-800 dark:text-zinc-200">
          <div className="flex items-center gap-3 pb-4 border-b border-gray-200 dark:border-zinc-800">
            <ShieldCheck className="w-8 h-8 text-rose-500 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Your Privacy Matters</h3>
              <p className="text-xs text-gray-500 dark:text-zinc-400">Last updated: July 2026 · Demo Security Standard</p>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 dark:text-white text-base mb-2">1. Information We Collect</h4>
            <p className="leading-relaxed">
              For this assignment demonstration, user accounts, listings, and reservations are stored in a local SQLite database (`airbnb.db`). No personal financial data, real credit card numbers, or real passwords are ever stored or transmitted.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 dark:text-white text-base mb-2">2. How Data is Used</h4>
            <p className="leading-relaxed">
              Your mock account information is used exclusively to evaluate marketplace workflows: booking date range overlap detection, wishlist persistence, host listing creation, and guest review submissions.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 dark:text-white text-base mb-2">3. Mocked Services</h4>
            <p className="leading-relaxed">
              All payment transactions, host messaging, identity verifications, and map tiles are simulated or powered by open-source clients (Leaflet/OpenStreetMap). No third-party data tracking cookies are set.
            </p>
          </div>

          <div className="pt-4 border-t border-gray-200 dark:border-zinc-800 flex justify-end">
            <button
              onClick={() => setActiveModal(null)}
              className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold px-6 py-2.5 rounded-xl cursor-pointer hover:bg-black transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </Modal>

      {/* Terms of Service Modal */}
      <Modal
        isOpen={activeModal === 'terms'}
        onClose={() => setActiveModal(null)}
        title="Terms of Service"
        maxWidth="max-w-3xl"
      >
        <div className="space-y-6 text-sm text-gray-800 dark:text-zinc-200">
          <div className="flex items-center gap-3 pb-4 border-b border-gray-200 dark:border-zinc-800">
            <FileText className="w-8 h-8 text-rose-500 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Platform Terms & Rules</h3>
              <p className="text-xs text-gray-500 dark:text-zinc-400">Assignment Demo Terms of Service</p>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 dark:text-white text-base mb-2">1. Guest & Host Agreement</h4>
            <p className="leading-relaxed">
              By using this Airbnb clone application, guests can reserve properties for valid date ranges, and hosts can manage property availability. Double-booking the same date range for a confirmed reservation is strictly prohibited by our backend database constraint validation.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 dark:text-white text-base mb-2">2. Cancellation & Conflict Policy</h4>
            <p className="leading-relaxed">
              Guests may cancel upcoming reservations prior to check-in. Hosts cannot delete property listings that have active future guest bookings (`HTTP 409 Conflict protection`).
            </p>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 dark:text-white text-base mb-2">3. Content Integrity</h4>
            <p className="leading-relaxed">
              Host property descriptions, pricing, and guest reviews should accurately reflect the stay experience. All ratings are automatically calculated upon review submission.
            </p>
          </div>

          <div className="pt-4 border-t border-gray-200 dark:border-zinc-800 flex justify-end">
            <button
              onClick={() => setActiveModal(null)}
              className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold px-6 py-2.5 rounded-xl cursor-pointer hover:bg-black transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </Modal>

      {/* Sitemap Modal */}
      <Modal
        isOpen={activeModal === 'sitemap'}
        onClose={() => setActiveModal(null)}
        title="Sitemap Navigation"
        maxWidth="max-w-2xl"
      >
        <div className="space-y-6">
          <div className="flex items-center gap-3 pb-4 border-b border-gray-200 dark:border-zinc-800">
            <Map className="w-8 h-8 text-rose-500 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">All Pages & Views</h3>
              <p className="text-xs text-gray-500 dark:text-zinc-400">Quick links to explore every page in the app</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              href="/"
              onClick={() => setActiveModal(null)}
              className="flex items-center gap-3 p-3.5 rounded-xl border border-gray-200 dark:border-zinc-700 hover:border-gray-900 hover:bg-gray-50 dark:hover:bg-zinc-800 transition-all group"
            >
              <Home className="w-5 h-5 text-rose-500 group-hover:scale-110 transition-transform" />
              <div>
                <span className="font-bold text-gray-900 dark:text-white text-sm block">Explore / Home</span>
                <span className="text-xs text-gray-500 dark:text-zinc-400">Search & filter stays</span>
              </div>
            </Link>

            <Link
              href="/trips"
              onClick={() => setActiveModal(null)}
              className="flex items-center gap-3 p-3.5 rounded-xl border border-gray-200 dark:border-zinc-700 hover:border-gray-900 hover:bg-gray-50 dark:hover:bg-zinc-800 transition-all group"
            >
              <Compass className="w-5 h-5 text-rose-500 group-hover:scale-110 transition-transform" />
              <div>
                <span className="font-bold text-gray-900 dark:text-white text-sm block">My Trips</span>
                <span className="text-xs text-gray-500 dark:text-zinc-400">Upcoming & past stays</span>
              </div>
            </Link>

            <Link
              href="/wishlist"
              onClick={() => setActiveModal(null)}
              className="flex items-center gap-3 p-3.5 rounded-xl border border-gray-200 dark:border-zinc-700 hover:border-gray-900 hover:bg-gray-50 dark:hover:bg-zinc-800 transition-all group"
            >
              <Heart className="w-5 h-5 text-rose-500 group-hover:scale-110 transition-transform" />
              <div>
                <span className="font-bold text-gray-900 dark:text-white text-sm block">Saved Wishlists</span>
                <span className="text-xs text-gray-500 dark:text-zinc-400">Your favorite properties</span>
              </div>
            </Link>

            <Link
              href="/host/dashboard"
              onClick={() => setActiveModal(null)}
              className="flex items-center gap-3 p-3.5 rounded-xl border border-gray-200 dark:border-zinc-700 hover:border-gray-900 hover:bg-gray-50 dark:hover:bg-zinc-800 transition-all group"
            >
              <LayoutDashboard className="w-5 h-5 text-rose-500 group-hover:scale-110 transition-transform" />
              <div>
                <span className="font-bold text-gray-900 dark:text-white text-sm block">Host Dashboard</span>
                <span className="text-xs text-gray-500 dark:text-zinc-400">Earnings & reservations</span>
              </div>
            </Link>

            <Link
              href="/host/listings/new"
              onClick={() => setActiveModal(null)}
              className="flex items-center gap-3 p-3.5 rounded-xl border border-gray-200 dark:border-zinc-700 hover:border-gray-900 hover:bg-gray-50 dark:hover:bg-zinc-800 transition-all group"
            >
              <PlusCircle className="w-5 h-5 text-rose-500 group-hover:scale-110 transition-transform" />
              <div>
                <span className="font-bold text-gray-900 dark:text-white text-sm block">Create Listing</span>
                <span className="text-xs text-gray-500 dark:text-zinc-400">Add a new property</span>
              </div>
            </Link>

            <Link
              href="/login"
              onClick={() => setActiveModal(null)}
              className="flex items-center gap-3 p-3.5 rounded-xl border border-gray-200 dark:border-zinc-700 hover:border-gray-900 hover:bg-gray-50 dark:hover:bg-zinc-800 transition-all group"
            >
              <LogIn className="w-5 h-5 text-rose-500 group-hover:scale-110 transition-transform" />
              <div>
                <span className="font-bold text-gray-900 dark:text-white text-sm block">Log In</span>
                <span className="text-xs text-gray-500 dark:text-zinc-400">Demo account access</span>
              </div>
            </Link>

            <Link
              href="/signup"
              onClick={() => setActiveModal(null)}
              className="flex items-center gap-3 p-3.5 rounded-xl border border-gray-200 dark:border-zinc-700 hover:border-gray-900 hover:bg-gray-50 dark:hover:bg-zinc-800 transition-all group sm:col-span-2"
            >
              <UserPlus className="w-5 h-5 text-rose-500 group-hover:scale-110 transition-transform" />
              <div>
                <span className="font-bold text-gray-900 dark:text-white text-sm block">Sign Up / Become a Host</span>
                <span className="text-xs text-gray-500 dark:text-zinc-400">Register new guest or host profile</span>
              </div>
            </Link>
          </div>

          <div className="pt-4 border-t border-gray-200 dark:border-zinc-800 flex justify-end">
            <button
              onClick={() => setActiveModal(null)}
              className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold px-6 py-2.5 rounded-xl cursor-pointer hover:bg-black transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </Modal>

    </footer>
  );
}
