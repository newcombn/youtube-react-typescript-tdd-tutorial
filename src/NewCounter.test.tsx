// NRN - this file created in place of deleting parts of the Counter.tsx file while
// following the tutorial that wanted to shift to using a Presentation Component
// approach that shifts certain responsibilities to the parent

import React from "react";
import { fireEvent, render, screen} from "@testing-library/react";
import NewCounter from "./NewCounter";

test("NewCounter render counter w/ default label", (): void => {
    const handler: jest.Mock<any, any> = jest.fn();
    render(<NewCounter count={0} onCounterIncrease={handler} />);
    const label : HTMLElement = screen.getByTitle("Count");
    expect(label).toBeInTheDocument();
    const count : HTMLElement = screen.getByTitle("counter");
    expect(count).toBeInTheDocument();
});

test("NewCounter render custom label/counter", (): void => {
    const handler: jest.Mock<any, any> = jest.fn();
    render(<NewCounter label={`Current`} count={0} onCounterIncrease={handler} />);
    const label : HTMLElement = screen.getByTitle("Current");
    expect(label).toBeInTheDocument();
    const count : HTMLElement = screen.getByTitle("counter");
    expect(count).toBeInTheDocument();
});

// NRN - can't query directly by ID. Must use data-testid in JSX/TSX and use either
// screen.queryByTestId() or screen.getByTestId. The first requires typing
// for possible null return value while the second doesn't. Overall, the recommendation
// is to test by LabelText, Role, or other attributes that are "visible" to either
// human viewers or screen readers. Testing by ID may mean you are missing important
// attributes in the components.
test("NewCounter render a label and counter", (): void => {
    const handler: jest.Mock<any, any> = jest.fn();
    render(<NewCounter count={0} onCounterIncrease={handler} />);
    const label : HTMLElement = screen.getByTitle("Count");
    expect(label).toBeInTheDocument();
    const count: HTMLElement | null = screen.queryByTestId("counter");
    expect(count).toBeInTheDocument();
});

test("NewCounter render custom label/counter 2", (): void => {
    const handler: jest.Mock<any, any> = jest.fn();
    render(<NewCounter label={`Current`} count={0} onCounterIncrease={handler} />);
    const label : HTMLElement = screen.getByTitle("Current");
    expect(label).toBeInTheDocument();
    const count : HTMLElement = screen.getByTestId("counter");
    expect(count).toBeInTheDocument();
});

// NRN - using ock jest test to check that function is passed/used
test("should call the incrementer", (): void => {
    const handler: jest.Mock<any, any> = jest.fn();
    render(<NewCounter label={`Current`} count={0} onCounterIncrease={handler} />);
    const label : HTMLElement = screen.getByTitle("Current");
    expect(label).toBeInTheDocument();
    const counter : HTMLElement = screen.getByTestId("counter");
    expect(counter).toBeInTheDocument();
    // NRN - this imitates the click event that will trigger mock function
    fireEvent.click(counter);
    // NRN - this checks that passed function has been called
    expect(handler).toBeCalledTimes(1);
    // NRN - here referencing shift true/false when function called
    expect(handler).toBeCalledWith(false);
});