import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import  { useState } from 'react';

const ProctDashCompdu = () => {
   const [product,setProduct]=useState([]);


useEffect(()=>{
  axios.get("http://localhost:8888/product").then((res)=>{
    console.log(res.data);
    setProduct(res.data);
  }).catch((error)=>{})
},[])
  return (
    <div>ProudctDashComponent</div>
  )
}

export default  ProctDashCompdu;