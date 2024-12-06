import { useState } from "react";
import React from 'react'

const UseStateHooksComp = () => {
    const [count,setCount]=useState(0);
    const [name,setName]=useState("Vinay");
    const incrementCount=()=>{
        setCount(count+1);
    }
  return (
    <div>
        <h2>This is use State hook components</h2>
        <p>counter value:<strong>{count}</strong></p>

        <button type='button' onClick={()=>incrementCount()} className='btn btn-primary'>change count</button>{" "}

        <button type='button' onClick={()=>setCount(count+2)} className='btn btn-primary'>change count </button>{" "}
        
        <p>Name:<strong>{name}</strong></p>

        <button type='button' onClick={()=>setName("Devara Vinay")} className='btn btn-primary'>change name</button>{" "}

    </div>
  )
}

export default UseStateHooksComp