# Reflex Cheat Sheet

## 🌟 Instalación y Configuración
```bash
pip install reflex
```
- Verificar instalación:
```bash
reflex --version
```
- Crear un nuevo proyecto:
```bash
reflex init myapp
cd myapp
```
- Ejecutar la aplicación en modo desarrollo:
```bash
reflex run
```
- Exportar la aplicación para despliegue:
```bash
reflex export
```

---

## 📚 Estructura de una Aplicación Reflex
```
myapp/
|-- .web/               # Archivos generados (React)
|-- assets/             # Recursos estáticos (imágenes, CSS)
|-- myapp/              # Código fuente de la aplicación
|   |-- __init__.py     # Archivo de inicialización
|   |-- app.py         # Punto de entrada de la aplicación
|-- .gitignore          # Archivos ignorados en Git
|-- .reflex.json        # Configuración de Reflex
|-- requirements.txt    # Dependencias
```

---

## 👨‍💻 Creando una Aplicación Básica
```python
import reflex as rx

def index():
    return rx.vstack(
        rx.heading("🚀 Bienvenido a Reflex!"),
        rx.button("Haz clic", on_click=lambda: print("Botón presionado!"))
    )

app = rx.App()
app.add_page(index)
```

---

## 💚 Componentes Básicos
```python
rx.text("Texto normal")
rx.heading("Título", size="lg")
rx.image(src="/ruta/imagen.png")
rx.button("Click", on_click=lambda: print("Hola"))
rx.input(placeholder="Escribe aquí")
rx.textarea(placeholder="Texto largo")
```

### Layouts
```python
rx.vstack(rx.text("Elemento 1"), rx.text("Elemento 2"))
rx.hstack(rx.text("Izquierda"), rx.text("Derecha"))
rx.grid(
    rx.text("Celda 1"), rx.text("Celda 2"),
    columns=["1fr", "1fr"]
)
```

---

## 🔒 Manejo de Estado
```python
class Estado(rx.State):
    contador: int = 0
    
    def incrementar(self):
        self.contador += 1

def index():
    return rx.vstack(
        rx.text("Contador: ", rx.state.contador),
        rx.button("+1", on_click=Estado.incrementar)
    )
```

---

## 🛠️ Eventos y Callbacks
```python
def saludar():
    print("Hola, Reflex!")

rx.button("Saludar", on_click=saludar)
```

### Pasar valores dinámicos
```python
def mostrar_valor(valor):
    print(f"Valor ingresado: {valor}")

rx.input(placeholder="Escribe algo", on_blur=mostrar_valor)
```

---

## 📊 Manejo de Formularios
```python
class FormState(rx.State):
    nombre: str = ""
    
    def enviar(self):
        print(f"Formulario enviado: {self.nombre}")

def form():
    return rx.vstack(
        rx.input(placeholder="Nombre", on_change=FormState.set_nombre),
        rx.button("Enviar", on_click=FormState.enviar)
    )
```

---

## 🛡️ Integración con Bases de Datos (SQLAlchemy)
```python
from sqlalchemy import Column, Integer, String

class Usuario(rx.Model, table=True):
    id = Column(Integer, primary_key=True)
    nombre = Column(String(50))

class Estado(rx.State):
    def agregar_usuario(self, nombre):
        usuario = Usuario(nombre=nombre)
        self.session.add(usuario)
        self.session.commit()
```

---

## 🌍 Despliegue en Producción
```bash
reflex export
```
- Luego, puedes subir la carpeta generada (`.web/`) a **Vercel, Netlify o cualquier servidor estático**.
- También puedes configurar Reflex con **Docker** para un despliegue más robusto.

---

## 💡 Consejos Avanzados
### 1️⃣ Optimización de Carga
```python
app = rx.App()
app.compile(minify=True)
```

### 2️⃣ Uso de Temas Globales
```python
app = rx.App(theme=rx.theme(primary_color="blue"))
```

### 3️⃣ Rutas Personalizadas
```python
app.add_page(index, route="/")
app.add_page(otra_pagina, route="/contacto")
```

---

### 🚀 Reflex te permite crear aplicaciones web modernas usando solo Python. ¡Explora y crea! 🚀

