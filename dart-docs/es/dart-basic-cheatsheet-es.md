# DART Basics - Cheatsheet 🖥️

### 1. COMENTARIOS
```dart
// Este es un comentario en una linea

/// Este es un comentario para Documentacion

/*
    Este es un comentario
    en multiples
    lineas.
*/
```

### 2. VARIABLES Y TIPOS DE DATOS
```dart
// Declaración de variables
int edad = 25;               // Número entero
double precio = 19.99;        // Número decimal
num altura = 180;             // Puede ser int o double

String nombre = "Juan";       // Cadena de texto
bool esAdulto = true;         // Valor booleano (true o false)

var ciudad = "Madrid";        // Inferencia de tipo (String)
var distancia = 5.5;          // Inferencia de tipo (double)
```

### 3. OPERADORES
```dart
// Operadores aritméticos
int a = 10;
int b = 5;
print(a + b);   // Suma: 15
print(a - b);   // Resta: 5
print(a * b);   // Multiplicación: 50
print(a / b);   // División: 2.0 (double)
print(a % b);   // Módulo: 0 (resto de la división)

// Operadores de comparación
print(a > b);   // true
print(a == b);  // false
print(a != b);  // true

// Operadores lógicos
bool c = true;
bool d = false;
print(c && d);  // false (AND)
print(c || d);  // true (OR)
```

### 4. CONTROL DE FLUJO
#### Condicionales `if`, `else`, `else if`:
```dart
int edad = 18;

if (edad >= 18) {
  print("Es mayor de edad");
} else if (edad >= 13) {
  print("Es adolescente");
} else {
  print("Es menor de edad");
}
```

#### Switch-Case
```dart
String dia = "Lunes";

switch (dia) {
  case "Lunes":
    print("Es el primer día de la semana.");
    break;
  case "Viernes":
    print("Es el último día laboral.");
    break;
  default:
    print("Es otro día.");
}
```

### 5. BUCLES
#### `for`
```dart
for (int i = 0; i < 5; i++) {
  print(i);  // Imprime: 0 1 2 3 4
}
```

#### `while`
```dart
int contador = 0;

while (contador < 5) {
  print(contador);  // Imprime: 0 1 2 3 4
  contador++;
}
```

#### `do-while`
```dart
int contador = 0;

do {
  print(contador);  // Imprime: 0 1 2 3 4
  contador++;
} while (contador < 5);
```

### 6. FUNCIONES
```dart
// Función simple
void saludar(String nombre) {
  print("Hola, $nombre!");
}

saludar("Juan");  // Imprime: Hola, Juan!

// Función que devuelve un valor
int sumar(int a, int b) {
  return a + b;
}

int resultado = sumar(5, 3);
print(resultado);  // Imprime: 8
```

#### Funciones con parametros opcionales y por defecto
```dart
// Parámetros opcionales
void mostrarDatos(String nombre, [int? edad]) {
  if (edad != null) {
    print("Nombre: $nombre, Edad: $edad");
  } else {
    print("Nombre: $nombre, Edad: Desconocida");
  }
}

mostrarDatos("Ana");             // Nombre: Ana, Edad: Desconocida
mostrarDatos("Ana", 25);         // Nombre: Ana, Edad: 25

// Parámetros nombrados con valores por defecto
void mostrarInfo({String nombre = "Anónimo", int edad = 0}) {
  print("Nombre: $nombre, Edad: $edad");
}

mostrarInfo(nombre: "Luis", edad: 30);  // Nombre: Luis, Edad: 30
mostrarInfo();                          // Nombre: Anónimo, Edad: 0
```

### 7. COLECCIONES
#### Listas
```dart
List<String> frutas = ["Manzana", "Banana", "Naranja"];
print(frutas[0]);         // Acceso por índice: Manzana

frutas.add("Fresa");      // Agregar un elemento
print(frutas);            // [Manzana, Banana, Naranja, Fresa]

for (var fruta in frutas) {
  print(fruta);           // Iterar sobre la lista
}
```

#### Sets(conjuntos, sin elementos duplicados)
```dart
Set<int> numeros = {1, 2, 3, 4};
numeros.add(4);           // No se agrega porque ya está en el set
print(numeros);           // {1, 2, 3, 4}
```

#### Mapas(Diccionarios)
```dart
Map<String, String> capitales = {
  "España": "Madrid",
  "Francia": "París"
};

print(capitales["España"]);  // Acceso por clave: Madrid

capitales["Italia"] = "Roma"; // Agregar un nuevo par clave-valor
print(capitales);            // {España: Madrid, Francia: París, Italia: Roma}
```

### 8. CLASES Y OBJETOS
```dart
// Definición de una clase
class Persona {
  String nombre;
  int edad;

  // Constructor
  Persona(this.nombre, this.edad);

  // Método
  void saludar() {
    print("Hola, me llamo $nombre y tengo $edad años.");
  }
}

// Crear una instancia (objeto) de la clase
Persona p = Persona("Carlos", 30);
p.saludar();  // Imprime: Hola, me llamo Carlos y tengo 30 años.
```

### 9. HERENCIA
```dart
// Clase base
class Animal {
  void hacerSonido() {
    print("El animal hace un sonido.");
  }
}

// Clase derivada
class Perro extends Animal {
  @override
  void hacerSonido() {
    print("El perro ladra.");
  }
}

Perro miPerro = Perro();
miPerro.hacerSonido();  // Imprime: El perro ladra.
```

### 10. ASINCRONIA
#### `Future` y `async`/`await`
```dart
// Función asincrónica
Future<String> obtenerDatos() async {
  // Simular una operación asincrónica como una solicitud HTTP
  await Future.delayed(Duration(seconds: 2));
  return "Datos obtenidos";
}

void main() async {
  print("Esperando datos...");
  String datos = await obtenerDatos();
  print(datos);  // Imprime: Datos obtenidos (después de 2 segundos)
}
```

### 11. EXCEPCIONES
```dart
void dividir(int a, int b) {
  try {
    if (b == 0) {
      throw Exception("No se puede dividir entre cero");
    }
    print(a / b);
  } catch (e) {
    print(e);
  }
}

dividir(10, 0);  // Imprime: Exception: No se puede dividir entre cero
```

### 12. NULL SAFETY
```dart
// Variable que permite nulos
String? nombre;   // Puede ser null
nombre = "Juan";
print(nombre);    // Imprime: Juan

// Uso de null check (!) o el operador de acceso condicional (?.)
int? edad;
print(edad?.isEven);  // Evita error si es null: imprime null
```