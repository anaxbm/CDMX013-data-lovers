/* import dentro de llaves cuando no es default */
import { posters } from "./data.js";
import {filterByDate} from "./data.js"

const postersContainer = document.querySelector(".posters");
console.log(postersContainer);
const buttons = document.querySelectorAll(".categories-list");
console.log(buttons);
const date = document.getElementById("dates");
console.log(date);
const datesValues = document.getElementById("rangeValue")


postersContainer.innerHTML = posters.join("");
date.addEventListener("input", function () {
  let value = date.value;
  console.log(value);
datesValues.innerHTML= value;
});
