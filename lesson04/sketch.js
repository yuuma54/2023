const circles = [];

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  ellipse(mouseX, mouseY, 50, 50);
  

  for (let i = 0; i < circles.length; i++) {
    ellipse(
      circles[i].x,
      circles[i].y,
      circles[i].diameter,
      circles[i].diameter);
  }
}

function mouseClicked() {
  let x = mouseX;
  let y = mouseY;
  let diameter = 50;

  circles.push({
    x, y, diameter
  });
  // ellipse(x, y, diameter, diameter);

  console.log(circles)
}