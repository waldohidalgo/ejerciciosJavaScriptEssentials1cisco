function div(a, b) {
  if (b == 0) {
    throw new RangeError("No se dividir por 0");
  }
  if (isFinite(a) && isFinite(b)) {
    console.log(a / b);
    return a / b;
  } else {
    console.log("Argumentos no válidos");
  }
}

let numbers = [10, 40, 0, 20, 50];

let division = 1000;

for (let number of numbers) {
  try {
    division = div(division, number);
  } catch (error) {
    console.log(error.message);
    continue;
  }
}
console.log(division);
