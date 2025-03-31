import React from 'react'
import './offers.css'
import execlusive_img from '../Assets/execlusive_image.png'

const Offers = () => {
  return (
    <div  className='offers'>
      <div className="offers-left">
       <h1>Execlusive</h1>
       <h1>Offers For You</h1>
       <p>ONLY ON BEST SELLER PRODUCTS</p>
       <button>Check Now</button>
      </div>
      <div className="offers-right">
        <img src={execlusive_img} alt=''/>
      </div>
    </div>
  )
}

export default Offers
