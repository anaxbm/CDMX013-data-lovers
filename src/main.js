/* import dentro de llaves cuando no es default */
import { posters, filterData, filterScore } from "./data.js";
/*importando funcion de imprimir imagenes, release date y score */
const postersContainer = document.querySelector(".posters");

const date = document.getElementById("dates");
/*guardando input donde el usuario buscara la fecha de estreno */

const datesValues = document.getElementById("rangeValue");
/*guardando etiqueda span de release date, que permite mostrar el valor al que el usuario cambia
segun el valor que reciba...  */
console.log(datesValues);

const score = document.getElementById("movieScore");
/* guardando input de puntajes */
const scoreValues = document.getElementById("rangeScore");
/* guardando etiqueta span de el puntaje */

/* release date function */
/*agregando un event listener a el input de fecha de estreno*/
date.addEventListener("input", function () {
  /* guardando el valor que el usuario elige en el input de fecha de estreno */
  let releaseValue = date.value;
  /* aqui, estamos haciendo que el valor que esta dentro de etiqueta span, cambie, segun el valor que reciba el input*/
  datesValues.innerHTML = releaseValue;
  /* pasando parametro del input, a la función de filterData de data.js */
  let filteredByDate = filterData(releaseValue);
  /* pidiendo que muestre solo las imagenes que corresponde al arreglo filtrado, 
 al contenedor donde se muestran todas las imagenes para esto-..
  aplicamos un .map a nuestro arreglo ya filtrado, pidiendo que devuelva por cada objeto 
  un div donde esten dentro el poster asi como la fecha */
  postersContainer.innerHTML = filteredByDate.map(function (x) {
    /*                             object    */
    return `
    <div class="poster">
    <h2> ${x.title} </h2>
    <h3> ${x.release_date} </h3>
      <img class= "movie-image" src="${x.poster}" alt="poster" srcset="">
    </div>`;
  });
}); /* add event listener de date, cierra aquí */

/* score function */
score.addEventListener("input", function () {
  let scoreValue = score.value;
  scoreValues.innerHTML = scoreValue;
  let filteredByScore = filterScore(scoreValue);
  postersContainer.innerHTML = filteredByScore.map(function (x) {
    return `
    <div class="poster">
    <h2> ${x.title} </h2>
    <h3> ${x.release_date} </h3>
      <img class= "movie-image" src="${x.poster}" alt="poster" srcset="">
    </div>
    `;
  });
});

postersContainer.innerHTML = posters.join("");
