import './stylePopular.scss';
import './images/atomicos.jpg';
import './images/carazamba.jpg';
import './images/harrypotter.jpg';
import '@babel/polyfill';
window.addEventListener('load', () => {
  const ul = document.querySelector('ul');

  if (ul) {
    const lis = ul.querySelectorAll('li');

    lis.forEach(li => {
      li.addEventListener('click', (event) => {
        
        event.preventDefault();

        

        
        const link = li.querySelector('a');
        setTimeout(() => {
          window.location.href = link.href;
        }, 500);
      });
    });
  }
});