import React from 'react';
import './App.css';

export function label(name: string) : string {
    return `Hello ${name.toUpperCase()}`;
}

function App(): React.JSX.Element {
  return (
      <div>
        <h1>{label("React")}</h1>
        <h2>Hey There!</h2>
      </div>
  );
}

export default App;