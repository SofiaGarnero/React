import React from "react";
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

const Cartwidget = () => {
    return(
        <Button variant="outline-light">
        🛒<Badge bg="dark">3</Badge>
      </Button>
    );
}

export default Cartwidget
