// A basic class component in React
import React from 'react';

// Class components extend React.Component (or React shorthand)
class Welcome extends React.Component {
  // Every class component must have a render() method
  render() {
    // JSX must return a single parent element
    return <h1>Hello, {this.props.name}</h1>;
  }
}

// Export the component so it can be used in other files
export default Welcome;
