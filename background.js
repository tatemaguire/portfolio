let scene;
let ballColor;
let gravity = 0.15;

function setup() {
    const background = document.getElementById("background");
    createCanvas(windowWidth, windowHeight-0.5, background);
    
    ballColor = color("rgb(79, 67, 89)");

    scene = new Scene(windowWidth, windowHeight);
    scene.spawnBalls(10, 25);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight-0.5);
    scene.width = windowWidth;
    scene.height = windowHeight;
}

function draw() {
    background("#9d8ea9ff");
    scene.update();
    scene.draw();
}

class Scene {
    constructor(width, height) {
        this.width = width;
        this.height = height;

        this.children = [];
    }
    spawnBalls(num, rad) {
        const dx = this.width / (num+1);
        for (let i=1; i<num+1; i++) {
            const b = new Ball(this, dx*i, 40, rad);
            this.children.push(b);
        }
    }
    update() {
        for (const obj of this.children) {
            obj.update();
        }
    }
    draw() {
        for (const obj of this.children) {
            obj.draw();
        }
    }
}

class Ball {
    constructor(scene, x, y, rad) {
        this.scene = scene;
        this.x = x;
        this.y = y;
        this.rad = rad;

        this.vx = 0;
        this.vy = 0.4;
    }
    update() {
        this.vy += gravity;

        this.x += this.vx;
        this.y += this.vy;

        if (this.y + this.rad > this.scene.height) {
            this.y = this.scene.height - this.rad;
            this.vy = -this.vy * 0.9;
        }
    }
    draw() {
        fill(ballColor);
        noStroke();
        circle(this.x, this.y, this.rad*2);
    }
}