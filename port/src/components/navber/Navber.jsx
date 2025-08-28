import React from 'react'
import "./navber.css"
import logo from "../../assets/logog.png"
function Navber() {
  return (
    <div className='navber' >
      <img className='img'  src={logo} alt="" />
     <ul className="nav-menu">

      <li>Home</li>
      <li>About me</li>
      <li> Services </li>
      <li>Portfolio</li>
      <li>Contact</li>
     </ul>
     <div className="nav-connect">connect with me</div>
    </div>
  )
}

export default Navber