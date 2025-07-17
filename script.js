const malla = document.getElementById('malla');

for (let i = 0; i < 36; i++) {
  const celda = document.createElement('div');
  celda.classList.add('celda');
  celda.addEventListener('click', () => {
    celda.classList.toggle('activa');
  });
  malla.appendChild(celda);
}
