export default function NewsCard({ item, featured = false }) {
  return (
    <div className="intel-card" style={{ display: 'flex', flexDirection: 'column' }}>
      <div
        className="intel-card-image-wrapper"
        style={{
          position: 'relative',
          overflow: 'hidden',
          aspectRatio: featured ? '4/5' : '16/10',
          background: 'var(--white-10)',
          marginBottom: '1.5rem',
        }}
      >
        <img
          src={item.image}
          alt={item.title}
          className="intel-card-img"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />

        <div className="intel-card-overlay">
          <span className="intel-card-cta">Read more</span>
        </div>

        <div style={{ position: 'absolute', top: 0, left: 0, zIndex: 11 }}>
          <span
            style={{
              padding: '0.25rem 0.75rem',
              background: '#000000',
              color: '#ffffff',
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
        <h3
          className="news-title-home"
          style={{ lineHeight: 1.3, letterSpacing: '-0.02em', color: 'var(--white)' }}
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