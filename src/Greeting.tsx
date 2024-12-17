//In this Checkpoint you will Convert the code below to Typescript.
{/*const Greeting = ({ name }) => {
  return <div>Hello, {name}!</div>;
};
export default Greeting;*/}


import React from "react"; // Import React to use JSX

interface GreetingProps {
  name: string; // Define the type for the name prop
}

const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

export default Greeting;

