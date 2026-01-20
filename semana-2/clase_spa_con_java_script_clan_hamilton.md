# 🚀 Single Page Applications (SPA) con JavaScript

> **Clan Hamilton — Frontend Básico**  
Nivel: Inicial (JavaScript)

---

## 🎯 Objetivo de la clase
Al finalizar esta clase, los coders del **Clan Hamilton** serán capaces de:
- Entender qué es una **Single Page Application (SPA)**
- Diferenciar una SPA de una aplicación tradicional
- Crear una **SPA simple** usando **HTML, CSS y JavaScript puro**
- Implementar navegación sin recargar la página

---

## 🧠 ¿Qué es una Single Page Application?

Una **Single Page Application (SPA)** es una aplicación web que:
- Carga **una sola página HTML**
- Actualiza el contenido **dinámicamente con JavaScript**
- **No recarga** la página al navegar

📌 Ejemplos de SPAs que usas a diario:
- Gmail
- WhatsApp Web
- Instagram

![Ejemplo SPA](https://upload.wikimedia.org/wikipedia/commons/8/8e/Single-page-application.svg)

---

## 🔄 Aplicación tradicional vs SPA

| Tradicional | SPA |
|-------------|-----|
| Recarga la página | No recarga |
| Varias páginas HTML | Una sola página HTML |
| Navegación lenta | Navegación rápida |

![Tradicional vs SPA](https://miro.medium.com/v2/resize:fit:1400/1*Qz5G9VYH9F7jL1xqJQp5Gw.png)

---

## 🧱 Estructura básica de una SPA

```text
/spa-simple
 ├── index.html
 ├── styles.css
 └── app.js
```

📌 **Todo ocurre dentro del mismo HTML**, el contenido cambia con JavaScript.

---

## 🧩 Conceptos clave para una SPA

### 1️⃣ Un solo HTML
```html
<div id="app"></div>
```

### 2️⃣ Renderizado dinámico
```js
document.getElementById('app').innerHTML = '<h1>Home</h1>';
```

### 3️⃣ Navegación sin recarga
Usamos **eventos** y **funciones** para cambiar el contenido.

---

## 🔀 Simulando rutas (navegación)

```js
function renderHome() {
  app.innerHTML = '<h1>🏠 Home</h1>';
}

function renderAbout() {
  app.innerHTML = '<h1>ℹ️ About</h1>';
}
```

```js
document.getElementById('homeBtn').addEventListener('click', renderHome);
document.getElementById('aboutBtn').addEventListener('click', renderAbout);
```

![SPA navigation](https://blog.logrocket.com/wp-content/uploads/2021/03/spa-routing.png)

---

# 🛠️ EJERCICIO PRÁCTICO

## 🎯 Objetivo del ejercicio
Construir una **SPA simple** con **3 secciones**:
- Home
- Servicios
- Contacto

---

## 📁 Paso 1 — Estructura

```text
spa-ejercicio/
 ├── index.html
 ├── styles.css
 └── app.js
```

---

## 🧱 Paso 2 — index.html

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>SPA Simple</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>

  <nav>
    <button id="home">Home</button>
    <button id="services">Servicios</button>
    <button id="contact">Contacto</button>
  </nav>

  <main id="app"></main>

  <script src="app.js"></script>
</body>
</html>
```

---

## 🎨 Paso 3 — styles.css

```css
body {
  font-family: Arial, sans-serif;
  text-align: center;
}

nav button {
  margin: 5px;
  padding: 10px 15px;
  cursor: pointer;
}
```

---

## ⚙️ Paso 4 — app.js

```js
const app = document.getElementById('app');

function renderHome() {
  app.innerHTML = '<h1>🏠 Home</h1><p>Bienvenido a nuestra SPA</p>';
}

function renderServices() {
  app.innerHTML = '<h1>🛠️ Servicios</h1><p>Frontend con JS</p>';
}

function renderContact() {
  app.innerHTML = '<h1>📩 Contacto</h1><p>clan@hamilton.dev</p>';
}

document.getElementById('home').addEventListener('click', renderHome);
document.getElementById('services').addEventListener('click', renderServices);
document.getElementById('contact').addEventListener('click', renderContact);

renderHome(); // vista inicial
```

---

## ✅ Reto adicional (opcional)

💡 Para coders más curiosos:
- Agregar **clase activa** al botón seleccionado
- Usar `history.pushState()` para simular URLs
- Animar el cambio de vistas con CSS

---

## 🏁 Cierre

✔ Ya creaste tu **primera SPA con JavaScript puro**  
✔ Entendiste cómo funcionan frameworks como Angular o React internamente

🚀 **Siguiente nivel**: Componentes, estado y rutas reales

---

> *Clan Hamilton — construir primero, framework después* 💪

