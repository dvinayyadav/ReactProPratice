import react,{ Component } from "react";

class ConditionalRenComp extends Component{
    constructor(){
        super();
        this.state={
            isCond:true
        }
    }
 render(){
    if(!this.state.isCond){
        return <h2>Admin login Successfully</h2>
    }
    else{
        return <h2>User Login Successfully</h2>
    }
    // return (
    //     <div>
    //         <h2>This is conditional rendering component</h2>
    //     </div>
    // )
 }
}
export default ConditionalRenComp;