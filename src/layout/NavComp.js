import React from 'react'
import { Link } from 'react-router-dom'
const NavComp = () => {
  return (
    <div>
        <Link to="virtualdom" className='btn btn-primary btn-sm'>VirtualDOM</Link>{" "}
        <Link to="Hooks" className='btn btn- btn-sm'>Hooks</Link>{" "}
        <Link to="usestate" className='btn btn-warning btn-sm'>UseState</Link>{" "}
        <Link to="useEffect" className='btn btn-info btn-sm'>useEffect</Link>{" "}
        <Link to="favcolor" className='btn btn-info btn-sm'>FavColor</Link>{" "}
        <Link to="formValidation" className='btn btn-danger btn-sm'>FormValidation</Link>{" "}
        <Link to="FormValidationTaskComp" className='btn btn-warning btn-sm'>FormValidationTaskComp</Link>{" "}
        <Link to="ProductEditComp" className='btn btn-warning btn-sm'>ProductEditComp</Link>{" "}
        <Link to="Mycorosel" className='btn btn-warning btn-sm'>MyCorousel</Link>
    </div>
  )
}

export default NavComp