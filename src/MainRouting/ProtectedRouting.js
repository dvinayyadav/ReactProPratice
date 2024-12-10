import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const ProtectedRouting = ({Component}) => {
    const nav=useNavigate();
    useEffect(()=>{
    if(!sessionStorage.getItem("user")){
        nav("/");
    }
    },[]);
  return (
    <div>this is ProtectedRouting
        <Component>      </Component>
    </div>
  )
}

export default ProtectedRouting