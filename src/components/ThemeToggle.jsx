import { useThemeContext } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useThemeContext();
  const isDark = theme === 'dark';
  const mutedColor = isDark ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.4)';

  return (
    <button
      onClick={toggleTheme}
      aria-label={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
      style={{
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        fontSize: '1.4rem',
        color: mutedColor,
        padding: 0,
        lineHeight: 1,
        transition: 'color 0.2s',
        marginTop: '0.5rem',
        display: 'block',
      }}
      onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--primary)')}
      onMouseLeave={(e) => (e.currentTarget.style.color = mutedColor)}
    >
      {isDark ? '☀' : '☽'}
    </button>
  );
}