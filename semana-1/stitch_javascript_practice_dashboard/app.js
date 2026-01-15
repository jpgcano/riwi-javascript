import { contador } from "./contador.js";
import { Generator } from "./helloGenerador.js";



//Hello world generator
const generatorMenssaje = document.querySelector("#generator_menssaje");
document.querySelector("#btn-greet-me").addEventListener("click", () => {
const migenerator = new Generator()
    const inputNombre = document.querySelector("#name");
    const elementoDestino = document.querySelector("#generator_menssaje");
    migenerator.saludar(inputNombre, elementoDestino);
});


//simple counter
const display = document.querySelector("#value");
const miContador = new contador(0, display);

document.querySelector("#remove").addEventListener("click", () => {
    miContador.decremtar();
});
document.querySelector("#add").addEventListener("click", () => {
    miContador.incrementar();
});
document.querySelector("#reset").addEventListener("click", () => {
    miContador.resetear();
});
