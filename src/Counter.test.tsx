import React from "react";
import {render, screen} from "@testing-library/react";
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