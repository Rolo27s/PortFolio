// Creo un mapa interno con la información de las preguntas y las respuestas
const FAQs = new Map();
FAQs.set("Why shouldn't we trust atoms?", "They make up everything");
FAQs.set("What do you call someone with no body and no nose?", "Nobody knows");
FAQs.set("What's the object-oriented way to become wealthy?", "Inheritance");
FAQs.set("How many tickles does it take to tickle an octopus?", "Ten-tickles!");
FAQs.set("What is: 1 + 1?", "Depends on who are you asking");

console.log(FAQs);

// Selección de elementos DOM
const faqsContainer = document.querySelector('.faqs-container');
const qButtons = document.querySelectorAll('.q-btn');

// Las preguntas y las respuestas están incluidas en el map 'FAQs'

  /* Cuando se pulsa en el botón:
    - Se cambia el bc-image de '.q-btn' a esta: url(./assets/cross.png)
    - Se agrega al div principal con clase 'faqs', la clase 'faqs-bg'. 
    - Se agrega el span con clase 'a' y el contenido de la respuesta.

    Debe ser tipo toggle y dejar que vuelva todo como antes según se pulse.

    La estructura del componente será de esta forma:
    <div class="faqs faqs-bg">
      <div class="q-container">
        <p class="q">Why shouldn't we trust atoms?</p>
        <button class="q-btn"></button>
      </div>
      <span class="a">They make up everything</span>
    </div>
  */

// Forma rudimentaria verbosa
  // Crear elementos HTML
const createFAQ = function (question, answer) {
  const faqContainer = document.createElement('div');
  faqContainer.classList.add('faqs');
  const qContainer = document.createElement('div');
  qContainer.classList.add('q-container');
  const questionParagraph = document.createElement('p');
  questionParagraph.classList.add('q');
  questionParagraph.textContent = question;
  const answerSpan = document.createElement('span');
  answerSpan.classList.add('a');
  answerSpan.textContent = answer;
  const qButton = document.createElement('button');
  qButton.classList.add('q-btn');
  qButton.addEventListener('click', () => {
    // Cambiar el background-image del botón al hacer clic
    qButton.style.backgroundImage = 'url(./assets/cross.png)';
    // Agregar la clase 'faqs-bg' al contenedor principal
    faqContainer.classList.add('faqs-bg');
    // Agregar la respuesta si aún no está en el DOM
    if (!faqContainer.contains(answerSpan)) {
      faqContainer.appendChild(answerSpan);
    } else {
      // Si ya está en el DOM, eliminar la respuesta y restaurar el fondo del botón
      qButton.style.backgroundImage = 'url(./assets/arrow.png)';
      faqContainer.removeChild(answerSpan);
      // Eliminar la clase 'faqs-bg' si no hay respuestas visibles
      if (faqContainer.contains(qContainer) && !faqContainer.contains(answerSpan)) {
        faqContainer.classList.remove('faqs-bg');
      }
    }
  });

  // Agregar elementos al DOM
  qContainer.appendChild(questionParagraph);
  qContainer.appendChild(qButton);
  faqContainer.appendChild(qContainer);
  faqsContainer.appendChild(faqContainer);
};

// Iterar a través del mapa de FAQs y crear preguntas frecuentes
FAQs.forEach((answer, question) => {
  createFAQ(question, answer);
});
