var miSonido1;
var miSonido2;
var amp;
var nivel;
var volhistory = [];

function preload(){
  miSonido1=loadSound('Lucas_Pern_-_14_-_Ritual-2.mp3');
    miSonido2=loadSound('James_Kibbie_-_01_-_Anh_200__Anh_I_21_O_Traurigkeit_O_Herzeleid.mp3'); 
  
}


function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
  
   miSonido1.loop();
   miSonido2.loop();
  
  amp = new p5.Amplitude();
  
  
}

function draw() {
 
 
   background(mouseX, mouseY, 255);
  //División de pantalla en dos sonidos con volumen
   miSonido2.setVolume(map(mouseX, 350, 0, 0.0, 1.0));
   miSonido1.setVolume(map(mouseX, 0, 100, 0.0, 0.1));
  
  
  
 miSonido1.rate(map(mouseY, 400, 0, 0, 1.5));
  
   var nivel = amp.getLevel();
  volhistory.push(nivel);
  
 
  
  //MONTAÑAS
  
    beginShape();
  
  for (var i = 0; i< volhistory.length; i++){
    var y = map(volhistory [i], 0, 0.2, height, 0);
   
   vertex (i, y); 
}
  
  endShape();
  
  if (volhistory.length > width) {
  volhistory.splice(0, 1);
  }
  
   //SOL
  
  
  stroke(255);
    strokeWeight(1);
   // noFill();
  
  push();
  
  translate (height/2, width/4.5);
    beginShape();
  
  for (var i = 0; i< 360; i++){
    var r = map(volhistory [i], 0, 0.2, 10, 100);
    var x = r * cos(i);
    var y = r * sin (i);
   
   vertex (x, y); 
}
  
  endShape();
  
  
  
  
  pop();
  
  }