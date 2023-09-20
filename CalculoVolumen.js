let ancho = prompt("¿ Cuál es el ancho de la caja?");
let alto = prompt("¿ Cuál es el alto de la caja?");
let fondo = prompt("¿ Cuál es el fondo de la casa?");

const calculaVolumen = (ancho, alto, fondo) => {
  let [anchoN, altoN, fondoN] = [ancho, alto, fondo].map((e) => Number(e));

  if (isNaN(anchoN) || isNaN(altoN) || isNaN(fondoN)) {
    alert("No se ha podido calcular el volumen");
  } else alert("El volumen de la caja es: " + anchoN * altoN * fondoN);
};

calculaVolumen(ancho, alto, fondo);
