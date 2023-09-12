import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { timer } from 'd3-timer';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
