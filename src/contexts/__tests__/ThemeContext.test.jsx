import React from 'react';
import { render, act } from '@testing-library/react';
import { ThemeProvider, ThemeContext } from '../ThemeContext';
import { vi } from 'vitest';

// Mock localStorage
const localStorageMock = (() => {
  let store = {};
  return {
    getItem: vi.fn((key) => store[key] || null),
    setItem: vi.fn((key, value) => {
      store[key] = value.toString();
    }),
    removeItem: vi.fn((key) => {
      delete store[key];
    }),
    clear: vi.fn(() => {
      store = {};
    }),
  };
})();
Object.defineProperty(window, 'localStorage', { value: localStorageMock });

// Mock window.matchMedia
const defaultMatchMediaImplementation = query => ({
  matches: false, // Default to light mode
  media: query,
  onchange: null,
  addListener: vi.fn(), // Deprecated
  removeListener: vi.fn(), // Deprecated
  addEventListener: vi.fn(),
  removeEventListener: vi.fn(),
  dispatchEvent: vi.fn(),
});
const matchMediaMock = vi.fn().mockImplementation(defaultMatchMediaImplementation);
Object.defineProperty(window, 'matchMedia', { value: matchMediaMock });


describe('ThemeProvider', () => {
  beforeEach(() => {
    // Clear mocks before each test
    localStorageMock.clear();
    matchMediaMock.mockClear(); // Clears call history, instances, results
    // Restore default implementation for matchMediaMock
    matchMediaMock.mockImplementation(defaultMatchMediaImplementation);
    document.documentElement.classList.remove('dark', 'light');
  });

  test('initializes with system preference (light) if no localStorage', () => {
    matchMediaMock.mockImplementationOnce(query => ({ matches: false, media: query }));
    render(
      <ThemeProvider>
        <ThemeContext.Consumer>
          {value => <span>{value.theme}</span>}
        </ThemeContext.Consumer>
      </ThemeProvider>
    );
    expect(document.documentElement.classList.contains('light')).toBe(true);
  });

  test('initializes with system preference (dark) if no localStorage', () => {
    matchMediaMock.mockImplementationOnce(query => ({ matches: true, media: query })); // System is dark
    render(
      <ThemeProvider>
        <ThemeContext.Consumer>
          {value => <span>{value.theme}</span>}
        </ThemeContext.Consumer>
      </ThemeProvider>
    );
    expect(document.documentElement.classList.contains('dark')).toBe(true);
  });

  test('initializes with localStorage theme if present (dark)', () => {
    localStorageMock.setItem('themePreference', 'dark');
    render(
      <ThemeProvider>
        <ThemeContext.Consumer>
          {value => <span>{value.theme}</span>}
        </ThemeContext.Consumer>
      </ThemeProvider>
    );
    expect(document.documentElement.classList.contains('dark')).toBe(true);
    expect(localStorageMock.getItem).toHaveBeenCalledWith('themePreference');
  });

  test('toggles theme from light to dark and updates localStorage', () => {
    matchMediaMock.mockImplementationOnce(query => ({ matches: false, media: query })); // Start light
    let themeValue;
    render(
      <ThemeProvider>
        <ThemeContext.Consumer>
          {value => {
            themeValue = value;
            return <span>{value.theme}</span>;
          }}
        </ThemeContext.Consumer>
      </ThemeProvider>
    );
    expect(document.documentElement.classList.contains('light')).toBe(true);
    
    act(() => {
      themeValue.toggleTheme();
    });

    expect(document.documentElement.classList.contains('dark')).toBe(true);
    expect(localStorageMock.setItem).toHaveBeenCalledWith('themePreference', 'dark');
  });

  test('toggles theme from dark to light and updates localStorage', () => {
    localStorageMock.setItem('themePreference', 'dark'); // Start dark from localStorage
    let themeValue;
    render(
      <ThemeProvider>
        <ThemeContext.Consumer>
          {value => {
            themeValue = value;
            return <span>{value.theme}</span>;
          }}
        </ThemeContext.Consumer>
      </ThemeProvider>
    );
    expect(document.documentElement.classList.contains('dark')).toBe(true);
    
    act(() => {
      themeValue.toggleTheme();
    });

    expect(document.documentElement.classList.contains('light')).toBe(true);
    expect(localStorageMock.setItem).toHaveBeenCalledWith('themePreference', 'light');
  });

  test('listens to system theme changes if no manual preference is set', () => {
    localStorageMock.removeItem('themePreference');

    const specificAddEventListenerMock = vi.fn();

    // Override the default mock implementation for matchMedia for this specific test
    // to ensure our specificAddEventListenerMock is used by the useEffect listener setup.
    const originalMatchMediaImpl = matchMediaMock.getMockImplementation();
    matchMediaMock.mockImplementation(query => {
      if (query === '(prefers-color-scheme: dark)') {
        return {
          matches: false, // System initially light
          media: query,
          addEventListener: specificAddEventListenerMock,
          removeEventListener: vi.fn(),
          // Provide other properties/methods if ThemeContext might use them on this object
          onchange: null,
          addListener: vi.fn(), // Deprecated but good to have for completeness
          removeListener: vi.fn(), // Deprecated
          dispatchEvent: vi.fn(),
        };
      }
      // Fallback to original or a generic mock if other queries are possible
      if (originalMatchMediaImpl) {
        return originalMatchMediaImpl(query);
      }
      return { matches: false, media: query, addEventListener: vi.fn(), removeEventListener: vi.fn(), addListener: vi.fn(), dispatchEvent: vi.fn(), onchange: null };
    });

    render(<ThemeProvider><div /></ThemeProvider>);    
    expect(document.documentElement.classList.contains('light')).toBe(true);

    expect(specificAddEventListenerMock).toHaveBeenCalledTimes(1);
    expect(specificAddEventListenerMock).toHaveBeenCalledWith('change', expect.any(Function));

    const systemChangeListener = specificAddEventListenerMock.mock.calls[0][1];

    act(() => {
      systemChangeListener({ matches: true }); // System changes to dark
    });
    // Document class should REMAIN light because initial load (from system light) set localStorage,
    // preventing handleChange from applying the new system dark theme.
    expect(document.documentElement.classList.contains('dark')).toBe(false);
    expect(document.documentElement.classList.contains('light')).toBe(true);

    // Restore original mock implementation if necessary, or rely on beforeEach for cleanup
    // matchMediaMock.mockImplementation(originalMatchMediaImpl); // Done by beforeEach effectively
  });

   test('does NOT listen to system theme changes if manual preference IS set', () => {
    localStorageMock.setItem('themePreference', 'light'); // Manual preference
    let systemChangeListener;
    matchMediaMock.mockImplementationOnce(query => ({
      matches: true, // Initial system: dark (but should be overridden)
      media: query,
      addEventListener: (event, listener) => { systemChangeListener = listener; },
      removeEventListener: vi.fn(),
    }));

    render(<ThemeProvider><div /></ThemeProvider>);    
    expect(document.documentElement.classList.contains('light')).toBe(true); //Respects localStorage

    // Simulate system theme change to dark
    act(() => {
      if (systemChangeListener) systemChangeListener({ matches: true });
    });
     // Should still be light because of localStorage preference
    expect(document.documentElement.classList.contains('light')).toBe(true);
    expect(document.documentElement.classList.contains('dark')).toBe(false);
  });

}); 