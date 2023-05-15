let imgW, imgH;
let wMax, hMax;

function setup() {
	createCanvas(1600, 900);

	noLoop();

	imgW = 150;
	imgH = 150;

	wMax = floor(width / imgW) + 1;
	hMax = floor(height / imgH) * 2 + 2;

	background(0);
}

function draw() {
	for (let i = -1; i < wMax; i++) {
		for (let j = -1; j < hMax; j++) {
			let pg = createGraphics(imgW, imgH);
			pg.rectMode(CENTER);
			pg.textAlign(CENTER, CENTER);
			pg.strokeJoin(ROUND);
			pg.colorMode(HSB, 360, 100, 100, 100);

			pg.blendMode(BLEND);
			pg.background(0);

			pg.blendMode(ADD);
			pg.noStroke();

			for (let i = 0; i < 70; i++) {
				pg.fill(random(360), 100, 100, 10);
				pg.push();
				pg.translate(random(pg.width), random(pg.height));
				pg.rotate(random(TWO_PI));
				pg.rect(0, 0, random(pg.width * 0.1, pg.width * 1.0), random(pg.width * 0.1, pg.width * 1.0));
				pg.pop();
			}

			pg.erase();
			pg.circle(0, 0, pg.height);
			pg.circle(pg.width, 0, pg.height);

			pg.beginShape();
			pg.vertex(pg.width, pg.height);
			pg.vertex(pg.width, pg.height / 2);
			for (let t = 0; t <= PI; t += PI / 180) {
				pg.vertex(pg.width / 2 + pg.height / 2 * cos(t), pg.height / 2 + pg.height / 2 * sin(t));
			}
			pg.vertex(0, pg.height / 2);
			pg.vertex(0, pg.height);
			pg.endShape(CLOSE);
			pg.noErase();

			let space = j % 2 == 0 ? pg.width / 2 : 0;

			push();
			drawingContext.shadowColor = color(0, 0, 0);
			drawingContext.shadowBlur = 40;
			drawingContext.shadowOffsetY = 20;
			image(pg, i * imgW + space, j * imgH / 2);
			pop();
		}
	}
}