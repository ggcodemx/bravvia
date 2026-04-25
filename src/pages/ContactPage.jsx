import { useEffect } from 'react';
import { useReveal } from '../hooks/useReveal';
import WorldClock from '../components/WorldClock';

import { globalOffices } from '../data';

/**
 * ContactPage
 * Locations with live clocks + social links.
 */
export default function ContactPage() {
  useReveal();

  useEffect(() => {
    document.title = 'Contact | Bravvia Agency';
  }, []);

  return (
    <main>
      {/* ── Hero ── */}
      <section style={{ padding: '12rem 2rem 5rem' }}>
        <div style={{ maxWidth: '90rem', margin: '0 auto' }}>
          <h2
            className="reveal"
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              fontWeight: 300,
              letterSpacing: '-0.05em',
              lineHeight: 1,
            }}
          >
           The work starts here.
          </h2>
        </div>
      </section>

      {/* ── Banner ── */}
      <section style={{ padding: '0 2rem', marginBottom: '8rem' }}>
        <div
          className="reveal"
          style={{
            aspectRatio: '21/9',
            overflow: 'hidden',
            background: '#111',
            filter: 'grayscale(1) contrast(1.2)',
          }}
        >
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAyxurEiT71wsmlA89X6ZhNvtt_WEhYZrimf2FnEB5G6mLI5iO9WUy_SPS7vGEjgkwRVytx6peJuDJ_GLpuEt67nw8G-mYr7nFx0TCLzKXToXlEc5V1Fumn62rXxnwmxS0PYaLUaxDktagl0QtYbobdVasmj3RJQkw3XB2J5SUfWfMgrtrOM4wG9iA5hpC1J8IYF2zGJ1xxDWT1wqH0swLSPapCPDiNAZ3k7UfSTGL5npkbfejcTvkH_fE2AMbG6o0WztBVy8E_i7rs"
            alt="Architectural banner"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              opacity: 0.8,
              transition: 'transform 3s ease-out',
            }}
            onMouseEnter={(e) => (e.target.style.transform = 'scale(1.05)')}
            onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
          />
        </div>
      </section>

      {/* ── Clocks + Contact ── */}
      <section style={{ padding: '0 2rem 12rem' }}>
        <div
          style={{
            maxWidth: '90rem',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '6rem',
          }}
        >
          {/* World clocks */}
          <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
  
  {/* Sección: Oficina Principal */}
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
    <p style={{ fontSize: '1rem', color: 'white' }}>
      Where we work
    </p>
    <WorldClock 
      city="Mexico City" 
      timezone="America/Mexico_City" 
      subtitle="Main Office / CST" 
    />
  </div>

  {/* Sección: Oficinas Globales */}
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
    <p style={{ fontSize: '1rem', fontWeight: '400' }}>
      Serving clients across time zones
    </p>
    
    <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
      {globalOffices.map((office) => (
        <WorldClock key={office.city} {...office} />
      ))}
    </div>
  </div>

</div>

          {/* Direct contact */}
          <div
            className="reveal"
            style={{ display: 'flex', flexDirection: 'column',  gap: '1rem', animationDelay: '0.2s' }}
          >
            <div>
              <p
                style={{
                  fontSize: '1rem',
                  
                  marginBottom: '3rem',
                }}
              >
                Direct channel
              </p>
              <a
                href="mailto:hello@bravvia.agency"
                style={{
                  fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
                  fontWeight: 300,
                  letterSpacing: '-0.03em',
                  color: 'white',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                  display: 'block',
                }}
                onMouseEnter={(e) => (e.target.style.color = 'rgba(255,255,255,0.5)')}
                onMouseLeave={(e) => (e.target.style.color = 'white')}
              >
                hello@bravvia.agency
              </a>
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '3rem',
              }}
            >
              {[
                { label: 'Instagram', handle: '@bravviaa', href: '#' },
                { label: 'LinkedIn',  handle: 'Bravvia Agency', href: '#' },
                { label: 'Facebook',  handle: 'Bravvia', href: '#' },
              ].map(({ label, handle, href }) => (
                <div key={label}>
                  <p
                    style={{
                      fontSize: '1rem',
                      color: 'rgba(255,255,255,0.3)',
                      marginBottom: '1.5rem',
                    }}
                  >
                    {label}
                  </p>
                  <a
                    href={href}
                    style={{
                      fontSize: '1rem',
                      color: 'white',
                      textDecoration: 'none',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={(e) => (e.target.style.color = 'rgba(255,255,255,0.5)')}
                    onMouseLeave={(e) => (e.target.style.color = 'white')}
                  >
                    {handle}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
