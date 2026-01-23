# 🌍 Observatorio Urbano y Ambiental – SPA GovTech

Plataforma web interactiva para la consulta de información climática y ambiental en tiempo real, desarrollada como un **MVP para un cliente GovTech**, utilizando **HTML, CSS y JavaScript puro**, sin frameworks.

Este proyecto simula un requerimiento real de cliente y se construye bajo un enfoque **SPA (Single Page Application)**, priorizando rendimiento, claridad, mantenibilidad y buenas prácticas frontend.

---

## 📌 Contexto del Cliente

**Cliente:** Startup GovTech – Observatorio Urbano y Ambiental  

La startup trabaja con gobiernos locales y necesita una plataforma liviana que permita a ciudadanos, periodistas y analistas consultar datos climáticos en tiempo real para:

- Planeación urbana  
- Prevención de riesgos  
- Educación ambiental  
- Toma de decisiones basada en datos  

El cliente solicita explícitamente **no usar frameworks**, ya que el producto debe funcionar en entornos de baja conectividad y servir como base para futuros desarrollos.

---

## 🎯 Objetivo del Proyecto

Construir una **Single Page Application (SPA)** funcional y profesional que permita:

- Autenticación de usuarios
- Consumo de APIs externas (GET)
- Gestión de datos propios del sistema (GET / POST)
- Navegación fluida sin recarga de página
- Manejo correcto de estados (loading, error, empty)

Todo usando **JavaScript puro**.

---

## 🧠 Funcionalidades Implementadas

### 🔐 Autenticación
- Login simulado (frontend)
- Validación básica de credenciales
- Persistencia de sesión con `localStorage`
- Protección de rutas SPA
- Cierre de sesión (logout)

> ⚠️ No se utiliza backend real para autenticación. La autenticación es simulada como MVP.

---

### 🏙️ Dashboard (Vista Principal)
- Listado de ciudades/proyectos
- Información climática resumida (GET API externa)
- Estados visuales (activo, pendiente, finalizado)
- Búsqueda y filtros
- Marcar proyectos como favoritos

---

### ➕ Gestión de Proyectos (CRUD parcial)
El cliente solicita que la plataforma permita **registrar nuevos proyectos urbanos** para monitoreo climático.

Funcionalidades obligatorias:
- Formulario para **crear un nuevo proyecto** (POST)
- Campos mínimos:
  - Nombre del proyecto
  - Ciudad
  - Latitud
  - Longitud
  - Estado (activo / pendiente / finalizado)
- Validaciones básicas en frontend
- Persistencia usando una **API mock propia**

---

## 🧪 API Utilizadas

### 🌦️ API Externa – Open-Meteo
- Tipo: API REST pública
- Uso: Consulta climática (GET)
- Documentación: https://open-meteo.com/

---

### 🧪 API Mock Local – JSON Server

Para simular un backend real, el proyecto debe usar **JSON Server**.

#### Requerimientos
- Crear un archivo `db.json`
- Levantar un servidor local con JSON Server
- Consumir la API mock usando:
  - `GET /projects`
  - `POST /projects`

Ejemplo de `db.json`:
```json
{
  "projects": [
    {
      "id": 1,
      "name": "Monitoreo Ciudad de México",
      "city": "Ciudad de México",
      "lat": 19.4326,
      "lon": -99.1332,
      "status": "activo"
    }
  ]
}
```

---

## 🧱 Arquitectura del Proyecto

```
/public
│
├── index.html
├── detail.html
├── login.html
├── create-project.html
├── loading.html
├── error.html
├── empty.html
├── styles.css
│
└── /js
    ├── main.js
    ├── router/
    ├── auth/
    ├── services/
    │   ├── weather.service.js
    │   └── projects.service.js
    ├── views/
    │   ├── dashboard.view.js
    │   ├── detail.view.js
    │   └── create.view.js
    └── utils/
```

---

## ▶️ Cómo Ejecutar el Proyecto

### 1️⃣ Levantar JSON Server
```bash
npm install -g json-server
json-server --watch db.json --port 3000
```

API disponible en:
```
http://localhost:3000/projects
```

---

### 2️⃣ Levantar la aplicación
```bash
cd public
python -m http.server 8000
```

Abrir en el navegador:
```
http://localhost:8000/login.html
```

---

## 🔑 Credenciales de Prueba

Email: admin@govtech.com  
Password: 123456  

---

## ✅ Criterios de Aceptación

- Uso de **GET** para consumir API externa
- Uso de **GET y POST** contra API mock propia
- Implementación correcta de `fetch`
- Manejo de estados (loading, error, success)
- SPA sin recargas
- Código organizado y legible
- Uso exclusivo de HTML, CSS y JavaScript

---

## 🚀 Nivel de Dificultad

🔹 **Intermedio – Avanzado**

Este proyecto evalúa:
- Consumo de múltiples APIs
- Diferencia entre API externa y API propia
- Flujo completo frontend (formulario → POST → render)
- Pensamiento de arquitectura real

---

## 👩‍💻 Contexto Académico

Proyecto desarrollado como **ejercicio integrador para formación frontend en Riwi**, simulando un entorno real de cliente GovTech y un backend simulado con JSON Server.
