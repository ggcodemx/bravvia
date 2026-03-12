import { Link, useLocation } from 'react-router-dom';
import { navLinks } from '../data';

/**
 * Navbar
 * Fixed top nav with logo + vertical links on the right.
 * mix-blend-difference gives the invert effect over dark/light sections.
 */
export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <nav className='main-nav'
      style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 50,
        padding: '2.5rem 2rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
         color: '#ffffff'
      }}
    >
      {/* Logo */}
      <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
        <img
          src="/Bravvia_logotipo_blanco.png"
          alt="Bravvia - branding agency"
          style={{ height: '3.5rem', objectFit: 'contain' }}
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.nextSibling.style.display = 'block';
          }}
        />
        <span
          style={{
            display: 'none',
            fontSize: '2.5rem',
            fontWeight: 300,
            textDecorationStyle:'none',
            color: 'white',
          }}
        >
          Bravvia
        </span>
      </Link>

      {/* Links */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.5rem' }}>
        {navLinks.map(({ label, to }) => (
          <Link
            key={to}
            to={to}
            style={{
              fontSize: '1.4rem',
              color: pathname === to ? 'var(--primary)' : 'white',
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => (e.target.style.color = 'var(--primary)')}
            onMouseLeave={(e) =>
              (e.target.style.color = pathname === to ? 'var(--primary)' : 'white')
            }
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
