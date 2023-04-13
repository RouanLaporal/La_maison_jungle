import React from 'react';
import { render, screen } from '@testing-library/react';
import Banner from './Banner';

test('renders la maison jungle title', () => {
  render(<Banner />);
  const titleElement = screen.getByText(/La maison jungle/i);
  expect(titleElement).toBeInTheDocument();
});
