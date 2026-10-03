import React, { useState, useEffect } from 'react';

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    const theme = isDarkMode ? 'dark' : 'light';
    // Applica data-theme="dark" oppure data-theme="light" sul tag <html>
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <button 
      className="theme-toggle-btn"
      onClick={toggleTheme}
      type="button"
      aria-label="Cambia tema"
      style={{
        background: 'transparent',
        border: '1px solid var(--border-color)',
        color: 'var(--text-primary)',
        padding: '6px 14px',
        borderRadius: '20px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: '6px',
        fontSize: '0.85rem',
        fontWeight: '600'
      }}
    >
      <span>{isDarkMode ? '☀️' : '🌙'}</span>
      <span>{isDarkMode ? 'Chiaro' : 'Scuro'}</span>
    </button>
  );
};

export default ThemeToggle;