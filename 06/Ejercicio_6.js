
var mx = 0.0;
var solY = -300;
var solX = -600;
var nubeX=-800;
var nubeY= -200;

var nubeX1=-700;
var nubeY1= -100;

var nieve =-300;
var color = 197; 
var trans = 255;

var dir1= 1; //sol
var dir2= 1; // nieve

function setup() {
 createCanvas(1200, 600, WEBGL);
 normalMaterial();
}

function draw() {
  background(197-(mx/20), 223-(mx/20), 240-(mx/20)); 
  stroke (0);
  strokeWeight (1.5);
  
  // scale(0.5); Cambiarle tamaño a toda la figura
translate(0, 0); 

 
  
//PRADO
push();
  translate(0, 100, 0);
  rotateX(PI/2);
  fill(119- (mx/10), 221- (mx/10), 119- (mx/10));
  plane(width, 400);
  pop();
 
//TIERRA
  push();
  translate(0, 300, 0);
  rotateX(PI);
  fill(128-(mx/20), 64-(mx/20), 0-(mx/20));
  plane(width, 300);
  pop();
  
  
  
  
  
  //ÁRBOL
  push(); //para independizar condiciones de cada objeto 3d que cree
  translate(-368, 0, 40);
  rotateZ(PI);
  fill(86, 130, 3);
  cone(50-mx/24, 80-mx/24); 
  
  translate(-13,30, 20)
  fill(0-(mx/20), 128-(mx/20), 3-(mx/20));
  cone(40-mx/30, 70-mx/30); 
  
  translate(-30,30, 40)
  fill(86, 130, 3);
  cone(25-mx/48, 50-mx/48); 
  pop ();
  
  push();
  translate(-400, 0, 0);//tronco
  fill(128-(mx/20), 64-(mx/20), 0-(mx/20));
  cylinder(10, 150); 
  pop();
  
   push();
    translate(-408, -40, -10);//rama1
    rotateZ(PI/2);
  fill(128-(mx/20), 64-(mx/20), 0-(mx/20));
  cylinder(4, 40);
  pop();
  
  push();
    translate(-400, -15, 0);//rama2
    rotateZ(PI/2);
  fill(128-(mx/20), 64-(mx/20), 0-(mx/20));
  cylinder(5, 60);
  pop();
  
  
  push();
  translate(-385, 15, 20);//rama3
  rotateZ(PI/2);
  fill(128-(mx/20), 64-(mx/20), 0-(mx/20));
  cylinder(6, 75);
  pop();
  
     //MONTAÑA 1
  
  push(); 
  
   translate(-600,-100, -80)
    rotateZ(PI);
    fill(20 - (mx/10), 62- (mx/30), 35);
  cone (200, 450); 
  
  pop();
  
   //NIEVE 1
  
  push(); 
  
   translate(-520, -233)
    rotateZ(PI);
    fill(240, 237, 228, mx/1.5+nieve);
  cone (50, 100); 
  pop();
  
  //MONTAÑA 2
  
  push(); 
  
   translate(-400,-100, -300)
    rotateZ(PI);
    fill(40 - (mx/10), 72- (mx/30), 55);
  cone (200, 450); 
  
  pop();
  
  //NIEVE 2
  
  push(); 
  
   translate(-255, -150)
   rotateZ(PI);
    fill(231, 224, 195, mx/1.5+nieve);
  cone (55, 120); 
  
 pop();
  
  
  
  //FLOR
  push();
  translate(350, 70, 0);
  
  fill(236, 0, 152, 255-mx/2);
  cone(10-mx/100, 15-mx/100); 
  
  translate(25, 0, 0);
  fill(235, 91, 103, 255-mx/2);
  cone(10-mx/100, 15-mx/100); 
  
   translate(25, 0, 0);
  fill(236, 0, 152, 255-mx/2);
  cone(10-mx/100, 15-mx/100); 
  
  pop ();
  
   //FLOR -1
  push();
  translate(300, 70, 0);
  
  fill(236, 0, 152, 255-mx/2);
  cone(10-mx/100, 15-mx/100); 
  
  translate(25, 0, 0);
  fill(235, 91, 103, 255-mx/2);
  cone(10-mx/100, 15-mx/100); 
  
   translate(25, 0, 0);
  fill(236, 0, 152, 255-mx/2);
  cone(10-mx/100, 15-mx/100); 
  
  pop ();
  
   //FLOR -11
  push();
  translate(230, 70, 0);
  
  fill(236, 0, 152, 255-mx/2);
  cone(10-mx/100, 15-mx/100); 
  
  translate(25, 0, 0);
  fill(235, 91, 103, 255-mx/2);
  cone(10-mx/100, 15-mx/100); 
  
   translate(25, 0, 0);
  fill(236, 0, 152, 255-mx/2);
  cone(10-mx/100, 15-mx/100); 
  
  pop ();
   
  //FLOR 2
  push();
  translate(320, 90, 0);
  
  fill(235, 91, 103, 255-mx/2);
  cone(10-mx/100, 15-mx/100); 
  
  translate(25, 0, 0);
  fill(236, 0, 152, 255-mx/2);
  cone(10-mx/100, 15-mx/100); 
  
   translate(25, 0, 0);
  fill(235, 91, 103, 255-mx/2);
  cone(10-mx/100, 15-mx/100); 
  
  pop ();
  //FLOR -2
  push();
  translate(270, 90, 0);
  
  fill(235, 91, 103, 255-mx/2);
  cone(10-mx/100, 15-mx/100); 
  
  translate(25, 0, 0);
  fill(236, 0, 152, 255-mx/2);
  cone(10-mx/100, 15-mx/100); 
  
   translate(25, 0, 0);
  fill(235, 91, 103, 255-mx/2);
  cone(10-mx/100, 15-mx/100); 
  
  pop ();
  
   
   //NIEVE PISO CENTRO
  push();
  translate(40, 70, 0);
  
  fill(200);
  cone(1-mx/24, 2-mx/24);
  
   translate(40, 0, 30);
  fill(231, 224, 195);
  cone(1-mx/24, 2-mx/24);
  pop();
  
   //NIEVE PISO FLORES
  push();
  translate(350, 100, 0);
  
  fill(231, 224, 195);
  cone(1-mx/24, 3-mx/24);
  
   translate(40, 0, 30);
  fill(200);
  cone(2-mx/24, 2-mx/24);
  pop();
  
  
  //NIEVE PISO ARBOL
  push();
  translate(-368, 100, 10);
  
  fill(231, 224, 195);
  cone(4-mx/30, 5-mx/30);
  
   translate(40, 0, 30);
  fill(200);
  cone(2-mx/24, 2-mx/24);
  pop();
//SOL
  
  push(); 
  
  translate(solX+mx, solY, -390); 
  fill(255-(mx/20), 184-(mx/20),63-(mx/20));
  sphere(100-mx/20); 
  
  pop();
  
  //NUBES2
  
   push(); 
  
  translate(nubeX+mx*1, nubeY-mx/10); 
  rotateZ(PI/2);
  fill(170, 212, 255, 20);
  torus(5, 30, 100);
  
    translate(100, nubeY1-mx/5); 
  rotateZ(PI/4);
  fill(190, 218, 255, 40);
  torus(5, 30, 100);
 
  
  pop();
  
  push(); 
  
  translate(nubeX1+mx*1.1, nubeY1-mx/10); 
  rotateZ(PI/2);
  fill(200, 20);
  torus(10, 25, 120);
  
    translate(100, nubeY1-mx/20); 
  rotateZ(PI/2);
  fill(200, 40);
  torus(5, 35, 90);
 
  
  pop();
  
   push(); 
  
  translate(nubeX1+mx*0.9, nubeY1-mx/20); 
  rotateZ(PI/2);
  fill(200, 20);
  torus(10, 25, 120);
  
    translate(60, nubeY1-mx/10); 
  rotateZ(PI/2);
  fill(200, 10);
  torus(5, 35, 50);
 
  
  pop();
  
    push(); 
  
  translate(nubeX1+mx*0.4, nubeY1-mx/30); 
  rotateZ(PI/2);
  fill(200, 20);
  torus(10, 25, 13);
  
    translate(20, nubeY1-mx/15); 
  rotateZ(PI/2);
  fill(200, 10);
  torus(8, 15, 40);
 
  
  pop();
  
     push(); 
  
  translate(nubeX1+mx*0.2, nubeY1-mx/20); 
  rotateZ(PI/2);
  fill(200, 20);
  torus(5, 45, 23);
  
    translate(50, nubeY1-mx/25); 
  rotateZ(PI/2);
  fill(200, 10);
  torus(8, 55, 30);
 
  
  pop();
  
  


  
  //MARCADOR
  
   // Actualiza la localización del marcador
  var dif = mouseX - mx;
  if (abs(dif) > 1.0) {
    mx = mx + dif/32.0;
  }
  // Mantiene el marcador en la pantalla
  mx = constrain(mx, 1, width-1);
  noStroke();
  // Dibuja el rectángulo inferior
  push();
  fill(255);
  translate(0, (height/2)-2);
  plane(width, 5);
  pop();
  // Dibuja el marcador de posición
  push();
  fill(204, 102, 0);
  translate(mx-(width/2)-1, (height/2)-2);
  plane(4, 5);
  pop();
  
}