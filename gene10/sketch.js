function setup() {
    createCanvas(500, 500);
    noLoop();
  }
  
  function draw() {
    background(5);
    fill(84, 218, 255, 150);
    noStroke();

    for (let i = 0; i < 100; i++) {
      circle(random(width), random(height), random(10, 100))
    }
  }
  