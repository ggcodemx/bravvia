import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { navLinks } from '../data';
import { useThemeContext } from '../context/ThemeContext';

export default function Navbar() {
  const { pathname } = useLocation();
  const { theme } = useThemeContext();
  const isDark = theme === 'dark';
  const [menuOpen, setMenuOpen] = useState(false);

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

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

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
          className="nav-logo"
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

      {/* Desktop: links + toggle */}
      <div className="nav-desktop">
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
      </div>

      {/* Mobile: hamburger button */}
      <button
        className="nav-hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Abrir menú"
        style={{ color: textColor }}
      >
        <span className={`hamburger-bar ${menuOpen ? 'open-top' : ''}`} />
        <span className={`hamburger-bar ${menuOpen ? 'open-mid' : ''}`} />
        <span className={`hamburger-bar ${menuOpen ? 'open-bot' : ''}`} />
      </button>

      {/* Mobile: menú desplegable */}
      <div
        className={`nav-mobile-menu ${menuOpen ? 'nav-mobile-menu--open' : ''}`}
        style={{ background: isDark ? '#0a0a0a' : '#ffffff' }}
      >
        <button
          className="nav-mobile-close"
          onClick={() => setMenuOpen(false)}
          aria-label="Cerrar menú"
          style={{ color: isDark ? '#ffffff' : '#000000' }}
        >
          ✕
        </button>
        {navLinks.map(({ label, to }) => (
          <Link
            key={to}
            to={to}
            className="nav-mobile-link"
            onClick={() => setMenuOpen(false)}
            style={{
              color: pathname === to ? 'var(--primary)' : isDark ? '#ffffff' : '#000000',
            }}
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
