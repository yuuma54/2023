let angle = 0;
let radius = 1;
let cx, cy;
let total_lines = 1000;

function setup() {
  createCanvas(400, 400);
  background(220);
  cx = width / 2;
  cy = height / 2;

  for (let i = 0; i < total_lines; i++) {
    let x1 = cx + cos(angle) * radius;
    let y1 = cy + sin(angle) * radius;
    let x2 = cx + cos(angle + i * 0.01) * (radius + 1);
    let y2 = cy + sin(angle + i * 0.01) * (radius + 1);
    line(x1, y1, x2, y2);

    angle += 0.1;
    radius += 1;
  }

}


