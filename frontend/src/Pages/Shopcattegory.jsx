
import React , { useContext } from 'react'
import './CSS/shopcattegory.css'
import { shopContext } from '../Context/shopContext'
import dropdown_icon from '../Components/Assets/dropdown1.png'
import Item from '../Components/Item/Item'

const Shopcattegory = (props) => {
  
  const { all_product} = useContext(shopContext); // get all products from shopContext
  return (
    <div className='shop-category'>
      <img className='shop-banner' src={props.banner} alt='' width={350} height={450}/>
      <div className="shopcategory-indexsort">
        <p>
          <span>Showing 1-5</span> out of 15 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt='' width={35}/>
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item,i)=>{
          if (props.category===item.category){
            return <Item  key={i} id={item.id} name={item.name}  image={item.image} description={item.description} new_price={item.new_price} old_price={item.old_price} availability={item.availability} />
          }
          else{
            return null;
          }


        })}
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  )
}

export default Shopcattegory;
