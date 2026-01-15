const app = document.querySelector('#app');

function renderHome() {
    app.innerHTML = '<h1><p>🏠​ Bienvenido a nuestra SPA</p></h1>';
}

function renderServices() {
    app.innerHTML = '<h1>Servicios</h1> <p>Frontend con JS</p>';
}

function renderContact() {
    app.innerHTML = '<h1>Contacto</h1> <p>Clan@halmilton.dev</p>';
}
function renderAbout() {
    app.innerHTML = '<h1>Error 404</h1> <p>Pagina en construcción</p>';

}
function renderNotFound() {
    app.innerHTML = '<h1>Error 404</h1> <p>Pagina no encontrada</p>';
}

let counter = 0;

function renderCounter() {
    app.innerHTML = `
    <h1> Contador</h1>
    <p>${counter}</p>
    <button id='add'>+</button>
    `;
    document.querySelector('#add').onclick = () => {
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
        case '#/services':
            renderServices();
            break;
        case '#/contac':
            renderContact();
            break;
        case '#/about':
            renderAbout();
            break;
        case '#/counter':
            renderCounter();
            break;
        default:
            renderHome()
    }
}

window.addEventListener('hashchange', router);
window.addEventListener('load', router);

document.querySelector("#home").addEventListener('click', renderHome);
document.querySelector("#services").addEventListener('click', renderServices);
document.querySelector("#contac").addEventListener('click', renderContact);

renderHome();


