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

export const realeasedArray = filteredDate.map(function (x) {
  return `<option value="data">${x}</option>`;
});
console.log(realeasedArray);
/*FILTER FUNCTION*/
/*const filteredDate = films.filter((x) => {
  return x.release_date > 0;
});
console.log(filteredDate);*/
