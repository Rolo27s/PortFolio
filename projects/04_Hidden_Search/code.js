const button = document.querySelector('.button-search');
const $box = document.querySelector('.input-text');

button.addEventListener('click', ()=> {
  $box.classList.toggle('hidden');
});
