function setup() {
  createCanvas(600, 600);
  noLoop();
  noStroke();
  background(255);
  fill(50, 100, 200);

  let side = 50; // length of triangle side
  let h = side * sqrt(3) / 2; // height of equilateral triangle

  for (let y = 0; y < height + h; y += h) {
    for (let x = 0; x < width + side; x += side) {
      let xOffset = (int(y / h) % 2 === 0) ? 0 : side / 2;

      if (int((x + xOffset) / side) % 2 === 0) {
        drawTriangleUp(x + xOffset, y, side);
      } else {
        drawTriangleDown(x + xOffset, y, side);
      }
    }
  }
}

function drawTriangleUp(x, y, s) {
  let h = s * sqrt(3) / 2;
  triangle(
    x, y - h / 2,
    x - s / 2, y + h / 2,
    x + s / 2, y + h / 2
  );
}

function drawTriangleDown(x, y, s) {
  let h = s * sqrt(3) / 2;
  triangle(
    x, y + h / 2,
    x - s / 2, y - h / 2,
    x + s / 2, y - h / 2
  );
}
