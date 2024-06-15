import Card from 'react-bootstrap/Card';


const CardProducto = ({prInfo}) => {
    const{nombre, precio} = prInfo
return(
    <div className='cardsProduct'>
         <img src={prInfo.imagen} alt={prInfo.nombre} />
        <h4>{nombre}</h4>
        <p>${precio}</p>
        <button onClick={() => console.log(`Producto ${nombre} agregado `)}>Agregar</button>
    </div>
)
}
export default CardProducto