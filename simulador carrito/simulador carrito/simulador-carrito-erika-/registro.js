document.addEventListener('DOMContentLoaded', function () {
  // Obtener referencia al formulario de registro y formulario de inicio de sesión
  const registroForm = document.querySelector('#registro-form form');
  const inicioSesionForm = document.querySelector('#inicio-sesion-form');
  const botonCrearCuenta = document.querySelector('#btn-crear-cuenta');
  const botonIniciarSesion = document.querySelector('#btn-iniciar-sesion');

  // Manejar evento de clic en el botón "Crear Cuenta"
  botonCrearCuenta.addEventListener('click', function () {
    document.getElementById('registro-form').style.display = 'block';
    document.getElementById('inicio-sesion').style.display = 'none';
  });

  // Manejar evento de clic en el botón "Iniciar Sesión"
  botonIniciarSesion.addEventListener('click', function () {
    document.getElementById('inicio-sesion').style.display = 'block';
    document.getElementById('registro-form').style.display = 'none';
  });

  // Manejar evento de envío del formulario de registro
  registroForm.addEventListener('submit', function (event) {
    event.preventDefault();

    // Obtener valores del formulario
    const nombre = document.querySelector('#nombre').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    // Verificar si todos los campos están completos
    if (nombre && email && password) {
      // Simulando registro (aquí deberías enviar los datos a tu servidor)
      console.log('Registrando usuario:', { nombre, email, password });

      // Limpiar campos del formulario
      registroForm.reset();

      // Ocultar formulario de registro y mostrar formulario de inicio de sesión
      document.getElementById('registro-form').style.display = 'none';
      document.getElementById('inicio-sesion').style.display = 'block';
    }
  });

  // Manejar evento de envío del formulario de inicio de sesión
  inicioSesionForm.addEventListener('submit', function (event) {
    event.preventDefault();

    // Obtener valores del formulario
    const email = document.querySelector('#email-login').value;
    const password = document.querySelector('#password-login').value;

    // Simulando inicio de sesión (aquí deberías enviar los datos a tu servidor y manejar la autenticación)
    console.log('Iniciando sesión con:', { email, password });

    // Limpiar campos del formulario
    inicioSesionForm.reset();
  });

  // Manejar evento de envío del formulario de registro
  registroForm.addEventListener('submit', function (event) {
    event.preventDefault();

    // Obtener valores del formulario
    const nombre = document.querySelector('#nombre').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    // Verificar si todos los campos están completos
    if (nombre && email && password) {
      // Simulando registro (aquí deberías enviar los datos a tu servidor)
      console.log('Registrando usuario:', { nombre, email, password });

      // Limpiar campos del formulario
      registroForm.reset();

      // Ocultar formulario de registro y mostrar formulario de inicio de sesión
      document.getElementById('registro-form').style.display = 'none';
      document.getElementById('inicio-sesion').style.display = 'block';

      // Mostrar Sweet Alert de cuenta creada exitosamente
      Swal.fire(
        '¡Cuenta Creada!',
        'Tu cuenta ha sido creada exitosamente.',
        'success'
      );
    }
  });

  // Manejar evento de envío del formulario de inicio de sesión
  inicioSesionForm.addEventListener('submit', function (event) {
    event.preventDefault();

    // Obtener valores del formulario
    const email = document.querySelector('#email-login').value;
    const password = document.querySelector('#password-login').value;

    // Simulando inicio de sesión (aquí deberías enviar los datos a tu servidor y manejar la autenticación)
    console.log('Iniciando sesión con:', { email, password });

    // Limpiar campos del formulario
    inicioSesionForm.reset();

    // Mostrar Sweet Alert de inicio de sesión exitoso
    Swal.fire(
      '¡Inicio de Sesión Exitoso!',
      'Has iniciado sesión correctamente.',
      'success'
    );
  });

 // Ocultar formulario de registro
 document.getElementById('registro-form').style.display = 'none';
   // Limpiar campos del formulario
   registroForm.reset();

   // Ocultar formulario de registro
   document.getElementById('registro-form').style.display = 'none';

  // Manejar evento de clic en "Finalizar Compra"
  document.getElementById('finalizarCompra').addEventListener('click', function () {
    // Mostrar alerta de SweetAlert
    Swal.fire({
      title: '¿Finalizar Compra?',
      text: '¿Estás seguro de que deseas finalizar la compra?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          '¡Compra Finalizada!',
          'Tu compra ha sido procesada con éxito.',
          'success'
        );
      }
    });
  });
});