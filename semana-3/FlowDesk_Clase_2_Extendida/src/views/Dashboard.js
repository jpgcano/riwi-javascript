
import { store } from '../state/store.js';
import { render } from '../core/render.js';

export function Dashboard() {
  return `
    <h1>FlowDesk</h1>
    <section class="cards">
      <div class="card">📁 Proyectos: ${store.projects.length}</div>
      <div class="card">👤 Usuario: ${store.user ?? 'No autenticado'}</div>
    </section>
    <button id="loginBtn">Simular Login</button>
  `;
}

document.addEventListener('click', (e) => {
  if (e.target.id === 'loginBtn') {
    store.user = 'Angela';
    render(Dashboard());
  }
});
