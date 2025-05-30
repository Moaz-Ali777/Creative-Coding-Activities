let t = 0;

function setup() {
  createCanvas(800, 600);
  colorMode(HSB, 360, 100, 100, 100);
  noStroke();
}

function draw() {
  background(0, 0, 0, 10); // translucent black for trails
  t += 0.01;

  let gridSize = 30;
  for (let x = 0; x < width; x += gridSize) {
    for (let y = 0; y < height; y += gridSize) {
      let wave = sin(dist(x, y, mouseX, mouseY) * 0.05 - t * 5);
      let size = map(wave, -1, 1, 4, 28);
      let hue = map(wave, -1, 1, 180, 360);

      fill(hue, 80, 100, 80);
      ellipse(x, y, size, size);
    }
  }
}
