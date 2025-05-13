# TypeScript Cheatsheet 📘

## 📌 Introducción

TypeScript es un superset de JavaScript que añade tipado estático y características modernas de desarrollo. Se compila a JavaScript puro.

## 🛠️ Tipos Básicos

```typescript
let nombre: string = "Elio";
let edad: number = 30;
let activo: boolean = true;
let tags: string[] = ["typescript", "javascript"];
let cualquierValor: any = "puede ser cualquier cosa";
```

## 📦 Tuplas y Enums

```typescript
// Tuplas: permiten tipos específicos por posición
let persona: [string, number] = ["Ana", 28];

// Enums: valores constantes nombrados
enum Estado {
  Activo,
  Inactivo,
  Suspendido,
}
let estadoUsuario: Estado = Estado.Activo;
```

## ✅ Tipos personalizados y Alias

```typescript
type ID = string | number;
let usuarioID: ID = "abc123";
```

## 🚦 Interfaces

```typescript
interface Usuario {
  nombre: string;
  edad: number;
  activo?: boolean; // propiedad opcional
}

const mostrarUsuario = (u: Usuario): void => {
  console.log(`${u.nombre}, ${u.edad}`);
};
```

## 🧱 Clases

```typescript
class Persona {
  constructor(public nombre: string, private edad: number) {}

  saludar(): string {
    return `Hola, me llamo ${this.nombre}`;
  }
}

let p = new Persona("Carlos", 40);
console.log(p.saludar());
```

## 📘 Funciones Tipadas

```typescript
function sumar(a: number, b: number): number {
  return a + b;
}

const saludar = (nombre: string): void => {
  console.log(`Hola, ${nombre}`);
};
```

## 📋 Genéricos

```typescript
function identidad<T>(valor: T): T {
  return valor;
}

let resultado = identidad<string>("texto");
```

## 🔁 Tipos Union y Narrowing

```typescript
function imprimir(id: string | number) {
  if (typeof id === "string") {
    console.log(`Texto: ${id}`);
  } else {
    console.log(`Número: ${id}`);
  }
}
```

## ❗ Non-null Assertion & Optional Chaining

```typescript
let persona = {
  nombre: "Luis",
  direccion: {
    ciudad: "Lima",
  },
};

console.log(persona.direccion?.ciudad); // Optional chaining
```

## 🔐 Modificadores de Acceso

```typescript
class Cuenta {
  public titular: string;
  private saldo: number;

  constructor(titular: string, saldo: number) {
    this.titular = titular;
    this.saldo = saldo;
  }

  mostrarSaldo(): number {
    return this.saldo;
  }
}
```

## 📄 Type Assertions

```typescript
let valor: any = "Hola mundo";
let longitud: number = (valor as string).length;
```

## 📑 Namespaces y Módulos

```typescript
// archivoA.ts
export const PI = 3.14;

// archivoB.ts
import { PI } from "./archivoA";
console.log(PI);
```

## ✅ Tipos Utilitarios

```typescript
interface Persona {
  nombre: string;
  edad: number;
  email: string;
}

// Partial: todas las propiedades opcionales
let p1: Partial<Persona> = { nombre: "Carlos" };

// Pick: selecciona propiedades
let p2: Pick<Persona, "nombre" | "email"> = {
  nombre: "Ana",
  email: "ana@mail.com",
};
```

---

> ⚠️ Recuerda siempre compilar tu TypeScript con `tsc archivo.ts` y configurar tu `tsconfig.json` para proyectos grandes.
