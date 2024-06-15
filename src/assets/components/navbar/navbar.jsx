import React from "react";
import Button from 'react-bootstrap/Button';
import Cartwidget from "../cartwidget/cartwidget";

export const Navbar = ({handleCategoria}) => {
    
    const cambiarCategoria = () => {
        handleCategoria(categoria)
    }
 
    return (
        <div>
            <nav className="Navbar1">
                <h1>Natura Cosméticos</h1>
                <ul>
                    <li><a href="#"></a><Button variant="outline-light" onClick={()=> cambiarCategoria('todos')}>Inicio</Button></li>
                    <li><a href="#"></a><Button variant="outline-light"onClick={()=> cambiarCategoria('cuidados diarios')}>Cuidados Diarios</Button></li>
                    <li><a href="#"></a><Button variant="outline-light" onClick={()=> cambiarCategoria('perfumeria')}>Perfumeria</Button></li>
                    <li><a href="#"></a><Button variant="outline-light" onClick={()=> cambiarCategoria('cabello')}>Cabello</Button></li>

                </ul>
                <Cartwidget />

            </nav>
            
        </div>

    );
}

export default Navbar;