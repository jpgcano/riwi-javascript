# 🟦 CLASE 2 — FlowDesk SPA (VERSIÓN EXTENDIDA)
## Estado Global, Render Consciente y Event Delegation
**Semana 3 — JavaScript Puro (Vanilla)**

**Clan Hamilton**  
*Una app vive por su estado y sus eventos* 👑

---

## 🌐 Contexto dentro del proyecto FlowDesk

En la **Clase 1** construimos la base arquitectónica de FlowDesk.

En esta **Clase 2** damos un paso clave:
👉 hacemos que FlowDesk **reaccione a cambios**.

Eso implica:
- Estado que cambia
- Vista que se actualiza
- Eventos bien manejados

---

## 🎯 Objetivo REAL de esta clase

Al finalizar esta clase, el coder será capaz de:

- Entender **qué es el estado global**
- Aplicar el concepto de **Fuente Única de Verdad**
- Controlar cuándo se vuelve a renderizar la vista
- Entender **por qué JS puro no es reactivo**
- Comprender y aplicar **Event Delegation**
- Evitar errores comunes con eventos en SPAs

---

## 🧠 ¿Qué es el estado en una SPA?

El estado es **toda información que puede cambiar mientras la app está viva**:

- Usuario autenticado
- Listas de datos
- Contadores
- Filtros

👉 Si cambia en el tiempo, **es estado**.

---

## 🗂️ state/store.js — Fuente Única de Verdad

```js
export const store = {
  user: null,
  projects: [
    { id: 1, name: 'FlowDesk Web', status: 'active' },
    { id: 2, name: 'Mobile App', status: 'paused' }
  ]
};
```

📌 Ninguna vista inventa datos.

---

## 🔁 Render consciente (recordatorio)

Cambiar el estado:

```js
store.user = 'Angela';
```

❌ NO actualiza la vista.

Debemos decir explícitamente:

```js
render(Dashboard());
```

👉 Esto es **render consciente**.

---

## 🧠 El problema real con eventos en SPAs

En una SPA:

- El HTML se crea dinámicamente
- El DOM se destruye y se vuelve a crear
- Los botones **no existen siempre**

Ejemplo:

```js
render(Dashboard());
```

Cada render:
- elimina botones anteriores
- crea botones nuevos

👉 Los eventos directos se pierden.

---

## ❌ Enfoque incorrecto (muy común)

```js
document.getElementById('loginBtn').addEventListener('click', () => {
  // ...
});
```

❌ No funciona si el botón aún no existe  
❌ Se rompe al re-renderizar  

---

## ✅ Event Delegation (concepto CLAVE)

**Event Delegation** es una técnica donde:

> Escuchamos eventos en un elemento padre que siempre existe,
> y decidimos qué hacer según quién disparó el evento.

En FlowDesk usamos `document` o `#app`.

---

## 📌 Ejemplo aplicado a FlowDesk

### HTML generado dinámicamente

```html
<button data-action="login">Simular Login</button>
<button data-action="logout">Logout</button>
```

---

### Listener único (vive siempre)

```js
document.addEventListener('click', (e) => {
  const action = e.target.dataset.action;

  if (!action) return;

  if (action === 'login') {
    store.user = 'Angela';
    render(Dashboard());
  }

  if (action === 'logout') {
    store.user = null;
    render(Dashboard());
  }
});
```

---

## 🧠 ¿Por qué esto NO genera confusión?

Porque:

- Filtramos por `data-action`
- Cada botón declara su intención
- Un solo listener maneja todo

👉 Es **claro, escalable y mantenible**.

---

## 🧭 Analogía clara

👮‍♂️ **Un guardia en la entrada**:

- No sigue a cada persona
- Observa quién entra
- Actúa según su identificación

`document` es el guardia  
`data-action` es la identificación

---

## 🔗 Conexión con frameworks

| FlowDesk | Angular / React |
|--------|-----------------|
| data-action | (click)="login()" |
| Event Delegation | Event system |
| render() | Change Detection |
| store | Service / Store |

👉 Los frameworks **hacen esto automáticamente**.

---

## 🧪 Ejercicio práctico de la clase

1. Implementar botones con `data-action`
2. Crear un listener único
3. Cambiar estado según la acción
4. Forzar re-render
5. Explicar por qué NO se usan listeners directos

---

## 🧠 Preguntas de reflexión

- ¿Por qué los eventos directos no escalan?
- ¿Qué pasa si renderizamos muchas veces?
- ¿Por qué Event Delegation es clave en SPAs?
- ¿Qué problema solucionan los frameworks aquí?

---

## 🏁 Cierre de la clase

✔ FlowDesk ahora reacciona a eventos  
✔ El estado controla la vista  
✔ Los eventos están bien diseñados  

🚀 **Clase 3**: Router avanzado y rutas dinámicas

---

**Clan Hamilton**  
*Eventos bien pensados, aplicaciones sanas* 💪
