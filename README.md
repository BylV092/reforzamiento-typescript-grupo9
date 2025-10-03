# Reforzamiento TypeScript + React - Grupo 9

## 👥 Integrantes
- Maikoll Fabian Ballesteros Pinilla  
- Breider Yesid Lopez Valero  

## 📌 Descripción
Este proyecto contiene la solución a un taller de **TypeScript** implementado en un entorno **React + Vite**.  
Se desarrollaron 7 ejercicios prácticos que abarcan conceptos como:
- Variables y alcance
    Objetivo: Mostrar la diferencia entre const y let en TypeScript.
    El código declara una variable const para el nombre del estudiante (no puede cambiar).
    Declara una variable let para la edad (se puede actualizar).
    Modifica la edad y devuelve un mensaje con nombre y edad.
    Ejemplo de salida:
    Nombre: Juan Pérez, Edad: 21
    
- Cadenas de plantilla
    Objetivo: Practicar template strings.

    El código declara variables: nombre, carrera y semestre.
    Usa un template string para crear un mensaje combinando esas variables.

    Ejemplo de salida:
    Hola, mi nombre es Breider Yesid Lopez Valero, estudio Ingeniería de Sistemas y voy en el semestre 7.

- Literales de objetos
    Objetivo: Trabajar con objetos literales y métodos.

    El código define un objeto estudiante con propiedades: nombre, edad, carrera y semestre.
    Agrega un método descripcion() que devuelve un texto con esos datos.

    Ejemplo de salida:
    Soy Maikoll Fabian Ballesteros Pinilla, tengo 22 años, estudio Ingeniería de Software y estoy en el semestre 8.
    
- Arreglos
Objetivo: Manejar arrays y bucles for.

    Qué hace el código:

        Crea un arreglo con calificaciones numéricas.

        Usa un bucle para sumarlas.

        Calcula el promedio y lo devuelve junto con la lista.

    Ejemplo de salida:

        Calificaciones: 4.5, 3.8, 5.0, 4.2, 3.9 | Promedio: 4.28

- Funciones
    Objetivo: Definir y reutilizar una función.

    Qué hace el código:

        Declara una función calcularPromedio que recibe un array de números y devuelve el promedio.

        Llama esa función con un arreglo de calificaciones.

    Ejemplo de salida:

        Promedio de [4.0, 3.5, 4.8, 5.0, 3.9] es: 4.24
        
- Desestructuración de objetos
- Desestructuración de arreglos

Todos los ejercicios se encuentran dentro de la carpeta `src/ejercicios/` y son mostrados en pantalla mediante un componente React llamado `EjerciciosList.tsx`.

---

## 📂 Estructura del Proyecto

src/
│── componentes/
│ └── EjerciciosList.tsx
│
│── ejercicios/
│ ├── 01-variables.ts
│ ├── 02-template-string.ts
│ ├── 03-object-literal.ts
│ ├── 04-arrays.ts
│ ├── 05-functions.ts
│ ├── 06-obj-destructuring.ts
│ └── 07-array-destructuring.ts
│
│── App.tsx
│── main.tsx
│── index.css


---

## 🚀 Instalación y Ejecución
1. Clonar el repositorio:
   ```bash
   git clone https://github.com/usuario/reforzamiento-typescript-grupo9.git

2. Entrar a la carpeta del proyecto:

    cd reforzamiento-typescript-grupo9

3. Instalar dependencias:

    npm install react react-dom
    npm install -D @types/react @types/react-dom

4. Ejecutar en modo desarrollo:

    npm run dev

5. Abrir en el navegador la URL que aparezca en la terminal (ejemplo: http://localhost:5173).