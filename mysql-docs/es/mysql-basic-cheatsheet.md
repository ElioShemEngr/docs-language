# MYSQL Basics - CheatSheet 💾

### 1. Conexión a MySQL
Para interactuar con MySQL, primero necesitas conectar tu aplicación a la base de datos.

```sql
-- Crear una conexión a MySQL
mysql -u usuario -p
-- Luego te pedirá la contraseña, ingrésala y presiona Enter.
```

En aplicaciones en PHP, Python o Node.js, normalmente debes crear una conexión. Ejemplo en Python:

```python
import mysql.connector

# Crear conexión a la base de datos
conexion = mysql.connector.connect(
    host="localhost",
    user="usuario",
    password="contraseña",
    database="nombre_base_datos"
)
```

### 2. Crear una Base de Datos y Seleccionarla
Usar `CREATE DATABASE` para crear una nueva base de datos.

```sql
-- Crear una base de datos
CREATE DATABASE nombre_base_datos;

-- Usar la base de datos (seleccionarla para operar sobre ella)
USE nombre_base_datos;
```

### 3. Crear una Tabla
Las tablas se crean con el comando `CREATE TABLE`. Cada columna necesita un tipo de dato.

```sql
CREATE TABLE empleados (
    id INT PRIMARY KEY AUTO_INCREMENT,  -- ID único y autoincremental
    nombre VARCHAR(50),                 -- Nombre del empleado (máximo 50 caracteres)
    edad INT,                           -- Edad del empleado
    departamento VARCHAR(50),           -- Departamento al que pertenece el empleado
    salario DECIMAL(10, 2)              -- Salario con 2 decimales
);
```

### 4. Tipos de Datos
Principales tipos de datos usados en MySQL:

* INT: Números enteros.
* VARCHAR(n): Texto de longitud variable (máximo n caracteres).
* TEXT: Texto largo.
* DATE: Fecha (formato YYYY-MM-DD).
* DECIMAL(m, d): Números decimales con precisión m total y d decimales.

## 5. Insertar Datos en una Tabla
```sql
INSERT INTO empleados (nombre, edad, departamento, salario)
VALUES ('Juan Pérez', 30, 'Ventas', 5000.00);
```

Para múltiples registros:
```sql
INSERT INTO empleados (nombre, edad, departamento, salario) VALUES
('Ana López', 25, 'Marketing', 4500.00),
('Carlos Ruiz', 35, 'IT', 7000.00);
```


## 6. Seleccionar Datos
```sql
-- Seleccionar todos los datos
SELECT * FROM empleados;

-- Seleccionar columnas específicas
SELECT nombre, salario FROM empleados;

-- Seleccionar con condición
SELECT * FROM empleados WHERE departamento = 'IT';
```

## 7. Actualizar Datos
```sql
-- Actualizar el salario de un empleado
UPDATE empleados
SET salario = 5200.00
WHERE nombre = 'Juan Pérez';
```

## 8. Eliminar Datos
```sql
-- Eliminar un registro
DELETE FROM empleados
WHERE nombre = 'Ana López';
```

## 9. Filtrar Resultados
El filtrado se realiza con `WHERE` junto a operadores y condiciones.

```sql
-- Filtrar por salario mayor a 5000
SELECT * FROM empleados WHERE salario > 5000;

-- Filtrar por varios criterios
SELECT * FROM empleados WHERE departamento = 'Ventas' AND edad > 30;
```

## 10. Ordenar Resultados
```sql
-- Ordenar por salario de mayor a menor
SELECT * FROM empleados ORDER BY salario DESC;

-- Ordenar por nombre en orden ascendente
SELECT * FROM empleados ORDER BY nombre ASC;
```

## 11. Limitar Resultados
```sql
-- Limitar a los primeros 5 resultados
SELECT * FROM empleados LIMIT 5;
```

## 12. Funciones de Agregación
```sql
-- Contar el total de empleados
SELECT COUNT(*) AS total_empleados FROM empleados;

-- Calcular el salario promedio
SELECT AVG(salario) AS salario_promedio FROM empleados;

-- Sumar todos los salarios
SELECT SUM(salario) AS total_salarios FROM empleados;
```

## 13. Agrupar Resultados
```sql
-- Agrupar empleados por departamento
SELECT departamento, COUNT(*) AS cantidad_empleados
FROM empleados
GROUP BY departamento;

-- Agrupar y usar una función de agregación
SELECT departamento, AVG(salario) AS salario_promedio
FROM empleados
GROUP BY departamento;
```

## 14. Relaciones entre Tablas
```python
-- Crear una tabla de departamentos
CREATE TABLE departamentos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50)
);

-- Crear una tabla de empleados con clave foránea
CREATE TABLE empleados (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50),
    departamento_id INT,
    FOREIGN KEY (departamento_id) REFERENCES departamentos(id)
);
```

## 15. JOINS (Unir Tablas)
```sql
-- JOIN simple: Unir empleados y departamentos
SELECT empleados.nombre, departamentos.nombre AS departamento
FROM empleados
JOIN departamentos ON empleados.departamento_id = departamentos.id;
```

Tipos de JOIN:

* `INNER JOIN`: Solo devuelve filas con coincidencias en ambas tablas.
* `LEFT JOIN`: Devuelve todas las filas de la tabla izquierda, y las coincidencias de la derecha.
* `RIGHT JOIN`: Lo opuesto al LEFT JOIN.

## 16. Subconsultas
```sql
-- Obtener empleados con salario superior al promedio
SELECT nombre, salario
FROM empleados
WHERE salario > (SELECT AVG(salario) FROM empleados);
```

## 17. Vistas
Una vista es una consulta guardada que puede usarse como una tabla.
```sql
-- Crear una vista de empleados con alto salario
CREATE VIEW empleados_altos_salarios AS
SELECT nombre, salario
FROM empleados
WHERE salario > 6000;
```

Usar la vista:
```sql
SELECT * FROM empleados_altos_salarios;
```

## 18. Indices
Mejoran el rendimiento de las búsquedas.

```sql
-- Crear un índice en la columna 'nombre'
CREATE INDEX idx_nombre ON empleados(nombre);
```

## 19. Transacciones
Para operaciones que requieren consistencia, usamos transacciones.
```sql
-- Iniciar una transacción
START TRANSACTION;

-- Realizar operaciones
UPDATE empleados SET salario = salario + 500 WHERE departamento = 'Ventas';

-- Confirmar cambios
COMMIT;

-- En caso de error, revertir cambios
ROLLBACK;
```
