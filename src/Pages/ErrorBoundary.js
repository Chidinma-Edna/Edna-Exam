import React from "react";
 
class ErrorBoundary extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }
 
  componentDidCatch(error, errorInfo) {
 
    this.setState({
      error: error,
      errorInfo: errorInfo
    })
  }
 
  render() {
    if (this.state.errorInfo) {
 
      return (
        <div>
          <h2>Error Has Occurred</h2>
          <details>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }
    return this.props.children;
  }
}
 
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.handleClick = this.handleClick.bind(this);
  }
 
  handleClick() {
    this.setState(({ counter }) => ({
      counter: counter + 1
    }));
  }
 
  render() {
    if (this.state.counter === 5) {
      throw new Error(' Error');
    }
    return <h1 onClick={this.handleClick}>{this.state.counter}</h1>;
  }
}
 
function App() {
  return (
    <div>
      <div>
        <h1>
          <strong>
           click to see what happens.
          </strong>
        </h1>
      </div>
      <ErrorBoundary>
      </ErrorBoundary>     
      <ErrorBoundary><Counter /></ErrorBoundary>
    </div>
  );
}
 
export default App;