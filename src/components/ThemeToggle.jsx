import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button onClick={toggleTheme}>
      Passer en {theme === 'light' ? 'Mode Sombre' : 'Mode Clair'}
    </button>
  );
};

export default ThemeToggle;
