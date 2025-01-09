# JavaScript Asincronía Cheat Sheet

## Conceptos Fundamentales

### Asincronía en JavaScript
JavaScript es un lenguaje monohilo que utiliza un modelo asíncrono y no bloqueante para manejar operaciones que podrían tomar tiempo (como peticiones HTTP, operaciones de archivo, etc.). Esto permite que el código continúe ejecutándose mientras estas operaciones se completan en segundo plano.

### Event Loop y Call Stack
- **Call Stack**: Estructura de datos que registra en qué parte del programa estamos, gestionando la ejecución de funciones.
- **Event Loop**: Mecanismo que monitorea constantemente el Call Stack y la Cola de Tareas, moviendo las tareas completadas al stack cuando está vacío.
- **Cola de Tareas**: Almacena las callbacks y eventos que están listos para ser ejecutados.

```javascript
console.log('1');
setTimeout(() => console.log('2'), 0);
console.log('3');

// Output:
// 1
// 3
// 2
```

## Técnicas de Manejo de Asincronía

### 1. Callbacks
Funciones que se pasan como argumentos y se ejecutan después de que una operación asíncrona se completa.

```javascript
function obtenerUsuario(id, callback) {
    setTimeout(() => {
        const usuario = {
            id: id,
            nombre: 'Ana',
            email: 'ana@ejemplo.com'
        };
        callback(null, usuario);
    }, 1000);
}

obtenerUsuario(1, (error, usuario) => {
    if (error) {
        console.error('Error:', error);
        return;
    }
    console.log('Usuario:', usuario);
});
```

### 2. Promises
Objeto que representa la eventual finalización (o fallo) de una operación asíncrona.

```javascript
function obtenerUsuario(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const usuario = {
                id: id,
                nombre: 'Ana',
                email: 'ana@ejemplo.com'
            };
            resolve(usuario);
            // En caso de error: reject(new Error('Usuario no encontrado'));
        }, 1000);
    });
}

obtenerUsuario(1)
    .then(usuario => console.log('Usuario:', usuario))
    .catch(error => console.error('Error:', error));
```

### 3. Async/Await
Sintaxis más limpia para trabajar con promesas, haciendo que el código asíncrono parezca síncrono.

```javascript
async function obtenerDatosUsuario(id) {
    try {
        const usuario = await obtenerUsuario(id);
        const posts = await obtenerPosts(usuario.id);
        return { usuario, posts };
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

// Uso
obtenerDatosUsuario(1)
    .then(datos => console.log(datos))
    .catch(error => console.error(error));
```

## Microtasks vs Macrotasks

### Microtasks
- Promises (.then, .catch, .finally)
- process.nextTick
- queueMicrotask()

### Macrotasks
- setTimeout
- setInterval
- setImmediate
- requestAnimationFrame

```javascript
console.log('1');
Promise.resolve().then(() => console.log('2'));
setTimeout(() => console.log('3'), 0);
console.log('4');

// Output:
// 1
// 4
// 2
// 3
```

## Buenas Prácticas

### Estructura del Código
1. Evita el "Callback Hell" utilizando Promises o async/await
2. Mantén un manejo de errores consistente
3. Usa nombres descriptivos para funciones y variables

```javascript
// ❌ Callback Hell
obtenerUsuario(id, (error, usuario) => {
    if (error) return handleError(error);
    obtenerPosts(usuario.id, (error, posts) => {
        if (error) return handleError(error);
        obtenerComentarios(posts[0].id, (error, comentarios) => {
            if (error) return handleError(error);
            // más código anidado...
        });
    });
});

// ✅ Async/Await
async function obtenerDatosCompletos(id) {
    try {
        const usuario = await obtenerUsuario(id);
        const posts = await obtenerPosts(usuario.id);
        const comentarios = await obtenerComentarios(posts[0].id);
        return { usuario, posts, comentarios };
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}
```

### Cuándo Usar Cada Técnica

**Usa Promises cuando:**
- Necesitas encadenar múltiples operaciones asíncronas
- Quieres manejar múltiples promesas en paralelo (Promise.all, Promise.race)
- Estás creando APIs o librerías

**Usa async/await cuando:**
- Necesitas código más legible y mantenible
- Tienes operaciones asíncronas secuenciales
- Necesitas manejar errores de forma más intuitiva con try/catch

### Patrones Útiles

```javascript
// Ejecución paralela con Promise.all
async function obtenerDatosParalelos(usuarioId) {
    try {
        const [usuario, posts, config] = await Promise.all([
            obtenerUsuario(usuarioId),
            obtenerPosts(usuarioId),
            obtenerConfiguracion()
        ]);
        return { usuario, posts, config };
    } catch (error) {
        console.error('Error en obtención paralela:', error);
        throw error;
    }
}

// Timeout para promesas
function conTimeout(promesa, ms) {
    const timeout = new Promise((_, reject) => {
        setTimeout(() => reject(new Error('Timeout')), ms);
    });
    return Promise.race([promesa, timeout]);
}
```

### Manejo de Errores
Siempre incluye manejo de errores apropiado para operaciones asíncronas:
- Usa .catch() con Promises
- Usa try/catch con async/await
- Considera implementar retry logic para operaciones que pueden fallar temporalmente

```javascript
async function conReintentos(fn, maxIntentos = 3) {
    let error;
    for (let intento = 1; intento <= maxIntentos; intento++) {
        try {
            return await fn();
        } catch (err) {
            error = err;
            if (intento === maxIntentos) throw error;
            await new Promise(resolve => setTimeout(resolve, 1000 * intento));
        }
    }
}
```