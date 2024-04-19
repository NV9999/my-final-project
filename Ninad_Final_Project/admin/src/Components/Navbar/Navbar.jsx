import React from 'react'
import './Navbar.css'
import navlogo from '../Assets/new-logo.png'
//import navprofileIcon from '../Assets/nav-profile.svg'

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={navlogo} className='nav-logo' alt="" />
    </div>
  )
}

export default Navbar
