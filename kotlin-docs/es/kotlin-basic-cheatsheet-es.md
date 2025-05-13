# Kotlin Cheatsheet

## 📌 Variables

```kotlin
// Variable mutable
var nombre = "Juan"
nombre = "Pedro" // puede cambiar

// Variable inmutable
val edad = 30
// edad = 31 // Error: no se puede reasignar
```

## 📌 Tipos de datos

```kotlin
val entero: Int = 10
val decimal: Double = 3.14
val texto: String = "Hola"
val logico: Boolean = true
```

## 📌 Funciones

```kotlin
fun saludar(nombre: String): String {
    return "Hola, $nombre"
}

// Función con cuerpo reducido
def sumar(a: Int, b: Int) = a + b
```

## 📌 Condicionales

```kotlin
val edad = 18
if (edad >= 18) {
    println("Mayor de edad")
} else {
    println("Menor de edad")
}
```

## 📌 When (switch)

```kotlin
val dia = 3
val nombreDia = when(dia) {
    1 -> "Lunes"
    2 -> "Martes"
    3 -> "Miércoles"
    else -> "Desconocido"
}
```

## 📌 Bucles

```kotlin
// For loop
for (i in 1..5) {
    println(i)
}

// While loop
var i = 1
while (i <= 5) {
    println(i)
    i++
}
```

## 📌 Clases y objetos

```kotlin
class Persona(val nombre: String, var edad: Int) {
    fun presentarse() {
        println("Soy $nombre y tengo $edad años")
    }
}

val persona = Persona("Ana", 25)
persona.presentarse()
```

## 📌 Data class (clases de datos)

```kotlin
data class Usuario(val id: Int, val nombre: String)

val user1 = Usuario(1, "Carlos")
println(user1)
```

## 📌 Null safety

```kotlin
var nombre: String? = null

// Usar safe call
println(nombre?.length)

// Elvis operator
val longitud = nombre?.length ?: 0
```

## 📌 Listas y mapas

```kotlin
val lista = listOf("a", "b", "c") // inmutable
val listaMutable = mutableListOf("a", "b")
listaMutable.add("c")

val mapa = mapOf(1 to "Uno", 2 to "Dos")
val mapaMutable = mutableMapOf(1 to "Uno")
mapaMutable[2] = "Dos"
```

## 📌 Lambdas

```kotlin
val suma = { a: Int, b: Int -> a + b }
println(suma(3, 4))

val nombres = listOf("Ana", "Luis", "Pedro")
nombres.forEach { println(it) }
```

## 📌 Extensiones

```kotlin
fun String.repetir(n: Int): String {
    return this.repeat(n)
}

println("Hola ".repetir(3))
```

## 📌 Coroutines (básico)

```kotlin
import kotlinx.coroutines.*

fun main() = runBlocking {
    launch {
        delay(1000L)
        println("Mundo")
    }
    println("Hola")
}
```

## 📌 Smart casting

```kotlin
fun longitud(obj: Any): Int {
    if (obj is String) {
        return obj.length // Kotlin lo castea automáticamente
    }
    return 0
}
```

## 📌 Operadores

```kotlin
val a = 10
val b = 5
val suma = a + b
val resta = a - b
val mult = a * b
val div = a / b
val mod = a % b
```

## 📌 Ranges y filtros

```kotlin
val numeros = (1..10).filter { it % 2 == 0 }
println(numeros) // [2, 4, 6, 8, 10]
```

## 📌 Objetos Singleton

```kotlin
object MiSingleton {
    val version = "1.0"
    fun saludar() = println("Hola desde singleton")
}

MiSingleton.saludar()
```

## 📌 Companion Objects

```kotlin
class Util {
    companion object {
        fun sumar(a: Int, b: Int) = a + b
    }
}

val resultado = Util.sumar(3, 4)
```
