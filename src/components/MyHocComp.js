import React, { Component } from "react"; 
const MyHocComp = (WrapperComp) => {
  class Hoc extends Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0,
      };
    }

    incrementCounter = () => {
      this.setState((prevState) => ({ count: prevState.count + 3 }));
    };

    render() {
      return (
        <WrapperComp 
          count={this.state.count} 
          incrementCounter={this.incrementCounter}
          {...this.props} 
        />
      );
    }
  }
  return Hoc;
};

export default MyHocComp;
