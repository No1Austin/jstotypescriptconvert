//code 1


// Step 1: Import React like usual (React 18+ doesn't strictly require it, but safe to include).
import React from 'react';

// Step 2: Define a TypeScript type (or interface) for the props.
// This ensures that the component knows "name" must be a string.
type GreetingProps = {
  name: string;
};

// Step 3: Use the type in the functional component declaration.
// Now Greeting expects props of type GreetingProps.
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  // Step 4: Return JSX as usual.
  return <div>Hello, {name}!</div>;
};

// Step 5: Export as default.
export default Greeting;



//code 2

// Step 1: Import React and Component from React.
import React, { Component } from 'react';

// Step 2: Define types for props and state.
// - Props: empty (no props passed).
// - State: has a "count" property of type number.
type CounterProps = {}; 
type CounterState = {
  count: number;
};

// Step 3: Extend React.Component with props and state types.
// React.Component<propsType, stateType>
class Counter extends Component<CounterProps, CounterState> {
  // Step 4: Define initial state with correct type.
  state: CounterState = {
    count: 0
  };

  // Step 5: Method to increment count.
  // TypeScript automatically infers return type as void.
  increment = (): void => {
    this.setState({ count: this.state.count + 1 });
  };

  // Step 6: Render method remains mostly unchanged.
  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

// Step 7: Export component.
export default Counter;



