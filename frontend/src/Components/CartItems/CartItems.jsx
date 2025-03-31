import React, {useContext} from 'react'
import './cartitems.css'
import { shopContext } from '../../Context/shopContext'
import remove_icon from '../Assets/remove-from-cart.png'


const CartItems = () => {
    const {getTotalCartAmount , all_product , cartItems , removeFromCart} = useContext(shopContext);
    
  return (
    <div className='cartitems'>
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr/>
     {all_product.map((e)=>{
        if(cartItems[e.id]>0){
            return    <div>
            <div className="cartitems-format cartitems-format-main">
                <img src={e.image} alt='' width='300px' height='350px' className='cartitems-product-icons'/>
                <p>{e.name}</p> 
                <p>₹{e.new_price}</p>
                <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                <p>₹{e.new_price*cartItems[e.id]}</p>
                <img className='cartitems-remove-icon' src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt='' width={50}/>
            </div>
            <hr/>
          </div>
          
        }
        return null;
     })}
     <div className="cartitems-down">
        <div className="cartitems-total">
            <h1>Cart Totals</h1>
            <div>
                <div className="cartitems-total-item">
                    <p>Subtotal</p>
                    <p>₹{getTotalCartAmount()}</p>
                </div>
                <hr/>
                <div className="cartitems-total-item">
                    <p>Shipping</p>
                    <p>Free</p>
                </div>
                <hr/>
                <div className="cartitems-total-item">
                    <h3>Total</h3>
                    <h3>₹{getTotalCartAmount()}</h3>
                </div>
            </div>
            <button>Proceed To Checkout</button>
        </div>
        <div className="cartitems-promocode">
            <p>If you have a promo code, Enter it here</p>
            <div className="cartitems-promobox">
                <input type="text" placeholder="Enter your promo code"/>
                <button>Apply</button>
            </div>
        </div>

     </div>
    </div>
  )
}

export default CartItems
