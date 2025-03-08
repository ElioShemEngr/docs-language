# 📌 Express.js Cheat Sheet

## 📦 Instalación de Express.js

```bash
# Inicializar un proyecto Node.js
npm init -y

# Instalar Express
npm install express
```

---

## 🚀 Servidor Básico en Express.js

```javascript
const express = require('express'); // Importar Express
const app = express(); // Crear una aplicación Express
const port = 3000; // Definir el puerto

// Definir una ruta
app.get('/', (req, res) => {
  res.send('¡Hola, Express!');
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
```

---

## 📁 Estructura de un Proyecto Express.js

```
my-express-app/
│── node_modules/
│── public/
│── routes/
│── views/
│── app.js
│── package.json
│── .env
```

---

## 🏗️ Middleware en Express.js

```javascript
const express = require('express');
const app = express();

// Middleware global (se ejecuta en cada solicitud)
app.use((req, res, next) => {
  console.log(`Solicitud recibida: ${req.method} ${req.url}`);
  next(); // Pasar al siguiente middleware o ruta
});

app.get('/', (req, res) => {
  res.send('Página principal');
});

app.listen(3000, () => console.log('Servidor en http://localhost:3000'));
```

---

## 📤 Rutas en Express.js

### 🔹 Definir Rutas Básicas

```javascript
app.get('/usuario', (req, res) => {
  res.send('Página de usuario');
});

app.post('/usuario', (req, res) => {
  res.send('Usuario creado');
});

app.put('/usuario/:id', (req, res) => {
  res.send(`Usuario ${req.params.id} actualizado`);
});

app.delete('/usuario/:id', (req, res) => {
  res.send(`Usuario ${req.params.id} eliminado`);
});
```

### 🔹 Rutas con Router

```javascript
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Lista de usuarios');
});

router.get('/:id', (req, res) => {
  res.send(`Detalles del usuario ${req.params.id}`);
});

module.exports = router;
```

```javascript
const userRoutes = require('./routes/userRoutes');
app.use('/usuarios', userRoutes);
```

---

## 🔄 Parámetros y Query Strings

### 🔹 Parámetros en la URL

```javascript
app.get('/producto/:id', (req, res) => {
  res.send(`Producto ID: ${req.params.id}`);
});
```

### 🔹 Query Strings

```javascript
app.get('/buscar', (req, res) => {
  res.send(`Buscando: ${req.query.q}`);
});
```

Ejemplo de URL:
```
http://localhost:3000/buscar?q=zapatos
```

---

## 🔥 Servir Archivos Estáticos

```javascript
app.use(express.static('public'));
```

Coloca tus archivos en la carpeta `public/` para que sean accesibles.

---

## 📦 Manejo de JSON y Formularios

```javascript
app.use(express.json()); // Permite recibir JSON
app.use(express.urlencoded({ extended: true })); // Permite recibir datos de formularios
```

Ejemplo de solicitud con JSON:
```javascript
app.post('/datos', (req, res) => {
  res.json({ mensaje: 'Datos recibidos', datos: req.body });
});
```

---

## 🔐 Manejo de Errores

```javascript
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Algo salió mal');
});
```

---

## 📡 Consumo de APIs con Fetch

### 🔹 Frontend (JavaScript en el Navegador)

```javascript
fetch('/usuario/123')
  .then(res => res.text())
  .then(data => console.log(data));
```

### 🔹 Backend (Consumiendo una API Externa)

```javascript
const fetch = require('node-fetch');

app.get('/api/usuarios', async (req, res) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  res.json(data);
});
```

---

## 🛡️ Autenticación con JWT

```bash
npm install jsonwebtoken
```

```javascript
const jwt = require('jsonwebtoken');

app.post('/login', (req, res) => {
  const user = { id: 1, nombre: 'Elio' };
  const token = jwt.sign(user, 'secreto', { expiresIn: '1h' });
  res.json({ token });
});

const verificarToken = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) return res.status(403).send('Token requerido');
  
  jwt.verify(token, 'secreto', (err, user) => {
    if (err) return res.status(403).send('Token inválido');
    req.user = user;
    next();
  });
};
```

Uso del Middleware de autenticación:
```javascript
app.get('/perfil', verificarToken, (req, res) => {
  res.send(`Bienvenido ${req.user.nombre}`);
});
```

---

## 🚀 Conclusión
Este **cheatsheet** cubre los conceptos esenciales de **Express.js** con ejemplos prácticos. ¡Sigue explorando y creando aplicaciones poderosas con Node.js y Express! 🔥