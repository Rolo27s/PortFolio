const btn_1 = document.querySelector('.btn_1');
const btn_2 = document.querySelector('.btn_2');
const btn_3 = document.querySelector('.btn_3');
const btn_4 = document.querySelector('.btn_4');
const btn_5 = document.querySelector('.btn_5');
const btn_6 = document.querySelector('.btn_6');
const audio = document.getElementById('audio');

btn_1.addEventListener('click', () => {
  audio.src = "./sound/applause.wav";
  audio.play();
});

btn_2.addEventListener('click', () => {
  audio.src = "./sound/boo.wav";
  audio.play();
});

btn_3.addEventListener('click', () => {
  audio.src = "./sound/gasp.wav";
  audio.play();
});

btn_4.addEventListener('click', () => {
  audio.src = "./sound/tada.mp3";
  audio.play();
});

btn_5.addEventListener('click', () => {
  audio.src = "./sound/victory.wav";
  audio.play();
});

btn_6.addEventListener('click', () => {
  audio.src = "./sound/wrong.mp3";
  audio.play();
});