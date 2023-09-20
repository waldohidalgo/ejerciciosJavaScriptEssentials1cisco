/*
Exercise 6: Write a function that will calculate the n-th element of the Fibonacci sequence. This sequence is defined by a formula:
*/

const fibonacci = (n) => {
  if (!Number.isInteger(n)) {
    return "Argumento no es integer";
  } else {
    if (n < 0) {
      return "Argumento es integer negativo";
    }

    return n == 0 ? 0 : n == 1 ? 1 : fibonacci(n - 1) + fibonacci(n - 2);
  }
};

console.log(fibonacci(7));
