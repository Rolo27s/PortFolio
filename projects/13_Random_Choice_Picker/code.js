const textGenerator = document.querySelector('.text-generator');
const textArea = document.getElementById('textarea');
let concurso;

// Prevent default to Enter
textArea.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
  }
});

// Evento para crear el array de elementos
textArea.addEventListener('keyup', (e) => {
  // Divido el string en array by comma separator
  const textSplitted = textArea.value.split(",");
  // Trim spaces from each element
  const arrayInfo = textSplitted.map(item => item.trim());

  textGenerator.innerHTML = '';

  // Create a paragraph for each element in arrayInfo
  arrayInfo.forEach(element => {
    const newP = document.createElement('p');
    newP.textContent = element;

    textGenerator.appendChild(newP);
  });

  const paragraph = document.querySelectorAll('p');

  if (e.key === 'Enter') {
    if (concurso) {
      clearInterval(concurso);
    }

    concurso = setInterval(() => {
      let pRandom = Math.floor(Math.random() * arrayInfo.length);

      // Clear the 'active' class from all paragraphs
      paragraph.forEach(p => p.classList.remove('active'));

      // Add the 'active' class to the randomly selected paragraph
      paragraph[pRandom].classList.add('active');

    }, 300);

    // Stop the interval after 5 seconds
    setTimeout(() => {
      // Clear the 'active' class from all paragraphs
      paragraph.forEach(p => p.classList.remove('active'));
      clearInterval(concurso);
      // Finally, leave one random paragraph selected
      let pRandom = Math.floor(Math.random() * arrayInfo.length);
      paragraph[pRandom].classList.add('active');
    }, 5000);
  }
});
