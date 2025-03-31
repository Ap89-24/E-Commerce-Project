import React from 'react'
import './item.css'
import {Link} from 'react-router-dom'

const Item = (props) => {
  return (
    <div className='item'>
     <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} alt='' width='300px' height='350px' /></Link>
      <p>{props.name}</p>
      <div className="item-desc">
        {props.description}
      </div>
      <div className="item-price">
        <div className="item-price-new">
        ₹{props.new_price}
        </div>

        <div className="item-price-old">
        ₹{props.old_price}
        </div>
      </div>
      <div className="item-avail">
        Available: {props.availability}
      </div>
    </div>
  )
}

export default Item
