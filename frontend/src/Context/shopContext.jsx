import React, {createContext, useEffect, useState} from "react";
import all_product from "../Components/Assets/all_product";
import data_product from '../Components/Assets/data_product'
import new_collection from '../Components/Assets/new_collection'

export const shopContext = createContext(null);

const getDefaultCart = ()=>{
    let cart =  {};
    for(let index =1; index <all_product.length+1;index++){
         cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {
    const  [cartItems , setCartItems] = useState(getDefaultCart());
 //   const [all_product , setAll_Product] = useState([]);

    // useEffect(() => {
    //    fetch('http://localhost:4000/allproducts')
    //    .then((response)=>response.json())
    //    .then((data)=>setAll_Product(data))
    // },[])

    
    const addToCart = (itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
       if(localStorage.getItem('auth-token')){
        fetch('http://localhost:4000/addtocart' , {
            method: 'POST',
            headers: {
                Accept: "application/form-data",
                'auth-token': `${localStorage.getItem('auth-token')}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({"itemId": itemId})
         })
         .then((response)=>response.json())
         .then((data)=>console.log(data))
        }
       }
    


    const removeFromCart = (itemId) =>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}));
        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/removefromcart' , {
                method: 'POST',
                headers: {
                    Accept: "application/form-data",
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({"itemId": itemId})
             })
             .then((response)=>response.json())
             .then((data)=>console.log(data))
            }
    }

    const getTotalCartAmount = () =>{
        let totalAmount = 0;
        for(const item in cartItems){
            if(cartItems[item]>0){
             let iteminfo = all_product.find((product)=>product.id===Number(item));
             totalAmount += cartItems[item]*iteminfo.new_price;
            }
        }
        return totalAmount;
    }


    const getTotalCartItems = () =>{
        let totalItems = 0;
        for(const item in cartItems){
            if(cartItems[item]>0){
             totalItems += cartItems[item];
            }
        }
        return totalItems;
    }
    
    const contextValue = {getTotalCartItems , getTotalCartAmount , all_product , cartItems , data_product , new_collection , addToCart , removeFromCart};

    return (
        <>
        <shopContext.Provider value={contextValue}> 
            {props.children}
        </shopContext.Provider>
        </>
    )
}


export default ShopContextProvider;