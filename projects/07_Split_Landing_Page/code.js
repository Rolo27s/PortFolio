const ps5 = document.querySelector('.container div.ps5');
const xbox = document.querySelector('.container div.xbox');

const containerPs5 = document.querySelector('.ps5');
const containerXbox = document.querySelector('.xbox');

containerPs5.addEventListener('mouseover', () => {
  ps5.classList.add('max');
  xbox.classList.add('min');
});

containerPs5.addEventListener('mouseout', () => {
  ps5.classList.remove('max');
  xbox.classList.remove('min');
});

containerXbox.addEventListener('mouseover', () => {
  xbox.classList.add('max');
  ps5.classList.add('min');
});

containerXbox.addEventListener('mouseout', () => {
  xbox.classList.remove('max');
  ps5.classList.remove('min');
});
