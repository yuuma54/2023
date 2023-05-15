function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  strokeWeight(0.5);
  stroke(255);

  let x = width / 2;
  let y = height;
  let gapX = 20;
  let gapY = 50;

  line(x, y, x, y - gapY)

  line(x, y - gapY, x + gapX, y - gapY - gapY * 0.8)
  line(x, y - gapY, x - gapX, y - gapY - gapY * 0.8)

  for (i = 0; i < 100; i++) {
    line(x, y - gapY, x + gapX, y - gapY - gapY * 0.8)
    line(x, y - gapY, x - gapX, y - gapY - gapY * 0.8)

  }


}