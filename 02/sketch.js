
var posXrect = 0;
var posYrect = 0;



function setup() {  
  
  createCanvas(780, 960);
	background(220);
  
   for(var numrect = 0; numrect < 6; numrect = numrect+1){
		noStroke ();
     fill (161, 0, 0);
		rect (posXrect, posYrect, 80, 50);
		posXrect = posXrect + 130;
     
  // rect vinotinto 100, 50 linea 1
     
   } 
		
  posXrect = 0; 
  
  
   for(var numrect = 0; numrect < 3; numrect = numrect+1){
		noStroke ();
     fill (237, 199,132);
		rect (posXrect+80, posYrect, 50, 100);
		posXrect = posXrect + 260;
      
  // rect beige 50, 100 linea 1 y 2
		
} 

  posXrect = 0; 
  
  for(var numrect = 0; numrect < 3; numrect = numrect+1){
		noStroke ();
     fill (0);
		rect (posXrect+210, posYrect, 50, 100);
		posXrect = posXrect + 260;
      
  // rect negro 50, 100 linea 1 y 2
		
} 
  
   posXrect = 0; 
  
  for(var numrect = 0; numrect < 6; numrect = numrect+1){
		noStroke ();
     fill (240, 213, 198);
		rect (posXrect, posYrect+50, 80, 50);
		posXrect = posXrect + 130;
     
  // rect beige 100, 50 linea 2
     
   } 
		
 posXrect = 0; 
  
  for(var numvertex = 0; numvertex < 6; numvertex = numvertex+1){
		stroke (210,117,110); // Color borde
     strokeWeight(2); // grosor borde
     fill (207, 129, 121); // color triángulo
		beginShape(); // triángulo línea 3

    vertex (posXrect, posYrect+100);
    vertex (posXrect, posYrect+150);
    vertex (posXrect+50, posYrect+150);
    endShape(CLOSE);
		posXrect = posXrect + 130;
     
  // triángulo rosado linea 3
     
   } 
  
  posXrect = 0; 
  
  for(var numvertex = 0; numvertex < 6; numvertex = numvertex+1){
			noStroke (); //sin borde
     fill (240, 143, 108); // color vertex
		beginShape(); // vertex línea 3
    vertex (posXrect, posYrect+100);
    vertex (posXrect+130, posYrect+100);
    vertex (posXrect+130, posYrect+150);
    vertex (posXrect+50, posYrect+150);
    endShape(CLOSE);
		posXrect = posXrect + 130;
     
  // vertex linea 3
  
}
  
  posXrect = 0; 
  
  for(var numvertex = 0; numvertex < 6; numvertex = numvertex+1){
			noStroke (); //sin borde
     fill (213, 164, 131); // color triángulo
		beginShape(); // vertex línea 4
    vertex (posXrect+50, posYrect+150);
    vertex (posXrect+130, posYrect+150);
    vertex (posXrect+130, posYrect+220);
    endShape(CLOSE);
		posXrect = posXrect + 130;
     
  // triángulo beige linea 4
  
}
  
  posXrect = 0; 
  
  for(var numvertex = 0; numvertex < 6; numvertex = numvertex+1){
			noStroke (); //sin borde
     fill (240, 89, 0); // color triángulo
		beginShape(); // vertex línea 5
    vertex (posXrect, posYrect+150);
    vertex (posXrect+50, posYrect+150);
    vertex (posXrect+130, posYrect+220);
    vertex (posXrect+130, posYrect+262);
    vertex (posXrect+50, posYrect+262);
    vertex (posXrect, posYrect+220);
    endShape(CLOSE);
		posXrect = posXrect + 130;
     
  // vertex naranja 
  
}
  
  		
 posXrect = 0; 
  
  for(var numvertex = 0; numvertex < 6; numvertex = numvertex+1){
		noStroke; // Sin borde
     fill (126, 125, 67); // color triángulo
		beginShape(); // triángulo línea 3

    vertex (posXrect, posYrect+220);
    vertex (posXrect+50, posYrect+262);
    vertex (posXrect, posYrect+262);
    endShape(CLOSE);
		posXrect = posXrect + 130;
     
  // triángulo verde
     
   } 
  
  posXrect = 0; 
  
  for(var numvertex = 0; numvertex < 6; numvertex = numvertex+1){
		noStroke; // Sin borde
     fill (213, 164, 131); // color triángulo
		beginShape(); // triángulo línea 3

    vertex (posXrect+50, posYrect+262);
    vertex (posXrect+130, posYrect+262);
    vertex (posXrect+130, posYrect+332);
    endShape(CLOSE);
		posXrect = posXrect + 130;
     
  // triángulo verde
     
   } 
  
   posXrect = 0; 
  
  for(var numvertex = 0; numvertex < 6; numvertex = numvertex+1){
		noStroke; // Sin borde
     fill (48, 33,78 ); // color vertex
		beginShape(); // vertex azul

    vertex (posXrect, posYrect+262);
    vertex (posXrect+50, posYrect+262);
    vertex (posXrect+130, posYrect+332);
    vertex (posXrect, posYrect+332);
    endShape(CLOSE);
		posXrect = posXrect + 130;
     
  // vertex azul
    
    
   } 
posXrect = 0; 
  
  for(var numvertex = 0; numvertex < 3; numvertex = numvertex+1){
		noStroke; // Sin borde
     fill (139, 85,65 ); // color vertex

    rect (posXrect+210, posYrect+332, 50, 50);
		posXrect = posXrect + 260;
     
  // cuadrado cafe oscuro

    
    
   } 
  
  
posXrect = 0; 
  
  for(var numvertex = 0; numvertex < 3; numvertex = numvertex+1){
		noStroke; // Sin borde
     fill (162, 98, 31); // color vertex

    rect (posXrect, posYrect+332, 210, 50);
		posXrect = posXrect + 260;
     
  // rectángulo café

    
    
   } 

  posXrect = 0; 
  
  for(var numvertex = 0; numvertex < 3; numvertex = numvertex+1){
		noStroke; // Sin borde
     fill (84, 50, 52); // color vertex

    rect (posXrect, posYrect+382, 210, 50);
		posXrect = posXrect + 260;
     
  // rectángulo café oscuro

    
    
   } 
  
  posXrect = 0; 
  
  for(var numvertex = 0; numvertex < 3; numvertex = numvertex+1){
		noStroke; // Sin borde
     fill (69, 53, 59); // color vertex

    rect (posXrect+210, posYrect+382, 50, 50);
		posXrect = posXrect + 260;
     
  // cuadrado cafe mas oscuro


}
  
   posXrect = 0; 
  
  for(var numvertex = 0; numvertex < 3; numvertex = numvertex+1){
		noStroke; // Sin borde
     fill (178, 138, 70); // color vertex

    rect (posXrect+210, posYrect+432, 50, 50);
		posXrect = posXrect + 260;
     
  // cuadrado beige oscuro


}
  
  posXrect = 0; 
  
  for(var numvertex = 0; numvertex < 3; numvertex = numvertex+1){
		noStroke; // Sin borde
     fill (231, 194, 139); // color vertex

    rect (posXrect, posYrect+432, 210, 50);
		posXrect = posXrect + 260;
     
  // rectángulo beige

    
    
   } 
  
  
   posXrect = 0; 
  
  for(var numvertex = 0; numvertex < 3; numvertex = numvertex+1){
		noStroke; // Sin borde
     fill (216, 183, 163 ); // color 
		beginShape(); 

    vertex (posXrect, posYrect+482);
    vertex (posXrect+260, posYrect+482);
    vertex (posXrect+130, posYrect+532);
    endShape(CLOSE);
		posXrect = posXrect + 260;
     
  // triangulo invertido beige
    
    
   } 
  
  posXrect = 0; 
  
  for(var numvertex = 0; numvertex < 3; numvertex = numvertex+1){
		noStroke; // Sin borde
     fill (139, 32, 0); // color 
		beginShape(); 

    vertex (posXrect, posYrect+482);
    vertex (posXrect+130, posYrect+532);
    vertex (posXrect, posYrect+532);
    endShape(CLOSE);
		posXrect = posXrect + 260;
     
  // triangulo mitad derecha vinotinto
  
   } 
  
   posXrect = 0; 
  
  for(var numvertex = 0; numvertex < 3; numvertex = numvertex+1){
		noStroke; // Sin borde
     fill (139, 32, 0); // color 
		beginShape(); 

    vertex (posXrect+130, posYrect+532);
    vertex (posXrect+260, posYrect+482);
    vertex (posXrect+260, posYrect+532);
    endShape(CLOSE);
		posXrect = posXrect + 260;
     
  // triangulo mitad izquierda vinotinto
  
  }
  
  posXrect = 0; 
  
  for(var numvertex = 0; numvertex < 3; numvertex = numvertex+1){
		noStroke; // Sin borde
     fill (216, 183, 163); // color 
		beginShape(); 

    vertex (posXrect, posYrect+532);
    vertex (posXrect+130, posYrect+532);
    vertex (posXrect, posYrect+582);
    endShape(CLOSE);
		posXrect = posXrect + 260;
     
  // triangulo invertido mitad derecha beige
  
  }
  
  posXrect = 0; 
  
  for(var numvertex = 0; numvertex < 3; numvertex = numvertex+1){
		noStroke; // Sin borde
     fill (216, 183, 163); // color 
		beginShape(); 

    vertex (posXrect+130, posYrect+532);
    vertex (posXrect+260, posYrect+532);
    vertex (posXrect+260, posYrect+582);
    endShape(CLOSE);
		posXrect = posXrect + 260;
     
  // triangulo invertido mitad izquierda beige
  
  }
  
  posXrect = 0; 
  
  for(var numvertex = 0; numvertex < 3; numvertex = numvertex+1){
		noStroke; // Sin borde
     fill (179, 0, 35); // color 
		beginShape(); 

    vertex (posXrect+130, posYrect+532);
    vertex (posXrect+260, posYrect+582);
    vertex (posXrect, posYrect+582);
    endShape(CLOSE);
		posXrect = posXrect + 260;
     
  // triangulo vinotinto claro
  
  }


posXrect = 0; 
  
  for(var numvertex = 0; numvertex < 3; numvertex = numvertex+1){
		noStroke; // Sin borde
     fill (139, 32, 0); // color 
		beginShape(); 

    vertex (posXrect, posYrect+582);
    vertex (posXrect+260, posYrect+582);
    vertex (posXrect+130, posYrect+632);
    endShape(CLOSE);
		posXrect = posXrect + 260;
     
  // triangulo invertido vinotinto oscuro
  
  }

  posXrect = 0; 
  
  for(var numvertex = 0; numvertex < 3; numvertex = numvertex+1){
		noStroke; // Sin borde
     fill (216, 183, 163); // color 
		beginShape(); 

    vertex (posXrect, posYrect+582);
    vertex (posXrect+130, posYrect+632);
    vertex (posXrect, posYrect+632);
    endShape(CLOSE);
		posXrect = posXrect + 260;
     
  // triangulo mitad derecha beige
  
   } 
  
  posXrect = 0; 
  
  for(var numvertex = 0; numvertex < 3; numvertex = numvertex+1){
		noStroke; // Sin borde
     fill (216, 183, 163); // color 
		beginShape(); 

    vertex (posXrect+130, posYrect+632);
    vertex (posXrect+260, posYrect+582);
    vertex (posXrect+260, posYrect+632);
    endShape(CLOSE);
		posXrect = posXrect + 260;
     
  // triangulo mitad derecha beige
  
   }
  
  posXrect = 0; 
  
  for(var numvertex = 0; numvertex < 3; numvertex = numvertex+1){
		noStroke; // Sin borde
     fill (181, 134, 152); // color 
		beginShape(); 

    vertex (posXrect, posYrect+632);
    vertex (posXrect+130, posYrect+632);
    vertex (posXrect, posYrect+682);
    endShape(CLOSE);
		posXrect = posXrect + 260;
     
  // triangulo invertido mitad derecha lila
  
   }
  
   posXrect = 0; 
  
  for(var numvertex = 0; numvertex < 3; numvertex = numvertex+1){
		noStroke; // Sin borde
     fill (181, 134, 152); // color 
		beginShape(); 

    vertex (posXrect+130, posYrect+632);
    vertex (posXrect+260, posYrect+632);
    vertex (posXrect+260, posYrect+682);
    endShape(CLOSE);
		posXrect = posXrect + 260;
     
  // triangulo invertido mitad izquierda lila
  
   }
  
  posXrect = 0; 
  
  for(var numvertex = 0; numvertex < 3; numvertex = numvertex+1){
		noStroke; // Sin borde
     fill (221, 109, 0); // color 
		beginShape(); 

    vertex (posXrect, posYrect+682);
    vertex (posXrect+130, posYrect+632);
    vertex (posXrect+260, posYrect+682);
    endShape(CLOSE);
		posXrect = posXrect + 260;
     
  // triangulo grande naranja
  
   }
  
  posXrect = 0; 
  
  for(var numvertex = 0; numvertex < 3; numvertex = numvertex+1){
		noStroke; // Sin borde
     fill (0, 116, 71); // color 
		beginShape(); 

    vertex (posXrect, posYrect+682);
    vertex (posXrect+260, posYrect+682);
    vertex (posXrect+130, posYrect+732);
    endShape(CLOSE);
		posXrect = posXrect + 260;
     
  // triangulo invertido grande verde
  
   }
  
  posXrect = 0; 
  
  for(var numvertex = 0; numvertex < 3; numvertex = numvertex+1){
		noStroke; // Sin borde
     fill (192, 163, 73); // color 
		beginShape(); 

    vertex (posXrect, posYrect+682);
    vertex (posXrect+130, posYrect+732);
    vertex (posXrect, posYrect+732);
    endShape(CLOSE);
		posXrect = posXrect + 260;
     
  // triangulo mitad izquierda verde claro
  
   }
  posXrect = 0; 
  
  for(var numvertex = 0; numvertex < 3; numvertex = numvertex+1){
		noStroke; // Sin borde
     fill (192, 163, 73); // color 
		beginShape(); 

    vertex (posXrect, posYrect+682);
    vertex (posXrect+130, posYrect+732);
    vertex (posXrect, posYrect+782);
    endShape(CLOSE);
		posXrect = posXrect + 260;
     
  // rombo mitad derecha verde claro
  
   }

    posXrect = 0; 
  
  for(var numvertex = 0; numvertex < 3; numvertex = numvertex+1){
		noStroke; // Sin borde
     fill (192, 163, 73); // color 
		beginShape(); 

    vertex (posXrect+260, posYrect+682);
    vertex (posXrect+130, posYrect+732);
    vertex (posXrect+260, posYrect+782);
    endShape(CLOSE);
		posXrect = posXrect + 260;
     
  // rombo mitad izquierda verde claro
  
   }

   posXrect = 0; 
  
  for(var numvertex = 0; numvertex < 3; numvertex = numvertex+1){
		noStroke; // Sin borde
     fill (0); // color 
		beginShape(); 

    vertex (posXrect, posYrect+782);
    vertex (posXrect+130, posYrect+732);
    vertex (posXrect+260, posYrect+782);
    endShape(CLOSE);
		posXrect = posXrect + 260;
     
  // triangulo grande negro
  
   }
  
  posXrect = 0; 
  
  for(var numvertex = 0; numvertex < 3; numvertex = numvertex+1){
		noStroke; // Sin borde
     fill (216, 183, 163); // color 
		beginShape(); 

    vertex (posXrect, posYrect+782);
    vertex (posXrect+260, posYrect+782);
    vertex (posXrect+130, posYrect+832);
    endShape(CLOSE);
		posXrect = posXrect + 260;
     
  // triangulo invertido beige
  
   }
  
  posXrect = 0; 
  for(var numvertex = 0; numvertex < 3; numvertex = numvertex+1){
		noStroke; // Sin borde
     fill (95, 114, 92); // color 
		beginShape(); 

    vertex (posXrect, posYrect+782);
    vertex (posXrect+130, posYrect+832);
    vertex (posXrect, posYrect+882);
    endShape(CLOSE);
		posXrect = posXrect + 260;
     
  // rombo mitad derecha verde militar
  
   }
  
  posXrect = 0; 
  for(var numvertex = 0; numvertex < 3; numvertex = numvertex+1){
		noStroke; // Sin borde
     fill (95, 114, 92); // color 
		beginShape(); 

    vertex (posXrect+260, posYrect+782);
    vertex (posXrect+130, posYrect+832);
    vertex (posXrect+260, posYrect+882);
    endShape(CLOSE);
		posXrect = posXrect + 260;
     
  // rombo mitad izquierda verde militar
  
   }
  
  posXrect = 0; 
  for(var numvertex = 0; numvertex < 3; numvertex = numvertex+1){
		noStroke; // Sin borde
     fill (0); // color 
		beginShape(); 

    vertex (posXrect, posYrect+782);
    vertex (posXrect+65, posYrect+807);
    vertex (posXrect, posYrect+807);
    endShape(CLOSE);
		posXrect = posXrect + 260;
     
  // triangulo mitad derecha negro pequeño sobrepuesto
  
   }
  
  posXrect = 0; 
  for(var numvertex = 0; numvertex < 3; numvertex = numvertex+1){
		noStroke; // Sin borde
     fill (0); // color 
		beginShape(); 

    vertex (posXrect+260, posYrect+782);
    vertex (posXrect+260, posYrect+807);
    vertex (posXrect+195, posYrect+807);
    endShape(CLOSE);
		posXrect = posXrect + 260;
     
  // triangulo mitad izquierda negro pequeño sobrepuesto
  
   }
  
  posXrect = 0; 
  for(var numvertex = 0; numvertex < 3; numvertex = numvertex+1){
		noStroke; // Sin borde
     fill (216, 183, 163); // color 
		beginShape(); 

    vertex (posXrect, posYrect+882);
    vertex (posXrect+130, posYrect+832);
    vertex (posXrect+260, posYrect+882);
    endShape(CLOSE);
		posXrect = posXrect + 260;
     
  // triangulo beige
  
   }
  
  posXrect = 0; 
  for(var numvertex = 0; numvertex < 3; numvertex = numvertex+1){
		noStroke; // Sin borde
     fill (33, 30, 69); // color 
		beginShape(); 

    vertex (posXrect, posYrect+882);
    vertex (posXrect+260, posYrect+882);
    vertex (posXrect+130, posYrect+932);
    endShape(CLOSE);
		posXrect = posXrect + 260;
     
  // triangulo azul oscuro
  
   }
  
  posXrect = 0; 
  for(var numvertex = 0; numvertex < 3; numvertex = numvertex+1){
		noStroke; // Sin borde
     fill (216, 183, 163); // color 
		beginShape(); 

    vertex (posXrect, posYrect+882);
    vertex (posXrect+130, posYrect+932);
    vertex (posXrect, posYrect+932);
    endShape(CLOSE);
		posXrect = posXrect + 260;
     
  // triangulo mitad derecha beige
  
   }
  
  posXrect = 0; 
  for(var numvertex = 0; numvertex < 3; numvertex = numvertex+1){
		noStroke; // Sin borde
     fill (216, 183, 163); // color 
		beginShape(); 

    vertex (posXrect+130, posYrect+932);
    vertex (posXrect+260, posYrect+882);
    vertex (posXrect+260, posYrect+932);
    endShape(CLOSE);
		posXrect = posXrect + 260;
     
  // triangulo mitad izquierda beige
  
   }
}


