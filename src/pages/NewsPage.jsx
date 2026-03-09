import { useEffect } from 'react';
import { useReveal } from '../hooks/useReveal';
import NewsCard from '../components/NewsCard';
import { news } from '../data';

/**
 * NewsPage
 * Press, insights, and media coverage.
 */
export default function NewsPage() {
  useReveal();

  useEffect(() => {
    document.title = 'News | Bravvia Agency';
  }, []);

  const [featured, ...rest] = news;

  return (
    <main style={{ paddingTop: '12rem', paddingBottom: '8rem' }}>
      <section style={{ padding: '0 2rem', marginBottom: '5rem' }}>
        <h2
          className="reveal"
          style={{
            fontSize: 'clamp(2rem, 5vw, 3.75rem)',
            fontWeight: 300,
            letterSpacing: '-0.05em',
            lineHeight: 0.95,
            marginBottom: '1rem',
          }}
        >
          Insights&nbsp;&nbsp;·&nbsp;&nbsp;News&nbsp;&nbsp;·&nbsp;&nbsp;Press
        </h2>
      </section>

      <section style={{ padding: '0 2rem' }}>
        <div style={{ maxWidth: '90rem', margin: '0 auto' }}>
          {/* Featured */}
          <div
            className="reveal"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
              marginBottom: '4rem',
            }}
          >
            <NewsCard item={featured} featured />
          </div>

          {/* Grid */}
          <div
            className="reveal"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '2rem',
            }}
          >
            {rest.map((item) => (
              <NewsCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
