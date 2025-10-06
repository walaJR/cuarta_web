import React from 'react';
import { Container } from 'react-bootstrap';

function HeroSection() {
  return (
    <section id="home" className="hero-section">
      <Container>
        <h1 className="display-4 mb-4">Bienvenido a walaJR Store</h1>
        <p className="lead mb-4">
          Los mejores videojuegos digitales y físicos al mejor precio
        </p>
        <a href="#productos" className="btn btn-light btn-lg">
          Ver Productos
        </a>
      </Container>
    </section>
  );
}

export default HeroSection;