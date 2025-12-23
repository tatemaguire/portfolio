import { Starfield } from "./starfield.js";

const canvas = document.getElementById("background");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");

let starfield = new Starfield(500, 500);
let scale = 4;

let pointer = {
    x: 0,
    y: 0,
}

globalThis.addEventListener("resize", () => {
    canvas.width = globalThis.innerWidth;
    canvas.height = globalThis.innerHeight;
});

canvas.addEventListener("mousemove", (event) => {
    pointer.x = Math.floor(event.clientX / scale);
    pointer.y = Math.floor(event.clientY / scale);
});

canvas.addEventListener("mouseleave", () => {
    pointer.x = -100;
    pointer.y = -100;
});

function drawBackground() {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function draw(timestamp) {
    drawBackground();

    starfield.update(pointer);
    starfield.draw(ctx, scale);
    requestAnimationFrame(draw);
}
requestAnimationFrame(draw);

