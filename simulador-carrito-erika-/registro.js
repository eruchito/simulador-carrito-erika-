document.addEventListener('DOMContentLoaded', function () {
    // Obtener referencia al formulario de registro y formulario de inicio de sesión
    const registroForm = document.querySelector('#registro-form form');
    const inicioSesionForm = document.querySelector('#inicio-sesion-form');
  
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
  
        // Ocultar formulario de registro
        document.getElementById('registro-form').style.display = 'none';
  
        // Mostrar Sweet Alert de registro exitoso
        Swal.fire(
          '¡Registro Exitoso!',
          'Tu cuenta ha sido creada con éxito.',
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
  
      // Ocultar formulario de inicio de sesión
      document.getElementById('inicio-sesion').style.display = 'none';
  
      // Mostrar Sweet Alert de inicio de sesión exitoso
      Swal.fire(
        '¡Inicio de Sesión Exitoso!',
        'Has iniciado sesión correctamente.',
        'success'
      );
    });
  });

  // Dentro del evento de envío del formulario de registro
document.getElementById('usuario').innerHTML = `<i class="fas fa-user"></i> ${nombre}`;