import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import SkillIcon from '../SkillIcon';

describe('SkillIcon Component', () => {
  const mockProps = {
    src: '/test-skill.svg',
    alt: 'Test Skill Icon'
  };

  it('renders the icon with correct attributes', () => {
    render(<SkillIcon {...mockProps} />);
    const icon = screen.getByAltText(mockProps.alt);
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveAttribute('src', mockProps.src);
  });

  it('renders the icon inside a div with the correct classes', () => {
    render(<SkillIcon {...mockProps} />);
    const container = screen.getByAltText(mockProps.alt).closest('div');
    expect(container).toHaveClass('icon-px');
  });
}); 