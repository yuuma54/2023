function setup() {
  createCanvas(500, 500);
  noLoop()
}

function draw() {
  background(0);
  stroke(200); // 線の色を黒色に設定
  drawBranch(width / 2, height, 80, 20); // (width/2, height)の位置から始めて、長さ100の線を描画
}

function drawBranch(x, y, len, angle) {
  line(x, y, x, y - len); // 線を描画

  // 短くなった線に対して再帰的に描画
  if (len > 5) {
    push(); // 現在の座標系を保存
    console.log(len);

    if (len < 15) {
      stroke(
        random(255 - 1 * len),
        random(255 - 1 * len),
        255 - 2 * len
      );
    }
    if ( len < 8) {
      strokeWeight(0.4)
      }
    translate(x, y - len); // 座標系を移動
    rotate(radians(angle)); // 座標系を回転
    drawBranch(0, 0, len * random(0.7, 0.9), random(15, 25)); // 新しい枝を描画
    rotate(radians(-angle * 2)); // 座標系逆方向に回転
    drawBranch(0, 0, len * random(0.7, 0.9), random(15, 25)); // 新しい枝を描画
    pop(); // 座標系を復元
  }
}

