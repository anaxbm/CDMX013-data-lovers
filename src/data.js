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

export const example = () => {
  return "example";
};

export const anotherExample = () => {
  return "OMG";
};
