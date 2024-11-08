console.log("Introduccion a JavaScript");
console.error("Error numero 1");
console.warn("Advertencia");
console.info("Informacion");
console.debug("Debug");

console.count("Cuenta");
console.count("Cuenta");
console.count("Cuenta");
console.count("Cuenta");

console.group("Agrupacion de mensajes de log");

console.log("Mensaje del grupo #1");
console.log("Mensaje del grupo #2");
console.log("Mail del grupo #3");
console.log("Mail del grupo #4");

console.groupEnd("Agrupacion de mensajes de log");


console.time("Tiempo"); // Arrancar una cuenta
for(var i = 0; i < 100; i++){
    console.log("Imprimiendo iteracion");
}

console.timeEnd("Tiempo"); // Para la cuenta, e imprime el tiempo transcurrido

console.timeEnd("programa"); // Para la cuenta, e imprime el tiempo transcurrido

// alert("Esto es un mensaje javascript");

const usuarios = [
    {id: 1, nombre: "Juan"},
    {id: 2, nombre: "Pedro"}
];

let numeros = [1,2,3,4,5,6,7,8,9,10];

console.table(usuarios);
console.table(numeros);

let msg1 = "Hola";
let msg2 = "Mundo";

console.log(msg1 + " " + msg2);

let numero = 10;
numero = [1.55, "hola", true];

console.log(numero);
console.log(`Esto es una frase ${numero} de texto plano`);