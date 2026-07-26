'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, AuthResponse } from '../lib/types';
import { api } from '../lib/api';

interface AuthContextType {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  isHost: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string, isHost: boolean) => Promise<void>;
  logout: () => void;
  toggleHostMode: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isHostMode, setIsHostMode] = useState(false);

  useEffect(() => {
    // Hydrate token and user from localStorage on client mount
    const storedToken = localStorage.getItem('airbnb_token');
    const storedHostMode = localStorage.getItem('airbnb_host_mode') === 'true';
    setIsHostMode(storedHostMode);

    if (storedToken) {
      setToken(storedToken);
      api
        .get<User>('/auth/me')
        .then((userData) => {
          setUser(userData);
        })
        .catch(() => {
          // Token expired or invalid — clear
          localStorage.removeItem('airbnb_token');
          setToken(null);
          setUser(null);
        })
        .finally(() => setIsLoading(false));
    } else {
      setIsLoading(false);
    }
  }, []);

  const login = async (email: string, password: string) => {
    const res = await api.post<AuthResponse>('/auth/login', { email, password });
    localStorage.setItem('airbnb_token', res.token);
    setToken(res.token);
    setUser(res.user);
    if (res.user.is_host) {
      setIsHostMode(true);
      localStorage.setItem('airbnb_host_mode', 'true');
    }
  };

  const signup = async (name: string, email: string, password: string, isHost: boolean) => {
    const res = await api.post<AuthResponse>('/auth/register', { name, email, password, is_host: isHost });
    localStorage.setItem('airbnb_token', res.token);
    setToken(res.token);
    setUser(res.user);
    if (isHost) {
      setIsHostMode(true);
      localStorage.setItem('airbnb_host_mode', 'true');
    }
  };

  const logout = () => {
    localStorage.removeItem('airbnb_token');
    localStorage.removeItem('airbnb_host_mode');
    setToken(null);
    setUser(null);
    setIsHostMode(false);
  };

  const toggleHostMode = () => {
    setIsHostMode((prev) => {
      const next = !prev;
      localStorage.setItem('airbnb_host_mode', String(next));
      return next;
    });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isLoading,
        isHost: isHostMode && (user?.is_host ?? false),
        login,
        signup,
        logout,
        toggleHostMode,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
