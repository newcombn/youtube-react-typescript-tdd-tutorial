import React from 'react';
import './App.css';
import {Heading} from "./Heading";
import Counter2 from "./Counter";

export function label(name: string) : string {
    return `Hello ${name.toUpperCase()}`;
}

function App(): React.JSX.Element {
  return (
      <div>
          <Heading/>
          <h2>Hey There!</h2>
          <Counter2 label={"Current"} start={125} />
      </div>
  );
}

export default App;