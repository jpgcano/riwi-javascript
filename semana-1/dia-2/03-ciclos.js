/*
Imprime números del 1 al 10 usando ciclos.
*/

//for
console.log("ciclo for: ")
for(let i=1; i<=10; i++){
    console.log(i)
}

//while
i=0;
console.log("ciclo while: ")
while(i<=10){
    console.log(i)
    i++;
}

//do while
console.log("ciclo while: ")
let option;
do{
    console.log("1. Say hello");
    console.log("2. Exit");
    option = prompt("Choose an option: \n1.Say hello \n2.Exit ");

    if(option!==1 && option!==2){
        console.log("Invalid Option!");
        alert("Invalid Option!")
    }

    if(option==="1"){
        console.log("Hello!");
        alert("Hello!")
    }else if(option==="2"){
        console.log("Goodbye!");
        alert("Goodbye!")
    }else{
        console.log("Invalid Option!");
        alert("Invalid Option!")
    }

} while(option!=="2");

