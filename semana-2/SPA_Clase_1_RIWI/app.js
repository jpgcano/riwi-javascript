const app = document.getElementById('app');

function renderHome() {
  app.innerHTML = `
    <h1>🏠 Home</h1>
    <p>Bienvenido a nuestra primera SPA</p>
  `;
}

function renderAbout() {
  app.innerHTML = `
    <h1>ℹ️ About</h1>
    <p>Esta SPA está hecha con JavaScript puro</p>
  `;
}

function renderContact() {
  app.innerHTML = `
    <h1>📩 Contacto</h1>
    <p>correo@riwi.io</p>
  `;
}

document.getElementById('home').addEventListener('click', renderHome);
document.getElementById('about').addEventListener('click', renderAbout);
document.getElementById('contact').addEventListener('click', renderContact);

renderHome();
