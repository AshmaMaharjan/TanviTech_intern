import { render, screen, fireEvent } from "@testing-library/react";
import ServicesSection from "./ServicesSection";

test("renders all service cards", () => {
  render(<ServicesSection />);
  
  // Check if a service card title is rendered
  expect(screen.getByText("Web Design & Development")).toBeInTheDocument();
  expect(screen.getByText("Software & Apps Development")).toBeInTheDocument();
});

test("clicking a service card changes active service", () => {
  render(<ServicesSection />);
  
  // Initially, "Web Design & Development" is active, so it has active styles (background color)
  const firstCard = screen.getByText("Web Design & Development");
  expect(firstCard.parentElement).toHaveClass("bg-sky-400");
  
  // Click on another card
  const secondCard = screen.getByText("Software & Apps Development");
  fireEvent.click(secondCard);
  
  // Now second card should have active styles
  expect(secondCard.parentElement).toHaveClass("bg-sky-400");
  // First card should no longer have active styles
  expect(firstCard.parentElement).not.toHaveClass("bg-sky-400");
});
