// const arrayItems = ['Home', 'Works', 'About', 'Contact'];
const items = document.querySelectorAll('li.item');
const buttonClose = document.querySelector('button.close');

const stick1 = document.querySelector('.stick-1');
const stick2 = document.querySelector('.stick-2');

let isMenuOpen = true;

buttonClose.addEventListener('click', () => {
  if (isMenuOpen) {
    // Oculta el menú suavemente al agregar la clase "hide"
    items.forEach((item) => {
      item.classList.add('hide');
    });
    document.querySelector('ul').classList.add('gap0');
    stick1.classList.add('rotate-stick-1-to-close');
    stick2.classList.add('rotate-stick-2-to-close');
  } else {
    // Muestra el menú al quitar la clase "hide"
    items.forEach((item) => {
      item.classList.remove('hide');
    });
    document.querySelector('ul').classList.remove('gap0');
    stick1.classList.remove('rotate-stick-1-to-close');
    stick2.classList.remove('rotate-stick-2-to-close');
  }
  isMenuOpen = !isMenuOpen;
});
