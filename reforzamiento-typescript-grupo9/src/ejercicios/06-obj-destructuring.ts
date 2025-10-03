export function ejercicio06() {
  const estudiante = {
    nombre: "Laura Martínez",
    edad: 21,
    carrera: "Ingeniería de Sistemas",
    semestre: 6
  };

  const { nombre, carrera } = estudiante;
  return `Nombre: ${nombre}, Carrera: ${carrera}`;
}
