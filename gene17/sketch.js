let colors = ["#43d6f0", "#d633b8", "#6919d1", "#f781a6", "#394a99"]

let sd = 0;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES)
  noLoop();

  sd = random(100);
}

function draw() {
  background(30);

  noFill();

  let ox = random(width);
  let oy = random(height);
  for (let k = 1; k <= 30; k++) {
    let c = color(colors[floor(random(colors.length))]);
    c.setAlpha(80);
    stroke(c);

    noiseSeed(k * sd);
    for (let i = 0; i < 50; i++) {
      beginShape();

      for (let j = 0; j < width * 1.2; j++) {
        let x = ox + j * cos(noise(i * 0.01, j * 0.001) * 360 * 2);
        let y = oy + j * sin(noise(i * 0.01, j * 0.001) * 360 * 2);

        curveVertex(x, y);
      }

      endShape();
    }
  }
}
