
const cursos = [
  { nombre: "Introducción a la Odontología", semestre: 1, codigo: "ODON A001", requisitos: "Admisión" },
  { nombre: "Matemática y Física Aplicada", semestre: 1, codigo: "ODON A002", requisitos: "Admisión" },
  { nombre: "Biología Celular", semestre: 1, codigo: "DBIO 1070", requisitos: "Admisión" },
  { nombre: "Química General y Orgánica", semestre: 1, codigo: "DQUI 1036", requisitos: "Admisión" },
  { nombre: "Anatomía Humana", semestre: 1, codigo: "DMOR 0003", requisitos: "Admisión" },
  { nombre: "Estrategias para el Aprendizaje", semestre: 1, codigo: "ASIGESAP01", requisitos: "Admisión" },
  { nombre: "Promoción y Prevención en Salud", semestre: 2, codigo: "ODON B001", requisitos: "ODON A001" },
  { nombre: "Biología Molecular y Genética", semestre: 2, codigo: "DBIO 1071", requisitos: "DBIO 1070" },
  { nombre: "Bioquímica General", semestre: 2, codigo: "DBIO 1076", requisitos: "DBIO 1070, DQUI 1036" },
  { nombre: "Anatomía de Cabeza y Cuello", semestre: 2, codigo: "DMOR 0006", requisitos: "DMOR 0003" },
  { nombre: "Histoembriología", semestre: 2, codigo: "DMOR 0011", requisitos: "DBIO 1070" },
  { nombre: "Antropología", semestre: 2, codigo: "FILS 0001", requisitos: "-" },
  { nombre: "Preclínico y Materiales Dentales I", semestre: 3, codigo: "ODON C001", requisitos: "ODON B001, DMOR 0006" },
  { nombre: "Histología Oral", semestre: 3, codigo: "ODON C002", requisitos: "DMOR 0006, DMOR 0011" },
  { nombre: "Microbiología General", semestre: 3, codigo: "DBIO 1072", requisitos: "DBIO 1071" },
  { nombre: "Fisiología Humana", semestre: 3, codigo: "DBIO 1075", requisitos: "DBIO 1071" },
  { nombre: "Salud Poblacional", semestre: 3, codigo: "DSPU 0001", requisitos: "ODON B001" },
  { nombre: "Ética", semestre: 3, codigo: "FILS 0002", requisitos: "FILS 0001" },
  // Se continúa con más cursos en la segunda parte
];

const malla = document.getElementById('malla');
const infoPanel = document.getElementById('info');

// Agrupar cursos por semestre
const cursosPorSemestre = {};
cursos.forEach(curso => {
  if (!cursosPorSemestre[curso.semestre]) {
    cursosPorSemestre[curso.semestre] = [];
  }
  cursosPorSemestre[curso.semestre].push(curso);
});

// Crear columnas por semestre
for (let semestre = 1; semestre <= 12; semestre++) {
  const columna = document.createElement('div');
  columna.className = 'semestre-col';

  const titulo = document.createElement('h3');
  titulo.innerText = `Semestre ${semestre}`;
  columna.appendChild(titulo);

  const cursosSem = cursosPorSemestre[semestre] || [];
  cursosSem.forEach(curso => {
    const celda = document.createElement('div');
    celda.className = 'celda';
    celda.innerText = curso.codigo;
    celda.addEventListener('click', () => {
      document.querySelectorAll('.celda').forEach(c => c.classList.remove('activa'));
      celda.classList.add('activa');
      infoPanel.style.display = 'block';
      infoPanel.innerHTML = `
        <h3>${curso.nombre}</h3>
        <p><strong>Código:</strong> ${curso.codigo}</p>
        <p><strong>Semestre:</strong> ${curso.semestre}</p>
        <p><strong>Requisitos:</strong> ${curso.requisitos}</p>
      `;
    });
    columna.appendChild(celda);
  });

  malla.appendChild(columna);
}
