import React, { useState, useEffect, useRef } from 'react';
import { Search, ChevronDown } from 'lucide-react';
import { TIMEZONE_GROUPS } from '../constants/timezones';

interface TimezonePickerProps {
  value: string;
  onChange: (timezone: string) => void;
  label?: string;
}

export function TimezonePicker({ value, onChange, label }: TimezonePickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const filteredTimezones = search
    ? TIMEZONE_GROUPS.flatMap(group => ({
        ...group,
        timezones: group.timezones.filter(tz => 
          tz.city.toLowerCase().includes(search.toLowerCase()) ||
          tz.timezone.toLowerCase().includes(search.toLowerCase())
        )
      })).filter(group => group.timezones.length > 0)
    : TIMEZONE_GROUPS;

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (timezone: string) => {
    onChange(timezone);
    setIsOpen(false);
    setSearch('');
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {label && (
        <label className="block text-sm font-medium text-white mb-1">
          {label}
        </label>
      )}
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-2 bg-white/20 text-white rounded-lg hover:bg-white/30 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/50"
      >
        <span className="truncate">{value}</span>
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute z-10 w-full mt-2 bg-white/95 backdrop-blur-lg rounded-lg shadow-xl max-h-96 overflow-hidden">
          <div className="p-2 border-b border-gray-200">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search timezone..."
                className="w-full pl-9 pr-4 py-2 bg-white/50 rounded-md text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </div>

          <div className="overflow-y-auto max-h-80">
            {filteredTimezones.map((group) => (
              <div key={group.region}>
                {group.timezones.length > 0 && (
                  <>
                    <div className="px-3 py-2 text-sm font-semibold text-gray-500 bg-gray-50">
                      {group.region}
                    </div>
                    {group.timezones.map((tz) => (
                      <button
                        key={tz.timezone}
                        onClick={() => handleSelect(tz.timezone)}
                        className={`w-full text-left px-4 py-2 text-sm hover:bg-indigo-50 focus:outline-none focus:bg-indigo-50 ${
                          value === tz.timezone ? 'bg-indigo-50 text-indigo-700' : 'text-gray-700'
                        }`}
                      >
                        <div className="font-medium">{tz.city}</div>
                        <div className="text-xs text-gray-500">{tz.timezone}</div>
                      </button>
                    ))}
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}