import React from 'react';
import { render, screen } from '@testing-library/react';
import Cart from './Cart';

describe("Cart component test", () =>{
  
  test('renders the cart title', () => {
    render(<Cart />);
    const titleElement = screen.getByText(/Panier/i);
    expect(titleElement).toBeInTheDocument();
  });
  
  test('renders the product list', () => {
    render(<Cart />);
    const listElement = screen.getByRole("dialog");
    expect(listElement).toBeInTheDocument();
  });

  test('renders the total', () =>{
    render(<Cart />);
    const totalElement = screen.getByText(/Total : /i);
    expect(totalElement).toBeInTheDocument();
  })
  
})

