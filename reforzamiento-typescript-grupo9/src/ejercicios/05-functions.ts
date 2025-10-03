function calcularPromedio(numeros: number[]): number {
  let suma: number = 0;
  for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
  }
  return suma / numeros.length;
}

export function ejercicio05() {
  const calificaciones: number[] = [4.0, 3.5, 4.8, 5.0, 3.9];
  const promedio: number = calcularPromedio(calificaciones);
  return `Promedio de [${calificaciones.join(", ")}] es: ${promedio.toFixed(2)}`;
}
