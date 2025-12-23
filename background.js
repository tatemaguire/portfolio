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
    dx: 0,
    dy: 0,
    angle: 0,
}

function movePointer(x, y) {
    const newX = Math.floor(x / scale);
    const newY = Math.floor(y / scale);
    pointer.dx = newX - pointer.x;
    pointer.dy = newY - pointer.y;
    pointer.x = newX;
    pointer.y = newY;

    pointer.angle = Math.atan2(pointer.dy, pointer.dx);
}

function drawPointerDebug(ctx) {
    ctx.fillStyle = "blue";
    ctx.fillRect(pointer.x * scale, pointer.y * scale, 5, 5);

    ctx.beginPath();
    ctx.moveTo(pointer.x * scale, pointer.y * scale);
    ctx.lineTo((pointer.x + pointer.dx) * scale, (pointer.y + pointer.dy) * scale);
    ctx.strokeStyle = "red";
    ctx.stroke();
}

globalThis.addEventListener("resize", () => {
    canvas.width = globalThis.innerWidth;
    canvas.height = globalThis.innerHeight;
});

canvas.addEventListener("mousemove", (event) => {
    movePointer(event.clientX, event.clientY);
});

canvas.addEventListener("touchmove", (event) => {
    event.preventDefault();
    const touch = event.touches.item(0);
    movePointer(touch.clientX, touch.clientY);
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

