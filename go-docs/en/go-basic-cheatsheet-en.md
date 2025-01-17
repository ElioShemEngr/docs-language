# Go (Golang) Cheatsheet

## Table of Contents
- [Go (Golang) Cheatsheet](#go-golang-cheatsheet)
  - [Table of Contents](#table-of-contents)
  - [1. Introduction](#1-introduction)
  - [2. Basic Structure](#2-basic-structure)
  - [3. Variables and Data Types](#3-variables-and-data-types)
    - [Variable Declaration](#variable-declaration)
    - [Data Types](#data-types)
    - [Zero Values](#zero-values)
  - [4. Constants](#4-constants)
  - [5. Control Flow](#5-control-flow)
    - [Conditionals](#conditionals)
    - [Switch](#switch)
    - [Loops](#loops)
      - [`for`](#for)
  - [6. Functions](#6-functions)
    - [Variadic Parameters](#variadic-parameters)
    - [Anonymous Functions](#anonymous-functions)
  - [7. Data Structures](#7-data-structures)
    - [Arrays and Slices](#arrays-and-slices)
  - [8. Maps](#8-maps)
  - [9. Pointers](#9-pointers)
  - [10. Methods and Receivers](#10-methods-and-receivers)
  - [11. Interfaces](#11-interfaces)
  - [12. Error Handling](#12-error-handling)
  - [13. Goroutines and Concurrency](#13-goroutines-and-concurrency)
  - [14. Channels](#14-channels)
  - [15. Packages and Modules](#15-packages-and-modules)
    - [Creating a Module](#creating-a-module)
    - [Importing Packages](#importing-packages)
  - [16. Testing](#16-testing)
    - [Unit Tests](#unit-tests)

---

## 1. Introduction
Go (or Golang) is a programming language designed to be simple, efficient, and concurrent. Created by Google, it combines the ease of dynamic languages with the performance of compiled languages. It is particularly useful for distributed systems and web services.

---

## 2. Basic Structure
```go
package main // Declare the main package

import "fmt" // Import the standard fmt package for printing

func main() { // Program entry point
    fmt.Println("Hello, World!") // Print to console
}
```

---

## 3. Variables and Data Types
### Variable Declaration
```go
package main

import "fmt"

func main() {
    var name string = "Elio" // Explicit declaration
    age := 22                 // Implicit declaration (type inference)

    fmt.Printf("Hello, %s. You are %d years old.\n", name, age)
}
```

### Data Types
```go
var integer int = 10
var decimal float64 = 3.14
var boolean bool = true
var text string = "Go is great"
```

### Zero Values
Each type has a default zero value:
```go
var integer int       // 0
var decimal float64  // 0.0
var boolean bool    // false
var text string     // ""
```

---

## 4. Constants
Constants are declared using `const` and cannot be modified at runtime.
```go
const Pi = 3.14159
const greeting = "Hello"
```
---

## 5. Control Flow
### Conditionals
```go
if condition {
    // Code block
} else {
    // Alternative block
}
```
Example:
```go
func checkAge(age int) {
    if age >= 18 {
        fmt.Println("You are an adult.")
    } else {
        fmt.Println("You are a minor.")
    }
}
```

### Switch
```go
switch value {
case 1:
    fmt.Println("One")
case 2:
    fmt.Println("Two")
default:
    fmt.Println("Other value")
}
```

### Loops
#### `for`
```go
for i := 0; i < 5; i++ {
    fmt.Println(i)
}
```

---

## 6. Functions
```go
func add(a int, b int) int {
    return a + b
}
```
Usage:
```go
result := add(3, 5)
fmt.Println("The result is:", result)
```

### Variadic Parameters
```go
func printNames(names ...string) {
    for _, name := range names {
        fmt.Println(name)
    }
}
```

### Anonymous Functions
```go
sum := func(a, b int) int {
    return a + b
}
fmt.Println(sum(2, 3))
```
---

## 7. Data Structures
### Arrays and Slices
```go
// Arrays
var numbers [3]int = [3]int{1, 2, 3}

// Slices
names := []string{"Ana", "John", "Carlos"}
names = append(names, "Luis")
```
---

## 8. Maps
```go
population := map[string]int{
    "Lima":    10000000,
    "Cusco":   500000,
    "Arequipa":700000,
}
fmt.Println(population["Lima"])
```
---

## 9. Pointers
```go
func increment(value *int) {
    *value += 1
}

number := 5
increment(&number)
fmt.Println(number) // 6
```
---

## 10. Methods and Receivers
```go
type Person struct {
    Name string
    Age   int
}

func (p Person) Greet() {
    fmt.Printf("Hi, I'm %s and I'm %d years old.\n", p.Name, p.Age)
}
```
---

## 11. Interfaces
```go
type Reader interface {
    Read() string
}

type Book struct {}

func (b Book) Read() string {
    return "Reading a book."
}

func processReading(r Reader) {
    fmt.Println(r.Read())
}
```
---

## 12. Error Handling
```go
func divide(a, b int) (int, error) {
    if b == 0 {
        return 0, fmt.Errorf("cannot divide by zero")
    }
    return a / b, nil
}
```
Usage:
```go
result, err := divide(10, 0)
if err != nil {
    fmt.Println("Error:", err)
} else {
    fmt.Println("Result:", result)
}
```
---

## 13. Goroutines and Concurrency
```go
func printMessage(message string) {
    for i := 0; i < 5; i++ {
        fmt.Println(message)
    }
}

func main() {
    go printMessage("Hello") // Goroutine
    printMessage("World")
}
```
---

## 14. Channels
```go
channel := make(chan string)

go func() {
    channel <- "Message from goroutine"
}()

message := <-channel
fmt.Println(message)
```
---

## 15. Packages and Modules
### Creating a Module
```bash
go mod init example
```
### Importing Packages
```go
import (
    "fmt"
    "math"
)
```

---

## 16. Testing
### Unit Tests
```go
package main

import "testing"

func TestAdd(t *testing.T) {
    result := add(2, 3)
    if result != 5 {
        t.Errorf("Expected 5 but got %d", result)
    }
}
```
