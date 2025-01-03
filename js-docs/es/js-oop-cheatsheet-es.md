# JavaScript (OOP) - Cheatsheet

## **Conceptos básicos de POO**

### 1. **Clases**
Las clases son plantillas para crear objetos.

```javascript
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
  }
}

// Ejemplo de uso (Objeto)
const persona1 = new Persona('Juan', 30);
persona1.saludar();
```

### 2. **Objetos**
Son instancias de una clase.

```javascript
const persona2 = new Persona('Ana', 25);
console.log(persona2.nombre); // Ana
```

---

## **Pilares de la POO**

### 1. **Encapsulación**
Permite ocultar datos internos y exponer solo lo necesario.

```javascript
class Banco {
  constructor(saldo) {
    let _saldo = saldo; // Propiedad privada

    this.getSaldo = function() {
      return _saldo;
    };

    this.depositar = function(cantidad) {
      if (cantidad > 0) _saldo += cantidad;
    };
  }
}

const cuenta = new Banco(1000);
console.log(cuenta.getSaldo()); // 1000
cuenta.depositar(500);
console.log(cuenta.getSaldo()); // 1500
```

### 2. **Herencia**
Permite que una clase hija herede propiedades y métodos de una clase padre.

```javascript
class Animal {
  constructor(nombre) {
    this.nombre = nombre;
  }

  hacerSonido() {
    console.log('Sonido genérico');
  }
}

class Perro extends Animal {
  hacerSonido() {
    console.log('Guau guau');
  }
}

const miPerro = new Perro('Firulais');
miPerro.hacerSonido(); // Guau guau
```

### 3. **Polimorfismo**
Permite redefinir métodos en las clases hijas.

```javascript
class Figura {
  calcularArea() {
    return 0;
  }
}

class Cuadrado extends Figura {
  constructor(lado) {
    super();
    this.lado = lado;
  }

  calcularArea() {
    return this.lado ** 2;
  }
}

const cuadrado = new Cuadrado(4);
console.log(cuadrado.calcularArea()); // 16
```

### 4. **Abstracción**
Consiste en definir los aspectos esenciales sin incluir detalles complejos.

```javascript
class Vehiculo {
  constructor(tipo) {
    this.tipo = tipo;
  }

  moverse() {
    console.log(`El ${this.tipo} se está moviendo.`);
  }
}

class Coche extends Vehiculo {
  moverse() {
    console.log('El coche está conduciendo en la carretera.');
  }
}

const miCoche = new Coche('automóvil');
miCoche.moverse();
```

---

## **Características adicionales**

### 1. **Métodos estáticos**
Los métodos estáticos pertenecen a la clase, no a las instancias.

```javascript
class Utilidades {
  static sumar(a, b) {
    return a + b;
  }
}

console.log(Utilidades.sumar(5, 7)); // 12
```

### 2. **Getters y Setters**
Permiten definir métodos como propiedades.

```javascript
class Rectangulo {
  constructor(ancho, alto) {
    this.ancho = ancho;
    this.alto = alto;
  }

  get area() {
    return this.ancho * this.alto;
  }

  set modificarAncho(nuevoAncho) {
    this.ancho = nuevoAncho;
  }
}

const rect = new Rectangulo(10, 5);
console.log(rect.area); // 50
rect.modificarAncho = 20;
console.log(rect.area); // 100
```

### 3. **Propiedades privadas**
Desde ES2022 se pueden definir propiedades privadas con `#`.

```javascript
class Cuenta {
  #saldo;

  constructor(saldoInicial) {
    this.#saldo = saldoInicial;
  }

  getSaldo() {
    return this.#saldo;
  }
}

const cuentaPrivada = new Cuenta(1000);
console.log(cuentaPrivada.getSaldo()); // 1000
```

### 4. **Clases abstractas**
Aunque no existen como tal en JavaScript, se pueden simular mediante clases base.

```javascript
class Figura {
  constructor() {
    if (new.target === Figura) {
      throw new Error('No se puede instanciar una clase abstracta.');
    }
  }

  calcularArea() {
    throw new Error('Método calcularArea debe ser implementado.');
  }
}

class Triangulo extends Figura {
  constructor(base, altura) {
    super();
    this.base = base;
    this.altura = altura;
  }

  calcularArea() {
    return (this.base * this.altura) / 2;
  }
}

const triangulo = new Triangulo(10, 5);
console.log(triangulo.calcularArea()); // 25
```

---

## **Beneficios de usar POO en JavaScript**
- **Reutilización de código:** Gracias a la herencia y los métodos reutilizables.
- **Modularidad:** Las clases ayudan a estructurar mejor el código.
- **Mantenimiento:** Más fácil de depurar y extender funcionalidades.
- **Legibilidad:** El código se vuelve más intuitivo y organizado.

---