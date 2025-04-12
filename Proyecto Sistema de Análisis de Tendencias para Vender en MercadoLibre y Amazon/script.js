function changeColor() {
    const message = document.getElementById('welcome-message');
    const colors = ['#e91e63', '#03a9f4', '#4caf50', '#ff9800', '#9c27b0'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    message.style.color = randomColor;
  }// Agrega un evento de clic al botón de "Ver más" en la sección de inicio
  document.querySelector('#inicio button').addEventListener('click', () => {
    // Despliega la sección de "Sobre mí"
    document.querySelector('#sobre-mi').scrollIntoView({ behavior: 'smooth' });
  });
  
  // Agrega un evento de clic a los botones de "Ver más" en la sección de proyectos
  document.querySelectorAll('#proyectos li a').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      // Despliega la sección de "Proyectos" y muestra el proyecto seleccionado
      document.querySelector('#proyectos').scrollIntoView({ behavior: 'smooth' });
      // Agrega una clase para mostrar el proyecto seleccionado
      link.parentNode.classList.add('active');
    });
  });
  
  // Agrega un evento de envío al formulario de contacto
  document.querySelector('#contacto form').addEventListener('submit', (e) => {
    e.preventDefault();
    // Envía el formulario mediante AJAX o muestra un mensaje de confirmación
    console.log('Formulario enviado');
  });