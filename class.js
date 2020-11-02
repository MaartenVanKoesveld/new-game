class SpelElement {
    x;
    y;
    w;
    h;
    constructor(_x, _y, _w, _h) {
        this.x = _x;
        this.y = _y;
        this.w = _w;
        this.h = _h;
    }
}

class Game {
    
    run() {
        // Kleur de achtergrond blauw, zodat je het kunt zien
        background("black");
        player[0].show();
        player[0].update();
    }
}

class Player extends SpelElement {

    constructor(_x, _y, _w, _h) {
        super(_x, _y, _w, _h);
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

            this.y = this.y - 3;
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



