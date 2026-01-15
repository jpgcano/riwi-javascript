export class Generator {
    #name
    #destino
    constructor() {
        this.#name="" 
        this.#destino="" 
    }
    saludar(inputNombre,elementoDestino){
        this.#name =    inputNombre; 
        this.#destino = elementoDestino;
        console.log("saludar");
        this.imprimirSaludo();
    }
    imprimirSaludo() {

        const nombre = this.#name.value;
        this.#destino.innerText = `!Hola, ${nombre} Bienvenido a tu Dashboard¡`;
    }

}