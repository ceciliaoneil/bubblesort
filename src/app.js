/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let button = document.getElementById("ordenar");

  const palo = ["♦", "♥", "♠", "♣"];
  const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

  let ordenar = [];

  let input = document.getElementById("numcartas");
  let container = document.getElementById("container");

  container.innerHTML = "";

  function RandomCardGenerator() {
    for (let i = 0; i < input.value; i++) {
      let randomPalo = palo[Math.floor(Math.random() * palo.length)];
      console.log(randomPalo);

      let randomNumber = number[Math.floor(Math.random() * number.length)];
      console.log(randomNumber);

      container.innerHTML += `<div class="card-body" id= "fondo">
            <div class="flex justify-content-start">
                <h1 id="palo-top"> ${randomPalo} </h1>
            </div>
            <div class="d-flex justify-content-center">
                <h1 id="jugar-medio"> ${randomNumber} </h1>
            </div>
            <div class="d-flex justify-content-end">
                <h1 id="palo-bottom" >${randomPalo}</h1>
            </div>
       </div>`;

      ordenar.push({
        palo: randomPalo,
        numero: randomNumber
      });
    }

    console.log(ordenar);
  }
  RandomCardGenerator();

  const bubbleSort = arr => {
    let wall = arr.length - 1; //we start the wall at the end of the array
    while (wall > 0) {
      let index = 0;
      while (index < wall) {
        //compare the adjacent positions, if the right one is bigger, we have to swap
        if (arr[index].numero > arr[index + 1].numero) {
          let aux = arr[index];
          arr[index] = arr[index + 1];
          arr[index + 1] = aux;
        }
        index++;
      }
      wall--; //decrease the wall for optimization
    }
    return arr;
  };

  button.addEventListener("click", function() {
    let nuevoArrayOrdenado = bubbleSort(ordenar);
    imprimirOrdenadas(nuevoArrayOrdenado);
    console.log(nuevoArrayOrdenado);
  });

  const imprimirOrdenadas = arr => {
    container.innerHTML = "";

    for (let index = 0; index < arr.length; index++) {
      container.innerHTML += `<div class="card-body" id= "fondo">
            <div class="flex justify-content-start">
                <h1 id="palo-top"> ${arr[index].palo} </h1>
            </div>
            <div class="d-flex justify-content-center">
                <h1 id="jugar-medio"> ${arr[index].numero} </h1>
            </div>
            <div class="d-flex justify-content-end">
                <h1 id="palo-bottom" >${arr[index].palo}</h1>
            </div>
       </div>`;
    }
  };
  input.addEventListener("input", function() {
    if (input.value <= 0) {
      input.value = 1;
    } else if (input.value > 12) {
      input.value = 12;
    }
  });
};
