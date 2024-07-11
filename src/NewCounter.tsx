// NRN - this file created in place of deleting parts of the Counter.tsx file while
// following the tutorial that wanted to shift to using a Presentation Component
// approach that shifts certain responsibilities to the parent
// Counter1 and Counter2 are set up as smart components, whereas NewCounter
// is set up as a dumb component that receives information from parent App

import React from 'react';

// NRN - create a type to indicate type of props passed to component
export type NewCounterProps = {
    label?: string,
    count: number,
    onCounterIncrease: (isShift: boolean) => void;
};

const NewCounter = ({label = "Count", count, onCounterIncrease}: NewCounterProps) => {
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        onCounterIncrease(event.shiftKey);
    };

    return (
        <div>
            <span title={label}>Counter</span>
            <span data-testid="counter" title="counter" role="region"
                  aria-live="polite" aria-label="Counter"
                  onClick={handleClick} >
					{count}
				</span>
        </div>
    );
}

export default NewCounter;