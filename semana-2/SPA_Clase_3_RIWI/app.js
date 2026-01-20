const app = document.getElementById('app');

/* ===== COMPONENTES ===== */

function Navbar() {
  return `
    <nav>
      <a href="#/home">Home</a>
      <a href="#/about">About</a>
      <a href="#/contact">Contacto</a>
    </nav>
  `;
}

function Home() {
  return `
    <h1>🏠 Home</h1>
    <p>Vista Home como componente</p>
  `;
}

function About() {
  return `
    <h1>ℹ️ About</h1>
    <p>Esta vista es un componente</p>
  `;
}

function Contact() {
  return `
    <h1>📩 Contacto</h1>
    <p>correo@riwi.io</p>
  `;
}

/* ===== RENDER ===== */

function render(view) {
  app.innerHTML = `
    ${Navbar()}
    <section>
      ${view}
    </section>
  `;
}

/* ===== ROUTER ===== */

function router() {
  const route = location.hash;

  switch (route) {
    case '#/home':
      render(Home());
      break;
    case '#/about':
      render(About());
      break;
    case '#/contact':
      render(Contact());
      break;
    default:
      render(Home());
  }
}

window.addEventListener('hashchange', router);
window.addEventListener('load', router);
