let sound, fft;

function preload() {
  sound = loadSound('piano.mp3');
}

function setup() {
  createCanvas(800, 400);
  fft = new p5.FFT();
  sound.play();
  noStroke();
}

function draw() {
  background(0);

  let spectrum = fft.analyze();

  fill(0, 255, 150);
  for (let i = 0; i < spectrum.length; i++) {
    let x = map(i, 0, spectrum.length, 0, width);
    let h = -height + map(spectrum[i], 0, 255, height, 0);
    rect(x, height, width / spectrum.length, h);
  }
}
