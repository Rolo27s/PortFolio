// Estado inicial en 1. Estados posibles 1, 2, 3 y 4.
let state = 1;

// Buttons
const btnNext = document.getElementById('btn-next'),
      btnPrev = document.getElementById('btn-prev');

btnNext.addEventListener('click', () => {
  state++;
  if (state > 4) state = 4;
  updateButtonColors();
  updateCircleColors();
  updateLineColors();
});

btnPrev.addEventListener('click', () => {
  state--;
  if (state < 1) state = 1;
  updateButtonColors();
  updateCircleColors();
  updateLineColors();
});

// Components
const circle_1 = document.getElementById('circle-1'), circle_2 = document.getElementById('circle-2'), circle_3 = document.getElementById('circle-3'), circle_4 = document.getElementById('circle-4');

const line_1 = document.getElementById('line-1'), line_2 = document.getElementById('line-2'), line_3 = document.getElementById('line-3');

function updateButtonColors() {
  switch(state) {
    case 1:
      btnPrev.style.cursor = 'not-allowed';
      btnPrev.style.background = 'rgba(209, 210, 211, 0.9)';
      btnNext.style.cursor = 'pointer';
      btnNext.style.background = 'rgba(0, 119, 255, 0.9)';
      break;
    case 2: case 3:
      btnPrev.style.cursor = 'pointer';
      btnPrev.style.background = 'rgba(0, 119, 255, 0.9)';
      btnNext.style.cursor = 'pointer';
      btnNext.style.background = 'rgba(0, 119, 255, 0.9)';
      break;
    case 4:
      btnPrev.style.cursor = 'pointer';
      btnPrev.style.background = 'rgba(0, 119, 255, 0.9)';
      btnNext.style.cursor = 'not-allowed';
      btnNext.style.background = 'rgba(209, 210, 211, 0.9)';
      break;
  }
}

function updateCircleColors() {
  setTimeout(function () {
    switch (state) {
      case 1:
        circle_1.style.background = 'rgba(0, 119, 255, 0.9)';
        circle_2.style.background = 'rgba(209, 210, 211, 0.9)';
        circle_3.style.background = 'rgba(209, 210, 211, 0.9)';
        circle_4.style.background = 'rgba(209, 210, 211, 0.9)';
        break;
      case 2:
        circle_1.style.background = 'rgba(0, 119, 255, 0.9)';
        circle_2.style.background = 'rgba(0, 119, 255, 0.9)';
        circle_3.style.background = 'rgba(209, 210, 211, 0.9)';
        circle_4.style.background = 'rgba(209, 210, 211, 0.9)';
        break;
      case 3:
        circle_1.style.background = 'rgba(0, 119, 255, 0.9)';
        circle_2.style.background = 'rgba(0, 119, 255, 0.9)';
        circle_3.style.background = 'rgba(0, 119, 255, 0.9)';
        circle_4.style.background = 'rgba(209, 210, 211, 0.9)';
        break;
      case 4:
        circle_1.style.background = 'rgba(0, 119, 255, 0.9)';
        circle_2.style.background = 'rgba(0, 119, 255, 0.9)';
        circle_3.style.background = 'rgba(0, 119, 255, 0.9)';
        circle_4.style.background = 'rgba(0, 119, 255, 0.9)';
        break;
    }
  }, 100);
}

function updateLineColors() {
  switch (state) {
    case 1:
      line_1.style.background = 'rgba(209, 210, 211, 0.9)';
      line_2.style.background = 'rgba(209, 210, 211, 0.9)';
      line_3.style.background = 'rgba(209, 210, 211, 0.9)';
      break;
    case 2:
      line_1.style.background = 'rgba(0, 119, 255, 0.9)';
      line_2.style.background = 'rgba(209, 210, 211, 0.9)';
      line_3.style.background = 'rgba(209, 210, 211, 0.9)';
      break;
    case 3:
      line_1.style.background = 'rgba(0, 119, 255, 0.9)';
      line_2.style.background = 'rgba(0, 119, 255, 0.9)';
      line_3.style.background = 'rgba(209, 210, 211, 0.9)';
      break;
    case 4:
      line_1.style.background = 'rgba(0, 119, 255, 0.9)';
      line_2.style.background = 'rgba(0, 119, 255, 0.9)';
      line_3.style.background = 'rgba(0, 119, 255, 0.9)';
      break;
  }
}