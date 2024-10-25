import React from 'react';
import { Clock } from 'lucide-react';
import { formatTime, formatDate } from '../utils/time';
import { TimezonePicker } from './TimezonePicker';

interface TimeZoneCardProps {
  label: string;
  time: Date;
  timezone: string;
  onTimeChange?: (time: string) => void;
  onTimezoneChange?: (timezone: string) => void;
  selectedTime: string;
  isEditable?: boolean;
  isLocal?: boolean;
}

export function TimeZoneCard({ 
  label, 
  time, 
  timezone, 
  onTimeChange,
  onTimezoneChange,
  selectedTime,
  isEditable = true,
  isLocal = false
}: TimeZoneCardProps) {
  return (
    <div className="bg-white/20 rounded-xl p-6 backdrop-blur-sm">
      <div className="flex items-center justify-center gap-2 mb-4">
        <Clock className="w-6 h-6 text-white" />
        <h2 className="text-2xl font-semibold text-white">
          {label}
          {isLocal && (
            <span className="ml-2 text-sm bg-white/20 px-2 py-1 rounded-full">
              System Default
            </span>
          )}
        </h2>
      </div>
      
      <div className="space-y-4">
        <div className="text-4xl font-bold text-white text-center">
          {formatTime(time, timezone)}
        </div>
        
        <div className="text-lg text-white/90 text-center">
          {formatDate(time, timezone)}
        </div>

        <input
          type="datetime-local"
          value={selectedTime}
          onChange={(e) => onTimeChange?.(e.target.value)}
          className={`w-full px-4 py-2 rounded-lg ${
            isEditable 
              ? 'bg-white/20 text-white border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50' 
              : 'bg-white/10 text-white/50 cursor-not-allowed'
          }`}
          disabled={!isEditable}
        />
        
        {onTimezoneChange && (
          <TimezonePicker
            value={timezone}
            onChange={onTimezoneChange}
          />
        )}
      </div>
    </div>
  );
}