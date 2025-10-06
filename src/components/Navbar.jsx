import React from 'react';
import { Navbar as BSNavbar, Container, Nav, NavDropdown } from 'react-bootstrap';

function Navbar({ contadorCarrito, toggleCart, filtrarPorCategoria, mostrarTodosLosProductos }) {
  return (
    <BSNavbar bg="primary" variant="dark" expand="lg" sticky="top">
      <Container>
        <BSNavbar.Brand href="#home" className="fw-bold fs-3">
          <i className="fas fa-gamepad me-2"></i>walaJR Store
        </BSNavbar.Brand>
        
        <BSNavbar.Toggle aria-controls="navbarNav" />
        
        <BSNavbar.Collapse id="navbarNav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#productos">Productos</Nav.Link>
            
            <NavDropdown title="Categorías" id="categories-dropdown">
              <NavDropdown.Item onClick={() => filtrarPorCategoria('Juego digital')}>
                Juegos digitales
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => filtrarPorCategoria('Juego físico')}>
                Juegos físicos
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={mostrarTodosLosProductos}>
                Todos los productos
              </NavDropdown.Item>
            </NavDropdown>
            
            <Nav.Link href="#contacto">Contacto</Nav.Link>
          </Nav>
          
          <div className="d-flex">
            <button 
              className="btn btn-outline-light position-relative" 
              onClick={toggleCart}
            >
              <i className="fas fa-shopping-cart"></i> Carrito
              <span className="badge-custom">{contadorCarrito}</span>
            </button>
          </div>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
}

export default Navbar;