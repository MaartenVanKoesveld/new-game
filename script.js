var balX = 600;
var balY = 500;
var richtingX = 1;
var richtingY = 1;
var array = new Array(21);
var array2 = new Array(21);
var array3 = new Array(21);
var array4 = new Array(21);
var array5 = new Array(21);
var blokHoogte = 100;
var balStraal = 15;
var plankX = mouseX;
var px = Math.abs(balX - (mouseX - 100));

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
  for(var i = 0; i < 21; i++){
      array2[i] = 1;
  }
  for(var i = 0; i < 21; i++){
      array3[i] = 1;
  }
  for(var i = 0; i < 21; i++){
      array4[i] = 1;
  }
  for(var i = 0; i < 21; i++){
      array5[i] = 1;
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

  textSize(30);
  text(balX, 50, 100);
  text(balY, 150, 100);
  text(Math.sin(3.14 + (10+px) / 220 * 3.14) * 10, 300, 100);
  text(Math.abs(balX - (mouseX - 100)), 400, 100);

  // stel vulkleur in
  fill(255, 0, 0);

  // teken een cirkel
  ellipse(balX, balY, 2*balStraal, 2*balStraal);
    balX = balX + richtingX;
    balY = balY + richtingY;


  // teken platform
  rect(mouseX - 100, 650, 200, 20);
  // omkeren als tegen platform
  if (balY >= 650 - balStraal && balY <= 670 - balStraal && balX >= mouseX-100 && balX <= mouseX+100) {
      richtingY = Math.sin(3.14 + (10+px) / 220 * 3.14) * 10;
      richtingX = Math.cos(3.14 - (10+px) / 220 * 3.14) * 10;

  }
  // omkeren als tegen zijkant
  if (balX <= 0 + balStraal || balX >= 1280 - balStraal){
      richtingX = richtingX * -1;
  }
  // omkeren als tegen de bovenkant botst
  if (balY <= 0 + balStraal) {
      richtingY = richtingY * -1;
  }
  // blokjes tekenen
  for(var i = 0; i < 21; i++){
      if(array[i] >0){
        rect(1 + 61 * i, blokHoogte, 59, 30);
        var data = array[i];
      }
    }

  for(var i = 0; i < 21; i++){
      if(array2[i] > 0){
        rect(1 + 61 * i, blokHoogte + 30, 59, 30);
        var data = array2[i]; 
      }
    } 

  for(var i = 0; i < 21; i++){
      if(array3[i] > 0){
        rect(1 + 61 * i, blokHoogte + 60, 59, 30);
        var data = array3[i]; 
      }
    } 

  for(var i = 0; i < 21; i++){
      if(array4[i] > 0){
        rect(1 + 61 * i, blokHoogte + 90, 59, 30);
        var data = array4[i]; 
      }
    } 

  for(var i = 0; i < 21; i++){
      if(array5[i] > 0){
        rect(1 + 61 * i, blokHoogte + 120, 59, 30);
        var data = array5[i]; 
      }
    } 


  
  // blokjes kunnen breken 
    if(balX > 0 && balX < 1280 && balY > blokHoogte - balStraal && balY < blokHoogte + 30 + balStraal){
      var arrayX = Math.floor(balX/61);
      var data = array[arrayX];
      if(data > 0){
        array[arrayX] = data - 1;
        richtingY *= -1;
      }
    }

    if(balX > 0 && balX < 1280 && balY > blokHoogte + 30 - balStraal && balY < blokHoogte + 60 + balStraal){
        var arrayX = Math.floor(balX/61);
        var data = array2[arrayX];
        if(data > 0){
            array2[arrayX] = data -1;
            richtingY *= -1;
        }
    } 

    if(balX > 0 && balX < 1280 && balY > blokHoogte + 60 - balStraal && balY < blokHoogte + 90 + balStraal){
        var arrayX = Math.floor(balX/61);
        var data = array3[arrayX];
        if(data > 0){
            array3[arrayX] = data -1;
            richtingY *= -1;
        }
    } 

    if(balX > 0 && balX < 1280 && balY > blokHoogte + 90 - balStraal && balY < blokHoogte + 120 + balStraal){
        var arrayX = Math.floor(balX/61);
        var data = array4[arrayX];
        if(data > 0){
            array4[arrayX] = data -1;
            richtingY *= -1;
        }
    } 

    if(balX > 0 && balX < 1280 && balY > blokHoogte + 120 - balStraal && balY < blokHoogte + 150 + balStraal){
        var arrayX = Math.floor(balX/61);
        var data = array5[arrayX];
        if(data > 0){
            array5[arrayX] = data -1;
            richtingY *= -1;
        }
    } 




}