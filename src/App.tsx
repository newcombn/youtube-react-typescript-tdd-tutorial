import React from 'react';
import './App.css';

export function label(name: string) : string {
    return `Hello ${name.toUpperCase()}`;
}

// NRN - Refactor -> Extract Component to move to function
export function Heading() : React.JSX.Element {
    return <h1>{label("React")}</h1>;
}

function App(): React.JSX.Element {
  return (
      <div>
          <Heading/>
          <h2>Hey There!</h2>
      </div>
  );
}

export default App;