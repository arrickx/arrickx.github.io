import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import App from '../App';
import * as data from '../constants/index.js';
import { ThemeProvider } from '../contexts/ThemeContext';

// Mock window.matchMedia before App tests because ThemeProvider uses it
let matchMediaMock;

beforeEach(() => {
  // Reset localStorage mock if you have one globally or per suite
  // window.localStorage.clear(); // Example if you have a global localStorage mock

  matchMediaMock = vi.fn().mockImplementation(query => ({
    matches: false, // Default to light mode or any consistent value
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  }));
  Object.defineProperty(window, 'matchMedia', { 
    writable: true, 
    configurable: true, 
    value: matchMediaMock 
  });
});

// Mock the child components
vi.mock('../components/Header.jsx', () => ({
  default: ({ name, statement }) => (
    <div data-testid="header-component">
      <h1>{name}</h1>
      <p>{statement}</p>
    </div>
  )
}));

vi.mock('../components/SectionHeading.jsx', () => ({
  default: ({ heading, title, subtitle }) => (
    <div data-testid="section-heading">
      <p>{heading}</p>
      <p>{title}</p>
      <p>{subtitle}</p>
    </div>
  )
}));

vi.mock('../components/SkillCard.jsx', () => ({
  default: ({ skillSet }) => (
    <div data-testid="skill-card" className={skillSet.style}>
      <p>{skillSet.title}</p>
    </div>
  )
}));

vi.mock('../components/ExperienceCard.jsx', () => ({
  default: ({ company, title }) => (
    <div data-testid="experience-card">
      <h3>{company}</h3>
      <p>{title}</p>
    </div>
  )
}));

vi.mock('../components/ProjectCard.jsx', () => ({
  default: ({ title, description }) => (
    <div data-testid="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}));

vi.mock('../components/FooterIcon.jsx', () => ({
  default: ({ href, alt }) => (
    <a data-testid="footer-icon" href={href}>{alt}</a>
  )
}));

describe('App Component', () => {
  it('renders the header with correct data', () => {
    render(<ThemeProvider><App /></ThemeProvider>);
    const header = screen.getByTestId('header-component');
    expect(header).toBeInTheDocument();
    expect(header.textContent).toContain(data.author.name);
    expect(header.textContent).toContain(data.author.statement);
  });

  it('renders the correct number of skill cards', () => {
    render(<ThemeProvider><App /></ThemeProvider>);
    const skillCards = screen.getAllByTestId('skill-card');
    expect(skillCards).toHaveLength(3);
    
    // Check the titles of skill cards
    expect(skillCards[0].textContent).toContain(data.skills.backend.title);
    expect(skillCards[1].textContent).toContain(data.skills.frontend.title);
    expect(skillCards[2].textContent).toContain(data.skills.tools.title);
  });

  it('renders the correct number of experience cards', () => {
    render(<ThemeProvider><App /></ThemeProvider>);
    const experienceCards = screen.getAllByTestId('experience-card');
    expect(experienceCards).toHaveLength(2);
    
    // Check the company names
    expect(experienceCards[0].textContent).toContain(data.experiences.one.company_name);
    expect(experienceCards[1].textContent).toContain(data.experiences.two.company_name);
  });

  it('renders the correct number of project cards', () => {
    render(<ThemeProvider><App /></ThemeProvider>);
    const projectCards = screen.getAllByTestId('project-card');
    expect(projectCards).toHaveLength(2);
    
    // Check the project titles
    expect(projectCards[0].textContent).toContain(data.projects.one.name);
    expect(projectCards[1].textContent).toContain(data.projects.two.name);
  });

  it('renders the footer with social links', () => {
    render(<ThemeProvider><App /></ThemeProvider>);
    const footerIcons = screen.getAllByTestId('footer-icon');
    expect(footerIcons).toHaveLength(3);
    
    // Check that the links are correct
    expect(footerIcons[0]).toHaveAttribute('href', data.github.address);
    expect(footerIcons[1]).toHaveAttribute('href', data.linkedin.address);
    expect(footerIcons[2]).toHaveAttribute('href', data.email.address);
  });
}); 