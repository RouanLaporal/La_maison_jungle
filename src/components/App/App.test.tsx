import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import Banner from '../Banner/Banner';

test('render all components', () => {
  render(<App/>)
  const { container } =render(<App/>);
  expect(container.childElementCount).toEqual(1);
});
