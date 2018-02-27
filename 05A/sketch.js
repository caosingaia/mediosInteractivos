var hora;
var minuto;
var segundo; 
var s;
var m;
var h;

var ellipseX = 120;
var ellipseY = 120;


function setup() { 
  createCanvas(240, 240);
  angleMode (DEGREES);
  
 
} 

function draw() { 
  
  
  
   hora = hour();
  minuto = minute();
  segundo = second ();
  
  background(220, segundo, segundo*3);
  
  translate (120, 120);
  rotate (-90);
  
  
  //MINUTERO
   noFill();
  stroke(0, 100);
  strokeWeight (10);
   m = map (minuto, 0, 60, 0, 359);
  arc(0, 0, 230, 230, 0, m);
  
  //HORA
  fill (329, 15, 90);
  noStroke();
   h = map (hora, 0, 12, 0, 359);
  arc(0, 0, 220, 220, 0, h);
  
  //SEGUNDERO

  noStroke();
fill(segundo*3, segundo, 100);
  ellipse(0, 0, segundo*3, segundo*3); 
  


  
 
  
  
  
}