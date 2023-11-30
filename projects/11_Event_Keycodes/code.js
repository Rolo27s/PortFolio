const reference = document.getElementById('reference');

// Limpio el div referencia con el mensaje inicial
document.addEventListener('keydown', () => {
  reference.innerHTML = "";
});

document.addEventListener('keydown', (e) => {
  reference.innerHTML = `
    <div id="group-1">
      <h3>event.key</h3>
      <p id=group-1_result>${e.key === ' ' ? 'Space' : e.key}</p>
    </div>
    <div id="group-2">
      <h3>event.keyCode</h3>
      <p id=group-2_result>${e.keyCode}</p>
    </div>
    <div id="group-3">
      <h3>event.code</h3>
      <p id=group-3_result>${e.code}</p>
    </div>
  `;
});

// keyCode obsoleto y no tiene sustitutivo directo que trabaje igual. which también está obsoleto