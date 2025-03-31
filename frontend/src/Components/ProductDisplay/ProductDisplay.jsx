import React , {useContext} from 'react'
import './productdisplay.css'
import star_icon from '../Assets/star_icon.png'
import dullstar_icon from '../Assets/dullstar_icon.png'
import {shopContext} from '../../Context/shopContext'


const ProductDisplay = (props) => {
    const {product} = props;

    const { addToCart } = useContext(shopContext); // get addToCart function from shopContext

  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
            <img src={product.image} alt='' width='300px' height='350px'/>
            <img src={product.image} alt='' width='300px' height='350px'/>
            <img src={product.image} alt='' width='300px' height='350px'/>
            <img src={product.image} alt='' width='300px' height='350px'/>
        </div>
        <div className="productdisplay-img">
            <img className='productdisplay-main-img' src={product.image} alt='' width='300px' height='350px'/>
        </div>
      </div>
      <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-star">
               <img src={star_icon} alt='' width={20}/>
               <img src={star_icon} alt='' width={20}/>
               <img src={star_icon} alt='' width={20}/>
               <img src={star_icon} alt='' width={20}/>
               <img src={dullstar_icon} alt='' width={20}/>
               <p>(299)</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old">
                ₹{product.old_price}
                </div>
                <div className="productdisplay-right-price-new">
                ₹{product.new_price}
                </div>
            </div>
            <div className="productdisplay-right-description">
                   {product.description}
            </div>
            <div className="productdisplay-right-size">
                <h1>Select Size</h1>
                <div className="productdisplay-right-sizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
            <p className="productdisplay-right-category"><span>Category : </span>Women , Men , Children , t-shirt , crop-top</p>
            <p className="productdisplay-right-category"><span>Tags : </span>Modern , Latest , Trending</p>
      </div>
    </div>
  )
}

export default ProductDisplay
