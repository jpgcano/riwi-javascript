import { store } from "../state/store.js";

export function Dashboard(){

    return `
        <h1>FlowDesk</h1>

        <nav>
            <a href="#/dashboard">Dashboard</a>
            <a href="#/projects">Proyectos</a>
        </nav>
        <section>
        <div class="card">📁 Proyectos: ${store.projects.length} </div>
        <div class="card">👥 Usuarios: ${store.user ?? 'No autenticado'} </div>
        </section>
                <button data-action="login">Simular login</button>
        <button data-action="logout">Logout</button>
    `;
}