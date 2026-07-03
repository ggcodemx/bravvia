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

  const scrolled = !overHero;

  const textColor = isDark ? '#ffffff' : overHero ? '#ffffff' : '#000000';

  const navBg = scrolled
    ? isDark
      ? 'rgba(10,10,10,0.96)'
      : 'rgba(255,255,255,0.96)'
    : 'transparent';

  return (
    <nav
      className="main-nav"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: scrolled
          ? '1rem var(--nav-side-padding)'
          : 'var(--nav-v-pad, 1.25rem) var(--nav-side-padding)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: navBg,
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
        color: textColor,
        transition: 'background 0.4s ease, color 0.4s ease, padding 0.4s ease, backdrop-filter 0.4s ease',
      }}
    >
      {/* Logo */}
      <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
        <span
          style={{
            fontSize: '2.5rem',
            fontWeight: 500,
            letterSpacing: '0.01em',
            color: textColor,
            transition: 'color 0.4s ease',
          }}
        >
          Bravvia
        </span>
      </Link>

      {/* Desktop links — solo visibles cuando estamos sobre el hero */}
      <div
        className="nav-desktop"
        style={{ display: scrolled ? 'none' : undefined }}
      >
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

      {/* Hamburger — siempre visible cuando hay scroll, solo mobile cuando está en hero */}
      <button
        className="nav-hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Abrir menú"
        style={{
          display: scrolled ? 'flex' : undefined,
          color: textColor,
        }}
      >
        <span className={`hamburger-bar ${menuOpen ? 'open-top' : ''}`} />
        <span className={`hamburger-bar ${menuOpen ? 'open-mid' : ''}`} />
        <span className={`hamburger-bar ${menuOpen ? 'open-bot' : ''}`} />
      </button>

      {/* Menú desplegable */}
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
