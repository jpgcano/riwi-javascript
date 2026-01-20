# 🧩 Clase 3 — SPA con JavaScript
## Componentes y Separación de Responsabilidades

> **Clan Hamilton — Frontend Básico**  
Continuación de: *Clase 1 (SPA)* y *Clase 2 (Rutas y Estado)*

---

## 🎯 Objetivo de la clase
Al finalizar esta clase, los coders serán capaces de:
- Entender qué es un **componente** en frontend
- Separar responsabilidades en una SPA
- Organizar mejor el código JavaScript
- Pensar como lo hacen frameworks modernos (Angular / React)

---

## 🧠 Recordemos hasta ahora

Ya sabemos:
- Renderizar vistas dinámicamente
- Navegar usando `location.hash`
- Manejar **estado básico**

📌 Problema actual:
> Nuestro archivo `app.js` empieza a crecer demasiado 😵‍💫

---

## 🧩 ¿Qué es un componente?

Un **componente** es:
- Una **pieza reutilizable** de la interfaz
- Encapsula **estructura + lógica**

Ejemplos de componentes:
- Navbar
- Tarjeta de producto
- Formulario

![Componentes UI](https://miro.medium.com/v2/resize:fit:1400/1*X0X5nM6BfLhYz3n5V8iJQg.png)

---

## ❌ Código sin componentes (problema)

```js
app.innerHTML = `
  <nav>...</nav>
  <h1>Home</h1>
  <footer>...</footer>
`;
```

🔴 Problemas:
- Difícil de mantener
- Código repetido
- Poco escalable

---

## ✅ Pensando en componentes

Dividimos la interfaz:

- 🧭 Navbar
- 📄 Vista (Home, Servicios, Contacto)
- 🔻 Footer

Cada uno será una **función**.

---

## 🧱 Estructura del proyecto

```text
spa-components/
 ├── index.html
 ├── styles.css
 └── app.js
```

*(Más adelante separaremos en más archivos)*

---

## 🧭 Componente Navbar

```js
function Navbar() {
  return `
    <nav>
      <a href="#/home">Home</a>
      <a href="#/services">Servicios</a>
      <a href="#/contact">Contacto</a>
    </nav>
  `;
}
```

📌 Un componente **retorna HTML**.

---

## 📄 Componentes de vista

```js
function Home() {
  return '<h1>🏠 Home</h1><p>Bienvenido</p>';
}

function Services() {
  return '<h1>🛠️ Servicios</h1>';
}

function Contact() {
  return '<h1>📩 Contacto</h1>';
}
```

---

## 🧠 Render general de la app

```js
const app = document.getElementById('app');

function render(view) {
  app.innerHTML = `
    ${Navbar()}
    <main>
      ${view}
    </main>
  `;
}
```

📌 La vista cambia, el layout se mantiene.

---

## 🚦 Router usando componentes

```js
function router() {
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

window.addEventListener('hashchange', router);
window.addEventListener('load', router);
```

---

## 🧠 Ventajas de usar componentes

✅ Código más limpio  
✅ Fácil de leer  
✅ Fácil de escalar  
✅ Base directa de frameworks modernos

---

## 🧪 Mini ejemplo mental

Angular / React hacen esto:

```js
<Component />
```

Nosotros hacemos:

```js
Component();
```

📌 La idea es la misma.

---

# 🛠️ EJERCICIO PRÁCTICO

## 🎯 Objetivo
Refactorizar la SPA anterior para que:
- Todo sea **componentes**
- El layout no se repita

---

## 📋 Requisitos

✔ Crear al menos 4 componentes:
- Navbar
- Home
- Services
- Contact

✔ Usar una función `render()`  
✔ Usar `router()` con hash

---

## ⭐ Reto adicional (opcional)

- Crear componente Footer
- Pasar datos a un componente (parámetros)
- Marcar ruta activa

---

## 🏁 Cierre

✔ Ya piensas en **componentes**  
✔ Tu código es más profesional  
✔ Estás listo para separar en múltiples archivos

🚀 **Clase siguiente**: Arquitectura simple (views, router, state)

---

> *Clan Hamilton — construir como framework, entender como humano* 💪

