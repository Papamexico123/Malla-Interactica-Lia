// ===== Datos de la malla =====
const ramos = [
  { codigo: "DBIO 1070", nombre: "Biología Celular", requisitos: [] },
  { codigo: "DBIO 1071", nombre: "Biología Molecular y Genética", requisitos: ["DBIO 1070"] },
  { codigo: "DBIO 1076", nombre: "Bioquímica General", requisitos: ["DBIO 1070", "DQUI 1036"] },
  { codigo: "ODON A001", nombre: "Introducción a la Odontología", requisitos: [] },
  { codigo: "ODON B001", nombre: "Promoción y Prevención en Salud", requisitos: ["ODON A001"] },
  { codigo: "DQUI 1036", nombre: "Química General y Orgánica", requisitos: [] },
  { codigo: "DMOR 0003", nombre: "Anatomía Humana", requisitos: [] },
  { codigo: "ODON A002", nombre: "Matemática y Física Aplicada", requisitos: [] },
  { codigo: "ASIGESAP01", nombre: "Estrategias para el Aprendizaje", requisitos: [] },
  { codigo: "DMOR 0006", nombre: "Anatomía de Cabeza y Cuello", requisitos: ["DMOR 0003"] },
  { codigo: "DMOR 0011", nombre: "Histoembriología", requisitos: ["DBIO 1070"] },
  { codigo: "FILS 0001", nombre: "Antropología", requisitos: [] },
  { codigo: "ODON C001", nombre: "Preclínico y Materiales Dentales I", requisitos: ["ODON B001", "DMOR 0006"] },
  { codigo: "ODON C002", nombre: "Histología Oral", requisitos: ["DMOR 0006", "DMOR 0011"] },
  { codigo: "DBIO 1072", nombre: "Microbiología General", requisitos: ["DBIO 1071"] },
  { codigo: "DBIO 1075", nombre: "Fisiología Humana", requisitos: ["DBIO 1071", "DMOR 0006"] },
  { codigo: "DSPU 0001", nombre: "Salud Poblacional", requisitos: ["ODON B001"] },
  { codigo: "FILS 0002", nombre: "Ética", requisitos: ["FILS 0001"] },
  { codigo: "ODON D001", nombre: "Preclínico y Materiales Dentales II", requisitos: ["ODON C001"] },
  { codigo: "ODON D002", nombre: "Simulación Clínica Integral I", requisitos: ["ODON C001"] },
  { codigo: "ODON D003", nombre: "Cariología y Microbiología Oral", requisitos: ["ODON C002", "DBIO 1072", "DBIO 1076"] },
  { codigo: "ODON D004", nombre: "Fisiología Oral", requisitos: ["DBIO 1075", "DMOR 0006"] },
  { codigo: "ODON D005", nombre: "Patología General", requisitos: ["DBIO 1075"] },
  { codigo: "DBIO 1040", nombre: "Farmacología I", requisitos: ["DBIO 1075", "DBIO 1076"] },
  { codigo: "ELEFORIN01", nombre: "Electivo de Formación Integral I", requisitos: ["FILS 0002"] },
  { codigo: "ODON E001", nombre: "Preclínico y Rehabilitación Oral I", requisitos: ["ODON D001", "ODON D002", "ODON D003"] },
  { codigo: "ODON E002", nombre: "Simulación Clínica Integral II", requisitos: ["ODON D001", "ODON D002", "ODON D003", "ODON D004"] },
  { codigo: "ODON E003", nombre: "Inicio a la Clínica Integral I", requisitos: ["ODON D001", "ODON D002", "ODON D003", "ODON D004"] },
  { codigo: "ODON E004", nombre: "Imagenología Diagnóstica I", requisitos: ["ODON D001", "ODON D002", "ODON D004"] },
  { codigo: "ODON E005", nombre: "Patología Oral I", requisitos: ["ODON D003", "ODON D005"] },
  { codigo: "DBIO 1041", nombre: "Farmacología II", requisitos: ["DBIO 1040"] },
  { codigo: "DMAE E003", nombre: "Estadística", requisitos: ["ODON A002"] },
  { codigo: "DSPU 0006", nombre: "Bioética", requisitos: ["ODON D002"] },
  { codigo: "ODON F001", nombre: "Preclínico y Rehabilitación Oral II", requisitos: ["ODON E001", "ODON E002"] },
  { codigo: "ODON F002", nombre: "Simulación Clínica Integral III", requisitos: ["ODON E001", "ODON E002"] },
  { codigo: "ODON F003", nombre: "Inicio a la Clínica Integral II", requisitos: ["ODON E003"] },
  { codigo: "ODON F004", nombre: "Imagenología Diagnóstica II", requisitos: ["ODON E004"] },
  { codigo: "ODON F005", nombre: "Patología Oral II", requisitos: ["ODON E005"] },
  { codigo: "ODON F006", nombre: "Introducción a la Clínica", requisitos: ["ODON E001", "ODON E002"] },
  { codigo: "ELEFORIN02", nombre: "Electivo de Formación Integral II", requisitos: [] },
  { codigo: "ODON G001", nombre: "Operatoria y Rehabilitación Oral I", requisitos: ["DBIO 1041", "ODON F001", "ODON F002", "ODON F003", "ODON F004", "ODON F005", "ODON F006"] },
  { codigo: "ODON G002", nombre: "Estomatología I", requisitos: ["DBIO 1041", "ODON F001", "ODON F002", "ODON F003", "ODON F004", "ODON F005", "ODON F006"] },
  { codigo: "ODON G003", nombre: "Clínica Integrada del Adulto I", requisitos: ["DBIO 1041", "ODON F001", "ODON F002", "ODON F003", "ODON F004", "ODON F005", "ODON F006"] },
  { codigo: "ODON G004", nombre: "Clínica Integrada del Niño y Adolescente I", requisitos: ["DBIO 1041", "ODON F001", "ODON F002", "ODON F003", "ODON F004", "ODON F005", "ODON F006"] },
  { codigo: "ELEFORIN03", nombre: "Electivo de Formación Integral III", requisitos: [] },

  { codigo: "ODON H001", nombre: "Operatoria y Rehabilitación Oral II", requisitos: ["ODON G001"] },
  { codigo: "ODON H002", nombre: "Estomatología II", requisitos: ["ODON G002"] },
  { codigo: "ODON H003", nombre: "Clínica Integrada del Adulto II", requisitos: ["ODON G001", "ODON G002", "ODON G003"] },
  { codigo: "ODON H004", nombre: "Clínica Integrada del Niño y Adolescente II", requisitos: ["ODON G004"] },
  { codigo: "DSPU 0003", nombre: "Epidemiología", requisitos: ["DSPU 0001"] },

  { codigo: "ODON I001", nombre: "Rehabilitación Oral y Protésica I", requisitos: ["ODON H001"] },
  { codigo: "ODON I002", nombre: "Estomatología III", requisitos: ["ODON H002"] },
  { codigo: "ODON I003", nombre: "Clínica Integrada del Adulto y Gerodontología I", requisitos: ["ODON H001", "ODON H002", "ODON H003"] },
  { codigo: "ODON I004", nombre: "Clínica Integrada del Niño y Adolescente III", requisitos: ["ODON H004"] },
  { codigo: "ELEFORIN04", nombre: "Electivo de Formación Integral IV", requisitos: [] },

  { codigo: "ODON J001", nombre: "Rehabilitación Oral y Protésica II", requisitos: ["ODON I001"] },
  { codigo: "ODON J002", nombre: "Estomatología IV", requisitos: ["ODON I002"] },
  { codigo: "ODON J003", nombre: "Clínica Integrada del Adulto y Gerodontología II", requisitos: ["ODON I001", "ODON I002", "ODON I003"] },
  { codigo: "ODON J004", nombre: "Clínica Integrada del Niño y Adolescente IV", requisitos: ["ODON I004"] },
  { codigo: "ODON J005", nombre: "Taller de Resolución de Casos Clínicos", requisitos: ["ODON H003", "ODON H004"] },
  { codigo: "DSPU 0005", nombre: "Metodología de la Investigación", requisitos: ["DMAE E003"] },

  { codigo: "ODON K001", nombre: "Gestión e Innovación en Odontología", requisitos: ["ODON H003"] },
  { codigo: "ODON K002", nombre: "Odontología Forense", requisitos: ["ODON H003"] },
  { codigo: "ODON K003", nombre: "Taller de Salud Comunitaria", requisitos: ["ODON J001", "ODON J002", "ODON J003", "ODON J004", "ODON J005", "DSPU 0005"] },
  { codigo: "ODON K004", nombre: "Taller de Investigación Aplicada", requisitos: ["ODON J001", "ODON J002", "ODON J003", "ODON J004", "ODON J005", "DSPU 0005"] },
  { codigo: "ENFESD01", nombre: "Salud Digital", requisitos: ["ODON H003"] },

  { codigo: "ODON L001", nombre: "Internado Clínico Asistencial", requisitos: ["ODON J001", "ODON J002", "ODON J003", "ODON J004", "ODON J005", "DSPU 0005"] }
];


// ===== Lógica de interacción =====
const estadoRamos = {};
const contenedor = document.getElementById('malla');

function crearRamo(ramo) {
  const div = document.createElement('div');
  div.className = 'ramo bloqueado';
  div.id = ramo.codigo;
  div.innerText = `${ramo.codigo}\n${ramo.nombre}`;
  contenedor.appendChild(div);

  estadoRamos[ramo.codigo] = {
    aprobado: false,
    elemento: div,
    requisitos: ramo.requisitos
  };

  if (ramo.requisitos.length === 0) {
    desbloquear(ramo.codigo);
  }

  div.addEventListener('click', () => {
    if (!div.classList.contains('bloqueado')) {
      aprobarRamo(ramo.codigo);
    }
  });
}

function desbloquear(codigo) {
  const ramo = estadoRamos[codigo];
  if (ramo) {
    ramo.elemento.classList.remove('bloqueado');
  }
}

function aprobarRamo(codigo) {
  const ramo = estadoRamos[codigo];
  if (!ramo || ramo.aprobado) return;

  ramo.aprobado = true;
  ramo.elemento.classList.add('aprobado');

  // Desbloquear dependientes
  for (const clave in estadoRamos) {
    const dependiente = estadoRamos[clave];
    if (
      !dependiente.aprobado &&
      dependiente.requisitos.every(req => estadoRamos[req]?.aprobado)
    ) {
      desbloquear(clave);
    }
  }
}

// Crear malla
ramos.forEach(crearRamo);
