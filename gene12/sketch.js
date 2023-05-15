function setup() {
  createCanvas(400, 400);
  noLoop();
}

function draw() {
  background(0);

  noFill();
  for (let j = 0; j < 15; j++) {
    stroke(255, map(j, 0, 9, 0, 255), 0);

    beginShape();
    for (let i = 0; i < width; i++) {
      let x = i;
      let y = map(noise(i * 0.01, j * 0.04),
        0, 1, height * 0.25, height * 0.75);

      vertex(x, y);
    }
    endShape();
  }
}
