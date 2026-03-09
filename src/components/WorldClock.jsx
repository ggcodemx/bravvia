import { useClock } from '../hooks/useClock';

/**
 * WorldClock
 * Shows a live time for one city/timezone.
 *
 * Props:
 *   city     – display name
 *   timezone – IANA timezone string
 *   subtitle – e.g. "United Kingdom / GMT+0"
 */
export default function WorldClock({ city, timezone, subtitle }) {
  const time = useClock(timezone);

  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
          paddingBottom: '1.5rem',
          marginBottom: '1rem',
        }}
      >
        <p style={{ fontSize: '1.5rem', fontWeight: 300, letterSpacing: '-0.02em' }}>{city}</p>
        <p
          style={{
            fontSize: '1.25rem',
            letterSpacing: '0.1em',
            color: 'rgba(255,255,255,0.8)',
          }}
        >
          {time}
        </p>
      </div>
      <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.3)' }}>{subtitle}</p>
    </div>
  );
}
