import React from "react";
class ErrorBoundary extends React.Component {
  state = {
    counter: 0,
  };

  handleClick = () => {
    this.setState({
      counter: this.state.counter + 2,
    });
  };

  render() {
    if (this.state.counter === 4) {
      
      throw  Error(' error.');
      
    }
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.handleClick}>click</button>
      </div>
    );
  }
}

export default ErrorBoundary;