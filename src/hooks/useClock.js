import { useState, useEffect } from 'react';

/**
 * useClock
 * Returns a live time string formatted for a given IANA timezone.
 */
export function useClock(timezone) {
  const [time, setTime] = useState('');

  useEffect(() => {
    const format = () =>
      new Date().toLocaleTimeString('en-GB', {
        timeZone: timezone,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });

    setTime(format());
    const interval = setInterval(() => setTime(format()), 1000);
    return () => clearInterval(interval);
  }, [timezone]);

  return time;
}
