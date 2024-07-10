import React, {Component} from 'react';

export type CounterProps = { label?: string };

export class Counter1 extends Component<CounterProps> {
    render() : React.JSX.Element {
        const {label = "Count"}: Readonly<CounterProps> = this.props;
        return (
            <div>
                <label id='counter-label'>{label}</label>
                <textarea data-testid="counter" aria-labelledby='counter-label'></textarea>
            </div>
        );
    }
}

class Counter2 extends Component<CounterProps> {
    render() : React.JSX.Element {
        const {label = "Count"}: Readonly<CounterProps> = this.props;
        return (
            <div>
                <span title={label}>Counter</span>
                <span id="counter" title="counter">
					1
				</span>
            </div>
        );
    }
}

export default Counter2;