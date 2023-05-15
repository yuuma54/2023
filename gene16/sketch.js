let movers = [];
let moversNum = 800;

function setup() {
  createCanvas(400, 400);
  background(235);

  for (let i = 0; i < moversNum; i++) {
    movers.push(new Mover());
  }
}

function draw() {
  for (let i = 0; i < movers.length; i++) {
    movers[i].move();
    movers[i].display();
  }
}

class Mover {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.d = random(2, 3);
    this.fillColor = color(0, random(255), 255);
  }

  move() {
    this.x += random(-5, 5);
    this.y += random(-5, 5);

    if (this.x < 0) {
      this.x = width;
    }
    if (this.x > width) {
      this.x = 0;
    }
    if (this.y < 0) {
      this.y = height;
    }
    if (this.y > height) {
      this.y = 0;
    }
  }
  display(){
    noStroke()
    fill(this.fillColor);
    circle(this.x, this.y, this.d);
  }
}