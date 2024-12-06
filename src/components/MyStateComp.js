import { Component } from "react";

class ParentComp extends Component{
    constructor(){
        super();
        this.state={
            empName:"Madhu",
            empSal:85000
        }
    }
render(){
    return (
        <Fragment>
            
             <p>
            {this.state.empName}, empSal : {this.state.empSal}
             </p>
           
        </Fragment>
    )
}
}
export default ParentComp;