// estas funciones son de ejemplo
import data from "./data/ghibli/ghibli.js";
const { films } = data;
/*deconstruccion, extrayendo films del objeto data del archivo ghibli.js */
export const posters = films.map(function (x) {
  /*                             object    */
  return `
  <div class="poster">
  <h2> ${x.title} </h2>
  <h3> ${x.release_date} </h3>
    <img class= "movie-image" src="${x.poster}" alt="poster" srcset="">
  </div>`;
});
/* arreglo con los años de todas las peliculas */
export const filteredDate = films.map(function (x) {
  return x.release_date;
});

console.log(filteredDate);


/*let eigthiesFilms = films.filter( film => parseInt(film.release_date) < 1990);
let ninetiesFilms = films.filter( film => parseInt(film.release_date) < 2000);
let hundredsFilms = films.filter( film => parseInt(film.release_date) < 2010);
let twentytensFilms = films.filter( film => parseInt(film.release_date) < 2022);*/

let arrDecades = [1980, 1990,2000,2010,2020];


export const filterByDate = arrDecades.map(function (x,i) {
  return films.filter( film => parseInt(film.release_date) < x && parseInt(film.release_date) >= arrDecades[i-1]);
});

console.log(filterByDate);

/*FILTER FUNCTION*/
/*const filteredDate = films.filter((x) => {
  return x.release_date > 0;
});
console.log(filteredDate);*/