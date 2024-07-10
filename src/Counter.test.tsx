import React from "react";
import {fireEvent, render, screen} from "@testing-library/react";
import Counter2, {Counter1} from "./Counter";

test("Counter2 render a label and counter", (): void => {
    render(<Counter2 />);
    const label : HTMLElement = screen.getByTitle("Count");
    expect(label).toBeInTheDocument();
    const count : HTMLElement = screen.getByTitle("counter");
    expect(count).toBeInTheDocument();
});

test("Counter2 render custom label/counter", (): void => {
    render(<Counter2 label={`Current`}/>);
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
test("Counter1 render a label and counter", (): void => {
    render(<Counter1 />);
    const label : HTMLElement = screen.getByLabelText("Count");
    expect(label).toBeInTheDocument();
    const count: HTMLElement | null = screen.queryByTestId("counter");
    expect(count).toBeInTheDocument();
});

test("Counter1 render custom label/counter", (): void => {
    render(<Counter1 label={`Current`}/>);
    const label : HTMLElement = screen.getByLabelText("Current");
    expect(label).toBeInTheDocument();
    const count : HTMLElement = screen.getByTestId("counter");
    expect(count).toBeInTheDocument();
});

// NRN - this test makes use of state to determine counter count - start at 0
test("Counter2 should start at zero", (): void => {
    render(<Counter2 />);
    // NRN - two different approaches to search for elements Role and aria-label vs Title
    const counter : HTMLElement = screen.getByRole('region', { name: 'Counter' });
    const counterAlt : HTMLElement = screen.getByTitle('counter');
    expect(counter).toHaveTextContent("0");
    expect(counterAlt).toHaveTextContent("0");
})

// NRN - check that passed argument sets start of counter count
test("Counter2 should start at passed value", (): void => {
    render(<Counter2 start={10} />);
    // NRN - two different approaches to search for elements Role and aria-label vs Title
    const counter : HTMLElement = screen.getByRole('region', { name: 'Counter' });
    const counterAlt : HTMLElement = screen.getByTitle('counter');
    expect(counter).toHaveTextContent("10");
    expect(counterAlt).toHaveTextContent("10");
})

// NRN - check that passed argument sets start of counter count
test("Counter2 count should increment by 1", (): void => {
    // NRN - start with default which will be count 0
    render(<Counter2 />);
    // NRN - two different approaches to search for elements Role and aria-label vs Title
    const counter : HTMLElement = screen.getByRole('region', { name: 'Counter' });
    const counterAlt : HTMLElement = screen.getByTitle('counter');
    expect(counter).toHaveTextContent("0");
    expect(counterAlt).toHaveTextContent("0");
    // NRN - imitate a click action on the counter (which should increment count)
    fireEvent.click(counter);
    // NRN - check that value is incremented after imitation click
    expect(counter).toHaveTextContent("1");
    expect(counterAlt).toHaveTextContent("1");
})