# JavaScript DOM Cheat Sheet

## Conceptos Fundamentales del DOM

### ¿Qué es el DOM?
El Document Object Model (DOM) es una representación estructurada del documento HTML como un árbol de objetos, donde cada etiqueta HTML se convierte en un nodo que puede ser manipulado mediante JavaScript.

### Estructura Básica
- **Documento**: El punto de entrada al árbol DOM
- **Elementos**: Nodos que representan etiquetas HTML
- **Atributos**: Propiedades de los elementos
- **Texto**: Contenido textual dentro de los elementos

## Selección de Elementos

### Métodos de Selección Básicos

```javascript
// Seleccionar por ID
const formulario = document.getElementById('taskForm');

// Seleccionar por clase (devuelve HTMLCollection)
const tareas = document.getElementsByClassName('task-item');

// Seleccionar por etiqueta (devuelve HTMLCollection)
const botones = document.getElementsByTagName('button');

// Selector CSS moderno (devuelve primer elemento)
const inputTarea = document.querySelector('.task-input');

// Selector CSS moderno (devuelve NodeList)
const tareasCompletadas = document.querySelectorAll('.task-item.completed');
```

### Navegación por el DOM

```javascript
const elemento = document.querySelector('.task-item');

// Navegar entre nodos
const padre = elemento.parentNode;
const primerHijo = elemento.firstChild;
const ultimoHijo = elemento.lastChild;
const siguienteHermano = elemento.nextSibling;
const hermanoAnterior = elemento.previousSibling;

// Navegar entre elementos
const padreElemento = elemento.parentElement;
const primerHijoElemento = elemento.firstElementChild;
const ultimoHijoElemento = elemento.lastElementChild;
```

## Manipulación de Elementos

### Modificar Contenido

```javascript
const tarea = document.querySelector('.task-item');

// Modificar texto (más seguro, solo texto)
tarea.textContent = 'Nueva tarea';

// Modificar HTML (permite HTML, usar con precaución)
tarea.innerHTML = '<span class="task-text">Nueva tarea</span>';

// Modificar HTML externo (más seguro que innerHTML)
tarea.outerHTML = '<li class="task-item">Nueva tarea</li>';
```

### Manipular Atributos

```javascript
const tarea = document.querySelector('.task-item');

// Obtener atributo
const id = tarea.getAttribute('data-id');

// Establecer atributo
tarea.setAttribute('data-priority', 'high');

// Eliminar atributo
tarea.removeAttribute('data-completed');

// Trabajar con clases
tarea.classList.add('completed');
tarea.classList.remove('pending');
tarea.classList.toggle('selected');
tarea.classList.contains('completed'); // devuelve boolean
```

### Crear y Manipular Elementos

```javascript
// Crear una nueva tarea
function crearNuevaTarea(texto) {
    // Crear elementos
    const li = document.createElement('li');
    const span = document.createElement('span');
    const boton = document.createElement('button');
    
    // Configurar elementos
    li.className = 'task-item';
    span.textContent = texto;
    boton.textContent = 'Eliminar';
    
    // Construir estructura
    li.appendChild(span);
    li.appendChild(boton);
    
    return li;
}

// Agregar tarea a la lista
const lista = document.querySelector('.task-list');
const nuevaTarea = crearNuevaTarea('Nueva tarea');
lista.appendChild(nuevaTarea);

// Eliminar tarea
function eliminarTarea(tarea) {
    tarea.remove(); // Método moderno
    // Alternativa: tarea.parentNode.removeChild(tarea);
}

// Reemplazar tarea
const tareaActualizada = crearNuevaTarea('Tarea actualizada');
lista.replaceChild(tareaActualizada, nuevaTarea);
```

## Eventos del DOM

### Manejo Básico de Eventos

```javascript
const formulario = document.querySelector('#taskForm');
const input = document.querySelector('.task-input');
const lista = document.querySelector('.task-list');

// Agregar evento al formulario
formulario.addEventListener('submit', function(evento) {
    evento.preventDefault(); // Prevenir envío del formulario
    const textoTarea = input.value.trim();
    
    if (textoTarea) {
        const nuevaTarea = crearNuevaTarea(textoTarea);
        lista.appendChild(nuevaTarea);
        input.value = ''; // Limpiar input
    }
});

// Múltiples eventos en un elemento
input.addEventListener('focus', () => input.classList.add('active'));
input.addEventListener('blur', () => input.classList.remove('active'));
```

### Delegación de Eventos

```javascript
// Delegación de eventos para manejar tareas dinámicamente
lista.addEventListener('click', function(evento) {
    // Verificar si se hizo clic en el botón de eliminar
    if (evento.target.tagName === 'BUTTON') {
        const tarea = evento.target.closest('.task-item');
        eliminarTarea(tarea);
    }
    
    // Verificar si se hizo clic en la tarea
    if (evento.target.classList.contains('task-item')) {
        evento.target.classList.toggle('completed');
    }
});
```

## Buenas Prácticas

### Optimización de Rendimiento

```javascript
// ❌ Malo: Múltiples manipulaciones del DOM
tareas.forEach(tarea => {
    lista.appendChild(crearNuevaTarea(tarea));
});

// ✅ Bueno: Usar DocumentFragment
const fragmento = document.createDocumentFragment();
tareas.forEach(tarea => {
    fragmento.appendChild(crearNuevaTarea(tarea));
});
lista.appendChild(fragmento);
```

### Consejos Generales
1. Minimizar las manipulaciones directas del DOM
2. Usar delegación de eventos para elementos dinámicos
3. Almacenar referencias a elementos frecuentemente utilizados
4. Preferir `textContent` sobre `innerHTML` cuando sea posible
5. Usar `classList` en lugar de manipular `className` directamente

```javascript
// Almacenar referencias
const UI = {
    formulario: document.querySelector('#taskForm'),
    input: document.querySelector('.task-input'),
    lista: document.querySelector('.task-list'),
    botonLimpiar: document.querySelector('.clear-button')
};

// Ejemplo de uso
function inicializarApp() {
    UI.formulario.addEventListener('submit', manejarNuevaTarea);
    UI.lista.addEventListener('click', manejarInteraccionTarea);
    UI.botonLimpiar.addEventListener('click', limpiarTareasCompletadas);
}
```
