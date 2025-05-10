import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ExperienceCard from '../ExperienceCard';

describe('ExperienceCard Component', () => {
  const mockProps = {
    company: 'Test Company',
    title: 'Test Position',
    date: '2020 - 2023',
    details: [
      'Achievement 1',
      'Achievement 2',
      'Achievement 3'
    ]
  };

  it('renders the company name correctly', () => {
    render(<ExperienceCard {...mockProps} />);
    expect(screen.getByText(mockProps.company)).toBeInTheDocument();
  });

  it('renders the job title correctly', () => {
    render(<ExperienceCard {...mockProps} />);
    expect(screen.getByText(mockProps.title)).toBeInTheDocument();
  });

  it('renders the date correctly', () => {
    render(<ExperienceCard {...mockProps} />);
    expect(screen.getByText(mockProps.date)).toBeInTheDocument();
  });

  it('renders all the detail items correctly', () => {
    render(<ExperienceCard {...mockProps} />);
    mockProps.details.forEach(detail => {
      expect(screen.getByText(detail)).toBeInTheDocument();
    });
  });

  it('renders the correct number of list items', () => {
    render(<ExperienceCard {...mockProps} />);
    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(mockProps.details.length);
  });
}); 