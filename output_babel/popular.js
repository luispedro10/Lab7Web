"use strict";

require("./stylePopular.scss");
require("./images/atomicos.jpg");
require("./images/carazamba.jpg");
require("./images/harrypotter.jpg");
require("@babel/polyfill");
window.addEventListener('load', function () {
  var ul = document.querySelector('ul');
  if (ul) {
    var lis = ul.querySelectorAll('li');
    lis.forEach(function (li) {
      li.addEventListener('click', function (event) {
        // Prevent default behavior
        event.preventDefault();

        // Puedes agregar cualquier otro código aquí si necesitas realizar acciones específicas al hacer clic en un libro

        // Redirige al usuario a la página de detalles del libro después de un breve retraso (por ejemplo, 500 ms)
        var link = li.querySelector('a');
        setTimeout(function () {
          window.location.href = link.href;
        }, 500);
      });
    });
  }
});