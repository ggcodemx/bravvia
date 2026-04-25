import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useReveal } from '../hooks/useReveal';
import ProjectCard from '../components/ProjectCard';
import NewsCard from '../components/NewsCard';
import { projects, news } from '../data';
import videoFondo from '../media/fondo.mp4';

/**
 * HomePage
 * Full-page hero with video, projects scroll, and news section.
 */
export default function HomePage() {
  useReveal();

  useEffect(() => {
    document.title = 'Bravvia Agency | Global Branding';
  }, []);

  return (
    <>
      {/* ── Hero ── */}
      <main className='hero-section'
        style={{
          position: 'relative',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          paddingTop: '5rem',
          
        }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0,
          }}
        >
          <source src={videoFondo} type="video/mp4" />
        </video>

        {/* Overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(0,0,0,0.3)',
            zIndex: 5,
          }}
        />

        {/* Bottom-left tagline */}
        <div
          style={{
            position: 'absolute',
            bottom: '2.5rem',
            left: '2rem',
            zIndex: 50,
            mixBlendMode: 'difference',
          }}
        >
          <h2
            style={{
              fontSize: 'clamp(2rem, 5vw, 4rem)',
              fontWeight: 300,
              lineHeight: 1,
            }}
          >
            Built by the brave. Built for the brave.
          </h2>
        </div>
      </main>

      {/* ── Brand statement ── */}
      <section
        style={{
          position: 'relative',
          zIndex: 30,
          background: 'var(--bg-dark)',
          padding: '2rem 2rem',
          maxWidth: '72rem',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
           
            margin: '0 auto',
          }}
        >
          <h2
            className="reveal"
            style={{
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: 300,
              letterSpacing: '-0.04em',
              lineHeight: 1.05,
            }}
          >
            We are an independent brand consultancy.  Our work is built for the companies that move first, define their own terms, and know that brand is the bridge between how a business thinks and how the world receives it.
          </h2>
        </div>
      </section>

      {/* ── Projects scroll ── */}
      <section
        style={{
          position: 'relative',
          zIndex: 30,
          background: 'var(--bg-dark)',
          padding: '10rem 2rem',
        }}
      >
        <div
          style={{
            maxWidth: '90rem',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '10rem',
          }}
        >
          {projects.map((project, i) => {
            const isEven = i % 2 === 0;
            return (
              <div
                key={project.id}
                className={`reveal project-row ${isEven ? 'even' : 'odd'}`}
                style={{
                  alignItems: 'center',
                }}
              >
                {/* Text */}
                <div className='project-grid-item'
                
                >
                  <h2 className='project-title'
                    style={{
                      fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                      fontWeight: 300,
                      lineHeight: 1,
                    }}
                  >
                    {project.title}
                  </h2>
                  <h3 className='project-brand'
                    style={{
                      fontSize: '1.25rem',
                      color: 'rgba(255,255,255,0.5)',
                      fontWeight: 300,
                      lineHeight: 1,
                    }}
                  >
                    {project.type}
                  </h3>
                  <p className='project-text'
                    style={{
                      color: 'white',
                      lineHeight: 1.7,
                      letterSpacing: '0.03em',
                      maxWidth: '24rem',
                    }}
                  >
                    {project.description}
                  </p>
                </div>

                {/* Image */}
                <div className='project-img'
                 
                >
                  <ProjectCard project={project} aspect="16/10" showMeta={false} />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── News Section ── */}
      <section style={{ background: 'black', padding: '6rem 2rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: '88rem', margin: '0 auto' }}>
          <h2
            className="reveal"
            style={{
              fontSize: '1.25rem',
              fontWeight: 300,
              letterSpacing: '-0.04em',
              marginBottom: '3rem',
            }}
          >
            Insights&nbsp;&nbsp;•&nbsp;&nbsp;News&nbsp;&nbsp;•&nbsp;&nbsp;Press
          </h2>

          <div 
  style={{ 
    display: 'grid', 
    gridTemplateColumns: 'repeat(3, 1fr)', // Crea 3 columnas iguales
    gap: '1.25rem' 
  }}
>
  {news.slice(0, 6).map((item) => (
    <div key={item.id} style={{ minWidth: 0 }}>
      <NewsCard item={item} />
    </div>
  ))}
</div>

          <div style={{ marginTop: '4rem', textAlign: 'right' }}>
            <Link
              to="/news"
              style={{
                fontSize: '1rem',
                color: 'rgba(255,255,255,0.5)',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.target.style.color = 'var(--primary)')}
              onMouseLeave={(e) => (e.target.style.color = 'rgba(255,255,255,0.5)')}
            >
              All news →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
