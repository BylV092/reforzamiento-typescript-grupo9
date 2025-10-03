export function ejercicio03() {
  const estudiante = {
    nombre: "Maikoll Fabian Ballesteros Pinilla",
    edad: 22,
    carrera: "Ingeniería de Software",
    semestre: 8,
    descripcion(): string {
      return `Soy ${this.nombre}, tengo ${this.edad} años, estudio ${this.carrera} y estoy en el semestre ${this.semestre}.`;
    }
  };

  return estudiante.descripcion();
}
