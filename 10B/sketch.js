var datos;
var imgAltarpiece;
var imgBacchus;
var imgHilly;
var imglamb;
var imgMadonna;
var imgPompeii;
var imgtribute;
var imgvermilion;
var mouse;
var images = [];
var indexImg = 0;

function preload() {
  datos = loadJSON("assets/Vermilion.json");
  imgvermilion = loadImage("assets/vermilion.png");
  
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
  image(imgvermilion, width/2.2, height/1.45, 200, 200);
}

function draw() {
 //print(mouseX + " " + mouseY);
} 

function mousePressed() {
  if (mouseX < 530 && mouseX > 410 && 
      mouseY > 500 && mouseY < 670 && 
      indexImg < images.length) {
    var _x = random (70, width-270);
    var _y = random (70, height-400);
    var nombre = datos.artworks[indexImg].Name;
    var artist = datos.artworks[indexImg].Artist;
    var technique = datos.artworks[indexImg].Technique;
    var nationality = datos.artworks[indexImg].Nationality;
    var time = datos.artworks[indexImg].Time;
    image(images[indexImg], _x, _y, 200, 200);
    fill(255,255,255);
    text(nombre, _x, _y + 210);
    text(artist, _x, _y + 220);
    text(technique, _x, _y + 230);
    text(nationality, _x, _y + 240);
    text(time, _x, _y + 250);
    
    indexImg++;
  } else {
    clear();
    setup();
    indexImg = 0;
  }
}