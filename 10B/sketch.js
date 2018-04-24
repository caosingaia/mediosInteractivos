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

} 

function mousePressed() {
  if (mouseX < (width/2.2)+200 && mouseX > (width/2.2) && 
      mouseY > (height/1.45)  && mouseY < (height/1.45)+200  && 
      indexImg < images.length) {
      
    var _x = random (70, width-270);
    var _y = random (70, height-400);
    var nombre = datos.artworks[indexImg].Name;
    var artist = datos.artworks[indexImg].Artist;
    var technique = datos.artworks[indexImg].Technique;
    var nationality = datos.artworks[indexImg].Nationality;
    var time = datos.artworks[indexImg].Time;
    image(images[indexImg], _x, _y, 200, 200);

        
    noStroke();
    fill(160, 160, 160);
    rect(_x, _y+200, 200, 100);
    fill(0);
    text(nombre, _x+10, _y + 220);
    text(artist, _x+10, _y + 235);
    text(technique, _x+10, _y + 250);
    text(nationality, _x+10, _y + 265);
    text(time, _x+10, _y + 280);
    
    indexImg++;
  } else {
    clear();
    setup();
    indexImg = 0;
  }
}