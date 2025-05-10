import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import SectionHeading from '../SectionHeading';

describe('SectionHeading Component', () => {
  const mockProps = {
    heading: 'Projects',
    title: 'My Recent Work',
    subtitle: 'Here are a few projects I\'ve worked on recently'
  };

  it('renders the heading correctly', () => {
    render(<SectionHeading {...mockProps} />);
    expect(screen.getByText(mockProps.heading)).toBeInTheDocument();
  });

  it('renders the title correctly', () => {
    render(<SectionHeading {...mockProps} />);
    expect(screen.getByText(mockProps.title)).toBeInTheDocument();
  });

  it('renders the subtitle correctly', () => {
    render(<SectionHeading {...mockProps} />);
    expect(screen.getByText(mockProps.subtitle)).toBeInTheDocument();
  });
}); 