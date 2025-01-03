# JavaScript Cheatsheet

## Indice del Cheatsheet
1. Introducción [Link](#1-introducción)
2. Variables y Tipos de Datos [Link](#2-variables-y-tipos-de-datos)
3. Operadores [Link](#3-operadores)
4. Estructuras de Control [Link](#4-estructuras-de-control)
5. Funciones [Link](#5-funciones)
6. Objetos y Arrays [Link](#6-objetos-y-arrays)
7. Manejo de Errores [Link](#7-manejo-de-errores)
8. Prototipos [Link](#8-prototipos)
9. Programación Orientada a Objetos (POO) [Link](#9-programación-orientada-a-objetos)
10. Manipulación del DOM [Link](#10-manipulación-del-dom)
11. Promesas y Async/Await [Link](#11-promesas-y-asyncawait)
12. ES6+ (Novedades y características avanzadas) [Link](#12-es6-características-avanzadas)
13. Módulos y Herramientas [Link](#13-módulos)
14. Buenas Prácticas y Patrones [Link](#14-buenas-prácticas)

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
let suma = 5 + 3;           // 8
let resta = 5 - 3;          // 2
let multiplicacion = 5 * 3; // 15
let division = 5 / 3;       // 1.666...
let modulo = 5 % 3;         // 2
```

### Comparación
```javascript
console.log(5 == "5");  // true (igualdad débil)
console.log(5 === "5"); // false (estricta) (Uso recomendado)
console.log(5 != "5");  // false
console.log(5 !== "5"); // true (Uso recomendado)
```

### Lógicos
```javascript
console.log(true && false); // false
console.log(true || false); // true
console.log(!true);         // false
```

### Operadores Incremento y Decremento
```javascript
let incremento = 5;

// Incrementos y Decrementos
incremento += 3; // 8
incremento -= 2;
incremento *= 2;
incremento /= 2;

// Incrementos y Decrementos Unitarios
incremento++; // 6 (Uso recomendado)
--incremento; // 5

```

### Operador Concatenacion
``` javascript
let concatenado = "Hola" + " Mundo"; // "Hola Mundo"
```

[Ir a Inicio](#indice-del-cheatsheet)

# 4. Estructuras de Control

### Condicionales
> Usando `if` 
```javascript
if (edad = 18) {
    console.log("Tiene 18 años");
}
```

> Usando `if` y `else`
```javascript
if (edad >= 18) {
    console.log("Mayor de edad");
} else {
    console.log("Menor de edad");
}
```

> Usando `if`, `else if` y `else`
```javascript
if (edad >=18) {
    console.log("Eres mayor de edad");
} else if (edad >= 15) {
    console.log("Eres adolescente");
} else {
    console.log("Eres niño");
}
```

### Otras Condicionales
```javascript
// Operador Ternario
//Variable = Condicion  ?    true     :     false   
let acceso = edad >= 18 ? "Permitido" : "Denegado";
console.log(acceso);

// Switch
switch (edad) { 
    case 17:
        console.log("Tienes 17 años");
        break;
    case 18:
        console.log("Tienes 18 años");
        break;
    case 19:
        console.log("Tienes 19 años");
        break;
    default:
        console.log("Tienes otra edad");
        break;
}
```


### Bucles(Loops)
```javascript
// for
for (let i = 0; i < 5; i++) {
    console.log(i); // Devuelve : 1, 2, 3, 4, 5
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

// for...of (para Arrays)
let array = [1, 2, 3];
for (let elemento of array) {
    console.log(elemento);
}

// for...of (para otros iterables)
let saludo = "Hola Mundo";
for (let elemento of saludo) {
    console.log(elemento);
}

// for...in (solo para Objects)
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
// Ejemplo 01
const sumar = (a, b) => a + b;
console.log(sumar(2, 3));

// Ejemplo 02
const numeros = [1,2,3,4,5];
numeros.forEach((item, index) => console.log(`Indice ${index}: ${item}`)); 
```
> Nota: Las **funciones flechas** no pueden ser invocadas antes de su declaracion.

[Ir a Inicio](#indice-del-cheatsheet)

## 6. Objetos y Arrays

### Arrays
```javascript
// Declaracion de Array
const frutas = ["Manzana", "Banana", "Cereza"];

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

// Ejemplo de Otros metodos de los Arrays
const numeros = [1,2,3,4,5];

// El método forEach() ejecuta la función indicada una vez por cada elemento del array.
numeros.forEach((item, index) => console.log(`Indice ${index}: ${item}`)); 

// El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.
const numerosDoble = numeros.map(n => n * 2);
console.log(numerosDoble);

// El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.
const numerosPares = numeros.filter(n => n % 2 == 0);
console.log(numerosPares);

// El método reduce() aplica una función a un acumulador y a cada valor de un array (de izquierda a derecha) para reducirlo a un único valor.
const numerosReduce = numeros.reduce((a,b) => a + b);
console.log(numerosReduce);

const numerosReduce2 = numeros.reduce((a,b) => a + b, 100);
console.log(numerosReduce2);

// El método reduceRight() aplica una función a un acumulador y a cada valor de un array (de derecha a izquierda) para reducirlo a un único valor.
const numerosReduce3 = numeros.reduceRight((a,b) => a + b);
console.log(numerosReduce3);

const numerosReduce4 = numeros.reduceRight((a,b) => a + b, 100);
console.log(numerosReduce4);

// El método find() devuelve el primer elemento del array que cumple con la función de prueba proporcionada. En caso contrario devuelve undefined.
const numerosFind = numeros.find(n => n > 3);
console.log(numerosFind);

// El método findIndex() devuelve el índice del primer elemento de un array que cumpla con la función de prueba proporcionada. En caso contrario devuelve -1.
const numerosFindIndex = numeros.findIndex(n => n > 3);
console.log(numerosFindIndex);

// El método some() comprueba si al menos un elemento del array cumple con la condición implementada por la función proporcionada. Devuelve true si se cumple la condición, en caso contrario false.
const numerosSome = numeros.some(n => n > 3);
console.log(numerosSome);

// El método every() de las instancias de Array prueba si todos los elementos del arreglo pasan la prueba implementada por la función proporcionada. Devuelve un valor booleano.
const numerosEvery = numeros.every(n => n > 3);
console.log(numerosEvery);

// El método includes() determina si un array incluye un determinado elemento, devuelve true o false según corresponda.
const numerosIncludes = numeros.includes(3);
console.log(numerosIncludes);

// El método indexOf() devuelve el primer índice en el que se puede encontrar un elemento dado en el array, ó -1 si el elemento no esta presente.
const numerosIndexOf = numeros.indexOf(3);
console.log(numerosIndexOf);

// El método lastIndexOf() devuelve el último índice en el que se puede encontrar un elemento dado en el array, ó -1 si el elemento no esta presente.
const numerosLastIndexOf = numeros.lastIndexOf(3);
console.log(numerosLastIndexOf);

// El método join() une todos los elementos de una matriz (o un objeto similar a una matriz) en una cadena y devuelve esta cadena.
const numerosJoin = numeros.join(" / ");
console.log(numerosJoin);

// El método reverse() invierte el orden de los elementos de un array in place. El primer elemento pasa a ser el último y el último pasa a ser el primero.
const numerosReverse = numeros.reverse();
console.log(numerosReverse);

// El método sort() ordena los elementos de un arreglo (array) localmente y devuelve el arreglo ordenado. La ordenación no es necesariamente estable. Por defecto, el array se ordena en orden ascendente.
const numerosSort = numeros.sort();
console.log(numerosSort);

// El método slice() devuelve una copia de parte de un array a partir de un subarray determinado.
const numerosSlice = numeros.slice(2,4);
console.log(numerosSlice);

// El método splice() cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.
const numerosSplice = numeros.splice(1,3);
console.log(numerosSplice);

// El método concat() se utiliza para unir dos o más arrays. Este método no cambia los arrays existentes, sino que devuelve un nuevo array.
const numerosConcat = numeros.concat([6,7,8,9,10]);
console.log(numerosConcat);

// El método fill() llena todos los elementos del array desde el índice inicial hasta el índice final con un valor estático.
const numerosFill = numeros.fill(0,2,4);
console.log(numerosFill);

// El método copyWithin() copia una secuencia de elementos de un array dentro de la misma array.
const numerosCopyWithin = numeros.copyWithin(1,2,4);
console.log(numerosCopyWithin);
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
> En JavaScript todo es un Objeto.
```javascript
//Declaracion de Objetos
const persona = {
    // Aributos de un objeto
    nombre: "Eliot", // String como atributo
    apellido: "Solis",
    edad: 30, // Number como atributo
    soltero: true, // Boolean como atributo
    pasatiempos: ["Correr", "Leer", "Escuchar música", "Programar"], // Arreglo como atributo
    contacto: { // Objeto como atributo
        email: "ejemplo@email.com",
        twitter: "@ejemplo",
        movil: "123456789"
    },

    //Metodos de un objeto
    saludar() {
        console.log("Hola, soy " + this.nombre);
    },

    despedirse() {
        console.log("Adios, me voy a " + this.pasatiempos[0]);
    }

};

// Acceso a los atributos de un objeto
console.log(persona.nombre);
console.log(persona.soltero);
console.log(persona.pasatiempos[3]);
console.log(persona.contacto.email);

// Acceso a los Metodos de un objeto
persona.saludar();
persona.despedirse();


// Ejemplos de otros Metodos de Objetos

// El método Object.keys() devuelve un array de las propiedades names de un objeto, en el mismo orden como se obtienen en un loop normal.
console.log(Object.keys(persona));

// El método Object.values() devuelve un array con los valores correspondientes a las propiedades enumerables de un objeto.
console.log(Object.values(persona));

// El método Object.entries() devuelve una matriz de pares propios de una propiedad enumerable [key, value] de un objeto dado.
console.log(Object.entries(persona));

// El método Object.assign() se utiliza para copiar los valores de todas las propiedades propias enumerables de uno o más objetos fuente a un objeto destino. Devuelve el objeto destino.
const persona2 = Object.assign({}, persona);
console.log(persona2);

// El método Object.freeze() congela un objeto: es decir, previene que se le puedan añadir nuevas propiedades, eliminar propiedades existentes o cambiar el valor de las propiedades existentes. En resumen, el objeto queda inmutable.
Object.freeze(persona);
persona.nombre = "Juan";
console.log(persona); // No se puede modificar

// El método Object.seal() previene que se añadan o eliminen propiedades de un objeto, aunque sí se pueden modificar las propiedades existentes.
Object.seal(persona);
persona.nombre = "Juan";
console.log(persona); // Se puede modificar

// El método Object.is() determina si dos valores son los mismos valores. Dos valores son iguales si son el mismo valor. Dos valores son idénticos si son el mismo valor y del mismo tipo.
console.log(Object.is(1,1));
console.log(Object.is(1,"1"));


```

## Metodos Generales de Objetos
```javascript
console.log(Object.keys(persona));       // Devuelve las keys del objecto persona
console.log(Object.values(persona));     // Devuelve los valores del objeto persona

console.log(persona.hasOwnProperty("nombre"));  // Devuelve true si la clave esta en el objeto
console.log(persona.hasOwnProperty("nacimiento"));  
 ```

[Ir a Inicio](#indice-del-cheatsheet)

## 7. Manejo de Errores
> `try` y `catch`
```javascript
try {
    // Codigo a probar
    console.log("Hola");
    console.log("Mundo");
    console.log("Adios");
} catch (error) {
   // Codigo a ejecutar si hay un error
    console.log("Error: " + error);
}
```

> `try` , `catch` y `finally`
```javascript
try {
    // Codigo a probar
    console.log("Hola");
    console.log("Mundo");
    console.log("Adios");
} catch (error) {
   // Codigo a ejecutar si hay un error
    console.log("Error: " + error);
} finally {
    // Codigo a ejecutar siempre
    console.log("Fin del programa");
}
```

[Ir a Inicio](#indice-del-cheatsheet)

# 8. Prototipos

## **Conceptos Clave**
- **Prototipo Base (`Object.prototype`)**  
  Todos los objetos en JavaScript heredan de `Object.prototype`.
  - Métodos comunes: `.toString()`, `.hasOwnProperty()`.
  
- **Cadena de Prototipos (Prototype Chain)**  
  Si una propiedad no se encuentra en el objeto, se busca en su prototipo, y así sucesivamente hasta llegar a `null`.

- **Herencia Prototípica**  
  Permite compartir propiedades y métodos entre objetos sin necesidad de clases.

---

## **Métodos Principales**

| Método                        | Descripción                                                |
|-------------------------------|------------------------------------------------------------|
| `Object.create(proto)`        | Crea un objeto con el prototipo especificado.              |
| `Object.setPrototypeOf(obj, proto)` | Establece el prototipo de un objeto.                   |
| `Object.getPrototypeOf(obj)`  | Obtiene el prototipo de un objeto.                         |

---

## **Ejemplo Práctico**

```javascript
// Crear un objeto prototipo
const animal = {
  tipo: 'Desconocido',
  hacerSonido() {
    console.log(`${this.tipo} hace un sonido.`);
  }
};

// Crear un objeto que hereda de animal
const perro = Object.create(animal);
perro.tipo = 'Perro';
perro.hacerSonido(); // Salida: Perro hace un sonido.

// Verificar la cadena de prototipos
console.log(Object.getPrototypeOf(perro) === animal); // true
console.log(perro.hasOwnProperty('tipo')); // true
console.log(perro.hasOwnProperty('hacerSonido')); // false (heredado)
```

## Funciones Constructores Prototipicas
```javascript
// Funcion constructora (NO RECOMENDADA)
// NO SE RECOMIENDA ya que los objetos instanciados duplican los metodos del objeto padre.
function Animal(nombre, genero) {
    this.nombre = nombre;
    this.genero = genero;

    this.sonar= function(){
        console.log('Emitiendo Sonido...');
    };

    this.saludar = function(){
        console.log(`Hola mi nombre es ${this.nombre}`);
    };
};


const perro = new Animal("Tobby", "Macho");
const gato = new Animal("Alina", "Hembra");

console.log(perro.nombre);
perro.sonar();
perro.saludar();


// Funcion Constructora (FORMA RECOMENDADA)
function Animal(nombre, genero) {
    this.nombre = nombre;
    this.genero = genero;

};

Animal.prototype.sonar= function(){
    console.log('Emitiendo Sonido...');
};

Animal.prototype.saludar = function(){
    console.log(`Hola mi nombre es ${this.nombre}`);
};

const perro = new Animal("Tobby", "Macho");
const gato = new Animal("Alina", "Hembra");

console.log(perro.nombre);
perro.sonar();
perro.saludar();
```

### Herencia Prototipica
```javascript
//Herencia Prototipica
function Perro(nombre, categoria, tamanio) {
    this.super = Animal;
    this.super(nombre, categoria);
    this.tamanio = tamanio;
};

// Herencia (Perro hereda de Animal)
Perro.prototype = new Animal();

//Sobrescritura de metodos del Prototipo Padre
Perro.prototype.sonar = function () {
    console.log('Soy un perro mi sonido es un ladrido');
};

Perro.prototype.ladrar = function () {
    console.log('Guaf Guaf Guaf!');
};

const miPerro = new Perro("Tobby", "Macho", "Mediano");
console.log(miPerro.nombre);
miPerro.sonar();
miPerro.saludar();
```


[Ir a Inicio](#indice-del-cheatsheet)

## 9. Programación Orientada a Objetos

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

## 10. Manipulación del DOM

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

## 11. Promesas y Async/Await

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

## 12. ES6+ (Características avanzadas)

### Destructuración
```javascript
// Destructuracion en Arrays
const numeros = [1, 2, 3, 4];
const [uno, dos, tres, cuatro] = numeros; // Destructuracion

// Destructuracion en Objetos
const persona = {nombre: "Juan", apellido: "Solis", edad: 30 };
let {nombre, apellido, edad} = persona; // Destructuracion
console.log(nombre, apellido, edad);

// Destructuracion en declaracion
const {nombre, apellido, edad} = {nombre: "Juan", apellido: "Solis", edad: 30 };
```

### Spread y Rest
```javascript
// Parametro Rest
function sumar(a,b, ...c) {
    let resultado = a + b;
    
    c.forEach(function(n) {
        resultado += n;
    });

    return resultado;
}

console.log(sumar(1,2));        // 3
console.log(sumar(1,2,3));      // 6
console.log(sumar(1,2,3,4));    // 10

// Operador Spread
// Ejemplo 01
const arr1 = [1,2,3,4,5];
const arr2 = [6,7,8,9,10];
const arr3 = [...arr1, ...arr2]; 

//Ejemplo 02
let numeros = [1, 2, 3];
let copia = [...numeros];

// Ejemplo 03
function sumar(...valores) {
    return valores.reduce((a, b) => a + b);
}
```

[Ir a Inicio](#indice-del-cheatsheet)

## 13. Módulos

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



## 14. Buenas Prácticas

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