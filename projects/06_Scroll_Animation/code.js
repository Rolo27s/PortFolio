function evento() {
  const container = document.querySelector('#container');
  const boxes = document.querySelectorAll('.box');

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    // Declaración del límite
    const threshold = window.innerHeight * 0.75;

    // Condición de scrollY abajo del todo
    const final = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight;

    if (boxTop < threshold || final) {
        box.classList.add('active');
      } else {
        box.classList.remove('active');
      }
  });
}

window.addEventListener('DOMContentLoaded', evento);
window.addEventListener('scroll', evento);
