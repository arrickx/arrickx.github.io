import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Header from '../Header';

describe('Header Component', () => {
  const mockProps = {
    name: 'John Doe',
    statement: 'Web Developer',
    src: '/test-image.jpg',
    alt: 'John Doe Profile Picture'
  };

  it('renders the name correctly', () => {
    render(<Header {...mockProps} />);
    expect(screen.getByText(mockProps.name)).toBeInTheDocument();
  });

  it('renders the statement correctly', () => {
    render(<Header {...mockProps} />);
    expect(screen.getByText(mockProps.statement)).toBeInTheDocument();
  });

  it('renders the image with correct attributes', () => {
    render(<Header {...mockProps} />);
    const image = screen.getByAltText(mockProps.alt);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', mockProps.src);
  });
}); 