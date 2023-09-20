function operacion(operador, numero1, numero2) {
  const resultados = {
    "+": numero1 + numero2,
    "-": numero1 - numero2,
    "*": numero1 * numero2,
    "/": numero1 / numero2,
  };

  return resultados[operador];
}

while (true) {
  let numero1 = prompt("Ingresa número 1. (Si deseas salir, presiona Q)");

  if (numero1 == "Q") {
    break;
  }
  let numero2 = prompt("Ingresa número 2. (Si deseas salir, presiona Q)");
  if (numero2 == "Q") {
    break;
  }
  let operador = prompt(
    "Ingresa Operador (+,-,*,/). (Si deseas salir, presiona Q)"
  );
  if (operador == "Q") {
    break;
  }

  if (isNaN(numero1) || isNaN(numero2)) {
    alert("Se ha ingresado como numero algo que no lo es");
  } else if (
    operador == "+" ||
    operador == "-" ||
    operador == "*" ||
    operador == "/"
  ) {
    alert(
      `El operador ingresado es: ${operador} y los números ingresados son: ${numero1} y ${numero2}. El resultado de la operación es: ${operacion(
        operador,
        Number(numero1),
        Number(numero2)
      )}`
    );
  } else {
    alert("Error,has ingresado un operador que no existe");
  }
}
