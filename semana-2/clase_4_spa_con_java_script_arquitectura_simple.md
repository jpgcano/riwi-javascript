# 🏗️ Clase 4 — SPA con JavaScript
## Arquitectura Simple y Organización en Carpetas

> **Clan Hamilton — Frontend Básico**  
Continuación de: *Clase 1 (SPA)* · *Clase 2 (Rutas y Estado)* · *Clase 3 (Componentes)*

---

## 🎯 Objetivo de la clase
Al finalizar esta clase, los coders serán capaces de:
- Organizar una SPA en **carpetas claras**
- Separar **componentes, vistas, router y estado**
- Entender el **porqué** de la arquitectura
- Prepararse mentalmente para Angular / React

---

## 🧠 El problema real

Cuando una app crece:
- Un solo `app.js` se vuelve inmanejable 😵‍💫
- Se mezcla lógica, UI y navegación
- Mantener y escalar es difícil

📌 **Solución**: Arquitectura simple.

---

## 🧱 ¿Qué es arquitectura en frontend?

Es **cómo organizamos el código**, no el diseño visual.

Buena arquitectura =
- Código entendible
- Fácil de mantener
- Fácil de escalar

![Frontend architecture](https://miro.medium.com/v2/resize:fit:1400/1*6p5pGJ8x0pZQ9n0KZ3Y0jA.png)

---

## 🗂️ Estructura recomendada (nivel inicial)

```text
spa-architecture/
 ├── index.html
 ├── styles.css
 └── src/
     ├── components/
     │   ├── Navbar.js
     │   └── Footer.js
     ├── views/
     │   ├── Home.js
     │   ├── Services.js
     │   └── Contact.js
     ├── router/
     │   └── router.js
     ├── state/
     │   └── store.js
     └── app.js
```

📌 **Cada carpeta tiene una responsabilidad clara**.

---

## 🧩 Carpeta `components/`

Componentes reutilizables (no dependen de la ruta).

### Navbar.js
```js
export function Navbar() {
  return `
    <nav>
      <a href="#/home">Home</a>
      <a href="#/services">Servicios</a>
      <a href="#/contact">Contacto</a>
    </nav>
  `;
}
```

---

## 📄 Carpeta `views/`

Vistas completas según la ruta.

### Home.js
```js
export function Home() {
  return '<h1>🏠 Home</h1><p>Bienvenido</p>';
}
```

📌 Cada vista **retorna HTML**, nada más.

---

## 🚦 Carpeta `router/`

Encargada de decidir **qué vista mostrar**.

### router.js
```js
import { Home } from '../views/Home.js';
import { Services } from '../views/Services.js';
import { Contact } from '../views/Contact.js';
import { render } from '../app.js';

export function router() {
  const route = location.hash;

  switch (route) {
    case '#/home':
      render(Home());
      break;
    case '#/services':
      render(Services());
      break;
    case '#/contact':
      render(Contact());
      break;
    default:
      render(Home());
  }
}
```

---

## 🧠 Carpeta `state/`

Estado global de la aplicación.

### store.js
```js
export const store = {
  user: null,
  counter: 0
};
```

📌 Aquí vive la información compartida.

---

## 🔗 app.js (punto de entrada)

```js
import { Navbar } from './components/Navbar.js';
import { router } from './router/router.js';

const app = document.getElementById('app');

export function render(view) {
  app.innerHTML = `
    ${Navbar()}
    <main>${view}</main>
  `;
}

window.addEventListener('hashchange', router);
window.addEventListener('load', router);
```

📌 `app.js` **coordina**, no decide.

---

## 🌍 index.html (importante)

```html
<script type="module" src="./src/app.js"></script>
```

✔ Usamos **ES Modules**

---

## 🧠 Mapa mental final

- components → piezas reutilizables
- views → pantallas
- router → navegación
- state → datos
- app.js → orquestador

![SPA folders](https://miro.medium.com/v2/resize:fit:1400/1*FqZ8F5b6m5q1R5Jb1zZk3A.png)

---

# 🛠️ EJERCICIO PRÁCTICO

## 🎯 Objetivo
Reorganizar la SPA anterior usando esta arquitectura.

---

## 📋 Requisitos

✔ Crear todas las carpetas  
✔ Usar `type="module"`  
✔ Separar vistas, componentes y router  
✔ La app debe seguir funcionando igual

---

## ⭐ Reto adicional (opcional)

- Agregar un nuevo estado en `store`
- Crear un componente Footer
- Proteger una ruta (ej: solo si user existe)

---

## 🏁 Cierre

✔ Tu SPA ya tiene **arquitectura real**  
✔ Estás pensando como dev profesional  
✔ Estás listo para un framework

🚀 **Clase siguiente**: Puente a Angular (componentes, módulos, servicios)

---

> *Clan Hamilton — orden primero, magia después* 💪

