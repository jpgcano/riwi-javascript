// router.js
import { render } from '../core/render.js';
import { fetchMeteo } from '../services/open-meteo.js';
import { headerComponent } from "../components/header.js";
import {login} from '../view/login.js';
import { store } from '../state/store.js';
import { initLoginLogic } from '../core/loginValidation.js'; 

export async function router() {
    // Obtenemos la ruta limpia
    const hash = location.hash || '#/login';
    const parts = hash.split('/'); 
    const currentRoute = parts[1] || 'login'; // 'login', 'dashboard', etc.

    // --- GUARDIA DE SEGURIDAD (PROTECCIÓN DE RUTAS) ---
    // Si intenta ir a dashboard pero NO hay usuario, lo mandamos al login
    if (currentRoute === 'dashboard' && !store.currentUser) {
        window.location.hash = '#/login';
    }

    try {
        switch (currentRoute) {
            case 'login':
                // 1. Renderizamos la vista visual (HTML)
                render(login());
                
                // 2. ACTIVAMOS la lógica (Escuchador de eventos)
                // Esto es vital: se llama DESPUÉS del render
                initLoginLogic(); 
                break;

            case 'dashboard':
                // Solo cargamos datos si estamos en el dashboard
                const data = await fetchMeteo(); 
                
                const view = `
                    <div class="dashboard-container">
                        <h1>Bienvenido, ${store.currentUser.name}</h1>
                        <section class="resumen">
                            <p><strong>Latitud:</strong> ${data.latitude}</p>
                            <p><strong>Zona Horaria:</strong> ${data.timezone}</p>
                        </section>
                        </div>
                `;
                render(`
                    ${headerComponent()}
                    <main>
                        ${view}
                    </main>
                `);
                break;
                
            default:
                console.log("Ruta no encontrada");
                break;
        }
    } catch (err) {
        console.error("Error en el router:", err);
    }
}