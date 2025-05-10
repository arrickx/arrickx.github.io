import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ProjectCard from '../ProjectCard';

describe('ProjectCard Component', () => {
  const mockProps = {
    title: 'Test Project',
    href: 'https://example.com',
    src: '/test-image.jpg',
    alt: 'Test Project Image',
    description: 'This is a test project description',
    tag: '#test #react #vitest'
  };

  it('renders the title correctly', () => {
    render(<ProjectCard {...mockProps} />);
    expect(screen.getByText(mockProps.title)).toBeInTheDocument();
  });

  it('renders the description correctly', () => {
    render(<ProjectCard {...mockProps} />);
    expect(screen.getByText(mockProps.description)).toBeInTheDocument();
  });

  it('renders the tag correctly', () => {
    render(<ProjectCard {...mockProps} />);
    expect(screen.getByText(mockProps.tag)).toBeInTheDocument();
  });

  it('renders the image with correct attributes', () => {
    render(<ProjectCard {...mockProps} />);
    const image = screen.getByAltText(mockProps.alt);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', mockProps.src);
  });

  it('renders a link with correct href', () => {
    render(<ProjectCard {...mockProps} />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', mockProps.href);
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
  });
}); 