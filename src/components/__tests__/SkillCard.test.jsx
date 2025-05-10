import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import SkillCard from '../SkillCard';

// Mock the SkillIcon component
vi.mock('../SkillIcon.jsx', () => ({
  default: ({ src, alt }) => <img src={src} alt={alt} data-testid="skill-icon" />
}));

describe('SkillCard Component', () => {
  const mockSkillSet = {
    title: 'Frontend',
    style: 'skill-card-frontend',
    item: [
      { src: '/icon1.png', alt: 'Icon 1' },
      { src: '/icon2.png', alt: 'Icon 2' },
      { src: '/icon3.png', alt: 'Icon 3' },
      { src: '/icon4.png', alt: 'Icon 4' }
    ]
  };

  it('renders the title correctly', () => {
    render(<SkillCard skillSet={mockSkillSet} />);
    expect(screen.getByText(mockSkillSet.title)).toBeInTheDocument();
  });

  it('applies the correct style class', () => {
    render(<SkillCard skillSet={mockSkillSet} />);
    const section = screen.getByText(mockSkillSet.title).closest('section');
    expect(section).toHaveClass(mockSkillSet.style);
  });

  it('renders all four skill icons', () => {
    render(<SkillCard skillSet={mockSkillSet} />);
    const icons = screen.getAllByTestId('skill-icon');
    expect(icons.length).toBe(4);
    
    // Check that each icon has the correct src and alt
    mockSkillSet.item.forEach((item, index) => {
      expect(icons[index]).toHaveAttribute('src', item.src);
      expect(icons[index]).toHaveAttribute('alt', item.alt);
    });
  });
}); 