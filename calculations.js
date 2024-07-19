let x, y, z;
let dx, dy, dz;
let o, p, b;

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);

    x = 0;
    y = 0;
    z = 0;

    o = 10;
    p = 28;
    b = 8/3;

    dt = 0.01;
    background(0);
}

function draw() {

    stroke(255);
    scale(5);
    point(x, y, z);

    dx = (o * (y - x)) * dt;
    dy = (x * (p - z) - y) * dt;
    dz = (x * y - b * z) * dt;

    x += dx;
    y += dy;
    z += dz;

}