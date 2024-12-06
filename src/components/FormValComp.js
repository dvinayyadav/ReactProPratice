import React,{useState} from 'react'

const FormValComp = () => {
    const[user,setUser]=useState({
        fname:"",
    });
  return (
    <div>
        <h2>This is form validation</h2>
        <form>
            <label>Enter your FullName</label>
            <input type='text' name='fname'></input>
        </form>
        </div>
  )
}

export default FormValComp