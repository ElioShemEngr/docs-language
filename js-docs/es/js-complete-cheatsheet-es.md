# JavaScript Cheatsheet

## Estructura del Cheatsheet
1. Introducción
2. Variables y Tipos de Datos
3. Operadores
4. Estructuras de Control
5. Funciones
6. Objetos y Arrays
7. Programación Orientada a Objetos (POO)
8. Manipulación del DOM
9. Promesas y Async/Await
10. ES6+ (Novedades y características avanzadas)
11. Módulos y Herramientas
12. Buenas Prácticas y Patrones


## 1. Introducción
JavaScript es un lenguaje de programación ligero, interpretado y orientado a objetos, ampliamente utilizado para el desarrollo web.

## 2. Variables y Tipos de Datos

### Declaración de Variables
```javascript
let nombre = "Juan"; // Variable modificable
const PI = 3.14;      // Constante
var edad = 25;        // Evitar usar var (scope global o función)
```

### Tipos de Datos
```javascript
// Primitivos
let numero = 42;         // Número
let texto = "Hola";     // String
let booleano = true;     // Boolean
let indefinido;          // Undefined
let nulo = null;         // Null
let simbolo = Symbol(); // Symbol

// Objeto
let objeto = { clave: "valor" };
```

## 3. Operadores

### Aritméticos
```javascript
let suma = 5 + 3;        // 8
let resta = 5 - 3;       // 2
let multiplicacion = 5 * 3; // 15
let division = 5 / 3;    // 1.666...
let modulo = 5 % 3;      // 2
```

### Comparación
```javascript
console.log(5 == "5");  // true (igualdad débil)
console.log(5 === "5"); // false (estricta)
console.log(5 != "5");  // false
console.log(5 !== "5"); // true
```

### Lógicos
```javascript
console.log(true && false); // false
console.log(true || false); // true
console.log(!true);         // false
```

### Otros Operadores
```javascript
let incremento = 5;
incremento++; // 6
--incremento; // 5

let concatenado = "Hola" + " Mundo"; // "Hola Mundo"
```

## 4. Estructuras de Control

### Condicionales
```javascript
if (edad >= 18) {
    console.log("Mayor de edad");
} else {
    console.log("Menor de edad");
}

// Ternario
let acceso = edad >= 18 ? "Permitido" : "Denegado";
```

### Bucles
```javascript
// for
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// while
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

// do-while
let j = 0;
do {
    console.log(j);
    j++;
} while (j < 5);

// for...of
let array = [1, 2, 3];
for (let elemento of array) {
    console.log(elemento);
}

// for...in
let objeto = { a: 1, b: 2 };
for (let clave in objeto) {
    console.log(clave, objeto[clave]);
}
```

## 5. Funciones

### Declaración
```javascript
function sumar(a, b) {
    return a + b;
}
console.log(sumar(2, 3));
```

### Funciones Flecha
```javascript
const sumar = (a, b) => a + b;
console.log(sumar(2, 3));
```

### Parámetros por Defecto
```javascript
function saludo(nombre = "Invitado") {
    console.log(`Hola, ${nombre}`);
}
saludo();
```

## 6. Objetos y Arrays

### Arrays
```javascript
let frutas = ["Manzana", "Banana", "Cereza"];
frutas.push("Durazno"); // Añadir
frutas.pop();            // Eliminar último
console.log(frutas);
```

### Objetos
```javascript
let persona = {
    nombre: "Juan",
    edad: 30,
    saludar() {
        console.log("Hola, soy " + this.nombre);
    }
};
persona.saludar();
```

## 7. Programación Orientada a Objetos

### Clases
```javascript
class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }
    hacerSonido() {
        console.log("Sonido genérico");
    }
}

class Perro extends Animal {
    hacerSonido() {
        console.log("Guau");
    }
}

let perro = new Perro("Firulais");
perro.hacerSonido();
```

## 8. Manipulación del DOM

### Selección de Elementos
```javascript
let titulo = document.getElementById("titulo");
let parrafos = document.querySelectorAll("p");
```

### Modificación
```javascript
titulo.textContent = "Nuevo Título";
titulo.style.color = "blue";
```

### Eventos
```javascript
document.querySelector("button").addEventListener("click", () => {
    alert("¡Botón clickeado!");
});
```

## 9. Promesas y Async/Await

### Promesas
```javascript
const promesa = new Promise((resolve, reject) => {
    let exito = true;
    if (exito) resolve("¡Éxito!");
    else reject("Error");
});

promesa
    .then((mensaje) => console.log(mensaje))
    .catch((error) => console.error(error));
```

### Async/Await
```javascript
async function obtenerDatos() {
    try {
        let respuesta = await fetch("https://api.example.com/datos");
        let datos = await respuesta.json();
        console.log(datos);
    } catch (error) {
        console.error(error);
    }
}
obtenerDatos();
```

## 10. ES6+ (Características avanzadas)

### Destructuración
```javascript
let { nombre, edad } = { nombre: "Juan", edad: 30 };
console.log(nombre, edad);
```

### Spread y Rest
```javascript
let numeros = [1, 2, 3];
let copia = [...numeros];

function sumar(...valores) {
    return valores.reduce((a, b) => a + b);
}
```

## 11. Módulos

### Exportar e Importar
```javascript
// archivo.js
export function saludar() {
    console.log("Hola");
}

// main.js
import { saludar } from "./archivo.js";
saludar();
```

## 12. Buenas Prácticas

### Código Limpio
- Usa nombres de variables descriptivos.
- Mantén funciones cortas y específicas.
- Sigue la convención camelCase.

### Linter y Formateadores
- Usa ESLint y Prettier para mantener un estilo consistente.

### Seguridad
- Valida entradas del usuario.
- Usa siempre HTTPS en tus APIs.

### Performance
- Evita bloqueos en el hilo principal.
- Usa técnicas como debounce y throttle.

---