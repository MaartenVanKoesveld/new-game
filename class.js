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
    }
}

class Player extends SpelElement {

    constructor(_x, _y, _w, _h, _gravityAffected) {
        super(_x, _y, _w, _h, _gravityAffected);
    }

    show() {
        fill(127,255,0);
        rect(this.x, this.y, this.w, this.h);
    }

    update() {
        // naar rechts bewegen
        if (keyIsPressed === true && keyCode === 68) {
            this.x = this.x + 5;
        }
        // naar links bewegen
        if (keyIsPressed === true && keyCode === 65) {
            this.x = this.x - 5;
        }
        // springen
        if (keyIsPressed === true && keyCode === 32) {

            this.y = this.y - 5;
        }
        // gravity 
        if (this.gravityAffected === true) {
            this.y = this.y + 2;
        }

    }

}

class Finish extends SpelElement {

}

class Platform extends SpelElement {

}

class Obstakel extends SpelElement {

}

class Collision {

}



