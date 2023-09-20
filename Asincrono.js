/*
Exercise 5: Write a program that will print out (to the console) consecutive integers 10 times, in two-second intervals (start with the number 1). Use the functions setInterval, clearInterval and setTimeout.
*/

let counter = 1;
const idInterval = setInterval(() => {
  console.log(counter);
  counter++;
}, 1000);

setTimeout(() => clearInterval(idInterval), 10500);
