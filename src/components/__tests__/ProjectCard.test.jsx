import { render, screen, waitFor } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import ProjectCard from '../ProjectCard';
import { MotionGlobalConfig } from 'framer-motion';

// Props needed for ProjectCard
const defaultProps = {
  title: 'Test Project',
  href: 'http://example.com',
  src: 'test.jpg',
  alt: 'Test Image',
  description: 'Test Description',
  tag: 'Test Tag',
  index: 0,
};

describe('ProjectCard Component', () => {
  let mockObserverInstance;

  beforeEach(() => {
    // Reset the mock before each test
    mockObserverInstance = {
      observe: vi.fn(),
      unobserve: vi.fn(),
      disconnect: vi.fn(),
    };
    window.IntersectionObserver = vi.fn().mockReturnValue(mockObserverInstance);
    
    // Option 1: Skip animations for simpler/faster tests
    // MotionGlobalConfig.skipAnimations = true;

    // Option 2: If not skipping, ensure RAF is mocked for Framer Motion in JSDOM
    // if (typeof window !== 'undefined') {
    //   global.window.requestAnimationFrame = (cb) => {
    //     return setTimeout(cb, 0);
    //   };
    //   global.window.cancelAnimationFrame = (id) => {
    //     clearTimeout(id);
    //   };
    // }
  });

  it('should be hidden initially and animate into view', async () => {
    render(<ProjectCard {...defaultProps} />);

    // Initial state (hidden)
    // Framer Motion sets opacity to 0 and y to 50, then transitions
    // We can check for opacity if the element is present in the DOM but styled to be invisible
    const cardElement = screen.getByText(defaultProps.title).closest('div.section-column'); // Find a stable parent or the motion.div
    
    expect(cardElement).toBeInTheDocument();
    // Note: Directly checking style.opacity might be tricky if Framer Motion applies it dynamically
    // or if initial styles are set directly via variants without immediate DOM reflection accessible to RTL.
    // If `skipAnimations` is true, this might immediately be opacity: 1.
    // A more robust check might be to see if it eventually becomes visible.

    // Simulate the component coming into view
    // Get the callback passed to IntersectionObserver's constructor
    const observerCallback = window.IntersectionObserver.mock.calls[0][0];
    // Manually trigger the callback with an entry
    observerCallback([{ isIntersecting: true, target: cardElement }]);

    // Wait for animation to complete and check for visible state
    await waitFor(() => {
      // Check for a style that indicates visibility, e.g., opacity: 1
      // This depends on your 'visible' variant
      expect(cardElement).toHaveStyle('opacity: 1');
    });

    // Optionally, if y also changes, you could check that too,
    // but transform styles can be complex to assert directly.
    // For example: expect(cardElement).toHaveStyle('transform: translateY(0px)');
  });

  it('should have correct content and attributes', () => {
    render(<ProjectCard {...defaultProps} />);
    expect(screen.getByText(defaultProps.title)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.description)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.tag)).toBeInTheDocument();
    const image = screen.getByAltText(defaultProps.alt);
    expect(image).toHaveAttribute('src', defaultProps.src);
    const link = image.closest('a');
    expect(link).toHaveAttribute('href', defaultProps.href);
  });

  // Optional: Test hover animation if MotionGlobalConfig.skipAnimations = false
  // This is more complex as it requires simulating user events and potentially
  // waiting for style changes.
  // it('should scale on hover', async () => {
  //   MotionGlobalConfig.skipAnimations = false; // Ensure animations are on for this test
  //   render(<ProjectCard {...defaultProps} />);
  //   const image = screen.getByAltText(defaultProps.alt);
    
  //   // Simulate observer making it visible first
  //   const cardElement = screen.getByText(defaultProps.title).closest('div.section-column');
  //   const observerCallback = window.IntersectionObserver.mock.calls[0][0];
  //   observerCallback([{ isIntersecting: true, target: cardElement }]);
    
  //   await waitFor(() => {
  //     expect(cardElement).toHaveStyle('opacity: 1');
  //   });

  //   fireEvent.mouseEnter(image);

  //   await waitFor(() => {
  //     // Check for scale style. This depends on how Framer Motion applies it.
  //     // It might be a transform: scale(1.05)
  //     // This assertion can be tricky.
  //     expect(image).toHaveStyle('transform: scale(1.05)'); 
  //   });

  //   fireEvent.mouseLeave(image);

  //   await waitFor(() => {
  //     expect(image).toHaveStyle('transform: scale(1)');
  //   });
  //   MotionGlobalConfig.skipAnimations = true; // Reset for other tests
  // });
}); 