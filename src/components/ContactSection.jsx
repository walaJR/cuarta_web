import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

function ContactSection({ mostrarToast }) {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación de campos vacíos
    if (!formData.nombre.trim() || !formData.email.trim() || 
        !formData.asunto.trim() || !formData.mensaje.trim()) {
      mostrarToast('Por favor completa todos los campos', 'error');
      return;
    }

    // Validación de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      mostrarToast('Por favor ingresa un email válido', 'error');
      return;
    }

    // Envío exitoso
    mostrarToast('¡Mensaje enviado exitosamente! Te contactaremos pronto.', 'success');
    
    // Limpiar formulario
    setFormData({
      nombre: '',
      email: '',
      asunto: '',
      mensaje: ''
    });
  };

  return (
    <section id="contacto" className="contact-section">
      <Container>
        <h2 className="text-center mb-5">Contacto</h2>
        <Row>
          <Col lg={8} className="mx-auto">
            <Card className="shadow">
              <Card.Body className="p-5">
                <Form onSubmit={handleSubmit}>
                  <Row className="mb-3">
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label htmlFor="nombre">Nombre *</Form.Label>
                        <Form.Control
                          type="text"
                          id="nombre"
                          value={formData.nombre}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group>
                        <Form.Label htmlFor="email">Email *</Form.Label>
                        <Form.Control
                          type="email"
                          id="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="asunto">Asunto *</Form.Label>
                    <Form.Control
                      type="text"
                      id="asunto"
                      value={formData.asunto}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label htmlFor="mensaje">Mensaje *</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      id="mensaje"
                      value={formData.mensaje}
                      onChange={handleChange}
                      required
                    />
                  </Form.Group>

                  <div className="text-center">
                    <Button type="submit" variant="primary" size="lg">
                      <i className="fas fa-paper-plane me-2"></i>Enviar Mensaje
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ContactSection;