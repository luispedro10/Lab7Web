
const heading = document.querySelector('h1');
const paragraph = document.querySelector('p');
const link1 = document.querySelector('li:nth-child(1) a');



heading.textContent = 'La aventura de Danilo';

link1.addEventListener('click', () => {
  alert('Estamos volando a Romania');
});

link2.addEventListener('click', () => {
  alert('Hemos llegado a los castillos');
});