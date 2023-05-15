// let particles = [];
// let particlesNum = [];
// let colors = [];

// function setup() {
//   createCanvas(400, 400);
//   angleMode(DEGREES)
// }

// function draw() {
//   background(220);
//   ellipse(mouseX, mouseY, 50, 50);
// }

let x = 200;
let y = 200;
let xDirection = 1;
let yDirection = 2;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  ellipse(x, y, 50, 50);
  
  // xDirectionに応じてxを増減する
  if (x >= 300) {
    xDirection = -1;
  } else if (x <= 100) {
    xDirection = 1;
  }
  x += xDirection;

  if (y >= 250) {
    yDirection = -2;
  } else if (y <= 150) {
    yDirection = 2;
  }
  y += yDirection;
}