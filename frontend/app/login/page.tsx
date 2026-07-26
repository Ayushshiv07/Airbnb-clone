'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../contexts/AuthContext';
import { useToast } from '../../contexts/ToastContext';
import { LogIn } from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();
  const { showToast } = useToast();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await login(email.trim(), password);
      showToast('Logged in successfully!', 'success');
      router.push('/');
    } catch (err: any) {
      showToast(err.message || 'Invalid email or password', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const fillDemoHost = () => {
    setEmail('host1@demo.com');
    setPassword('password123');
  };

  const fillDemoGuest = () => {
    setEmail('guest1@demo.com');
    setPassword('password123');
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 bg-gray-50 dark:bg-zinc-950">
      <div className="w-full max-w-md bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 rounded-3xl p-8 shadow-xl">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-8">
          <div className="w-12 h-12 rounded-full bg-rose-50 dark:bg-rose-950/50 text-rose-500 flex items-center justify-center mb-3">
            <LogIn className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Welcome back</h2>
          <p className="text-xs text-gray-500 dark:text-zinc-400 mt-1">
            Log in to manage your bookings and wishlist
          </p>
        </div>

        {/* Demo One-Click Fill Buttons */}
        <div className="mb-6 bg-gray-50 dark:bg-zinc-800/50 p-3 rounded-2xl border border-gray-200 dark:border-zinc-700">
          <span className="block text-[10px] font-bold uppercase text-gray-400 mb-2 text-center">
            One-Click Demo Fill:
          </span>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={fillDemoHost}
              className="py-1.5 px-3 rounded-xl bg-white dark:bg-zinc-900 text-xs font-semibold text-gray-800 dark:text-zinc-200 border border-gray-300 dark:border-zinc-700 hover:border-rose-500 transition-colors"
            >
              Demo Host
            </button>
            <button
              type="button"
              onClick={fillDemoGuest}
              className="py-1.5 px-3 rounded-xl bg-white dark:bg-zinc-900 text-xs font-semibold text-gray-800 dark:text-zinc-200 border border-gray-300 dark:border-zinc-700 hover:border-rose-500 transition-colors"
            >
              Demo Guest
            </button>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Email</label>
            <input
              type="email"
              required
              placeholder="e.g. host1@demo.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3.5 rounded-xl border border-gray-300 dark:border-zinc-700 bg-transparent text-sm text-gray-900 dark:text-white focus:outline-hidden"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-gray-500 mb-1">Password</label>
            <input
              type="password"
              required
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3.5 rounded-xl border border-gray-300 dark:border-zinc-700 bg-transparent text-sm text-gray-900 dark:text-white focus:outline-hidden"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-rose-500 hover:bg-rose-600 text-white font-semibold py-3.5 rounded-xl transition-all shadow-md mt-4 cursor-pointer disabled:opacity-50"
          >
            {isSubmitting ? 'Logging in...' : 'Log in'}
          </button>
        </form>

        {/* Footer Link */}
        <div className="mt-6 text-center text-xs text-gray-500 dark:text-zinc-400">
          Don't have an account?{' '}
          <Link href="/signup" className="text-rose-500 font-semibold hover:underline">
            Sign up
          </Link>
        </div>

      </div>
    </div>
  );
}
