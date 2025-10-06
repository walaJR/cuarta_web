import React, { useState } from 'react';
import { Col, Card, Badge, Button } from 'react-bootstrap';

function ProductCard({ producto, agregarAlCarrito, enCarrito }) {
  const [btnText, setBtnText] = useState('Agregar');
  const [btnDisabled, setBtnDisabled] = useState(false);

  const handleAgregar = () => {
    agregarAlCarrito(producto.id);
    
    // Cambiar texto del botón temporalmente
    setBtnText('¡Añadido!');
    setBtnDisabled(true);
    
    setTimeout(() => {
      setBtnText('Agregar');
      setBtnDisabled(false);
    }, 1500);
  };

  const handleImageError = (e) => {
    e.target.src = 'https://via.placeholder.com/300x400/6c757d/ffffff?text=Imagen+No+Disponible';
  };

  return (
    <Col lg={4} md={6} className="mb-4">
      <Card className="product-card h-100 shadow-sm">
        <Card.Img 
          variant="top" 
          src={producto.imagen}
          className="product-img"
          alt={producto.nombre}
          onError={handleImageError}
        />
        <Card.Body className="d-flex flex-column">
          <Card.Title>{producto.nombre}</Card.Title>
          <Card.Text>
            <Badge bg="secondary">{producto.categoria}</Badge>
          </Card.Text>
          
          <div className="mt-auto">
            <div className="d-flex justify-content-between align-items-center">
              <span className="h5 text-success mb-0">
                ${producto.precio.toLocaleString('es-CL')}
              </span>
              
              {/* Renderizado condicional: Botón cambia según estado */}
              {enCarrito && btnText === 'Agregar' ? (
                <Button 
                  variant="success" 
                  onClick={handleAgregar}
                  disabled={btnDisabled}
                  className="btn-add-cart"
                >
                  <i className="fas fa-check me-1"></i>En el carrito
                </Button>
              ) : (
                <Button 
                  className="btn-add-cart"
                  onClick={handleAgregar}
                  disabled={btnDisabled}
                >
                  <i className="fas fa-cart-plus me-1"></i>{btnText}
                </Button>
              )}
            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default ProductCard;