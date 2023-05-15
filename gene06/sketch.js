let angle = 0;
let scalar = 0.5;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  translate(width / 2, height / 2);
  

  for (let i = 0; i < 200; i++) {
    
    fill(255, 0, 0)

    let r = i * scalar;
    let x = r * cos(angle * i);
    let y = r * sin(angle * i);
    stroke(0);
    strokeWeight(0);
    ellipse(x, y, 4, 4);
  }
  angle += 0.001
  if(angle>0.03){
    angle += 0.000001
  }
}
