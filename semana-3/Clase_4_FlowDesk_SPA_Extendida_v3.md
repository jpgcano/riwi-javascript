# 🟦 CLASE 4 — FlowDesk SPA (VERSIÓN INCREMENTAL ULTRA PEDAGÓGICA)
## Consumo de API, Async/Await, Loading y Manejo de Errores
**Semana 3 — JavaScript Puro (Vanilla)**

**Clan Hamilton**  
*Entender JavaScript es entender la SPA* 👑

---

## 🌐 Contexto del proyecto FlowDesk

FlowDesk ya es una SPA real:

- ✔ Arquitectura clara
- ✔ Estado global
- ✔ Router avanzado
- ✔ Vistas dinámicas

Pero ahora damos un salto **clave**:

> FlowDesk deja de usar datos simulados y empieza a **hablar con un servidor**.

Para lograr esto, necesitamos dominar **conceptos fundamentales de JavaScript**, no solo copiar código.

---

## 🎯 Objetivo REAL de esta clase

Al finalizar esta clase, el coder será capaz de:

- Entender **qué es una API y un endpoint**
- Comprender **qué es una promesa**
- Entender profundamente **async / await**
- Usar `fetch` correctamente
- Manejar **loading y error states**
- Entender el flujo:
  `async JS → API → estado → render`
- Aplicar estos conceptos dentro del proyecto FlowDesk

---

## 🧠 Antes de la API: ¿qué es una promesa?

En JavaScript, una **Promesa** representa:

> Un valor que aún NO existe, pero existirá en el futuro.

Ejemplo mental:
- Pides comida 🍔
- No la tienes aún
- Te prometen que llegará

Estados de una promesa:
- `pending` → esperando
- `fulfilled` → llegó bien
- `rejected` → algo falló

📌 Las APIs funcionan con promesas.

---

## 🧠 ¿Qué es `async / await`?

`async / await` es **azúcar sintáctica** para trabajar con promesas de forma más clara.

### ❌ Sin async / await

```js
fetch(url)
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err));
```

Difícil de leer para principiantes 😵‍💫

---

### ✅ Con async / await

```js
async function loadData() {
  try {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.error(err);
  }
}
```

👉 Se lee **de arriba hacia abajo**.

---

## 🧠 Reglas CLAVE de async / await

1. `await` SOLO puede usarse dentro de una función `async`
2. `await` pausa la función, NO el programa
3. El código sigue siendo no bloqueante
4. Los errores se manejan con `try / catch`

---

## 🌍 API que usaremos en FlowDesk

Usaremos la API pública:

```text
https://jsonplaceholder.typicode.com
```

Endpoint usado:

```text
/posts
```

👉 Simula una lista de proyectos.

---

## 🗂️ services/projectsService.js — CÓDIGO COMPLETO

```js
export async function fetchProjects() {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/posts'
  );

  if (!response.ok) {
    throw new Error('Error al cargar proyectos');
  }

  const data = await response.json();
  return data.slice(0, 5);
}
```

---

## 🔍 Explicación JS + FlowDesk (línea por línea)

```js
export async function fetchProjects() {
```
- Creamos una función async
- Devuelve una promesa automáticamente

---

```js
const response = await fetch(url);
```
- `fetch` devuelve una promesa
- `await` espera la respuesta
- No bloquea la app

---

```js
if (!response.ok) {
  throw new Error(...);
}
```
- Validamos la respuesta
- `throw` rechaza la promesa
- El error viajará al `catch`

---

```js
const data = await response.json();
```
- Convertimos JSON a JS
- También es una promesa

---

## 🧠 Estado global actualizado

```js
export const store = {
  user: null,
  projects: [],
  loading: false,
  error: null
};
```

📌 El estado refleja:
- datos
- procesos
- errores

---

## 📄 Projects.js — CÓDIGO COMPLETO

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

  if (store.loading) return '<p>Cargando proyectos...</p>';
  if (store.error) return `<p>Error: ${store.error}</p>`;

  return `
    <h2>Proyectos</h2>
    <ul>
      ${store.projects.map(p => `<li>${p.title}</li>`).join('')}
    </ul>
  `;
}
```

---

## 🔍 Explicación CLAVE del flujo async

1. La vista se ejecuta
2. No hay datos → activa loading
3. Se renderiza “Cargando…”
4. `await` espera la API
5. Llega respuesta o error
6. Estado se actualiza
7. Se re-renderiza

📌 **Nada ocurre en paralelo sin control**.

---

## 🧠 Diferencia clave: JS síncrono vs asíncrono

| Síncrono | Asíncrono |
|--------|----------|
| Bloquea | No bloquea |
| Espera | Continúa |
| Simple | Realista |

Las APIs **SIEMPRE son asíncronas**.

---

## 🔗 Conexión con frameworks

| FlowDesk | Angular |
|--------|--------|
| async / await | HttpClient |
| fetch | Observable |
| loading | isLoading |
| error | errorState |

---

## 🧪 Ejercicios sugeridos

1. Quitar `await` y ver qué pasa
2. Forzar error cambiando la URL
3. Mostrar spinner en vez de texto
4. Crear función genérica `loadData`

---

## 🏁 Cierre de la clase

✔ Entiendes async / await  
✔ Entiendes promesas  
✔ FlowDesk consume APIs reales  
✔ UI reacciona al estado  

🚀 **Clase 5**: Autenticación simulada y rutas protegidas

---

**Clan Hamilton**  
*Quien entiende async, entiende el frontend moderno* 💪
