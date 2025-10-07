import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProductsSection from './components/ProductsSection';
import ContactSection from './components/ContactSection';
import CartSidebar from './components/CartSidebar';
import Footer from './components/Footer';
import Toast from './components/Toast';

function App() {
  const [productos, setProductos] = useState([]);
  const [productosFiltrados, setProductosFiltrados] = useState([]);
  const [carrito, setCarrito] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [toast, setToast] = useState({ show: false, message: '', type: 'info' });

  useEffect(() => {
    const cargarProductos = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${import.meta.env.BASE_URL}productos.json`);
        
        if (!response.ok) {
          throw new Error('No se pudieron cargar los productos');
        }
        
        const data = await response.json();
        setProductos(data);
        setProductosFiltrados(data);
      } catch (error) {
        console.error('Error cargando productos:', error);
        const productosEjemplo = [
          {
            id: 1,
            nombre: "EA Sports FC 26",
            precio: 69990,
            categoria: "Juego físico",
            imagen: "https://via.placeholder.com/300x400/007bff/ffffff?text=EA+FC+26"
          },
          {
            id: 2,
            nombre: "Grand Theft Auto 6",
            precio: 99990,
            categoria: "Juego físico",
            imagen: "https://via.placeholder.com/300x400/28a745/ffffff?text=GTA+6"
          },
          {
            id: 3,
            nombre: "Red Dead Redemption 2",
            precio: 39990,
            categoria: "Juego digital",
            imagen: "https://via.placeholder.com/300x400/dc3545/ffffff?text=RDR2"
          }
        ];
        setProductos(productosEjemplo);
        setProductosFiltrados(productosEjemplo);
        mostrarToast('Error al cargar productos. Mostrando productos de ejemplo.', 'warning');
      } finally {
        setLoading(false);
      }
    };

    cargarProductos();
  }, []);

  useEffect(() => {
    let resultado = [...productos];

    if (categoryFilter) {
      resultado = resultado.filter(p => p.categoria === categoryFilter);
    }

    if (searchTerm.trim()) {
      resultado = resultado.filter(p => 
        p.nombre.toLowerCase().includes(searchTerm.toLowerCase().trim())
      );
    }

    setProductosFiltrados(resultado);
  }, [searchTerm, categoryFilter, productos]);

  const agregarAlCarrito = (id) => {
    const producto = productos.find(p => p.id === id);
    if (!producto) return;

    const itemExistente = carrito.find(item => item.id === id);
    
    if (itemExistente) {
      setCarrito(carrito.map(item => 
        item.id === id 
          ? { ...item, cantidad: item.cantidad + 1 }
          : item
      ));
    } else {
      setCarrito([...carrito, { ...producto, cantidad: 1 }]);
    }

    mostrarToast(`${producto.nombre} agregado al carrito`, 'success');
  };

  const eliminarDelCarrito = (id) => {
    setCarrito(carrito.filter(item => item.id !== id));
    mostrarToast('Producto eliminado del carrito', 'info');
  };

  const cambiarCantidad = (id, nuevaCantidad) => {
    if (nuevaCantidad <= 0) {
      eliminarDelCarrito(id);
      return;
    }

    setCarrito(carrito.map(item =>
      item.id === id
        ? { ...item, cantidad: nuevaCantidad }
        : item
    ));
  };

  const limpiarCarrito = () => {
    if (carrito.length === 0) return;
    
    if (window.confirm('¿Estás seguro de que deseas vaciar el carrito?')) {
      setCarrito([]);
      mostrarToast('Carrito vaciado', 'info');
    }
  };

  const procesarCompra = () => {
    if (carrito.length === 0) {
      mostrarToast('El carrito está vacío', 'error');
      return;
    }

    const total = carrito.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);
    const items = carrito.length;

    if (window.confirm(`¿Confirmar compra por $${total.toLocaleString('es-CL')} (${items} productos)?`)) {
      mostrarToast('¡Compra procesada exitosamente!', 'success');
      setCarrito([]);
      setCartOpen(false);
    }
  };

  const mostrarToast = (message, type = 'info') => {
    setToast({ show: true, message, type });
  };

  const cerrarToast = () => {
    setToast({ ...toast, show: false });
  };

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  const filtrarPorCategoria = (categoria) => {
    setCategoryFilter(categoria);
    setSearchTerm('');
  };

  const mostrarTodosLosProductos = () => {
    setCategoryFilter('');
    setSearchTerm('');
  };

  const totalCarrito = carrito.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);
  const contadorCarrito = carrito.reduce((total, item) => total + item.cantidad, 0);

  return (
    <div className="App">
      <Navbar 
        contadorCarrito={contadorCarrito}
        toggleCart={toggleCart}
        filtrarPorCategoria={filtrarPorCategoria}
        mostrarTodosLosProductos={mostrarTodosLosProductos}
      />
      
      <HeroSection />
      
      <ProductsSection
        productos={productosFiltrados}
        loading={loading}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        categoryFilter={categoryFilter}
        setCategoryFilter={setCategoryFilter}
        agregarAlCarrito={agregarAlCarrito}
        carrito={carrito}
      />
      
      <ContactSection mostrarToast={mostrarToast} />
      
      <CartSidebar
        carrito={carrito}
        cartOpen={cartOpen}
        toggleCart={toggleCart}
        cambiarCantidad={cambiarCantidad}
        eliminarDelCarrito={eliminarDelCarrito}
        limpiarCarrito={limpiarCarrito}
        procesarCompra={procesarCompra}
        totalCarrito={totalCarrito}
      />
      
      <Footer />
      
      <Toast
        show={toast.show}
        message={toast.message}
        type={toast.type}
        onClose={cerrarToast}
      />
    </div>
  );
}

export default App;