import React from 'react';
import { render, screen } from '@testing-library/react';
import {Heading} from "./Heading";

// NRN - this tests actual JSX returned from Heading() function (h1 content)
test('render h1 content within Heading component', () => {
  render(<Heading />);
  const linkElement = screen.getByText(/hello react/i);
  expect(linkElement).toBeInTheDocument();
});

// NRN - this tests return when passing arguments to Heading() function (h1 content)
test('render Heading component with arguments', () => {
  // passing component arguments/props
  const name : string = "Nicole-Rene";
  render(<Heading name={name} />);
  const linkElement = screen.getByText(`Hello ${name.toUpperCase()}`);
  expect(linkElement).toBeInTheDocument();
});