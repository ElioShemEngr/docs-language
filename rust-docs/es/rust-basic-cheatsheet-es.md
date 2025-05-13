# Rust Cheatsheet

## ¿Qué es Rust?
Rust es un lenguaje de programación de sistemas enfocado en **seguridad, concurrencia y alto rendimiento**. Su diseño previene errores comunes en la gestión de memoria sin necesidad de un recolector de basura.

### Características principales:
- **Seguridad en memoria**: Usa un sistema de **propiedad (ownership)** que previene fugas de memoria y accesos no válidos.
- **Alto rendimiento**: Comparable a C y C++ en eficiencia, con un control preciso sobre la memoria.
- **Concurrencia segura**: Facilita la programación concurrente sin riesgos de condiciones de carrera.
- **Expresividad y ergonomía**: Sintaxis moderna y flexible que facilita la escritura de código seguro y eficiente.

## Instalación de Rust
Para instalar Rust, usa el siguiente comando en la terminal:
```sh
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```
Para verificar la instalación:
```sh
rustc --version
```

## Compilación y Ejecución
Crea un archivo `main.rs` y escribe el siguiente código:
```rust
fn main() {
    println!("¡Hola, mundo!");
}
```
Para compilar y ejecutar:
```sh
rustc main.rs
./main
```

## Conceptos básicos
### 1. Variables y Tipos de Datos
```rust
fn variables() {
    let x: i32 = 10; // Variable inmutable
    let mut y: i32 = 20; // Variable mutable
    let z = 30; // Inferencia de tipo
    println!("x: {}, y: {}, z: {}", x, y, z);
}
```

### 2. Funciones
```rust
fn suma(a: i32, b: i32) -> i32 {
    a + b // Retorno implícito
}
```

### 3. Control de Flujo
```rust
fn control_flujo() {
    let number = 10;
    if number > 5 {
        println!("Mayor que 5");
    } else {
        println!("Menor o igual a 5");
    }
}
```

### 4. Bucles
```rust
fn bucles() {
    let mut count = 0;
    while count < 5 {
        println!("Cuenta: {}", count);
        count += 1;
    }

    for i in 0..5 {
        println!("Iteración: {}", i);
    }
}
```

### 5. Structs
```rust
struct Persona {
    nombre: String,
    edad: u8,
}

fn structs() {
    let persona = Persona {
        nombre: String::from("Alice"),
        edad: 25,
    };
    println!("Nombre: {}, Edad: {}", persona.nombre, persona.edad);
}
```

### 6. Enums
```rust
enum Direccion {
    Norte,
    Sur,
    Este,
    Oeste,
}

fn enums() {
    let dir = Direccion::Norte;
    match dir {
        Direccion::Norte => println!("Vas al norte"),
        Direccion::Sur => println!("Vas al sur"),
        Direccion::Este => println!("Vas al este"),
        Direccion::Oeste => println!("Vas al oeste"),
    }
}
```

### 7. Option y Result
```rust
fn option_result() {
    let some_value: Option<i32> = Some(42);
    let no_value: Option<i32> = None;
    println!("Algunas opciones: {:?}, {:?}", some_value, no_value);

    let result: Result<i32, &str> = Ok(100);
    match result {
        Ok(val) => println!("Valor: {}", val),
        Err(err) => println!("Error: {}", err),
    }
}
```

### 8. Propiedad y Préstamos
```rust
fn propiedad_prestamos() {
    let s1 = String::from("Hola");
    let s2 = &s1; // Préstamo
    println!("{}", s2);
}
```

### 9. Traits
```rust
trait Sonido {
    fn hacer_sonido(&self);
}

struct Perro;
impl Sonido for Perro {
    fn hacer_sonido(&self) {
        println!("Guau!");
    }
}

fn traits() {
    let mi_perro = Perro;
    mi_perro.hacer_sonido();
}
```

### 10. Concurrencia
```rust
use std::thread;
fn concurrencia() {
    let handle = thread::spawn(|| {
        for i in 1..5 {
            println!("Hilo: {}", i);
        }
    });
    handle.join().unwrap();
}
```

## 11. Función Main
```rust
fn main() {
    variables();
    println!("Suma: {}", suma(5, 3));
    control_flujo();
    bucles();
    structs();
    enums();
    option_result();
    propiedad_prestamos();
    traits();
    concurrencia();
}
```
