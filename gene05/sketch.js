function setup() {
  createCanvas(800, 800);
  background(0);
}

class Particle {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.velocity = createVector(random(-1, 1), random(-1, 1));
    this.acceleration = createVector(0, 0);
    this.creationTime = millis();
    this.lifespan = 50000; // パーティクルが消えるまでの時間（ミリ秒）
  }
  
  update() {
    this.acceleration = p5.Vector.sub(createVector(width/2, height/2), this.position);
    this.acceleration.setMag(0.1);
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
  }
  
  display() {
    noStroke();
    fill(255, 100, 0);
    ellipse(this.position.x, this.position.y, 10, 10);
  }
  
  isDead() {
    return millis() - this.creationTime > this.lifespan;
  }
}


let particles = [];

function setup() {
  createCanvas(800, 800);
  background(0);
}

function draw() {
  background(0, 10);
  
  // パーティクルを生成
  particles.push(new Particle(random(width), random(height)));
  
  // パーティクルを更新して表示
  for (let i = 0; i < particles.length; i++) {
    particles[i].update();
    particles[i].display();
    
    // パーティクルが時間制限を超えた場合、削除
    if (particles[i].isDead()) {
      particles.splice(i, 1);
    }
  }
}

