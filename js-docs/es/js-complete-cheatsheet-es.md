# JavaScript Cheatsheet

## Indice del Cheatsheet
1. Introducción [Link](#1-introducción)
2. Variables y Tipos de Datos [Link](#2-variables-y-tipos-de-datos)
3. Operadores ([Link](#3-operadores))
4. Estructuras de Control [Link](#4-estructuras-de-control)
5. Funciones [Link](#5-funciones)
6. Objetos y Arrays [Link](#6-objetos-y-arrays)
7. Programación Orientada a Objetos (POO) [Link](#7-programación-orientada-a-objetos)
8. Manipulación del DOM [Link](#8-manipulación-del-dom)
9. Promesas y Async/Await [Link](#9-promesas-y-asyncawait)
10. ES6+ (Novedades y características avanzadas) [Link](#10-es6-características-avanzadas)
11. Módulos y Herramientas [Link](#11-módulos)
12. Buenas Prácticas y Patrones [Link](#12-buenas-prácticas)

## Referencias
### Documentacion de JavaScript en Español:
https://developer.mozilla.org/es/docs/Web/JavaScript

## 1. Introducción
JavaScript es un lenguaje de programación ligero, interpretado y orientado a objetos, ampliamente utilizado para el desarrollo web.

[Ir a Inicio](#indice-del-cheatsheet)

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

//Compuestos
let objeto = { clave: "valor" }; // Objeto
let array = [item1, item2, item3, item4] // Array
let function () {} // Funcion
let Class {} // Clase
```

[Ir a Inicio](#indice-del-cheatsheet)

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

[Ir a Inicio](#indice-del-cheatsheet)

# 4. Estructuras de Control

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

[Ir a Inicio](#indice-del-cheatsheet)

## 5. Funciones

### Funcion Declarada simple e Invocacion
```javascript
// Funcion Declarada
function nameFunc() {
    console.log("Uno");
    console.log("Dos");
    console.log("Tres");
}

//Invocacion
nameFunc();
```

### Funcion Declarada con parametros y valor de retorno
```javascript
// Funcion Declarada con Parametros 
function sumar(a, b) {
    return a + b; // Valor de retorno
};

// Invocacion con Console.log() 
console.log(sumar(2, 3));
```

### Funcion Declarada con Parámetros por Defecto
```javascript
// Funcion Declarada con Parametros por Defecto
function saludo(nombre = "Invitado") {
    console.log(`Hola, ${nombre}`);
};

saludo();  // $> Hola Invitado
```
> Nota: Las **funciones declaradas** pueden ser invocadas antes de su declaracion, es decir, su ambito es global.


### Funcion Expresada / Anonima
```javascript
// Funcion Expresada en una constante
const nameFunc = function () {
    console.log("Esto se imprime");
};

nameFunc();
```
> Nota: Las **funciones expresadas** no pueden ser invocadas antes de su declaracion.

### Funciones Flecha
```javascript
const nameFunc = () => {
    console.log("Esto se imprime");
};

nameFunc();
```

### Funciones Flecha con Parametros
```javascript
const sumar = (a, b) => a + b;
console.log(sumar(2, 3));
```
> Nota: Las **funciones flechas** no pueden ser invocadas antes de su declaracion.

[Ir a Inicio](#indice-del-cheatsheet)

## 6. Objetos y Arrays

### Arrays
```javascript
// Declaracion de Array
let frutas = ["Manzana", "Banana", "Cereza"];

console.log(frutas);

/*
> Indexacion de valores en Array :
[0] = "Manzana"
[1] = "Banana"
[2] = "Cereza"
*/

// Acceder al valor por indice
console.log(frutas[0]);
console.log(frutas[2]);

// Propiedad
console.log(frutas.length);

// Metodos
frutas.push("Durazno");   // Añadir elemento al final
frutas.pop();            // Eliminar último elemento
// Usaremos Console.log() para mostrar los resultados de muchos Metodos
console.log(elements.join()); // Une todos los elementos
console.log(frutas.includes("Banana")); // Buscar si un elemento esta incluido en el array
```

Los arreglos se pueden declarar con `let` o `const` indistintamente.

### Arrays Anidados (2D, 3D, etc)
```javascript
// Array 2D
const array2d = [3, 5, 7, 9, [12, 24, 31]];
// Acceder al valor por indice anidado 2D
console.log(array2d[4][1]); // Muestra en consola: 24

// Array 3D
const array3d = [3, 5, 7, 9, [12, 24, 31, [105, 224, 237]]];
// Acceder al valor por indice anidado 3D
console.log(array2d[4][3][2]); // Muestra en consola: 237
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

[Ir a Inicio](#indice-del-cheatsheet)

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

[Ir a Inicio](#indice-del-cheatsheet)

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

[Ir a Inicio](#indice-del-cheatsheet)

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

[Ir a Inicio](#indice-del-cheatsheet)

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

[Ir a Inicio](#indice-del-cheatsheet)

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

[Ir a Inicio](#indice-del-cheatsheet)



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

[Ir a Inicio](#indice-del-cheatsheet)