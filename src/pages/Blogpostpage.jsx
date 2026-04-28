import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useReveal } from '../hooks/useReveal';


const POST = {
  number: '003',
  location: 'Strategic Archive',
  title: ['The waiting', 'game.'], // Dividido para el diseño de dos líneas
  titleItalic: 'game.', 
  readTime: '8 Min Read',
  date: 'Apr 2026',
  contributor: { name: 'Julian V. Bravvia', code: '0x4F2A', role: 'Principal' },
  tags: ['Strategy', 'Positioning', 'Market_Dynamics'],
  body: [
    {
      type: 'lead',
      text: 'Why brand indecision is itself a brand decision, and what the market reads when a company stays silent.',
     
    },
    {
      type: 'paragraph',
      offset: 'right',
      text: 'There is a particular kind of company that treats brand as something it will get to eventually. After the product is stable. After the first round of funding settles. Brand sits on the roadmap somewhere between "important" and "later," and later has a habit of never arriving.',
      italic: 'never arriving',
    },
    {
      type: 'paragraph',
      text: 'The assumption behind this delay is understandable. Building a brand feels like a commitment, and commitment feels premature when the business is still finding its shape. Why invest in a visual identity when the product might pivot? The logic is clean. The problem is that it ignores something fundamental about how markets work.',
    },
    {
      type: 'quote',
      text: '"Markets do not wait for companies to be ready. They assign meaning whether the company participates in that process or not."',
      italic: 'participates',
      attribution: '— Strategic Principle 01',
    },
    {
      type: 'paragraph',
      offset: 'left',
      text: 'Every interaction a company has with the outside world, every pitch deck sent without a clear positioning, every website built on placeholder language—all of it accumulates into a perception. And that perception becomes the brand, whether it was designed or not.',
      highlight: 'accumulates into a perception',
    },
    {
      type: 'image',
      src: 'news1.gif', // Usando la imagen de la lista de noticias
      caption: 'Visualizing Market Vacuum — 003-B',
    },
    {
      type: 'paragraph',
      text: 'The companies that understand this treat brand as an operational priority with the same weight as hiring or product development. A well-defined brand changes the physics of a business. Positioning does the heavy lifting before the first sales meeting. Remove brand from that equation and every function works harder to produce the same result.',
    },
    {
      type: 'paragraph',
      offset: 'right',
      text: 'The longer a company operates without a defined brand, the more its internal culture fills the void. Teams develop their own language, their own visual shortcuts. The brand was never absent. It was just never governed.',
      
    },
    {
      type: 'quote',
      text: '"The brave do not wait. They decide."',
      italic: 'decide',
      attribution: '— Bravvia Manifesto',
    },
    {
      type: 'paragraph',
      text: 'The waiting game is comfortable. It feels prudent. But every month a company operates without a clear brand, the market fills that vacuum with its own interpretation. And that interpretation is almost never the one the company would have chosen for itself.',
    },
  ],
  next: {
    title: "The brands nobody notices and everybody remembers.",
    image: 'news2.gif',
    to: '/news/visibility-vs-recognition-lasting-value',
  },
};

function HighlightText({ text, highlight, italic }) {
  if (!highlight && !italic) return <>{text}</>;
  const parts = [];
  let remaining = text;

  const wrapMatch = (phrase, WrapComponent) => {
    const idx = remaining.indexOf(phrase);
    if (idx === -1) return;
    parts.push(remaining.slice(0, idx));
    parts.push(<WrapComponent key={phrase}>{phrase}</WrapComponent>);
    remaining = remaining.slice(idx + phrase.length);
  };

  if (highlight) wrapMatch(highlight, GlassHighlight);
  if (italic) wrapMatch(italic, ({ children }) => <em className="italic-text">{children}</em>);

  parts.push(remaining);
  return <>{parts}</>;
}

function GlassHighlight({ children }) {
  return <span className="glass-highlight">{children}</span>;
}

function ArticleImage({ src, caption }) {
  return (
    <div className="article-image-container">
      <img src={src} alt={caption} className="article-liquid-img" />
      {caption && <span className="article-image-caption">{caption}</span>}
    </div>
  );
}

function BodyBlock({ block }) {
  const blockClass = block.offset ? `offset-${block.offset}` : '';

  switch (block.type) {
    case 'lead':
      return (
        <p className="article-lead">
          <HighlightText text={block.text} highlight={block.highlight} />
        </p>
      );
    case 'paragraph':
      return (
        <p className={`article-paragraph ${blockClass}`}>
          <HighlightText text={block.text} highlight={block.highlight} italic={block.italic} />
        </p>
      );
    case 'image':
      return <ArticleImage src={block.src} caption={block.caption} />;
    case 'quote':
      return (
        <div className="article-quote-container">
          <blockquote className="article-blockquote">
            <HighlightText text={block.text} italic={block.italic} />
          </blockquote>
          {block.attribution && <p className="quote-attribution">{block.attribution}</p>}
        </div>
      );
    default:
      return null;
  }
}

function NextArticle({ next }) {
  const imgRef = useRef(null);
  const handleEnter = () => { if (imgRef.current) imgRef.current.style.transform = 'translateY(0)'; };
  const handleLeave = () => { if (imgRef.current) imgRef.current.style.transform = 'translateY(100%)'; };

  return (
    <Link to={next.to} className="next-article-link" onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
      <div className="next-article-overlay">
        <p className="next-label">Up next</p>
        <h2 className="next-title">{next.title}</h2>
        <br />
        <div className="next-cta">
          <span>Begin Archive Access</span>
          <span className="arrow">↗</span>
        </div>
      </div>
      <div ref={imgRef} className="next-article-reveal-img">
        <img src={next.image} alt={next.title} />
      </div>
    </Link>
  );
}

export default function BlogPostPage() {
  useReveal();

  useEffect(() => {
    document.title = `${POST.title.join(' ')} | Bravvia`;
  }, []);

  const renderTitle = () =>
    POST.title.map((line, i) => (
      <span key={i}>
        {line.split(' ').map((word, j) => (
          <span key={j}>
            {word === POST.titleItalic ? <em className="title-italic">{word}</em> : word}
            {' '}
          </span>
        ))}
        <br />
      </span>
    ));

  return (
    <main className="blog-post-page">
      {/* ── Hero ── */}
      <section className="post-hero">
        <div className="iridescent-blob" />
        <div className="post-hero-content">
          <h1 className="scramble-in post-main-title">{renderTitle()}</h1>
          <div className="post-meta-info">
            <span>{POST.readTime} • {POST.date}</span>
          </div>
        </div>
      </section>

      {/* ── Body ── */}
      <section className="post-body-section">
        <div className="post-body-container">
          <div className="article-layout-grid">
            {/* Aside (Sidebar) */}
            <aside className="article-aside">
              <div className="aside-block">
                <p className="aside-label">Contributor</p>
                <p className="contributor-name">{POST.contributor.name}</p>
                <p className="contributor-details">{POST.contributor.code} — {POST.contributor.role}</p>
              </div>
              <div className="aside-block">
                <p className="aside-label">Tags</p>
                <nav className="tags-nav">
                  {POST.tags.map(tag => (
                    <a key={tag} href="/" className="tag-link">[ {tag} ]</a>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Main Content */}
            <div className="article-main-content">
              {POST.body.map((block, i) => (
                <BodyBlock key={i} block={block} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Next Article ── */}
      <NextArticle next={POST.next} />
    </main>
  );
}