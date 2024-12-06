import React, { Component } from 'react'

class MyFacColoComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         color:"Red"
      }
    }
    // static getDerivedStateFromProps(props){
    //     return{
    //         color:props.newColor
    //     }
    // }
    // componentDidMount(){
    //     setTimeout(()=>{
    //         this.setState({color:"Pink"});
    //     },2000)
    // }
    shouldComponentUpdate(){
        return true;
    }
    getSnapshotBeforeUpdate(prevsProps,prevState){
       document.getElementById("beforeupdate").innerHTML=`Before Update My Favourite color war:${prevState.color}`;
    }
    changeColor=()=>{
        this.setState({color:"Blue"});
    }
    componentDidUpdate(){
        document.getElementById("afterupdate").innerHTML=`After Update My Favourite color war:${this.setState.color}`;
    }
  render() {
    return (
      <div>
        <h2>This is my fav color components</h2>
        <p>color is: <strong>{this.state.color}</strong></p>
        <div id="beforeupdate"></div>
        <div id="afterupdate"></div>
        <button type="button" onClick={()=>this.changeColor()} className='btn btn-primary'>change Color</button>
        </div>
    )
  }
}

export default MyFacColoComp