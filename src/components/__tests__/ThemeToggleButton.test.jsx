import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider, ThemeContext } from '../../contexts/ThemeContext';
import ThemeToggleButton from '../ThemeToggleButton';
import { vi } from 'vitest';

describe('ThemeToggleButton', () => {
  // Mock toggleTheme function for checking calls
  const mockToggleTheme = vi.fn();

  const renderWithProvider = (ui, { providerProps, ...renderOptions }) => {
    return render(
      <ThemeContext.Provider {...providerProps}>{ui}</ThemeContext.Provider>,
      renderOptions
    );
  };

  beforeEach(() => {
    mockToggleTheme.mockClear();
    // Any other cleanup specific to these tests
  });

  test('renders moon icon and correct aria-label when theme is light', () => {
    const providerProps = {
      value: { theme: 'light', toggleTheme: mockToggleTheme },
    };
    renderWithProvider(<ThemeToggleButton />, { providerProps });

    // Check for moon icon visibility (sun should not be visible or have fill)
    // Note: SVGs might be tricky to assert directly by content if complex.
    // We rely on the fill prop and visibility class.
    const button = screen.getByRole('button');
    expect(button).toHaveClass('light-mode');
    expect(button).toHaveAttribute('aria-label', 'Switch to dark mode');
    
    // Assuming moonColor is #404040 for light mode as per component
    const moonIcon = button.querySelector('.moon-icon');
    expect(moonIcon).toBeInTheDocument();
    expect(moonIcon).toHaveClass('visible');
    expect(moonIcon).toHaveAttribute('fill', '#404040'); 

    const sunIcon = button.querySelector('.sun-icon');
    expect(sunIcon).not.toHaveClass('visible');
    expect(sunIcon).toHaveAttribute('fill', 'none');
  });

  test('renders sun icon and correct aria-label when theme is dark', () => {
    const providerProps = {
      value: { theme: 'dark', toggleTheme: mockToggleTheme },
    };
    renderWithProvider(<ThemeToggleButton />, { providerProps });

    const button = screen.getByRole('button');
    expect(button).toHaveClass('dark-mode');
    expect(button).toHaveAttribute('aria-label', 'Switch to light mode');

    // Assuming sunColor is #FBBF24 for dark mode as per component
    const sunIcon = button.querySelector('.sun-icon');
    expect(sunIcon).toBeInTheDocument();
    expect(sunIcon).toHaveClass('visible');
    expect(sunIcon).toHaveAttribute('fill', '#FBBF24');

    const moonIcon = button.querySelector('.moon-icon');
    expect(moonIcon).not.toHaveClass('visible');
    expect(moonIcon).toHaveAttribute('fill', 'none');
  });

  test('calls toggleTheme when clicked', () => {
    const providerProps = {
      value: { theme: 'light', toggleTheme: mockToggleTheme },
    };
    renderWithProvider(<ThemeToggleButton />, { providerProps });

    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(mockToggleTheme).toHaveBeenCalledTimes(1);
  });
}); 