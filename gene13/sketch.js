function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(220);
    
    beginShape();
    vertex(50, 100);
    vertex(200, 200);
    vertex(100, 200);
    endShape(CLOSE);
  }
  