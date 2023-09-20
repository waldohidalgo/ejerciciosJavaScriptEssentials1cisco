const primerNumero = Number(prompt("Ingresa el número mayor"));
const ultimoNumero = Number(prompt("Ingresa el último número"));

if (isNaN(primerNumero) || isNaN(ultimoNumero)) {
  alert("Has ingresado una literal que no es número");
} else if (primerNumero <= ultimoNumero) {
  alert("Tu primer numero es menor o igual al último");
} else {
  for (let i = primerNumero; i >= ultimoNumero; i = i - 10) {
    console.log(i);
  }
}
