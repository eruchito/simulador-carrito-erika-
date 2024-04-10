
function mostrarProductos(categoria) {
    const productos = productosPorCategoria[categoria];
    const divProductos = document.getElementById('productos');
    divProductos.innerHTML = `<h2>${categoria.charAt(0).toUpperCase() + categoria.slice(1)}</h2>`;
    productos.forEach(producto => {
        const { nombre, precio, imagen } = producto;

        // Crear contenedor de producto
        const productoContainer = document.createElement('div');
        productoContainer.classList.add('producto');

        // Crear imagen del producto
        const imagenProducto = document.createElement('img');
        imagenProducto.src = imagen; // Asignar la URL de la imagen
        imagenProducto.alt = nombre; // Asignar el nombre del producto como texto alternativo de la imagen

        // Agregar imagen al contenedor de producto
        productoContainer.appendChild(imagenProducto);

        // Resto del código para el nombre, precio, cantidad y botón de agregar al carrito...

        // Agregar el contenedor de producto al contenedor principal de productos
        divProductos.appendChild(productoContainer);
    });
}

// Carrito inicialmente vacío
let carrito = [];

function agregarAlCarrito(productoId, cantidad) {
    for (const categoria in productosPorCategoria) {
        const producto = productosPorCategoria[categoria].find(p => p.id === productoId);
        if (producto) {
            carrito.push(...Array(cantidad).fill({ ...producto })); // Operador spread aquí
            break;
        }
    }
    actualizarCarrito();
}

function actualizarCarrito() {
    const listaCarrito = document.getElementById('listaCarrito');
    listaCarrito.innerHTML = '';
    carrito.forEach(producto => {
        const li = document.createElement('li');
        li.textContent = `${producto.nombre} - $${producto.precio}`;

        // Crear botón de eliminar producto
        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.classList.add('eliminar-producto');
        botonEliminar.dataset.productoId = producto.id;
        botonEliminar.addEventListener('click', function () {
            eliminarProducto(parseInt(this.dataset.productoId));
        });

        // Agregar botón de eliminar al elemento de la lista
        li.appendChild(botonEliminar);

        listaCarrito.appendChild(li);
    });

    const total = carrito.reduce((acc, producto) => acc + producto.precio, 0);
    document.getElementById('totalCarrito').textContent = total.toFixed(2);
}

function eliminarProducto(productoId) {
    const indice = carrito.findIndex(producto => producto.id === productoId);
    if (indice !== -1) {
        carrito.splice(indice, 1);
        Swal.fire({
            title: 'Producto eliminado',
            text: 'El producto ha sido eliminado exitosamente.',
            icon: 'success',
            confirmButtonText: 'Aceptar'
        });
        actualizarCarrito();
    }
}

document.addEventListener('DOMContentLoaded', function () {
    // Manejar clic en los enlaces del menú
    document.querySelectorAll('#menu a').forEach(enlace => {
        enlace.addEventListener('click', function (event) {
            event.preventDefault();
            const categoria = this.getAttribute('href').substring(1);
            mostrarProductos(categoria);
        });
    });

    // Manejar clic en el enlace "Ver medios de pago" de cada producto
    document.getElementById('productos').addEventListener('click', function (event) {
        if (event.target.classList.contains('verMediosPago')) {
            showModal();
        }
    });

    // Cerrar modal haciendo clic en la 'X'
    document.querySelector('.close').addEventListener('click', function () {
        closeModal();
    });

    // Manejar clic en el botón "Transferencia Bancaria"
    document.getElementById('transferenciaBtn').addEventListener('click', function () {
        alert('Al finalizar la compra te va a llegar un email con los datos bancarios para realizar la transferencia');
        closeModal();
    });

    // Manejar clic en el botón "Efectivo"
    document.getElementById('efectivoBtn').addEventListener('click', function () {
        alert('Podés pagar en efectivo retirando personalmente en nuestros puntos de retiro');
        closeModal();
    });
});

function mostrarProductos(categoria) {
    const productos = productosPorCategoria[categoria];
    const divProductos = document.getElementById('productos');
    divProductos.innerHTML = `<h2>${categoria.charAt(0).toUpperCase() + categoria.slice(1)}</h2>`;
    productos.forEach(producto => {
        const { imagen, nombre, precio } = producto;

        const container = document.createElement('div');
        container.classList.add('producto');

        // Crear elemento de imagen
        const img = document.createElement('img');
        img.src = imagen;
        img.alt = nombre; // Establecer el atributo alt con el nombre del producto

        const nombrePrecio = document.createElement('span');
        nombrePrecio.textContent = `${producto.nombre} - $${producto.precio}`;

        const cantidadInput = document.createElement('input');
        cantidadInput.type = 'number';
        cantidadInput.min = '1';
        cantidadInput.value = cantidadInput.min || '1';

        const button = document.createElement('button');
        button.textContent = 'Agregar';
        button.onclick = () => agregarAlCarrito(producto.id, parseInt(cantidadInput.value));

        const verMediosPago = document.createElement('a');
        verMediosPago.textContent = 'Ver medios de pago';
        verMediosPago.href = '#';
        verMediosPago.classList.add('verMediosPago');

        container.appendChild(img); // Agregar la imagen al contenedor
        container.appendChild(nombrePrecio);
        container.appendChild(cantidadInput);
        container.appendChild(button);
        container.appendChild(verMediosPago);

        divProductos.appendChild(container);
    });
}

function agregarAlCarrito(productoId, cantidad) {
    for (const categoria in productosPorCategoria) {
        const producto = productosPorCategoria[categoria].find(p => p.id === productoId);
        if (producto) {
            for (let i = 0; i < cantidad; i++) {
                carrito.push(producto);
            }
            break;
        }
    }
    actualizarCarrito();
}

// Función para mostrar el modal
function showModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'block';
}

// Función para cerrar el modal
function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}