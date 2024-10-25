interface TimezoneInfo {
  timezone: string;
  city: string;
}

interface TimezoneGroup {
  region: string;
  timezones: TimezoneInfo[];
}

export const DEFAULT_TIMEZONES = {
  target: {
    timezone: 'Europe/Nicosia',
    label: 'Nicosia, Cyprus',
  },
};

export const TIMEZONE_GROUPS: TimezoneGroup[] = [
  {
    region: 'Asia',
    timezones: [
      { timezone: 'Asia/Kolkata', city: 'New Delhi, Mumbai, Kolkata' },
      { timezone: 'Asia/Dubai', city: 'Dubai' },
      { timezone: 'Asia/Tokyo', city: 'Tokyo' },
      { timezone: 'Asia/Singapore', city: 'Singapore' },
      { timezone: 'Asia/Shanghai', city: 'Beijing, Shanghai' },
      { timezone: 'Asia/Seoul', city: 'Seoul' },
      { timezone: 'Asia/Jakarta', city: 'Jakarta' },
      { timezone: 'Asia/Bangkok', city: 'Bangkok' },
      { timezone: 'Asia/Manila', city: 'Manila' },
      { timezone: 'Asia/Hong_Kong', city: 'Hong Kong' },
      { timezone: 'Asia/Kathmandu', city: 'Kathmandu' },
      { timezone: 'Asia/Karachi', city: 'Karachi, Islamabad' },
      { timezone: 'Asia/Colombo', city: 'Colombo' },
      { timezone: 'Asia/Almaty', city: 'Almaty' },
      { timezone: 'Asia/Yerevan', city: 'Yerevan' },
    ],
  },
  {
    region: 'Americas',
    timezones: [
      { timezone: 'America/Los_Angeles', city: 'Los Angeles, San Francisco' },
      { timezone: 'America/New_York', city: 'New York, Boston' },
      { timezone: 'America/Chicago', city: 'Chicago, Houston' },
      { timezone: 'America/Toronto', city: 'Toronto' },
      { timezone: 'America/Vancouver', city: 'Vancouver' },
      { timezone: 'America/Sao_Paulo', city: 'São Paulo' },
      { timezone: 'America/Mexico_City', city: 'Mexico City' },
      { timezone: 'America/Bogota', city: 'Bogotá' },
      { timezone: 'America/Lima', city: 'Lima' },
      { timezone: 'America/Buenos_Aires', city: 'Buenos Aires' },
      { timezone: 'America/Caracas', city: 'Caracas' },
      { timezone: 'America/Montevideo', city: 'Montevideo' },
      { timezone: 'America/Santiago', city: 'Santiago' },
    ],
  },
  {
    region: 'Europe',
    timezones: [
      { timezone: 'Europe/London', city: 'London' },
      { timezone: 'Europe/Paris', city: 'Paris, Berlin, Rome' },
      { timezone: 'Europe/Moscow', city: 'Moscow' },
      { timezone: 'Europe/Amsterdam', city: 'Amsterdam' },
      { timezone: 'Europe/Stockholm', city: 'Stockholm' },
      { timezone: 'Europe/Madrid', city: 'Madrid' },
      { timezone: 'Europe/Athens', city: 'Athens' },
      { timezone: 'Europe/Istanbul', city: 'Istanbul' },
      { timezone: 'Europe/Zurich', city: 'Zurich' },
      { timezone: 'Europe/Vienna', city: 'Vienna' },
      { timezone: 'Europe/Lisbon', city: 'Lisbon' },
      { timezone: 'Europe/Prague', city: 'Prague' },
      { timezone: 'Europe/Brussels', city: 'Brussels' },
      { timezone: 'Europe/Bucharest', city: 'Bucharest' },
      { timezone: 'Europe/Dublin', city: 'Dublin' },
    ],
  },
  {
    region: 'Africa',
    timezones: [
      { timezone: 'Africa/Cairo', city: 'Cairo' },
      { timezone: 'Africa/Johannesburg', city: 'Johannesburg' },
      { timezone: 'Africa/Nairobi', city: 'Nairobi' },
      { timezone: 'Africa/Lagos', city: 'Lagos' },
      { timezone: 'Africa/Casablanca', city: 'Casablanca' },
      { timezone: 'Africa/Accra', city: 'Accra' },
      { timezone: 'Africa/Harare', city: 'Harare' },
      { timezone: 'Africa/Khartoum', city: 'Khartoum' },
      { timezone: 'Africa/Dakar', city: 'Dakar' },
      { timezone: 'Africa/Tunis', city: 'Tunis' },
    ],
  },
  {
    region: 'Pacific',
    timezones: [
      { timezone: 'Pacific/Auckland', city: 'Auckland' },
      { timezone: 'Australia/Sydney', city: 'Sydney' },
      { timezone: 'Australia/Melbourne', city: 'Melbourne' },
      { timezone: 'Pacific/Fiji', city: 'Fiji' },
      { timezone: 'Pacific/Honolulu', city: 'Honolulu' },
      { timezone: 'Pacific/Port_Moresby', city: 'Port Moresby' },
      { timezone: 'Pacific/Tahiti', city: 'Tahiti' },
      { timezone: 'Pacific/Tongatapu', city: 'Nukuʻalofa' },
    ],
  },
  {
    region: 'Middle East',
    timezones: [
      { timezone: 'Asia/Jerusalem', city: 'Jerusalem' },
      { timezone: 'Asia/Riyadh', city: 'Riyadh' },
      { timezone: 'Asia/Baghdad', city: 'Baghdad' },
      { timezone: 'Asia/Tehran', city: 'Tehran' },
      { timezone: 'Asia/Kuwait', city: 'Kuwait City' },
      { timezone: 'Asia/Muscat', city: 'Muscat' },
      { timezone: 'Asia/Amman', city: 'Amman' },
      { timezone: 'Asia/Beirut', city: 'Beirut' },
    ],
  },
  {
    region: 'Oceania',
    timezones: [
      { timezone: 'Pacific/Guam', city: 'Guam' },
      { timezone: 'Pacific/Saipan', city: 'Saipan' },
      { timezone: 'Pacific/Noumea', city: 'Noumea' },
      { timezone: 'Pacific/Apia', city: 'Apia' },
    ],
  },
];
