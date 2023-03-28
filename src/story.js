// seleccionar los elementos HTML relevantes
const heading = document.querySelector('h1');
const paragraph = document.querySelector('p');
const link1 = document.querySelector('li:nth-child(1) a');
const link2 = document.querySelector('li:nth-child(2) a');

// cambiar el texto del encabezado y del primer párrafo
heading.textContent = 'La aventura de Danilo';
paragraph.textContent = 'Danilo estaba emocionado por lo que le esperaba en Romania.';

// agregar un evento de clic a cada enlace de navegación
link1.addEventListener('click', () => {
  alert('Estamos volando a Romania');
});

link2.addEventListener('click', () => {
  alert('Hemos llegado a los castillos');
});