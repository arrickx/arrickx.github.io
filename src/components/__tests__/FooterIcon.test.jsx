import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import FooterIcon from '../FooterIcon';

describe('FooterIcon Component', () => {
  const mockProps = {
    href: 'https://example.com',
    src: '/test-icon.svg',
    alt: 'Test Icon'
  };

  it('renders the icon with correct attributes', () => {
    render(<FooterIcon {...mockProps} />);
    const icon = screen.getByAltText(mockProps.alt);
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute('src', mockProps.src);
  });

  it('renders a link with correct href and attributes', () => {
    render(<FooterIcon {...mockProps} />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', mockProps.href);
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    expect(link).toHaveClass('footer-icon');
    expect(link).toHaveClass('bg-zinc-900');
  });
}); 