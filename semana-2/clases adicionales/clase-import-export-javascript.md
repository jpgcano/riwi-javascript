# 📦 Clase: Uso de `import` y `export` en JavaScript (Módulos)

🎯 **Dirigido a:** Coders que inician en JavaScript  
🧠 **Objetivo:** Comprender cómo funcionan los módulos y aplicar `import` y `export` correctamente  
⏱️ **Duración estimada:** 1.5 – 2 horas  

---

## 🧩 1. El problema del código sin módulos

Cuando empezamos en JavaScript, solemos escribir todo en un solo archivo:

```js
function sumar() {}
function restar() {}
function multiplicar() {}
function dividir() {}
// muchas líneas más...
```

❌ Archivos muy largos  
❌ Difícil de mantener  
❌ Poco escalable  
❌ Problemas al trabajar en equipo  

---

## 💡 2. La solución: MÓDULOS

Un **módulo** es un archivo JavaScript que puede:
- Exportar funciones, variables o clases
- Ser reutilizado en otros archivos

Ejemplo de estructura:
```
src/
 ├── math.js
 └── app.js
```

---

## 📤 3. `export`: compartir código

### 🔹 Exportar una función
```js
// math.js
export function sumar(a, b) {
  return a + b;
}
```

### 🔹 Exportar una variable
```js
export const PI = 3.1416;
```

### 🔹 Exportar una clase
```js
export class Calculadora {
  multiplicar(a, b) {
    return a * b;
  }
}
```

📌 Un mismo archivo puede tener **varios exports**.

---

## 📥 4. `import`: usar código exportado

```js
// app.js
import { sumar, PI } from './math.js';

console.log(sumar(2, 3));
console.log(PI);
```

✔ Los nombres deben coincidir  
✔ Se usan `{}` para imports nombrados  
✔ La ruta debe iniciar con `./`  

---

## ⭐ 5. `export default`

Se usa cuando el archivo exporta **una sola cosa principal**.

### Export default
```js
// saludo.js
export default function saludar(nombre) {
  return `Hola ${nombre}`;
}
```

### Import default
```js
// app.js
import saludar from './saludo.js';

console.log(saludar('Clan Hamilton'));
```

📌 No se usan `{}`  
📌 El nombre al importar es libre  

---

## 🔄 6. Diferencias entre export nombrado y default

| Tipo | Export | Import |
|----|----|----|
| Nombrado | `export function foo()` | `import { foo }` |
| Default | `export default foo` | `import foo` |

---

## 🌐 7. Uso de módulos en el navegador

Para que `import` y `export` funcionen en HTML:

```html
<script type="module" src="app.js"></script>
```

❌ Sin `type="module"` no funciona  
❌ Sin la extensión `.js` da error  

---

## 🧠 8. Uso real en una SPA

En aplicaciones reales el código se separa así:

```
src/
 ├── components/
 │    └── Navbar.js
 ├── services/
 │    └── api.js
 ├── utils/
 │    └── helpers.js
 └── app.js
```

---

## ⚠️ 9. Errores comunes

❌ Olvidar `type="module"`  
❌ Rutas incorrectas  
❌ Mezclar `export default` con export nombrado  
❌ No usar `.js` en los imports  

---

## 🧪 10. Ejercicio práctico 🚀

### 🎯 Objetivo
Mostrar un mensaje en pantalla usando módulos.

### 1️⃣ Crear `mensaje.js`
```js
export function mensaje() {
  return 'Hola Clan Hamilton 🚀 usando módulos';
}
```

### 2️⃣ Crear `app.js`
```js
import { mensaje } from './mensaje.js';

document.body.innerHTML = `<h1>${mensaje()}</h1>`;
```

### 3️⃣ HTML
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Módulos JavaScript</title>
</head>
<body>
  <script type="module" src="app.js"></script>
</body>
</html>
```

---

## 🏁 11. Conclusión

✔ `export` permite compartir código  
✔ `import` permite reutilizar código  
✔ Los módulos hacen tu código limpio y profesional  
✔ Son la base de Angular, React y Vue  

🔥 **Dominar módulos es pensar como developer profesional**
