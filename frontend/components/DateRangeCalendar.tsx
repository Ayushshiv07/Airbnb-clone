'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { BookedRange } from '../lib/types';

interface DateRangeCalendarProps {
  checkIn: string;
  checkOut: string;
  onChange: (checkIn: string, checkOut: string) => void;
  bookedRanges: BookedRange[];
}

export function DateRangeCalendar({
  checkIn,
  checkOut,
  onChange,
  bookedRanges,
}: DateRangeCalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfWeek = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
  };

  const isDateBooked = (dateStr: string) => {
    const target = new Date(dateStr);
    return bookedRanges.some((range) => {
      const start = new Date(range.check_in);
      const end = new Date(range.check_out);
      return target >= start && target < end;
    });
  };

  const isPastDate = (dateStr: string) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return new Date(dateStr) < today;
  };

  const handleDateClick = (dateStr: string) => {
    if (isPastDate(dateStr) || isDateBooked(dateStr)) return;

    if (!checkIn || (checkIn && checkOut)) {
      onChange(dateStr, '');
    } else if (checkIn && !checkOut) {
      if (new Date(dateStr) < new Date(checkIn)) {
        onChange(dateStr, '');
      } else {
        // Check if any date in between is booked
        const start = new Date(checkIn);
        const end = new Date(dateStr);
        let hasBlockedDate = false;

        const curr = new Date(start);
        while (curr < end) {
          const iso = curr.toISOString().split('T')[0];
          if (isDateBooked(iso)) {
            hasBlockedDate = true;
            break;
          }
          curr.setDate(curr.getDate() + 1);
        }

        if (hasBlockedDate) {
          onChange(dateStr, '');
        } else {
          onChange(checkIn, dateStr);
        }
      }
    }
  };

  const renderMonth = (year: number, month: number) => {
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfWeek(year, month);
    const monthName = new Date(year, month).toLocaleString('en-US', { month: 'long', year: 'numeric' });

    const days = [];
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-10" />);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const dateObj = new Date(year, month, day);
      const dateStr = dateObj.toISOString().split('T')[0];

      const isPast = isPastDate(dateStr);
      const isBooked = isDateBooked(dateStr);
      const isStart = checkIn === dateStr;
      const isEnd = checkOut === dateStr;
      const isInRange = checkIn && checkOut && dateObj > new Date(checkIn) && dateObj < new Date(checkOut);

      let dayClasses = 'h-10 w-10 flex items-center justify-center font-bold text-xs rounded-full cursor-pointer transition-all mx-auto ';

      if (isPast || isBooked) {
        dayClasses += 'text-gray-400 line-through cursor-not-allowed bg-gray-100';
      } else if (isStart || isEnd) {
        dayClasses += 'bg-gray-900 text-white font-extrabold shadow-md';
      } else if (isInRange) {
        dayClasses += 'bg-rose-100 text-black font-extrabold rounded-none w-full';
      } else {
        dayClasses += 'text-black font-bold hover:bg-gray-200 hover:border-2 hover:border-black';
      }

      days.push(
        <button
          key={day}
          type="button"
          onClick={() => handleDateClick(dateStr)}
          disabled={isPast || isBooked}
          className={dayClasses}
        >
          {day}
        </button>
      );
    }

    return (
      <div className="w-full">
        <h4 className="font-extrabold text-center text-sm text-black mb-4">
          {monthName}
        </h4>
        <div className="grid grid-cols-7 gap-1 text-center mb-2">
          {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((d) => (
            <span key={d} className="text-[11px] font-extrabold text-black uppercase">
              {d}
            </span>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-y-1">{days}</div>
      </div>
    );
  };

  const nextMonthYear = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1);

  return (
    <div className="border-2 border-gray-300 rounded-2xl p-6 bg-white shadow-xs">
      
      {/* Month Header Navigation */}
      <div className="flex items-center justify-between mb-6">
        <button
          type="button"
          onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1))}
          className="p-2 rounded-full hover:bg-gray-100 border border-gray-300 transition-colors"
        >
          <ChevronLeft className="w-5 h-5 text-black stroke-[2.5]" />
        </button>

        <button
          type="button"
          onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1))}
          className="p-2 rounded-full hover:bg-gray-100 border border-gray-300 transition-colors"
        >
          <ChevronRight className="w-5 h-5 text-black stroke-[2.5]" />
        </button>
      </div>

      {/* Two Month Side by Side Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {renderMonth(currentMonth.getFullYear(), currentMonth.getMonth())}
        {renderMonth(nextMonthYear.getFullYear(), nextMonthYear.getMonth())}
      </div>

      {/* Selected dates indicator */}
      {checkIn && (
        <div className="mt-6 pt-4 border-t-2 border-gray-200 flex items-center justify-between text-xs font-bold text-black">
          <span>
            Selected: <strong className="text-black font-extrabold">{checkIn}</strong>
            {checkOut && <> to <strong className="text-black font-extrabold">{checkOut}</strong></>}
          </span>
          <button
            type="button"
            onClick={() => onChange('', '')}
            className="text-rose-600 hover:underline font-extrabold"
          >
            Clear dates
          </button>
        </div>
      )}

    </div>
  );
}
