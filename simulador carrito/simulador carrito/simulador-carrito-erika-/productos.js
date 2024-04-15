// Datos de ejemplo de productos por categoría
const productosPorCategoria = {
  anillos: [
    { id: 1, nombre: 'Anillo 1', precio: 10.00, imagen: 'img/anillo1.jpg' },
    { id: 2, nombre: 'Anillo 2', precio: 20.00, imagen: 'img/anillo2.jpg' },
    { id: 3, nombre: 'Anillo 3', precio: 30.00, imagen: 'img/anillo3.jpg' },
    { id: 4, nombre: 'Anillo 4', precio: 10.00, imagen: 'img/anillo4.jpg' },
    { id: 5, nombre: 'Anillo 5', precio: 20.00, imagen: 'img/anillo5.jpg' },
    { id: 6, nombre: 'Anillo 6', precio: 20.00, imagen: 'img/anillo6.jpg' }
  ],
  peluches: [
    { id: 7, nombre: 'Peluche 1', precio: 30.00, imagen: 'img/peluches1.jpg' },
    { id: 8, nombre: 'Peluche 2', precio: 10.00, imagen: 'img/peluches2.jpg' },
    { id: 9, nombre: 'Peluche 3', precio: 20.00, imagen: 'img/peluches3.jpg' },
    { id: 10, nombre: 'Peluche 4', precio: 30.00, imagen: 'img/peluches4.jpg' },
    { id: 11, nombre: 'Peluche 5', precio: 10.00, imagen: 'img/peluches5.jpg' },
    { id: 12, nombre: 'Peluche 6', precio: 10.00, imagen: 'img/peluches6.jpg' }
  ],
  figuras: [
    { id: 13, nombre: 'Figura 1', precio: 20.00, imagen: 'img/figuras1.jpg' },
    { id: 14, nombre: 'Figura 2', precio: 30.00, imagen: 'img/figuras2.jpg' },
    { id: 15, nombre: 'Figura 3', precio: 30.00, imagen: 'img/figuras3.jpg' },
    { id: 16, nombre: 'Figura 4', precio: 30.00, imagen: 'img/figuras4.jpg' },
    { id: 17, nombre: 'Figura 5', precio: 30.00, imagen: 'img/figuras5.jpg' },
    { id: 18, nombre: 'Figura 6', precio: 30.00, imagen: 'img/figuras6.jpg' }
  ],
  maquillaje: [
    { id: 19, nombre: 'Maquillaje 1', precio: 30.00, imagen: 'img/maquillajes1.jpg' },
    { id: 20, nombre: 'Maquillaje 2', precio: 30.00, imagen: 'img/maquillajes2.jpg' },
    { id: 21, nombre: 'Maquillaje 3', precio: 30.00, imagen: 'img/maquillajes3.jpg' },
    { id: 22, nombre: 'Maquillaje 4', precio: 30.00, imagen: 'img/maquillajes4.jpg' },
    { id: 23, nombre: 'Maquillaje 5', precio: 30.00, imagen: 'img/maquillajes5.jpg' },
    { id: 24, nombre: 'Maquillaje 6', precio: 30.00, imagen: 'img/maquillajes6.jpg' }
  ],
  mangas: [
    { id: 25, nombre: 'Manga 1', precio: 30.00, imagen: 'img/mangas1.jpg' },
    { id: 26, nombre: 'Manga 2', precio: 30.00, imagen: 'img/mangas2.jpg' },
    { id: 27, nombre: 'Manga 3', precio: 30.00, imagen: 'img/mangas3.jpg' },
    { id: 28, nombre: 'Manga 4', precio: 30.00, imagen: 'img/mangas4.jpg' },
    { id: 29, nombre: 'Manga 5', precio: 30.00, imagen: 'img/mangas5.jpg' },
    { id: 30, nombre: 'Manga 6', precio: 30.00, imagen: 'img/mangas6.jpg' }
  ],
  aritos: [
    { id: 31, nombre: 'Arito 1', precio: 30.00, imagen: 'img/aritos1.jpg' },
    { id: 32, nombre: 'Arito 2', precio: 30.00, imagen: 'img/aritos2.jpg' },
    { id: 33, nombre: 'Arito 3', precio: 30.00, imagen: 'img/aritos3.jpg' },
    { id: 34, nombre: 'Arito 4', precio: 30.00, imagen: 'img/aritos4.jpg' },
    { id: 35, nombre: 'Arito 5', precio: 30.00, imagen: 'img/aritos5.jpg' },
    { id: 36, nombre: 'Arito 6', precio: 30.00, imagen: 'img/aritos6.jpg' }
  ],
  pulseras: [
    { id: 37, nombre: 'Pulsera 1', precio: 30.00, imagen: 'img/pulseras1.jpg' },
    { id: 38, nombre: 'Pulsera 2', precio: 30.00, imagen: 'img/pulseras2.jpg' },
    { id: 39, nombre: 'Pulsera 3', precio: 30.00, imagen: 'img/pulseras3.jpg' },
    { id: 40, nombre: 'Pulsera 4', precio: 30.00, imagen: 'img/pulseras4.jpg' },
    { id: 41, nombre: 'Pulsera 5', precio: 30.00, imagen: 'img/pulseras5.jpg' },
    { id: 42, nombre: 'Pulsera 6', precio: 30.00, imagen: 'img/pulseras6.jpg' }
  ],
  libretas: [
    { id: 43, nombre: 'Libreta 1', precio: 30.00, imagen: 'img/libretas1.jpg' },
    { id: 44, nombre: 'Libreta 2', precio: 30.00, imagen: 'img/libretas2.jpg' },
    { id: 45, nombre: 'Libreta 3', precio: 30.00, imagen: 'img/libretas3.jpg' },
    { id: 46, nombre: 'Libreta 4', precio: 30.00, imagen: 'img/libretas4.jpg' },
    { id: 47, nombre: 'Libreta 5', precio: 30.00, imagen: 'img/libretas5.jpg' },
    { id: 48, nombre: 'Libreta 6', precio: 30.00, imagen: 'img/libretas6.jpg' }
  ],
  encendedores: [
    { id: 49, nombre: 'Encendedor 1', precio: 30.00, imagen: 'img/encendedores1.jpg' },
    { id: 50, nombre: 'Encendedor 2', precio: 30.00, imagen: 'img/encendedores2.jpg' },
    { id: 51, nombre: 'Encendedor 3', precio: 30.00, imagen: 'img/encendedores3.jpg' },
    { id: 52, nombre: 'Encendedor 4', precio: 30.00, imagen: 'img/encendedores4.jpg' },
    { id: 53, nombre: 'Encendedor 5', precio: 30.00, imagen: 'img/encendedores5.jpg' },
    { id: 54, nombre: 'Encendedor 6', precio: 30.00, imagen: 'img/encendedores6.jpg' }
  ]
};

