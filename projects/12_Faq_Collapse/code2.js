// SE PRETENDÍA MANTENER LA MISMA FUNCIONALIDAD QUE 'code1.js' PERO USANDO INNERHTML, YA QUE PARECE UNA SOLUCIÓN MAS INTUITIVA. NO SE CONSIGUE EL MISMO RESULTADO. ¿POR QUE?

// Creo un mapa interno con la información de las preguntas y las respuestas
const FAQs = new Map();
FAQs.set("Why shouldn't we trust atoms?", "They make up everything");
FAQs.set("What do you call someone with no body and no nose?", "Nobody knows");
FAQs.set("What's the object-oriented way to become wealthy?", "Inheritance");
FAQs.set("How many tickles does it take to tickle an octopus?", "Ten-tickles!");
FAQs.set("What is: 1 + 1?", "Depends on who are you asking");

console.log(FAQs);

// Función para crear una pregunta frecuente y su respuesta
const createFAQ = function (question, answer) {
  const faqsContainer = document.querySelector('.faqs-container');

  const faqHTML = `
    <div class="faqs">
      <div class="q-container">
        <p class="q">${question}</p>
        <button class="q-btn"></button>
      </div>
      <span class="a">${answer}</span>
    </div>
  `;

  faqsContainer.innerHTML += faqHTML;

  const faqElement = faqsContainer.lastElementChild;
  const qButton = faqElement.querySelector('.q-btn');
  const answerSpan = faqElement.querySelector('.a');

  qButton.addEventListener('click', () => {
    if (faqElement.classList.contains('faqs-bg')) {
      faqElement.classList.remove('faqs-bg');
      qButton.style.backgroundImage = 'url(./assets/arrow.png)';
      answerSpan.style.display = 'none';
    } else {
      faqElement.classList.add('faqs-bg');
      qButton.style.backgroundImage = 'url(./assets/cross.png)';
      answerSpan.style.display = 'block';
    }
  });
};

// Iterar a través del mapa de FAQs y crear preguntas frecuentes
FAQs.forEach((answer, question) => {
  createFAQ(question, answer);
});
