class SpelElement {
    x;
    y;
    constructor(_x, _y) {
        this.x = _x;
        this.y = _y;
    }
}


class Bal extends SpelElement {
    speedX;
    speedY;
    diameter;
    isSuper;
    constructor(_x, _y, _SpeedX, _SpeedY, _Super) {
        super (_x, _y);
        this.speedX = _SpeedX;
        this.speedY = _SpeedY;
        this.diameter = 50;
        this.isSuper = _Super;
    }

    show() {
        if (this.isSuper === true) {
            fill(255,215,0);
        } else {
            fill(255, 100, 255);
        }

        ellipse(this.x, this.y, this.diameter, this.diameter);
    }//show

    update() {
        this.x = this.x + this.speedX;
        this.y = this.y + this.speedY;
        // ballen omkeren tegen muren
        if (this.x <= 0 + 0.5*this.diameter || this.x >= 1280 - 0.5*this.diameter ) {
            this.speedX = this.speedX * -1;
        }

        if (this.y <= 0 + 0.5*this.diameter || this.y >= 720 - 0.5*this.diameter) {
            this.speedY = this.speedY * -1;
        }
        // ballen omkeren tegen plank
        if (this.x > mouseX - 100 && this.x < mouseX + 100 && this.y > 600 - 0.5*this.diameter && this.y < 625 + 0.5*this.diameter) {
                this.speedY = 0.08 * Math.abs(mouseX-this.x) - 10;
                if (mouseX-this.x > 0){
                    this.speedX = -1 * Math.sqrt(100-(this.speedY*this.speedY));
                }
                if (mouseX-this.x < 0){
                    this.speedX = Math.sqrt(100-(this.speedY*this.speedY));
                }
        }
    }//update 
}//class Bal

class Blok extends SpelElement {
    blokWidth;
    blokHeight;
    blokStatus;
    constructor(_x, _y, _blokWidth, _blockHeight, _blockStatus) {
        super (_x, _y);
        this.blokWidth = _blokWidth;
        this.blokHeight = _blockHeight;
        this.blokStatus = _blockStatus;
    }

    show() {
        fill(255, 0, 0);
        if (this.blokStatus > 0){
            rect(this.x, this.y, this.blokWidth, this.blokHeight);
        }
    }//show

    update() { 
    }//update
}//class Bal

class Plank extends SpelElement {
    plankX;
    plankY;
    plankWidth;
    plankHeight;
    constructor(_x, _y, _plankWidth, _plankHeight) {
        super (_x, _y);
        this.plankWidth = _plankWidth;
        this.plankHeight = _plankHeight;
    }
}


