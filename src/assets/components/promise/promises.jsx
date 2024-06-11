import { useState, useEffect } from "react";
import CardProducto from "../cardProducto/cardProducto";



const Promises = () => {
    const[products, setProducts] = useState()

    const getProducts = new Promise((resolve, rejected) => {
        const productos = [
            {
                nombre: 'Producto 1',
                precio: 1000,
                id: 1,
                img: "\Natura.png"
            },
            {
                nombre: 'Producto 2',
                precio: 2000,
                id: 2,
            },
            {
                nombre: 'Producto 3',
                precio: 3000,
                id: 3,
            },
        ]

        setTimeout(() => {
            productos.length > 0 ? resolve(productos) : rejected('no hay productos')
        }, 1000);

    })

    useEffect(() => {
        getProducts
            .then(res => setProducts(res))
            .catch(e => console.error(e))
    }, [])

    return (
        <div>
            
            {/* {JSON.stringify(products)} */}
          {products?.map((pr) => <CardProducto key={pr.id} prInfo= {pr} />)}
        </div>
    )

}
export default Promises
