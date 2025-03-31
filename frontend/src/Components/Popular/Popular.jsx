import React from 'react'
import './popular.css'
import data_product from '../Assets/data_product.js'
import Item from '../Item/Item'

const Popular = () => {
  return (
    <div className='popular'>
        <h1>POPULAR IN WOMEN</h1>
        <div className='hr'>
        <hr/>
        </div>
        <div className="popular-item">
            {data_product.map((item,i)=>{
           return <Item key={i} id={item.id} name={item.name}  image={item.image} new_price={item.new_price} old_price={item.old_price} availability={item.availability} />
            })}

        </div>
      
    </div>
  )
}

export default Popular
