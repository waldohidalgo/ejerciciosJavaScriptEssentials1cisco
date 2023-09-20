function factorial(n) {
  if (n > 20) {
    throw new RangeError("Valor Máximo 20");
  }
  let result = 1;
  while (n > 1) {
    result = n * result;
    n--;
  }
  return result;
}
