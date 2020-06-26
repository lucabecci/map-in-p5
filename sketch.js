var r =  0

function setup() {
  createCanvas(400, 400);
}

function draw() {
  r = map(mouseX,0,400,0,255);
  b = map(mouseX,0,400,255,0);
  background(r, 0, b);
  //ELLIPSE
  fill(r, 100, b);
  ellipse(mouseX,mouseY,64,64);
}