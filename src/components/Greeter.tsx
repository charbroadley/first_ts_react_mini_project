import React from "react";

// This is called a functional component
// Example of inline props, alternative is creating an interface
// function Greeter (props: {person: string}): JSX.Element {
//     return <h1>HELLO, {props.person}!!!</h1>
// }

interface GreeterProps {
    person: string;
}
// Exmaple of interface props
// function Greeter (props: GreeterProps): JSX.Element {
//     return <h1>HELLO, {props.person}!!!</h1>
// }

// Example of destructured props
function Greeter ({person}: GreeterProps): JSX.Element {
    return <h1>HELLO, {person}!!!</h1>
}

export default Greeter;