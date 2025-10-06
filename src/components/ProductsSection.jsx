import React from 'react';
import { Container, Row, Col, Form, InputGroup, Spinner } from 'react-bootstrap';
import ProductCard from './ProductCard';

function ProductsSection({ 
  productos, 
  loading, 
  searchTerm, 
  setSearchTerm, 
  categoryFilter, 
  setCategoryFilter,
  agregarAlCarrito,
  carrito
}) {
  return (
    <section id="productos" className="py-5">
      <Container>
        <h2 className="text-center mb-5">Nuestros Productos</h2>
        
        <Row className="mb-4">
          <Col md={6}>
            <InputGroup>
              <Form.Control
                type="text"
                placeholder="Buscar productos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <InputGroup.Text>
                <i className="fas fa-search"></i>
              </InputGroup.Text>
            </InputGroup>
          </Col>
          
          <Col md={6}>
            <Form.Select 
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
            >
              <option value="">Todas las categorías</option>
              <option value="Juego digital">Juegos digitales</option>
              <option value="Juego físico">Juegos físicos</option>
            </Form.Select>
          </Col>
        </Row>

        {/* Renderizado condicional: Loading */}
        {loading ? (
          <div className="text-center">
            <Spinner animation="border" variant="primary" role="status">
              <span className="visually-hidden">Cargando...</span>
            </Spinner>
          </div>
        ) : (
          <>
            {/* Renderizado condicional: Sin productos */}
            {productos.length === 0 ? (
              <div className="text-center mt-4">
                <p className="text-muted">No se encontraron productos.</p>
              </div>
            ) : (
              <Row>
                {productos.map(producto => (
                  <ProductCard
                    key={producto.id}
                    producto={producto}
                    agregarAlCarrito={agregarAlCarrito}
                    enCarrito={carrito.some(item => item.id === producto.id)}
                  />
                ))}
              </Row>
            )}
          </>
        )}
      </Container>
    </section>
  );
}

export default ProductsSection;