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
- Literales de objetos
- Arreglos
- Funciones
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