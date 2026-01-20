# 🟦 CLASE 2 — FlowDesk SPA
## Estado Global y Render Consciente
**Semana 3 — JavaScript Puro (Vanilla)**

**Clan Hamilton**  
*Una app vive por su estado* 👑

---

## 🌐 Contexto dentro del proyecto FlowDesk

En la **Clase 1** construimos la **base arquitectónica** de FlowDesk:

- La app carga correctamente
- Existe un router
- Existe un render centralizado
- Existe una primera vista (Dashboard)

Pero FlowDesk **todavía no “vive”**.

📌 ¿Por qué?
Porque:
- Los datos son estáticos
- Nada cambia en el tiempo
- La app no recuerda nada

👉 En esta clase **le damos vida a FlowDesk**.

---

## 🎯 Objetivo REAL de esta clase

Al finalizar esta clase, el coder será capaz de:

- Entender **qué es el estado en una SPA**
- Crear un **estado global centralizado**
- Comprender el concepto de **fuente única de verdad**
- Actualizar la vista cuando el estado cambia
- Entender por qué **el render NO es automático**
- Pensar en términos de **flujo estado → vista**

📌 Esta clase marca la diferencia entre “mostrar HTML” y “construir una aplicación”.

---

## 🧠 ¿Qué es el estado en una aplicación?

El **estado** es:

> Toda la información que puede cambiar mientras la app está funcionando.

Ejemplos de estado:

- Usuario logueado
- Lista de proyectos
- Contadores
- Filtros
- Vista seleccionada

📌 Si un dato puede cambiar → **es estado**.

---

## ❌ El error común (muy importante)

Muchos coders hacen esto:

```js
let user = null;
let projects = [];
```

En distintos archivos.

❌ Eso rompe la app  
❌ Duplica información  
❌ Genera bugs difíciles  

👉 Necesitamos **un solo lugar** para el estado.

---

## ✅ Fuente Única de Verdad

En FlowDesk vamos a usar este principio:

> **Single Source of Truth**

Significa:
- El estado vive en **un solo lugar**
- Todas las vistas leen de ahí
- Nadie inventa su propio estado

---

## 🗂️ state/store.js — Estado global

Creamos el archivo:

```text
src/state/store.js
```

```js
export const store = {
  user: null,
  projects: [
    { id: 1, name: 'FlowDesk Web', status: 'active' },
    { id: 2, name: 'Mobile App', status: 'paused' }
  ]
};
```

📌 Todavía es estático, pero **centralizado**.

---

## 🧠 Relación clave: Estado → Vista

Las vistas **NO inventan datos**.

Ejemplo incorrecto:

```js
export function Dashboard() {
  const projects = 3; // ❌
}
```

Ejemplo correcto:

```js
import { store } from '../state/store.js';

export function Dashboard() {
  return `<p>Proyectos: ${store.projects.length}</p>`;
}
```

👉 La vista **lee** el estado.

---

## 📄 Dashboard actualizado

```js
import { store } from '../state/store.js';

export function Dashboard() {
  return `
    <h1>FlowDesk</h1>
    <section class="cards">
      <div class="card">📁 Proyectos: ${store.projects.length}</div>
      <div class="card">👤 Usuario: ${store.user ?? 'No autenticado'}</div>
    </section>
  `;
}
```

📌 Ahora el HTML depende del estado.

---

## 🔁 ¿Por qué el render NO se actualiza solo?

Cuando hacemos:

```js
store.user = 'Angela';
```

👉 El estado cambia  
❌ La vista NO se actualiza sola

📌 JavaScript puro **NO es reactivo**.

---

## 🧠 Render consciente (concepto CLAVE)

En FlowDesk:

- Cambiar estado ❌ no es suficiente
- Debemos **volver a renderizar**

Eso es render consciente:

> “Yo decido cuándo se actualiza la vista”

---

## 🎨 Mejorando el render (core/render.js)

```js
const app = document.getElementById('app');

export function render(view) {
  app.innerHTML = `
    <main>
      ${view}
    </main>
  `;
}
```

📌 El render **no cambia**, lo que cambia es **cuándo lo llamamos**.

---

## 🧪 Simulando cambio de estado

En `Dashboard.js` (solo para la clase):

```js
import { store } from '../state/store.js';
import { render } from '../core/render.js';

document.addEventListener('click', () => {
  store.user = 'Angela';
  render(Dashboard());
});
```

📌 Esto demuestra el flujo:
estado → render → vista

---

## 🧠 Flujo mental completo

1. El usuario interactúa
2. El estado cambia
3. Llamamos a render
4. La vista se vuelve a generar
5. El usuario ve el cambio

👉 Esto es el corazón de una SPA.

---

## 🔗 Conexión con frameworks (importante)

| FlowDesk (JS puro) | Framework |
|------------------|-----------|
| store | Service / Store |
| render() | Change Detection |
| Vista | Component |
| Estado central | Reactive State |

👉 Los frameworks **automatizan esto**.

---

## 🧪 Ejercicio práctico de la clase

1. Crear `state/store.js`
2. Conectar el Dashboard al estado
3. Simular cambio de usuario
4. Forzar re-render
5. Explicar el flujo con palabras

---

## 🧠 Preguntas de reflexión

- ¿Por qué no dejamos que cada vista tenga su estado?
- ¿Qué pasa si no re-renderizamos?
- ¿Por qué esto se parece a React o Angular?
- ¿Qué automatizan los frameworks?

---

## 🏁 Cierre de la clase

✔ FlowDesk ahora tiene estado  
✔ La vista depende del estado  
✔ Entiendes el flujo real de una SPA  

🚀 **Clase 3**: Router avanzado y rutas dinámicas

---

**Clan Hamilton**  
*Sin estado, no hay aplicación* 💪
