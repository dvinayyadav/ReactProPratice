import Component  from "react";
import MyHocComp from "./MyHocComp";

class ClickCounterComp extends Component {
 
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //       count: 0,
    //     };
    //   }
    
      
    //   incrementCount = () => {
    //     this.setState({ count: this.state.count + 1 });
    //   };
  
    render() {
      return ( 
        <div>
          <h1>Count: {this.props.count}</h1>
          <button type="button" onClick={this.props.incrementCounter }>Increase Count</button> 
          <button type="button" onMouseOver={this.props.incrementCounter }>Increase Count</button> 
        </div>
      );
    }
  }
  
  export default MyHocComp(ClickCounterComp);