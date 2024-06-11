import Card from 'react-bootstrap/Card';


const CardProducto = ({prInfo}) => {
    const{nombre, precio} = prInfo
return(
    <div>
        
        <h4>{nombre}</h4>
        <p>${precio}</p>
        <button onClick={() => console.log(`Producto ${nombre} agregado `)}>Agregar</button>
    </div>
)
}
export default CardProducto