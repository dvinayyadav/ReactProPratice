import { Component } from "react";

class ErrorBoundaryComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isCond: false,
    };
  }

  static getDerivedStateFromError() {
    return {
      isCond: true, 
    };
  }

  componentDidCatch(error, info) {
   
    console.error("Error caught by ErrorBoundary:", error);
    console.error("Error info:", info);
  }

  render() {
    if (this.state.isCond) {
      return <div>Not An User</div>; 
    }

    return this.props.children; 
  }
}

export default ErrorBoundaryComp;
