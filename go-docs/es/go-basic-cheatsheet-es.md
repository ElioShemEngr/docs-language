# Go (Golang) Cheatsheet

## Índice
- [Go (Golang) Cheatsheet](#go-golang-cheatsheet)
  - [Índice](#índice)
  - [1. Introducción](#1-introducción)
  - [2. Estructura Básica](#2-estructura-básica)
  - [3. Variables y Tipos de Datos](#3-variables-y-tipos-de-datos)
    - [Declaración de Variables](#declaración-de-variables)
    - [Tipos de Datos](#tipos-de-datos)
    - [Valores Cero](#valores-cero)
  - [4. Constantes](#4-constantes)
  - [5. Control de Flujo](#5-control-de-flujo)
    - [Condicionales](#condicionales)
    - [Switch](#switch)
    - [Bucles](#bucles)
      - [`for`](#for)
  - [6. Funciones](#6-funciones)
    - [Parámetros Variádicos](#parámetros-variádicos)
    - [Funciones Anónimas](#funciones-anónimas)
  - [7. Estructuras de Datos](#7-estructuras-de-datos)
    - [Arrays y Slices](#arrays-y-slices)
  - [8. Mapas](#8-mapas)
  - [9. Punteros](#9-punteros)
  - [10. Métodos y Receptores](#10-métodos-y-receptores)
  - [11. Interfaces](#11-interfaces)
  - [12. Manejo de Errores](#12-manejo-de-errores)
  - [13. Goroutines y Concurrencia](#13-goroutines-y-concurrencia)
  - [14. Canales](#14-canales)
  - [15. Paquetes y Módulos](#15-paquetes-y-módulos)
    - [Crear un Módulo](#crear-un-módulo)
    - [Importar Paquetes](#importar-paquetes)
  - [16. Testing](#16-testing)
    - [Pruebas Unitarias](#pruebas-unitarias)

---

## 1. Introducción
Go (o Golang) es un lenguaje de programación diseñado para ser simple, eficiente y concurrente. Fue creado por Google y combina la facilidad de uso de lenguajes dinámicos con el rendimiento de lenguajes compilados. Es particularmente útil para sistemas distribuidos y servicios web.

---

## 2. Estructura Básica
```go
package main // Declaración del paquete principal

import "fmt" // Importar paquete estándar fmt para impresión

func main() { // Punto de entrada del programa
    fmt.Println("¡Hola, mundo!") // Imprimir en consola
}
```

---

## 3. Variables y Tipos de Datos
### Declaración de Variables
```go
package main

import "fmt"

func main() {
    var nombre string = "Elio" // Declaración explícita
    edad := 22                 // Declaración implícita (infersión de tipo)

    fmt.Printf("Hola, %s. Tienes %d años.\n", nombre, edad)
}
```

### Tipos de Datos
```go
var entero int = 10
var decimal float64 = 3.14
var booleano bool = true
var texto string = "Go es genial"
```

### Valores Cero
Cada tipo tiene un valor cero predeterminado:
```go
var entero int       // 0
var decimal float64  // 0.0
var booleano bool    // false
var texto string     // ""
```

---

## 4. Constantes
Las constantes se declaran usando `const` y no pueden ser modificadas en tiempo de ejecución.
```go
const Pi = 3.14159
const saludo = "Hola"
```
---

## 5. Control de Flujo
### Condicionales
```go
if condicion {
    // Bloque de código
} else {
    // Bloque alternativo
}
```
Ejemplo:
```go
func verificarEdad(edad int) {
    if edad >= 18 {
        fmt.Println("Eres mayor de edad.")
    } else {
        fmt.Println("Eres menor de edad.")
    }
}
```

### Switch
```go
switch valor {
case 1:
    fmt.Println("Uno")
case 2:
    fmt.Println("Dos")
default:
    fmt.Println("Otro valor")
}
```

### Bucles
#### `for`
```go
for i := 0; i < 5; i++ {
    fmt.Println(i)
}
```

---

## 6. Funciones
```go
func suma(a int, b int) int {
    return a + b
}
```
Uso:
```go
resultado := suma(3, 5)
fmt.Println("El resultado es:", resultado)
```

### Parámetros Variádicos
```go
func imprimirNombres(nombres ...string) {
    for _, nombre := range nombres {
        fmt.Println(nombre)
    }
}
```

### Funciones Anónimas
```go
sumar := func(a, b int) int {
    return a + b
}
fmt.Println(sumar(2, 3))
```
---

## 7. Estructuras de Datos
### Arrays y Slices
```go
// Arrays
var numeros [3]int = [3]int{1, 2, 3}

// Slices
nombres := []string{"Ana", "Juan", "Carlos"}
nombres = append(nombres, "Luis")
```
---

## 8. Mapas
```go
poblacion := map[string]int{
    "Lima":    10000000,
    "Cusco":   500000,
    "Arequipa":700000,
}
fmt.Println(poblacion["Lima"])
```
---

## 9. Punteros
```go
func incrementar(valor *int) {
    *valor += 1
}

numero := 5
incrementar(&numero)
fmt.Println(numero) // 6
```
---

## 10. Métodos y Receptores
```go
type Persona struct {
    Nombre string
    Edad   int
}

func (p Persona) Saludar() {
    fmt.Printf("Hola, soy %s y tengo %d años.\n", p.Nombre, p.Edad)
}
```
---

## 11. Interfaces
```go
type Lector interface {
    Leer() string
}

type Libro struct {}

func (l Libro) Leer() string {
    return "Leyendo un libro."
}

func procesarLectura(l Lector) {
    fmt.Println(l.Leer())
}
```
---

## 12. Manejo de Errores
```go
func dividir(a, b int) (int, error) {
    if b == 0 {
        return 0, fmt.Errorf("no se puede dividir entre cero")
    }
    return a / b, nil
}
```
Uso:
```go
resultado, err := dividir(10, 0)
if err != nil {
    fmt.Println("Error:", err)
} else {
    fmt.Println("Resultado:", resultado)
}
```
---

## 13. Goroutines y Concurrencia
```go
func imprimir(mensaje string) {
    for i := 0; i < 5; i++ {
        fmt.Println(mensaje)
    }
}

func main() {
    go imprimir("Hola") // Goroutine
    imprimir("Mundo")
}
```
---

## 14. Canales
```go
canal := make(chan string)

go func() {
    canal <- "Mensaje desde la goroutine"
}()

mensaje := <-canal
fmt.Println(mensaje)
```
---

## 15. Paquetes y Módulos
### Crear un Módulo
```bash
go mod init ejemplo
```
### Importar Paquetes
```go
import (
    "fmt"
    "math"
)
```

---

## 16. Testing
### Pruebas Unitarias
```go
package main

import "testing"

func TestSuma(t *testing.T) {
    resultado := suma(2, 3)
    if resultado != 5 {
        t.Errorf("Se esperaba 5 pero se obtuvo %d", resultado)
    }
}
```
