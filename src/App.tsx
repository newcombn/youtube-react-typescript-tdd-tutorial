import React from 'react';
import './App.css';
import {Heading} from "./Heading";
import Counter2 from "./Counter";
import NewCounter from "./NewCounter";

export function label(name: string) : string {
    return `Hello ${name.toUpperCase()}`;
}

// NRN - if desiring to make immutable const state, use the following
// video tutorial showed "export type NewCounterState = Readonly<typeof initialState>;",
// but I got circular reference errors unless using an interface approach
export interface NewCounterState {
    readonly count: number;
}

const initialState: NewCounterState = { count: 250 };


// NRN - changed from component to stateful class component to allow
// App.tsx to act as parent to the NewCounter.tsx component. This
// complies with the Presentation component standard where the child
// components are relatively "dumb" with parents passing information
class App extends React.Component<object, NewCounterState> {
    readonly state: NewCounterState = initialState;

    increment = (isShift: boolean) => {
        const inc: number = isShift ? 10 : 1;
        this.setState({ count: this.state.count + inc});
    };

    render() : React.JSX.Element {
        return (
            <div>
                <Heading/>
                <h2>Hey There!</h2>
                <Counter2 label={"Current"} start={125} />
                <NewCounter count={this.state.count} onCounterIncrease={this.increment}/>
            </div>
        );
    }
}

export default App;