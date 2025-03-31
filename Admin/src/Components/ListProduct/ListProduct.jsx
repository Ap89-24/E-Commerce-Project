import React, { useEffect, useState } from 'react'
import './ListProduct.css';
import removeIcon from '../../assets/remove.png'

const ListProduct = () => {

   
  const [allproducts , setAllProducts] = useState([]);

  const fetchInfo = async () => {

    await fetch('http://localhost:4000/allproducts').then((resp)=> resp.json()).then((data)=>{
      setAllProducts(data);
      console.log("All products fetched");
    })
  }

  useEffect(()=>{
    fetchInfo();
  },[])

  const removeProduct = async (id)=> {
    await fetch('http://localhost:4000/removeproduct' , {
      method: 'POST',
      headers: {
        Accept: "application/json",
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: id
      }),
    })
    await fetchInfo();
  }


  return (
    <div className='list-product'>
      <h1>All Product List</h1>
      <div className="listproduct-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className="listproduct-allproducts">
        <hr/>
        {allproducts.map((product , index)=> {
          return <> <div key={index} className="listproduct-format-main listproduct-format">
                <img src={product.image} alt="" className="listproduct-product-icon" width={100}/>
                <p>{product.name}</p>
                <p>${product.old_price}</p>
                <p>${product.new_price}</p>
                <p>{product.category}</p>
                <img onClick={()=>{removeProduct(product.id)}} src={removeIcon} alt="" className="listproduct-remove-icon" width={50} />
          </div>
          <hr/>
          </>
        })}
      </div>
    </div>
  )
}

export default ListProduct
