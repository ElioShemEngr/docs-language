# 📌 Angular Cheat Sheet

## 📦 Instalación de Angular

```bash
# Instalar Angular CLI
npm install -g @angular/cli

# Crear un nuevo proyecto
ng new my-app

# Navegar al proyecto
cd my-app

# Ejecutar el servidor de desarrollo
ng serve --open
```

---

## 📁 Estructura de un Proyecto Angular

```
my-app/
│── src/
│   │── app/
│   │   │── components/
│   │   │── services/
│   │   │── app.component.ts
│   │   │── app.module.ts
│   │── assets/
│   │── environments/
│── angular.json
│── package.json
│── tsconfig.json
```

---

## 🏗️ Componentes en Angular

### 🔹 Creación de un Componente

```bash
ng generate component nombre-componente
# o
ng g c nombre-componente
```

### 🔹 Componente Básico

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-saludo',
  template: `<h1>¡Hola, Angular!</h1>`,
  styles: [`h1 { color: blue; }`]
})
export class SaludoComponent {}
```

---

## 🎯 Directivas en Angular

### 🔹 Directivas de Estructura

```html
<div *ngIf="mostrar">Este texto se muestra si 'mostrar' es true</div>

<ul>
  <li *ngFor="let item of lista">{{ item }}</li>
</ul>
```

---

## 🏗️ Binding de Datos

### 🔹 Interpolación

```html
<p>Hola, {{ nombre }}!</p>
```

### 🔹 Binding de Propiedad

```html
<img [src]="imagenUrl">
```

### 🔹 Binding de Evento

```html
<button (click)="mostrarMensaje()">Haz clic</button>
```

```typescript
export class AppComponent {
  mostrarMensaje() {
    alert('¡Botón clicado!');
  }
}
```

---

## 📤 Formularios en Angular

```html
<form (ngSubmit)="enviarFormulario()">
  <input type="text" [(ngModel)]="nombre">
  <button type="submit">Enviar</button>
</form>
```

```typescript
export class FormComponent {
  nombre = '';

  enviarFormulario() {
    alert(`Formulario enviado con: ${this.nombre}`);
  }
}
```

---

## 🔗 Servicios en Angular

### 🔹 Creación de un Servicio

```bash
ng generate service data
# o
ng g s data
```

### 🔹 Servicio Básico

```typescript
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DataService {
  obtenerDatos() {
    return ["Angular", "React", "Vue"];
  }
}
```

```typescript
import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-lista',
  template: `<ul><li *ngFor="let item of datos">{{ item }}</li></ul>`
})
export class ListaComponent {
  datos: string[];

  constructor(private dataService: DataService) {
    this.datos = this.dataService.obtenerDatos();
  }
}
```

---

## 🔄 Enrutamiento en Angular

### 🔹 Definir Rutas

```typescript
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
```

### 🔹 Enlace a Rutas en HTML

```html
<a routerLink="/">Inicio</a>
<a routerLink="/about">Acerca de</a>
<router-outlet></router-outlet>
```

---

## 📦 Consumo de API con HttpClient

### 🔹 Instalar HttpClient

```typescript
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [HttpClientModule]
})
export class AppModule {}
```

### 🔹 Servicio para Obtener Datos

```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(private http: HttpClient) {}

  obtenerUsuarios(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
```

### 🔹 Uso del Servicio en un Componente

```typescript
import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-usuarios',
  template: `<ul><li *ngFor="let usuario of usuarios">{{ usuario.name }}</li></ul>`
})
export class UsuariosComponent implements OnInit {
  usuarios: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.obtenerUsuarios().subscribe((data) => {
      this.usuarios = data;
    });
  }
}
```

---

## 🚀 Conclusión
Este **cheatsheet** cubre los conceptos esenciales de Angular con ejemplos prácticos. ¡Sigue explorando y construyendo aplicaciones increíbles! 🔥
