// Conceptos Básicos de JAVASCRIPT - CheatSheet ✨

### 0. REFERENCIAS

Compilador Online:
https://playcode.io/

Documentación MDN Web:
https://developer.mozilla.org/es/

### 1. COMENTARIOS
```javascript
// Esto es un comentario de una sola línea

/*
Esto es un
comentario de
varias líneas
*/
```

### 2. VARIABLES Y TIPOS DE DATOS
```javascript
// Declaración de variables
let nombre = "Juan";   // Cadena
let edad = 30;          // Número
let altura = 1.75;      // Número (decimal)
let esEstudiante = true; // Booleano

// Imprimir variables
console.log(nombre, edad, altura, esEstudiante);

// Comprobar tipo de dato
console.log(typeof nombre);   // "string"
console.log(typeof edad);     // "number"
console.log(typeof esEstudiante); // "boolean"
```

### 3. OPERADORES BÁSICOS
```javascript
// Operadores aritméticos
let suma = 5 + 3;             // Suma -> 8
let resta = 5 - 3;            // Resta -> 2
let producto = 5 * 3;         // Multiplicación -> 15
let cociente = 5 / 3;         // División -> 1.6666...
let resto = 5 % 3;            // Módulo -> 2
let potencia = 5 ** 3;        // Potenciación -> 125

// Operadores de comparación
let esMayor = 5 > 3;          // true
let esIgual = 5 === 3;        // false
let noEsIgual = 5 !== 3;      // true

// Operadores lógicos
let esVerdadero = true && false; // false
let esVerdadero = true || false; // true
let esFalso = !true;           // false
```

### 4. CONDICIONALES (`if`, `else if`, `else`)
```javascript
let edad = 20;

// Condicional simple
if (edad >= 18) {
    console.log("Eres un adulto.");
} else {
    console.log("Eres menor de edad.");
}

// Condicional con múltiples casos
let nota = 85;
if (nota >= 90) {
    console.log("Excelente");
} else if (nota >= 80) {
    console.log("Bueno");
} else {
    console.log("Necesita mejorar");
}
```

### 5. BUCLES (`for`, `while`)
```javascript
// Bucle `for` para iterar sobre un arreglo
let frutas = ["manzana", "naranja", "plátano"];
for (let fruta of frutas) {
    console.log(fruta);
}

// Bucle `for` con un rango
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// Bucle `while`
let contador = 0;
while (contador < 5) {
    console.log(contador);
    contador++;
}
```

### 6. FUNCIONES
```javascript
// Definición de una función simple
function saludar(nombre) {
    return `Hola, ${nombre}!`;
}

// Llamada a una función
console.log(saludar("Juan"));

// Función con múltiples parámetros
function sumar(a, b) {
    return a + b;
}

console.log(sumar(5, 3)); // 8
```

### 7. ARREGLOS
```javascript
// Creación de un arreglo
let numeros = [1, 2, 3, 4, 5];

// Acceso a elementos
console.log(numeros[0]);  // Primer elemento -> 1
console.log(numeros[numeros.length - 1]); // Último elemento -> 5

// Modificar un elemento
numeros[0] = 10;

// Métodos de arreglos
numeros.push(6);  // Agregar elemento al final
numeros.splice(numeros.indexOf(3), 1); // Eliminar elemento específico
let ultimo = numeros.pop();  // Eliminar y devolver el último elemento

// Cortar un arreglo
console.log(numeros.slice(1, 4)); // Subarreglo desde índice 1 hasta 3
```

### 8. OBJETOS
```javascript
// Creación de objetos
let persona = { nombre: "Juan", edad: 30, ciudad: "Madrid" };

// Acceso a propiedades
console.log(persona.nombre); // "Juan"

// Modificar una propiedad
persona.edad = 31;

// Agregar una nueva propiedad
persona.trabajo = "Ingeniero";

// Métodos de objetos
console.log(Object.keys(persona));   // Todas las claves
console.log(Object.values(persona)); // Todos los valores
```

### 9. EXCEPCIONES
```javascript
try {
    let resultado = 10 / 0;
    if (!isFinite(resultado)) throw "¡División por cero!";
} catch (error) {
    console.error("Error:", error);
} finally {
    console.log("Este bloque siempre se ejecuta.");
}
```

### 10. FUNCIONES FLECHA
```javascript
// Función flecha para sumar
const sumar = (x, y) => x + y;
console.log(sumar(2, 3)); // 5

// Usar funciones flecha con map
let nums = [1, 2, 3, 4, 5];
let cuadrados = nums.map(x => x ** 2);
console.log(cuadrados);
```

### 11. CLASES Y OBJETOS
```javascript
// Definición de una clase
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        return `Hola, me llamo ${this.nombre} y tengo ${this.edad} años.`;
    }
}

// Crear un objeto
let persona1 = new Persona("Juan", 30);

// Llamar a un método
console.log(persona1.saludar());
```

### 12. MÓDULOS
```javascript
// Exportar una función (en un archivo separado, por ejemplo, matematicas.js)
export function cuadrado(x) {
    return x ** 2;
}

// Importar y usar la función (en otro archivo)
import { cuadrado } from "./matematicas.js";
console.log(cuadrado(4)); // 16
```

### 13. MANEJO DE ARCHIVOS (Node.js)
```javascript
const fs = require("fs");

// Escribir en un archivo
fs.writeFileSync("archivo.txt", "¡Hola, mundo!");

// Leer de un archivo
let contenido = fs.readFileSync("archivo.txt", "utf8");
console.log(contenido);
```
