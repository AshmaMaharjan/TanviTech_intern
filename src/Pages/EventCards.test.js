import { render, screen } from '@testing-library/react';
import EventCards from './EventCards';

describe('EventCards Component', () => {
  test('renders the Event heading', () => {
    render(<EventCards />);
    const heading = screen.getByText(/Event/i);
    expect(heading).toBeInTheDocument();
  });

  test('renders all event titles', () => {
    render(<EventCards />);
    expect(screen.getByText(/Cisco Tracks By Anil & Tikaraj/i)).toBeInTheDocument();
    expect(screen.getByText(/Virtual Workshop On Web & Software Development/i)).toBeInTheDocument();
    expect(screen.getByText(/Domain Name & Hosting/i)).toBeInTheDocument();
  });

  test('renders event links', () => {
    render(<EventCards />);
    const links = screen.getAllByRole('link', { name: /Explore More →/i });
    expect(links.length).toBe(3); 
  });
});
