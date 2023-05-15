function setup() {
    createCanvas(800, 600);
    angleMode(DEGREES);
    strokeJoin(ROUND);
    textAlign(CENTER, CENTER);
    colorMode(HSB, 360, 100, 100, 100);
    noLoop();
  }
  
  function draw() {
    blendMode(BLEND);
    background(0);
    
    blendMode(ADD);

    for (let i = 0; i < 600; i++) { 
      let S = random(50, 10);

      strokeWeight(S * 0.2);
      drawingContext.shadowColor = color(random(360), 100, 100);
      drawingContext.shadowBlur = random(50);
      stroke(4);
      textSize(S);
      noFill();

      let hiragana = String.fromCodePoint(floor(random(12353, 12437)));

      push ()
      translate (random(width), random(height));
      rotate (random(-45, 45));
      text(hiragana, 0, 0);
      pop ();
    }
  }
  