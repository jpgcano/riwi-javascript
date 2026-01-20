# 🟦 CLASE 4 — FlowDesk SPA (VERSIÓN INCREMENTAL ULTRA DETALLADA)
## Consumo de API, Estados de Carga y Manejo de Errores
**Semana 3 — JavaScript Puro (Vanilla)**

**Clan Hamilton**  
*Una SPA real vive de datos externos* 👑

---

## 🌐 Contexto del proyecto FlowDesk

Hasta la **Clase 3**, FlowDesk ya es una SPA funcional:

- ✔ Arquitectura clara
- ✔ Estado global centralizado
- ✔ Render consciente
- ✔ Event Delegation
- ✔ Router avanzado con rutas dinámicas

❗ **Limitación actual**:

> FlowDesk aún usa datos simulados (hardcodeados).

En la vida real, **ninguna aplicación vive de datos quemados**.  
Los datos vienen de **APIs**.

👉 En esta clase damos el salto a **datos reales**.

---

## 🎯 Objetivo REAL de esta clase

Al finalizar esta clase, el coder será capaz de:

- Entender **qué es una API y para qué sirve**
- Consumir una API usando `fetch`
- Comprender **qué es un endpoint**
- Manejar **estados de carga (loading)**
- Manejar **errores de red**
- Entender el flujo completo:
  `vista → servicio → API → estado → render`
- Separar responsabilidades como en un proyecto profesional

---

## 🧠 ¿Qué es una API? (explicado simple)

Una **API (Application Programming Interface)** es:

> Un contrato que permite a una aplicación pedir datos a otra.

Ejemplo mental:

- Tu app → “dame los proyectos”
- Servidor → “aquí están los proyectos”

📌 La API NO sabe nada de tu interfaz.  
📌 Tu interfaz NO sabe cómo se guardan los datos.

---

## 🌍 ¿Qué es un endpoint?

Un **endpoint** es:

> Una URL específica que devuelve un tipo de dato.

Ejemplo:

```text
https://jsonplaceholder.typicode.com/posts
```

- `https://` → protocolo
- `jsonplaceholder.typicode.com` → servidor
- `/posts` → recurso (endpoint)

👉 Cada endpoint representa **un tipo de información**.

---

## 🌐 API que usaremos en FlowDesk

Usaremos una API pública de pruebas:

### 🔗 JSONPlaceholder

```text
https://jsonplaceholder.typicode.com
```

Endpoints importantes:

| Endpoint | Qué devuelve |
|--------|-------------|
| `/posts` | Lista de publicaciones |
| `/users` | Usuarios |
| `/comments` | Comentarios |

📌 En FlowDesk usaremos `/posts` como si fueran **proyectos**.

---

## 🗂️ Nueva carpeta: `services/`

A partir de esta clase agregamos:

```text
src/services/
```

📌 Regla clave:

> **Las vistas NO llaman directamente a la API.**

Las vistas hablan con **servicios**.  
Los servicios hablan con la **API**.

---

## 🌐 Servicio de proyectos — CÓDIGO COMPLETO

Archivo:
```text
src/services/projectsService.js
```

```js
export async function fetchProjects() {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/posts'
  );

  if (!response.ok) {
    throw new Error('Error al cargar proyectos');
  }

  const data = await response.json();

  // Simulamos que solo necesitamos algunos proyectos
  return data.slice(0, 5);
}
```

👉 **Primero observa el bloque completo**, luego lo explicamos.

---

## 🔍 Explicación línea por línea — Servicio

```js
export async function fetchProjects() {
```
- Exportamos la función para reutilizarla
- `async` permite usar `await`

---

```js
const response = await fetch('https://jsonplaceholder.typicode.com/posts');
```
- `fetch` hace una petición HTTP GET
- `await` pausa la ejecución hasta recibir respuesta
- `response` representa la respuesta del servidor

---

```js
if (!response.ok) {
  throw new Error('Error al cargar proyectos');
}
```
- `response.ok` es `true` si la petición fue exitosa
- Si falla, lanzamos un error
- El error será manejado por la vista

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
- Simulamos un listado de proyectos

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
- `loading` → indica si estamos esperando datos
- `error` → guarda mensajes de error

📌 El estado ahora representa **la realidad de la app**.

---

## 🔄 Flujo correcto para consumir datos (muy importante)

Siempre debe seguirse este orden:

1. Activar `loading`
2. Re-renderizar para mostrar loading
3. Llamar al servicio
4. Guardar datos en el estado
5. Manejar errores
6. Desactivar `loading`
7. Re-renderizar la vista

👉 Saltarse pasos genera bugs.

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
  // Primera carga
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

👉 **Míralo completo primero**, luego lo explicamos.

---

## 🔍 Explicación paso a paso — Vista Projects

### 1️⃣ Imports

- `store` → estado global
- `fetchProjects` → servicio API
- `render` → render consciente

---

### 2️⃣ Vista async

```js
export async function Projects() {
```
- La vista ahora puede esperar datos
- No es común, pero es didáctico

---

### 3️⃣ Control de primera carga

```js
if (store.projects.length === 0) {
```
- Evita llamadas duplicadas
- Optimiza la app

---

### 4️⃣ Activar loading

```js
store.loading = true;
render(Projects());
```
- Cambiamos estado
- Forzamos re-render

---

### 5️⃣ Llamar al servicio

```js
store.projects = await fetchProjects();
```
- Esperamos respuesta
- Guardamos datos en el estado

---

### 6️⃣ Manejo de errores

```js
catch (err) {
  store.error = err.message;
}
```

---

### 7️⃣ Finalizar loading

```js
finally {
  store.loading = false;
  render(Projects());
}
```

- Siempre se ejecuta
- Garantiza UI consistente

---

### 8️⃣ Render condicional

```js
if (store.loading) ...
if (store.error) ...
```

📌 La vista **responde al estado**.

---

## 🔄 Flujo mental completo

1. Usuario entra a Proyectos
2. No hay datos → loading
3. Se muestra “Cargando…”
4. Llega respuesta de la API
5. Se guarda en el estado
6. Se re-renderiza
7. Se muestran proyectos

👉 **Esto es una SPA real**.

---

## 🔗 Conexión con frameworks

| FlowDesk | Angular |
|--------|--------|
| fetch | HttpClient |
| service | Service |
| loading | isLoading |
| error | errorState |
| render | Change Detection |

---

## 🧪 Ejercicios sugeridos

1. Cambiar endpoint (`/users`)
2. Mostrar nombre del usuario
3. Forzar error cambiando la URL
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
