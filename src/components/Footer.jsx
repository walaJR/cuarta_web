import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="footer-custom py-5">
      <Container>
        <Row>
          <Col md={4} className="mb-4">
            <h5>
              <i className="fas fa-gamepad me-2"></i>walaJR Store
            </h5>
            <p>Tu tienda de confianza para los mejores videojuegos digitales y físicos.</p>
          </Col>
          
          <Col md={4} className="mb-4">
            <h6>Contacto</h6>
            <p className="mb-1">
              <i className="fas fa-envelope me-2"></i>contacto@walajr.com
            </p>
            <p className="mb-1">
              <i className="fas fa-phone me-2"></i>+56 9 1234 5678
            </p>
            <p className="mb-1">
              <i className="fas fa-map-marker-alt me-2"></i>Santiago, Chile
            </p>
          </Col>
          
          <Col md={4} className="mb-4">
            <h6>Síguenos</h6>
            <div className="d-flex gap-3">
              <a href="#facebook" className="text-white">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#twitter" className="text-white">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#instagram" className="text-white">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#youtube" className="text-white">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </Col>
        </Row>
        
        <hr className="my-4" />
        
        <Row>
          <Col className="text-center">
            <p className="mb-0">&copy; 2025 walaJR Store. Todos los derechos reservados.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;