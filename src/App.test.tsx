import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import Test from './components/Test';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders test components', () => {
  render(<Test />);
  const testElement = screen.getByText(/test/i);
  expect(testElement).toBeInTheDocument();
});
