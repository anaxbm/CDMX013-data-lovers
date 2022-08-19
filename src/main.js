/* import dentro de llaves cuando no es default */
import { posters } from "./data.js";
import { realeasedArray } from "./data.js";

const postersContainer = document.querySelector(".posters");
console.log(postersContainer);
const buttons = document.querySelectorAll(".categories-list");
console.log(buttons);
const realise = document.getElementById("date-values");
console.log(realise);
const date = document.getElementById("dates");
console.log(date);

postersContainer.innerHTML = posters.join("");
realise.innerHTML = realeasedArray.join("");
date.addEventListener("click", function () {
  console.log(date.value);
});
