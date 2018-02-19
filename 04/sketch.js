var boton1x= 65;
var boton1y= 50;
var boton1tamx= 50;
var boton1tamy= 50;

var boton2x= 120;
var boton2y= 75;
var boton2tamx= 50;
var boton2tamy= 50;

var boton3x= 175;
var boton3y= 50;
var boton3tamx= 50;
var boton3tamy= 50;

var boton4x= 230;
var boton4y= 75;
var boton4tamx= 50;
var boton4tamy= 50;

var boton5x= 285;
var boton5y= 50;
var boton5tamx= 50;
var boton5tamy= 50;

var boton6x= 340;
var boton6y= 75;
var boton6tamx= 50;
var boton6tamy= 50;

var boton7x= 395;
var boton7y= 50;
var boton7tamx= 50;
var boton7tamy= 50;

var boton8x= 450;
var boton8y= 75;
var boton8tamx= 50;
var boton8tamy= 50;

var boton9x= 505;
var boton9y= 50;
var boton9tamx= 50;
var boton9tamy= 50;

var boton10x= 560;
var boton10y= 75;
var boton10tamx= 50;
var boton10tamy= 50;

var herramienta=0;





var color1x= 605; //rojo
var color1y= 30;
var color1tamx= 40;
var color1tamy= 30;


var color2x= 655; //cafe
var color2y= 30;
var color2tamx= 40;
var color2tamy= 30;

var color3x= 705; //azul
var color3y= 30;
var color3tamx= 40;
var color3tamy= 30;

var color4x= 755; //verde
var color4y= 30;
var color4tamx= 40;
var color4tamy= 30;

var color5x= 805; //amarillo
var color5y= 30;
var color5tamx= 40;
var color5tamy= 30;

var color6x= 605; //blanco 
var color6y= 70;
var color6tamx= 40;
var color6tamy= 30;

var color7x= 655; //negro
var color7y= 70;
var color7tamx= 40;
var color7tamy= 30;

var color8x= 705; //gris
var color8y= 70;
var color8tamx= 40;
var color8tamy= 30;

var color9x= 755; //morado
var color9y= 70;
var color9tamx= 40;
var color9tamy= 30;

var color10x= 805; //uva
var color10y= 70;
var color10tamx= 40;
var color10tamy= 30;





var colorSelect=0;




function setup() { 
  createCanvas(windowWidth, windowHeight);
background( 165, 200, 229);
  
  //Base verde 
  //Esta parte te la puse en el SETUP porque parecía el fondo...
  //Si no quieres que esto varíe ni que se afecte cuando el usuario esté dibujando,
  //Es mejor que esté en el setup, además así no se va a dibujar cada vez que pase
  //por el draw
 noStroke ();
   fill (141, 163, 98);
  rect (0, windowHeight -160 , windowWidth-140, windowHeight -100); //espacio verde 4
  
  fill (67,87,26);
  rect (0, windowHeight -130 , windowWidth-100, windowHeight -100); //espacio verde 3

 
  
  fill (62, 78, 42);
  rect (0, windowHeight -100 , windowWidth-60, windowHeight -100); //espacio verde 2

  
  
  fill (68,92,81);
  rect (0, windowHeight -70 , windowWidth, windowHeight-100); // espacio verde base
  
  
   
  
  
} 

function draw() { 
  
  
  noStroke();
  fill (236, 195, 243);
  rect (15, 0, 855, 120) // cuadro de herramientas
  
 //DEFINICION ESQUELETO BOTONES
  
  //BOTON 1
   fill (167, 151, 191);
  ellipse (boton1x, boton1y, boton1tamx, boton1tamy)
  fill(218, 184, 219);
  ellipse (boton1x, boton1y, 7, 7);
  
  
  

  //BOTON 2
  
  fill (167, 151, 191);
  ellipse (boton2x, boton2y, boton2tamx, boton2tamy);
  fill(218, 184, 219);
  ellipse (boton2x-10, boton2y-8, 7, 7);
  fill(218, 184, 219);
  ellipse (boton2x, boton2y, 13, 5);
  fill(218, 184, 219);
  ellipse (boton2x + 10, boton2y +8, 7, 7);
  
  
  
  //BOTON 3
  
    fill (167, 151, 191);
  ellipse (boton3x, boton3y, boton3tamx, boton3tamy);
  
  stroke (218, 184, 219);
  strokeWeight (1);
  ellipse (boton3x, boton3y, 7, 7); //centro flor
  
   fill (218, 184, 219);
  ellipse (boton3x+7, boton3y-3, 7, 7); //petalo derecho
  fill (218, 184, 219);
  ellipse (boton3x+3, boton3y+7, 7, 7); //petalo inferior
  fill (218, 184, 219);
  ellipse (boton3x-7, boton3y+3, 7, 7); //petalo izquierdo
  fill (218, 184, 219);
  ellipse (boton3x-3, boton3y-7, 7, 7); //petalo superior
  
  //BOTON 4
  
       fill (167, 151, 191);
  ellipse (boton4x, boton4y, boton4tamx, boton4tamy);
  
  fill (218, 184, 219);
  ellipse (boton4x, boton4y+1, 37, 15); //pedazo grande
  fill (218, 184, 219);
  ellipse (boton4x+7, boton4y-8, 15, 13);// pedazo derecha
  fill (218, 184, 219);
  ellipse (boton4x-7, boton4y-6, 11, 9);// pedazo derecha
  
  
  
  
  //BOTON 5
  
    fill (167, 151, 191);
  ellipse (boton5x, boton5y, boton5tamx, boton5tamy); //boton5
  
  fill (218, 184, 219);
  ellipse (boton5x, boton5y+3, 30, 12);
  fill (218, 184, 219);
  ellipse (boton5x, boton5y-7, 20, 11);
   fill (218, 184, 219);
  ellipse (boton5x, boton5y-15, 6, 7);
  fill (218, 184, 219);
  rect (boton5x-4, boton5y+9, 6, 8);
  
  
  
  
  
  //BOTON 6
  
    fill (167, 151, 191);
  ellipse (boton6x, boton6y, boton6tamx, boton6tamy); //boton6
  
  fill (218, 184, 219);
  beginShape ();
  vertex (boton6x, boton6y-8);
  vertex (boton6x+16, boton6y+10);
  vertex (boton6x-16, boton6y+10);
  endShape (CLOSE); // Arbol triangulo grande
  
  fill (218, 184, 219);
  beginShape ();
  vertex (boton6x, boton6y-17);
  vertex (boton6x+12, boton6y-2);
  vertex (boton6x-12, boton6y-2);
  endShape (CLOSE);
  
  fill (218, 184, 219);
  beginShape ();
  vertex (boton6x, boton6y-22);
  vertex (boton6x+8, boton6y-14);
  vertex (boton6x-8, boton6y-14);
  endShape (CLOSE);
  
  fill (218, 184, 219);
  rect (boton6x-4, boton6y+9, 6, 8);
  
  //BOTON 7
  
    fill (167, 151, 191);
  ellipse (boton7x, boton7y, boton7tamx, boton7tamy); //boton7
  
  fill (218, 184, 219);
  beginShape ();
  vertex (boton7x-12, boton7y+10);
  vertex (boton7x+18, boton7y+10);
  vertex (boton7x+3, boton7y-15);
  endShape (CLOSE);
  
  fill (218, 184, 219);
  beginShape ();
  vertex (boton7x-19, boton7y-2);
  vertex (boton7x+4, boton7y-2);
  vertex (boton7x-9, boton7y-20);
  endShape (CLOSE);
  
  
  //BOTON 8
  
  
    fill (167, 151, 191);
  ellipse (boton8x, boton8y, boton8tamx, boton8tamy); //boton8
  
  fill (218, 184, 219);
  beginShape ();
  vertex (boton8x-15, boton8y-5);
  vertex (boton8x+15, boton8y-5);
  vertex (boton8x, boton8y-13);
  endShape (CLOSE);
  
   fill (218, 184, 219);
  rect(boton8x-10, boton8y -5, 20, 16);
  
  
  
  //BOTON 9
  
    fill (167, 151, 191);
  ellipse (boton9x, boton9y, boton9tamx, boton9tamy); //boton9
  
  
   fill (218, 184, 219);
  rect(boton9x-16, boton9y-5, 33, 10);
  
   fill (218, 184, 219);
  rect(boton9x-11, boton9y-13, 20, 10);
  
  fill (218, 184, 219);
  ellipse (boton9x-7, boton9y+7, 7, 7);
  
   fill (218, 184, 219);
  ellipse (boton9x+7, boton9y+7, 7, 7);
  
  
  
  //BOTON 10
  
  
    fill (mouseX+5, 100, mouseY-2);
  ellipse (boton10x, boton10y, boton10tamx, boton10tamy); //boton10
  
  
   fill (218, 184, 219);
  ellipse (boton10x, boton10y+3, 6, 32);
  
  fill (218, 184, 219);
  ellipse (boton10x-10, boton10y-6, 18, 20);
  
  fill (218, 184, 219);
  ellipse (boton10x-4, boton10y+6, 8, 7);
  
  fill (218, 184, 219);
  ellipse (boton10x+10, boton10y-6, 18, 20);
  
  
  fill (218, 184, 219);
  ellipse (boton10x+4, boton10y+6, 8, 7);
  
  stroke (236, 195, 243);
  strokeWeight (2);
  ellipse (boton10x-4, boton10y, 3, 3);
  
  stroke (236, 195, 243);
  strokeWeight (2);
  ellipse (boton10x+4, boton10y, 3, 3);

// DEFINICION ESQUELETO COLORES
  
  noStroke();
  fill (255, 99, 178); //rosado
  rect (color1x, color1y,  color1tamx,  color1tamy); 

  
  noStroke();
  fill (167, 151, 191); //lila
  rect (color2x, color2y,  color2tamx,  color2tamy); 
  
  noStroke();
  fill (51,67,92); //azul
  rect (color3x, color3y,  color3tamx,  color3tamy); 
  
   noStroke();
  fill (86, 152, 124); //verde
  rect (color4x, color4y,  color4tamx,  color4tamy); 
  
    noStroke();
  fill (224, 183, 74); //amarillo
  rect (color5x, color5y,  color5tamx,  color5tamy); 
  
    noStroke();
  fill (220, 214, 200); //blanco
  rect (color6x, color6y,  color6tamx,  color6tamy); 
  
    noStroke();
  fill (0, 182, 199); //azul claro
  rect (color7x, color7y,  color7tamx,  color7tamy); 
  
     noStroke();
  fill (96, 99, 82); //gris
  rect (color8x, color8y,  color8tamx,  color8tamy); 

   noStroke();
  fill (152, 226, 127); //verde2
  rect (color9x, color9y,  color9tamx,  color9tamy); 
  
    noStroke();
  fill (174, 87, 101); //uva
  rect (color10x, color10y,  color10tamx,  color10tamy); 



 
   if (mouseIsPressed) {
     
     //FIJAR HERRAMIENTAS
    
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
     
     
     if (mouseX > boton10x && mouseX < boton10x + boton10tamx && 
        mouseY > boton10y && mouseY < boton10y + boton10tamy){
      herramienta = 9;
    }
     
     if (mouseX > color1x && mouseX < color1x + color1tamx &&
			mouseY > color1y && mouseY < color1y + color1tamy) {
			colorSelect = 0;
		}
     
          if (mouseX > color2x && mouseX < color2x + color2tamx &&
			mouseY > color2y && mouseY < color2y + color2tamy) {
			colorSelect = 1;
		}
         
           if (mouseX > color3x && mouseX < color3x + color3tamx &&
			mouseY > color3y && mouseY < color3y + color3tamy) {
			colorSelect = 2;
		}
        
            if (mouseX > color4x && mouseX < color4x + color4tamx &&
			mouseY > color4y && mouseY < color4y + color4tamy) {
			colorSelect = 3;
		}
         
                if (mouseX > color5x && mouseX < color5x + color5tamx &&
			mouseY > color5y && mouseY < color5y + color5tamy) {
			colorSelect = 4;
		}
         
                  if (mouseX > color6x && mouseX < color6x + color6tamx &&
			mouseY > color6y && mouseY < color6y + color6tamy) {
			colorSelect = 5;
		}
      
         
   if (mouseX > color7x && mouseX < color7x + color7tamx &&
			mouseY > color7y && mouseY < color7y + color7tamy) {
			colorSelect = 6;
		}
    
  if (mouseX > color8x && mouseX < color8x + color8tamx &&
			mouseY > color8y && mouseY < color8y + color8tamy) {
			colorSelect = 7;
		}
    
  if (mouseX > color9x && mouseX < color9x + color9tamx &&
			mouseY > color9y && mouseY < color9y + color9tamy) {
			colorSelect = 8;
		}       
   
  if (mouseX > color10x && mouseX < color10x + color10tamx &&
			mouseY > color10y && mouseY < color10y + color10tamy) {
			colorSelect = 9;
		}  

         //TERMINA DEFINICIÓN DE BOTONES HERRAMIENTAS Y COLORES
         
         //INICIA DEFINICIÓN DE COLORES
         
  		if (colorSelect == 0) {
			fill(255, 99, 178);
		} //rosado
     
      		if (colorSelect == 1) {
			fill(167, 151, 191);
		} //lila
  
       		if (colorSelect == 2) {
			fill(51, 67, 92);
		} //azul
   
       		if (colorSelect == 3) {
			fill(86, 152, 124);
		} //verde
   
        		if (colorSelect == 4) {
			fill(224, 183, 74);
		} //amarillo
   
   		if (colorSelect == 5) {
			fill(220, 214, 200);
		} //blanco
   
  		if (colorSelect == 6) {
			fill(0, 182, 199);
		} //azul claro
   
  		if (colorSelect == 7) {
			fill(96, 99, 82);
		} //gris
     
    		if (colorSelect == 8) {
			fill(152, 226, 127);
		} //verde2
              
    		if (colorSelect == 9) {
			fill(174, 87, 101);
		} //uva
  
     
   
            //FIN DEFINICION VALORES COLORES
     
            // INICIO DEFINICIÓN FORMA HERRAMIENTAS
     
  if (herramienta == 0){

  ellipse ( mouseX, mouseY, 6, 6);
    
  }
     
     
     
     
     
     if (herramienta == 1){

  ellipse ( mouseX -10, mouseY - 8, 10, 10);
  ellipse ( mouseX, mouseY, 10, 2);
  ellipse ( mouseX+10, mouseY+8 , 4, 4);     
  }
     
      
     if (herramienta == 2){

    stroke (218, 171, 214);
       strokeWeight (2);
      
  ellipse ( mouseX, mouseY , 7, 7);
       noStroke();
  ellipse ( mouseX+7, mouseY-3, 7, 7);
  ellipse ( mouseX+3, mouseY+7 , 7, 7);  
  ellipse ( mouseX-3, mouseY-7 , 7, 7); 
  ellipse ( mouseX-7, mouseY+3 , 7, 7);        
  }
     
     
      if (herramienta == 3){

   
  
  ellipse ( mouseX, mouseY+1, 37, 15);
  ellipse ( mouseX+7, mouseY-8 , 15, 13);   
  ellipse ( mouseX-7, mouseY-6 , 11, 9);        
  }
     
       if (herramienta == 4){

  ellipse ( mouseX, mouseY+3, 30, 12);
  ellipse ( mouseX, mouseY-7 , 20, 11);   
  ellipse ( mouseX, mouseY-14 , 6, 7);
  fill (151, 91, 46);
  rect ( mouseX-4, mouseY+9 , 6, 8);
  } 
     
      if (herramienta == 5){

        beginShape ();
  vertex ( mouseX, mouseY-8);
  vertex ( mouseX + 16, mouseY+10);   
  vertex  (mouseX-16, mouseY+10);
 endShape (CLOSE);
        
          beginShape ();
  vertex ( mouseX, mouseY-17);
  vertex ( mouseX + 12, mouseY-2);   
  vertex  (mouseX-12, mouseY-2);
 endShape (CLOSE);
        
        beginShape ();
  vertex ( mouseX, mouseY-22);
  vertex ( mouseX + 8, mouseY-14);   
  vertex  (mouseX-8, mouseY-14);
 endShape (CLOSE);
        
        fill (93, 74, 51);
  rect (mouseX-4, mouseY+10, 6, 8);
        
  } 

  
      if (herramienta == 6){
        
        stroke (102, 58, 55);
        strokeWeight (2);
  beginShape ();
  vertex (mouseX-80, mouseY);
  vertex (mouseX+20, mouseY);
  vertex (mouseX-30, mouseY-90);
  endShape (CLOSE);
     
  stroke (102, 58, 55);
        strokeWeight (2);
  beginShape ();
  vertex (mouseX-60, mouseY+40);
  vertex (mouseX+60, mouseY+40);
  vertex (mouseX, mouseY-80);
  endShape (CLOSE);
        
         } 
     
     
     
     if (herramienta == 7){
        
  rect(mouseX-10, mouseY -5, 20, 16);
     
       fill (204, 89, 57);
     beginShape ();
  vertex (mouseX-15, mouseY-5);
  vertex (mouseX+15, mouseY-5);
  vertex (mouseX, mouseY-13);
  endShape (CLOSE);
     
     
     rect(mouseX-2, mouseY+1, 5, 10);
     
       
       }
       
         if (herramienta == 8){
        
           
  rect(mouseX-16, mouseY-5, 33, 10);
  
   
  rect(mouseX-11, mouseY-13, 20, 10);
           
           fill (218, 184, 219);
  rect (mouseX-9, mouseY-10, 7, 4);
           
           fill (218, 184, 219);
  rect (mouseX, mouseY-10, 7, 4);
  
  fill (102, 58, 55);
  ellipse (mouseX-7, mouseY+7, 7, 7);
  
   fill (102, 58, 55);
  ellipse (mouseX+7, mouseY+7, 7, 7);
        
  
           
           }
           
      
     
         if (herramienta == 9){
        
        
              fill (mouseX+5, 100, mouseY-2);   
 
           
           
            ellipse (mouseX, mouseY+3, 6, 32); //nariz
  

  ellipse (mouseX-10, mouseY-6, 18, 20);
  

  ellipse (mouseX-4, mouseY+6, 8, 7);
  

  ellipse (mouseX+10, mouseY-6, 18, 20);
  
   
  

  ellipse (mouseX+4, mouseY+6, 8, 7);
           
     
  
  fill (0);
  ellipse (mouseX-4, mouseY, 3, 3);
  
 fill (0);
  ellipse (mouseX+4, mouseY, 3, 3);
           
          
          
           
           
           
       
    
        
  
           
           }
    
     
     
  }
     
  }
  
     
    
