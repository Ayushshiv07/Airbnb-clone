import type { Metadata } from 'next';
import './globals.css';
import { AuthProvider } from '../contexts/AuthContext';
import { ToastProvider } from '../contexts/ToastContext';
import { CurrencyProvider } from '../contexts/CurrencyContext';
import { Toast } from '../components/Toast';

export const metadata: Metadata = {
  title: 'StayScape — Luxury Vacation Rentals & Unique Stays',
  description: 'Discover beach houses, Himalayan chalets, urban lofts, and handpicked stays around the world.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-white dark:bg-zinc-900 text-gray-900 dark:text-white">
        <AuthProvider>
          <CurrencyProvider>
            <ToastProvider>
              {children}
              <Toast />
            </ToastProvider>
          </CurrencyProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
