/*
Ejercicio sencillo para rastrear el valor de variables hasta la iteración 5 que establece el result a cero
*/

let counter = 0;
let maxValue = 5;
let result = 1;
debugger;
for (counter = 0; counter < maxValue; counter++) {
  console.log(result);
  result *= maxValue - counter - 1;
}
console.log("Final result: ", result);
