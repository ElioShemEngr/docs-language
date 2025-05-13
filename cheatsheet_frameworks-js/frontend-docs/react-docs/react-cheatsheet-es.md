# 📌 **React CheatSheet**

Para poder usar la Biblioteca de React en local necesitaremos instalar `Node.js` y `React`:

## 📦 **Instalación de Node.js**

Podemos descargar el instalador de `Node.js` desde su pagina oficial: 
https://nodejs.org/en
```bash
# Ver la version de node en la terminal
node -v
```

## 📦 **Instalación de React**

Podemos ir a la pagina ofical de React en: https://es.react.dev/
```bash
# Crear un nuevo proyecto con Vite
npm create vite@latest my-app --template react

# O con Create React App
npx create-react-app my-app

# Navegar al proyecto e instalar dependencias
cd my-app
npm install

# Ejecutar el servidor de desarrollo
npm run dev # Para Vite
npm start  # Para CRA
```
## 🐤 **Introduccion a JSX**
> JavaScript XML = JSX

Se trata de una extension de React para la sintaxis de JavaScript.

Nos permite describir en JavaScript como se veran los componentes usando una estructura similar a HTML.

```jsx
const elemento = <h1>¡Hola, mundo!</h1>;
```
### 1. Elementos en JSX
- Son las unidades mas pequeñas en React. Definen lo que se ve en la pantalla.
- Con JSX, puedes crear y usar cualquier elemento HTML.
- EN JSX los elementos HTML se representan con etiquetas en letras minusculas.

#### Atributos
Podemos agregar atributos a los elementos en JSX para especificar ciertas caracteristicas.

#### *Diferencias HTML y JSX*

Pero algunos atributos se escriben de manera distinta si los comparamos con HTML.

Ejemplo:

En `HTML` el atributo clase se muestra como : `<h1 class="titulo-azul"></h1>`

En `JSX` el atributo clase se muestra como : `<h1 className="titulo-azul"></h1>`

Otro Ejemplo:

En `HTML` el atributo clase se muestra como : `<label for="css">CSS</label>`

En `JSX` el atributo clase se muestra como : `<label htmlFor="css">CSS</label>`

> Esta diferencia se debe a que ya existe una palabra reservada en JavaScript para class y for.

#### *Diferencias CSS y JSX*

EL Atributo `style` acepta un objeto JavaScript con propiedades CSS escritas en `camelCase`

Ejemplo:

En `CSS` : background-image

En `JSX` : backgroundImage

Otro Ejemplo:

En `CSS` : font-family

En `JSX` : fontFamily

```jsx
// Estilos guardados en una constante
const estiloDiv = {
  color: 'yellow',
  backgroundColor: 'black'
};

<div style={estiloDiv}>Hola, Mundo!</div>

// Otra alternativa
<div style={{color: 'yellow'}}>Hola, Mundo!</div>
```

### 2. Componentes
- Los componentes en React estan formados por elementos.
- En JSX los componentes definidos por el usuario comienzan con una letra mayuscula.
> Veremos los conceptos de componentes a mas detalles mas abajo.

#### Estructura de un Componente en JSX
Al igual que en HTML, los elementos pueden ser anidados en JSX para formar estructuras mas complejas.


### 3. React DOM
Paquete que facilita la interaccion y actualizacion del DOM en aplicaciones de React.

> DOM = Document Object Model.

Representacion en el navegador de todos los elementos que conforman una pagina o aplicacion web.

Ejemplo:
```jsx
import ReactDOM from 'react-dom';

const elemento = <h1>Hola, Mundo!</h1>

ReactDOM.Render(
  elemento,
  document.getElementByID('root')
)
```

### 4. JavaScript en JSX
Se usan `{codigo de JavaScript}` para incluir codigo de JavaScript.

```jsx
// Ejemplo 01
let adjetivo = "Interesante";

<p>React es {adjetivo}</p>

// Ejemplo 02
<p>El resultado es : {5 * 6}</p>

// Ejemplo 03
let nombre = "Gino";

<p>El resultado es : {nombre.toUpperCase()}</p>
```

## 🚨 **Conceptos Basicos**
### 1. Componentes 🌱
Los componentes son la base de React. Son funciones o clases que devuelven elementos JSX (HTML dentro de JavaScript) y permiten construir la interfaz de usuario dividiéndola en partes reutilizables.

- Debe retornar un elemento de React (JSX)
- Debe comenzar con una letra mayuscula
- Puede recibir valores si es necesario

### 🔹 Componente Funcional

```jsx
import React from "react";

// Definición de un componente funcional
const Saludo = () => {
  return <h1>¡Hola, mundo!</h1>;
};

export default Saludo;
```
  > Este componente simplemente devuelve un encabezado con un mensaje.

### 🔹 Componente de Clase (Obsoleto desde React 18)

```jsx
import React, { Component } from "react";

class Saludo extends Component {
  render() {
    return <h1>¡Hola, mundo!</h1>;
  }
}

export default Saludo;
```


### 2. Props 🎯
Los `props` son valores que los componentes reciben como parametros y permiten pasar datos de un componente padre a un componente hijo.

Ejemplo con Props:
```jsx
// Definicion de un componente funcional
function Saludo(props){
  return <h1>¡Hola, {props.nombre}!</h1>;
}

// Uso del componente con una prop
<Saludo nombre="Juan" />
```
> Aquí, `nombre="Juan"` es una `prop` que se pasa al componente Saludo.


### 3. Estados 🏗️
El estado permite que los componentes almacenen y administren datos internos que pueden cambiar con el tiempo. 


#### `useState`
Para manejar el estado en componentes funcionales, usamos el hook `useState`.

Ejemplo:
```jsx
import { useState } from "react";

const Contador = () => {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
    </div>
  );
};

export default Contador;
```
> Aquí, `contador` es el estado, y `setContador` es la función que lo actualiza.


### 4. Hooks
Los `Hooks` son funciones especiales de React que permiten usar caracteristicas como el estado y el ciclo de vida en componentes funcionales. Algunos de los mas importantes son:

- `useState`: Para manejar el estado.
- `useEffect`: Para manejar efectos secundarios (como peticiones a APIs).
- `useContext`: Para usar el contexto global de React.
- `useRef`: Para manipular referencias a elementos del DOM.


#### `useEffect`
Ejemplo de `useEffect` (se ejecuta cuando el componente se monta):
```jsx
import { useEffect } from "react";

function MiComponente() {
  useEffect(() => {
    console.log("El componente se montó");

    return () => {
      console.log("El componente se desmontó");
    };
  }, []);

  return <h1>Hola desde UseEffect</h1>;
}
```

### 5. Event Handlers 🔗
Los manejadores de eventos permiten responder a acciones del usuario, como clics o cambios en inputs.

Ejemplo de evento `onClick`:
```jsx
const Boton = () => {
  const manejarClick = () => alert("¡Botón presionado!");

  return <button onClick={manejarClick}>Haz clic aquí</button>;
};

export default Boton;
```
> Aquí, la función `manejarClick` se ejecuta cuando el usuario hace clic en el botón.


## Conceptos Generales
## 1. Renderizado Condicional 🎭

```jsx
const Mensaje = ({ esAdmin }) => {
  return <p>{esAdmin ? "Eres administrador" : "Eres usuario"}</p>;
};
```

---

## 🔄 Listas y Keys

```jsx
const ListaNombres = ({ nombres }) => {
  return (
    <ul>
      {nombres.map((nombre, index) => (
        <li key={index}>{nombre}</li>
      ))}
    </ul>
  );
};
```

---

## 2. Formularios y Eventos 📤

```jsx
import { useState } from "react";

const Formulario = () => {
  const [input, setInput] = useState("");

  const manejarCambio = (e) => setInput(e.target.value);
  const manejarEnvio = (e) => {
    e.preventDefault();
    alert("Enviado: " + input);
  };

  return (
    <form onSubmit={manejarEnvio}>
      <input type="text" value={input} onChange={manejarCambio} />
      <button type="submit">Enviar</button>
    </form>
  );
};
```

---

## 3. Context API 📦

```jsx
import { createContext, useContext, useState } from "react";

const TemaContexto = createContext();

const ProveedorTema = ({ children }) => {
  const [tema, setTema] = useState("claro");
  return (
    <TemaContexto.Provider value={{ tema, setTema }}>
      {children}
    </TemaContexto.Provider>
  );
};

const BotonTema = () => {
  const { tema, setTema } = useContext(TemaContexto);
  return (
    <button onClick={() => setTema(tema === "claro" ? "oscuro" : "claro")}>
      Cambiar a {tema === "claro" ? "oscuro" : "claro"}
    </button>
  );
};
```

---

## 4. React Router (Navegación)🚦

```jsx
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const Home = () => <h2>Inicio</h2>;
const About = () => <h2>Acerca de</h2>;

export default function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/about">Acerca de</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}
```

---

## 5. fetch API en React (Consumo de API) 📦

```jsx
import { useEffect, useState } from "react";

const Usuarios = () => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsuarios(data));
  }, []);

  return (
    <ul>
      {usuarios.map((usuario) => (
        <li key={usuario.id}>{usuario.name}</li>
      ))}
    </ul>
  );
};
```

---

## 6. Conclusión 🏁
Este **cheatsheet** cubre los conceptos esenciales de React con ejemplos prácticos. ¡Sigue practicando y creando aplicaciones increíbles! 🚀
