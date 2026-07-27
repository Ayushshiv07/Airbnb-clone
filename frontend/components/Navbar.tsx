'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '../contexts/AuthContext';
import { useCurrency } from '../contexts/CurrencyContext';
import { LanguageCurrencyModal } from './LanguageCurrencyModal';
import { Search, Menu, User as UserIcon, Heart, Compass, LogOut, Moon, Sun, LayoutDashboard, PlusCircle, ArrowLeftRight, Globe } from 'lucide-react';

interface NavbarProps {
  onSearchClick?: () => void;
  isSearchExpanded?: boolean;
}

export function Navbar({ onSearchClick, isSearchExpanded }: NavbarProps) {
  const router = useRouter();
  const { user, isHost, logout, toggleHostMode } = useAuth();
  const { currentCurrency, currentLanguage } = useCurrency();
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangModalOpen, setIsLangModalOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    return () => document.removeEventListener('mousedown', handleOutsideClick);
  }, []);

  const toggleDarkMode = () => {
    setIsDark((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      return next;
    });
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-white dark:bg-zinc-900 border-b border-gray-200 dark:border-zinc-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo & Mode Badge */}
            <div className="flex items-center gap-3">
              <Link href="/" className="flex items-center gap-2 text-rose-500 hover:opacity-90 transition-opacity">
                <svg
                  width="36"
                  height="36"
                  style={{ width: '36px', height: '36px', minWidth: '36px', minHeight: '36px' }}
                  className="w-9 h-9 fill-current flex-shrink-0"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16 1c2.008 0 3.463.963 4.751 3.269l.533 1.025c1.954 3.83 6.114 12.54 7.1 14.836l.145.353c.667 1.591.91 2.472.96 3.396l.011.315c0 4.108-3.141 7.806-7.5 7.806-2.585 0-4.83-1.341-6.195-3.376l-.805-1.304-.805 1.304c-1.365 2.035-3.61 3.376-6.195 3.376-4.359 0-7.5-3.698-7.5-7.806 0-.962.247-1.897.876-3.415l.24-.549c.986-2.297 5.146-11.007 7.1-14.836l.533-1.025C12.537 1.963 13.992 1 16 1zm0 2c-1.24 0-2.228.625-3.23 2.457l-.316.602c-1.87 3.665-5.975 12.261-6.937 14.509l-.16.376c-.538 1.298-.757 2.016-.757 2.856 0 3.019 2.274 5.806 5.5 5.806 2.038 0 3.865-1.127 4.966-2.915l.434-.739.434.739c1.101 1.788 2.928 2.915 4.966 2.915 3.226 0 5.5-2.787 5.5-5.806 0-.793-.207-1.488-.707-2.73l-.21-.497c-.962-2.248-5.067-10.844-6.937-14.509l-.316-.602C18.228 3.625 17.24 3 16 3zm0 13a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9zm0 2a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5z" />
                </svg>
                <span className="font-bold text-xl tracking-tight hidden sm:inline">airbnb</span>
              </Link>

              {/* Mode Badge Indicator */}
              {user?.is_host && (
                <span className={`text-[10px] uppercase tracking-wider font-extrabold px-2.5 py-1 rounded-full border transition-all ${
                  isHost 
                    ? 'bg-rose-500 text-white border-rose-600 shadow-xs' 
                    : 'bg-gray-100 text-gray-800 border-gray-300 dark:bg-zinc-800 dark:text-zinc-200'
                }`}>
                  {isHost ? 'Host Mode' : 'Guest Mode'}
                </span>
              )}
            </div>

            {/* Center Navigation Content */}
            {isHost ? (
              /* Host Workspace Navigation Links */
              <div className="hidden md:flex items-center gap-6 font-bold text-sm text-black dark:text-white">
                <Link href="/host/dashboard" className="hover:text-rose-500 transition-colors flex items-center gap-1.5">
                  <LayoutDashboard className="w-4 h-4 text-rose-500" />
                  <span>Host Dashboard</span>
                </Link>
                <Link href="/host/listings/new" className="hover:text-rose-500 transition-colors flex items-center gap-1.5">
                  <PlusCircle className="w-4 h-4 text-rose-500" />
                  <span>Create Listing</span>
                </Link>
              </div>
            ) : (
              /* Guest Search Pill */
              <button
                onClick={onSearchClick}
                className={`flex items-center gap-3 px-4 py-2 border-2 border-gray-300 dark:border-zinc-600 rounded-full shadow-xs hover:shadow-md transition-all cursor-pointer bg-white dark:bg-zinc-800 text-sm font-bold text-black dark:text-white ${
                  isSearchExpanded ? 'opacity-0 pointer-events-none' : 'opacity-100'
                }`}
              >
                <span className="pl-1 font-bold">Anywhere</span>
                <span className="h-4 w-px bg-gray-400 dark:bg-zinc-600" />
                <span className="font-bold">Any week</span>
                <span className="h-4 w-px bg-gray-400 dark:bg-zinc-600" />
                <span className="text-gray-800 dark:text-zinc-200 font-semibold">Add guests</span>
                <div className="w-8 h-8 rounded-full bg-rose-500 text-white flex items-center justify-center ml-1 shadow-xs">
                  <Search className="w-4 h-4 stroke-[2.5]" />
                </div>
              </button>
            )}

            {/* User & Mode Controls */}
            <div className="flex items-center gap-2 sm:gap-3">
              
              {/* Host Mode Switcher Button */}
              {user?.is_host && (
                <button
                  onClick={toggleHostMode}
                  className={`hidden md:flex items-center gap-1.5 px-3.5 py-2 text-xs font-extrabold rounded-full transition-all cursor-pointer border-2 ${
                    isHost
                      ? 'border-gray-900 bg-gray-900 text-white hover:bg-black'
                      : 'border-gray-900 bg-white text-black hover:bg-gray-100'
                  }`}
                >
                  <ArrowLeftRight className="w-3.5 h-3.5" />
                  <span>{isHost ? 'Switch to Guest Mode' : 'Switch to Host Mode'}</span>
                </button>
              )}

              {user && !user.is_host && (
                <Link
                  href="/signup"
                  className="hidden md:inline-block px-3.5 py-2 text-xs font-bold rounded-full border-2 border-gray-900 text-black hover:bg-black hover:text-white transition-colors"
                >
                  Become a Host
                </Link>
              )}

              {/* Language & Currency Globe Button */}
              <button
                onClick={() => setIsLangModalOpen(true)}
                className="p-2.5 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800 text-gray-800 dark:text-zinc-300 transition-colors cursor-pointer flex items-center gap-1 font-bold text-xs"
                title="Language & Currency"
              >
                <Globe className="w-4 h-4 text-black dark:text-white" />
                <span className="hidden lg:inline text-[11px] font-extrabold uppercase">{currentCurrency.code}</span>
              </button>

              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className="p-2.5 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800 text-gray-800 dark:text-zinc-300 transition-colors cursor-pointer"
                title="Toggle Dark Mode"
              >
                {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>

              {/* Avatar & Dropdown Menu */}
              <div className="relative" ref={menuRef}>
                <button
                  onClick={() => setIsMenuOpen((prev) => !prev)}
                  className="flex items-center gap-3 p-1.5 pl-3 border-2 border-gray-400 rounded-full hover:shadow-md transition-all cursor-pointer bg-white dark:bg-zinc-800"
                >
                  <Menu className="w-4 h-4 text-black dark:text-white" />
                  <div className="w-8 h-8 rounded-full bg-gray-800 text-white flex items-center justify-center overflow-hidden font-bold text-sm">
                    {user?.avatar_url ? (
                      <img src={user.avatar_url} alt={user.name} className="w-full h-full object-cover" />
                    ) : user ? (
                      user.name.charAt(0).toUpperCase()
                    ) : (
                      <UserIcon className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {/* Dropdown items */}
                {isMenuOpen && (
                  <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-zinc-900 rounded-2xl shadow-2xl border-2 border-gray-300 dark:border-zinc-700 py-2 z-50 text-sm animate-in fade-in duration-150">
                    {user ? (
                      <>
                        <div className="px-4 py-3 border-b-2 border-gray-200 dark:border-zinc-800">
                          <p className="font-extrabold text-black dark:text-white truncate">{user.name}</p>
                          <p className="text-xs font-semibold text-gray-600 dark:text-zinc-400 truncate">{user.email}</p>
                          {user.is_host && (
                            <span className="inline-block mt-1.5 text-[10px] uppercase tracking-wider font-extrabold text-white bg-rose-500 px-2 py-0.5 rounded-full">
                              {isHost ? 'Host Mode Active' : 'Guest Mode Active'}
                            </span>
                          )}
                        </div>

                        {/* Guest links */}
                        <Link
                          href="/trips"
                          onClick={() => setIsMenuOpen(false)}
                          className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-100 dark:hover:bg-zinc-800 text-black dark:text-white font-bold transition-colors"
                        >
                          <Compass className="w-4 h-4 text-rose-500" />
                          My Trips
                        </Link>

                        <Link
                          href="/wishlist"
                          onClick={() => setIsMenuOpen(false)}
                          className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-100 dark:hover:bg-zinc-800 text-black dark:text-white font-bold transition-colors"
                        >
                          <Heart className="w-4 h-4 text-rose-500" />
                          Wishlist
                        </Link>

                        {/* Language & Currency in Menu */}
                        <button
                          onClick={() => {
                            setIsMenuOpen(false);
                            setIsLangModalOpen(true);
                          }}
                          className="w-full text-left flex items-center gap-3 px-4 py-2.5 hover:bg-gray-100 dark:hover:bg-zinc-800 text-black dark:text-white font-bold transition-colors cursor-pointer"
                        >
                          <Globe className="w-4 h-4 text-rose-500" />
                          <span>Language & Currency ({currentCurrency.code})</span>
                        </button>

                        {/* Host links */}
                        {user.is_host && (
                          <>
                            <div className="border-t-2 border-gray-200 dark:border-zinc-800 my-1" />
                            <Link
                              href="/host/dashboard"
                              onClick={() => setIsMenuOpen(false)}
                              className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-100 dark:hover:bg-zinc-800 text-black dark:text-white font-extrabold transition-colors"
                            >
                              <LayoutDashboard className="w-4 h-4 text-rose-500" />
                              Host Dashboard
                            </Link>
                            <Link
                              href="/host/listings/new"
                              onClick={() => setIsMenuOpen(false)}
                              className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-100 dark:hover:bg-zinc-800 text-black dark:text-white font-extrabold transition-colors"
                            >
                              <PlusCircle className="w-4 h-4 text-rose-500" />
                              Create New Listing
                            </Link>
                            <button
                              onClick={() => {
                                toggleHostMode();
                                setIsMenuOpen(false);
                              }}
                              className="w-full text-left flex items-center justify-between px-4 py-2.5 hover:bg-gray-100 dark:hover:bg-zinc-800 text-rose-600 font-extrabold transition-colors cursor-pointer"
                            >
                              <span>Switch to {isHost ? 'Guest Mode' : 'Host Mode'}</span>
                              <ArrowLeftRight className="w-3.5 h-3.5" />
                            </button>
                          </>
                        )}

                        <div className="border-t-2 border-gray-200 dark:border-zinc-800 my-1" />
                        
                        <button
                          onClick={() => {
                            logout();
                            setIsMenuOpen(false);
                            router.push('/');
                          }}
                          className="w-full text-left flex items-center gap-3 px-4 py-2.5 hover:bg-rose-50 dark:hover:bg-rose-950/30 text-rose-600 font-extrabold transition-colors cursor-pointer"
                        >
                          <LogOut className="w-4 h-4" />
                          Log out
                        </button>
                      </>
                    ) : (
                      <>
                        <Link
                          href="/login"
                          onClick={() => setIsMenuOpen(false)}
                          className="block px-4 py-2.5 font-extrabold text-black dark:text-white hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors"
                        >
                          Log in
                        </Link>
                        <Link
                          href="/signup"
                          onClick={() => setIsMenuOpen(false)}
                          className="block px-4 py-2.5 font-bold text-gray-800 dark:text-zinc-200 hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors"
                        >
                          Sign up
                        </Link>
                        <button
                          onClick={() => {
                            setIsMenuOpen(false);
                            setIsLangModalOpen(true);
                          }}
                          className="w-full text-left flex items-center gap-3 px-4 py-2.5 hover:bg-gray-100 dark:hover:bg-zinc-800 text-black dark:text-white font-bold transition-colors cursor-pointer"
                        >
                          <Globe className="w-4 h-4 text-rose-500" />
                          <span>Language & Currency ({currentCurrency.code})</span>
                        </button>
                      </>
                    )}
                  </div>
                )}
              </div>

            </div>

          </div>
        </div>
      </header>

      {/* Language and Currency Modal */}
      <LanguageCurrencyModal
        isOpen={isLangModalOpen}
        onClose={() => setIsLangModalOpen(false)}
      />
    </>
  );
}
