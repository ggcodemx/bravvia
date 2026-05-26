import { useThemeContext } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useThemeContext();
  const isDark = theme === 'dark';

  const fg = isDark ? '#ffffff' : '#000000';
  const trackBg     = isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.07)';
  const trackBorder = fg;
  const thumbColor  = fg;

  return (
    <button
      onClick={toggleTheme}
      className={`theme-switch ${isDark ? 'theme-switch--dark' : 'theme-switch--light'}`}
      aria-label={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
      title={isDark ? 'Modo claro' : 'Modo oscuro'}
    >
      <span
        className="theme-switch__track"
        style={{ background: trackBg, borderColor: trackBorder }}
      >
        <span
          className="theme-switch__thumb"
          style={{ background: thumbColor }}
        />
      </span>
    </button>
  );
}