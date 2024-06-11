import React from "react";
import Button from 'react-bootstrap/Button';
import Cartwidget from "../cartwidget/cartwidget";


export const Navbar = () => {

 
    return (
        <div>
            <nav className="Navbar1">
                <h1>Natura Cosméticos</h1>
                <ul>
                    <li><a href="#"></a><Button variant="outline-light">Inicio</Button></li>
                    <li><a href="#"></a><Button variant="outline-light">Tienda</Button></li>
                    <li><a href="#"></a><Button variant="outline-light" >Quienes somos</Button></li>
                    <li><a href="#"></a><Button variant="outline-light" >Contacto</Button></li>

                </ul>
                <Cartwidget />

            </nav>
            
        </div>

    );
}

export default Navbar;