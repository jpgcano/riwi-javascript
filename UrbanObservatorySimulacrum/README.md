# Vistas HTML/CSS - Observatorio Urbano y Ambiental

## 📋 Descripción

Diseño visual completo para la SPA del Observatorio Urbano y Ambiental usando **HTML5 y CSS3 puro** (sin frameworks).

Este proyecto incluye todas las vistas necesarias para la plataforma GovTech de consulta de información climática en tiempo real.

---

## 📁 Estructura de Archivos

```
/public/
├── styles.css          # Estilos CSS globales
├── index.html          # Vista principal con listado de proyectos
├── detail.html         # Vista de detalle de un proyecto
├── loading.html        # Vista de estado de carga
├── error.html          # Vista de estado de error
└── empty.html          # Vista cuando no hay resultados
```

---

## 🎨 Vistas Incluidas

### 1. **index.html** - Vista Principal
**Contenido:**
- Header con branding institucional
- Barra de búsqueda y filtros
- Panel de estadísticas (Activos, En desarrollo, Finalizados)
- Grid de tarjetas de proyectos (6 ciudades de ejemplo)
- Cada tarjeta muestra:
  - Nombre de la ciudad
  - Estado del proyecto (badge)
  - Descripción breve
  - Datos climáticos: temperatura, viento, precipitación
  - Última actualización
  - Botón para ver detalle
  - Botón de favorito
- Footer con enlaces y fuente de datos

### 2. **detail.html** - Vista de Detalle
**Contenido:**
- Botón de regreso al listado
- Encabezado destacado con:
  - Nombre de la ciudad
  - Coordenadas geográficas
  - Estado del proyecto
  - Descripción completa
- Panel principal de condiciones actuales:
  - Temperatura grande y destacada
  - Sensación térmica
  - Grid de métricas: viento, precipitación, humedad, visibilidad
- Panel lateral:
  - Horarios de amanecer y atardecer
  - Última actualización
- Pronóstico por hora (6 intervalos)
- Sección "Acerca del Proyecto"

### 3. **loading.html** - Estado de Carga
**Contenido:**
- Spinner animado
- Mensaje: "Cargando datos climáticos..."
- Subtexto: "Conectando con la API Open-Meteo"

### 4. **error.html** - Estado de Error
**Contenido:**
- Ícono de alerta
- Título: "Error al cargar los datos"
- Mensaje de error descriptivo
- Botón "Reintentar" funcional

### 5. **empty.html** - Sin Resultados
**Contenido:**
- Barra de búsqueda con ejemplo
- Ícono de búsqueda vacía
- Mensaje: "No se encontraron resultados"
- Sugerencia para ajustar filtros

---

## 🎯 Características del Diseño

### ✅ Cumple con Requerimientos
- ✅ HTML5 semántico (`header`, `main`, `footer`, `section`, `article`)
- ✅ CSS3 puro (Flexbox y Grid)
- ✅ Sin frameworks ni librerías externas
- ✅ Diseño limpio y profesional
- ✅ Responsive (mobile, tablet, desktop)
- ✅ Accesibilidad básica:
  - Contraste adecuado
  - Etiquetas semánticas
  - `aria-label` en botones de ícono

### 🎨 Sistema de Diseño
**Colores institucionales:**
- Azul primario: `#2563eb`
- Verde azulado: `#14b8a6`
- Degradados para header y estadísticas

**Tipografía:**
- System fonts (San Francisco, Segoe UI, Roboto)
- Jerarquía visual clara

**Componentes:**
- Badges de estado (activo/finalizado/pendiente)
- Tarjetas con hover effects
- Botones outline y sólidos
- Grid responsivo
- Iconos SVG inline

---

## 📱 Responsive Design

### Breakpoints:
```css
/* Mobile: < 768px */
- 1 columna en grid de proyectos
- 1 columna en estadísticas
- Navigation menu oculto

/* Tablet: 768px - 1024px */
- 2 columnas en grid de proyectos
- 3 columnas en estadísticas
- Navigation visible

/* Desktop: > 1024px */
- 3 columnas en grid de proyectos
- Layout de 2 columnas en vista de detalle
```

---

## 🚀 Cómo Usar

### Opción 1: Abrir directamente en navegador
```bash
# Abre cualquier archivo HTML en tu navegador
open public/index.html
```

### Opción 2: Servidor local (recomendado)
```bash
# Con Python 3
cd public
python -m http.server 8000

# Con Node.js (usando http-server)
npx http-server public -p 8000
```

Luego abre: `http://localhost:8000/index.html`

---

## 🔗 Navegación entre Vistas

**Enlaces actuales:**
- `index.html` → Vista principal
- `detail.html` → Vista de detalle (desde botón "Ver detalle")
- `loading.html` → Estado de carga
- `error.html` → Estado de error
- `empty.html` → Sin resultados

Para implementar como SPA, reemplaza estos enlaces con navegación JavaScript usando `location.hash` o `history.pushState`.

---

## 📊 Datos de Ejemplo

Las vistas incluyen datos estáticos de 6 ciudades mexicanas:
1. **Ciudad de México** - Activo, 22°C
2. **Guadalajara** - Activo, 28°C
3. **Monterrey** - Pendiente, 31°C
4. **Puebla** - Activo, 19°C
5. **Tijuana** - Finalizado, 18°C
6. **Mérida** - Activo, 33°C

---

## 🔄 Próximos Pasos para Implementación

Para convertir estas vistas en una SPA funcional:

1. **Crear estructura de carpetas JavaScript:**
   ```
   /js
   ├── services/
   │   └── api.js          # Consumo de Open-Meteo API
   ├── views/
   │   ├── listView.js     # Renderiza listado
   │   ├── detailView.js   # Renderiza detalle
   │   └── stateViews.js   # Loading, error, empty
   ├── components/
   │   └── projectCard.js  # Componente de tarjeta
   ├── utils/
   │   └── router.js       # Navegación SPA
   └── main.js             # Entry point
   ```

2. **Implementar router simple:**
   ```javascript
   // Ejemplo con location.hash
   window.addEventListener('hashchange', handleRouteChange);
   ```

3. **Conectar con API Open-Meteo:**
   ```javascript
   const API_BASE = 'https://api.open-meteo.com/v1/forecast';
   // GET latitude, longitude, current_weather=true
   ```

4. **Agregar funcionalidad:**
   - Búsqueda en tiempo real
   - Filtros por estado
   - Favoritos con `localStorage`
   - Actualización automática de datos

---

## 📝 Notas Técnicas

### CSS Grid y Flexbox
- Grid principal: `grid-template-columns: repeat(auto-fit, minmax(300px, 1fr))`
- Flexbox para alineación de elementos internos
- Gap consistente de 1rem-1.5rem

### Animaciones
- Hover effects en tarjetas
- Spinner CSS animado
- Transiciones suaves (0.2s-0.3s)

### Accesibilidad
- Contraste mínimo AA (4.5:1)
- Focus states visibles
- Etiquetas descriptivas
- `aria-label` en botones de ícono

---

## 📄 Licencia

Proyecto educativo para GovTech - 2026

---

## 👥 Autor

Diseño creado para el proyecto de Observatorio Urbano y Ambiental
