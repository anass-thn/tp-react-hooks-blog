import { useTheme } from './ThemeProvider';

function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} style={{ margin: '20px', padding: '10px 20px' }}>
      {theme === 'light' ? 'Passer en sombre 🌙' : 'Passer en clair ☀️'}
    </button>
  );
}

export default ThemeSwitcher;
