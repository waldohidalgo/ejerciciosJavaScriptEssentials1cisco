const sum = (a, b) => a + b;
const mult = (a, b) => a * b;
const sub = (a, b) => a - b;

const operacion = (oper, a, b) => {
  if (Number.isInteger(a) && Number.isInteger(b)) {
    return oper(a, b);
  } else {
    return NaN;
  }
};

console.log(operacion(sub, 10, 10.1));
