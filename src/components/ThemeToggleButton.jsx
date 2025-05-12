import React from 'react';
import { useTheme } from '../hooks/useTheme';

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  // Define colors directly for clarity and direct control
  const moonColor = '#404040'; // Tailwind neutral-700
  const sunColor = '#FBBF24';  // Tailwind amber-400

  return (
    <button
      onClick={toggleTheme}
      className={`theme-toggle-button ${isDark ? 'dark-mode' : 'light-mode'}`}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <div className="theme-toggle-icon-container">
        {/* Moon Icon - visible in light mode */}
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          className={`moon-icon ${!isDark ? 'visible' : ''}`} 
          fill={!isDark ? moonColor : 'none'} // Apply fill directly
        >
          <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-3.51 1.713-6.634 4.362-8.542a.75.75 0 01.819.161z" clipRule="evenodd" />
        </svg>
        {/* Sun Icon - visible in dark mode */}
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          className={`sun-icon ${isDark ? 'visible' : ''}`} 
          fill={isDark ? sunColor : 'none'} // Apply fill directly
        >
          <path fillRule="evenodd" d="M12 2.25c-.552 0-1 .448-1 1v1.5a1 1 0 002 0v-1.5c0-.552-.448-1-1-1zM12 18.75c-.552 0-1 .448-1 1v1.5a1 1 0 002 0v-1.5c0-.552-.448-1-1-1zM5.082 6.072a.75.75 0 00-.021 1.06l1.061 1.06a.75.75 0 101.06-1.06l-1.06-1.061a.75.75 0 00-1.04-.021zM16.87 17.928a.75.75 0 00-.021 1.06l1.06 1.06a.75.75 0 101.06-1.06l-1.06-1.06a.75.75 0 00-1.04-.022zM2.25 12c0 .552.448 1 1 1h1.5a1 1 0 000-2h-1.5a1 1 0 00-1 1zM18.75 12c0 .552.448 1 1 1h1.5a1 1 0 000-2h-1.5a1 1 0 00-1 1zM6.072 18.918a.75.75 0 001.06.021l1.06-1.061a.75.75 0 00-1.06-1.06l-1.061 1.06a.75.75 0 00.021 1.04zM17.928 7.132a.75.75 0 001.06.021l1.06-1.06a.75.75 0 00-1.06-1.06l-1.061 1.06a.75.75 0 00.021 1.04zM12 7.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9z" clipRule="evenodd" />
        </svg>
      </div>
    </button>
  );
};

export default ThemeToggleButton; 