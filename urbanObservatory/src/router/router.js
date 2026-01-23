/**Importaciones --- */
import {render}     from '../core/render.js';
import {fetchMeteo} from '../services/open-meteo.js';
import { headerComponent } from "../components/header.js";


/** Rutas  */
export async function router(){
    const data = await fetchMeteo();
    const hash = location.hash || '#/dashboard';
    const [,router,param] = hash.split('/') ;

    let view = `<p> cargando ...</p>`
    

    try{
        switch(router){
            case 'dashboard':
const data = await fetchMeteo();
                
                // 3. Procesamos los datos para crear un HTML legible
                // Ejemplo: Tomamos la temperatura actual y la primera hora del pronóstico
                const view = `
                    <div class="dashboard-container">
                        <h1>Dashboard Meteorológico</h1>
                        <section class="resumen">
                            <p><strong>Latitud:</strong> ${data.latitude}</p>
                            <p><strong>Longitud:</strong> ${data.longitude}</p>
                            <p><strong>Zona Horaria:</strong> ${data.timezone}</p>
                        </section>
                        
                        <h3>Pronóstico Próximas Horas:</h3>
                        <ul>
                            ${data.hourly.time.slice(0, 5).map((time, index) => `
                                <li>
                                    ${new Date(time).toLocaleTimeString()}: 
                                    <strong>${data.hourly.temperature_2m[index]}°C</strong>
                                </li>
                            `).join('')}
                        </ul>
                    </div>
                `;
                
                render(`
                    ${headerComponent()}
                    <main>
                    ${view}
                    </main>
                    `);
                console.log("Dashboard cargado con éxito");
            break
        }
    }
    catch(err){
        console.log("ERROR pagina no encontrada "+err);
    }
}