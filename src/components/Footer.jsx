import { Link } from 'react-router-dom';

const footerSections = [
  {
    heading: 'Bravvia',
    links: [
      { label: 'Home',    to: '/' },
      { label: 'About',   to: '/about' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    heading: 'Studio',
    links: [
      { label: 'Work',    to: '/work' },
      { label: 'News',    to: '/news' },
    ],
  },
];

const socialLinks = [
  { label: 'LinkedIn', url: 'https://linkedin.com/in/tu-perfil' },
  { label: 'Instagram', url: 'https://instagram.com/tu-usuario' },
  { label: 'Privacy policy', url: '/privacy' },
];

/**
 * Footer
 * Sticky footer with radial texture + the big yellow Bravvia sign below.
 */
export default function Footer() {
  return (
    <>
      {/* ── Main footer ── */}
      <footer
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 0,
          background: '#000',
          padding: '5rem 2rem 2.5rem',
          overflow: 'hidden',
        }}
      >
        {/* Texture layers */}
        <div
          className="footer-texture"
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            opacity: 0.3,
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '100%',
            height: 400,
            opacity: 0.1,
            pointerEvents: 'none',
          }}
        >
          <div
            style={{
              width: '100%',
              height: '100%',
              border: '0.5px solid rgba(255,255,255,0.1)',
              borderRadius: '100%',
              transform: 'scale(1.5)',
            }}
          />
        </div>

        {/* Content */}
        <div
          style={{
            maxWidth: '90rem',
            margin: '0 auto',
            position: 'relative',
            zIndex: 10,
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '3rem',
              marginBottom: '10rem',
            }}
          >
            {/* Brand blurb */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <p
                style={{
                  fontSize: '1rem',
                  color: 'white',
  
                  maxWidth: 250,
                  lineHeight: 1.8,
                }}
              >
               Brand strategy and identity for companies ready to take a position. Built for the brave.
              </p>
            </div>

            {/* Nav sections */}
            {footerSections.map(({ heading, links }) => (
              <div key={heading} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <h4
                  style={{
                    fontSize: '1.2rem',
                    color: 'var(--primary)',
                    fontWeight: 400,
                  
                  }}
                >
                  {heading}
                </h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {links.map(({ label, to }) => (
                    <li key={label}>
                      <Link
                        to={to}
                        style={{
                          fontSize: '1rem',
                          color: 'white',
                          letterSpacing: '0.1em',
                          textDecoration: 'none',
                          transition: 'color 0.2s',
                        }}
                        onMouseEnter={(e) => (e.target.style.color = 'white')}
                       
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Contact */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
              <h4
                style={{
                  fontSize: '1.2rem',
                  fontWeight: 400,
                  color: 'var(--primary)',
                
                }}
              >
                Initiate
              </h4>
              <a
                href="mailto:hello@bravvia.agency"
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 300,
                  color: 'white',
                  textDecoration: 'none',
                  
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => (e.target.style.color = 'var(--primary)')}
                onMouseLeave={(e) => (e.target.style.color = 'white')}
              >
                hello@bravviaa.com
              </a>
              <div style={{ display: 'flex', gap: '1.5rem', fontSize: '0.9rem' }}>
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  style={{ 
                    color: 'rgba(255,255,255,0.6)', 
                    textDecoration: 'none', 
                    transition: 'color 0.2s' 
                  }}
                  onMouseEnter={(e) => (e.target.style.color = 'var(--primary)')}
                  onMouseLeave={(e) => (e.target.style.color = 'rgba(255,255,255,0.6)')}
                >
                  {link.label}
                </a>
  ))}
</div>
            </div>
          </div>
        </div>
      </footer>

      {/* ── Big yellow sign ── */}
      <div className='logo-yellow'
        style={{
          background: 'var(--primary)',
          position: 'sticky',
          top: 0,
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
         
        }}
      >
        <Link
          to="/"
          style={{ display: 'block', textDecoration: 'none' }}
          data-cursor-hover
        >
          <h4
            style={{
              fontSize: '16vw',
              color: 'black',
              lineHeight: 1,
              transition: 'letter-spacing 0.7s',
               fontWeight: 400,
            }}
            onMouseEnter={(e) => (e.target.style.letterSpacing = '0')}
            onMouseLeave={(e) => (e.target.style.letterSpacing = '-0.04em')}
          >
            Bravvia
          </h4>
        </Link>
      </div>
    </>
  );
}
