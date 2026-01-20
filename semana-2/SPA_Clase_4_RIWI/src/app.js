
import { Navbar } from './components/Navbar.js';
import { Footer } from './components/Footer.js';
import { router } from './router/router.js';

const app = document.getElementById('app');

export function render(view) {
  app.innerHTML = `
    ${Navbar()}
    <main>${view}</main>
    ${Footer()}
  `;
}

window.addEventListener('hashchange', router);
window.addEventListener('load', router);
