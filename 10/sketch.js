var datos;
var imgAltarpiece;
var imgBacchus;
var imgHilly;
var imglamb;
var imgMadonna;
var imgPompeii;
var imgtribute;
var images = [];

function preload() {
  datos = loadJSON("assets/Vermilion.json");
  
  images[1] = loadImage("assets/Altarpiece.png");
  images[2] = loadImage("assets/Bacchus.jpg");
  images[4] = loadImage("assets/Hilly.jpg");
  images[6] = loadImage("assets/lamb.jpg");
  images[5] = loadImage("assets/Pompeii.png");
  images[3] = loadImage("assets/Madonna.png");
  images[0] = loadImage("assets/tribute.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255,0,0);
  var cuantos = datos.number;
  print("cuantos "+cuantos);
  for (var i = 0; i < cuantos; i = i + 1){
    print(""+datos.number);
    print(""+datos.artworks[i].Image);
    var _x = random(0, width);
    var _y = random(0, height);
    var nombre = datos.artworks[i].Name;
    image(images[i], _x, _y, 200, 200);
    fill(255,255,255);
    text(nombre, _x, _y);
  }
}



function draw() {
 
} 