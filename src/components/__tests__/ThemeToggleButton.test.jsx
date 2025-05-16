import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider, ThemeContext } from '../ThemeToggleButton';
import ThemeToggleButton from '../ThemeToggleButton';
import { vi } from 'vitest';

describe('ThemeToggleButton', () => {
  // Mock toggleTheme function for checking calls
  const mockSetTheme = vi.fn();

  const renderWithProvider = (ui, { theme = 'light', ...renderOptions } = {}) => {
    return render(
      <ThemeContext.Provider value={{ theme, setTheme: mockSetTheme }}>
        {ui}
      </ThemeContext.Provider>,
      renderOptions
    );
  };

  beforeEach(() => {
    mockSetTheme.mockClear();
    // Any other cleanup specific to these tests
  });

  test('renders moon icon and correct aria-label when theme is light', () => {
    renderWithProvider(<ThemeToggleButton />);

    const button = screen.getByRole('button');
    expect(button).toHaveClass('light-mode');
    expect(button).toHaveAttribute('aria-label', 'Switch to dark mode');
    
    const moonIcon = button.querySelector('.moon-icon');
    expect(moonIcon).toBeInTheDocument();
    expect(moonIcon).toHaveClass('visible');
    expect(moonIcon).toHaveAttribute('fill', '#404040'); 

    const sunIcon = button.querySelector('.sun-icon');
    expect(sunIcon).not.toHaveClass('visible');
    expect(sunIcon).toHaveAttribute('fill', 'none');
  });

  test('renders sun icon and correct aria-label when theme is dark', () => {
    renderWithProvider(<ThemeToggleButton />, { theme: 'dark' });

    const button = screen.getByRole('button');
    expect(button).toHaveClass('dark-mode');
    expect(button).toHaveAttribute('aria-label', 'Switch to light mode');

    const sunIcon = button.querySelector('.sun-icon');
    expect(sunIcon).toBeInTheDocument();
    expect(sunIcon).toHaveClass('visible');
    expect(sunIcon).toHaveAttribute('fill', '#FBBF24');

    const moonIcon = button.querySelector('.moon-icon');
    expect(moonIcon).not.toHaveClass('visible');
    expect(moonIcon).toHaveAttribute('fill', 'none');
  });

  test('calls setTheme when clicked', () => {
    renderWithProvider(<ThemeToggleButton />);

    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(mockSetTheme).toHaveBeenCalledWith('dark');
  });
}); 