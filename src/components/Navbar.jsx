import { Link, useLocation } from 'react-router-dom';
import { navLinks } from '../data';
import { useThemeContext } from '../context/ThemeContext';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const { pathname } = useLocation();
  const { theme } = useThemeContext();
  const isDark = theme === 'dark';
  const textColor = isDark ? '#ffffff' : '#000000';

  return (
    <nav className='main-nav'
      style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 50,
        padding: '2.5rem var(--side-padding)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        color: textColor,
      }}
    >
      {/* Logo */}
      <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
        <img
          src="/Bravvia_logotipo_blanco.png"
          alt="Bravvia - branding agency"
          style={{
            height: '3.5rem',
            objectFit: 'contain',
            filter: isDark ? 'none' : 'invert(1)',
          }}
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
            color: textColor,
          }}
        >
          Bravvia
        </span>
      </Link>

      {/* Links + Toggle */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.5rem' }}>
        {navLinks.map(({ label, to }) => (
          <Link
            key={to}
            to={to}
            style={{
              fontSize: '1.4rem',
              color: pathname === to ? 'var(--primary)' : textColor,
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => (e.target.style.color = 'var(--primary)')}
            onMouseLeave={(e) =>
              (e.target.style.color = pathname === to ? 'var(--primary)' : textColor)
            }
          >
            {label}
          </Link>
        ))}
        <ThemeToggle />
      </div>
    </nav>
  );
}
