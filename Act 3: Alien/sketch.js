function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(20, 20, 40); // dark space-like background

  // Alien body
  fill(100, 255, 100);
  ellipse(200, 220, 100, 140); // body

  // Head
  ellipse(200, 120, 80, 100); // head

  // Eyes
  fill(0);
  ellipse(185, 115, 15, 25); // left eye
  ellipse(215, 115, 15, 25); // right eye

  // Antennas
  stroke(100, 255, 100);
  strokeWeight(4);
  line(185, 80, 170, 60); // left antenna
  line(215, 80, 230, 60); // right antenna

  // Antenna tips
  noStroke();
  fill(255, 0, 100);
  ellipse(170, 60, 10, 10); // left tip
  ellipse(230, 60, 10, 10); // right tip

  // Arms
  fill(100, 255, 100);
  ellipse(140, 220, 30, 80); // left arm
  ellipse(260, 220, 30, 80); // right arm

  // Legs
  ellipse(180, 320, 25, 50); // left leg
  ellipse(220, 320, 25, 50); // right leg
}
