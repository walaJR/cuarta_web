import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';

function CartSidebar({ 
  carrito, 
  cartOpen, 
  toggleCart, 
  cambiarCantidad, 
  eliminarDelCarrito,
  limpiarCarrito,
  procesarCompra,
  totalCarrito
}) {
  // Cerrar carrito con tecla Escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && cartOpen) {
        toggleCart();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [cartOpen, toggleCart]);

  // Prevenir scroll del body cuando el carrito está abierto
  useEffect(() => {
    if (cartOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [cartOpen]);

  const handleImageError = (e) => {
    e.target.src = 'https://via.placeholder.com/60x60/6c757d/ffffff?text=N/A';
  };

  return (
    <>
      <div 
        className={`cart-overlay ${cartOpen ? 'active' : ''}`}
        onClick={toggleCart}
      ></div>
      
      <div className={`cart-sidebar ${cartOpen ? 'open' : ''}`}>
        <div className="p-4">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h5 className="mb-0">Mi Carrito</h5>
            <Button 
              variant="outline-secondary" 
              size="sm" 
              onClick={toggleCart}
            >
              <i className="fas fa-times"></i>
            </Button>
          </div>

          <div id="cart-items">
            {/* Renderizado condicional: Carrito vacío */}
            {carrito.length === 0 ? (
              <div className="text-center py-4">
                <i className="fas fa-shopping-cart fa-3x text-muted mb-3"></i>
                <p className="text-muted">Tu carrito está vacío</p>
              </div>
            ) : (
              carrito.map(item => (
                <div 
                  key={item.id} 
                  className="d-flex align-items-center mb-3 pb-3 border-bottom"
                >
                  <img 
                    src={item.imagen} 
                    className="cart-item-img rounded me-3"
                    alt={item.nombre}
                    onError={handleImageError}
                  />
                  <div className="flex-grow-1">
                    <h6 className="mb-1">{item.nombre}</h6>
                    <small className="text-muted">
                      ${item.precio.toLocaleString('es-CL')}
                    </small>
                    <div className="d-flex align-items-center mt-1">
                      <Button 
                        variant="outline-secondary" 
                        size="sm"
                        onClick={() => cambiarCantidad(item.id, item.cantidad - 1)}
                      >
                        -
                      </Button>
                      <span className="mx-2">{item.cantidad}</span>
                      <Button 
                        variant="outline-secondary" 
                        size="sm"
                        onClick={() => cambiarCantidad(item.id, item.cantidad + 1)}
                      >
                        +
                      </Button>
                      <Button 
                        variant="outline-danger" 
                        size="sm" 
                        className="ms-2"
                        onClick={() => eliminarDelCarrito(item.id)}
                      >
                        <i className="fas fa-trash"></i>
                      </Button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="border-top pt-3 mt-3">
            <div className="d-flex justify-content-between mb-2">
              <strong>Total: ${totalCarrito.toLocaleString('es-CL')}</strong>
            </div>
            <Button 
              variant="success" 
              className="w-100 mb-2"
              onClick={procesarCompra}
              disabled={carrito.length === 0}
            >
              <i className="fas fa-credit-card me-2"></i>Proceder al Pago
            </Button>
            <Button 
              variant="outline-danger" 
              className="w-100"
              onClick={limpiarCarrito}
            >
              <i className="fas fa-trash me-2"></i>Vaciar Carrito
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartSidebar;