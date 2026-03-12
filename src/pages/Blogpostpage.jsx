import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useReveal } from '../hooks/useReveal';

// ─── Data ─────────────────────────────────────────────────────────────────
// In a real app esto vendría de una API o de props via react-router params
const POST = {
  number: '002',
  location: 'London Archive',
  title: ['The Geometry', 'of Pure Light'],
  titleItalic: 'Pure', // la palabra que va en italic
  readTime: '12 Min Read',
  date: 'Oct 2024',
  contributor: { name: 'Julian V. Bravvia', code: '0x4F2A', role: 'Principal' },
  tags: ['Architecture', 'Digital_Twin', 'Minimalism'],
  body: [
    {
      type: 'lead',
      text: 'In the rapidly evolving landscape of visual identity, the intersection of architectural precision and digital fluidity has birthed a new paradigm. It is a space where light is not just a medium, but a structural component.',
      highlight: 'architectural precision',
    },
    {
      type: 'paragraph',
      offset: 'right',
      text: 'The shift towards monochromatic digital environments is more than an aesthetic choice; it is a strategic response to the cognitive load of the modern era. By stripping away the extraneous, we allow the core architecture of information to breathe.',
      italic: 'stripping away',
    },
    {
      type: 'image',
      src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBS9WmcyaOskw6fkly_3_1JXi3SieY7k2e90GDFvDHVm8sbTEb0dPR1m_kQjq7h3snDyIsmJcN93kOApsbRaF1IgMAmQdDDjg18uhFSwbZxecR-bKVIsqmui7CdYKnscProB-HkQxGjIC2kW1SWQNGd3ucj_yv-8vZg2W-BCmGxFaOY4QgzM0o-OKkxTsae6-7y_quJhD0eUbnddCSwNd_Y87u8eFP6KWT8bca_AEr1a7YsVd2vv3ntQ0kg9O6Njpcaw0qu2q8kjQYZ',
      caption: 'Detail — 002-A',
    },
    {
      type: 'paragraph',
      offset: 'left',
      text: 'Digital structuralism demands a rigorous adherence to grid systems that mirror physical brutalism. Each element must justify its existence. When we look at the way iridescent 3D shapes interact with deep shadows, we see a reflection of how light behaves in a physical gallery—shifting, elusive.',
      highlight: 'physical brutalism',
    },
    {
      type: 'quote',
      text: '"Intelligence is found in absolute, unyielding simplicity."',
      italic: 'absolute',
      attribution: '— The Bravvia Manifesto',
    },
    {
      type: 'paragraph',
      text: 'As we look toward 2025, the visual standards for global industry will continue to favor these silent yet powerful systems. The "Bravvia Standard" is built on the belief that luxury is found in the gaps between the pixels—the moments of stillness that allow for deep resonance and clarity.',
      highlight: 'gaps between the pixels',
    },
  ],
  next: {
    title: "Mexico City's Tech Corridor",
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCl7e8So22IJHdKVDclcdS1LRKUuxhWkjdD9WfmT_Yf2Z06X1mZf4Vpni7ehwOzj9A9BBuDsdgWaRvnOIwtQR54rBzEk_Ustm08TZMEZktu_pI7pAWBBUwWVX4o-y6u00AqlP95tgWp9RtdxH5YIeERx0uZhuOWUPHrrms-KeHD72NdarfDuqDcfGfRt82rGEhx_vlHowhukTYK4kg86_JnG9vaP_EPKPivXw-TBQ202avddh8vMyqepBPnZBWOTM-C5kLNsH0VTTej',
    to: '/news',
  },
};

// ─── Sub-components ────────────────────────────────────────────────────────

/** Resalta una frase dentro de un texto envolviéndola en un span de vidrio */
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
  if (italic) wrapMatch(italic, ({ children }) => <em style={{ fontStyle: 'italic', color: 'white' }}>{children}</em>);

  parts.push(remaining);
  return <>{parts}</>;
}

function GlassHighlight({ children }) {
  return (
    <span
      style={{
        display: 'inline-block',
        padding: '0.125rem 0.5rem',
        borderRadius: '2px',
        background: 'rgba(255,255,255,0.05)',
        backdropFilter: 'blur(12px)',
        border: '1px solid rgba(255,255,255,0.1)',
        color: 'white',
        fontWeight: 500,
      }}
    >
      {children}
    </span>
  );
}

/** Imagen de artículo con hover líquido */
function ArticleImage({ src, caption }) {
  return (
    <div
      style={{
        position: 'relative',
        margin: '0 -2rem',
        aspectRatio: '16/7',
        background: '#111',
        borderTop: '1px solid rgba(255,255,255,0.1)',
        borderBottom: '1px solid rgba(255,255,255,0.1)',
        overflow: 'hidden',
      }}
    >
      <img
        src={src}
        alt={caption}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          transition: 'transform 1.2s cubic-bezier(0.16,1,0.3,1), filter 1.2s ease',
        }}
        onMouseEnter={(e) => {
          e.target.style.transform = 'scale(1.08) rotate(1deg)';
          e.target.style.filter = 'contrast(1.2) brightness(1.1)';
        }}
        onMouseLeave={(e) => {
          e.target.style.transform = 'scale(1) rotate(0deg)';
          e.target.style.filter = 'none';
        }}
      />
      {caption && (
        <span
          style={{
            position: 'absolute',
            top: '1rem',
            left: '1rem',
            fontSize: '0.5rem',
            color: 'rgba(255,255,255,0.4)',
            letterSpacing: '0.4em',
            textTransform: 'uppercase',
          }}
        >
          {caption}
        </span>
      )}
    </div>
  );
}

/** Renderiza un bloque de cuerpo según su tipo */
function BodyBlock({ block }) {
  const offsetStyle =
    block.offset === 'right'
      ? { transform: 'translateX(4rem)', maxWidth: '36rem' }
      : block.offset === 'left'
      ? { transform: 'translateX(-4rem)', maxWidth: '36rem' }
      : {};

  switch (block.type) {
    case 'lead':
      return (
        <p
          style={{
            fontSize: 'clamp(1.25rem, 2.5vw, 1.875rem)',
            color: 'rgba(204,204,204,0.9)',
            fontWeight: 300,
            lineHeight: 1.4,
            maxWidth: '42rem',
          }}
        >
          <HighlightText text={block.text} highlight={block.highlight} />
        </p>
      );

    case 'paragraph':
      return (
        <p
          style={{
            fontSize: '1.125rem',
            color: 'rgba(255,255,255,0.7)',
            lineHeight: 1.8,
            fontWeight: 300,
            ...offsetStyle,
          }}
        >
          <HighlightText text={block.text} highlight={block.highlight} italic={block.italic} />
        </p>
      );

    case 'image':
      return <ArticleImage src={block.src} caption={block.caption} />;

    case 'quote':
      return (
        <div
          style={{
            maxWidth: '48rem',
            padding: '6rem 0',
            borderTop: '1px solid rgba(255,255,255,0.05)',
            borderBottom: '1px solid rgba(255,255,255,0.05)',
          }}
        >
          <blockquote
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.75rem)',
              color: 'white',
              fontWeight: 300,
              lineHeight: 1,
              letterSpacing: '-0.05em',
            }}
          >
            <HighlightText text={block.text} italic={block.italic} />
          </blockquote>
          {block.attribution && (
            <p
              style={{
                marginTop: '2rem',
                fontSize: '0.75rem',
                color: 'rgba(204,204,204,0.5)',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
              }}
            >
              {block.attribution}
            </p>
          )}
        </div>
      );

    default:
      return null;
  }
}

/** Sección "Next article" con imagen que se revela al hacer hover */
function NextArticle({ next }) {
  const imgRef = useRef(null);

  const handleEnter = () => {
    if (imgRef.current) imgRef.current.style.transform = 'translateY(0)';
  };
  const handleLeave = () => {
    if (imgRef.current) imgRef.current.style.transform = 'translateY(100%)';
  };

  return (
    <Link
      to={next.to}
      style={{
        display: 'block',
        position: 'relative',
        height: '80vh',
        width: '100%',
        overflow: 'hidden',
        background: 'white',
        cursor: 'none',
        borderTop: '1px solid rgba(255,255,255,0.1)',
        textDecoration: 'none',
      }}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {/* Text overlay (mix-blend-difference gives invert effect) */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 20,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '2rem',
          mixBlendMode: 'difference',
        }}
      >
        <p
          style={{
            fontSize: '0.875rem',
            color: 'white',
            letterSpacing: '0.2em',
            marginBottom: '2rem',
            textTransform: 'uppercase',
          }}
        >
          Up next
        </p>
        <h2
          style={{
            fontSize: 'clamp(2.5rem, 8vw, 6rem)',
            fontWeight: 300,
            color: 'white',
            letterSpacing: '-0.05em',
            lineHeight: 1,
            maxWidth: '20ch',
          }}
        >
          {next.title}
        </h2>
        <div
          style={{
            marginTop: '3rem',
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            color: 'white',
          }}
        >
          <span style={{ fontSize: '0.875rem', letterSpacing: '0.2em' }}>Begin Archive Access</span>
          <span style={{ fontSize: '1.25rem' }}>↗</span>
        </div>
      </div>

      {/* Reveal image */}
      <div
        ref={imgRef}
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 10,
          background: 'black',
          transform: 'translateY(100%)',
          transition: 'transform 0.8s cubic-bezier(0.85, 0, 0.15, 1)',
        }}
      >
        <img
          src={next.image}
          alt={next.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'grayscale(1)',
            opacity: 0.6,
          }}
        />
      </div>
    </Link>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────

/**
 * BlogPostPage
 * Página de artículo editorial con:
 *  - Hero con blob iridiscente y título con animación scramble
 *  - Layout de dos columnas (sidebar fijo + cuerpo)
 *  - Bloques de contenido: lead, párrafo con offset, imagen líquida, cita
 *  - Sección "Next Article" con reveal de imagen al hover
 */
export default function BlogPostPage() {
  useReveal();

  useEffect(() => {
    document.title = `${POST.title.join(' ')} | Bravvia`;
  }, []);

  // Construye el título con la palabra itálica en su lugar correcto
  const renderTitle = () =>
    POST.title.map((line, i) => {
      const words = line.split(' ');
      return (
        <span key={i}>
          {words.map((word, j) => (
            <span key={j}>
              {word === POST.titleItalic ? <em style={{ fontStyle: 'italic' }}>{word}</em> : word}
              {j < words.length - 1 ? ' ' : ''}
            </span>
          ))}
          {i < POST.title.length - 1 && <br />}
        </span>
      );
    });

  return (
    <main style={{ position: 'relative' }}>
      {/* ── Hero ── */}
      <section
        style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '6rem 2rem',
          overflow: 'hidden',
        }}
      >
        {/* Iridescent blob */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 600,
            height: 600,
            background:
              'radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(161,161,170,0.05) 50%, transparent 70%)',
            filter: 'blur(60px)',
            zIndex: 0,
            animation: 'blob-float 12s ease-in-out infinite',
            pointerEvents: 'none',
          }}
        />

        <style>{`
          @keyframes blob-float {
            0%, 100% { transform: translate(-50%, -52%) scale(1); }
            50%       { transform: translate(-48%, -48%) scale(1.1); }
          }
          @keyframes scramble-in {
            0%   { opacity: 0; filter: blur(10px); }
            100% { opacity: 1; filter: blur(0); }
          }
          .scramble-in {
            animation: scramble-in 0.8s steps(4) forwards;
          }
        `}</style>

        <div
          style={{
            maxWidth: '80rem',
            width: '100%',
            textAlign: 'center',
            position: 'relative',
            zIndex: 10,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '3rem',
          }}
        >
          {/* Meta row */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.5rem',
              fontSize: '0.625rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'rgba(204,204,204,0.6)',
            }}
          >
            <span style={{ color: 'white' }}>Editorial {POST.number}</span>
            <span style={{ display: 'block', width: '3rem', height: '1px', background: 'rgba(255,255,255,0.2)' }} />
            <span>{POST.location}</span>
          </div>

          {/* Title */}
          <h1
            className="scramble-in"
            style={{
              fontSize: 'clamp(2.5rem, 9vw, 7rem)',
              fontWeight: 300,
              letterSpacing: '-0.05em',
              color: 'white',
              lineHeight: 0.9,
              maxWidth: '20ch',
            }}
          >
            {renderTitle()}
          </h1>

          {/* Read time */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
            <span
              style={{
                fontSize: '0.625rem',
                color: 'rgba(204,204,204,0.5)',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
              }}
            >
              {POST.readTime} • {POST.date}
            </span>
            <div
              style={{
                height: '4rem',
                width: '1px',
                background: 'linear-gradient(to bottom, white, transparent)',
              }}
            />
          </div>
        </div>
      </section>

      {/* ── Body ── */}
      <section style={{ padding: '3rem 2rem 16rem', position: 'relative' }}>
        <div
          style={{
            maxWidth: '72rem',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '8rem',
          }}
        >
          {/* Two-column wrapper: sidebar + content */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0,1fr)',
              gap: '8rem',
            }}
          >
            {/* Sidebar — visible solo en pantallas grandes via CSS */}
            <style>{`
              @media (min-width: 1280px) {
                .article-layout { grid-template-columns: 220px 1fr !important; }
                .article-aside  { display: flex !important; }
              }
            `}</style>
            <div
              className="article-layout"
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: '8rem',
                alignItems: 'start',
              }}
            >
              {/* Aside */}
              <aside
                className="article-aside"
                style={{
                  display: 'none',
                  flexDirection: 'column',
                  gap: '4rem',
                  position: 'sticky',
                  top: '10rem',
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)' }}>Contributor</p>
                  <p style={{ fontSize: '0.875rem', color: 'white', fontWeight: 500 }}>
                    {POST.contributor.name}
                  </p>
                  <p style={{ fontSize: '0.875rem', color: 'rgba(204,204,204,0.6)' }}>
                    {POST.contributor.code} — {POST.contributor.role}
                  </p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.3)' }}>Tags</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.875rem', color: 'rgba(204,204,204,0.6)' }}>
                    {POST.tags.map((tag) => (
                      <a
                        key={tag}
                        href="#"
                        style={{ textDecoration: 'none', color: 'inherit', transition: 'color 0.2s' }}
                        onMouseEnter={(e) => (e.target.style.color = 'white')}
                        onMouseLeave={(e) => (e.target.style.color = 'rgba(204,204,204,0.6)')}
                      >
                        [ {tag} ]
                      </a>
                    ))}
                  </div>
                </div>
              </aside>

              {/* Main content */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8rem' }}>
                {POST.body.map((block, i) => (
                  <BodyBlock key={i} block={block} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Next Article ── */}
      <NextArticle next={POST.next} />
    </main>
  );
}