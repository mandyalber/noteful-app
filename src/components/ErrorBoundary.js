/*  Define an error boundary component. Add this component to specific points in your component structure.*/
import React from "react";

export default class ErrorBoundary extends React.Component {
  state = {
    error: false,
  };

  goHome = () => {
    window.location.href = "/";
  };

  //lifecycle method triggered whenever an error is produced
  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
    this.setState({
      error: true,
    });
  }

  render() {
    if (this.state.error) {
      return (
        <div>
          <h2>
            Folder or Note ID does not exist. Please go back to the Home page and try again.
          </h2>
          <button onClick={this.goHome}>
            Home
          </button>
        </div>
      );
    } 
    else {
      return this.props.children;
    }
  }
}