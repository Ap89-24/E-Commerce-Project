import React from 'react'
import './newsletter.css'

const NewsLetter = () => {
  return (
    <div className='newsletter'>
      <h1>Get Exclusive Offer On Your Email</h1>
     <p>Subscribe to our newswletter and stay updated</p>
     <div>
        <input type="email" placeholder="Enter your email"/>
        <button>Subscribe</button>
     </div>
    </div>
  )
}

export default NewsLetter
