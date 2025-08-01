import React from 'react';
import { useTheme } from '../ThemeContext';

const ThemeToggle = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      style={{
        padding: '10px 20px',
        margin: '10px',
        borderRadius: '6px',
        border: 'none',
        cursor: 'pointer',
        backgroundColor: darkMode ? '#333' : '#eee',
        color: darkMode ? '#fff' : '#000',
      }}
    >
      {darkMode ? 'Light Mode' : 'Dark Mode'}
    </button>
  );
};

export default ThemeToggle;
