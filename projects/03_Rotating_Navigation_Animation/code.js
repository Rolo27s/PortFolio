/* PARTES DINÁMICAS */

/* Click en class="rotate__three-lines" agregar estos 3 efectos:
      En class="rotate" -> transform: rotate(-90deg);
      En class="page" -> transform: rotate(-20deg);
      En class="navigator" -> left: 0px;
  
  Click en class="rotate-revert" volver al estado inicial:
      En class="rotate" -> transform: rotate(0deg);
      En class="page" -> transform: rotate(0deg);
      En class="navigator" -> left: -500px;
*/

/* Botones para el evento click */
const threeLines = document.querySelector('.rotate__three-lines');
const revert = document.querySelector('.rotate__revert');

/* Clases a modificar */
const circulo = document.querySelector('.rotate');
const page = document.querySelector('.page');
const nav = document.querySelector('.navigator');

/* Declaración de los eventos y modificación de clases */
threeLines.addEventListener('click', () => {
  circulo.classList.add('rotate-used');
  page.classList.add('page-used');
  nav.classList.add('navigator-used');
});

revert.addEventListener('click', () => {
  circulo.classList.remove('rotate-used');
  page.classList.remove('page-used');
  nav.classList.remove('navigator-used');
});
