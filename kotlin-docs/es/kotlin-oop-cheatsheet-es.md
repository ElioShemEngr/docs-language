# Kotlin OOP Cheatsheet

## 1. Clases y Objetos

```kotlin
// Definición básica de una clase
class Persona(val nombre: String, var edad: Int) {
    fun saludar() {
        println("Hola, mi nombre es $nombre y tengo $edad años.")
    }
}

// Crear instancia (objeto) de la clase
val persona1 = Persona("Ana", 30)
persona1.saludar()
```

## 2. Constructores

```kotlin
// Constructor primario con inicialización
class Vehiculo(val marca: String, val modelo: String) {
    init {
        println("Vehículo creado: $marca $modelo")
    }
}

val auto = Vehiculo("Toyota", "Corolla")
```

## 3. Herencia

```kotlin
// Clase base
open class Animal(val nombre: String) {
    open fun hacerSonido() {
        println("El animal hace un sonido")
    }
}

// Subclase que hereda de Animal
class Perro(nombre: String): Animal(nombre) {
    override fun hacerSonido() {
        println("$nombre dice: Guau")
    }
}

val miPerro = Perro("Firulais")
miPerro.hacerSonido()
```

## 4. Encapsulamiento

```kotlin
class CuentaBancaria {
    private var saldo: Double = 0.0

    fun depositar(cantidad: Double) {
        if (cantidad > 0) saldo += cantidad
    }

    fun obtenerSaldo(): Double {
        return saldo
    }
}

val cuenta = CuentaBancaria()
cuenta.depositar(100.0)
println("Saldo: ${cuenta.obtenerSaldo()}")
```

## 5. Abstracción

```kotlin
// Clase abstracta
abstract class Figura {
    abstract fun area(): Double
}

class Circulo(val radio: Double) : Figura() {
    override fun area(): Double = Math.PI * radio * radio
}

val c = Circulo(3.0)
println("Área del círculo: ${c.area()}")
```

## 6. Interfaces

```kotlin
interface Volador {
    fun volar()
}

class Pajaro : Volador {
    override fun volar() {
        println("El pájaro está volando")
    }
}

val pajaro = Pajaro()
pajaro.volar()
```

## 7. Data Classes

```kotlin
// Clase para almacenar datos con funciones generadas automáticamente
data class Usuario(val nombre: String, val edad: Int)

val u1 = Usuario("Carlos", 25)
println(u1)
```

## 8. Objetos y Singletons

```kotlin
// Singleton
object Configuracion {
    val version = "1.0"
    fun imprimirConfig() = println("Versión: $version")
}

Configuracion.imprimirConfig()
```

## 9. Clases Anidadas y Internas

```kotlin
class Computadora {
    private val marca = "TechBrand"

    class Procesador {
        fun info() = println("Procesador Intel i7")
    }

    inner class Memoria {
        fun info() = println("Memoria de la computadora $marca")
    }
}

val proc = Computadora.Procesador()
proc.info()

val mem = Computadora().Memoria()
mem.info()
```

## 10. Polimorfismo

```kotlin
fun hacerSonar(animal: Animal) {
    animal.hacerSonido()
}

val gato = object : Animal("Michi") {
    override fun hacerSonido() = println("$nombre dice: Miau")
}

hacerSonar(gato)
hacerSonar(Perro("Fido"))
```

---

> 🧠 Este cheatsheet cubre los pilares fundamentales de la Programación Orientada a Objetos (POO) en Kotlin. Úsalo como guía rápida para repasar conceptos clave y su sintaxis.
