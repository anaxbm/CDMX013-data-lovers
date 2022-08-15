// estas funciones son de ejemplo
import data from "./data/ghibli/ghibli.js";
const { films } = data;
export const posters = films.map(function (x) {
  /*                             object    */
  return `
  <div class="poster">
    <img class= "movie-image" src="${x.poster}" alt="poster" srcset="">
  </div>`;
});

export const example = () => {
  return "example";
};

export const anotherExample = () => {
  return "OMG";
};
