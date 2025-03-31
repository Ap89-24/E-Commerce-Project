import React from 'react'
import './breadcrum.css'
import arrow_icon from '../Assets/dropdown1.png'

const Breadcrums = (props) => {
    const {product} = props;
  return (
    <div className='breadcrum'>
      HOME <img src={arrow_icon} alt='' width={30}/> SHOP <img src={arrow_icon} alt='' width={30}/> {product.category} <img src={arrow_icon} alt='' width={30}/>
      {product.name}
    </div>
  )
}

export default Breadcrums
