'use client';

import React, { useState } from 'react';
import { X, Languages, Globe } from 'lucide-react';
import { useCurrency, CURRENCY_OPTIONS, LANGUAGE_OPTIONS } from '../contexts/CurrencyContext';

interface LanguageCurrencyModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: 'language' | 'currency';
}

export function LanguageCurrencyModal({ isOpen, onClose, initialTab = 'language' }: LanguageCurrencyModalProps) {
  const [activeTab, setActiveTab] = useState<'language' | 'currency'>(initialTab);
  const {
    currentCurrency,
    currentLanguage,
    isAutoTranslate,
    setCurrency,
    setLanguage,
    setIsAutoTranslate,
  } = useCurrency();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity animate-fade-in"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative bg-white dark:bg-zinc-900 rounded-3xl shadow-2xl w-full max-w-4xl z-10 overflow-hidden flex flex-col max-h-[90vh] transition-all border-2 border-gray-300 dark:border-zinc-700 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header Bar */}
        <div className="px-6 pt-6 pb-2 border-b border-gray-200 dark:border-zinc-800">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={onClose}
              className="p-2 -ml-2 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5 text-black dark:text-white stroke-[2.5]" />
            </button>
          </div>

          {/* Navigation Tabs */}
          <div className="flex items-center gap-8 text-sm font-extrabold">
            <button
              onClick={() => setActiveTab('language')}
              className={`pb-3 border-b-2 transition-all cursor-pointer ${
                activeTab === 'language'
                  ? 'border-black dark:border-white text-black dark:text-white font-extrabold'
                  : 'border-transparent text-gray-500 dark:text-zinc-400 hover:text-black font-semibold'
              }`}
            >
              Language and region
            </button>
            <button
              onClick={() => setActiveTab('currency')}
              className={`pb-3 border-b-2 transition-all cursor-pointer ${
                activeTab === 'currency'
                  ? 'border-black dark:border-white text-black dark:text-white font-extrabold'
                  : 'border-transparent text-gray-500 dark:text-zinc-400 hover:text-black font-semibold'
              }`}
            >
              Currency
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 text-black dark:text-white">
          {activeTab === 'language' ? (
            <div className="space-y-8">
              
              {/* Translation Card */}
              <div className="bg-gray-50 dark:bg-zinc-800/80 p-5 rounded-2xl border border-gray-200 dark:border-zinc-700 flex items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 font-extrabold text-sm text-black dark:text-white">
                    <span>Translation</span>
                    <Languages className="w-4 h-4 text-gray-700 dark:text-zinc-300" />
                  </div>
                  <p className="text-xs font-medium text-gray-600 dark:text-zinc-400 mt-1">
                    Automatically translate descriptions and reviews to English.
                  </p>
                </div>

                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={isAutoTranslate}
                    onChange={(e) => setIsAutoTranslate(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-300 peer-focus:outline-hidden rounded-full peer dark:bg-zinc-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-black dark:peer-checked:bg-rose-500"></div>
                </label>
              </div>

              {/* Suggested Languages */}
              <div>
                <h4 className="font-extrabold text-base mb-4 text-black dark:text-white">Suggested languages and regions</h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                  {LANGUAGE_OPTIONS.slice(0, 5).map((lang) => {
                    const isSelected = currentLanguage.code === lang.code;
                    return (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code);
                          onClose();
                        }}
                        className={`p-3.5 rounded-2xl text-left border-2 transition-all cursor-pointer ${
                          isSelected
                            ? 'border-black dark:border-white bg-gray-100 dark:bg-zinc-800'
                            : 'border-transparent hover:bg-gray-100 dark:hover:bg-zinc-800'
                        }`}
                      >
                        <p className="text-sm font-extrabold text-black dark:text-white">{lang.name}</p>
                        <p className="text-xs font-semibold text-gray-500 dark:text-zinc-400">{lang.region}</p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Choose a language and region */}
              <div>
                <h4 className="font-extrabold text-base mb-4 text-black dark:text-white">Choose a language and region</h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                  {LANGUAGE_OPTIONS.map((lang) => {
                    const isSelected = currentLanguage.code === lang.code;
                    return (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code);
                          onClose();
                        }}
                        className={`p-3.5 rounded-2xl text-left border-2 transition-all cursor-pointer ${
                          isSelected
                            ? 'border-black dark:border-white bg-gray-100 dark:bg-zinc-800'
                            : 'border-transparent hover:bg-gray-100 dark:hover:bg-zinc-800'
                        }`}
                      >
                        <p className="text-sm font-extrabold text-black dark:text-white">{lang.name}</p>
                        <p className="text-xs font-semibold text-gray-500 dark:text-zinc-400">{lang.region}</p>
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>
          ) : (
            <div>
              <h4 className="font-extrabold text-base mb-4 text-black dark:text-white">Choose a currency</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                {CURRENCY_OPTIONS.map((curr) => {
                  const isSelected = currentCurrency.code === curr.code;
                  return (
                    <button
                      key={curr.code}
                      onClick={() => {
                        setCurrency(curr.code);
                        onClose();
                      }}
                      className={`p-4 rounded-2xl text-left border-2 transition-all cursor-pointer ${
                        isSelected
                          ? 'border-black dark:border-white bg-gray-100 dark:bg-zinc-800'
                          : 'border-transparent hover:bg-gray-100 dark:hover:bg-zinc-800'
                      }`}
                    >
                      <p className="text-sm font-extrabold text-black dark:text-white">{curr.name}</p>
                      <p className="text-xs font-bold text-gray-500 dark:text-zinc-400 mt-1">
                        {curr.code} – {curr.symbol}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
