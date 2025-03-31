import React from 'react'
import './relatedproducts.css'
import data_product from '../Assets/data_product'
import Item from '../Item/Item'

const RelatedProducts = () => {
  return (
    <div className='relatedproducts'>
      <h1>Related Products</h1>
      <hr/>
      <div className="relatedproducts-item">
        {data_product.map((item,i)=>{
           return <Item  key={i} id={item.id} name={item.name}  image={item.image} new_price={item.new_price} old_price={item.old_price} availability={item.availability} />
        })}
      </div>
    </div>
  )
}

export default RelatedProducts
