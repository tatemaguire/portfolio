function setup() {
    const background = document.getElementById("background");
    createCanvas(windowWidth, windowHeight-0.5, background);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight-0.5);
}

function draw() {
    background(220);
    //circle in the center with a width of 100
    circle(100,100,100);
}