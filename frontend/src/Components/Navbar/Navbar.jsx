import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png.webp'
import cart_icon from '../Assets/trolley.png.png'
// eslint-disable-next-line no-unused-vars
import { Link, Links } from 'react-router-dom'
import { shopContext } from '../../Context/shopContext'
import dropdown_icon from '../Assets/dropdown1.png'

const Navbar = () => {

  const [menu,setmenu] = useState("shop");
  const {getTotalCartItems} = useContext(shopContext);
  const menuRef = useRef();

  const dropdown_toggle = (e) =>{
    menuRef.current.classList.toggle("nav-menu-visible");
    e.target.classList.toggle('open');
  }

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img className='logo' src={logo} alt="Logo" width={40} />
        <p className='logo'>SHOPSPHERE</p>     
            </div>
      <img className='nav-dropdown' onClick={dropdown_toggle} src={dropdown_icon} alt="" color='black'/>
      <ul ref={menuRef} className="nav-menu">
        <li onClick={()=>{setmenu("shop")}}><Link style={{textDecoration: 'none'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
        <li onClick={()=>{setmenu("mens")}}><Link style={{textDecoration: 'none'}} to='/mens'>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
        <li onClick={()=>{setmenu("womens")}}><Link style={{textDecoration: 'none'}} to='/womens'>Women</Link>{menu==="womens"?<hr/>:<></>}</li>
        <li onClick={()=>{setmenu("kids")}}><Link style={{textDecoration: 'none'}} to='/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
      </ul>
      <div className="login-cart">
        {localStorage.getItem('auth-token')
        ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>
        :   <Link to='/login'><button>Login</button></Link>}
        <Link to='/cart'><img src={cart_icon} alt="cart-icon" width={30}></img></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
      
    </div>
  )
}

export default Navbar
