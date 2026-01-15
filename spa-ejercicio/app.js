const app = document.querySelector('#app');



function Home() {
    return '<h1><p>🏠​ Bienvenido a nuestra SPA</p></h1>';
}

function Services() {
    return  '<h1>🛠️ Servicios</h1> <p>Frontend con JS</p>';
}

function Contact() {
    return  '<h1>📩 Contacto</h1> <p>Clan@halmilton.dev</p>';
}
function About() {
    return  '<h1>Error 404</h1> <p>Pagina en construcción</p>';

}
function NotFound() {
    return  '<h1>Error 404</h1> <p>Pagina no encontrada</p>';
}

let counter = 0;


function navbar() {
    return `
        <nav>
            <a href="#/home" id="home">         Home</a>
            <a href="#/services" id="services"> Services</a>
            <a href="#/contac" id="contac">     Contac</a>
            <a href="#/about">                  about</a>
            <a href="#/counter" id="counter">   counter</a>
        </nav>
    `;

}



function Counterview() {
    return `<h1> Contador</h1> 
            <p id="counter-value">${counter}</p>    
            <button id='add'>+</button> 
            `;
};
// --- LÓGICA DE COMPONENTES (Eventos) ---
function setupCounterEvents() {
    const btn = document.querySelector('#add');
    if (btn) {
        btn.addEventListener('click' , () => {
            counter++;
            document.querySelector('#counter-value').innerText = counter;
        });
    }
}


/**
 * 
 * RENDER
 */

function render(view,setupEvents = null){
    app.innerHTML=`
        ${navbar()}
        <section>
        ${view}
        </section>
    `;

    if (setupEvents) setupEvents();
}

function router() {
    const route = location.hash;

    switch (route) {
        case '#/home':
            render(Home());
            break;
        case '#/services':
            render(Services());
            break;
        case '#/contac':
            render(Contact());
            break;
        case '#/about':
            render(About());
            break;
        case '#/counter':
            render(Counterview(),setupCounterEvents);
            break;
        default:
            render(Home());
    }
}

window.addEventListener('hashchange', router);
window.addEventListener('load', router);
/*
document.querySelector("#home").addEventListener('click', Home);
document.querySelector("#services").addEventListener('click',Services);
document.querySelector("#contac").addEventListener('click', Contact);
*/