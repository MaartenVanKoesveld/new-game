var balX = 50;
var balY = 50;
var richtingX = 5;
var richtingY = 5;











/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);


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
  ellipse(balX, balY, 80, 80);
    balX = balX + richtingX;
    balY = balY + richtingY;


  // teken platform
  rect(mouseX - 100, 650, 200, 20);
// omkeren als tegen platform
  if (balY == 650-40 && balX >= mouseX-100 && balX <= mouseX+100) {
      richtingY = richtingY * -1;

  }
// omkeren als tegen zijkant
  if (balX == 0 + 40 || balX == 1280 - 40){
      richtingX = richtingX * -1;
  }
// omkeren als tegen de bovenkant botst
  if (balY == 0 + 40) {
      richtingY = richtingY * -1;
  }




}