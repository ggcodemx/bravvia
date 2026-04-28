import { useState, useEffect } from 'react';
import { useReveal } from '../hooks/useReveal';
import { Link } from 'react-router-dom';
import '../styles/news.css';

const ALL_ARTICLES = [
  {
    id: 1,
    category: 'Strategy',
    date: '22 APR 2026',
    title: 'The waiting game.',
    excerpt: 'Why brand indecision is itself a brand decision, and what the market reads when a company stays silent.',
    image: 'news1.gif', // Puedes cambiar estas referencias de imagen según tus archivos
    readTime: '5 min read',
    slug: 'the-waiting-game-brand-indecision',
  },
  {
    id: 2,
    category: 'Culture',
    date: '18 APR 2026',
    title: 'The brands nobody notices and everybody remembers.',
    excerpt: 'On the difference between visibility and recognition, and why the second one builds lasting value.',
    image: 'news2.gif',
    readTime: '4 min read',
    slug: 'visibility-vs-recognition-lasting-value',
  },
  {
    id: 3,
    category: 'Insights',
    date: '12 APR 2026',
    title: 'The most dangerous brand strategy is the one that works for everyone.',
    excerpt: 'When a brand tries to offend nobody, it ends up meaning nothing. On the cost of building without a position.',
    image: 'news3.gif',
    readTime: '6 min read',
    slug: 'dangerous-brand-strategy-for-everyone',
  },
  {
    id: 4,
    category: 'Design',
    date: '05 APR 2026',
    title: 'Typography is governance.',
    excerpt: 'How type systems quietly enforce brand discipline long after the guidelines deck is forgotten.',
    image: 'news4.jpg',
    readTime: '4 min read',
    slug: 'typography-is-governance-brand-discipline',
  },
  {
    id: 5,
    category: 'Strategy',
    date: '28 MAR 2026',
    title: 'Present tense brands in a future tense market.',
    excerpt: 'Most companies narrate where they are going. The strongest ones articulate where they stand right now.',
    image: 'news5.gif',
    readTime: '5 min read',
    slug: 'present-tense-brands-future-market',
  },
  {
    id: 6,
    category: 'Culture',
    date: '15 MAR 2026',
    title: "The brand gap between founders and markets.",
    excerpt: "What happens when a company's internal conviction and its external perception stop matching, and how to close the distance.",
    image: 'news6.gif',
    readTime: '7 min read',
    slug: 'brand-gap-founders-and-markets',
  },
];


function BubbleCursor() {
  return (
    <div className="bubble-cursor-container">
      <div className="bubble-cursor">
        <span>Read More</span>
      </div>
    </div>
  );
}

function NewsCard({ article }) {
  return (
    <Link to={`/news/${article.slug}`} className="news-card-link">
      <div className="reveal news-card">
        <div className="news-card-image-wrapper">
          <img src={article.image} alt={article.title} className="news-card-img" />
          <BubbleCursor />
        </div>

        <div className="news-card-meta">
          <div className="meta-top">
            <div className="category-tag">
              <div className="tag-dot" />
              <span>{article.category}</span>
            </div>
            <span className="article-date">{article.date}</span>
          </div>

          <h2 className="article-title">{article.title}</h2>
          <p className="article-excerpt">{article.excerpt}</p>

          <div className="article-footer">
            By Bravvia&nbsp;&nbsp;|&nbsp;&nbsp;{article.readTime}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function NewsPage() {
  useReveal();
  const PAGE_SIZE = 6;
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const visibleArticles = ALL_ARTICLES.slice(0, visibleCount);
  const hasMore = visibleCount < ALL_ARTICLES.length;

  useEffect(() => {
    document.title = 'News | Bravvia Agency';
  }, []);

  return (
    <main className="news-page">
      {/* ── Heading ── */}
      <section className="news-header">
        <h2 className="reveal news-page-title">
          Perspectives from the practice.
        </h2>
      </section>

      {/* ── Grid ── */}
      <section className="news-grid-section">
        <div className="news-grid">
          {visibleArticles.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>
      </section>

      {/* ── Load more ── */}
      <section className="news-load-more">
        {hasMore ? (
          <button className="load-more-btn" onClick={() => setVisibleCount(c => c + PAGE_SIZE)}>
            <span className="btn-text">Load more archive</span>
            <div className="btn-line" />
          </button>
        ) : (
          <p className="end-archive">End of archive</p>
        )}
      </section>
    </main>
  );
}