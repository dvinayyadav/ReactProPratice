import { Component } from "react";

class EventComp extends Component{
    greeting =()=>{
        window.alert("Hello Everyone")
    }
welcome=(... std)=>{
    window.alert(`WELCOME YOU ${std}`);
};

render(){
    return (
        <div>
        <h2>
        This is EventComp Component </h2>
        <p>My Name is Maneet and My role is Python Developer</p>
        <button type="button" onClick={()=>this.greeting()}>call greeting</button>
        <button type="button" onClick={()=>this.welcome("Suresh","Lalitha")}>call welcome</button>
</div>
    )
   
}
}
export default EventComp;