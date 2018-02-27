var segundo2= 0;
dir = 1;

//BOTON 1 PLAY
var boton1X=15;
var boton1Y=100;
var boton1tamx=30;
var boton1tamy=20;

//BOTON 1 STOP
var boton11X=55;
var boton11Y=100;
var boton11tamx=30;
var boton11tamy=20;

//BOTON 2 PLAY

var boton2X=15;
var boton2Y=130;
var boton2tamx=30;
var boton2tamy=20;

//BOTON 2 STOP

var boton22X=55;
var boton22Y=130;
var boton22tamx=30;
var boton22tamy=20;



var segundo;
var minuto;
var hora;

var song1;
var song2;

var herramienta = 0;

function preload() {
  
    song1 = loadSound ('https://ia801204.us.archive.org/30/items/RelaxingSong1-77/Khachaturian%20Nocturne.mp3'); 
    song2 = loadSound ('https://ia801908.us.archive.org/30/items/AccNoir20071028/AccNoir-2007-10-28.mp3');
}


function setup() { 
  createCanvas(100, 170);
  
  limite1 = 30;
  limite2 = 60;

} 

function draw() { 
   segundo = second();
 
  
  background(30, segundo+20, 100);
  
 
  
         //SEGUNDERO
 //fill(segundo+4, 60, segundo+2);
 //ellipse (50, 50, segundo, segundo);
 
    
    
  
  
  
  
  
 
  
  //BOTON 1 PLAY
  
  noStroke();
  fill(0, 157, 113);
  rect(boton1X, boton1Y, boton1tamx, boton1tamy);
  
  
  fill(2, 99, 100);
  beginShape ();
  vertex (boton1X+10, boton1Y+5);
  vertex (boton1X+20, boton1Y+10);
  vertex (boton1X+10, boton1Y+15);
  endShape (CLOSE);
 
 
  
  //BOTON 1 STOP
  
  noStroke();
  fill(194, 8, 9);
  rect(boton11X, boton11Y, boton11tamx, boton11tamy);
  fill(138, 8, 8);
  rect(boton11X+10, boton11Y+5, boton11tamx-20, boton11tamy-10);

  
   //BOTON 2 PLAY
  noStroke();
  fill(2, 99, 100);
  rect(boton2X, boton2Y, boton2tamx, boton2tamy);
  
   fill(0, 157, 113);
  beginShape ();
  vertex (boton2X+10, boton2Y+5);
  vertex (boton2X+20, boton2Y+10);
  vertex (boton2X+10, boton2Y+15);
  endShape (CLOSE);
  
   //BOTON 2 STOP
  noStroke();
  fill(138, 8, 8);
  rect(boton22X, boton22Y, boton22tamx, boton22tamy);
   fill(194, 8, 9);
  rect(boton22X+10, boton22Y+5, boton22tamx-20, boton22tamy-10);

  
  
  //DEFINICION DE AREA BOTONES
  
  if(mouseIsPressed){
    
    //BOTON 1 PLAY
    
    if(mouseX > boton1X && mouseX < boton1X + boton1tamx &&
       mouseY > boton1Y && mouseY < boton1Y + boton1tamy){
      herramienta = 0;
  }
    
    
  
     if(herramienta == 0){
        song1.play () 
 
       //TIEMPO DESPACIO
       
       
        noStroke();
  fill(20, 50, 60);
 ellipse (50, 50, segundo2, segundo2);
        }
  if(segundo2<=limite2){
    segundo2 = segundo2+0.3*dir;
  }
 

   if(segundo2 >= 60){
    segundo2 = 0;
  }
    

    
    //BOTON 1 STOP
        
    if(mouseX > boton11X && mouseX < boton11X + boton11tamx &&
       mouseY > boton11Y && mouseY < boton11Y + boton11tamy){
      herramienta = 1;
  }
    
    if(herramienta == 1){
      song1.stop ();
    }
    
    
   //BOTON 2 PLAY 
    
    if(mouseX > boton2X && mouseX < boton2X + boton2tamx &&
       mouseY > boton2Y && mouseY < boton2Y + boton2tamy){
      herramienta = 2;
  }
    
    if(herramienta == 2){
      song2.play ();
    
      //TIEMPO RÁPIDO
      
    noStroke();
  fill(20, 50, 60);
 ellipse (50, 50, segundo2, segundo2);
        }
  if(segundo2<=limite2){
    segundo2 = segundo2+3*dir;
  }
 

   if(segundo2 >= 60){
    segundo2 = 0;
  }
    
    
    
    
    
  
      //BOTON 2 STOP 
    
    if(mouseX > boton22X && mouseX < boton22X + boton22tamx &&
       mouseY > boton22Y && mouseY < boton22Y + boton22tamy){
      herramienta = 3;
  }
    
    if(herramienta == 3){
      song2.stop ();
    }
   
}
  

    
 }
