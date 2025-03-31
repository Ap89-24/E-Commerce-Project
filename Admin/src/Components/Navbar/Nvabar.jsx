import React from 'react'
import './Navbar.css'
import navlogo from '../../assets/logo1.png.png'
import profilelogo from '../../assets/navprofile.png'

const Nvabar = () => {
  return (
    <div className='navbar'>
        <img src={navlogo} alt='' className='nav-logo' width={100}/>
        <h1>Admin Panel</h1>
        <img src={profilelogo} alt='' className='profile-logo' width={100} />
      
    </div>
  )
}

export default Nvabar
