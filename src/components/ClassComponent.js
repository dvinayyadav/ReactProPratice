import { Component } from "react";

class ClassCom extends Component{
render(){
    return <h2>
        This is Class Component
        <p>My Name is {this.props.fname} and My role is {this.props.post}</p>
    </h2>
}
}
export default ClassCom;


