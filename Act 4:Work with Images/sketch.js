var img;

function preload() {
  img = loadImage("beachh.jpg"); // Load the image before setup
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  
  image(img, 0, 0, width, height); // Draw the image filling the canvas
  
  var v = map(mouseX, 0, width, 2, 20); // Map mouseX to posterization levels
  filter(POSTERIZE, v); // Apply posterization filter
}
