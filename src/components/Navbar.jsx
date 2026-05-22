import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { navLinks } from '../data';
import { useThemeContext } from '../context/ThemeContext';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const { pathname } = useLocation();
  const { theme } = useThemeContext();
  const isDark = theme === 'dark';

  // En modo claro sobre el hero del home, forzamos blanco para que se lea sobre el video oscuro
  const [overHero, setOverHero] = useState(pathname === '/');

  useEffect(() => {
    const isHome = pathname === '/';

    if (!isHome) {
      setOverHero(false);
      return;
    }

    const check = () => setOverHero(window.scrollY < window.innerHeight * 0.85);
    check();
    window.addEventListener('scroll', check, { passive: true });
    return () => window.removeEventListener('scroll', check);
  }, [pathname]);

  // En oscuro siempre blanco. En claro: blanco mientras estemos sobre el hero del home, negro en el resto.
  const textColor = isDark ? '#ffffff' : overHero ? '#ffffff' : '#000000';
  const logoFilter = isDark ? 'none' : overHero ? 'none' : 'invert(1)';

  return (
    <nav
      className='main-nav'
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
        transition: 'color 0.4s ease',
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
            filter: logoFilter,
            transition: 'filter 0.4s ease',
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
            transition: 'color 0.4s ease',
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
              transition: 'color 0.4s ease',
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
