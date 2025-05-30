let trail = [];
let sizes = [];

function setup() {
  createCanvas(800, 400);
  noStroke();

  // Initialize trail positions and size animation states
  for (let i = 0; i < 45; i++) {
    trail.push(createVector(mouseX, mouseY));
    sizes.push(5); // default size
  }
}

function draw() {
  background(10);

  // First point follows mouse
  trail[0].x += (mouseX - trail[0].x) * 0.2;
  trail[0].y += (mouseY - trail[0].y) * 0.2;

  for (let i = 1; i < trail.length; i++) {
    trail[i].x += (trail[i - 1].x - trail[i].x) * 0.2;
    trail[i].y += (trail[i - 1].y - trail[i].y) * 0.2;

    // Calculate how much this point is "moving"
    let dx = trail[i].x - trail[i - 1].x;
    let dy = trail[i].y - trail[i - 1].y;
    let speed = sqrt(dx * dx + dy * dy);

    // Increase size if moving fast, then ease back down
    if (speed > 1) {
      sizes[i] = lerp(sizes[i], 15, 0.2); // pop
    } else {
      sizes[i] = lerp(sizes[i], 5, 0.05); // shrink back
    }
  }

  // Draw trail circles
  for (let i = 0; i < trail.length; i++) {
    let alpha = map(i, 0, trail.length, 255, 60);
    fill(100, 200, 255, alpha);
    ellipse(trail[i].x, trail[i].y, sizes[i]);
  }
}
