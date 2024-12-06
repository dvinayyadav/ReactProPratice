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
        <Link to="formValidation" className='btn btn-danger btn-sm'>FormValidation</Link>
    </div>
  )
}

export default NavComp