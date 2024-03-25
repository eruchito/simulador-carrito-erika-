const productos = [
    { id: 1, nombre: 'Producto 1', precio: 10.00 },
    { id: 2, nombre: 'Producto 2', precio: 20.00 },
    { id: 3, nombre: 'Producto 3', precio: 30.00 }
  ];
  
  // Carrito inicialmente vacío
  let carrito = [];
  
  function registrarUsuario() {
    // Aquí agregarías el código para registrar al usuario
  }
  
  function agregarAlCarrito(productoId) {
    const producto = productos.find(p => p.id === productoId);
    carrito.push(producto);
    actualizarCarrito();
  }
  
  function actualizarCarrito() {
    const listaCarrito = document.getElementById('listaCarrito');
    listaCarrito.innerHTML = '';
    carrito.forEach(producto => {
      const li = document.createElement('li');
      li.textContent = `${producto.nombre} - $${producto.precio}`;
      listaCarrito.appendChild(li);
    });
  
    const total = carrito.reduce((acc, producto) => acc + producto.precio, 0);
    document.getElementById('totalCarrito').textContent = total.toFixed(2);
  }
  
  function finalizarCompra() {
    // Aquí agregarías el código para procesar la compra
    alert('Compra finalizada con éxito.');
    // Limpia el carrito
    carrito = [];
    actualizarCarrito();
  }
  
  // Renderizar productos
  const divProductos = document.getElementById('productos');
  productos.forEach(producto => {
    const button = document.createElement('button');
    button.textContent = `Agregar ${producto.nombre} - $${producto.precio}`;
    button.onclick = () => agregarAlCarrito(producto.id);
    divProductos.appendChild(button);
  });