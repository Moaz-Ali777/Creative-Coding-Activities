function setup() {
  createCanvas(400, 200);
}

function draw() {
  background(250);

  fill(150, 0, 0);
  rect(100, 100, 200, 50, 10); // Main body
  rect(140, 70, 120, 40, 5); // Roof

  fill(200, 255, 255);
  rect(150, 75, 40, 30, 5);
  rect(210, 75, 40, 30, 5);

  fill(0);
  ellipse(130, 150, 30, 30);
  ellipse(270, 150, 30, 30);

}
