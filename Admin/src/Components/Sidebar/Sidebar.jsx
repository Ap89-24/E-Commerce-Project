import React from 'react'
import './Sidebar.css'
import {Link} from 'react-router-dom'
import addCart from '../../assets/add-to-cart.png';
import listProduct from '../../assets/checklist.png.png';


const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Link to={'/addproduct'} style={{textDecoration: "none"}}>
      <div className="sidebar-item">
        <img src={addCart} alt='' width={50}/>
        <p>Add Product</p>
      </div>
      </Link>

      <Link to={'/listproduct'} style={{textDecoration: "none"}}>
      <div className="sidebar-item">
        <img src={listProduct} alt='' width={50}/>
        <p>Product List</p>
      </div>
      </Link>


    </div>
  )
}

export default Sidebar
