import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Run cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup();
});

const mockIntersectionObserver = vi.fn();
mockIntersectionObserver.mockReturnValue({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
});

window.IntersectionObserver = mockIntersectionObserver; 