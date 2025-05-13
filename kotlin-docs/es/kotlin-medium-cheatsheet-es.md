# Cheatsheet de Kotlin para Programadores Experimentados

## Variables y Tipos

* **`val`**: Inmutable (solo lectura).
    ```kotlin
    val nombre: String = "Kotlin"
    ```
* **`var`**: Mutable.
    ```kotlin
    var version: Double = 1.5
    ```
* **Inferencia de tipos**: Kotlin deduce el tipo.
    ```kotlin
    val lenguaje = "Kotlin" // Infiere String
    ```
* **Nulabilidad**: `?` permite valores nulos.
    ```kotlin
    var textoNulo: String? = null
    ```
* **`!!`**: Afirmación de no nulo (puede lanzar `NullPointerException`).
    ```kotlin
    val longitud = textoNulo!!.length // ¡Cuidado!
    ```

## Funciones

* **Declaración de función**:
    ```kotlin
    fun saludar(nombre: String): String {
        return "Hola, $nombre!"
    }
    ```
* **Función de expresión única**:
    ```kotlin
    fun saludar(nombre: String) = "Hola, $nombre!"
    ```
* **Funciones de orden superior**: Funciones que toman o devuelven otras funciones.
    ```kotlin
    fun procesar(valor: Int, transformacion: (Int) -> String): String {
        return transformacion(valor)
    }
    ```
* **Lambdas**: Funciones anónimas.
    ```kotlin
    val cuadrado: (Int) -> Int = { it * it }
    ```

## Clases y Objetos

* **Clase**:
    ```kotlin
    class Coche(val marca: String, var modelo: String) {
        fun acelerar() {
            println("Acelerando $marca $modelo")
        }
    }
    ```
* **Data class**: Clases para datos (generan `equals()`, `hashCode()`, etc.).
    ```kotlin
    data class Usuario(val nombre: String, val edad: Int)
    ```
* **Herencia**:
    ```kotlin
    open class Animal(val nombre: String) {
        open fun hacerSonido() { println("Sonido") }
    }
    class Perro(nombre: String) : Animal(nombre) {
        override fun hacerSonido() { println("Guau!") }
    }
    ```
* **Interfaces**:
    ```kotlin
    interface Clickable {
        fun click()
    }
    ```
* **Objetos singleton**: Instancias únicas.
    ```kotlin
    object Configuracion {
        val API_KEY = "clave_secreta"
    }
    ```
* **Clases selladas (`sealed class`)**: Jerarquías restringidas.
    ```kotlin
    sealed class Resultado {
        class Exito(val mensaje: String) : Resultado()
        class Error(val error: String) : Resultado()
    }
    ```

## Estructuras de Control

* **`if` / `else`**:
    ```kotlin
    if (x > 0) { println("Positivo") } else { println("Negativo") }
    ```
* **`when`**: Similar a `switch` en otros lenguajes.
    ```kotlin
    when (x) {
        1 -> println("Uno")
        in 2..10 -> println("Entre 2 y 10")
        else -> println("Otro")
    }
    ```
* **`for`**:
    ```kotlin
    for (i in 1..5) { println(i) }
    ```
* **`while`**:
    ```kotlin
    while (x > 0) { x-- }
    ```

## Colecciones

* **Listas**:
    ```kotlin
    val lista = listOf(1, 2, 3)
    val listaMutable = mutableListOf(1, 2, 3)
    ```
* **Mapas**:
    ```kotlin
    val mapa = mapOf("a" to 1, "b" to 2)
    val mapaMutable = mutableMapOf("a" to 1, "b" to 2)
    ```
* **Conjuntos**:
    ```kotlin
    val conjunto = setOf(1, 2, 3)
    val conjuntoMutable = mutableSetOf(1, 2, 3)
    ```
* **Operaciones**: `map`, `filter`, `reduce`, etc.
    ```kotlin
    val dobles = lista.map { it * 2 }
    val pares = lista.filter { it % 2 == 0 }
    val suma = lista.reduce { acc, i -> acc + i }
    ```

## Corrutinas

* **`suspend`**: Marca una función como suspendible.
    ```kotlin
    suspend fun tareaLarga(): String { /* ... */ }
    ```
* **`launch`**: Inicia una corrutina.
    ```kotlin
    GlobalScope.launch { tareaLarga() }
    ```
* **`async`**: Inicia una corrutina que devuelve un valor.
    ```kotlin
    val resultado = GlobalScope.async { tareaLarga() }
    resultado.await()
    ```
* **`Flow`**: Secuencias asíncronas de datos.
    ```kotlin
    fun flujo(): Flow<Int> = flow { /* ... */ }
    ```

## Extensiones

* **Funciones de extensión**: Agregar métodos a clases existentes.
    ```kotlin
    fun String.contarVocales(): Int {
        return this.count { it in "aeiouAEIOU" }
    }
    "Kotlin".contarVocales()
    ```

Espero que este cheatsheet te sea de gran utilidad. ¡Kotlin es un lenguaje poderoso y conciso!