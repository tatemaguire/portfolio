

const canvas = document.getElementById("background");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext("2d");

ctx.fillStyle = "rgb(79, 67, 89)";
ctx.fillRect(0, 0, canvas.width, canvas.height);

document.addEventListener("resize", () => {
    console.log("RESIZE");
    canvas.width = globalThis.innerWidth;
    canvas.height = globalThis.innerHeight;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
});