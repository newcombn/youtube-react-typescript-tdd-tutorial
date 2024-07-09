import React from 'react';
import './App.css';
import {Heading} from "./Heading";

export function label(name: string) : string {
    return `Hello ${name.toUpperCase()}`;
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