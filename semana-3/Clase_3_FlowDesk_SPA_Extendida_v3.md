# 🟦 CLASE 3 — FlowDesk SPA (VERSIÓN ULTRA EXPLICADA)
## Router Avanzado, Rutas Dinámicas y Flujo de Navegación
**Semana 3 — JavaScript Puro (Vanilla)**

**Clan Hamilton**  
*Entender la navegación es entender la SPA* 👑

---

## 🌐 Contexto del proyecto FlowDesk

Hasta ahora, FlowDesk ya tiene:

- ✔ Arquitectura base clara (Clase 1)
- ✔ Estado global centralizado (Clase 2)
- ✔ Render consciente
- ✔ Manejo correcto de eventos

❗ **Pero todavía falta algo clave**:

> El usuario no puede moverse entre secciones como en una app real.

En esta clase vamos a resolver eso creando un **router avanzado**, capaz de:

- Leer la URL
- Decidir qué vista mostrar
- Manejar rutas dinámicas
- Controlar el flujo de navegación

---

## 🎯 Objetivo REAL de esta clase

Al finalizar esta clase, el coder podrá:

- Explicar **qué es un router y por qué existe**
- Entender la URL como **estado de navegación**
- Crear rutas estáticas y dinámicas
- Seguir el flujo completo:
  `click → URL → router → vista → render`
- Entender el código del router **línea por línea**
- Estar listo mentalmente para Angular Router

---

## 🧠 ¿Qué es un router en una SPA?

Un **router** es una pieza de código que:

> Lee la URL actual y decide qué vista debe mostrarse.

En una SPA:
- No hay múltiples HTML
- No hay navegación al servidor
- Todo se decide con JavaScript

📌 El router reemplaza al servidor en la navegación.

---

## 🔗 ¿Por qué usamos Hash Routing?

FlowDesk usa rutas con `#`:

```text
#/dashboard
#/projects
#/projects/1
```

### ¿Qué es el `#`?

El `#` (hash):
- No recarga la página
- Es manejado solo por el navegador
- Dispara el evento `hashchange`

📌 Ideal para aprender SPAs sin backend.

---

## 🧭 router/router.js — CÓDIGO COMPLETO

Antes de analizar línea por línea, mira **el router completo**:

```js
import { render } from '../core/render.js';
import { Dashboard } from '../views/Dashboard.js';
import { Projects } from '../views/Projects.js';
import { ProjectDetail } from '../views/ProjectDetail.js';

export function router() {
  const hash = location.hash || '#/dashboard';
  const [, route, param] = hash.split('/');

  switch (route) {
    case 'dashboard':
      render(Dashboard());
      break;

    case 'projects':
      if (param) {
        render(ProjectDetail(param));
      } else {
        render(Projects());
      }
      break;

    default:
      render(Dashboard());
  }
}
```

👉 **Primero entiéndelo como bloque**, luego vamos por partes.

---

## 🔍 Análisis del router — línea por línea

### 1️⃣ Imports

```js
import { render } from '../core/render.js';
import { Dashboard } from '../views/Dashboard.js';
import { Projects } from '../views/Projects.js';
import { ProjectDetail } from '../views/ProjectDetail.js';
```

- `render` → pinta la vista en el DOM
- Las vistas → el router decide cuál mostrar

📌 El router **no crea HTML**, solo decide.

---

### 2️⃣ Exportar la función

```js
export function router() {
```
- Se exporta para usarla desde `app.js`
- Es el punto central de navegación

---

### 3️⃣ Leer la URL

```js
const hash = location.hash || '#/dashboard';
```

- `location.hash` → lee la URL actual
- Si no existe → usamos `#/dashboard`

📌 Evita pantalla en blanco.

---

### 4️⃣ Extraer ruta y parámetro

```js
const [, route, param] = hash.split('/');
```

Ejemplo con:
```text
#/projects/1
```

Resultado:
```js
['#', 'projects', '1']
```

Asignación:
- `route = 'projects'`
- `param = '1'`

📌 Así nacen las rutas dinámicas.

---

### 5️⃣ Decidir la vista

```js
switch (route) {
```

- Cada `case` representa una ruta
- Aquí se define el flujo

---

### 6️⃣ Ruta dashboard

```js
case 'dashboard':
  render(Dashboard());
  break;
```

- Renderiza la vista principal

---

### 7️⃣ Ruta projects (dinámica)

```js
case 'projects':
  if (param) {
    render(ProjectDetail(param));
  } else {
    render(Projects());
  }
  break;
```

- Sin `param` → lista
- Con `param` → detalle

📌 Misma ruta, dos comportamientos.

---

### 8️⃣ Ruta por defecto

```js
default:
  render(Dashboard());
```

- Evita rutas inválidas
- Protege la app

---

## 📄 views/Projects.js — CÓDIGO COMPLETO

```js
import { store } from '../state/store.js';

export function Projects() {
  return `
    <h2>Proyectos</h2>
    <ul>
      ${store.projects
        .map(p => `<li><a href="#/projects/${p.id}">${p.name}</a></li>`)
        .join('')}
    </ul>
  `;
}
```

---

## 🔍 Análisis de Projects.js

- Lee el estado global
- Genera enlaces dinámicos
- Cambia la URL sin recargar

---

## 📄 views/ProjectDetail.js — CÓDIGO COMPLETO

```js
import { store } from '../state/store.js';

export function ProjectDetail(id) {
  const project = store.projects.find(p => p.id == id);

  if (!project) {
    return '<p>Proyecto no encontrado</p>';
  }

  return `
    <h2>${project.name}</h2>
    <p>Estado: ${project.status}</p>
    <a href="#/projects">⬅ Volver</a>
  `;
}
```

---

## 🔍 Análisis de ProjectDetail.js

- Recibe el id desde la URL
- Busca el proyecto correcto
- Maneja errores
- Renderiza contenido dinámico

---

## 🔄 Flujo COMPLETO de navegación

1. Click en enlace
2. Cambia la URL
3. Se dispara `hashchange`
4. Se ejecuta `router()`
5. Se decide la vista
6. `render()` pinta el HTML

👉 Esto es una SPA real.

---

## 🏁 Cierre de la clase

✔ Router avanzado implementado  
✔ Rutas dinámicas funcionando  
✔ Navegación clara y explicada  

🚀 **Clase 4**: Consumo de servicios (API), loading y error states

---

**Clan Hamilton**  
*Quien entiende el router, entiende la SPA* 💪
