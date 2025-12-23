class Starfield {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.stars = [];
        
        // Spawn Stars
        for (let i = 0; i < width; i++) {
            for (let j = 0; j < height; j++) {
                if (Math.random() < 0.01) {
                    const star = new Star(i, j);
                    this.stars.push(star);
                }
            }
        }
    }
    update(pointer) {
        for (const star of this.stars) {
            star.update(pointer);
        }
    }
    draw(ctx, scale) {
        ctx.fillStyle = "white";
        for (const star of this.stars) {
            star.draw(ctx, scale);
        }
    }
}

class Star {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.offsetX = 0;
        this.offsetY = 0;
        this.idleX = 0;
        this.idleY = 0;
    }
    update(pointer) {
        if (dist(this, pointer) < 10) {
            this.offsetX = 2;
            this.offsetY = 2;
        } else {
            this.offsetX = 0;
            this.offsetY = 0;
        }
    }
    draw(ctx, scale) {
        const finalX = (this.x + this.offsetX + this.idleX) * scale;
        const finalY = (this.y + this.offsetY + this.idleY) * scale;

        ctx.fillRect(finalX, finalY, scale, scale);
    }
}

function dist(p, q) {
    return Math.sqrt(Math.pow(p.x - q.x, 2) + Math.pow(p.y - q.y, 2));
}

export { Starfield };