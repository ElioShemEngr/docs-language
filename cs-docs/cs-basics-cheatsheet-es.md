
---

## 🧱 Estructura Básica

```csharp
// Archivo: Program.cs
using System;

class Program {
    static void Main(string[] args) {
        Console.WriteLine("¡Hola, C#!");
    }
}
```

- `using System;`: Usamos `System` para acceder a la consola y otras funcionalidades.
- `Main`: Método principal, punto de entrada de la aplicación.

---

## 🔤 Tipos de Datos

```csharp
int edad = 30;                 // Entero
double precio = 19.99;         // Decimal
char inicial = 'A';            // Carácter
bool activo = true;            // Booleano
string nombre = "Elio";        // Cadena de texto (objeto)
```
> C# es un lenguaje fuertemente tipado. No hay inferencia de tipo como en Python, a menos que uses `var`.

---

## 🔁 Estructuras de Control

### Condicionales

```csharp
if (edad >= 18) {
    Console.WriteLine("Mayor de edad");
} else {
    Console.WriteLine("Menor de edad");
}
```

### Switch

```csharp
int dia = 2;
switch (dia) {
    case 1:
        Console.WriteLine("Lunes");
        break;
    case 2:
        Console.WriteLine("Martes");
        break;
    default:
        Console.WriteLine("Otro día");
        break;
}
```

### Bucles

```csharp
// For
for (int i = 0; i < 5; i++) {
    Console.WriteLine(i);
}

// While
int i = 0;
while (i < 5) {
    Console.WriteLine(i++);
}

// Do-While
do {
    Console.WriteLine(i--);
} while (i > 0);
```

---

## 📦 Arrays y Colecciones

### Arrays

```csharp
int[] numeros = {1, 2, 3, 4};
Console.WriteLine(numeros[0]);  // Acceder al primer elemento
```

### List (List<T>)

```csharp
using System.Collections.Generic;

List<string> frutas = new List<string>();
frutas.Add("Manzana");
frutas.Add("Banana");
frutas.Remove("Banana");
Console.WriteLine(frutas.Count);
```

### Dictionary (Dictionary<TKey, TValue>)

```csharp
using System.Collections.Generic;

Dictionary<string, int> edades = new Dictionary<string, int>();
edades.Add("Ana", 25);
Console.WriteLine(edades["Ana"]);
```

---

## 🧰 Métodos

```csharp
public static int Sumar(int a, int b) {
    return a + b;
}
```

- `static`: No requiere instancia de la clase.
- `void`: Sin valor de retorno.
- Puedes sobrecargar métodos (mismo nombre, diferentes parámetros).

---

## 🧱 Clases y Objetos

```csharp
class Persona {
    public string nombre;
    public int edad;

    // Constructor
    public Persona(string nombre, int edad) {
        this.nombre = nombre;
        this.edad = edad;
    }

    // Método
    public void Saludar() {
        Console.WriteLine($"Hola, soy {nombre}");
    }
}

// Instanciación
Persona p = new Persona("Elio", 22);
p.Saludar();
```

---

## 🧬 Herencia, Interfaces y Abstracción

```csharp
// Clase Base
public class Animal {
    public virtual void Hablar() {
        Console.WriteLine("Hace un sonido");
    }
}

// Subclase
public class Perro : Animal {
    public override void Hablar() {
        Console.WriteLine("Guau");
    }
}

// Interfaz
public interface IVolar {
    void Volar();
}

public class Pajaro : IVolar {
    public void Volar() {
        Console.WriteLine("Volando alto");
    }
}
```

---

## 🧹 Excepciones

```csharp
try {
    int x = 5 / 0;
} catch (DivideByZeroException e) {
    Console.WriteLine("Error: división por cero");
} finally {
    Console.WriteLine("Siempre se ejecuta");
}
```

> Usa `throws` en métodos que propaguen excepciones: `public void Leer() throws IOException`.

---

## 🗃️ Archivos (System.IO)

```csharp
using System.IO;

// Escribir archivo
File.WriteAllText("archivo.txt", "Hola, archivo");

// Leer archivo
string contenido = File.ReadAllText("archivo.txt");
Console.WriteLine(contenido);
```

---

## ⌛ Fechas y Horas (System.DateTime)

```csharp
DateTime hoy = DateTime.Now;
DateTime mañana = hoy.AddDays(1);

Console.WriteLine(hoy);        // 2025-04-05 14:30:00
Console.WriteLine(mañana);     // 2025-04-06 14:30:00
```

---

## 📦 Paquetes y Modificadores de Acceso

```csharp
namespace MiEmpresa {
    public class Cliente {
        public string nombre;   // Accesible desde cualquier lugar
        private int edad;       // Solo dentro de la clase
        protected double saldo; // Accesible en subclases
    }
}
```

---

## 🧵 Hilos y Concurrencia

```csharp
using System.Threading;

Thread t = new Thread(() => {
    Console.WriteLine("Ejecutando hilo");
});
t.Start();  // Inicia el hilo
```

> Usa `Task`, `async` y `await` para un manejo más avanzado de la concurrencia.

---

## 🧪 Clases Útiles

```csharp
Math.Sqrt(25);                // 5.0
int.Parse("456");             // 456
string.Format("{0} tiene {1} años", "Elio", 22);
```

---

## 🧭 Programación Funcional (LINQ y Lambdas)

```csharp
using System.Linq;

var nums = new List<int> {1, 2, 3, 4};
var pares = nums.Where(n => n % 2 == 0).ToList();

foreach(var numero in pares) {
    Console.WriteLine(numero);
}
```

> `LINQ`, `lambda expressions`, `IEnumerable<T>` son poderosas herramientas en C# para programación funcional.

---

## 🧱 Patrón Singleton (Ejemplo Clásico)

```csharp
public class Config {
    private static Config instancia;
    private Config() {}

    public static Config ObtenerInstancia() {
        if (instancia == null) {
            instancia = new Config();
        }
        return instancia;
    }
}
```

---

## 🧰 Compilar y Ejecutar

```bash
csc Program.cs     # Compilar
mono Program.exe   # Ejecutar (si usas Mono)
```

---

## 📚 Recursos Recomendados

- [Documentación oficial de C#](https://learn.microsoft.com/en-us/dotnet/csharp/)
- Libro: *C# in Depth* – Jon Skeet
- IDEs: Visual Studio, Visual Studio Code, JetBrains Rider

---

> 💬 *"Aprender C# es como aprender a construir aplicaciones de alto rendimiento con una sintaxis moderna y sencilla."*
