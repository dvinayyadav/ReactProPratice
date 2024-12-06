import react,{ Component } from "react";
import MyHocComp from "./MyHocComp";

class OverCounterComp extends Component {
 
    constructor(props) {
        super(props);
        this.state = {
          count: 0,
        };
      }
    
      
      incrementCount = () => {
        this.setState({ count: this.state.count + 5 });
      };
  
    render() {
      return ( 
        <div>
          <h1>Count: {this.props.count}</h1>
          <button type="button" onMouseOver={this.props.incrementCount }>OnMouse Count</button> 
        </div>
      );
    }
  }
  
  export default OverCounterComp;