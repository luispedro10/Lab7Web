import './stylePopular.scss';
window.addEventListener('load', () => {
    
    const ul = document.querySelector('ul');
    const lis = ul.querySelectorAll('li');
  
    
    lis.forEach(li => {
      li.addEventListener('click', () => {
        const titulo = li.querySelector('b').textContent;
        alert(`Has seleccionado el libro "${titulo}"`);
      });
    });
  });