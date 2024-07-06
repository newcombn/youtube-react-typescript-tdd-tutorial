import React from 'react';
import { render, screen } from '@testing-library/react';
import App, {label} from './App';

// NRN - this tests actual JSX returned from App() function
test('render hello world', () => {
  render(<App />);
  const linkElement = screen.getByText(/hello react/i);
  expect(linkElement).toBeInTheDocument();
});

// NRN - this tests the label() function with passed argument
test('generates a label', () => {
  const result = label("React2");
  expect(result).toEqual('Hello REACT2');
})

// NRN - This approach to passing a returned error didn't work
// test('pass label wrong type', () => {
//   const result = label(42);
//   expect(result).toThrowError(TypeError);
// })

// NRN - This allows a test to pass when result is an error
test('pass label wrong type', () => {
  expect(() => label(42)).toThrow(TypeError);
});