# 🟦 CLASE 1 — FlowDesk SPA (VERSIÓN EXTENDIDA)
## Arquitectura Base, ES Modules y Primer Dashboard
**Semana 3 — JavaScript Puro (Vanilla)**

**Clan Hamilton**  
*Antes de escribir código, entendemos el sistema* 👑

---

## 🌐 Contexto del proyecto: ¿Qué es FlowDesk?

Durante esta semana vamos a construir **FlowDesk**, una **Single Page Application (SPA)** que simula un **dashboard interno de una empresa**.

FlowDesk representa un tipo de aplicación **muy común en el mundo real**, usada para:

- Gestión de proyectos
- Visualización de métricas
- Control de usuarios
- Acceso a información interna

📌 No es una app “de juguete”.  
📌 Es una simulación directa de lo que hace un frontend developer junior en un equipo real.

---

## 🧠 ¿Qué problema resuelve FlowDesk?

Imagina una empresa que necesita:

- Ver cuántos proyectos tiene activos
- Saber cuántos usuarios existen
- Consultar información sin recargar la página
- Controlar qué ve cada usuario

FlowDesk nace para **resolver ese problema**, y nosotros lo vamos a construir **paso a paso**, entendiendo cada decisión técnica.

---

## 🎯 Objetivo REAL de esta clase

Al finalizar esta clase, el coder **NO solo sabrá copiar código**, sino que será capaz de:

- Explicar **qué es una SPA y cómo funciona internamente**
- Entender **por qué la arquitectura importa desde el día 1**
- Comprender **qué son ES Modules y por qué existen**
- Entender **qué rol cumple `type="module"`**
- Diferenciar con claridad:
  - Punto de entrada
  - Router
  - Render
  - Vista
- Construir la **base sólida** del proyecto FlowDesk

📌 Esta clase define **la calidad del resto de la semana**.

---

## 🧠 Punto de partida (muy importante)

Hasta ahora muchos coders programan así:

- “Pongo el código y si funciona, está bien”
- “Todo puede ir en un solo archivo”
- “Luego lo organizo”

❌ Eso NO escala  
❌ Eso NO es profesional  

👉 Hoy empezamos a pensar como **desarrolladores frontend reales**.

---

## 🧩 ¿Qué es una SPA realmente?

Una **Single Page Application** es una aplicación que:

- Carga **un solo HTML**
- Cambia el contenido **sin recargar la página**
- Controla la navegación con JavaScript
- Maneja su propio estado

📌 En una SPA:
- El navegador NO vuelve al servidor por cada vista
- JavaScript controla el flujo

FlowDesk es una SPA **hecha a mano**.

---

## 🏗️ ¿Qué es arquitectura en frontend?

Arquitectura NO es diseño.

Arquitectura es responder bien estas preguntas:

- ¿Dónde vive cada cosa?
- ¿Quién decide qué se muestra?
- ¿Quién pinta el HTML?
- ¿Dónde irá el estado?
- ¿Cómo crece el proyecto sin romperse?

---

## 🗂️ Estructura del proyecto FlowDesk

```text
flowdesk-spa/
 ├── index.html        → HTML base
 ├── styles.css        → estilos globales
 └── src/
     ├── app.js        → punto de entrada
     ├── router/       → navegación
     ├── core/         → render central
     ├── views/        → pantallas
     ├── components/   → UI reutilizable
     └── state/        → estado (más adelante)
```

📌 Hoy NO usamos todas, pero **ya existen**.

---

## 🌍 index.html — El punto de montaje

```html
<div id="app"></div>
<script type="module" src="./src/app.js"></script>
```

### 🧠 Conceptos clave

- `#app` es donde vive TODA la SPA
- No hay más HTML dinámico fuera de ahí
- `type="module"` activa ES Modules

---

## 🧩 ¿Qué son ES Modules?

**ES Modules** es el sistema moderno que permite:

- Dividir JavaScript en archivos
- Importar código entre archivos
- Evitar variables globales
- Crear arquitectura real

📌 FlowDesk **no podría existir sin ES Modules**.

---

## 🧠 app.js — Punto de entrada

```js
import { router } from './router/router.js';

window.addEventListener('load', router);
window.addEventListener('hashchange', router);
```

---

## 🧭 router — El cerebro de navegación

```js
import { Dashboard } from '../views/Dashboard.js';
import { render } from '../core/render.js';

export function router() {
  render(Dashboard());
}
```

---

## 🎨 render — El único que pinta

```js
const app = document.getElementById('app');

export function render(view) {
  app.innerHTML = `<main>${view}</main>`;
}
```

---

## 📄 Dashboard — Primera vista

```js
export function Dashboard() {
  return `
    <h1>FlowDesk</h1>
    <section class="cards">
      <div class="card">📁 Proyectos: 3</div>
      <div class="card">👥 Usuarios: 5</div>
      <div class="card">✅ Tareas: 12</div>
    </section>
  `;
}
```

---

## 🔄 Flujo mental completo

1. El navegador carga `index.html`
2. Se ejecuta `app.js`
3. El router decide la vista
4. El render pinta
5. El usuario ve FlowDesk

---

## 🧪 Ejercicio de la clase

- Crear la estructura base del proyecto
- Implementar los archivos principales
- Renderizar el Dashboard
- Explicar con palabras el flujo de la app

---

## 🏁 Cierre de la clase

✔ Entiendes el proyecto  
✔ Entiendes la arquitectura  
✔ La base está lista  

🚀 **Clase 2**: Estado global y render consciente

---

**Clan Hamilton**  
*Primero entender, luego programar* 💪
