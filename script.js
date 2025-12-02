const lizard = document.getElementById("lizard");

let x = 180; // posición inicial en X
let y = 140; // posición inicial en Y
const step = 10; // cuantos píxeles se mueve

const areaWidth = 400;
const areaHeight = 300;
const lizardWidth = 40;
const lizardHeight = 20;

function updatePosition() {
  lizard.style.left = x + "px";
  lizard.style.top = y + "px";
}

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp") {
    y -= step;
  } else if (event.key === "ArrowDown") {
    y += step;
  } else if (event.key === "ArrowLeft") {
    x -= step;
  } else if (event.key === "ArrowRight") {
    x += step;
  }

  // límites dentro del área de juego
  if (x < 0) x = 0;
  if (y < 0) y = 0;
  if (x > areaWidth - lizardWidth) x = areaWidth - lizardWidth;
  if (y > areaHeight - lizardHeight) y = areaHeight - lizardHeight;

  updatePosition();
});

// dibujamos la posición inicial
updatePosition();

