class Particle {
    
    constructor(x, y, velX, velY, hue) {
        this.x = x;
        this.y = y;
        this.velX = velX;
        this.velY = velY;
        this.hue = hue;
    }

    move() {
        if (this.y >= floor) {
            this.y = floor;
            this.velY *= -0.95;  
        }

        this.x += this.velX;
        this.y += this.velY;

        if (this.y < floor) {
            this.velY += gravity;
        }

        this.velX *= (1 - dragFactor);
        this.velY *= (1 - dragFactor);
    }

    isInRectangle(x, y, width, height) {
        return this.x >= x &&
            this.y >= y &&
            this.x <= (x+width) &&
            this.y <= (y+height);
    }
}