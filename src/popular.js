// esperar a que se cargue el DOM
window.addEventListener('load', () => {
    // seleccionar los elementos relevantes del DOM
    const ul = document.querySelector('ul');
    const lis = ul.querySelectorAll('li');
  
    // recorrer los elementos li y agregar un evento de clic a cada uno
    lis.forEach(li => {
      li.addEventListener('click', () => {
        const titulo = li.querySelector('b').textContent;
        alert(`Has seleccionado el libro "${titulo}"`);
      });
    });
  });