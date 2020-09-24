


class Bal {
   constructor(myX, myY, mySpeedX, mySpeedY, mySuper) {
      this.x = myX;
      this.y = myY;
      this.speedX = mySpeedX;
      this.speedY = mySpeedY;
      this.diameter = 50;
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

class Blok {
    constructor(myBlokX, myBlokY, myBlokWidth, myBlockHeight, myBlockStatus) {
    this.blokX = myBlokX;
    this.blokY = myBlokY;
    this.blokWidth = myBlokWidth;
    this.blokHeight = myBlockHeight;
    this.blokStatus = myBlockStatus;
    }

    show() {
        fill(255, 0, 0);
        if (this.blokStatus > 0){
            rect(this.blokX, this.blokY, this.blokWidth, this.blokHeight);
        }
    }//show

    update() {
        //bal omkeren als tegen blokjes en interacties
        
      
        
    }//update

}//class Bal

var ballen = [new Bal(50, 400, 5, 5, false)];
var blokken = [];  
for (var j = 0; j < 4; j++) {
    for (var i = 0; i < 10; i++) {
        blokken.push(new Blok(128*i, 50 + 25*j , 128, 25, 1));
    }
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
  // ga alle blokken af
  for (var i = 0; i < blokken.length; i++) {
      var blok = blokken[i];
      blok.show();
      blok.update();
  }
  
  // omkeren tegen blokjes
  for(var i = 0; i < ballen.length; i++){
    if (ballen[i].x > 0 && ballen[i].x < 1280 && ballen[i].y > blokken[0].blokY && ballen[i].y < blokken[blokken.length-1].blokY + 25 && blokken[Math.floor(ballen[i].x/128) + 10 * Math.floor((ballen[i].y-50)/25)].blokStatus === 1){
        blokken[Math.floor(ballen[i].x/128) + 10 * Math.floor((ballen[i].y-50)/25)].blokStatus = 0; 
        ballen[i].speedY = ballen[i].speedY * -1;   
    }
  }
  

  //teken platform
  fill(255, 0, 0);
  rect(mouseX - 100, 600, 200, 25);

}//draw