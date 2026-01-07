/*
Evalúa si una persona es mayor de edad.
*/
//let age = prompt("How old are you?")
let isGreater = false
/*if(age>=18){
    isGreater = true
    alert("You can drink")
}else{
    alert("Stop")
}*/
let age

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("How old are you? ", (age) => {
  if (age >= 18) {
    isGreater = true
    alert("You can drink")
    console.log("You can drink");
  } else {
    console.log("Stop");
  }
  console.log(isGreater)
  rl.close();
});


