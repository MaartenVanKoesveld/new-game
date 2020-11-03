class SpelElement {
    x;
    y;
    w;
    h;
    gravityAffected; //boulean
    constructor(_x, _y, _w, _h, _gravityAffected) {
        this.x = _x;
        this.y = _y;
        this.w = _w;
        this.h = _h;
        this.gravityAffected = _gravityAffected;
    }
}

class Game {
    
    run() {
        // Kleur de achtergrond zwart, zodat je het kunt zien
        background("black");

        // player
        player[0].show();
        player[0].update();

        // platforms
        platform[0].show();

        //collision
        collision[0].playerCollision();
    }
}

class Player extends SpelElement {
    speedX; // horizontale snelheid
    constructor(_x, _y, _w, _h, _gravityAffected, _speedX) {
        super(_x, _y, _w, _h, _gravityAffected);
        this.speedX = _speedX;
    }

    show() {
        fill(127,255,0);
        rect(this.x, this.y, this.w, this.h);
    }

    update() {
        // naar rechts bewegen
        if (keyIsPressed === true && keyCode === 68) {
            this.x = this.x + this.speedX;
        }
        // naar links bewegen
        if (keyIsPressed === true && keyCode === 65) {
            this.x = this.x - this.speedX;
        }
        // springen
        if (keyIsPressed === true && keyCode === 32) {
            var i = 0;
            while (i < 7) {
                this.y = this.y - (5 * Math.sin(i));
                i++;
            }
            
        }
        // gravity 
        if (this.gravityAffected === true) {
            this.y = this.y + 5;
        }

    }

}

class Platform extends SpelElement {

    constructor(_x, _y, _w, _h, _gravityAffected) {
        super(_x, _y, _w, _h, _gravityAffected);
    }

    show() {
        fill(130,130,130);
        rect(this.x, this.y, this.w, this.h);
    }
}

class Finish extends SpelElement {

}

class Obstakel extends SpelElement {

}

class Collision {
    playerCollision() {
        if (player[0].y + player[0].h >= platform[0].y && player[0].y + player[0].h <= platform[0].y + platform[0].h
            && player[0].x >= platform[0].x - player[0].w && player[0].x <= platform[0].x + platform[0].w) {
            player[0].gravityAffected = false;
        } else {
            player[0].gravityAffected = true;
        }
    }
}



