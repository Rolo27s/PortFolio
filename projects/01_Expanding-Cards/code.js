const $shadowDOM = document.createElement('div');
$shadowDOM.classList.add('cards-container');

// Función para ingresar imágenes. La extensión de las imágenes serán en jpg
const insertImage = function (container, src, nombreImagen) {
  const alt = src.split('/')[2];
  // Implemento el textHide en caso de necesitarlo
  container.innerHTML += `
    <div class = "card ${nombreImagen}">
      <figcaption class = 'hide' id = figcaption-${nombreImagen}>${alt}</figcaption>
    </div>
  `;
  const card = container.querySelector(`.${nombreImagen}`);
  card.style.backgroundImage = `url(${src}.jpg)`;
}

// Imagen 1.
insertImage ($shadowDOM, './assets/lake-and-mountains-nature', 'imagen-1');

// Imagen 2.
insertImage ($shadowDOM, './assets/modern-nature-park', 'imagen-2');

// Imagen 3.
insertImage ($shadowDOM, './assets/nature-and-temple-view', 'imagen-3');

// Imagen 4.
insertImage ($shadowDOM, './assets/rock-river-nature-landscape', 'imagen-4');

// Imagen 5.
insertImage ($shadowDOM, './assets/sea-and-sunset-nature', 'imagen-5');

// Virtual o Shadow DOM to DOM. Corregir terminologías.
document.body.insertAdjacentElement('beforeend', $shadowDOM);



// Una vez ingresé los elementos desde el Javascript voy modificar el estado del figcaption
const img_1 = document.querySelector('.imagen-1');
const img_2 = document.querySelector('.imagen-2');
const img_3 = document.querySelector('.imagen-3');
const img_4 = document.querySelector('.imagen-4');
const img_5 = document.querySelector('.imagen-5');

const figcaptionImg_1 = document.getElementById('figcaption-imagen-1');
const figcaptionImg_2 = document.getElementById('figcaption-imagen-2');
const figcaptionImg_3 = document.getElementById('figcaption-imagen-3');
const figcaptionImg_4 = document.getElementById('figcaption-imagen-4');
const figcaptionImg_5 = document.getElementById('figcaption-imagen-5');

// Tres elementos a modificar según el click. La imagen 1 por defecto estará abierta
img_1.classList.add('expanded');
// img_1.style.width = 'auto';
figcaptionImg_1.classList.toggle('hide');

img_1.addEventListener('click', () => {
  img_1.classList.add('expanded');
  img_2.classList.remove('expanded');
  img_3.classList.remove('expanded');
  img_4.classList.remove('expanded');
  img_5.classList.remove('expanded');

  figcaptionImg_1.classList.remove('hide');
  figcaptionImg_2.classList.add('hide');
  figcaptionImg_3.classList.add('hide');
  figcaptionImg_4.classList.add('hide');
  figcaptionImg_5.classList.add('hide');
});

img_2.addEventListener('click', () => {
  img_2.classList.add('expanded');
  img_1.classList.remove('expanded');
  img_3.classList.remove('expanded');
  img_4.classList.remove('expanded');
  img_5.classList.remove('expanded');

  figcaptionImg_2.classList.remove('hide');
  figcaptionImg_1.classList.add('hide');
  figcaptionImg_3.classList.add('hide');
  figcaptionImg_4.classList.add('hide');
  figcaptionImg_5.classList.add('hide');
});

img_3.addEventListener('click', () => {
  img_3.classList.add('expanded');
  img_1.classList.remove('expanded');
  img_2.classList.remove('expanded');
  img_4.classList.remove('expanded');
  img_5.classList.remove('expanded');

  figcaptionImg_3.classList.remove('hide');
  figcaptionImg_1.classList.add('hide');
  figcaptionImg_2.classList.add('hide');
  figcaptionImg_4.classList.add('hide');
  figcaptionImg_5.classList.add('hide');
});

img_4.addEventListener('click', () => {
  img_4.classList.add('expanded');
  img_1.classList.remove('expanded');
  img_2.classList.remove('expanded');
  img_3.classList.remove('expanded');
  img_5.classList.remove('expanded');

  figcaptionImg_4.classList.remove('hide');
  figcaptionImg_1.classList.add('hide');
  figcaptionImg_2.classList.add('hide');
  figcaptionImg_3.classList.add('hide');
  figcaptionImg_5.classList.add('hide');
});

img_5.addEventListener('click', () => {
  img_5.classList.add('expanded');
  img_1.classList.remove('expanded');
  img_2.classList.remove('expanded');
  img_3.classList.remove('expanded');
  img_4.classList.remove('expanded');

  figcaptionImg_5.classList.remove('hide');
  figcaptionImg_1.classList.add('hide');
  figcaptionImg_2.classList.add('hide');
  figcaptionImg_3.classList.add('hide');
  figcaptionImg_4.classList.add('hide');
});
