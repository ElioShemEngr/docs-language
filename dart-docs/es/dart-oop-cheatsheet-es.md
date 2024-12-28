# DART (OOP) - Cheatsheet 🖥️

### 1. CLASES Y OBJETOS
```dart
// Definición de una clase
class Persona {
  String nombre;
  int edad;

  // Constructor
  Persona(this.nombre, this.edad);

  // Método de la clase
  void saludar() {
    print("Hola, me llamo $nombre y tengo $edad años.");
  }
}

// Creación de un objeto (instancia de la clase)
Persona persona1 = Persona("Juan", 25);
persona1.saludar();  // Imprime: Hola, me llamo Juan y tengo 25 años.
```

### 2. ATRIBUTOS Y METODOS
#### Atributos: Son las variables que representan el estado de una clase (también llamados propiedades o campos).
#### Métodos: Son las funciones dentro de una clase que definen el comportamiento.
```dart
class Coche {
  String marca;
  int velocidad;

  // Constructor
  Coche(this.marca, this.velocidad);

  // Método para acelerar
  void acelerar() {
    velocidad += 10;
    print("$marca acelera a $velocidad km/h");
  }
}

// Crear un objeto de la clase Coche
Coche coche1 = Coche("Toyota", 100);
coche1.acelerar();  // Imprime: Toyota acelera a 110 km/h
```

### 3. CONSTRUCTORES

Un constructor es una función especial utilizada para inicializar los objetos de una clase. En Dart, hay varios tipos de constructores:

#### 3.1 Constructor por Defecto
```dart
class Persona {
  String nombre;
  int edad;

  // Constructor con parámetros posicionales
  Persona(this.nombre, this.edad);
}

Persona p = Persona("Ana", 28);  // Crea el objeto con nombre "Ana" y edad 28
```

#### 3.2 Constructor Nombrado
```dart
class Persona {
  String nombre;
  int edad;

  // Constructor principal
  Persona(this.nombre, this.edad);

  // Constructor nombrado
  Persona.sinEdad(this.nombre) : edad = 0;  // La edad se inicializa a 0
}

Persona p1 = Persona("Pedro", 40);   // Usa el constructor principal
Persona p2 = Persona.sinEdad("Luis");  // Usa el constructor sin edad
```

### 4. ENCAPSULAMIENTO
El encapsulamiento es el principio de ocultar los detalles internos de una clase y exponer solo lo necesario. En Dart, los atributos privados se definen utilizando un guion bajo (_).

```dart
class Banco {
  String _nombreCliente;
  double _saldo;

  Banco(this._nombreCliente, this._saldo);

  // Método para obtener el saldo (getter)
  double get saldo => _saldo;

  // Método para depositar dinero
  void depositar(double cantidad) {
    _saldo += cantidad;
    print("Depósito realizado. Nuevo saldo: $_saldo");
  }

  // Método para retirar dinero (con validación)
  void retirar(double cantidad) {
    if (cantidad <= _saldo) {
      _saldo -= cantidad;
      print("Retiro realizado. Nuevo saldo: $_saldo");
    } else {
      print("Saldo insuficiente.");
    }
  }
}

Banco cuenta = Banco("Juan", 1000);
cuenta.depositar(500);  // Imprime: Depósito realizado. Nuevo saldo: 1500
cuenta.retirar(2000);   // Imprime: Saldo insuficiente.
```

### 5. HERENCIA
La herencia permite que una clase (subclase) adquiera las propiedades y métodos de otra clase (superclase).

```dart
// Clase base (superclase)
class Animal {
  void hacerSonido() {
    print("El animal hace un sonido.");
  }
}

// Clase derivada (subclase)
class Perro extends Animal {
  @override
  void hacerSonido() {
    print("El perro ladra.");
  }
}

Perro miPerro = Perro();
miPerro.hacerSonido();  // Imprime: El perro ladra.
```

### 6. POLIMORFISMO
El polimorfismo permite que una subclase sobrescriba o extienda el comportamiento de la superclase.

#### 6.1 Sobrescritura de Métodos `(@override)`
```dart
class Vehiculo {
  void encender() {
    print("El vehículo se enciende.");
  }
}

class Coche extends Vehiculo {
  @override
  void encender() {
    print("El coche se enciende con la llave.");
  }
}

Coche miCoche = Coche();
miCoche.encender();  // Imprime: El coche se enciende con la llave.
```

#### 6.2 Polimorfismo con Interfaces
En Dart, todas las clases pueden actuar como interfaces.

```dart
class Volador {
  void volar() {
    print("Volando...");
  }
}

class Avion implements Volador {
  @override
  void volar() {
    print("El avión está volando a gran altura.");
  }
}

Volador avion = Avion();
avion.volar();  // Imprime: El avión está volando a gran altura.
```

### 7. ABSTRACCION
La abstracción oculta los detalles de implementación y solo expone las funcionalidades esenciales. En Dart, las clases abstractas no se pueden instanciar directamente.

```dart
// Clase abstracta
abstract class Figura {
  // Método abstracto
  double calcularArea();
}

// Subclase concreta
class Circulo extends Figura {
  double radio;

  Circulo(this.radio);

  // Implementación del método abstracto
  @override
  double calcularArea() {
    return 3.14 * radio * radio;
  }
}

Circulo miCirculo = Circulo(5);
print(miCirculo.calcularArea());  // Imprime: 78.5
```

### 8. MIXINS
Un mixin es una forma de compartir funcionalidad entre clases sin usar herencia. Se utilizan con la palabra clave `with`.

```dart
mixin Volar {
  void volar() {
    print("Estoy volando.");
  }
}

mixin Nadar {
  void nadar() {
    print("Estoy nadando.");
  }
}

// Clase que utiliza mixins
class Pato with Volar, Nadar {}

Pato pato = Pato();
pato.volar();  // Imprime: Estoy volando.
pato.nadar();  // Imprime: Estoy nadando.
```

### 9. GETTERS Y SETTERS
Los getters y setters permiten controlar el acceso a los atributos de una clase, proporcionando encapsulamiento adicional.

```dart
class Rectangulo {
  double _ancho;
  double _alto;

  Rectangulo(this._ancho, this._alto);

  // Getter para obtener el área
  double get area => _ancho * _alto;

  // Setter para modificar el ancho (con validación)
  set ancho(double valor) {
    if (valor > 0) {
      _ancho = valor;
    } else {
      print("El ancho debe ser positivo.");
    }
  }
}

Rectangulo rect = Rectangulo(10, 5);
print(rect.area);  // Imprime: 50

rect.ancho = -3;   // Imprime: El ancho debe ser positivo.
rect.ancho = 20;
print(rect.area);  // Imprime: 100
```

### 10. STATIC
Los miembros `static` pertenecen a la clase en lugar de a las instancias de la clase.

```dart
class Calculadora {
  static int sumar(int a, int b) {
    return a + b;
  }
}

int resultado = Calculadora.sumar(10, 5);
print(resultado);  // Imprime: 15
```

### 11. FINAL Y CONST

#### `final`: Se usa para declarar variables cuyo valor no puede ser reasignado después de inicializado (en tiempo de ejecución).

#### `const`: Se usa para declarar constantes cuyo valor es fijo en tiempo de compilación.

```dart
class Punto {
  final int x;
  final int y;

  // Constructor constante
  const Punto(this.x, this.y);
}

final Punto p1 = Punto(10, 20);   // Se asigna en tiempo de ejecución
const Punto p2 = Punto(5, 15);    // Constante en tiempo de compilación
```

### 12. RESUMEN
1. ***Clases y Objetos***: Plantillas y sus instancias.
2. ***Encapsulamiento***: Control de acceso a los atributos y métodos.
3. ***Herencia***: Reutilización de código de una clase a otra.
4. ***Polimorfismo***: Subclases pueden redefinir métodos de la superclase.
5. ***Abstracción***: Ocultar los detalles y mostrar solo las funcionalidades esenciales.
6. ***Mixins***: Reutilización de código sin herencia.
7. ***Static***: Métodos y atributos que pertenecen a la clase en vez de a instancias.
8. ***Final y Const***: Inmutabilidad en variables.