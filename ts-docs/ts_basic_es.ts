// TypeScript CheatSheet

/*
El Objeto Global:
console.log(globalThis);
*/

// ------------------------------------------------------------
// 0. Hola Mundo
console.log('Hola Mundo');

// ------------------------------------------------------------
// 1. Variables y Tipos Basicos
// Basicos 
let isActive: boolean = true;
let isNumber: number = 5;
let userName: string = 'Elio';
// Listas y Tuplas
let myList: string[] = ['futbol', 'voley', 'basket'];
let myTuple: [string, number] = ['Level', 100];
// Union
let myUnion: number |  string = 'Hola';
// Literales
let myLiteral: 'admin' | 'user' = 'user'; 
// Alias
type CoordinatePointENZ = {x:number; y:number; z:number};
let point01: CoordinatePointENZ = {x:105, y:2054, z:23}; 

console.log(point01.x);
console.log(point01.y);
console.log(point01.z);

// ------------------------------------------------------------
// 2. Funciones
// Ejemplo 01:
function suma(a: number, b: number): number {
  return a + b;
}

const result = suma(point01.x, point01.y);
console.log(result);

// Ejemplo 02:
const log = (mensaje: string): void => {
  console.log(mensaje);
}

log('Hola TypeScript');

// Ejemplo 03:
// Parametros opcionales o por defecto
function greet(name: string = 'Elio', age?: number): string {
  return `Hola, mi nombre es ${name} y mi edad es ${age}`
}

const greetUser = greet();
console.log(greetUser);

// ------------------------------------------------------------
// 3. Objetos e Interfaces
// Interfaces en TypeScript
interface User {
    name: string;
    id: number;
    isStudent?: boolean; // opcional
  }

// Objetos en base a Interfaces
// Inferencia de tipos
const user: User = {
    name: "Elio",
    id: 0
};

console.log(`Hola, ${user.name}`);
console.log();

// Extender Interfaces
interface Admin extends User {
  permissions: string[];
  idAdmin: number;
}

const userAdmin: Admin = {
  name: "Jeshua",
  id: 1,
  isStudent: false,
  permissions: ["Crear", "Editar", "Eliminar"],
  idAdmin: 10
}

console.log(userAdmin.idAdmin);
console.log(userAdmin.isStudent);

// ------------------------------------------------------------
// 4. Clases y Herencia
class Person {
  constructor(public name: string, private age: number) {}

  greet(): string {
    return `Hola, soy ${this.name}`
  }
}

class Developer extends Person {
  constructor(name: string, age: number, public language: string) {
    super(name, age);
  }
}

// ------------------------------------------------------------
// 5. Enums
enum orderStatus {
  Pending = "PENDING",
  Shipped = "SHIPPED",
  Delivered = "DELIVERED",
  Cancelled = "CANCELLED"
}

function updateOrderStatus(orderId: number, status: orderStatus) {
  console.log(`Order ${orderId} is now ${status}`);
}

updateOrderStatus(123, orderStatus.Delivered);

// ------------------------------------------------------------
// 6. Genericos
function identity<T>(arg: T): T {
  return arg;
}

let output1 = identity<string>("Hola");
let output2 = identity<number>(42);

// Por Inferencia - Mas Elegante
let response = identity("Elio"); // TypeScript infiere que T es string


// Ejemplo 01:
interface Usuario {
  nombre: string;
  email: string;
}

interface Producto {
  nombre: string;
  precio: number;
}

function imprimirElemento<T>(elemento: T): void {
  console.log("Elemento:", elemento);
}

const user01: Usuario = { nombre: "Elio", email: "elio@correo.com" };
const producto: Producto = { nombre: "Laptop", precio: 1500 };

imprimirElemento<Usuario>(user01);
imprimirElemento(producto); // TypeScript infiere el tipo

console.log();


// ------------------------------------------------------------
// 7. Type Assertions
let someValue: unknown = "Este es un string";
let strLength: number = (someValue as string).length;


// ------------------------------------------------------------
// 8. Modificadores de acceso en clases
class Car {
  public brand: string; // Accesible desde cualquier parte
  private speed: number; // Accesible solo desde la clase
  protected wheels: number = 4; // Accesible solo dentro de la clase y subclases

  constructor(brand: string, speed: number) {
    this.brand = brand;
    this.speed = speed;
  }

  // Acceso privado (private)
  public getSpeed(): number {
    return this.speed; // Solo se accede desde dentro de la clase
  }

}

// Acceso Privado (private)
// console.log(myCar.speed); ❌ Error: speed es privada

// Acceso Publico (public)
const myCar = new Car("Honda", 100);
console.log(myCar.brand);

// Acceso Protegido (protected)
class ElectricCar extends Car {
  public describe(): void {
    console.log(`Este auto tiene ${this.wheels} ruedas.`); // ✅ OK: wheels es protected
  }
}

const tesla = new ElectricCar("Tesla", 200);
// console.log(tesla.wheels); ❌ Error: wheels es protected

// Ejemplo Completo
class Carro {
  public brand: string;
  private speed: number;
  protected wheels: number = 4;

  constructor(brand: string, speed: number) {
    this.brand = brand;
    this.speed = speed;
  }

  public describe(): void {
    console.log(`Marca: ${this.brand}, velocidad: ${this.speed} km/h`);
  }

  protected roll(): void {
    console.log(`Rodando con ${this.wheels} ruedas`);
  }
}

class SportsCar extends Carro {
  showDetails() {
    this.describe();     // ✅ OK
    this.roll();         // ✅ OK: método protected
    // console.log(this.speed); ❌ Error: speed es privada
  }
}


// ------------------------------------------------------------
// 9. Utilitarios de TypeScript
type Usuario01 = { id: number; name: string; age: number };

type PartialUser = Partial<Usuario01>;
type RequiredUser = Required<Usuario01>;
type ReadonlyUser = Readonly<Usuario01>;
type PickName = Pick<Usuario01, "name">;
type OmitAge = Omit<Usuario01, "age">;


// ------------------------------------------------------------
// 10. Modulos
// archivo users.ts
export interface Users {
  name: string;
}

// archivo app.ts
// import { Users } from "./users";
