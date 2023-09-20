let isOver = false;
const movies = [];

while (!isOver) {
  const nombrePelicula = prompt("Ingresa el nombre de la pelicula");
  if (nombrePelicula == null) {
    isOver = true;
  } else {
    const ratingPelicula = prompt("Ingresa el rating de la pelicula");
    if (ratingPelicula == null) {
      isOver = true;
    } else {
      movies.push({ title: nombrePelicula, imbd: ratingPelicula });
    }
  }
}
let counterMenor7 = 0;
for (let i = 0; i < movies.length; i++) {
  let imbd = Number(movies[i].imbd);
  if (!isNaN(imbd)) {
    if (imbd < 7) {
      if (counterMenor7 == 0) {
        console.log("Peliculas con nota < 7");
      }
      console.log(`${movies[i].title} (${movies[i].imbd})`);
      counterMenor7 += 1;
    }
  }
}

let counterMayorIgual7 = 0;
for (let i = 0; i < movies.length; i++) {
  let imbd = Number(movies[i].imbd);
  if (!isNaN(imbd)) {
    if (imbd >= 7) {
      if (counterMayorIgual7 == 0) {
        console.log("Peliculas con nota >= 7");
      }
      console.log(`${movies[i].title} (${movies[i].imbd})`);
      counterMayorIgual7 += 1;
    }
  }
}
