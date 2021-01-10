/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Jotto/i);
  expect(linkElement).toBeInTheDocument();
});
