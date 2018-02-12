
var rect1X=0;
var rect2X=0;

var solY = 410;

var nubex = 0; //Nubes izquierda
var nubex2 = 0;
var nubex3 = 0;
var nubex4 = 0;

var nubex5 = 962; //Nubes derecha

var casa = 1400; 
var cara = 0; 
var sombrero = 0; 
var ropa = 0; 

var hilo = 0;
var cometa = 50;

var techo = 1390;
var ventana = 1406;
var ventana2= 1428;
var flor= 1400;
var flor2= 1410;
var flor3= 1420;
var flor4= 1430;
var flor5= 1440;
var flor6= 1450;
var cultivo = 2000;
var lechuga = 2000;
var lechuga2 = 2000;
var lechuga3 = 2000;
var lechuga4 = 2000;
var lechuga5 = 2000;
var lechuga6 = 2000;
var lechuga7 = 2000;
var lechuga8 = 2000;
var lechuga9 = 2000;
var lechuga10 = 2000;
var lechuga11 = 2000;
var lechuga12 = 2000;
var lechuga13 = 2000;
var lechuga14 = 2000;
var lechuga15 = 2000;
var lechuga16 = 2000;
var lechuga17 = 2000;
var lechuga18 = 2000;


var dir = 1;
var dir2 = 1;
var dir3 = 1;
var dir4 = 1;
var dir5 = 1; //sol
var dir6 = 1;


  
  
function setup() { 
  createCanvas(963, 621);
  
  
  
} 

function draw() { 
  background(93, 74, 51);
  
   noStroke();
  fill(67, 149, 157);

  rect(0 , 30  , rect1X, 300); // rectángulo azul
  rect1X = rect1X + 10; //velocidad movimiento X

  
  
  
  
  stroke(55, 87, 105);
  strokeWeight (7); 
  fill(143, 181, 206);
  rect(nubex5+90, 50 , 100, 50); // nube  derecha
 
	if(nubex5 < width){
		nubex5 = nubex5-2*dir6;
	}
  
	if(nubex5 < 0 || nubex5 > 960){
		dir6 = -dir6;
	}
	
  
 
   stroke(85, 103, 115);
  strokeWeight (7); 
  fill(101, 143, 161);
  rect(nubex4-150, 270 , 70, 35); // nube izquierda 
  
  
  
  
   if(nubex4 < 963){
		nubex4 = nubex4+10*dir4;
	}
  
	if(nubex4 > width-70 || nubex4 < 0){
		dir4 = -dir4;
	}
  
  
  
  
  
    stroke(213, 109, 47);
  strokeWeight (20); 
  fill(234, 185, 56);
  ellipse(481, solY , 100, 100); // sol

  
  	
  if(solY < 411){
		solY = solY-0.4*dir5;
	}
  
  if(solY < 100) {
		dir5 = -dir5;
	}
  
  
  
  
  
  noStroke ();
  fill(93, 74, 51);
  rect(0,330,963, 600);
  
  noStroke();
  fill(72, 85, 53);
  rect(963, 330  , rect2X, 187); // rectángulo verde
  rect2X = rect2X - 10; //velocidad movimiento  X
  
  
  
    
   noStroke();
  fill(151, 91, 46);
  rect(0, 517  , rect1X, 70); // rectángulo café
  rect1X = rect1X + 10; //velocidad movimiento X
  
  stroke (193, 51, 39);
  strokeWeight (0.5);
  line(hilo-97, 355, cometa-96, 70); // Cometa hilo
  
  if(hilo > -4){
		hilo = hilo + 0.5;
	}
  
noStroke ();
  fill (201, 89, 57);
  rect(cometa-97, 60, 20, 50); // Cometa
  

	
	if(cometa > -4){
		cometa = cometa + 0.5;
	}
	
  noStroke ();
  fill (201, 89, 57);
  rect(cometa-127, 60, 50, 20); // Cometa 2
  

	
	if(cometa > -4){
		cometa = cometa + 0.4;
	}
  
  
  
  noStroke ();
  fill (222, 201, 151);
  ellipse (cara-90, 350, 7, 7); // Cara
  

	
	if(cara > -4){
		cara = cara + 0.5;
	}

  noStroke ();
  fill (173, 126, 76);
  rect(sombrero-97, 343, 13, 5); // Sombrero
  

	
	if(sombrero > -4){
		sombrero = sombrero + 0.5;
	}

  noStroke ();
  fill (173, 126, 76);
  rect(ropa-97, 355, 13, 20); // Ropa
  

	
	if(ropa > -4){
		ropa = ropa + 0.5;
	}
  
  
	

  
  
  
noStroke ();
  fill (173, 126, 76);
  rect (casa, 350, 50, 30); // Casa
  

	
	if(casa > 500){
		casa = casa-10;
	}

  noStroke ();
  fill (151, 91, 46);
  rect (techo, 345, 70, 10); // techo
  

	
	if(techo > 490){
		techo = techo-10;
	}
    noStroke ();
  fill (204, 89, 57);
  ellipse (flor, 374, 6, 9); // Flor 1
  

	
	if(flor > 500){
		flor = flor-10;
	}
  
  noStroke ();
  fill (234, 185, 56);
  ellipse (flor2, 374, 6, 9); // Flor 2
  

	
	if(flor2 > 510){
		flor2 = flor2-10;
	}
  
  noStroke ();
  fill (204, 89, 57);
  ellipse (flor3, 374, 6, 9); // Flor 3
  

	
	if(flor3 > 520){
		flor3 = flor3-10;
	}
  
  noStroke ();
  fill (234, 185, 56);
  ellipse (flor4, 374, 6, 9); // Flor 4
  

	
	if(flor4 > 530){
		flor4 = flor4-10;
	}
  
  noStroke ();
  fill (204, 89, 57);
  ellipse (flor5, 374, 6, 9); // Flor 5
  

	
	if(flor5 > 540){
		flor5 = flor5-10;
	}
  
   noStroke ();
  fill (234, 185, 56);
  ellipse (flor6, 374, 6, 9); // Flor 6
  

	
	if(flor6 > 550){
		flor6 = flor6-10;
	}
  
  noStroke ();
  fill (151, 91, 46);
  rect (ventana, 355, 15, 10); // Ventana 1
  

	
	if(ventana > 506){
		ventana = ventana-10;
	}
  
  
  noStroke ();
  fill (151, 91, 46);
  rect (ventana2, 355, 15, 10); // Ventana 2
  

	
	if(ventana2 > 528){
		ventana2 = ventana2-10;
	}
  
  stroke (151, 91, 46);
  strokeWeight (10);
  fill (110, 106, 59);
  rect (cultivo-100, 400, 100, 50); // cultivo
  

	
	if(cultivo > 500){
		cultivo = cultivo-10;
	}
  
   noStroke ();
  fill (101, 116, 53);
  ellipse (lechuga-88, 413, 10, 10); // lechuga 1/
  

	
	if(lechuga > 500){
		lechuga = lechuga-10;
	}
  
     noStroke ();
  fill (101, 116, 53);
  ellipse (lechuga2-88, 425, 10, 10); // lechuga 1/2
  

	
	if(lechuga2 > 500){
		lechuga2 = lechuga2-10;
	}
  
  
   noStroke ();
  fill (101, 116, 53);
  ellipse (lechuga3-88, 437, 10, 10); // lechuga 1/3
  

	
	if(lechuga3 > 500){
		lechuga3 = lechuga3-10;
	}
   
  noStroke ();
  fill (151, 156, 79);
  ellipse (lechuga4-73, 413, 10, 10); // lechuga 2/1
  

	
	if(lechuga4 > 500){
		lechuga4 = lechuga4-10;
	}
  
   noStroke ();
  fill (151, 156, 79);
  ellipse (lechuga5-73, 425, 10, 10); // lechuga 2/2
  

	
	if(lechuga5 > 500){
		lechuga5 = lechuga5-10;
	}
  
   noStroke ();
  fill (151, 156, 79);
  ellipse (lechuga6-73, 437, 10, 10); // lechuga 2/3
  

	
	if(lechuga6 > 500){
		lechuga6 = lechuga6-10;
	}
  
  
  noStroke ();
  fill (101, 116, 53);
  ellipse (lechuga7-58, 413, 10, 10); // lechuga 3/1
  

	
	if(lechuga7 > 500){
		lechuga7 = lechuga7-10;
	}
  
  
  noStroke ();
  fill (101, 116, 53);
  ellipse (lechuga8-58, 425, 10, 10); // lechuga 3/2
  
  
	if(lechuga8 > 500){
		lechuga8 = lechuga8-10;
	}
  
   noStroke ();
  fill (101, 116, 53);
  ellipse (lechuga9-58, 437, 10, 10); // lechuga 3/3
  
  
	if(lechuga9 > 500){
		lechuga9 = lechuga9-10;
	}
  
  
   noStroke ();
  fill (151, 156, 79);
  ellipse (lechuga10-43, 413, 10, 10); // lechuga 4/1
  
  
	if(lechuga10> 500){
		lechuga10 = lechuga10-10;
	}
  
   noStroke ();
  fill (151, 156, 79);
  ellipse (lechuga11-43, 425, 10, 10); // lechuga 4/2
  
  
	if(lechuga11> 500){
		lechuga11 = lechuga11-10;
	}

   noStroke ();
  fill (151, 156, 79);
  ellipse (lechuga12-43, 437, 10, 10); // lechuga 4/3
  
  
	if(lechuga12> 500){
		lechuga12 = lechuga12-10;
	}

  noStroke ();
  fill (101, 116, 53);
  ellipse (lechuga13-28, 413, 10, 10); // lechuga 5/1
  
  
	if(lechuga13> 500){
		lechuga13 = lechuga13-10;
	}
  
  
   noStroke ();
  fill (101, 116, 53);
  ellipse (lechuga14-28, 425, 10, 10); // lechuga 5/2
  
  
	if(lechuga14> 500){
		lechuga14 = lechuga14-10;
	}
  
   noStroke ();
  fill (101, 116, 53);
  ellipse (lechuga15-28, 437, 10, 10); // lechuga 5/3
  
  
	if(lechuga15> 500){
		lechuga15 = lechuga15-10;
	}
  
  noStroke ();
  fill (151, 156, 79);
  ellipse (lechuga16-13, 413, 10, 10); // lechuga 6/1
  
  
	if(lechuga16> 500){
		lechuga16 = lechuga16-10;
	}
  
  noStroke ();
  fill (151, 156, 79);
  ellipse (lechuga17-13, 425, 10, 10); // lechuga 6/2
  
  
	if(lechuga17> 500){
		lechuga17 = lechuga17-10;
	}
  
  
  noStroke ();
  fill (151, 156, 79);
  ellipse (lechuga18-13, 437, 10, 10); // lechuga 6/2
  
  
	if(lechuga18> 500){
		lechuga18 = lechuga18-10;
	}
  
  
  stroke(85, 103, 115);
  strokeWeight (7); 
  fill(101, 143, 161, 200);
  rect(nubex-120, 90 , 100, 50); // nube  izquierda
 
  	
  
  
  
  	
	if(nubex < 963){
		nubex = nubex+6*dir;
	}
  
	if(nubex > width-100 || nubex < 0){
		dir = -dir;
	}
	
	
  
  
  
   stroke(85, 103, 115);
  strokeWeight (7); 
  fill(101, 143, 161, 200);
  rect(nubex2-120, 120 , 90, 45); // nube izquierda
  
  
  if(nubex2 < 963){
		nubex2 = nubex2+15*dir2;
	}
  
	if(nubex2 > width-250 || nubex2 < 0){
		dir2 = -dir2;
	}
  
  
 
    stroke(85, 103, 115);
  strokeWeight (7); 
  fill(101, 143, 161, 200);
  rect(nubex3-120, 210 , 80, 40); // nube izquierda
  
  
   if(nubex3 < 963){
		nubex3 = nubex3+2.5*dir3;
	}
  
	if(nubex3 > width-100 || nubex3 < 0){
		dir3 = -dir3;
	}
  
  
  
}