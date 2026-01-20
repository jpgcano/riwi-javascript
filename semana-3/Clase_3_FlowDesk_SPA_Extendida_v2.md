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

## 🧭 router/router.js — Código completo explicado

```js
import { render } from '../core/render.js';
import { Dashboard } from '../views/Dashboard.js';
import { Projects } from '../views/Projects.js';
import { ProjectDetail } from '../views/ProjectDetail.js';
```

### 🔍 ¿Qué hacen estos imports?

- Importamos `render` → para pintar vistas
- Importamos vistas → porque el router decide cuál mostrar

📌 El router **no crea HTML**, solo decide.

---

```js
export function router() {
```
👉 Exportamos la función para que `app.js` pueda usarla.

---

```js
  const hash = location.hash || '#/dashboard';
```
- `location.hash` lee la URL actual
- Si no hay hash, usamos `#/dashboard` por defecto

📌 Esto evita una pantalla en blanco.

---

```js
  const [, route, param] = hash.split('/');
```
### 🔍 ¿Qué pasa aquí?

Ejemplo:
```text
#/projects/1
```

Después de `split('/')`:
```js
['#', 'projects', '1']
```

Asignación:
- `route = 'projects'`
- `param = '1'`

📌 Así obtenemos rutas dinámicas.

---

```js
  switch (route) {
```
- Decidimos qué vista mostrar
- Cada `case` representa una ruta

---

```js
    case 'dashboard':
      render(Dashboard());
      break;
```
- Si la ruta es `dashboard`
- Renderizamos la vista Dashboard

📌 `render()` se encarga del DOM.

---

```js
    case 'projects':
      if (param) {
        render(ProjectDetail(param));
      } else {
        render(Projects());
      }
      break;
```
### 🔍 Lógica clave

- Si hay `param` → ruta dinámica
- Si no hay `param` → lista de proyectos

📌 Misma ruta, distinto comportamiento.

---

```js
    default:
      render(Dashboard());
```
- Ruta no válida
- Redirigimos a Dashboard

📌 Evita errores.

---

## 📄 views/Projects.js — Vista de lista explicada

```js
import { store } from '../state/store.js';
```

📌 La vista **lee el estado**, no inventa datos.

---

```js
export function Projects() {
```
- Función que representa la vista
- Devuelve HTML

---

```js
  return `
    <h2>Proyectos</h2>
    <ul>
      ${store.projects
        .map(p => `<li><a href="#/projects/${p.id}">${p.name}</a></li>`)
        .join('')}
    </ul>
  `;
```
### 🔍 Explicación

- Recorremos `store.projects`
- Generamos enlaces dinámicos
- Cada enlace cambia la URL
- NO recarga la página

---

## 📄 views/ProjectDetail.js — Vista dinámica explicada

```js
import { store } from '../state/store.js';
```

📌 Accedemos al estado global.

---

```js
export function ProjectDetail(id) {
```
- Recibe el `id` desde el router
- La vista depende de la URL

---

```js
  const project = store.projects.find(p => p.id == id);
```
- Buscamos el proyecto correcto
- Comparamos con el parámetro

---

```js
  if (!project) {
    return '<p>Proyecto no encontrado</p>';
  }
```
📌 Manejo de errores básicos.

---

```js
  return `
    <h2>${project.name}</h2>
    <p>Estado: ${project.status}</p>
    <a href="#/projects">⬅ Volver</a>
  `;
```
- Mostramos información dinámica
- Enlace para volver sin recargar

---

## 🔄 Flujo COMPLETO de navegación

1. El usuario hace clic en un enlace
2. Cambia el hash de la URL
3. Se dispara `hashchange`
4. `router()` se ejecuta
5. Decide la vista correcta
6. `render()` pinta el HTML

👉 Esto es una SPA real.

---

## 🧠 Separación de responsabilidades

| Parte | Qué hace |
|----|----|
| URL | Representa navegación |
| Router | Decide vista |
| Vista | Genera HTML |
| Render | Pinta DOM |
| Store | Provee datos |

📌 Si mezclas esto, aparecen bugs.

---

## 🔗 Conexión con frameworks

| FlowDesk | Angular |
|--------|--------|
| router.js | RouterModule |
| hash | Routes |
| param | ActivatedRoute |
| render | Change Detection |

👉 Angular solo automatiza lo que tú ya entiendes.

---

## 🧪 Ejercicio práctico

1. Crear rutas:
   - `#/dashboard`
   - `#/projects`
   - `#/projects/:id`
2. Navegar entre vistas
3. Explicar cada paso del flujo
4. Forzar errores y entenderlos

---

## 🏁 Cierre de la clase

✔ FlowDesk navega como app real  
✔ Entiendes cada línea del router  
✔ Estás listo para rutas protegidas  

🚀 **Clase 4**: Consumo de servicios (API), loading y error states

---

**Clan Hamilton**  
*Quien entiende el router, entiende la SPA* 💪
