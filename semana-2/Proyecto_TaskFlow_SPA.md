# 🚀 PROYECTO SPA — TaskFlow
## Clan Hamilton — Frontend con JavaScript

---

## 🎯 Objetivo del proyecto

Construir una **Single Page Application (SPA)** usando **JavaScript puro**, aplicando:

- Arquitectura por carpetas
- Componentes reutilizables
- Router con hash
- Estado global
- Buenas prácticas de organización

Este proyecto integra todo lo visto en las clases anteriores.

---

## 🧠 Contexto

Una startup necesita una aplicación llamada **TaskFlow** para organizar tareas internas.

La aplicación debe permitir:
- Navegar sin recargar la página
- Simular inicio de sesión
- Crear y listar tareas
- Marcar tareas como completadas

No hay backend. Todo se maneja en el frontend.

---

## 🗂️ Arquitectura OBLIGATORIA

```text
taskflow-spa/
 ├── index.html
 ├── styles.css
 └── src/
     ├── components/
     │   ├── Navbar.js
     │   ├── Footer.js
     │   └── TaskCard.js
     ├── views/
     │   ├── Home.js
     │   ├── Tasks.js
     │   ├── NewTask.js
     │   └── Login.js
     ├── router/
     │   └── router.js
     ├── state/
     │   └── store.js
     └── app.js
```

📌 La organización del proyecto es parte de la evaluación.

---

## 🧩 Vistas requeridas

### 🏠 Home
- Mensaje de bienvenida
- Mostrar nombre del usuario si está logueado
- Botón para ir a tareas

---

### 🔐 Login
- Input para nombre
- Botón para ingresar
- Guardar usuario en el estado global
- Redirigir a Home

---

### 📋 Tasks
- Mostrar lista de tareas
- Cada tarea debe tener:
  - título
  - estado (pendiente / completada)
- Botón para marcar como completada

---

### ➕ New Task
- Formulario con input de título
- Botón para agregar
- Guardar tarea en el estado
- Redirigir a Tasks

---

## 🧠 Estado global

Ejemplo base:

```js
export const store = {
  user: null,
  tasks: [
    { id: 1, title: 'Aprender SPA', completed: false }
  ]
};
```

---

## 🧭 Router

- Usar hash (#)
- Rutas mínimas:
  - #/
  - #/login
  - #/tasks
  - #/new-task

📌 **Regla importante:**  
Si no hay usuario, no se puede acceder a Tasks ni New Task.

---

## 🧱 Componentes obligatorios

### Navbar
- Links de navegación
- Mostrar usuario logueado

### TaskCard
- Recibe una tarea
- Muestra título y estado
- Botón para completar

---

## 🛠️ Requisitos técnicos

✔ JavaScript ES Modules  
✔ import / export  
✔ SPA sin recargar  
✔ Arquitectura por carpetas  
✔ Estado centralizado  

❌ Frameworks  
❌ Librerías externas  

---

## ⭐ Retos adicionales (opcional)

- Guardar tareas en localStorage
- Filtro de tareas
- Contador de tareas completadas
- Ruta 404
- Tema oscuro

---

## 📋 Criterios de evaluación

- Arquitectura y orden
- Funcionamiento SPA
- Uso correcto del estado
- Reutilización de componentes
- Claridad del código

---

## 🏁 Entregable

- Repositorio en GitHub
- README explicando:
  - estructura
  - cómo ejecutar
  - decisiones tomadas

---

**Clan Hamilton**  
*Orden primero, magia después* 💪
