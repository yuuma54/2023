let drops = [];

function setup() {
  createCanvas(400, 400);
  background(0);
}

function draw() {
  for (let i = 0; i < drops.length; i++) {
    drops[i].move();
    drops[i].display();
  }
  
  if (frameCount % 10 == 0) {
    drops.push(new Drop(random(width), 0, random(5, 15)));
  }
}

class Drop {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = random(5, 10);
    this.speed = random(2, 4);
    this.lifetime = 0; // 追加:水滴が描画されたフレーム数
    this.maxLifetime = this.size * 20; // 追加:水滴が消えるまでのフレーム数
  }

  move() {
    this.y += this.speed;
    if (this.y > height + this.size) {
      this.y = 0 - this.size;
      this.x = random(width);
      this.lifetime = 0; // 追加:水滴を再利用するためlifetimeを0にリセット
    }
    this.lifetime++; // 追加: 水滴が描画されたフレーム数をインクリメント
  }

  display() {
    noStroke();
    fill(0, 255, 255, 150);
    ellipse(this.x, this.y, this.size, this.size);
    // 追加:水滴が一定の長さに達したら消す
    if (this.lifetime > this.maxLifetime) {
      this.y = 0 - this.size;
      this.x = random(width);
      this.lifetime = 0;
    }
  }
}

