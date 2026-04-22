import { useState, useEffect } from 'react';
import { useReveal } from '../hooks/useReveal';

// ─── Data ──────────────────────────────────────────────────────────────────
const ALL_ARTICLES = [
  {
    id: 1,
    category: 'Insights',
    date: '28 SEPT 2024',
    title: 'Future-proofing architectural visualisations for the digital age.',
    excerpt: 'Exploring emergent rendering technologies and their impact on future unbuilt environments.',
    image: 'news1.gif',
    readTime: '4 min read',
    slug: 'future-proofing-architectural-visualisations',
  },
  {
    id: 2,
    category: 'Expansion',
    date: '22 SEPT 2024',
    title: 'Bravvia expands global headquarters to the Shard, London.',
    excerpt: 'The new studio space reflects our commitment to vertical integration and architectural precision.',
    image: 'news4.jpg',
    readTime: '4 min read',
    slug: 'bravvia-expands-to-the-shard',
  },
  {
    id: 3,
    category: 'Design',
    date: '15 SEPT 2024',
    title: 'The influence of brutalism on modern interface design.',
    excerpt: 'A deep dive into raw materials, digital structuralism, and the aesthetics of functionality.',
    image: 'news2.gif',
    readTime: '4 min read',
    slug: 'brutalism-on-modern-interface-design',
  },
  {
    id: 4,
    category: 'Strategy',
    date: '30 AUG 2024',
    title: 'Redefining luxury through extreme simplicity.',
    excerpt: 'A study on subtraction in identity systems and the power of silence in branding.',
    image: 'news3.gif',
    readTime: '4 min read',
    slug: 'redefining-luxury-through-simplicity',
  },
  {
    id: 5,
    category: 'Events',
    date: '24 AUG 2024',
    title: 'Annual branding summit announces 2025 keynote speakers.',
    excerpt: 'Global leaders gather to discuss the intersection of intelligence and visual identity.',
    image: 'news6.gif',
    readTime: '4 min read',
    slug: 'annual-branding-summit-2025',
  },
  {
    id: 6,
    category: 'Research',
    date: '12 AUG 2024',
    title: 'Materials Matter: The psychology of texture in digital.',
    excerpt: 'How tactile elements translate to digital trust and user engagement in luxury sectors.',
    image: 'news7.jpg',
    readTime: '4 min read',
    slug: 'materials-matter-psychology-of-texture',
  },
];

const PAGE_SIZE = 6;

// ─── BubbleCursor ───────────────────────────────────────────────────────────
function BubbleCursor() {
  const [visible, setVisible] = useState(false);

  return (
    <div
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 10,
      }}
    >
      <div
        style={{
          width: '8rem',
          height: '8rem',
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.05)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(255,255,255,0.2)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          opacity: visible ? 1 : 0,
          transform: visible ? 'scale(1)' : 'scale(0.5)',
          transition: 'opacity 0.5s ease, transform 0.5s ease',
          pointerEvents: 'none',
        }}
      >
        <span
          style={{
            fontSize: '0.8rem',
            fontWeight: 700,

            color: 'white',
          }}
        >
          Read More
        </span>
      </div>
    </div>
  );
}

// ─── NewsCard ───────────────────────────────────────────────────────────────
function NewsCard({ article }) {
  const [imgHovered, setImgHovered] = useState(false);

  return (
    <div className="reveal" style={{ display: 'flex', flexDirection: 'column', cursor: 'none' }}>
      {/* Image */}
      <div
        style={{
          marginBottom: '1.5rem',
          overflow: 'hidden',
          background: '#18181b',
          aspectRatio: '4/3',
          position: 'relative',
          border: '1px solid rgba(255,255,255,0.05)',
        }}
        onMouseEnter={() => setImgHovered(true)}
        onMouseLeave={() => setImgHovered(false)}
      >
        <img
          src={article.image}
          alt={article.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'filter 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
            filter: imgHovered ? 'blur(4px) brightness(0.6)' : 'none',
          }}
        />
        <BubbleCursor />
      </div>

      {/* Meta */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <div style={{ width: '0.5rem', height: '0.5rem', background: 'white', flexShrink: 0 }} />
            <span style={{ fontSize: '1rem', color: 'white', fontWeight: 700 }}>
              {article.category}
            </span>
          </div>
          <span style={{ fontSize: '0.625rem', letterSpacing: '0.2em', color: 'rgba(204,204,204,0.6)' }}>
            {article.date}
          </span>
        </div>

        <h2 style={{ fontSize: '1.125rem', fontWeight: 700, letterSpacing: '-0.02em', color: 'white', lineHeight: 1.3 }}>
          {article.title}
        </h2>

        <p style={{
          fontSize: '0.875rem', color: 'rgba(204,204,204,0.7)', fontWeight: 300, lineHeight: 1.6,
          display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden',
        }}>
          {article.excerpt}
        </p>

        <div style={{
          paddingTop: '1rem',
          borderTop: '1px solid rgba(255,255,255,0.1)',
          fontSize: '0.9rem',
          color: 'rgba(204,204,204,0.5)',
        }}>
          By Bravvia&nbsp;&nbsp;|&nbsp;&nbsp;{article.readTime}
        </div>
      </div>
    </div>
  );
}

// ─── LoadMoreButton ─────────────────────────────────────────────────────────
function LoadMoreButton({ onClick }) {
  const [hovered, setHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ background: 'none', border: 'none', cursor: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem', padding: 0 }}
    >
      <span style={{ fontSize: '0.875rem', fontWeight: 700, letterSpacing: '0.1em', color: hovered ? 'white' : 'rgba(255,255,255,0.4)', transition: 'color 0.3s' }}>
        Load more archive
      </span>
      <div style={{ height: '1px', background: hovered ? 'white' : 'rgba(255,255,255,0.1)', width: hovered ? '12rem' : '6rem', transition: 'width 0.7s ease, background 0.3s' }} />
    </button>
  );
}

// ─── Page ───────────────────────────────────────────────────────────────────
export default function NewsPage() {
  useReveal();

  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const visibleArticles = ALL_ARTICLES.slice(0, visibleCount);
  const hasMore = visibleCount < ALL_ARTICLES.length;

  useEffect(() => {
    document.title = 'News | Bravvia Agency';
  }, []);

  // Re-trigger reveal animation on newly mounted cards
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal:not(.is-visible)').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [visibleCount]);

  return (
    <main>
      {/* ── Heading ── */}
      <section style={{ padding: '8rem 2rem 3rem', borderBottom: '1px solid rgba(255,255,255,0.05)', overflow: 'hidden' }}>
        <div style={{  margin: '0 12rem' }}>
          <h2
            className="reveal"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.75rem)', fontWeight: 300, letterSpacing: '-0.05em', lineHeight: 1 }}
          >
            Perspectives from the practice.
          </h2>
        </div>
      </section>

      {/* ── Grid ── */}
      <section style={{ padding: '6rem 2rem', background: '#000' }}>
        <div style={{  margin: '0 12rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '4rem 2.5rem' }}>
            {visibleArticles.map((article) => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Load more ── */}
      <section style={{ padding: '0 2rem 8rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3rem' }}>
        <div style={{ width: '100%', maxWidth: '96rem', height: '1px', background: 'rgba(255,255,255,0.05)' }} />
        {hasMore
          ? <LoadMoreButton onClick={() => setVisibleCount((c) => c + PAGE_SIZE)} />
          : <p style={{ fontSize: '0.75rem', letterSpacing: '0.3em', color: 'rgba(255,255,255,0.2)'}}>End of archive</p>
        }
      </section>
    </main>
  );
}