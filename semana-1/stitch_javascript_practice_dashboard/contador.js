export class contador{
    #valor =0;
    constructor(valorInicial,elementoPantalla){
        this.#valor;
        this.pantalla=elementoPantalla;
        this.actualizarInterfaz(); 
}

incrementar(){
    this.#valor++;
    this.actualizarInterfaz();
    console.log(this.#valor)
}

decremtar(){
    this.#valor--;
    this.actualizarInterfaz();
    console.log(this.#valor)
}
actualizarInterfaz(){
    this.pantalla.innerText = this.#valor;
    console.log(this.#valor, "actualizar")
}
resetear(){
    this.#valor=0;
    this.actualizarInterfaz();
}

}



