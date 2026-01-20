# 🚦 Clase 2 — SPA con JavaScript
## Rutas, Estado y Navegación sin Recarga

> **Clan Hamilton — Frontend Básico**  
Continuación directa de: *Introducción a las SPA*

---

## 🎯 Objetivo de la clase
Al finalizar esta clase, los coders serán capaces de:
- Entender qué son las **rutas** en una SPA
- Usar `location.hash` para simular URLs
- Manejar **estado básico** en JavaScript
- Construir una SPA más organizada y realista

---

## 🧠 Recordemos (clase anterior)

En la clase pasada aprendimos que una SPA:
- Tiene **un solo HTML**
- Cambia el contenido con **JavaScript**
- No recarga la página al navegar

📌 Ahora vamos a dar el siguiente paso: **que la URL cambie**.

---

## 🌐 ¿Qué son las rutas en una SPA?

En una aplicación tradicional:

```
/        → home.html
/about   → about.html
/contact → contact.html
```

En una SPA:

```
/        → index.html
/#/home
/#/about
/#/contact
```

➡️ Todo sigue siendo **index.html**, pero JavaScript decide qué mostrar.

![SPA routing](https://miro.medium.com/v2/resize:fit:1400/1*0iZ8R8Vt1ZL0Q5U8E0d6Gg.png)

---

## 🔗 El hash (#) en la URL

Ejemplo:
```
http://localhost:5500/#/home
```

- Todo lo que está después de `#` **no recarga la página**
- JavaScript puede leerlo

```js
console.log(location.hash); // #/home
```

---

## 🧭 Simulando rutas con JavaScript

Creamos un **router simple**:

```js
function router() {
  const route = location.hash;

  if (route === '#/home') renderHome();
  else if (route === '#/services') renderServices();
  else if (route === '#/contact') renderContact();
  else renderNotFound();
}
```

---

## 👂 Escuchando cambios en la URL

```js
window.addEventListener('hashchange', router);
window.addEventListener('load', router);
```

📌 Ahora la app responde cuando el usuario navega o recarga.

---

## 🧱 Estructura recomendada

```text
spa-routing/
 ├── index.html
 ├── styles.css
 └── app.js
```

---

## 🧩 Código completo (ejemplo base)

### index.html

```html
<nav>
  <a href="#/home">Home</a>
  <a href="#/services">Servicios</a>
  <a href="#/contact">Contacto</a>
</nav>

<main id="app"></main>
```

---

### app.js

```js
const app = document.getElementById('app');

function renderHome() {
  app.innerHTML = '<h1>🏠 Home</h1>';
}

function renderServices() {
  app.innerHTML = '<h1>🛠️ Servicios</h1>';
}

function renderContact() {
  app.innerHTML = '<h1>📩 Contacto</h1>';
}

function renderNotFound() {
  app.innerHTML = '<h1>❌ 404</h1><p>Página no encontrada</p>';
}

function router() {
  const route = location.hash;

  switch (route) {
    case '#/home':
      renderHome();
      break;
    case '#/services':
      renderServices();
      break;
    case '#/contact':
      renderContact();
      break;
    default:
      renderHome();
  }
}

window.addEventListener('hashchange', router);
window.addEventListener('load', router);
```

---

## 🧠 ¿Qué es el estado en una SPA?

El **estado** es información que vive en memoria:
- Usuario logueado
- Contador
- Tema claro / oscuro

Ejemplo simple:

```js
let counter = 0;
```

---

## 🔄 Estado + Renderizado

```js
let counter = 0;

function renderCounter() {
  app.innerHTML = `
    <h1>Contador</h1>
    <p>${counter}</p>
    <button id="add">+</button>
  `;

  document.getElementById('add').onclick = () => {
    counter++;
    renderCounter();
  };
}
```

📌 El estado cambia → volvemos a renderizar.

---

# 🛠️ EJERCICIO PRÁCTICO

## 🎯 Objetivo
Crear una SPA con:
- Navegación por **hash**
- Al menos **3 rutas**
- Un **estado simple** (contador, nombre, like, etc.)

---

## 📋 Requisitos

✔ Usar `location.hash`  
✔ Usar `hashchange`  
✔ Tener función `router()`  
✔ Mantener el estado en variables JS

---

## ⭐ Reto extra (opcional)

- Marcar el link activo
- Guardar estado en `localStorage`
- Separar vistas en funciones independientes

---

## 🏁 Cierre

✔ Ya sabes cómo funcionan las **rutas en una SPA**  
✔ Entendiste el concepto de **estado**  
✔ Estás replicando la base de Angular y React

🚀 **Clase siguiente**: Componentes y separación de responsabilidades

---

> *Clan Hamilton — entender el core antes del framework* 💪

