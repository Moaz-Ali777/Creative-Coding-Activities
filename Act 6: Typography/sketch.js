let font;
let points = [];

function preload() {
  font = loadFont('https://cdnjs.cloudflare.com/ajax/libs/topcoat/0.8.0/font/SourceCodePro-Regular.otf');
}

function setup() {
  createCanvas(800, 400);
  textFont(font);
  textSize(200);
  
  // Convert text to points
  points = font.textToPoints('WAVES', 100, 250, 192, {
    sampleFactor: 0.25
  });

  noFill();
}

function draw() {
  background(10, 10, 30);

  for (let i = 0; i < points.length; i++) {
    let pt = points[i];

    push();
    translate(pt.x, pt.y);
    
    // Create a dynamic angle based on frameCount and mouseX
    let angle = sin(frameCount * 0.03 + i * 0.1 + mouseX * 0.005) * PI;

    rotate(angle);

    // Line color shifts with point index
    stroke(map(i, 0, points.length, 50, 255), 100, 255, 200);
    strokeWeight(1.5);

    line(-5, 0, 5, 0); // rotating line
    pop();
  }
}
