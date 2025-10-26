import React, { Component } from "react";

interface ClassCounterProps {}
interface ClassCounterState {
  count: number;
}

class ClassCounter extends Component<ClassCounterProps, ClassCounterState> {
  constructor(props: ClassCounterProps) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = (): void => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  decrement = (): void => {
    this.setState((prevState) => ({ count: prevState.count - 1 }));
  };

  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>Counter: {this.state.count}</h2>
        <button onClick={this.decrement} style={{ marginRight: "10px" }}>
          -
        </button>
        <button onClick={this.increment}>+</button>
      </div>
    );
  }
}

export default ClassCounter;
