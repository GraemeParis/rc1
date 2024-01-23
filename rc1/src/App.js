import React, { Component } from "react";

class App extends Component {
  // Component is a react component and key.
  state = { count: 1 }; //  holds data

  increment = () => {
    this.setState({ count: this.state.count + 1 }); // this.setState allows react and interface to know count has changed
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    );
  }
}

export default App;

//SPA= signle page applications - What we build in vanilla.
// reactive programming - changing the data automatically changes the output.
