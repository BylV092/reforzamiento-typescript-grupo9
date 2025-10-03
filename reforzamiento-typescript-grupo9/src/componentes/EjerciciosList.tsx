import { ejercicio01 } from "../ejercicios/01-variables";
import { ejercicio02 } from "../ejercicios/02-template-string";
import { ejercicio03 } from "../ejercicios/03-object-literal";
import { ejercicio04 } from "../ejercicios/04-arrays";
import { ejercicio05 } from "../ejercicios/05-functions";
import { ejercicio06 } from "../ejercicios/06-obj-destructuring";
import { ejercicio07 } from "../ejercicios/07-array-destructuring";

export default function EjerciciosList() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Ejercicios de TypeScript</h1>

      <h2>Ejercicio 01</h2>
      <p>{ejercicio01()}</p>

      <h2>Ejercicio 02</h2>
      <p>{ejercicio02()}</p>

      <h2>Ejercicio 03</h2>
      <p>{ejercicio03()}</p>

      <h2>Ejercicio 04</h2>
      <p>{ejercicio04()}</p>

      <h2>Ejercicio 05</h2>
      <p>{ejercicio05()}</p>

      <h2>Ejercicio 06</h2>
      <p>{ejercicio06()}</p>

      <h2>Ejercicio 07</h2>
      <p>{ejercicio07()}</p>
    </div>
  );
}
