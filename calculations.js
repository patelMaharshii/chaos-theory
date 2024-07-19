let x, y, z;
let dx, dy, dz, dt;
let o, p, b;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);

  x = 0.01;
  y = 0;
  z = 0;

  o = 10;
  p = 28;
  b = 8 / 3;

  dt = 0.01; //Time 

  this.points = [];
  this.hue = 0;
  colorMode(HSB)

  this.speed = 5e-3;

}

function draw() {
  background(0);

  scale(7);
  noFill();
  strokeWeight(2);

  rotateX(frameCount * this.speed);
  rotateY(frameCount * this.speed);
  rotateZ(frameCount * this.speed);

  this.points.push(createVector(x, y, z));

  beginShape();
  for (let i = 0; i < this.points.length; i++) {
    stroke(this.hue, 255, 255);
    vertex(this.points[i].x, this.points[i].y, this.points[i].z);

  }
  if (this.hue >= 255)
    this.dir = -0.5;

  if (this.hue <= 0)
    this.dir = 0.5;

  this.hue += this.dir;

  endShape();

  dx = (o * (y - x)) * dt;
  dy = (x * (p - z) - y) * dt;
  dz = (x * y - b * z) * dt;


  x += dx;
  y += dy;
  z += dz;


}