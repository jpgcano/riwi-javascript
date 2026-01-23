# Proyecto SPA – Solicitud de Cliente Real

## 1. Contexto del Cliente

**Cliente:** Startup GovTech – Observatorio Urbano y Ambiental

Una startup que trabaja con gobiernos locales desea lanzar una **plataforma web interactiva** que permita a ciudadanos, periodistas y tomadores de decisiones **consultar información climática y ambiental en tiempo real**, con el fin de apoyar:

- Planeación urbana
- Prevención de riesgos
- Educación ambiental
- Conciencia ciudadana sobre el clima

El cliente solicita una solución **rápida, liviana y sin frameworks**, ya que el producto debe poder ejecutarse en equipos de bajo rendimiento y servir como base para futuros desarrollos más grandes.

---

## 2. Objetivo del Proyecto

Desarrollar una **Single Page Application (SPA)** usando **HTML, CSS y JavaScript puro**, que permita:

- Visualizar un listado de proyectos comunitarios
- Consultar el detalle de cada proyecto
- Filtrar y buscar proyectos
- Simular acciones del usuario (ej. marcar como favorito, cambiar estado visual)

La aplicación debe consumir datos desde una **API pública y abierta**.

---

## 3. Alcance Funcional (Requerimientos del Cliente)

### 3.1 Funcionalidades Obligatorias

1. **Vista principal – Listado de proyectos**
   - Mostrar proyectos en formato de tarjetas o tabla
   - Cada proyecto debe mostrar:
     - Título
     - Descripción corta
     - Estado (activo / finalizado / pendiente)

2. **Vista de detalle del proyecto**
   - Navegación sin recarga de página (SPA)
   - Mostrar información ampliada del proyecto seleccionado
   - Botón para volver al listado

3. **Búsqueda y filtrado**
   - Búsqueda por texto (título)
   - Filtro por estado

4. **Gestión del estado en el frontend**
   - Manejo de estado con JavaScript (arrays, objetos, funciones)
   - Persistencia opcional con `localStorage`

5. **Manejo de errores y estados**
   - Loader mientras se consumen datos
   - Mensaje de error si la API falla
   - Mensaje si no hay resultados

---

## 4. Requerimientos Técnicos

### 4.1 Tecnologías Permitidas

- HTML5 semántico
- CSS3 (Flexbox y/o Grid)
- JavaScript ES6+

❌ No se permite:
- Frameworks (React, Angular, Vue)
- Librerías externas para UI

---

## 5. Arquitectura SPA Esperada

El cliente solicita una arquitectura clara y mantenible:

- Navegación basada en **rutas simuladas** (`location.hash` o `history.pushState`)
- Separación por capas:
  - `services/` → consumo de API
  - `views/` → renderizado de pantallas
  - `components/` → elementos reutilizables
  - `utils/` → funciones auxiliares

---

## 6. API a Consumir

### API Seleccionada: Open‑Meteo (Weather & Climate API)

- Tipo: API REST pública, gratuita y **sin necesidad de API Key**
- Uso real: aplicaciones meteorológicas, dashboards urbanos, sistemas de alerta
- Documentación oficial:
  👉 https://open-meteo.com/

### Endpoints sugeridos

Ejemplo de endpoint:

- `https://api.open-meteo.com/v1/forecast`

Parámetros comunes:
- `latitude`
- `longitude`
- `current_weather=true`
- `hourly=temperature_2m,precipitation,windspeed_10m`

### Uso dentro del proyecto

La aplicación debe permitir:

- Consultar el clima actual de una ciudad
- Visualizar variables climáticas relevantes:
  - Temperatura
  - Velocidad del viento
  - Precipitación
- Mostrar estados visuales según condiciones climáticas (ej. calor, lluvia, viento)

> El equipo debe transformar los datos crudos de la API en información comprensible para un usuario no técnico.

---

## 7. Requerimientos de UX/UI

- Diseño limpio y profesional
- Responsive (desktop y mobile)
- Uso adecuado de colores institucionales
- Accesibilidad básica:
  - Contraste adecuado
  - Uso correcto de etiquetas semánticas

---

## 8. Metodología de Trabajo Esperada

El cliente solicita aplicar una metodología **ágil y realista**, adaptada al tiempo disponible:

### Metodología: Mini Scrum

**Duración total:** 8 horas

1. **Planeación (45 min)**
   - Análisis de requerimientos
   - Definición de tareas
   - Diseño rápido del flujo

2. **Desarrollo Iterativo (6 horas)**
   - Iteración 1: estructura + listado
   - Iteración 2: navegación SPA + detalle
   - Iteración 3: filtros + UX

3. **Cierre (1h 15 min)**
   - Pruebas manuales
   - Corrección de errores
   - Documentación

---

## 9. Entregables Finales

El cliente espera recibir:

1. **Repositorio Git (o carpeta comprimida)** con:
   - Código fuente organizado
   - Estructura clara

2. **Archivo README.md** que incluya:
   - Descripción del proyecto
   - Instrucciones de ejecución
   - Decisiones técnicas tomadas
   - Posibles mejoras

3. **Aplicación funcional** que cumpla:
   - Navegación SPA
   - Consumo real de API
   - Experiencia de usuario fluida

---

## 10. Criterios de Aceptación del Cliente

✅ La aplicación no recarga la página al navegar

✅ Los datos provienen de una API externa

✅ El código es legible y bien organizado

✅ La solución es coherente con una necesidad real

---

## 11. Valor para el Negocio

Esta plataforma permitiría:

- Mayor transparencia institucional
- Acceso rápido a información pública
- Base para futuras mejoras (formularios, autenticación, roles)

---

**Este proyecto simula un requerimiento real de un cliente público y evalúa la capacidad del equipo para analizar, diseñar y construir una SPA profesional con JavaScript puro en un tiempo limitado.**

