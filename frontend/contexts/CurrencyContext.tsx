'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export interface CurrencyOption {
  code: string;
  name: string;
  symbol: string;
  rate: number; // exchange rate relative to USD
}

export interface LanguageOption {
  code: string;
  name: string;
  region: string;
}

export const CURRENCY_OPTIONS: CurrencyOption[] = [
  { code: 'USD', name: 'United States dollar', symbol: '$', rate: 1 },
  { code: 'INR', name: 'Indian rupee', symbol: '₹', rate: 83 },
  { code: 'EUR', name: 'Euro', symbol: '€', rate: 0.92 },
  { code: 'GBP', name: 'Pound sterling', symbol: '£', rate: 0.78 },
  { code: 'JPY', name: 'Japanese yen', symbol: '¥', rate: 155 },
  { code: 'AUD', name: 'Australian dollar', symbol: 'A$', rate: 1.52 },
  { code: 'CAD', name: 'Canadian dollar', symbol: 'C$', rate: 1.36 },
  { code: 'BRL', name: 'Brazilian real', symbol: 'R$', rate: 5.60 },
  { code: 'AED', name: 'Emirati dirham', symbol: 'AED', rate: 3.67 },
  { code: 'CHF', name: 'Swiss franc', symbol: 'CHF', rate: 0.89 },
];

export const LANGUAGE_OPTIONS: LanguageOption[] = [
  { code: 'en-US', name: 'English', region: 'United States' },
  { code: 'en-GB', name: 'English', region: 'United Kingdom' },
  { code: 'hi-IN', name: 'हिन्दी', region: 'भारत' },
  { code: 'kn-IN', name: 'ಕನ್ನಡ', region: 'ಭಾರತ' },
  { code: 'mr-IN', name: 'ಮರಾಠಿ', region: 'ಭಾರತ' },
  { code: 'en-IN', name: 'English', region: 'India' },
  { code: 'fr-FR', name: 'Français', region: 'France' },
  { code: 'de-DE', name: 'Deutsch', region: 'Deutschland' },
  { code: 'es-ES', name: 'Español', region: 'España' },
  { code: 'ja-JP', name: '日本語', region: '日本' },
  { code: 'id-ID', name: 'Bahasa Indonesia', region: 'Indonesia' },
];

interface CurrencyContextType {
  currentCurrency: CurrencyOption;
  currentLanguage: LanguageOption;
  isAutoTranslate: boolean;
  setCurrency: (code: string) => void;
  setLanguage: (code: string) => void;
  setIsAutoTranslate: (val: boolean) => void;
  formatPrice: (amountInUSD: number) => string;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currentCurrency, setCurrentCurrency] = useState<CurrencyOption>(CURRENCY_OPTIONS[0]);
  const [currentLanguage, setCurrentLanguage] = useState<LanguageOption>(LANGUAGE_OPTIONS[0]);
  const [isAutoTranslate, setIsAutoTranslate] = useState<boolean>(true);

  useEffect(() => {
    const savedCurr = localStorage.getItem('airbnb_currency');
    const savedLang = localStorage.getItem('airbnb_language');
    const savedTrans = localStorage.getItem('airbnb_translate');

    if (savedCurr) {
      const found = CURRENCY_OPTIONS.find((c) => c.code === savedCurr);
      if (found) setCurrentCurrency(found);
    }
    if (savedLang) {
      const found = LANGUAGE_OPTIONS.find((l) => l.code === savedLang);
      if (found) setCurrentLanguage(found);
    }
    if (savedTrans !== null) {
      setIsAutoTranslate(savedTrans === 'true');
    }
  }, []);

  const setCurrency = (code: string) => {
    const found = CURRENCY_OPTIONS.find((c) => c.code === code);
    if (found) {
      setCurrentCurrency(found);
      localStorage.setItem('airbnb_currency', found.code);
    }
  };

  const setLanguage = (code: string) => {
    const found = LANGUAGE_OPTIONS.find((l) => l.code === code);
    if (found) {
      setCurrentLanguage(found);
      localStorage.setItem('airbnb_language', found.code);
    }
  };

  const handleSetAutoTranslate = (val: boolean) => {
    setIsAutoTranslate(val);
    localStorage.setItem('airbnb_translate', String(val));
  };

  const formatPrice = (amountInUSD: number): string => {
    if (typeof amountInUSD !== 'number' || isNaN(amountInUSD)) return '$0';
    const converted = amountInUSD * currentCurrency.rate;
    
    // For JPY and INR, format with whole numbers or standard locale
    if (currentCurrency.code === 'JPY') {
      return `${currentCurrency.symbol}${Math.round(converted).toLocaleString()}`;
    }
    
    if (currentCurrency.code === 'INR') {
      return `${currentCurrency.symbol}${Math.round(converted).toLocaleString('en-IN')}`;
    }

    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currentCurrency.code,
      maximumFractionDigits: 0,
    }).format(converted);
  };

  return (
    <CurrencyContext.Provider
      value={{
        currentCurrency,
        currentLanguage,
        isAutoTranslate,
        setCurrency,
        setLanguage,
        setIsAutoTranslate: handleSetAutoTranslate,
        formatPrice,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
}
