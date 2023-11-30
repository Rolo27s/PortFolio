/* 
Tiempo de gestión de todo los cambios = 5s. Definir una constante para modificar todo con un parámetro.
- Imagen comienza en blur y termina sin blur
- Contador de texto de blur de 0% a 100%
- Opacity del texto de 0.9 a 0
*/

const loader = document.querySelector('.loader');
const container = document.querySelector('.container');
document.addEventListener('DOMContentLoaded', () => {
  container.classList.add('active');
  loader.classList.add('active-opacity');
});


/* Quiero un total de 5s y tendré 100 números, por lo que cada número saldrá cada 50ms */
let i = 1;
const intervalId = setInterval(() => {
  loader.textContent = `${i} %`;
  i++;

  // Cuando i valga 100 se detiene
  if (i > 100) clearInterval(intervalId);
}, 50);