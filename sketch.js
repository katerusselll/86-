let mic;

let started = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  mic = new p5.AudioIn();
  mic.start();
}

function draw() {
  let vol = mic.getLevel();
  background(0);

  let EllipseX = width / 11;
  let EllipseY = height / 11;
  let EllipseSize = vol;

  //row1
  drawEllipse(EllipseX, EllipseY, EllipseSize);
  drawEllipse(EllipseX * 2, EllipseY, EllipseSize);
  drawEllipse(EllipseX * 3, EllipseY, EllipseSize);
  drawEllipse(EllipseX * 4, EllipseY, EllipseSize);
  drawOtherEllipse(EllipseX * 5, EllipseY, EllipseSize);
  drawOtherEllipse(EllipseX * 6, EllipseY, EllipseSize);
  drawEllipse(EllipseX * 7, EllipseY, EllipseSize);
  drawEllipse(EllipseX * 8, EllipseY, EllipseSize);
  drawEllipse(EllipseX * 9, EllipseY, EllipseSize);
  drawEllipse(EllipseX * 10, EllipseY, EllipseSize);

  //row2
  drawEllipse(EllipseX, EllipseY * 2, EllipseSize);
  drawEllipse(EllipseX * 2, EllipseY * 2, EllipseSize);
  drawEllipse(EllipseX * 3, EllipseY * 2, EllipseSize);
  drawEllipse(EllipseX * 4, EllipseY * 2, EllipseSize);
  drawEllipse(EllipseX * 5, EllipseY * 2, EllipseSize);
  drawEllipse(EllipseX * 6, EllipseY * 2, EllipseSize);
  drawEllipse(EllipseX * 7, EllipseY * 2, EllipseSize);
  drawEllipse(EllipseX * 8, EllipseY * 2, EllipseSize);
  drawEllipse(EllipseX * 9, EllipseY * 2, EllipseSize);
  drawEllipse(EllipseX * 10, EllipseY * 2, EllipseSize);

  //row3
  drawEllipse(EllipseX, EllipseY * 3, EllipseSize);
  drawEllipse(EllipseX * 2, EllipseY * 3, EllipseSize);
  drawOtherEllipse(EllipseX * 3, EllipseY * 3, EllipseSize);
  drawEllipse(EllipseX * 4, EllipseY * 3, EllipseSize);
  drawEllipse(EllipseX * 5, EllipseY * 3, EllipseSize);
  drawEllipse(EllipseX * 6, EllipseY * 3, EllipseSize);
  drawEllipse(EllipseX * 7, EllipseY * 3, EllipseSize);
  drawOtherEllipse(EllipseX * 8, EllipseY * 3, EllipseSize);
  drawEllipse(EllipseX * 9, EllipseY * 3, EllipseSize);
  drawEllipse(EllipseX * 10, EllipseY * 3, EllipseSize);

  //row4
  drawEllipse(EllipseX, EllipseY * 4, EllipseSize);
  drawEllipse(EllipseX * 2, EllipseY * 4, EllipseSize);
  drawEllipse(EllipseX * 3, EllipseY * 4, EllipseSize);
  drawEllipse(EllipseX * 4, EllipseY * 4, EllipseSize);
  drawEllipse(EllipseX * 5, EllipseY * 4, EllipseSize);
  drawEllipse(EllipseX * 6, EllipseY * 4, EllipseSize);
  drawEllipse(EllipseX * 7, EllipseY * 4, EllipseSize);
  drawEllipse(EllipseX * 8, EllipseY * 4, EllipseSize);
  drawEllipse(EllipseX * 9, EllipseY * 4, EllipseSize);
  drawEllipse(EllipseX * 10, EllipseY * 4, EllipseSize);

  //row5
  drawOtherEllipse(EllipseX, EllipseY * 5, EllipseSize);
  drawEllipse(EllipseX * 2, EllipseY * 5, EllipseSize);
  drawEllipse(EllipseX * 3, EllipseY * 5, EllipseSize);
  drawEllipse(EllipseX * 4, EllipseY * 5, EllipseSize);
  drawOtherEllipse(EllipseX * 5, EllipseY * 5, EllipseSize);
  drawEllipse(EllipseX * 6, EllipseY * 5, EllipseSize);
  drawEllipse(EllipseX * 7, EllipseY * 5, EllipseSize);
  drawEllipse(EllipseX * 8, EllipseY * 5, EllipseSize);
  drawEllipse(EllipseX * 9, EllipseY * 5, EllipseSize);
  drawOtherEllipse(EllipseX * 10, EllipseY * 5, EllipseSize);

  //row6- blank

  //row7
  drawOtherEllipse(EllipseX, EllipseY * 7, EllipseSize);
  drawEllipse(EllipseX * 2, EllipseY * 7, EllipseSize);
  drawEllipse(EllipseX * 3, EllipseY * 7, EllipseSize);
  drawEllipse(EllipseX * 4, EllipseY * 7, EllipseSize);
  drawEllipse(EllipseX * 5, EllipseY * 7, EllipseSize);
  drawOtherEllipse(EllipseX * 6, EllipseY * 7, EllipseSize);
  drawEllipse(EllipseX * 7, EllipseY * 7, EllipseSize);
  drawEllipse(EllipseX * 8, EllipseY * 7, EllipseSize);
  drawEllipse(EllipseX * 9, EllipseY * 7, EllipseSize);
  drawOtherEllipse(EllipseX * 10, EllipseY * 7, EllipseSize);

  //row8
  drawEllipse(EllipseX, EllipseY * 8, EllipseSize);
  drawEllipse(EllipseX * 2, EllipseY * 8, EllipseSize);
  drawOtherEllipse(EllipseX * 3, EllipseY * 8, EllipseSize);
  drawEllipse(EllipseX * 4, EllipseY * 8, EllipseSize);
  drawEllipse(EllipseX * 5, EllipseY * 8, EllipseSize);
  drawEllipse(EllipseX * 6, EllipseY * 8, EllipseSize);
  drawEllipse(EllipseX * 7, EllipseY * 8, EllipseSize);
  drawOtherEllipse(EllipseX * 8, EllipseY * 8, EllipseSize);
  drawEllipse(EllipseX * 9, EllipseY * 8, EllipseSize);
  drawEllipse(EllipseX * 10, EllipseY * 8, EllipseSize);

  //row9
  drawEllipse(EllipseX, EllipseY * 9, EllipseSize);
  drawEllipse(EllipseX * 2, EllipseY * 9, EllipseSize);
  drawEllipse(EllipseX * 3, EllipseY * 9, EllipseSize);
  drawEllipse(EllipseX * 4, EllipseY * 9, EllipseSize);
  drawEllipse(EllipseX * 5, EllipseY * 9, EllipseSize);
  drawEllipse(EllipseX * 6, EllipseY * 9, EllipseSize);
  drawEllipse(EllipseX * 7, EllipseY * 9, EllipseSize);
  drawEllipse(EllipseX * 8, EllipseY * 9, EllipseSize);
  drawEllipse(EllipseX * 9, EllipseY * 9, EllipseSize);
  drawEllipse(EllipseX * 10, EllipseY * 9, EllipseSize);

  //row10
  drawEllipse(EllipseX, EllipseY * 10, EllipseSize);
  drawEllipse(EllipseX * 2, EllipseY * 10, EllipseSize);
  drawEllipse(EllipseX * 3, EllipseY * 10, EllipseSize);
  drawEllipse(EllipseX * 4, EllipseY * 10, EllipseSize);
  drawEllipse(EllipseX * 5, EllipseY * 10, EllipseSize);
  drawEllipse(EllipseX * 6, EllipseY * 10, EllipseSize);
  drawEllipse(EllipseX * 7, EllipseY * 10, EllipseSize);
  drawEllipse(EllipseX * 8, EllipseY * 10, EllipseSize);
  drawEllipse(EllipseX * 9, EllipseY * 10, EllipseSize);
  drawEllipse(EllipseX * 10, EllipseY * 10, EllipseSize);

   //row11
  drawEllipse(EllipseX, EllipseY * 6, EllipseSize);
  drawEllipse(EllipseX * 2, EllipseY * 6, EllipseSize);
  drawEllipse(EllipseX * 3, EllipseY * 6, EllipseSize);
  drawEllipse(EllipseX * 4, EllipseY * 6, EllipseSize);
  drawOtherEllipse(EllipseX * 5, EllipseY * 6, EllipseSize);
  drawOtherEllipse(EllipseX * 6, EllipseY * 6, EllipseSize);
  drawEllipse(EllipseX * 7, EllipseY * 6, EllipseSize);
  drawEllipse(EllipseX * 8, EllipseY * 6, EllipseSize);
  drawEllipse(EllipseX * 9, EllipseY * 6, EllipseSize);
  drawEllipse(EllipseX * 10, EllipseY * 6, EllipseSize);

  function drawEllipse(EllipseX, EllipseY, EllipseSize) {
    fill(255);
    noStroke();
    ellipse(EllipseX, EllipseY, vol * 4, vol * 50);
    console.log(vol);
    //look up lerp for smoothness
  }

  function drawOtherEllipse(EllipseX, EllipseY, EllipseSize) {
    fill(200);
    noStroke();
    ellipse(EllipseX, EllipseY, vol * 10, vol * 10);
    console.log(vol);
  }

  //row1
  drawVerticalEllipse(EllipseX, EllipseY, EllipseSize);
  drawVerticalEllipse(EllipseX * 2, EllipseY, EllipseSize);
  drawVerticalEllipse(EllipseX * 3, EllipseY, EllipseSize);
  drawVerticalEllipse(EllipseX * 4, EllipseY, EllipseSize);
  drawOtherEllipse(EllipseX * 5, EllipseY, EllipseSize);
  drawOtherEllipse(EllipseX * 6, EllipseY, EllipseSize);
  drawVerticalEllipse(EllipseX * 7, EllipseY, EllipseSize);
  drawVerticalEllipse(EllipseX * 8, EllipseY, EllipseSize);
  drawVerticalEllipse(EllipseX * 9, EllipseY, EllipseSize);
  drawVerticalEllipse(EllipseX * 10, EllipseY, EllipseSize);

  //row2
  drawVerticalEllipse(EllipseX, EllipseY * 2, EllipseSize);
  drawVerticalEllipse(EllipseX * 2, EllipseY * 2, EllipseSize);
  drawVerticalEllipse(EllipseX * 3, EllipseY * 2, EllipseSize);
  drawVerticalEllipse(EllipseX * 4, EllipseY * 2, EllipseSize);
  drawVerticalEllipse(EllipseX * 5, EllipseY * 2, EllipseSize);
  drawVerticalEllipse(EllipseX * 6, EllipseY * 2, EllipseSize);
  drawVerticalEllipse(EllipseX * 7, EllipseY * 2, EllipseSize);
  drawVerticalEllipse(EllipseX * 8, EllipseY * 2, EllipseSize);
  drawVerticalEllipse(EllipseX * 9, EllipseY * 2, EllipseSize);
  drawVerticalEllipse(EllipseX * 10, EllipseY * 2, EllipseSize);

  //row3
  drawVerticalEllipse(EllipseX, EllipseY * 3, EllipseSize);
  drawVerticalEllipse(EllipseX * 2, EllipseY * 3, EllipseSize);
  drawOtherEllipse(EllipseX * 3, EllipseY * 3, EllipseSize);
  drawVerticalEllipse(EllipseX * 4, EllipseY * 3, EllipseSize);
  drawVerticalEllipse(EllipseX * 5, EllipseY * 3, EllipseSize);
  drawVerticalEllipse(EllipseX * 6, EllipseY * 3, EllipseSize);
  drawVerticalEllipse(EllipseX * 7, EllipseY * 3, EllipseSize);
  drawOtherEllipse(EllipseX * 8, EllipseY * 3, EllipseSize);
  drawVerticalEllipse(EllipseX * 9, EllipseY * 3, EllipseSize);
  drawVerticalEllipse(EllipseX * 10, EllipseY * 3, EllipseSize);

  //row4
  drawVerticalEllipse(EllipseX, EllipseY * 4, EllipseSize);
  drawVerticalEllipse(EllipseX * 2, EllipseY * 4, EllipseSize);
  drawVerticalEllipse(EllipseX * 3, EllipseY * 4, EllipseSize);
  drawVerticalEllipse(EllipseX * 4, EllipseY * 4, EllipseSize);
  drawVerticalEllipse(EllipseX * 5, EllipseY * 4, EllipseSize);
  drawVerticalEllipse(EllipseX * 6, EllipseY * 4, EllipseSize);
  drawVerticalEllipse(EllipseX * 7, EllipseY * 4, EllipseSize);
  drawVerticalEllipse(EllipseX * 8, EllipseY * 4, EllipseSize);
  drawVerticalEllipse(EllipseX * 9, EllipseY * 4, EllipseSize);
  drawVerticalEllipse(EllipseX * 10, EllipseY * 4, EllipseSize);

  //row5
  drawOtherEllipse(EllipseX, EllipseY * 5, EllipseSize);
  drawVerticalEllipse(EllipseX * 2, EllipseY * 5, EllipseSize);
  drawVerticalEllipse(EllipseX * 3, EllipseY * 5, EllipseSize);
  drawVerticalEllipse(EllipseX * 4, EllipseY * 5, EllipseSize);
  drawOtherEllipse(EllipseX * 5, EllipseY * 5, EllipseSize);
  drawVerticalEllipse(EllipseX * 6, EllipseY * 5, EllipseSize);
  drawVerticalEllipse(EllipseX * 7, EllipseY * 5, EllipseSize);
  drawVerticalEllipse(EllipseX * 8, EllipseY * 5, EllipseSize);
  drawVerticalEllipse(EllipseX * 9, EllipseY * 5, EllipseSize);
  drawOtherEllipse(EllipseX * 10, EllipseY * 5, EllipseSize);

  //row6- blank

  //row7
  drawOtherEllipse(EllipseX, EllipseY * 7, EllipseSize);
  drawVerticalEllipse(EllipseX * 2, EllipseY * 7, EllipseSize);
  drawVerticalEllipse(EllipseX * 3, EllipseY * 7, EllipseSize);
  drawVerticalEllipse(EllipseX * 4, EllipseY * 7, EllipseSize);
  drawVerticalEllipse(EllipseX * 5, EllipseY * 7, EllipseSize);
  drawOtherEllipse(EllipseX * 6, EllipseY * 7, EllipseSize);
  drawVerticalEllipse(EllipseX * 7, EllipseY * 7, EllipseSize);
  drawVerticalEllipse(EllipseX * 8, EllipseY * 7, EllipseSize);
  drawVerticalEllipse(EllipseX * 9, EllipseY * 7, EllipseSize);
  drawOtherEllipse(EllipseX * 10, EllipseY * 7, EllipseSize);

  //row8
  drawVerticalEllipse(EllipseX, EllipseY * 8, EllipseSize);
  drawVerticalEllipse(EllipseX * 2, EllipseY * 8, EllipseSize);
  drawOtherEllipse(EllipseX * 3, EllipseY * 8, EllipseSize);
  drawVerticalEllipse(EllipseX * 4, EllipseY * 8, EllipseSize);
  drawVerticalEllipse(EllipseX * 5, EllipseY * 8, EllipseSize);
  drawVerticalEllipse(EllipseX * 6, EllipseY * 8, EllipseSize);
  drawVerticalEllipse(EllipseX * 7, EllipseY * 8, EllipseSize);
  drawOtherEllipse(EllipseX * 8, EllipseY * 8, EllipseSize);
  drawVerticalEllipse(EllipseX * 9, EllipseY * 8, EllipseSize);
  drawVerticalEllipse(EllipseX * 10, EllipseY * 8, EllipseSize);

  //row9
  drawVerticalEllipse(EllipseX, EllipseY * 9, EllipseSize);
  drawVerticalEllipse(EllipseX * 2, EllipseY * 9, EllipseSize);
  drawVerticalEllipse(EllipseX * 3, EllipseY * 9, EllipseSize);
  drawVerticalEllipse(EllipseX * 4, EllipseY * 9, EllipseSize);
  drawVerticalEllipse(EllipseX * 5, EllipseY * 9, EllipseSize);
  drawVerticalEllipse(EllipseX * 6, EllipseY * 9, EllipseSize);
  drawVerticalEllipse(EllipseX * 7, EllipseY * 9, EllipseSize);
  drawVerticalEllipse(EllipseX * 8, EllipseY * 9, EllipseSize);
  drawVerticalEllipse(EllipseX * 9, EllipseY * 9, EllipseSize);
  drawVerticalEllipse(EllipseX * 10, EllipseY * 9, EllipseSize);

  //row10
  drawVerticalEllipse(EllipseX, EllipseY * 10, EllipseSize);
  drawVerticalEllipse(EllipseX * 2, EllipseY * 10, EllipseSize);
  drawVerticalEllipse(EllipseX * 3, EllipseY * 10, EllipseSize);
  drawVerticalEllipse(EllipseX * 4, EllipseY * 10, EllipseSize);
  drawVerticalEllipse(EllipseX * 5, EllipseY * 10, EllipseSize);
  drawVerticalEllipse(EllipseX * 6, EllipseY * 10, EllipseSize);
  drawVerticalEllipse(EllipseX * 7, EllipseY * 10, EllipseSize);
  drawVerticalEllipse(EllipseX * 8, EllipseY * 10, EllipseSize);
  drawVerticalEllipse(EllipseX * 9, EllipseY * 10, EllipseSize);
  drawVerticalEllipse(EllipseX * 10, EllipseY * 10, EllipseSize);

  //row11
  drawVerticalEllipse(EllipseX, EllipseY * 6, EllipseSize);
  drawVerticalEllipse(EllipseX * 2, EllipseY * 6, EllipseSize);
  drawVerticalEllipse(EllipseX * 3, EllipseY * 6, EllipseSize);
  drawVerticalEllipse(EllipseX * 4, EllipseY * 6, EllipseSize);
  drawOtherEllipse(EllipseX * 5, EllipseY * 6, EllipseSize);
  drawOtherEllipse(EllipseX * 6, EllipseY * 6, EllipseSize);
  drawVerticalEllipse(EllipseX * 7, EllipseY * 6, EllipseSize);
  drawVerticalEllipse(EllipseX * 8, EllipseY * 6, EllipseSize);
  drawVerticalEllipse(EllipseX * 9, EllipseY * 6, EllipseSize);
  drawVerticalEllipse(EllipseX * 10, EllipseY * 6, EllipseSize);

  function drawVerticalEllipse(EllipseX, EllipseY, EllipseSize) {
    fill(255);
    noStroke();
    ellipse(EllipseX, EllipseY, vol * 50, vol * 4);
    console.log(vol);
    //look up lerp for smoothness
  }
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mousePressed() {
  started = true;
  userStartAudio();
}
