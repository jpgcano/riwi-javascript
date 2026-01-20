
import { store } from '../state/store.js';
import { render } from '../core/render.js';

export function Dashboard() {
  return `
    <h1>FlowDesk</h1>
    <section class="cards">
      <div class="card">📁 Proyectos: ${store.projects.length}</div>
      <div class="card">👤 Usuario: ${store.user ?? 'No autenticado'}</div>
    </section>

    <button data-action="login">Simular Login</button>
    <button data-action="logout">Logout</button>
  `;
}

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
