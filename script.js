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

  { nombre: "Preclínico y Materiales Dentales II", semestre: 4, codigo: "ODON D001", requisitos: "ODON C001" },
  { nombre: "Simulación Clínica Integral I", semestre: 4, codigo: "ODON D002", requisitos: "ODON C001" },
  { nombre: "Cariología y Microbiología Oral", semestre: 4, codigo: "ODON D003", requisitos: "ODON C002, DBIO 1072, DBIO 1076" },
  { nombre: "Fisiología Oral", semestre: 4, codigo: "ODON D004", requisitos: "DBIO 1075, DMOR 0006" },
  { nombre: "Patología General", semestre: 4, codigo: "ODON D005", requisitos: "DBIO 1075" },
  { nombre: "Farmacología I", semestre: 4, codigo: "DBIO 1040", requisitos: "DBIO 1075, DBIO 1076" },
  { nombre: "Electivo de Formación Integral I", semestre: 4, codigo: "ELEFORIN01", requisitos: "FILS 0002" },

  { nombre: "Preclínico y Rehabilitación Oral I", semestre: 5, codigo: "ODON E001", requisitos: "ODON D001, D002, D003" },
  { nombre: "Simulación Clínica Integral II", semestre: 5, codigo: "ODON E002", requisitos: "ODON D001, D002, D003, D004" },
  { nombre: "Inicio a la Clínica Integral I", semestre: 5, codigo: "ODON E003", requisitos: "ODON D001, D002, D003, D004" },
  { nombre: "Imagenología Diagnóstica I", semestre: 5, codigo: "ODON E004", requisitos: "ODON D001, D002, D004" },
  { nombre: "Patología Oral I", semestre: 5, codigo: "ODON E005", requisitos: "ODON D003, D005" },
  { nombre: "Farmacología II", semestre: 5, codigo: "DBIO 1041", requisitos: "DBIO 1040" },
  { nombre: "Estadística", semestre: 5, codigo: "DMAE E003", requisitos: "ODON A002" },
  { nombre: "Bioética", semestre: 5, codigo: "DSPU 0006", requisitos: "ODON D002" },

  { nombre: "Preclínico y Rehabilitación Oral II", semestre: 6, codigo: "ODON F001", requisitos: "ODON E001, E002" },
  { nombre: "Simulación Clínica Integral III", semestre: 6, codigo: "ODON F002", requisitos: "ODON E001, E002" },
  { nombre: "Inicio a la Clínica Integral II", semestre: 6, codigo: "ODON F003", requisitos: "ODON E003" },
  { nombre: "Imagenología Diagnóstica II", semestre: 6, codigo: "ODON F004", requisitos: "ODON E004" },
  { nombre: "Patología Oral II", semestre: 6, codigo: "ODON F005", requisitos: "ODON E005" },
  { nombre: "Introducción a la Clínica", semestre: 6, codigo: "ODON F006", requisitos: "ODON E001, E002" },
  { nombre: "Electivo de Formación Integral II", semestre: 6, codigo: "ELEFORIN02", requisitos: "-" },

  { nombre: "Operatoria y Rehabilitación Oral I", semestre: 7, codigo: "ODON G001", requisitos: "ODON F001-F006" },
  { nombre: "Estomatología I", semestre: 7, codigo: "ODON G002", requisitos: "ODON F001-F006" },
  { nombre: "Clínica Integrada del Adulto I", semestre: 7, codigo: "ODON G003", requisitos: "ODON F001-F006" },
  { nombre: "Clínica Integrada del Niño y Adolescente I", semestre: 7, codigo: "ODON G004", requisitos: "ODON F001-F006" },
  { nombre: "Electivo de Formación Integral III", semestre: 7, codigo: "ELEFORIN03", requisitos: "-" },

  { nombre: "Operatoria y Rehabilitación Oral II", semestre: 8, codigo: "ODON H001", requisitos: "ODON G001" },
  { nombre: "Estomatología II", semestre: 8, codigo: "ODON H002", requisitos: "ODON G002" },
  { nombre: "Clínica Integrada del Adulto II", semestre: 8, codigo: "ODON H003", requisitos: "ODON G001-G003" },
  { nombre: "Clínica Integrada del Niño y Adolescente II", semestre: 8, codigo: "ODON H004", requisitos: "ODON G004" },
  { nombre: "Epidemiología", semestre: 8, codigo: "DSPU 0003", requisitos: "DSPU 0001" },

  { nombre: "Rehabilitación Oral y Protésica I", semestre: 9, codigo: "ODON I001", requisitos: "ODON H001" },
  { nombre: "Estomatología III", semestre: 9, codigo: "ODON I002", requisitos: "ODON H002" },
  { nombre: "Clínica Integrada del Adulto y Gerodontología I", semestre: 9, codigo: "ODON I003", requisitos: "ODON H003" },
  { nombre: "Clínica Integrada del Niño y Adolescente III", semestre: 9, codigo: "ODON I004", requisitos: "ODON H004" },
  { nombre: "Electivo de Formación Integral IV", semestre: 9, codigo: "ELEFORIN04", requisitos: "-" },

  { nombre: "Rehabilitación Oral y Protésica II", semestre: 10, codigo: "ODON J001", requisitos: "ODON I001" },
  { nombre: "Estomatología IV", semestre: 10, codigo: "ODON J002", requisitos: "ODON I002" },
  { nombre: "Clínica Integrada del Adulto y Gerodontología II", semestre: 10, codigo: "ODON J003", requisitos: "ODON I003" },
  { nombre: "Clínica integrada del Niño y Adolescente IV", semestre: 10, codigo: "ODON J004", requisitos: "ODON I004" },
  { nombre: "Taller de Resolución de Casos Clínicos", semestre: 10, codigo: "ODON J005", requisitos: "ODON H003, H004" },
  { nombre: "Metodología de la Investigación", semestre: 10, codigo: "DSPU 0005", requisitos: "DMAE E003" },

  { nombre: "Gestión e Innovación en Odontología", semestre: 11, codigo: "ODON K001", requisitos: "ODON H003" },
  { nombre: "Odontología Forense", semestre: 11, codigo: "ODON K002", requisitos: "ODON H003" },
  { nombre: "Taller de Salud Comunitaria", semestre: 11, codigo: "ODON K003", requisitos: "ODON J001-J005" },
  { nombre: "Taller de Investigación Aplicada", semestre: 11, codigo: "ODON K004", requisitos: "ODON J001-J005" },
  { nombre: "Salud Digital", semestre: 11, codigo: "ENFESD01", requisitos: "ODON H003" },

  { nombre: "Internado Clínico Asistencial", semestre: 12, codigo: "ODON L001", requisitos: "ODON J001-J005, DSPU 0005" }
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
