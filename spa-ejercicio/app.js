const app = document.querySelector('#app');

function renderHome(){
    app.innerHTML = '<h1><p>Bienvenido a nuestra SPA</p></h1>';
}

function renderServices(){
    app.innerHTML='<h1>Servicios</h1> <p>Frontend con JS</p>';
}

function renderContact(){
    app.innerHTML ='<h1>Contacto</h1> <p>Clan@halmilton.dev</p>';
}

document.querySelector("#home").addEventListener('click',renderHome);
document.querySelector("#services").addEventListener('click',renderServices);
document.querySelector("#contac").addEventListener('click',renderContact);

renderHome();