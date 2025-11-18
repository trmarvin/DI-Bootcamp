import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      errorInfo: null
    };
  }

  // This lifecycle method is triggered when a child component throws an error
  componentDidCatch(error, errorInfo) {
    // Update the state so the next render will show the fallback UI
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  render() {
    // If an error occurred, show your details block
    if (this.state.error) {
      return (
        <div>
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }

    // Otherwise, render children normally
    return this.props.children;
  }
}

export default ErrorBoundary;