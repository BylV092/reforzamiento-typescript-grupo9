
# 📘 Reforzamiento TypeScript + React - Grupo 9

## 👥 Integrantes

-   **Maikoll Fabian Ballesteros Pinilla**\
-   **Breider Yesid Lopez Valero**

------------------------------------------------------------------------

## 📌 Descripción

Este proyecto corresponde al reforzamiento de **TypeScript** en un
entorno **React + Vite**.

Se implementaron **7 ejercicios prácticos** diseñados para consolidar
conceptos clave de TypeScript y su integración con React, enfocados en:

-   Declaración de variables y su alcance.\
-   Uso de **template strings** para generar cadenas dinámicas.\
-   Creación y manipulación de objetos literales.\
-   Manejo de **arreglos** y cálculo de estadísticas.\
-   Definición y reutilización de **funciones**.\
-   Aplicación de **desestructuración** de objetos y arreglos.

Todos los ejercicios se encuentran en `src/ejercicios/` y son
renderizados en la interfaz a través del componente
**`EjerciciosList.tsx`**.

------------------------------------------------------------------------

## 📝 Ejercicios Implementados

### 1️⃣ Variables y Alcance

-   **Objetivo**: Comprender la diferencia entre `const` y `let`.\

-   **Descripción**:\
    Se declara una variable `const` para almacenar el nombre del
    estudiante (inmutable) y una variable `let` para la edad (mutable).
    Posteriormente, se modifica la edad para demostrar la capacidad de
    actualización de `let`.\

-   **Conceptos reforzados**:

    -   Inmutabilidad de `const`.\  
    -   Mutabilidad de `let`.\  
    -   Interpolación de valores en cadenas.\

-   **Ejemplo de salida**:

        Nombre: Juan Pérez, Edad: 21

------------------------------------------------------------------------

### 2️⃣ Cadenas de Plantilla (Template Strings)

-   **Objetivo**: Practicar el uso de template literals para generar
    mensajes dinámicos.\

-   **Descripción**:\
    Se definen variables como `nombre`, `carrera` y `semestre`, y luego
    se combinan dentro de una sola cadena utilizando **interpolación con
    backticks**. Esto permite mayor legibilidad frente a la
    concatenación tradicional.\

-   **Conceptos reforzados**:

    -   Uso de backticks (`` ` ``).\  
    -   Interpolación con `${}`.\  
    -   Plantillas multilinea.\

-   **Ejemplo de salida**:

        Hola, mi nombre es Breider Yesid Lopez Valero, estudio Ingeniería de Sistemas y voy en el semestre 7.

------------------------------------------------------------------------

### 3️⃣ Literales de Objetos

-   **Objetivo**: Construir y manipular objetos literales con
    propiedades y métodos.\

-   **Descripción**:\
    Se define un objeto `estudiante` con propiedades como `nombre`,
    `edad`, `carrera` y `semestre`. Además, se implementa un método
    `descripcion()` que devuelve un texto detallado con la información
    del estudiante.\

-   **Conceptos reforzados**:

    -   Sintaxis de objetos literales en TypeScript.\  
    -   Métodos dentro de objetos.\  
    -   Uso de `this` para acceder a propiedades internas.\

-   **Ejemplo de salida**:

        Soy Maikoll Fabian Ballesteros Pinilla, tengo 22 años, estudio Ingeniería de Software y estoy en el semestre 8.

------------------------------------------------------------------------

### 4️⃣ Arreglos y Bucles

-   **Objetivo**: Practicar el manejo de arreglos y el uso de bucles
    para recorrerlos.\

-   **Descripción**:\
    Se crea un arreglo con varias calificaciones numéricas. Con un bucle
    `for`, se suman todos los elementos y posteriormente se calcula el
    promedio. Finalmente, se muestra la lista de calificaciones junto
    con el resultado del promedio.\

-   **Conceptos reforzados**:

    -   Declaración de arreglos en TypeScript.\  
    -   Recorridos con bucles (`for`).\  
    -   Operaciones matemáticas con colecciones.\

-   **Ejemplo de salida**:

        Calificaciones: 4.5, 3.8, 5.0, 4.2, 3.9 | Promedio: 4.28

------------------------------------------------------------------------

### 5️⃣ Funciones

-   **Objetivo**: Definir funciones reutilizables y tipadas en
    TypeScript.\

-   **Descripción**:\
    Se declara una función `calcularPromedio` que recibe un arreglo de
    números como parámetro y devuelve el promedio de sus valores.
    Posteriormente, se reutiliza esta función con distintos conjuntos de
    calificaciones.\

-   **Conceptos reforzados**:

    -   Definición de funciones en TypeScript.\  
    -   Tipado de parámetros y valores de retorno.\  
    -   Reutilización de lógica en distintos contextos.\

-   **Ejemplo de salida**:

        Promedio de [4.0, 3.5, 4.8, 5.0, 3.9] es: 4.24

------------------------------------------------------------------------

### 6️⃣ Desestructuración de Objetos

-   **Objetivo**: Utilizar desestructuración para extraer propiedades
    específicas de un objeto.\

-   **Descripción**:\
    Se declara un objeto `estudiante` con varias propiedades (nombre,
    carrera, edad, semestre). Mediante desestructuración, se extraen
    únicamente `nombre` y `carrera` para usarlos en un mensaje, evitando
    acceder manualmente con `obj.propiedad`.\

-   **Conceptos reforzados**:

    -   Sintaxis de desestructuración en TypeScript.\  
    -   Selección de propiedades específicas.\  
    -   Simplificación de código.\

-   **Ejemplo de salida**:

        Nombre: Laura Martínez, Carrera: Ingeniería de Sistemas

------------------------------------------------------------------------

### 7️⃣ Desestructuración de Arreglos

-   **Objetivo**: Aplicar desestructuración para obtener elementos
    individuales de un arreglo.\

-   **Descripción**:\
    Se declara un arreglo de calificaciones y, mediante
    desestructuración, se asignan los dos primeros valores a variables
    independientes (`primera`, `segunda`). Esto evita el uso de índices
    manuales (`arr[0]`, `arr[1]`).\

-   **Conceptos reforzados**:

    -   Desestructuración de arrays.\  
    -   Extracción directa de posiciones específicas.\  
    -   Escritura más limpia y legible.\

-   **Ejemplo de salida**:

        Primera calificación: 4.5, Segunda calificación: 3.8

------------------------------------------------------------------------

## 📂 Estructura del Proyecto

    src/
    │── componentes/
    │   └── EjerciciosList.tsx
    │
    │── ejercicios/
    │   ├── 01-variables.ts
    │   ├── 02-template-string.ts
    │   ├── 03-object-literal.ts
    │   ├── 04-arrays.ts
    │   ├── 05-functions.ts
    │   ├── 06-obj-destructuring.ts
    │   └── 07-array-destructuring.ts
    │
    │── App.tsx
    │── main.tsx
    │── index.css

------------------------------------------------------------------------

## 🚀 Instalación y Ejecución

1.  **Clonar el repositorio**

    ```bash
    git clone https://github.com/usuario/reforzamiento-typescript-grupo9.git
    ```

2.  **Ingresar al directorio del proyecto**

    ```bash
    cd reforzamiento-typescript-grupo9
    ```

3.  **Instalar dependencias**

    ```bash
    npm install
    ```

4.  **Ejecutar en modo desarrollo**

    ```bash
    npm run dev
    ```

5.  **Abrir en el navegador**\
    Copia y pega en tu navegador la URL que aparezca en la terminal (por
    defecto: `http://localhost:5173`).

------------------------------------------------------------------------

## 🛠️ Comandos en caso de error

En caso de errores relacionados con dependencias o tipados, puedes ejecutar los siguientes comandos:

```bash
npm install --save-dev vite
````

```bash
npm install react react-dom
```

```bash
npm install -D @types/react @types/react-dom
```

```

