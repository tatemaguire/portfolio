

const canvas = document.getElementById("background");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");

drawBackground
function drawBackground() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

globalThis.addEventListener("resize", () => {
    canvas.width = globalThis.innerWidth;
    canvas.height = globalThis.innerHeight;
    drawBackground();
});

function draw(timestamp) {
    drawBackground();
    requestAnimationFrame(draw);
}

requestAnimationFrame(draw);