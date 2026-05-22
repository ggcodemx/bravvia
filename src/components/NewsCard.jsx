import { useRef } from 'react';

export default function NewsCard({ item, featured = false }) {
  const bubbleRef = useRef(null);
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    const bubble = bubbleRef.current;
    const container = containerRef.current;
    if (!bubble || !container) return;

    const rect = container.getBoundingClientRect();
    bubble.style.left = `${e.clientX - rect.left}px`;
    bubble.style.top  = `${e.clientY - rect.top}px`;
  };

  return (
    <div
      className="intel-card"
      style={{ display: 'flex', flexDirection: 'column', cursor: 'none' }}
    >
      <div
        ref={containerRef}
        className="relative overflow-hidden"
        onMouseMove={handleMouseMove}
        style={{
          position: 'relative',
          overflow: 'hidden',
          aspectRatio: featured ? '4/5' : '16/10',
          background: 'var(--white-10)',
          marginBottom: '1.5rem',
        }}
      >
        <div ref={bubbleRef} className="click-bubble">CLICK</div>

        <img
          src={item.image}
          alt={item.title}
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />

        {/* Date badge */}
        <div style={{ position: 'absolute', top: 0, left: 0 }}>
          <span
            style={{
              padding: '0.25rem 0.75rem',
              background: 'var(--primary)',
              color: '#000000',
              fontSize: '0.625rem',
              fontWeight: 700,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              display: 'block',
            }}
          >
            {item.date}
          </span>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        <h3 className='news-title-home'
          style={{
            lineHeight: 1.3,
            letterSpacing: '-0.02em',
            color: 'var(--white)',
            transition: 'color 0.2s',
          }}
        >
          {item.title}
        </h3>
        <p style={{ fontSize: '0.9rem', color: 'var(--white-60)', lineHeight: 1.6, maxWidth: '24rem' }}>
          {item.excerpt}
        </p>
      </div>
    </div>
  );
}
