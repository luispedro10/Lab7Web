"use strict";

require("@babel/polyfill");
var heading = document.querySelector('h1');
var paragraph = document.querySelector('p');
var link1 = document.querySelector('li:nth-child(1) a');
var link2 = document.querySelector('li:nth-child(2) a');
heading.textContent = 'La aventura de Danilo';
link1.addEventListener('click', function () {
  alert('Estamos volando a Romania');
});
link2.addEventListener('click', function () {
  alert('Hemos llegado a los castillos');
});