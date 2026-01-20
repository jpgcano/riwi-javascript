# 🟦 CLASE 3 — FlowDesk SPA (VERSIÓN EXTENDIDA)
## Router Avanzado, Rutas Dinámicas y Flujo de Navegación
**Semana 3 — JavaScript Puro (Vanilla)**

**Clan Hamilton**  
*La navegación define el flujo de una aplicación* 👑

---

## 🌐 Contexto dentro del proyecto FlowDesk

En la **Clase 1**:
- Creamos la arquitectura base
- Entendimos ES Modules y `type="module"`

En la **Clase 2**:
- Introdujimos estado global
- Aprendimos render consciente
- Implementamos Event Delegation

👉 En esta **Clase 3**, FlowDesk empieza a **navegar como una app real**.

---

## 🎯 Objetivo REAL de esta clase

Al finalizar esta clase, el coder será capaz de:

- Entender **qué es un router en una SPA**
- Manejar múltiples rutas sin recargar la página
- Implementar **rutas dinámicas con parámetros**
- Separar navegación de renderizado
- Entender el flujo completo **URL → router → vista**
- Prepararse mentalmente para Angular Router / React Router

---

## 🧠 ¿Qué es un router en una SPA?

Un **router** es el responsable de:

> Leer la URL y decidir **qué vista mostrar**.

En una SPA:
- No hay múltiples HTML
- No hay navegación al servidor
- Todo se decide en JavaScript

📌 El router es el **cerebro de la navegación**.

---

## 🔗 Hash Routing (lo que usamos en FlowDesk)

FlowDesk usa **hash routing**:

```text
#/dashboard
#/projects
#/projects/1
```

### ¿Por qué hash (`#`)?

- Funciona sin servidor
- No requiere configuración extra
- Ideal para aprender SPAs desde cero

👉 Más adelante, frameworks usan rutas más avanzadas.

---

## 🧭 router/router.js — Router avanzado

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

📌 El router:
- Lee la URL
- Extrae parámetros
- Decide qué vista mostrar

---

## 🧩 Rutas dinámicas (concepto CLAVE)

Ruta dinámica:

```text
#/projects/1
```

Significa:
- `projects` → vista
- `1` → identificador

👉 El router interpreta la URL y pasa el parámetro a la vista.

---

## 📄 views/Projects.js — Lista

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

📌 Cada link cambia la URL, no recarga la página.

---

## 📄 views/ProjectDetail.js — Detalle dinámico

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

📌 La vista depende del parámetro.

---

## 🔄 Flujo mental completo de navegación

1. El usuario hace clic en un enlace
2. Cambia el `location.hash`
3. Se dispara `hashchange`
4. El router se ejecuta
5. Decide la vista
6. `render()` pinta el HTML

👉 No hay recarga de página.

---

## 🧠 Separación de responsabilidades

| Parte | Responsabilidad |
|----|----|
| URL | Representa el estado de navegación |
| Router | Decide la vista |
| Vista | Muestra información |
| Render | Pinta el DOM |
| Estado | Provee datos |

📌 Ninguna hace el trabajo de otra.

---

## 🔗 Conexión con frameworks

| FlowDesk | Angular |
|--------|--------|
| router.js | RouterModule |
| hash | Routes |
| param | ActivatedRoute |
| render() | Change Detection |

👉 Estás aprendiendo el **core mental**.

---

## 🧪 Ejercicio práctico de la clase

1. Implementar las rutas:
   - `#/dashboard`
   - `#/projects`
   - `#/projects/:id`
2. Crear las vistas correspondientes
3. Navegar entre vistas sin recargar
4. Explicar el flujo completo de navegación

---

## 🧠 Preguntas de reflexión

- ¿Por qué el router no pinta HTML directamente?
- ¿Por qué la URL representa estado?
- ¿Qué ventaja tienen las rutas dinámicas?
- ¿Qué automatizan los frameworks aquí?

---

## 🏁 Cierre de la clase

✔ FlowDesk navega correctamente  
✔ La URL controla la vista  
✔ La app se siente real  

🚀 **Clase 4**: Consumo de servicios (API) y estados de carga

---

**Clan Hamilton**  
*Navegar bien es pensar bien* 💪
