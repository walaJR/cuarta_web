walaJR Store
E-commerce de videojuegos desarrollado con React y Vite. Proyecto académico que implementa gestión de estado con hooks, carga de datos desde JSON local, carrito de compras funcional y sistema de búsqueda y filtrado de productos.
Características Principales

Catálogo de productos con búsqueda en tiempo real
Filtrado por categorías (juegos digitales y físicos)
Carrito de compras con gestión completa de productos
Sistema de notificaciones toast
Formulario de contacto con validación
Diseño responsive con Bootstrap 5
Gestión de estado con useState
Efectos secundarios con useEffect
Renderizado condicional en múltiples componentes

Tecnologías Utilizadas

React 18.2.0
Vite 5.0.8
Bootstrap 5.3.2
React-Bootstrap 2.9.1
JavaScript ES6+
CSS3
Font Awesome 6.0.0

Implementación de Hooks
useState
Gestiona múltiples estados en la aplicación:

Estado del carrito de compras
Lista de productos y productos filtrados
Control de carga (loading)
Estado del carrito lateral (abierto/cerrado)
Términos de búsqueda y filtros de categoría
Sistema de notificaciones
Estados de botones interactivos
Datos del formulario de contacto

useEffect
Maneja efectos secundarios:

Carga de productos desde JSON local al montar el componente
Filtrado automático cuando cambian los criterios de búsqueda
Auto-cierre de notificaciones después de 3 segundos
Detección de tecla Escape para cerrar el carrito
Control del scroll del body cuando el carrito está abierto

Renderizado Condicional
Implementado en diversos escenarios:

Mensaje cuando el carrito está vacío
Spinner de carga mientras se obtienen los productos
Mensaje cuando no hay resultados de búsqueda
Cambio de texto en botones según el estado
Alternancia entre diferentes vistas según condiciones

Funcionalidades
Catálogo de Productos

Visualización en grid responsive
Imágenes con fallback en caso de error
Información de precio y categoría
Badges de categoría

Búsqueda y Filtrado

Búsqueda por nombre de producto en tiempo real
Filtro por categoría (digital/físico)
Combinación de ambos filtros
Actualización automática de resultados

Carrito de Compras

Agregar productos con feedback visual
Modificar cantidades (incrementar/decrementar)
Eliminar productos individuales
Vaciar carrito completo
Cálculo automático del total
Contador de productos en navbar
Sidebar deslizable
Cierre con tecla Escape o click en overlay

Notificaciones

Sistema toast con diferentes tipos (success, error, info, warning)
Auto-cierre después de 3 segundos
Cierre manual con botón
Iconos según tipo de mensaje

Formulario de Contacto

Validación de campos requeridos
Validación de formato de email
Mensajes de error específicos
Limpieza automática después de envío exitoso

Notas Técnicas

Extensiones .jsx para componentes React
Imports de React necesarios en cada componente
Rutas a archivos en public/ son relativas a la raíz
Bootstrap se importa como paquete npm, no CDN
Font Awesome se mantiene como CDN en index.html
Props y callbacks para comunicación entre componentes
Estado inmutable (uso de spread operator)
Cleanup en useEffect para evitar memory leaks

Navegadores Soportados

Chrome (última versión)
Firefox (última versión)
Safari (última versión)
Edge (última versión)

Licencia
Proyecto académico desarrollado para fines educativos.
Autor
Desarrollado como proyecto de aprendizaje de React, hooks y Vite.
