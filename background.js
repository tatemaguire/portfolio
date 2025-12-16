function setup() {
    const background = document.getElementById("background");
    createCanvas(windowWidth, windowHeight-0.5, background);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight-0.5);
}

function draw() {
    background("#9d8ea9ff");
}