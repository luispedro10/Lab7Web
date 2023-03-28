import './styleMain.scss';
window.addEventListener('load', () => {
  const header = document.querySelector('header');
  const h1 = header ? header.querySelector('h1') : null;
  const nav = header ? header.querySelector('nav') : null;
  const links = nav ? nav.querySelectorAll('a') : [];

  if (h1) {
    h1.textContent = 'Bienvenido a la Libreria';
  }

  function changeHeaderColor() {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    if (header) {
      header.style.backgroundColor = randomColor;
    }
  }

  links.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault(); // prevenimos que nos mande automaticamente
      changeHeaderColor();
      
      // retraso de trecientos tics
      setTimeout(() => {
        window.location.href = link.href;
      }, 300);
    });
  });
});