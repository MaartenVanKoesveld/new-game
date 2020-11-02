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



