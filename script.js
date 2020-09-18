class Bal {
   constructor(myX, myY, mySpeedX, mySpeedY, mySuper) {
      this.x = myX;
      this.y = myY;
      this.speedX = mySpeedX;
      this.speedY = mySpeedY;
      this.diameter = 80;
      this.isSuper = mySuper;
   }




   show() {
      if (this.isSuper === true) {
         fill(255, 0, 0);
      }
      else {
         fill(255, 100, 255);
      }
      
      ellipse(this.x, this.y, this.diameter, this.diameter);
   }

   update() {
      this.x = this.x + this.speedX;
      this.y = this.y + this.speedY;

      if (this.x <= 0 || this.x >= 1280 ) {
         this.speedX = this.speedX * -1;
      }

      if (this.y <= 0 || this.y >= 720) {
         this.speedY = this.speedY * -1;
      }

      if (this.x > 0 && this.x < 1280 && this.y > 50 && this.y < 75) {
            var welkBlok = Math.floor(this.x/128);
            var data = blokken[welkBlok];
            if (data > 0) {
                blokken[welkBlok] = data - 1;
                this.speedY = this.speedY * -1;
            }
      }
   }
}

class Blok {
    constructor(myBlokX, myBlokY, myBlokWidth, myBlockHeight) {
    this.blokX = myBlokX;
    this.blokY = myBlokY;
    this.blokWidth = myBlokWidth;
    this.blokHeight = myBlockHeight;
    }

    show() {
        rect(this.blokX, this.blokY, this.blokWidth, this.blokHeight);
    }

    update() {
        if (this.x > 0 && this.x < 1280 && this.y > 50 && this.y < 75) {
            this.speedY = this.speedY * -1;
        }
    }

}


var ballen = [new Bal(50, 100, 6, 3, false),
              new Bal(300, 150, 5, 7, true)];


var blokken = [];   
for (var i = 0; i < 10; i++) {
    blokken.push(
        new Blok(128*i, 50, 128, 25)
    );
    var data = blokken[i];
}




function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);
}
 



function draw() {
  // Kleur de achtergrond blauw, zodat je het kunt zien
  background('blue');
  
  // ga alle ballen af
  for (var i = 0; i < ballen.length; i++) {
    var bal = ballen[i];
    bal.show();
    bal.update();
  }

  for (var i = 0; i < blokken.length; i++) {
      var blok = blokken[i];
      blok.show();
      blok.update();
  }
  
}