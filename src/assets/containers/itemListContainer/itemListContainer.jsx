import React from "react";
import { useEffect, useState } from 'react'
import CardProducto from "../../components/cardProducto/cardProducto";

const ItemListContainer = ({categoria}) => {
const [products,setProducts] = useState([])

useEffect(()=> {
    fetch ()
    .then(res =>res.json())
    .then(json=> setProducts(json))
    .catch(e => console.error(e))
})

    return(
        <div>
          {products.map((product) => <p key={product.id}>{product.title}</p>)}  
        </div>
    )

}
export default ItemListContainer