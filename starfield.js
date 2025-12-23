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
    draw(ctx, scale) {
        const offset = Math.floor(scale / 2);
        const finalX = (this.x + this.offsetX + this.idleX) * scale;
        const finalY = (this.y + this.offsetY + this.idleY) * scale;

        ctx.fillRect(finalX, finalY, scale, scale);
    }
}

export { Starfield };