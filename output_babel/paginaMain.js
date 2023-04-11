"use strict";

require("./styleMain.scss");
require("@babel/polyfill");
window.addEventListener('load', function () {
  var header = document.querySelector('header');
  var h1 = header ? header.querySelector('h1') : null;
  var nav = header ? header.querySelector('nav') : null;
  var links = nav ? nav.querySelectorAll('a') : [];
  if (h1) {
    h1.textContent = 'Bienvenido a la Libreria';
  }
  function changeHeaderColor() {
    var randomColor = "#".concat(Math.floor(Math.random() * 16777215).toString(16));
    if (header) {
      header.style.backgroundColor = randomColor;
    }
  }
  links.forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault(); // prevenimos que nos mande automaticamente
      changeHeaderColor();

      // retraso de trecientos tics
      setTimeout(function () {
        window.location.href = link.href;
      }, 300);
    });
  });
});