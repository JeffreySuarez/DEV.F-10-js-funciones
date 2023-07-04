const img = document.getElementById("img"); // objetenmos el id de la img.

let indiceColor = 0; // indice de los colores
let intervalId = null; // el tiempo la secuencia
const colors = ["red", "yellow", "green"];

const trafficLight = (event) => {
  turnOn[event.target.id]();
  console.log(turnOn[event.target.id]);
};

const siguienteIndex = () => ((indiceColor = indiceColor < 2 ? ++indiceColor : 0), console.log(indiceColor)); // en esta funcion hacemos un ciclo del array de los indices.

const changeColor = () => {
  const color = colors[indiceColor];
  // con esta constante color agregarmos el color segun su indice.
  console.log(color);
  turnOn[color](); //se ejecuta la funcion para que busque el color segun el cambio del indice en su id.
  console.log(turnOn[color]);
  siguienteIndex(); //se ejecuta la funcion para que realice el ciclo
};

const turnOn = {
  stop: () => (clearInterval(intervalId), (img.src = "./img/sinColor.png"), turnOn.stop),
  red: () => (img.src = "./img/rojo.png"),
  yellow: () => (img.src = "./img/amarillo.png"),
  green: () => (img.src = "./img/verde.png"),
  automatic: () => (intervalId = setInterval(changeColor, 1500)),
};

buttons.addEventListener("click", trafficLight);
