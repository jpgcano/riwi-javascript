# 🟦 CLASE 1 — FlowDesk SPA (VERSIÓN EXTENDIDA)
## Arquitectura Base, ES Modules y Primer Dashboard
**Semana 3 — JavaScript Puro (Vanilla)**

**Clan Hamilton**  
*Antes de escribir código, entendemos el sistema* 👑

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

### ❌ Mala arquitectura

- Todo en `app.js`
- Variables globales
- Código duplicado
- Cambiar algo rompe todo

### ✅ Buena arquitectura

- Responsabilidades claras
- Código predecible
- Archivos pequeños y enfocados
- Base para crecer

📌 Los frameworks existen para **imponer buena arquitectura**.

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

## 🧩 ¿Qué son ES Modules? (explicado sin vueltas)

**ES Modules** es el sistema moderno que permite:

- Dividir JavaScript en archivos
- Importar código entre archivos
- Evitar variables globales
- Crear arquitectura real

### 📦 Ejemplo mental

Cada archivo es una caja:

- `export` → lo que saco de la caja
- `import` → lo que tomo de otra caja

Nada se mezcla.

---

## ❓ ¿Por qué necesitamos `type="module"`?

Sin esto:

```js
import { router } from './router/router.js';
// ❌ Error
```

Con esto:

```html
<script type="module" src="./src/app.js"></script>
```

```js
import { router } from './router/router.js';
// ✅ Funciona
```

### 📌 Regla de oro

> Si usas `import / export`, DEBES usar `type="module"`.

---

## 🧠 app.js — Punto de entrada

Responsabilidad:

- Arrancar la app
- Escuchar navegación
- NO renderizar HTML

```js
import { router } from './router/router.js';

window.addEventListener('load', router);
window.addEventListener('hashchange', router);
```

📌 app.js **no sabe qué vista existe**.

---

## 🧭 router — El cerebro de navegación

Responsabilidad:

- Leer la URL
- Decidir QUÉ vista mostrar

```js
import { Dashboard } from '../views/Dashboard.js';
import { render } from '../core/render.js';

export function router() {
  render(Dashboard());
}
```

📌 El router:
- Decide
- Controla el flujo
- NO pinta HTML

---

## 🎨 render — El único que pinta

```js
const app = document.getElementById('app');

export function render(view) {
  app.innerHTML = `<main>${view}</main>`;
}
```

📌 Un solo render:
- Control total
- Menos bugs
- Arquitectura clara

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

### 📌 Importante

- NO maneja estado
- NO maneja navegación
- SOLO retorna HTML

---

## 🔄 Flujo mental completo

1. El navegador carga `index.html`
2. Se ejecuta `app.js`
3. El router decide la vista
4. El render pinta
5. El usuario ve la app

👉 Esto es una SPA real.

---

## 🧪 Ejercicio de la clase

1. Crear la estructura completa
2. Implementar cada archivo
3. Ver el Dashboard en pantalla
4. Explicar el flujo SIN mirar el código

---

## 🧠 Preguntas clave (code review)

- ¿Por qué el router no pinta HTML?
- ¿Por qué el render es único?
- ¿Qué rompe la arquitectura?
- ¿Dónde irá el estado después?

---

## 🏁 Cierre de la clase

✔ Entiendes qué estás construyendo  
✔ Entiendes por qué está organizado así  
✔ Tienes una base profesional  

🚀 **Clase 2**: Estado global y render consciente

---

**Clan Hamilton**  
*Primero entender, luego programar* 💪
