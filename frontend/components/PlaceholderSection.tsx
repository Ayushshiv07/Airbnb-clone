'use client';

import React from 'react';
import { Clock } from 'lucide-react';

interface PlaceholderSectionProps {
  title: string;
  description: string;
}

export function PlaceholderSection({ title, description }: PlaceholderSectionProps) {
  return (
    <div className="border-2 border-dashed border-gray-400 rounded-2xl p-6 bg-gray-50 flex items-start gap-4 my-6">
      <div className="p-3 bg-amber-100 text-amber-800 rounded-xl border border-amber-300">
        <Clock className="w-6 h-6" />
      </div>
      <div>
        <div className="flex items-center gap-2">
          <h4 className="font-bold text-black text-base">{title}</h4>
          <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-amber-200 text-amber-900 border border-amber-400">
            Coming Soon
          </span>
        </div>
        <p className="text-sm font-semibold text-black mt-1 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
