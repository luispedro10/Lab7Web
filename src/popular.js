import './stylePopular.scss';
import './images/atomicos.jpg';
import './images/carazamba.jpg';
import './images/harrypotter.jpg';
window.addEventListener('load', () => {
  const ul = document.querySelector('ul');

  if (ul) {
    const lis = ul.querySelectorAll('li');

    lis.forEach(li => {
      li.addEventListener('click', (event) => {
        // Prevent default behavior
        event.preventDefault();

        // Puedes agregar cualquier otro código aquí si necesitas realizar acciones específicas al hacer clic en un libro

        // Redirige al usuario a la página de detalles del libro después de un breve retraso (por ejemplo, 500 ms)
        const link = li.querySelector('a');
        setTimeout(() => {
          window.location.href = link.href;
        }, 500);
      });
    });
  }
});