// NRN - used refactor to move Heading component to own file

import React from "react";
import {label} from "./App";

// NRN - extracting prop type instead of having it inline
// ? indicates that argument is optional (so Heading may have zero or one arg)
export type HeadingProps = { name?: string };

// NRN - Refactor -> Extract Component to move to function
// destructure props using { name } vs props.name and how to indicate string type
// may add default value and typing using { name = "React" }: HeadingProps
export function Heading({name = "React"}: HeadingProps): React.JSX.Element {
    return <h1>{label(name)}</h1>;
}