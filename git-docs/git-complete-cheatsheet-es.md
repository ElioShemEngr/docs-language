# Git y GitHub Cheatsheet 📋

## Índice
1. **Configuración Inicial**
2. **Comandos Básicos**
3. **Ramas (Branches)**
4. **Colaboración y Remotos**
5. **Solución de Problemas**
6. **Comandos Avanzados**
7. **Alias útiles para acelerar tu flujo de trabajo**
8. **Tips y Trucos Practicos**
9. **Extras utiles de Github**

---

## 1. Configuración Inicial

### Configurar identidad
```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tu@email.com"
```


### Configurar un editor por defecto
```bash
git config --global core.editor "code --wait"  # Visual Studio Code
```

### Ver configuracion
```bash
git config --list
```

## 2. Comandos Basicos

### Crear un repositorio
```bash
git init
```

### Clonar un repositorio
```bash
git clone <URL>
```

### Ver el estado del repositorio
```bash
git status
```

### Añadir archivos al area de preparacion
```bash
git add <archivo>    # Un archivo específico
git add .            # Todos los archivos
```

### Confirmar cambios
```bash
git commit -m "Mensaje descriptivo"
```

#### Ver el historial de commits
```bash
git log
git log --oneline           # Resumen compacto
git log --oneline --graph   # Muestra ramas en compacto
git log -S "keyword"        # Muestra commit con una palabra clave
```

#### Ver diferencias entre archivos
```bash
git diff             # Cambios no staged
git diff --staged    # Cambios en stage
```

## 3. Ramas (Branches)

### Crear una nueva rama
```bash
git branch <nombre_rama>
```

### Cambiar a otra rama
```bash
git checkout <nombre_rama>
```

### Crear y cambiar a una nueva rama
```bash
git checkout -b <nombre_rama>
```

### Listar ramas
```bash
git branch
```

### Eliminar una rama
```bash
git branch -d <nombre_rama>     # Solo si ya está fusionada
git branch -D <nombre_rama>     # Forzar eliminación
```

### Fusionar ramas
```bash
git merge <nombre_rama>         # Fusiona la rama especificada a la actual
```

## 4. Colaboracion y Remotos

### Agregar un remoto
```bash
git remote add origin <URL>
```

### Ver remotos configurados
```bash
git remote -v
```

### Descargar cambios del remoto
```bash
git fetch origin
git pull origin <rama>         # Actualizar rama local
```

### Subir cambios al remoto
```bash
git push origin <rama>
```

### Cambiar la URL de un remoto
```bash
git remote set-url origin <nueva_URL>
```

## 5. Solucion de Problemas

### Deshacer cambios en el área de trabajo
```bash
git checkout HEAD <archivo>     # Usando HEAD
git checkout -- <archivo>       # Usando -- 
```

### Retirar archivos del área de preparación (stage)
```bash
git reset <archivo>
git reset HEAD <archivo>
```

### Regresar a un commit anterior
```bash
git reset <SHA>                 # SHA son los primeros 07 digitos del hash del commit.
```

### Deshacer el último commit (mantener cambios)
```bash
git reset --soft HEAD~1
```

### Deshacer el último commit (descartar cambios)
```bash
git reset --hard HEAD~1
```

### Actualizar el ultimo commit (evita crear otro commit)
```bash
git commit --amend
git commit --amend --no-edit    # Mantiene el mismo mensaje del commit anterior
```


## 6. Comandos Avanzados

### Reescribir historial (interactivo)
```bash
git rebase -i HEAD~<número_de_commits>
```

### Guardar cambios no confirmados (stash)
```bash
git stash
git stash pop                  # Recuperar el stash más reciente
git stash list                 # Ver stashes guardados
git stash drop <id_stash>      # Eliminar un stash específico
```

### Etiquetas (Tags)
```bash
git tag <nombre_etiqueta>                    # Crear etiqueta
git tag                                      # Listar etiquetas
git show <nombre_etiqueta>                   # Ver detalles
git push origin <nombre_etiqueta>            # Subir etiqueta al remoto
```

## 7. Alias útiles para acelerar tu flujo de trabajo

Puedes configurar alias para simplificar comandos comunes. Por ejemplo:

### Crear alias
```bash
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.st status
git config --global alias.lg "log --oneline --graph --all"
```

### Usar alias
```bash
git co <rama>          # Equivalente a 'git checkout <rama>'
git lg                 # Historial compacto y gráfico
```

## 8. Tips y Trucos Practicos

#### Ignorar archivos
1. Crea un archivo .gitignore en la raíz del repositorio.
2. Especifica los patrones de archivos a ignorar. Ejemplo:

```bash
# Ignorar archivos temporales
*.log
*.tmp

# Ignorar carpetas específicas
/node_modules
/dist
```

#### Recuperar un archivo específico de un commit anterior
```bash
git checkout <commit_hash> -- <archivo>
```

#### Ver quien modifico las lineas en un archivo
```bash
git blame <archivo>
```

#### Limpieza de ramas remotas obsoletas
```bash
git fetch --prune
```

#### Comprimir el historial para optimizar el repositorio
```bash
git gc --aggressive --prune=now
```

## 9. Extras útiles de GitHub

#### Crear un fork
- Usa la opción "Fork" en GitHub para copiar un repositorio a tu cuenta.
#### Crear un Pull Request
- Crea una nueva rama y realiza tus cambios.
- Súbela a GitHub.
- Usa la interfaz web para crear un Pull Request.
#### Configurar un token de acceso personal (PAT)
- Ve a GitHub -> Configuración -> Developer Settings -> Personal Access Tokens.
- Usa el token en lugar de tu contraseña para operaciones HTTPS.
