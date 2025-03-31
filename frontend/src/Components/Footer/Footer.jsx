import React from 'react'
import './footer.css'
import logo_icon from '../Assets/logo.png.webp'
import insta_icon from '../Assets/insta.png'
import pinterest_icon from '../Assets/pinterest.png'
import whatsapp_icon from '../Assets/Whatsapp.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={logo_icon} alt='' width={60}/>
            <p>SHOPSPHERE</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icons">
            <div className="footer-icons-container">
                <img src={insta_icon} alt='' width={30}/>
            </div>

            <div className="footer-icons-container">
                <img src={pinterest_icon} alt='' width={30}/>
            </div>

            <div className="footer-icons-container">
                <img src={whatsapp_icon} alt='' width={30}/>
            </div>
        </div>

        <div className="footer-copyright">
            <hr/>
            <p>Copyright @ 2024 ShopSphere. All rights reserved.</p>
        </div>
      
    </div>
  )
}

export default Footer
