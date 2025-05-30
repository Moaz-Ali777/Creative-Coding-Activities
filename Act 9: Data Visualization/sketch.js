let teams = [
  { name: "Real Madrid", titles: 14 },
  { name: "AC Milan", titles: 7 },
  { name: "Bayern Munich", titles: 6 },
  { name: "Liverpool", titles: 6 },
  { name: "Barcelona", titles: 5 },
  { name: "Ajax", titles: 4 },
  { name: "Man United", titles: 3 },
  { name: "Inter Milan", titles: 3 },
  { name: "Chelsea", titles: 2 },
  { name: "Benfica", titles: 2 }
];

function setup() {
  createCanvas(900, 500);
  textFont("Helvetica");
  textAlign(CENTER);
  background(20);
  noLoop();
  drawBars();
}

function drawBars() {
  let margin = 60;
  let barWidth = (width - 2 * margin) / teams.length - 10;
  let maxTitles = max(teams.map(t => t.titles));
  let chartHeight = height - 120;

  fill(255);
  textSize(20);
  text("Top UEFA Champions League Winning Clubs", width / 2, 40);

  for (let i = 0; i < teams.length; i++) {
    let barHeight = map(teams[i].titles, 0, maxTitles, 0, chartHeight);
    let x = margin + i * (barWidth + 10);
    let y = height - barHeight - 60;

    // Bar color
    fill(0, 150, 255);
    rect(x, y, barWidth, barHeight);

    // Titles label
    fill(255);
    textSize(12);
    text(teams[i].titles + " 🏆", x + barWidth / 2, y - 10);

    // Team name
    textSize(11);
    text(teams[i].name, x + barWidth / 2, height - 40);
  }
}
