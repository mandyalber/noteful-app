import React from "react";

export default class ErrorBoundary extends React.Component {
  state = {
    error: false,
  }

  goHome = () => {
    window.location.href = "/"
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo)
    this.setState({ error: true })
  }

  render() {
    if (this.state.error) {
      return (
        <div>
          <h2>Something went wrong. Please go back to the Home page and try again.</h2>
          <button onClick={this.goHome}>Home</button>
        </div>
      )
    }
    else {
      return this.props.children
    }
  }
}