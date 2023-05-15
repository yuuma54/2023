const circles = [];

function setup() {
  createCanvas(400, 400);
  background(220);
  noLoop()
}

function draw() {
  background(220);

  // fill(r, g, b)
  // ellipse(mouseX, mouseY, 50, 50);

  for (i = 0; i < 10000; i++) {
    fill(random(255), random(255), random(255))
    rect(random(width), random(height), 10, 10)
  }

}

// function mouseClicked() {
//   let x = mouseX;
//   let y = mouseY;
//   let diameter = 50;

//   fill (255, 0, 0)
//   ellipse(x, y, diameter, diameter);

//   console.log(circles)
// }