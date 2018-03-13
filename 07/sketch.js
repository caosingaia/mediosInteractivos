var taller;
var escultura;
var escultura2;
var escultura3;
var leon;
var borrador;
var bajar;
var patrones;
var cara;
var virgen;
var cuadrados;
var caballos;

//BOTONES IMÁGENES

var boton1x= 70;
var boton1y= 50;
var boton1tamx= 156;
var boton1tamy= 96.5;

var boton2x= 70;
var boton2y= 166.5;
var boton2tamx= 156;
var boton2tamy= 96.5;

var boton3x= 70;
var boton3y= 283;
var boton3tamx= 156;
var boton3tamy= 96.5;

var boton4x= 70;
var boton4y= 399.5;
var boton4tamx= 156;
var boton4tamy= 96.5;

var boton5x= 70;
var boton5y= 516;
var boton5tamx= 156;
var boton5tamy= 96.5;


//BOTONES HERRAMIENTAS

var boton6x = 470;
var boton6y= 45;
var boton6tamx= 100;
var boton6tamy= 70;

var boton7x = 600;
var boton7y= 45;
var boton7tamx= 100;
var boton7tamy= 70;

var boton8x = 730;
var boton8y= 45;
var boton8tamx= 100;
var boton8tamy= 70;

var boton9x = 860;
var boton9y= 45;
var boton9tamx= 100;
var boton9tamy= 70;

var boton0x = 990;
var boton0y= 45;
var boton0tamx= 100;
var boton0tamy= 70;



var herramienta=0;


function preload(){
 
   taller = loadImage('assets/taller.jpg');
 escultura = loadImage('assets/escultura.jpg');
  escultura2 = loadImage('assets/escultura2.jpg');
 escultura3 = loadImage('assets/escultura3.jpg');
 leon = loadImage('assets/leon.jpg');
 borrador = loadImage('assets/borrador.png');
  bajar = loadImage('assets/bajar.png');
  patrones = loadImage('assets/patrones.png');
  cara = loadImage('assets/cara.png');
  virgen = loadImage('assets/virgen.png');
  cuadrados = loadImage('assets/cuadrados.png');
   caballos = loadImage('assets/caballos.png');
}

function setup() {

    createCanvas(windowWidth, windowHeight);
   background(210, 214, 199);
 

  
}

function draw() {
  
  
   noStroke();
    fill(160, 191, 155); // cuadro de fotos
  rect(50, 30, 200, 600);
  
   fill(160, 191, 155); // cuadro de herramientas
  rect((width/2)-250, 30, 694, 100);
  
  // BOTONES IMÁGENES
  
  image(taller, boton1x, boton1y, boton1tamx, boton1tamy);
  image(escultura, boton2x, boton2y, boton2tamx, boton2tamy);
  image(escultura2, boton3x, boton3y, boton3tamx, boton3tamy);
  image(escultura3, boton4x, boton4y, boton4tamx, boton4tamy);
  image(leon, boton5x, boton5y, boton5tamx, boton5tamy);
  
  
  //BOTONES HERRAMIENTAS
  
  fill(123, 134, 115);
  rect(boton6x, boton6y, boton6tamx, boton6tamy);
  image(caballos, boton6x+9, boton6y,  84, 70);
  
  
  fill(123, 134, 115);
  rect(boton7x, boton7y, boton7tamx, boton7tamy);
     image(virgen, boton7x+9, boton7y,  84, 70);
  
  
  fill(123, 134, 115);
  rect(boton8x, boton8y, boton8tamx, boton8tamy);
   image(cara, boton8x+8, boton8y,  84, 70);
  
  fill(123, 134, 115);
  rect(boton9x, boton9y, boton9tamx, boton9tamy);
  image(borrador, boton9x+22, boton9y+14, 59, 41.88);
  
  
  fill(123, 134, 115);
  rect(boton0x, boton0y, boton0tamx, boton0tamy);
   image(bajar, boton0x+30, boton0y+15, 45, 45);
  
  
  
      //FIJAR HERRAMIENTAS
  
   if (mouseIsPressed) {
     
    if (mouseX > boton1x && mouseX < boton1x + boton1tamx && 
        mouseY > boton1y && mouseY < boton1y + boton1tamy){
      herramienta = 0;
    }
     
     
    if (mouseX > boton2x && mouseX < boton2x + boton2tamx && 
        mouseY > boton2y && mouseY < boton2y + boton2tamy){
      herramienta = 1;
    }
        
         
     
    if (mouseX > boton3x && mouseX < boton3x + boton3tamx && 
        mouseY > boton3y && mouseY < boton3y + boton3tamy){
      herramienta = 2;
    }
     
     if (mouseX > boton4x && mouseX < boton4x + boton4tamx && 
        mouseY > boton4y && mouseY < boton4y + boton4tamy){
      herramienta = 3;
    }
     
     if (mouseX > boton5x && mouseX < boton5x + boton5tamx && 
        mouseY > boton5y && mouseY < boton5y + boton5tamy){
      herramienta = 4;
    }
     
     
     if (mouseX > boton6x && mouseX < boton6x + boton6tamx && 
        mouseY > boton6y && mouseY < boton6y + boton6tamy){
      herramienta = 5;
    }
     
     if (mouseX > boton7x && mouseX < boton7x + boton7tamx && 
        mouseY > boton7y && mouseY < boton7y + boton7tamy){
      herramienta = 6;
    }
     
     
     if (mouseX > boton8x && mouseX < boton8x + boton8tamx && 
        mouseY > boton8y && mouseY < boton8y + boton8tamy){
      herramienta = 7;
    }
     
     
     
     
     if (mouseX > boton9x && mouseX < boton9x + boton9tamx && 
        mouseY > boton9y && mouseY < boton9y + boton9tamy){
      herramienta = 8;
    }
     
     if (mouseX > boton0x && mouseX < boton0x + boton0tamx && 
        mouseY > boton0y && mouseY < boton0y + boton0tamy){
      herramienta = 9;
    }
     
        
      // INICIO DEFINICIÓN FUNCIONES BOTONES
     
  if (herramienta == 0){

   image(taller, (width/2)-250, 170, 694, 456);
    
  }
        
        if (herramienta == 1){

   image(escultura, (width/2)-250, 170, 694, 456);
    
  }
     
       if (herramienta == 2){

   image(escultura2, (width/2)-250, 170, 694, 456);
    
  }
     
     if (herramienta == 3){

   image(escultura3, (width/2)-250, 170, 694, 456);
    
  }
     
      if (herramienta == 4){

   image(leon, (width/2)-250, 170, 694, 456);
    
  }
     
         if (herramienta == 5){

   push();
           tint(40, 37, 26, 40);
           image(cuadrados, (width/2)-250, 170, 694, 456);
           pop();
           
           
  }
     
     
     if (herramienta == 6){

       filter(DILATE);
     }
     
     
     
     
     if (herramienta == 7){

       
       push();
       filter(THRESHOLD);
        image(patrones, (width/2)-250, 170, 694, 456, 230);
       pop();
      
       
  }
     
       if (herramienta == 8){

          noStroke();
         fill(210, 214, 199);
        ellipse (mouseX-5, mouseY-5, 30, 30);
         
      
         
  }
     
       if (herramienta == 9){
         
   push();
      save('Intervencion.jpg')
         pop();
  }
     
     
  } 
     
  
 }  