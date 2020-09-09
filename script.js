var balX = 200;
var balY = 200;
var richtingX = 5;
var richtingY = 5;
var array = new Array(15);


/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);
  // array maken voor blokjes
  for(var i = 0; i < 21; i++){
    array[i] = 1;
  } 
}


/**
 * draw
 * de code in deze functie wordt meerdere keren per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  // Kleur de achtergrond blauw, zodat je het kunt zien
  background('blue');

  // stel vulkleur in
  fill(255, 0, 0);

  // teken een cirkel
  ellipse(balX, balY, 30, 30);
    balX = balX + richtingX;
    balY = balY + richtingY;


  // teken platform
  rect(mouseX - 100, 650, 200, 20);
  // omkeren als tegen platform
  if (balY == 650-15 && balX >= mouseX-100 && balX <= mouseX+100) {
      richtingY = richtingY * -1;

  }
  // omkeren als tegen zijkant
  if (balX == 0 + 15 || balX == 1280 - 15){
      richtingX = richtingX * -1;
  }
  // omkeren als tegen de bovenkant botst
  if (balY == 0 + 15) {
      richtingY = richtingY * -1;
  }
  // blokjes tekenen
  for(var i = 0; i < 21; i++){
      if(array[i] >0){
        rect(1 + 61*i,1,59,30);
        var data = array[i];
      } 
  }
  // blokjes kunnen breken
    if(balX > 0 && balX < 1280 && balY > 1 + 15 && balY < 30 + 15){
      var arrayX = Math.floor(balX/61);
      var data = array[arrayX];
      if(data > 0){
        array[arrayX] = data - 1;
        richtingY *= -1;
        
      }
    }




}