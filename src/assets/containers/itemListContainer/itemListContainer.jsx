import React from "react";
import { useEffect, useState } from 'react'
// import getProductos from "../../data/asyncmock";
//  from '../../data/asyncmock' 


const ItemListContainer = ({categoria}) => {
const [itemList,setList] = useState([])

// useEffect(() => {
//   getProductos=() =>
//     .then(res => setList(res))
//     .catch(err => console.log)
  
// }, [])


    return(
        <div>
          {itemList.map((product) => <p key={product.id}>{product.title}</p>)}  
        </div>
    )

}
export default ItemListContainer