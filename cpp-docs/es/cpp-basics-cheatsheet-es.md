# Curso de Programación en C++ 🚀

## Introducción
C++ es un lenguaje de programación de uso general que extiende el lenguaje C con características de programación orientada a objetos. Es ampliamente utilizado en sistemas embebidos, desarrollo de videojuegos, aplicaciones de alto rendimiento y software de sistemas.

## Módulo 1: Introducción a C++

### 1.1. Instalación de un compilador 🖥️
Para comenzar a programar en C++, necesitas un compilador. Algunas opciones populares son:
- GCC (GNU Compiler Collection)
- Microsoft Visual C++
- Clang

#### Instalación en Windows 🏁
1. Descarga [MinGW](https://www.mingw-w64.org/) o [MSYS2](https://www.msys2.org/).
2. Instala el paquete de compilación con:
   ```sh
   pacman -S mingw-w64-ucrt-x86_64-gcc
   ```
3. Configura las variables de entorno agregando la ruta del compilador.
4. Verifica la instalación ejecutando:
   ```sh
   g++ --version
   ```

### 1.2. Estructura básica de un programa en C++ 📜
Un programa simple en C++ se ve así:

```cpp
#include <iostream>  // Biblioteca para entrada y salida de datos

int main() {
    std::cout << "Hola, mundo!" << std::endl;  // Imprime un mensaje en consola
    return 0;  // Indica que el programa terminó correctamente
}
```

### 1.3. Compilación y ejecución ▶️
Para compilar el programa anterior usando GCC:
```sh
g++ programa.cpp -o programa
./programa
```

## Módulo 2: Variables y Tipos de Datos 📊

### 2.1. Declaración de variables ✍️
En C++, las variables deben declararse con un tipo de dato. Ejemplo:
```cpp
#include <iostream>

int main() {
    int edad = 25;         // Entero
    double altura = 1.75;  // Número decimal
    char inicial = 'E';    // Carácter
    bool esMayor = true;   // Booleano

    std::cout << "Edad: " << edad << std::endl;
    std::cout << "Altura: " << altura << " metros" << std::endl;
    std::cout << "Inicial: " << inicial << std::endl;
    std::cout << "Es mayor de edad: " << esMayor << std::endl;
    return 0;
}
```

### 2.2. Tipos de datos principales 📌
| Tipo    | Descripción          | Ejemplo |
|---------|------------------|---------|
| int     | Enteros         | 10      |
| float   | Decimal simple  | 10.5f   |
| double  | Decimal doble   | 10.5    |
| char    | Carácter        | 'A'     |
| bool    | Booleano        | true/false |
| string  | Texto (requiere `<string>`) | "Hola" |

## Módulo 3: Operadores y Expresiones 🔢

### 3.1. Operadores aritméticos ➕➖✖️➗
```cpp
#include <iostream>

int main() {
    int a = 10, b = 5;
    std::cout << "Suma: " << (a + b) << std::endl;
    std::cout << "Resta: " << (a - b) << std::endl;
    std::cout << "Multiplicación: " << (a * b) << std::endl;
    std::cout << "División: " << (a / b) << std::endl;
    std::cout << "Módulo: " << (a % b) << std::endl;
    return 0;
}
```

### 3.2. Operadores de comparación 🔄
Estos operadores devuelven un valor booleano (`true` o `false`).
```cpp
#include <iostream>

int main() {
    int x = 10, y = 20;
    std::cout << (x == y) << std::endl;  // Igualdad
    std::cout << (x != y) << std::endl;  // Diferencia
    std::cout << (x < y) << std::endl;   // Menor que
    std::cout << (x > y) << std::endl;   // Mayor que
    return 0;
}
```

## Módulo 4: Estructuras de Control 🔁

### 4.1. Condicionales `if-else` ⚖️
```cpp
#include <iostream>

int main() {
    int numero;
    std::cout << "Ingresa un numero: ";
    std::cin >> numero;

    if (numero > 0) {
        std::cout << "El numero es positivo." << std::endl;
    } else if (numero < 0) {
        std::cout << "El numero es negativo." << std::endl;
    } else {
        std::cout << "El numero es cero." << std::endl;
    }
    return 0;
}
```

### 4.2. Bucles (`for`, `while`, `do-while`) 🔄

#### Bucle `for`
```cpp
#include <iostream>

int main() {
    for (int i = 1; i <= 5; i++) {
        std::cout << "Iteracion " << i << std::endl;
    }
    return 0;
}
```

#### Bucle `while`
```cpp
#include <iostream>

int main() {
    int contador = 1;
    while (contador <= 5) {
        std::cout << "Iteracion " << contador << std::endl;
        contador++;
    }
    return 0;
}
```

#### Bucle `do-while`
```cpp
#include <iostream>

int main() {
    int numero;
    do {
        std::cout << "Ingresa un numero positivo: ";
        std::cin >> numero;
    } while (numero <= 0);

    std::cout << "Numero ingresado: " << numero << std::endl;
    return 0;
}
```

## Conclusión 🎯
Este curso cubre los conceptos básicos de C++. En futuros módulos, veremos temas como funciones, estructuras de datos, programación orientada a objetos y más.

¡Sigue practicando y feliz codificación! 🚀

