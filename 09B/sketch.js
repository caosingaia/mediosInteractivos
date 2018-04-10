var bear1; //femenino
var bear2; //masculino
var bear3; //hijo
var bearDad;
var bearMom;
var bearSon = 0;

var misOsos = [] ;
var misSalmones = [];
var misPinguinos = [];
var misArenques = [];
var misBeavers = [];
var misRamas = [];
var misArenquesSur= [];

var Canada;
var rio;
var salmon1;
var salmon2;
var salmonDad;
var salmonMom;
var salmonSon = 0;
var pinguino1; //femenino
var pinguino2; //masculino
var pinguino3; //hijo
var pinguinoDad;
var pinguinoMom;
var pinguinoSon = 0;
var beaver1; //femenino
var beaver2; //masculino
var beaver3; //hijo
var beaverDad;
var beaverMom;
var beaverSon = 0;
var arenque;
var rama;
var ramaFood;
var arenque1;
var arenque2;
var pine;
var pine2;

var LIMITEOSOX1 = 300;
var LIMITEOSOX2 = 480;
var LIMITEOSOY1 = 270;
var LIMITEOSOY2 = 550;

var LIMITESALX1 = 300;
var LIMITESALX2 = 340;
var LIMITESALY1 = 200;
var LIMITESALY2 = 350;

var LIMITEPINX1 = 600;
var LIMITEPINX2 = 630;
var LIMITEPINY1 = 960;
var LIMITEPINY2 = 1300;

var LIMITEBEAX1 = 200;
var LIMITEBEAX2 = 330;
var LIMITEBEAY1 = 170;
var LIMITEBEAY2 = 300;

function preload(){
  bear1 = loadImage('assets/bear2.png');
  bear2 = loadImage('assets/bear1.png');
  bear3 = loadImage('assets/bear3.png');
  Canada = loadImage('assets/world.jpg');
  rio = loadImage('assets/river.png');
  salmon1 = loadImage('assets/salmon2.png');
  salmon2 = loadImage('assets/salmon3.png');
  pinguino1 = loadImage('assets/pinguino1.png');
  pinguino2 = loadImage('assets/pinguino2.png');
  pinguino3 = loadImage('assets/pinguino3.png');
  beaver1 = loadImage('assets/beaver1.png');
  beaver2 = loadImage('assets/beaver2.png');
  beaver3 = loadImage('assets/beaver3.png');
  arenque = loadImage('assets/arenque.png');
  pine = loadImage('assets/pine.png');
  pine2 = loadImage('assets/pine2.png');
  rama = loadImage('assets/rama.png');
}

function setup() {
  createCanvas(1000, 1500);
  background(220);
  
  /*bearDad = new Bear(1, 5);
  bearMom = new Bear(2, 5);*/
  for (var i = 0; i < 4; i = i+1) {
		    var r = round(random(1, 2));
    misOsos[i] = new Bear(r, 5);
  }
  /*salmonDad = new Salmon(1);
  salmonMom = new Salmon(2);
  */
  for (var i = 0; i < 10; i = i+1) {
		    var r = round(random(1, 2));
    misSalmones[i] = new Salmon(r);
  }
  /*pinguinoDad = new Pinguino(1, 5);
  pinguinoMom = new Pinguino(2, 5);
  */
  for (var i = 0; i < 8; i = i+1) {
		    var r = round(random(1, 2));
    misPinguinos[i] = new Pinguino(r, 5);
  }
  /*beaverDad = new Beaver(1, 5);
  beaverMom = new Beaver(2, 5);
  */
  for (var i = 0; i < 5; i = i+1) {
		    var r = round(random(1, 2));
    misBeavers[i] = new Beaver(r, 5);
  }
	/*arenque1 = new Arenque();
	arenque2 = new ArenqueSur();
	*/
  for (var i = 0; i < 10; i = i+1) {
    misArenques[i] = new Arenque();
  }

 for (var i = 0; i < 20; i = i+1) {
    misRamas[i] = new Rama();
  }
/*
	ramaFood = new Rama();
*/
 for (var i = 0; i < 50; i = i+1) {
    misArenquesSur[i] = new ArenqueSur();
  }
}

function draw() {
  
  image(Canada, -200, -400, 2820, 2100);
  image(rio, 250, 190, 198, 280);
  image(pine, 230, 180, 61.5, 120);
  image(pine2, 200, 140, 61.5, 120);
  image(pine, 170, 100, 61.5, 120);
  
  
  //Osos
  for (var i = 0; i < misOsos.length; i = i+1) {
    misOsos[i].dibujarse();
    misOsos[i].moverse();
  }
  
  for (var j = 0; j < misOsos.length; j = j+1) {
		    for (var k = 0; k < misOsos.length; k = k+1) {
		      if (misOsos[j].genero != misOsos[k].genero && //si son diferentes de genero
				         dist(misOsos[j].x, misOsos[j].y, misOsos[k].x, misOsos[k].y) < misOsos[j].tamano && //si estan cerca
         misOsos[j].vivo && misOsos[k].vivo && misOsos.length < 8) { //si estan vivos Y si el arreglo es menor a 20
					           misOsos[misOsos.length] = new Bear(2, 1); //se crea un osito en el arreglo
				      }
		    }
	  }
  /*if (dist(bearDad.x, bearDad.y, bearMom.x, bearMom.y) < bearDad.tamano && 
    bearDad.vivo && bearMom.vivo && bearSon == 0) {
    bearSon = new Bear(2, 1);
  }*/

  /*bearDad.dibujarse();
  bearDad.moverse();
  bearMom.dibujarse();
  bearMom.moverse();
  
  if(bearSon != 0){
    bearSon.dibujarse(); 
    bearSon.moverse();
  }*/
  
  //End Osos
  //Salmones
 /* if (dist(salmonDad.x, salmonDad.y, salmonMom.x, salmonMom.y) < salmonDad.tamano/2 && 
    salmonDad.vivo && salmonMom.vivo && salmonSon == 0) {
    salmonSon = new Salmon(3);
  }*/
  
    for (var i = 0; i < misSalmones.length; i = i+1) {
    misSalmones[i].dibujarse();
    misSalmones[i].moverse();
  }
  
  for (var j = 0; j < misSalmones.length; j = j+1) {
		    for (var k = 0; k < misSalmones.length; k = k+1) {
		      if (misSalmones[j].genero != misSalmones[k].genero && //si son diferentes de género
				         dist(misSalmones[j].x, misSalmones[j].y, misSalmones[k].x, misSalmones[k].y) < misSalmones[j].tamano && //si están cerca
         misSalmones[j].vivo && misSalmones[k].vivo && misSalmones.length < 20) { //si estan vivos Y si el arreglo es menor a 20
					           misSalmones[misSalmones.length] = new Salmon(2, 1); //se crea un salmon en el arreglo
				      }
		    }
	  }

 /* salmonDad.dibujarse();
  salmonDad.moverse();
  salmonMom.dibujarse();
  salmonMom.moverse();*/
  
  /*if(salmonSon != 0){
    salmonSon.dibujarse(); 
    salmonSon.moverse();
  }*/
  
  //END Salmones
  //Pinguinos
  for (var i = 0; i < misPinguinos.length; i = i+1) {
    misPinguinos[i].dibujarse();
    misPinguinos[i].moverse();
  }
  
  for (var j = 0; j < misPinguinos.length; j = j+1) {
		    for (var k = 0; k < misPinguinos.length; k = k+1) {
		      if (misPinguinos[j].genero != misPinguinos[k].genero && //si son diferentes de genero
				         dist(misPinguinos[j].x, misPinguinos[j].y, misPinguinos[k].x, misPinguinos[k].y) < misPinguinos[j].tamano && //si estan cerca
         misPinguinos[j].vivo && misPinguinos[k].vivo && misPinguinos.length < 8) { //si estan vivos Y si el arreglo es menor a 20
					           misPinguinos[misPinguinos.length] = new Pinguino (2, 5); //se crea un pinguino en el arreglo
				      }
		    }
	  }
  
  /* if (dist(pinguinoDad.x, pinguinoDad.y, pinguinoMom.x, pinguinoMom.y) < pinguinoDad.tamano && 
    pinguinoDad.vivo && pinguinoMom.vivo && pinguinoSon == 0) {
    pinguinoSon = new Pinguino(2, 1);
  }

  pinguinoDad.dibujarse();
  pinguinoDad.moverse();
  pinguinoMom.dibujarse();
  pinguinoMom.moverse();
  
  if(pinguinoSon != 0){
    pinguinoSon.dibujarse(); 
    pinguinoSon.moverse();
  }*/
  //END pinguinos
  //Beavers
    for (var i = 0; i < misBeavers.length; i = i+1) {
    misBeavers[i].dibujarse();
    misBeavers[i].moverse();
  }
  
  for (var j = 0; j < misBeavers.length; j = j+1) {
		    for (var k = 0; k < misBeavers.length; k = k+1) {
		      if (misBeavers[j].genero != misBeavers[k].genero && 
				         dist(misBeavers[j].x, misBeavers[j].y, misBeavers[k].x, misBeavers[k].y) < misBeavers[j].tamano &&
         misBeavers[j].vivo && misBeavers[k].vivo && misBeavers.length < 8) { 
					           misBeavers[misBeavers.length] = new Beaver (2, 1);
				      }
		    }
	  }
  //End Beavers
  
  
  //Arenque
  for (var i = 0; i < misArenques.length; i = i+1) {
    misArenques[i].dibujarse();
    misArenques[i].moverse();
  }
  
   for (var i = 0; i < misArenquesSur.length; i = i+1) {
    misArenquesSur[i].dibujarse();
    misArenquesSur[i].moverse();
  }
  //END arenque
	
  //Ramas
  for (var i = 0; i < misRamas.length; i = i+1) {
    misRamas[i].dibujarse();
  }
  //END ramas
  
  //Simbiosis
  //bear eats salmon
  for (var i = 0; i < misOsos.length; i = i+1) {
    for (var j = 0; j < misSalmones.length; j = j+1) {
      if (dist(misOsos[i].x, misOsos[i].y, misSalmones[j].x, misSalmones[j].y) < misSalmones[j].tamano/2 && 
          misSalmones[j].vivo && misOsos[i].vivo){
        misSalmones[j].vivo = 0;
        misOsos[i].crecer();
      }
    }
  }
  
	//pinguinos eat arenques
  for (var i = 0; i < misPinguinos.length; i = i+1) {
    for (var j = 0; j < misArenquesSur.length; j = j+1) {
      if (dist(misPinguinos[i].x, misPinguinos[i].y, misArenquesSur[j].x, misArenquesSur[j].y) < misArenquesSur[j].tamano/2 && 
          misArenquesSur[j].vivo && misPinguinos[i].vivo){
        misArenquesSur[j].vivo = 0;
        misPinguinos[i].crecer();
      }
    }
  }
  
	
	
//Castores eat ramas
   for (var i = 0; i < misBeavers.length; i = i+1) {
    for (var j = 0; j < misRamas.length; j = j+1) {
      if (dist(misBeavers[i].x, misBeavers[i].y, misRamas[j].x, misRamas[j].y) < misRamas[j].tamano/2 && 
          misRamas[j].vivo && misBeavers[i].vivo){
        misRamas[j].vivo = 0;
        misBeavers[i].crecer();
      }
    }
  }
  
  
  
	/*if (dist(beaverDad.x, beaverDad.y, ramaFood.x, ramaFood.y) < ramaFood.tamano/2 && 
    beaverDad.vivo && ramaFood.vivo) {
      ramaFood.vivo = 0;
      beaverDad.crecer();
  }
	if (dist(beaverMom.x, beaverMom.y, ramaFood.x, ramaFood.y) < ramaFood.tamano/2 && 
    beaverMom.vivo && ramaFood.vivo) {
      ramaFood.vivo = 0;
      beaverMom.crecer();
}
	if (dist(beaverSon.x, beaverSon.y, ramaFood.x, ramaFood.y) < ramaFood.tamano/2 && 
    beaverSon.vivo && ramaFood.vivo) {
      ramaFood.vivo = 0;
      beaverSon.crecer();
}*/
  //END simbiosis
  
  //print(mouseX + " " + mouseY);
  /*if (mouseIsPressed == true) {
    bearDad.x = mouseX;
    bearDad.y = mouseY;
	}*/
}

function Bear(_genero, _edad) {
  this.x = random(LIMITEOSOX1, LIMITEOSOX2);
  this.y = random(LIMITEOSOY1, LIMITEOSOY2);
  this.tamano = 70;
  this.genero = _genero;
  this.vivo = 1;
  this.dirx = random (10, width-10);
  this.diry = random (10, width-10);
  this.dirX = 1;
  this.dirY = 1;
  this.edad = _edad;

  this.dibujarse = function() {
    if (this.vivo == 1) {
      if (this.edad < 5) {
        image(bear3, this.x, this.y, this.tamano, this.tamano); //hijo
      } else {
        if (this.genero == 1) {
          image(bear1, this.x, this.y, this.tamano, this.tamano); //masculino
        } else if (this.genero == 2) {
          image(bear2, this.x, this.y, this.tamano, this.tamano); //femenino
        }            
      }
    }
  }

  this.moverse = function() {
    this.x = this.x + this.dirX;
    this.y = this.y + this.dirY;
    
      if(this.x >= LIMITEOSOX2 || this.x <= LIMITEOSOX1) { //para cuando sale del limite de X
      this.dirX = this.dirX * -1;
    }
        
    if(this.y >= LIMITEOSOY2 || this.y <= LIMITEOSOY1) { //para cuando sale del limite de Y
       this.dirY = this.dirY * -1;
    }
  }

  this.crecer = function() {
    this.edad = this.edad + 2;
    if(this.edad > 10) {
      this.morirse(); 
    }
  }

  this.morirse = function() {
    this.vivo = 0;
  }
}

function Salmon(_genero) { 
  this.x = random(LIMITESALX1, LIMITESALX2);
  this.y = random(LIMITESALY1, LIMITESALY2);
  this.tamano = 30;
  this.genero = _genero;
  this.vivo = 1;
  this.dirx = random (20, width-10);
  this.diry = random (20, width-10);
  this.dirX = 1;
  this.dirY = 1;
  
  this.dibujarse = function() {
    if (this.vivo == 1) {
      if (this.genero == 1) {
        image(salmon1, this.x, this.y, this.tamano, this.tamano); //masculino
      } else if (this.genero == 2) {
        image(salmon2, this.x, this.y, this.tamano, this.tamano); //femenino
      } else { 
        noStroke();
        fill(255, 190, 190);
  		      ellipse(this.x, this.y, this.tamano/3, this.tamano/3); //hijo
      }
      
    }
  }

  this.moverse = function() {
    this.x = this.x + this.dirX;
    this.y = this.y + this.dirY;
    
      if(this.x >= LIMITESALX2 || this.x <= LIMITESALX1) { //para cuando sale del limite de X
      this.dirX = this.dirX * -1;
    }
        
    if(this.y >= LIMITESALY2 || this.y <= LIMITESALY1) { //para cuando sale del limite de Y
       this.dirY = this.dirY * -1;
    }
  }

  this.crecer = function() {
    this.tamano = this.tamano+10;
  }

  this.morirse = function() {
    this.vivo = 0;
  }
}

function Arenque() {
  this.x = random(300, 340);
  this.y = random(250, 360);
  this.tamano = 15;
  this.vivo = 1;
  this.dir = 1;
	
	this.LIMITEX1 = 300;
  this.LIMITEX2 = 340;
  this.LIMITEY1 = 250;
  this.LIMITEY2 = 350;
	
  this.dibujarse = function() {
    if (this.vivo == 1) {
     image(arenque, this.x, this.y, this.tamano, this.tamano); //masculino
    }
  }

  this.moverse = function() {
    this.x = this.x + random(0, 2) * this.dir;
    this.y = this.y + random(0, 2) * this.dir;
    
    if(this.y > this.LIMITEY2 || this.y < this.LIMITEY1) { //para cuando sale del limite de Y
      this.dir = this.dir * -1;
      this.x = random(this.LIMITEX1, this.LIMITEX2);
      this.y = random(this.LIMITEY1, this.LIMITEY2);
    }
    if(this.x > this.LIMITEX2 || this.x < this.LIMITEX1) { //para cuando sale del limite de X
      this.dir = this.dir * -1;
      this.x = random(this.LIMITEX1, this.LIMITEX2);
      this.y = random(this.LIMITEY1, this.LIMITEY2);
    }
    
  }

  this.crecer = function() {
    this.tamano = this.tamano+10;
  }

  this.morirse = function() {
    this.vivo = 0;
  }

  }

function ArenqueSur() {
  this.x = random(300, 340);
  this.y = random(250, 360);
  this.tamano = 20;
  this.vivo = 1;
  this.dir = 1;
	this.LIMITEX1 = 500;
  this.LIMITEX2 = 600;
  this.LIMITEY1 = 1000;
  this.LIMITEY2 = 1300;

	
  this.dibujarse = function() {
    if (this.vivo == 1) {
     image(arenque, this.x, this.y, this.tamano, this.tamano); //masculino
    }
  }

  this.moverse = function() {
    this.x = this.x + random(0, 2) * this.dir;
    this.y = this.y + random(0, 2) * this.dir;
    
    if(this.y > this.LIMITEY2 || this.y < this.LIMITEY1) { //para cuando sale del limite de Y
      this.dir = this.dir * -1;
      this.x = random(this.LIMITEX1, this.LIMITEX2);
      this.y = random(this.LIMITEY1, this.LIMITEY2);
    }
    if(this.x > this.LIMITEX2 || this.x < this.LIMITEX1) { //para cuando sale del limite de X
      this.dir = this.dir * -1;
      this.x = random(this.LIMITEX1, this.LIMITEX2);
      this.y = random(this.LIMITEY1, this.LIMITEY2);
    }
    
  }

  this.crecer = function() {
    this.tamano = this.tamano+10;
  }

  this.morirse = function() {
    this.vivo = 0;
  }

  }


  function Pinguino(_genero, _edad) {
  this.x = random(LIMITEPINX1, LIMITEPINX2);
  this.y = random(LIMITEPINY1, LIMITEPINY2);
  this.tamano = 70;
  this.genero = _genero;
  this.dirx = random (10, width-10);
  this.diry = random (10, width-10);
  this.dirX = 1;
  this.dirY = 1;
	this.vivo = 1;

  this.edad = _edad;

  this.dibujarse = function() {
    if (this.vivo == 1) {
      if (this.edad < 5) {
        image(pinguino3, this.x, this.y, this.tamano-40, this.tamano-40); //hijo
      } else {
        if (this.genero == 1) {
          image(pinguino1, this.x, this.y, this.tamano, this.tamano); //masculino
        } else if (this.genero == 2) {
          image(pinguino2, this.x, this.y, this.tamano, this.tamano); //femenino
        }            
      }
    }
  }

  this.moverse = function() {
    this.x = this.x + this.dirX;
    this.y = this.y + this.dirY;
    
    if(this.x >= LIMITEPINX2 || this.x <= LIMITEPINX1) { //para cuando sale del limite de X
      this.dirX = this.dirX * -1;
    }
    
    if(this.y >= LIMITEPINY2 || this.y <= LIMITEPINY1) { //para cuando sale del limite de Y
       this.dirY = this.dirY * -1;
    }
  }

  this.crecer = function() {
    this.edad = this.edad + 2;
    if(this.edad > 10) {
      this.morirse(); 
    }
  }

  this.morirse = function() {
    this.vivo = 0;
  }
 }


function Beaver(_genero, _edad) {
  this.x = random(LIMITEBEAX1, LIMITEBEAX2);
  this.y = random(LIMITEBEAY1, LIMITEBEAY2);
  this.tamano = 40;
  this.genero = _genero;
  this.vivo = 1;
  this.dirx = random (10, width-10);
  this.diry = random (10, width-10);
  this.dirX = 1;
  this.dirY = 1;
  this.edad = _edad;

  this.dibujarse = function() {
    if (this.vivo == 1) {
      if (this.edad < 5) {
        image(beaver3, this.x, this.y, this.tamano-10, this.tamano-10); //hijo
      } else {
        if (this.genero == 1) {
          image(beaver1, this.x, this.y, this.tamano, this.tamano); //masculino
        } else if (this.genero == 2) {
          image(beaver2, this.x, this.y, this.tamano, this.tamano); //femenino
        }            
      }
    }
  }

  this.moverse = function() {
    
    this.x = this.x + this.dirX;
    this.y = this.y + this.dirY;
    
          if(this.x >= LIMITEBEAX2 || this.x <= LIMITEBEAX1) { //para cuando sale del limite de X
      this.dirX = this.dirX * -1;
    }
        
    if(this.y >= LIMITEBEAY2 || this.y <= LIMITEBEAY1) { //para cuando sale del limite de Y
       this.dirY = this.dirY * -1;
    }
  }


  this.crecer = function() {
    this.edad = this.edad + 2;
    if(this.edad > 10) {
      this.morirse(); 
    }
  }

  this.morirse = function() {
  this.vivo = 0;
  }
}


function Rama() {
  this.x = random(200, 330);
  this.y = random(170, 300);
  this.tamano = 30;
  this.vivo = 1;
  	

	
  this.dibujarse = function() {
    if (this.vivo == 1) {
     image(rama, this.x, this.y, this.tamano, this.tamano); //masculino
    }
  }

  this.morirse = function() {
    this.vivo = 0;
  }

}


