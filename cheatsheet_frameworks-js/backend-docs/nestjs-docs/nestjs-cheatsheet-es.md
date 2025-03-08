# 📌 NestJS Cheat Sheet

## 📦 Instalación de NestJS

```bash
# Instalar CLI de NestJS
npm install -g @nestjs/cli

# Crear un nuevo proyecto
nest new my-nest-app

# Entrar al proyecto
cd my-nest-app

# Ejecutar el servidor
npm run start
```

---

## 📁 Estructura de un Proyecto NestJS

```
my-nest-app/
│── src/
│   ├── app.controller.ts
│   ├── app.module.ts
│   ├── app.service.ts
│── test/
│── node_modules/
│── package.json
│── tsconfig.json
```

---

## 🚀 Creación de un Módulo, Controlador y Servicio

```bash
# Crear un módulo
nest g module users

# Crear un controlador
nest g controller users

# Crear un servicio
nest g service users
```

---

## 🏗️ Definir un Controlador Básico

```typescript
import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  getAllUsers() {
    return [{ id: 1, name: 'Elio' }];
  }
}
```

---

## 🔄 Definir un Servicio

```typescript
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  getUsers() {
    return [{ id: 1, name: 'Elio' }];
  }
}
```

---

## 🔗 Inyectar el Servicio en el Controlador

```typescript
import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getUsers() {
    return this.usersService.getUsers();
  }
}
```

---

## 📦 Uso de DTOs (Data Transfer Objects)

```typescript
export class CreateUserDto {
  name: string;
  age: number;
}
```

Uso en el controlador:
```typescript
import { Controller, Post, Body } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  @Post()
  createUser(@Body() createUserDto: CreateUserDto) {
    return { message: 'Usuario creado', user: createUserDto };
  }
}
```

---

## 🛡️ Middleware en NestJS

```typescript
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(`Solicitud a: ${req.url}`);
    next();
  }
}
```

Registrar en `app.module.ts`:
```typescript
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { LoggerMiddleware } from './middleware/logger.middleware';

@Module({ imports: [UsersModule] })
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('users');
  }
}
```

---

## 🔑 Autenticación con JWT

```bash
npm install @nestjs/jwt passport-jwt @nestjs/passport passport
```

```typescript
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  login(user: any) {
    const payload = { username: user.username, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
```

---

## 📡 Conexión con Base de Datos (TypeORM + PostgreSQL)

```bash
npm install @nestjs/typeorm typeorm pg
```

Configurar `app.module.ts`:
```typescript
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'root',
      password: 'password',
      database: 'mydb',
      entities: [],
      synchronize: true,
    }),
  ],
})
export class AppModule {}
```

Definir una entidad:
```typescript
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  age: number;
}
```

---

## 🚀 Conclusión
Este **cheatsheet** cubre los conceptos esenciales de **NestJS** con ejemplos prácticos. ¡Sigue explorando y creando aplicaciones escalables con NestJS! 🚀
