import React, {Component} from 'react';

export type CounterProps = {
    label?: string,
    start?: number
};

// NRN - if desiring to have potentially changeable state, use this approach
// export type CounterState = { count: number };

// NRN - if desiring to make immutable const state, use the following
// video tutorial showed "export type CounterState = Readonly<typeof initialState>;",
// but I got circular reference errors unless using an interface approach
export interface CounterState {
    readonly count: number;
}
const initialState: CounterState = { count: 0 };

// NRN - this is how props can be passed to class
export class Counter1 extends Component<CounterProps> {
    render() : React.JSX.Element {
        // NRN - extracts label from passed props
        const { label = "Count" }: Readonly<CounterProps> = this.props;
        return (
            <div>
                {/* NRN - should minimize ID use in favor of className in React */}
                <label id='counter-label'>{label}</label>
                <textarea data-testid="counter" aria-labelledby='counter-label'></textarea>
            </div>
        );
    }
}

class Counter2 extends Component<CounterProps, CounterState> {
    // NRN - this sets up initial state with count starting at 0 for potentially mutable state
    // state : CounterState = {
    //     count: 0
    // };

    // NRN - this set up initial state with count for immutable state approach
    readonly state: CounterState = initialState;

    // NRN - this is how to assign to a read-only state that is immutable when there may
    // or may not be a passed argument coming in for CounterState
    componentDidMount(): void {
        if (this.props.start) {
            // NRN - setState used to apply change to read only immutable state
            this.setState({
                count: this.props.start,
            });
        }
    }

    render() : React.JSX.Element {
        const { label = "Count" }: Readonly<CounterProps> = this.props;
        return (
            <div>
                <span title={label}>Counter</span>
                <span id="counter" title="counter" role="region" aria-live="polite" aria-label="Counter">
					{this.state.count}
				</span>
            </div>
        );
    }
}

export default Counter2;