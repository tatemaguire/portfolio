const INTERACTION_RADIUS = 15;

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
        // this.stars.push(new Star(20, 20));
    }
    update(pointer) {
        for (const star of this.stars) {
            star.updateOffset(pointer);
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
    updateOffset(pointer) {
        const d = dist(this, pointer);
        if (d < INTERACTION_RADIUS) {
            let dscale = clamp((INTERACTION_RADIUS - d) / (INTERACTION_RADIUS) * 0.5, 0, 1);
            const angle = Math.atan2(this.y - pointer.y, this.x - pointer.x);
            this.offsetX = 10 * dscale * Math.cos(angle);
            this.offsetY = 10 * dscale * Math.sin(angle);
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

function clamp(x, min, max) {
    return Math.min(Math.max(x, min), max);
}

export { Starfield };