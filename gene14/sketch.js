let colors = ["#75dddd", "84c7d0", "#9297c4", "#9368b7", "aa3e98"]

function setup() {
  createCanvas(963, 633, WEBGL);
  angleMode(DEGREES);
  noLoop();
}

function draw() {
  background(50);
  lights();
  pointLight(color(255), 0, 0, -250);

  noStroke();

  for (let i = 0; i < 150; i++) {
    fill(colors[floor(random(colors.length))]);
    push();
    translate(random(-width / 2, width / 2), random(-height / 2, height / 2), random(-1500, 200));
    if (random(10) >= 4) {
      box(random(20, 180), random(20, 180))
    } else {
      sphere(random(10, 50));
    }

    pop();
  }
}
