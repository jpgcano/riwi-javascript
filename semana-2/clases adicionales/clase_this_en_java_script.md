# 📘 Clase — `this` en JavaScript

> **Dirigido a:** Coders Junior / Comunidades de programación
> 
> **Objetivo:** Comprender qué es `this` en JavaScript, cómo funciona según el contexto y cuándo está relacionado con Programación Orientada a Objetos (POO), especialmente en eventos del DOM y SPA.

---

## 🧠 1. Idea clave antes de empezar

En JavaScript:

> **`this` NO depende de dónde se define una función, sino de cómo se ejecuta.**

Esto hace que `this` sea:
- Muy poderoso
- Muy flexible
- Fácil de usar mal si no se entiende el contexto

---

## 📌 2. ¿Qué es `this`?

`this` es una **referencia al contexto de ejecución actual**.

👉 Responde a la pregunta:
> **¿Quién está ejecutando este código?**

---

## 📦 3. Casos básicos de `this` en JavaScript

### 3.1 `this` en un objeto

```js
const usuario = {
  nombre: "Ana",
  saludar() {
    console.log(this.nombre);
  }
};

usuario.saludar();
```

✔️ `this` → el objeto `usuario`

---

### 3.2 `this` en una función normal

```js
function mostrar() {
  console.log(this);
}

mostrar();
```

- Navegador → `window`
- `"use strict"` → `undefined`

⚠️ No se recomienda usar `this` en funciones sueltas.

---

### 3.3 `this` en eventos del DOM (NO POO por defecto)

```js
btn.addEventListener("click", function () {
  console.log(this);
});
```

✔️ `this` → el elemento HTML que dispara el evento
❌ No hay estado ni objeto de dominio

👉 **Esto NO es Programación Orientada a Objetos**, es programación dirigida por eventos.

---

## 🏗️ 4. `this` y Programación Orientada a Objetos (POO)

### 4.1 ¿Cuándo hay POO?

Hay POO cuando:
- Existe un **objeto o clase**
- Hay **estado** (propiedades)
- Hay **comportamiento** (métodos)
- Los métodos usan `this`

---

### 4.2 POO con `class`

```js
class Usuario {
  constructor(nombre) {
    this.nombre = nombre;
  }

  saludar() {
    console.log(this.nombre);
  }
}

const u1 = new Usuario("Ana");
u1.saludar();
```

✔️ `this` → la instancia creada con `new`

---

### 4.3 Eventos del DOM con POO (CASO CORRECTO)

```js
class Contador {
  constructor(btn) {
    this.btn = btn;
    this.count = 0;

    this.btn.addEventListener("click", this.incrementar.bind(this));
  }

  incrementar() {
    this.count++;
    console.log(this.count);
  }
}

new Contador(document.querySelector("#btn"));
```

✔️ Hay estado (`count`)
✔️ El evento pertenece al objeto
✔️ `this` apunta a la instancia

👉 **Esto SÍ es POO aplicada al DOM**.

---

## 🚨 5. Arrow functions y `this`

Las arrow functions **NO tienen su propio `this`**.

```js
const obj = {
  nombre: "Pedro",
  saludar: () => {
    console.log(this.nombre);
  }
};
```

❌ `undefined`

### ✅ Forma correcta

```js
const obj = {
  nombre: "Pedro",
  saludar() {
    console.log(this.nombre);
  }
};
```

---

## 🎯 6. Resumen visual

| Contexto | ¿Qué es `this`? | ¿Hay POO? |
|--------|---------------|-----------|
| Objeto literal | El objeto | ⚠️ Parcial |
| Función normal | window / undefined | ❌ No |
| Evento DOM suelto | Elemento HTML | ❌ No |
| Clase (`class`) | Instancia | ✅ Sí |
| Evento dentro de clase | Instancia | ✅ Sí |

---

## 🧪 7. Ejercicio práctico

### 🎯 Objetivo
Crear un componente simple que maneje un evento usando POO.

### 📝 Instrucciones
1. Crea una clase `Button`
2. Recibe un texto y un botón HTML
3. Al hacer click, muestra el texto
4. Usa `this` correctamente

```js
class Button {
  // tu código aquí
}
```

---

## 🚀 8. Conclusión final

- `this` es una **herramienta de contexto**, no magia
- No todo uso de `this` es POO
- POO aparece cuando hay **estado + comportamiento + encapsulación**
- Dominar `this` es clave para clases, eventos y SPA

> **Entender `this` es entender cómo JavaScript conecta funciones con objetos** 💪

