const chistes = {
  0: ["—A mí me gustaría vivir en una isla desierta.", "—A mí también.", "—¡Joder! ¡Ya empezamos a llenarla!"],
  1: ["—Mamá, en el cole me llaman despistado.", "—Niño, ¡que esta no es tu casa!"], 
  2: ["—Pues entre pitos y flautas me he gastado 10.000 euros.", "—¿Y eso?", "—Pues ya ves, cuatro mil en pitos y seis mil en flautas."],
  3: ["—Cariño, creo que estás obsesionado con el fútbol y me haces falta.", "—¡¿Qué falta?! ¡¿Qué falta?! ¡¡Si no te he tocado!!"],
  4: ["—Hola, soy paraguayo y quiero pedirle la mano de su hija para casarme con ella.", "—¿Para qué?", "—Paraguayo"],
  5: ["Dos tontos en un tren:", "—¿Ves qué rápido pasan los postes?", "—Sí, en el viaje de vuelta volvemos en poste."],
  6: ["—Soy celíaca.", "—Encantado, yo Antoniaco."],
  7: ["¿Sabes cuánta leche da una vaca en su vida?", "Pues la misma que en bajada."],
  8: ["¿Cómo queda un mago después de comer? Magordito."],
  9: ["¿De dónde vienen los hámster?", "De Hamsterdam."]
}

const btn = document.querySelector('.otroChiste');
const chiste = document.querySelector('.dynamicPhrase');

let key = 0;
const contarChiste = function() {
  chiste.innerHTML = chistes[key].join('<br>');
  key++;
  if (key > 9) key = 0;
}

btn.addEventListener('click', contarChiste);