document.addEventListener('DOMContentLoaded', function () {
    const campoBusqueda = document.getElementById('buscador');
    const selectCategoria = document.getElementById('categoria');
    const divProductos = document.getElementById('productos');

    // Agregar un event listener al campo de búsqueda
    campoBusqueda.addEventListener('input', function () {
        mostrarProductos();
    });

    // Agregar un event listener al select de categoría
    selectCategoria.addEventListener('change', function () {
        mostrarProductos();
    });

    // Función para mostrar productos en el contenedor
    function mostrarProductos() {
        const busqueda = campoBusqueda.value.toLowerCase(); // Obtener el término de búsqueda en minúsculas
        const categoriaSeleccionada = selectCategoria.value; // Obtener la categoría seleccionada

        // Limpiar el contenedor de productos
        divProductos.innerHTML = '';

        // Filtrar los productos según el término de búsqueda y la categoría seleccionada
        const productosFiltrados = [];
        for (const categoria in productosPorCategoria) {
            if (categoria === categoriaSeleccionada || categoriaSeleccionada === 'todos') {
                productosFiltrados.push(...productosPorCategoria[categoria].filter(producto => producto.nombre.toLowerCase().includes(busqueda)));
            }
        }

        // Mostrar los productos filtrados
        productosFiltrados.forEach(producto => {
            const container = document.createElement('div');
            container.classList.add('producto');

            // Crear elementos para mostrar la información del producto (imagen, nombre, precio, etc.)
            const img = document.createElement('img');
            img.src = producto.imagen;
            img.alt = producto.nombre;

            const nombrePrecio = document.createElement('span');
            nombrePrecio.textContent = `${producto.nombre} - $${producto.precio}`;

            const cantidadInput = document.createElement('input');
            cantidadInput.type = 'number';
            cantidadInput.min = '1';
            cantidadInput.value = cantidadInput.min || '1';

            const button = document.createElement('button');
            button.textContent = 'Agregar';
            button.onclick = () => agregarAlCarrito(producto.id, parseInt(cantidadInput.value));

            container.appendChild(img);
            container.appendChild(nombrePrecio);
            container.appendChild(cantidadInput);
            container.appendChild(button);

            divProductos.appendChild(container);
        });
    }

    // Mostrar todos los productos al cargar la página
    mostrarProductos();
});