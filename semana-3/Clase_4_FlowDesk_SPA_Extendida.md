# 🟦 CLASE 4 — FlowDesk SPA (VERSIÓN INCREMENTAL Y ULTRA EXPLICADA)
## Consumo de API, Estados de Carga y Manejo de Errores
**Semana 3 — JavaScript Puro (Vanilla)**

**Clan Hamilton**  
*Una SPA real vive de datos externos* 👑

---

## 🌐 Contexto del proyecto FlowDesk

Hasta la **Clase 3**, FlowDesk ya es una SPA completa:

- ✔ Arquitectura clara
- ✔ Estado global centralizado
- ✔ Render consciente
- ✔ Event Delegation
- ✔ Router avanzado con rutas dinámicas

❗ **Pero todavía hay una gran limitación**:

> Los datos están “quemados” en el código.

En esta clase resolvemos eso conectando FlowDesk con **datos externos**, como lo haría cualquier aplicación real.

---

## 🎯 Objetivo REAL de esta clase

Al finalizar esta clase, el coder será capaz de:

- Entender **qué es consumir una API**
- Usar `fetch` correctamente
- Manejar **estados de carga (loading)**
- Manejar **errores de red**
- Separar responsabilidades:
  - servicio
  - estado
  - vista
- Pensar como una SPA profesional

---

## 🧠 ¿Qué significa consumir una API?

Consumir una API significa:

> Pedir datos a un servidor externo usando HTTP y JavaScript.

Ejemplos reales:
- Lista de usuarios
- Proyectos
- Tareas
- Productos

📌 En FlowDesk, simularemos esto usando una API pública.

---

## 🗂️ Nueva carpeta: `services/`

A partir de esta clase, agregamos una nueva responsabilidad:

```text
src/services/
```

📌 Aquí vive **toda la comunicación con APIs**.

---

## 🌐 Servicio de proyectos — CÓDIGO COMPLETO

Archivo:
```text
src/services/projectsService.js
```

```js
export async function fetchProjects() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');

  if (!response.ok) {
    throw new Error('Error al cargar proyectos');
  }

  const data = await response.json();
  return data.slice(0, 5);
}
```

👉 **Primero míralo completo**, luego lo explicamos.

---

## 🔍 Explicación línea por línea — Servicio

```js
export async function fetchProjects() {
```
- Exportamos una función reutilizable
- `async` permite usar `await`

---

```js
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
```
- `fetch` hace una petición HTTP
- `await` espera la respuesta
- `response` representa la respuesta del servidor

---

```js
  if (!response.ok) {
    throw new Error('Error al cargar proyectos');
  }
```
- `response.ok` indica si la petición fue exitosa
- Si falla, lanzamos un error
- ❗ El error se manejará más adelante

---

```js
  const data = await response.json();
```
- Convertimos la respuesta a JSON
- `data` es un array de objetos

---

```js
  return data.slice(0, 5);
```
- Retornamos solo 5 elementos
- Simulamos “proyectos”

---

## 🧠 Actualizando el estado global

Archivo:
```text
src/state/store.js
```

### CÓDIGO COMPLETO

```js
export const store = {
  user: null,
  projects: [],
  loading: false,
  error: null
};
```

---

## 🔍 Explicación del estado

- `projects` → datos que vienen de la API
- `loading` → indica si estamos cargando datos
- `error` → guarda errores de red

📌 Ahora el estado **representa la realidad de la app**.

---

## 🔄 Flujo correcto para consumir datos

1. Activar loading
2. Llamar al servicio
3. Guardar datos en el estado
4. Manejar error si ocurre
5. Desactivar loading
6. Re-renderizar la vista

👉 **Nunca saltarse pasos**.

---

## 📄 Vista Projects con API — CÓDIGO COMPLETO

Archivo:
```text
src/views/Projects.js
```

```js
import { store } from '../state/store.js';
import { fetchProjects } from '../services/projectsService.js';
import { render } from '../core/render.js';

export async function Projects() {
  if (store.projects.length === 0) {
    store.loading = true;
    render(Projects());

    try {
      store.projects = await fetchProjects();
      store.error = null;
    } catch (err) {
      store.error = err.message;
    } finally {
      store.loading = false;
      render(Projects());
    }
  }

  if (store.loading) {
    return '<p>Cargando proyectos...</p>';
  }

  if (store.error) {
    return `<p>Error: ${store.error}</p>`;
  }

  return `
    <h2>Proyectos</h2>
    <ul>
      ${store.projects
        .map(p => `<li>${p.title}</li>`)
        .join('')}
    </ul>
    <a href="#/dashboard">⬅ Volver</a>
  `;
}
```

👉 **Primero léelo completo**, luego lo desarmamos.

---

## 🔍 Explicación paso a paso — Vista Projects

### 1️⃣ Imports

```js
import { store } from '../state/store.js';
import { fetchProjects } from '../services/projectsService.js';
import { render } from '../core/render.js';
```

- Estado
- Servicio
- Render consciente

---

### 2️⃣ Función async

```js
export async function Projects() {
```
- La vista ahora es `async`
- Puede esperar datos

---

### 3️⃣ Primera carga de datos

```js
if (store.projects.length === 0) {
```
- Evita pedir datos varias veces
- Solo carga la primera vez

---

### 4️⃣ Activar loading

```js
store.loading = true;
render(Projects());
```
- Cambiamos el estado
- Re-renderizamos para mostrar loading

---

### 5️⃣ Llamada al servicio

```js
store.projects = await fetchProjects();
```
- Esperamos la respuesta
- Guardamos datos en el estado

---

### 6️⃣ Manejo de errores

```js
catch (err) {
  store.error = err.message;
}
```
- Capturamos errores
- Guardamos mensaje en el estado

---

### 7️⃣ Finalizar loading

```js
finally {
  store.loading = false;
  render(Projects());
}
```
- Siempre se ejecuta
- Actualiza la vista final

---

### 8️⃣ Render condicional

```js
if (store.loading) {
  return '<p>Cargando proyectos...</p>';
}
```

```js
if (store.error) {
  return `<p>Error: ${store.error}</p>`;
}
```

- La vista responde al estado
- UI controlada por datos

---

## 🔄 Flujo mental completo

1. Entramos a Projects
2. No hay datos → loading
3. Se muestra “Cargando…”
4. Llega la respuesta
5. Se guarda en el estado
6. Se re-renderiza
7. Se muestran los datos

👉 **Así funciona una SPA real**.

---

## 🔗 Conexión con frameworks

| FlowDesk | Angular |
|--------|--------|
| fetch | HttpClient |
| loading | isLoading |
| error | errorState |
| service | service |
| render | Change Detection |

---

## 🧪 Ejercicio práctico

1. Cambiar el endpoint
2. Forzar un error
3. Mostrar mensaje personalizado
4. Agregar botón “Reintentar”

---

## 🏁 Cierre de la clase

✔ FlowDesk consume datos reales  
✔ Maneja loading y errores  
✔ Arquitectura profesional  

🚀 **Clase 5**: Autenticación simulada y rutas protegidas

---

**Clan Hamilton**  
*Los datos mandan, la UI responde* 💪
