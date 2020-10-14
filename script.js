


var ballen = [new Bal(50, 400, 5, 5, false),
              new Bal(600, 200, -5, 3, true)];

var blokken = [];  
for (var j = 0; j < 4; j++) {
    for (var i = 0; i < 10; i++) {
        blokken.push(new Blok(128*i, 50 + 25*j , 128, 25, 1));
    }
}  

function run() {
  // ga alle ballen af
  for (var i = 0; i < ballen.length; i++) {
    var bal = ballen[i];
    bal.show();
    bal.update();
    if (ballen[i].x > 0 
        && ballen[i].x < 1280 
        && ballen[i].y > blokken[0].y 
        && ballen[i].y < blokken[blokken.length-1].y + 25 && blokken[Math.floor(ballen[i].x/128) + 10 * Math.floor((ballen[i].y-50)/25)].blokStatus === 1) {
            
            blokken[Math.floor(ballen[i].x/128) + 10 * Math.floor((ballen[i].y-50)/25)].blokStatus = 0;
            if (ballen[i].isSuper === false) {
                ballen[i].speedY = ballen[i].speedY * -1;   
            }
    }
}
  // ga alle blokken af
  for (var i = 0; i < blokken.length; i++) {
      var blok = blokken[i];
      blok.show();
      blok.update();
  }
}

function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);
}
 

function draw() {
  // Kleur de achtergrond blauw, zodat je het kunt zien
  background('blue');
  run();

  //teken platform
  fill(255, 0, 0);
  rect(mouseX - 100, 600, 200, 25);

}//draw