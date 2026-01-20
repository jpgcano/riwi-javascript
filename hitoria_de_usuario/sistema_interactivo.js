//Historia de usuarios




//entrada de datos y declaración de variables
let name =prompt("Ingresa nombre: ");
let age = prompt("Ingresa edad: "); 
//verificar si el dato es un numero
if (age==Number) {
    console.log("es un numero")
}else{
    console.error("Error: Por favor, ingresa una edad válida en números.");
}
//verificar si es mayor de edad
if (age<18) {
    alert(`Hola ${name}, eres menor de edad. ¡Sigue aprendiendo y disfrutando del código!`);
    console.log(`Hola ${name}, eres menor de edad. ¡Sigue aprendiendo y disfrutando del código!`);
}else{
    alert(`Hola ${name}, eres mayor de edad. ¡Prepárate para grandes oportunidades en el mundo de la programación!`);
    console.log(`Hola ${name}, eres mayor de edad. ¡Prepárate para grandes oportunidades en el mundo de la programación!`);
}


const productos =[
    {
        id: 1,
        nombre: "laptop",
        precio: 900000
    },
    {
        id: 2,
        nombre: "mouse",
        precio: 50000
    },
    {
        id: 3,
        nombre: "teclado",
        precio: 120000
    }
];

const setnumeros = new Set();
console.log(setnumeros)