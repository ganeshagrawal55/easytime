import React, { useState, useEffect } from 'react';
import { Globe, RotateCw } from 'lucide-react';
import { TimeZoneCard } from './components/TimeZoneCard';
import { DEFAULT_TIMEZONES } from './constants/timezones';
import { getSystemTimezone, convertTimeToLocalDate, formatTimezoneLabel } from './utils/time';

function App() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [sourceTime, setSourceTime] = useState('');
  const [targetTime, setTargetTime] = useState('');
  const [activeZone, setActiveZone] = useState<'source' | 'target' | null>(null);
  
  const systemTimezone = getSystemTimezone();
  const [sourceTimezone, setSourceTimezone] = useState(systemTimezone);
  const [targetTimezone, setTargetTimezone] = useState(DEFAULT_TIMEZONES.target.timezone);

  const isLocalTimezone = sourceTimezone === systemTimezone;
  const sourceLabel = formatTimezoneLabel(sourceTimezone, isLocalTimezone);
  const targetLabel = formatTimezoneLabel(targetTimezone);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    
    const sourceTz = params.get('sourceTz');
    if (sourceTz) {
      try {
        new Date().toLocaleString('en-US', { timeZone: sourceTz });
        setSourceTimezone(sourceTz);
      } catch (e) {
        console.warn('Invalid source timezone in URL parameter', e);
      }
    }

    const targetTz = params.get('targetTz');
    if (targetTz) {
      try {
        new Date().toLocaleString('en-US', { timeZone: targetTz });
        setTargetTimezone(targetTz);
      } catch (e) {
        console.warn('Invalid target timezone in URL parameter', e);
      }
    }
  }, []);

  const updateURL = (sourceTz: string, targetTz: string) => {
    const params = new URLSearchParams();
    
    if (sourceTz !== systemTimezone) {
      params.set('sourceTz', sourceTz);
    }
    params.set('targetTz', targetTz);

    const newURL = `${window.location.pathname}${params.toString() ? '?' + params.toString() : ''}`;
    window.history.replaceState({}, '', newURL);
  };

  useEffect(() => {
    if (!activeZone) {
      const timer = setInterval(() => {
        setCurrentTime(new Date());
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [activeZone]);

  const handleSourceTimeChange = (time: string) => {
    setSourceTime(time);
    if (time) {
      setActiveZone('source');
      const newDate = new Date(time);
      setCurrentTime(newDate);
      setTargetTime('');
    } else {
      resetToCurrentTime();
    }
  };

  const handleTargetTimeChange = (time: string) => {
    setTargetTime(time);
    if (time) {
      setActiveZone('target');
      const convertedDate = convertTimeToLocalDate(time, targetTimezone);
      setCurrentTime(convertedDate);
      setSourceTime('');
    } else {
      resetToCurrentTime();
    }
  };

  const handleSourceTimezoneChange = (timezone: string) => {
    setSourceTimezone(timezone);
    updateURL(timezone, targetTimezone);
  };

  const handleTargetTimezoneChange = (timezone: string) => {
    setTargetTimezone(timezone);
    updateURL(sourceTimezone, timezone);
  };

  const resetToCurrentTime = () => {
    setActiveZone(null);
    setSourceTime('');
    setTargetTime('');
    setCurrentTime(new Date());
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl">
            <div className="flex items-center justify-center gap-3 mb-8">
              <h1 className="text-4xl font-bold text-white text-center flex items-center gap-3">
                <Globe className="w-10 h-10" />
                EasyTime - Timezone Converter
              </h1>
              <button
                onClick={resetToCurrentTime}
                className="ml-4 p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                title="Reset to current time"
              >
                <RotateCw className="w-6 h-6" />
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <TimeZoneCard
                label={sourceLabel}
                time={currentTime}
                timezone={sourceTimezone}
                onTimeChange={handleSourceTimeChange}
                onTimezoneChange={handleSourceTimezoneChange}
                selectedTime={sourceTime}
                isEditable={activeZone !== 'target'}
                isLocal={isLocalTimezone}
              />

              <TimeZoneCard
                label={targetLabel}
                time={currentTime}
                timezone={targetTimezone}
                onTimeChange={handleTargetTimeChange}
                onTimezoneChange={handleTargetTimezoneChange}
                selectedTime={targetTime}
                isEditable={activeZone !== 'source'}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;