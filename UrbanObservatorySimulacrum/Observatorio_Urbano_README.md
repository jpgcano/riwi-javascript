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
- Visualización de proyectos/ciudades  
- Consulta de clima actual y pronóstico  
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

> ⚠️ No se utiliza backend real. La autenticación es simulada como MVP.

---

### 🏙️ Dashboard (Vista Principal)
- Listado de ciudades/proyectos  
- Información climática resumida  
- Estados visuales (activo, pendiente, finalizado)  
- Búsqueda por texto  
- Filtros  
- Marcar proyectos como favoritos  

---

### 📍 Vista de Detalle
- Información ampliada de la ciudad  
- Clima actual  
- Métricas adicionales (viento, precipitación, humedad)  
- Pronóstico por horas  
- Navegación SPA (sin recargar la página)  

---

### ⚠️ Manejo de Estados
- Pantalla de carga  
- Pantalla de error  
- Pantalla sin resultados  

---

## 🔌 API Utilizada

### Open-Meteo – Weather & Climate API

- Tipo: API REST pública y gratuita  
- No requiere API Key  
- Uso real en dashboards climáticos  

📚 Documentación oficial:  
👉 https://open-meteo.com/

---

## 🧱 Arquitectura del Proyecto

```
/public
│
├── index.html
├── detail.html
├── login.html
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
    ├── views/
    └── utils/
```

---

## ▶️ Cómo Ejecutar el Proyecto

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

## 👩‍💻 Contexto Académico

Proyecto desarrollado como **ejercicio integrador para formación frontend en Riwi**, simulando un entorno real de cliente GovTech.
