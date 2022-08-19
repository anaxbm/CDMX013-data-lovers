import { data2 } from "./data/ghibli/ghibli.js"; /* import dentro de llaves cuando no es default */
/*import data from "./data/ghibli/ghibli.js";*/
import { posters } from "./data.js";
import {releaseDate} from ".data.js";



const postersContainer = document.querySelector(".posters");
console.log(postersContainer);

const releaseDateSect = document.querySelector("#year");

/*const { films } = data;*/
/*deconstruccion, extrayendo films del objeto data del archivo ghibli.js */

postersContainer.innerHTML = posters.join("");
/*
releaseDateSect.innerHTML = releaseDate.join("");
*/
console.log(posters);
