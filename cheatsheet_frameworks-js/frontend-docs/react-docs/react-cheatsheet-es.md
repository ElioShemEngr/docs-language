# 📌 React Cheat Sheet

## 📦 Instalación de React

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

---

## 🌱 Componentes en React

### 🔹 Componente Funcional

```jsx
import React from "react";

// Definición de un componente funcional
const Saludo = () => {
  return <h1>¡Hola, mundo!</h1>;
};

export default Saludo;
```

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

---

## 🎯 Props en React

```jsx
const Mensaje = ({ nombre }) => {
  return <p>Hola, {nombre}!</p>;
};

export default function App() {
  return <Mensaje nombre="Elio" />;
}
```

---

## 🏗️ Estado en React (useState)

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

---

## 🔄 Ciclo de Vida (useEffect)

```jsx
import { useEffect, useState } from "react";

const Temporizador = () => {
  const [segundos, setSegundos] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setSegundos((s) => s + 1);
    }, 1000);

    return () => clearInterval(intervalo); // Cleanup al desmontar
  }, []);

  return <p>Segundos: {segundos}</p>;
};

export default Temporizador;
```

---

## 🔗 Manejo de Eventos

```jsx
const Boton = () => {
  const manejarClick = () => alert("¡Botón presionado!");

  return <button onClick={manejarClick}>Haz clic aquí</button>;
};

export default Boton;
```

---

## 🎭 Renderizado Condicional

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

## 📤 Formularios y Eventos

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

## 📦 Context API

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

## 🚦 React Router (Navegación)

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

## 📦 Fetch API en React (Consumo de API)

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

## 🏁 Conclusión
Este **cheatsheet** cubre los conceptos esenciales de React con ejemplos prácticos. ¡Sigue practicando y creando aplicaciones increíbles! 🚀
