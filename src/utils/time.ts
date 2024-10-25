export const formatTime = (time: Date, timezone: string) => {
  return time.toLocaleString('en-US', {
    timeZone: timezone,
    hour12: true,
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  });
};

export const formatDate = (time: Date, timezone: string) => {
  return time.toLocaleDateString('en-US', {
    timeZone: timezone,
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

export const getSystemTimezone = (): string => {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
  } catch (e) {
    return 'Asia/Kolkata'; // Fallback to default
  }
};

export const convertTimeToLocalDate = (timeString: string, fromTimezone: string): Date => {
  const date = new Date(timeString);
  const utcDate = new Date(date.toLocaleString('en-US', { timeZone: fromTimezone }));
  const tzOffset = date.getTime() - utcDate.getTime();
  return new Date(date.getTime() + tzOffset);
};

export const formatTimezoneLabel = (timezone: string, isLocal: boolean = false): string => {
  if (isLocal) return 'Local Time';
  
  const cityName = timezone.split('/').pop()?.replace(/_/g, ' ');
  try {
    const now = new Date();
    const timeZoneAbbr = new Intl.DateTimeFormat('en-US', {
      timeZone: timezone,
      timeZoneName: 'short'
    }).formatToParts(now).find(part => part.type === 'timeZoneName')?.value || '';
    
    return `${cityName} (${timeZoneAbbr})`;
  } catch (e) {
    return cityName || timezone;
  }
};