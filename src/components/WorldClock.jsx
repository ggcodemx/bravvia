import { useClock } from '../hooks/useClock';

export default function WorldClock({ city, timezone, subtitle }) {
  const time = useClock(timezone);

  return (
    <div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          borderBottom: '1px solid var(--white-10)',
          paddingBottom: '1.5rem',
          marginBottom: '1rem',
        }}
      >
        <p style={{ fontSize: '1.5rem', fontWeight: 300, letterSpacing: '-0.02em' }}>{city}</p>
        <p style={{ fontSize: '1.25rem', letterSpacing: '0.1em', color: 'var(--white-60)' }}>
          {time}
        </p>
      </div>
      <p style={{ fontSize: '1rem', color: 'var(--white-30)' }}>{subtitle}</p>
    </div>
  );
}
