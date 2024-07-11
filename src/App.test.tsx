import React from 'react';
import { render, screen } from '@testing-library/react';
import App, {label} from './App';
import userEvent from "@testing-library/user-event";

// NRN - this tests actual JSX returned from App() function (h1 content)
test('render h1 content within App', () => {
  render(<App />);
  const linkElement = screen.getByText(/hello react/i);
  expect(linkElement).toBeInTheDocument();
});

// NRN - alternative method similar to above for h1 content
// uses getByText instead of screen, but triggers warning from ESLint
// above approach using screen seems to be preferred approach
test('render h1 content within App alternate method', () => {
  const { getByText } = render(<App />);
  // eslint-disable-next-line testing-library/prefer-screen-queries
  const linkElement = getByText(/hello react/i);
  expect(linkElement).toBeInTheDocument();
});

// NRN - this tests actual JSX returned from App() function (h2 content)
test('render h2 content', () => {
  render(<App />);
  const linkElement = screen.getByText(/hey there!/i);
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

// NRN - Test how label responds when wrong type provided
// test('pass label wrong type', () => {
//   const result = label(42);
//   expect(result).toEqual('Hello REACT');
// })

// NRN - This allows a test to pass when result is an error
// The comment with @ and ts-ignore suppresses the error
test('pass label wrong type2', () => {
  // @ts-ignore
  expect(() => label(42)).toThrow(TypeError);
});

// NRN - check that a click increments NewCounter count by 1
test("NewCounter count should increment by 1", (): void => {
  // NRN - start with default which will be count 0
  render(<App />);
  const counter : HTMLElement = screen.getByTestId('counter');
  expect(counter).toHaveTextContent("250");
  // NRN - imitate a click action on the counter (which should increment count)
  userEvent.click(counter);
  // NRN - check that value is incremented after imitation click
  expect(counter).toHaveTextContent("251");
})

// NRN - check that a shift + click increments NewCounter count by 10
test("NewCounter count should increment by 10", (): void => {
  // NRN - start with default which will be count 0
  render(<App />);
  const counter : HTMLElement = screen.getByTestId('counter');
  expect(counter).toHaveTextContent("250");
  // NRN - imitate a click action on the counter (which should increment count)
  userEvent.click(counter, {shiftKey: true});
  // NRN - check that value is incremented after imitation shift + click
  expect(counter).toHaveTextContent("260");
})