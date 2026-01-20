const app = document.getElementById('app');

function renderHome() {
  app.innerHTML = `
    <h1>🏠 Home</h1>
    <p>Bienvenido a la SPA con rutas</p>
  `;
}

function renderAbout() {
  app.innerHTML = `
    <h1>ℹ️ About</h1>
    <p>Navegación usando location.hash</p>
  `;
}

function renderContact() {
  app.innerHTML = `
    <h1>📩 Contacto</h1>
    <p>correo@riwi.io</p>
  `;
}

function renderNotFound() {
  app.innerHTML = `
    <h1>❌ 404</h1>
    <p>Página no encontrada</p>
  `;
}

let counter = 0;
function renderCounter(){
  app.innerHTML = `
    <h1>Contador</h1>
    <p>${counter}</p>
    <button id='add'>+</button>
    `;
  document.getElementById('add').onclick = () => {
    counter++;
    renderCounter();
  };
}

function renderCounter() {
  app.innerHTML = `
    <h1>Contador</h1>
    <p>${counter}</p>
    <button id="add">+</button>
  `;

  document.getElementById('add').onclick = () => {
    counter++;
    renderCounter();
  };
}



function router() {
  const route = location.hash;

  switch (route) {
    case '#/home':
      renderHome();
      break;
    case '#/about':
      renderAbout();
      break;
    case '#/contact':
      renderContact();
      break;
    case '#/counter':
      renderCounter();
      break;
    default:
      renderHome();
  }
}

window.addEventListener('hashchange', router);
window.addEventListener('load', router);
