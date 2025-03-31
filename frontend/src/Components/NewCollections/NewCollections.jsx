import React, { useEffect, useState } from 'react'
import './newcollections.css'
import new_collections from '../Assets/new_collection'
import Item from '../Item/Item'

const NewCollections = () => {

  // const [new_collections , setNew_Collections] = useState([])

  // useEffect(()=> {
  //   fetch('http://localhost:4000/newcollection')
  //   .then((response)=> response.json())
  //   .then((data)=>setNew_Collections(data))
  // },[])

  return (
    <div className='new-collections'>
      <h1>NEW COLLECTIONS</h1>
      <div className="hr">
      <hr/>
      </div>
      <div className='collections'>
         {new_collections.map((item,i)=>{
          return <Item  key={i} id={item.id} name={item.name}  image={item.image} new_price={item.new_price} old_price={item.old_price} availability={item.availability} />
         })}
      </div>
    </div>
  )
}

export default NewCollections
