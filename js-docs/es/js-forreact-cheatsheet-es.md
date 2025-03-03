# Cheatsheet de JavaScript para React

## 1. Operador Ternario
El operador ternario es una forma concisa de escribir una estructura condicional `if-else`.
```js
const mensaje = edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad";
console.log(mensaje);
```

## 2. Funciones Flecha
Las funciones flecha ofrecen una sintaxis más corta y no tienen su propio `this`.
```js
const suma = (a, b) => a + b;
console.log(suma(5, 3));
```

## 3. Objetos (Conceptos Generales)
Los objetos en JavaScript son estructuras clave-valor.
```js
const persona = {
  nombre: "Juan",
  edad: 25,
  saludar: function() {
    console.log(`Hola, soy ${this.nombre}`);
  }
};
persona.saludar();
```
**Destructuración de objetos:**
```js
const { nombre, edad } = persona;
console.log(nombre, edad);
```

## 4. Arrays (Map, ForEach, Filter, Reduce)

### `.map()` - Crea un nuevo array transformando cada elemento
```js
const numeros = [1, 2, 3, 4];
const cuadrados = numeros.map(num => num * num);
console.log(cuadrados);
```

### `.forEach()` - Itera sobre cada elemento (sin retornar)
```js
numeros.forEach(num => console.log(num));
```

### `.filter()` - Filtra elementos según una condición
```js
const pares = numeros.filter(num => num % 2 === 0);
console.log(pares);
```

### `.reduce()` - Reduce un array a un único valor
```js
const sumaTotal = numeros.reduce((acum, num) => acum + num, 0);
console.log(sumaTotal);
```

## 5. Manipulación del DOM
React evita la manipulación directa del DOM, pero es importante conocerlo.
```js
document.getElementById("miElemento").textContent = "Nuevo texto";
```

## 6. Async, Await y Promesas
Manejo de operaciones asíncronas.

### Promesas
```js
const obtenerDatos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Datos recibidos"), 2000);
  });
};
obtenerDatos().then(datos => console.log(datos));
```

### Async/Await
```js
const obtenerDatosAsync = async () => {
  const datos = await obtenerDatos();
  console.log(datos);
};
obtenerDatosAsync();
```

## 7. Destructuración
Extraer valores de objetos o arrays fácilmente.
```js
const [primero, segundo] = ["rojo", "azul"];
console.log(primero);
```

## 8. Spread y Rest Operator
El operador `...` permite expandir o agrupar elementos.

### Spread (`...`) - Clonar objetos/arrays
```js
const numeros2 = [...numeros, 5, 6];
console.log(numeros2);
```

### Rest (`...`) - Agrupar argumentos en una función
```js
const sumarTodo = (...numeros) => numeros.reduce((acc, num) => acc + num, 0);
console.log(sumarTodo(1, 2, 3, 4));
```

## 9. Módulos (Import y Export)
React usa módulos para organizar el código.

### Exportar
```js
export const saludar = nombre => `Hola, ${nombre}!`;
```

### Importar
```js
import { saludar } from "./modulo";
console.log(saludar("Juan"));
```

## 10. Template Literals
Permiten interpolación de variables en strings.
```js
const nombre = "María";
console.log(`Hola, ${nombre}!`);
```

Estos conceptos te prepararán para trabajar con React de manera eficiente.

