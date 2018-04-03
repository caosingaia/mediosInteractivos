var bear1; //femenino
var bear2; //masculino
var bear3; //hijo
var bearDad;
var bearMom;
var bearSon = 0;
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
var LIMITEOSOX2 = 400;
var LIMITEOSOY1 = 270;
var LIMITEOSOY2 = 550;

var LIMITESALX1 = 280;
var LIMITESALX2 = 330;
var LIMITESALY1 = 170;
var LIMITESALY2 = 340;

var LIMITEPINX1 = 600;
var LIMITEPINX2 = 630;
var LIMITEPINY1 = 1000;
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
  
  bearDad = new Bear(1, 5);
  bearMom = new Bear(2, 5);
  
  salmonDad = new Salmon(1);
  salmonMom = new Salmon(2);
  
  pinguinoDad = new Pinguino(1, 5);
  pinguinoMom = new Pinguino(2, 5);
  
  beaverDad = new Beaver(1, 5);
  beaverMom = new Beaver(2, 5);
	
	arenque1 = new Arenque();
	arenque2 = new ArenqueSur();
	
	ramaFood = new Rama();
 
}

function draw() {
  
  image(Canada, -200, -400, 2820, 2100);
  image(rio, 250, 190, 198, 280);
  image(pine, 230, 180, 61.5, 120);
  image(pine2, 200, 140, 61.5, 120);
  image(pine, 170, 100, 61.5, 120);
  
  
  //Osos
  if (dist(bearDad.x, bearDad.y, bearMom.x, bearMom.y) < bearDad.tamano && 
    bearDad.vivo && bearMom.vivo && bearSon == 0) {
    bearSon = new Bear(2, 1);
  }

  bearDad.dibujarse();
  bearDad.moverse();
  bearMom.dibujarse();
  bearMom.moverse();
  
  if(bearSon != 0){
    bearSon.dibujarse(); 
    bearSon.moverse();
  }
  //End Osos
  //Salmones
  if (dist(salmonDad.x, salmonDad.y, salmonMom.x, salmonMom.y) < salmonDad.tamano/2 && 
    salmonDad.vivo && salmonMom.vivo && salmonSon == 0) {
    salmonSon = new Salmon(3);
  }

  salmonDad.dibujarse();
  salmonDad.moverse();
  salmonMom.dibujarse();
  salmonMom.moverse();
  
  if(salmonSon != 0){
    salmonSon.dibujarse(); 
    salmonSon.moverse();
  }
  //END Salmones
  //Pinguinos
   if (dist(pinguinoDad.x, pinguinoDad.y, pinguinoMom.x, pinguinoMom.y) < pinguinoDad.tamano && 
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
  }
  //END pinguinos
  //Beavers
  if (dist(beaverDad.x, beaverDad.y, beaverMom.x, beaverMom.y) < beaverDad.tamano && 
    beaverDad.vivo && beaverMom.vivo && beaverSon == 0) {
    beaverSon = new Beaver(2, 1);
  }
  
  beaverDad.dibujarse();
  beaverDad.moverse();
  beaverMom.dibujarse();
  beaverMom.moverse();
  
  if(beaverSon != 0){
    beaverSon.dibujarse(); 
    beaverSon.moverse();
  }
  //End Beavers
  
  
  //Arenque
  arenque1.dibujarse();
	arenque1.moverse();
	
	arenque2.dibujarse();
	arenque2.moverse();
  //END arenque
	
	ramaFood.dibujarse();
  
  //Simbiosis
  //bear eats salmon
  if (dist(bearDad.x, bearDad.y, salmonDad.x, salmonDad.y) < salmonDad.tamano/2 && 
    salmonDad.vivo && bearDad.vivo) {
      salmonDad.vivo = 0;
      bearDad.crecer();
  }
  if (dist(bearDad.x, bearDad.y, salmonMom.x, salmonMom.y) < salmonMom.tamano/2 && 
    salmonMom.vivo && bearDad.vivo) {//bearDad eats salmonDad
      salmonMom.vivo = 0;
      bearDad.crecer();
  }
  if (dist(bearDad.x, bearDad.y, salmonSon.x, salmonSon.y) < salmonSon.tamano/2 && 
    salmonSon.vivo && bearDad.vivo) {//bearDad eats salmonDad
      salmonSon.vivo = 0;
  	    bearDad.crecer();
  }
  if (dist(bearMom.x, bearMom.y, salmonDad.x, salmonDad.y) < salmonDad.tamano/2 && 
    salmonDad.vivo && bearMom.vivo) {//bearDad eats salmonDad
      salmonDad.vivo = 0;
      bearMom.crecer();
  }
  if (dist(bearMom.x, bearMom.y, salmonMom.x, salmonMom.y) < salmonMom.tamano/2 && 
    salmonMom.vivo && bearMom.vivo) {//bearDad eats salmonDad
      salmonMom.vivo = 0;
      bearMom.crecer();
  }
  if (dist(bearMom.x, bearMom.y, salmonSon.x, salmonSon.y) < salmonSon.tamano/2 && 
    salmonSon.vivo && bearMom.vivo) {//bearDad eats salmonDad
      salmonSon.vivo = 0;
      bearMom.crecer();
  }
  if (dist(bearSon.x, bearSon.y, salmonDad.x, salmonDad.y) < salmonDad.tamano/2 && 
    salmonDad.vivo && bearSon.vivo) {//bearDad eats salmonDad
      salmonDad.vivo = 0;
      bearSon.crecer();
  }
  if (dist(bearSon.x, bearSon.y, salmonMom.x, salmonMom.y) < salmonMom.tamano/2 && 
    salmonMom.vivo && bearSon.vivo) {//bearDad eats salmonDad
      salmonMom.vivo = 0;
      bearSon.crecer();
  }
  if (dist(bearSon.x, bearSon.y, salmonSon.x, salmonSon.y) < salmonSon.tamano/2 && 
    salmonSon.vivo && bearSon.vivo) {//bearDad eats salmonDad
      salmonSon.vivo = 0;
      bearSon.crecer();
  }
	
	//salmones eats arenque
  if (dist(salmonDad.x, salmonDad.y, arenque1.x, arenque1.y) < arenque1.tamano/2 && 
    salmonDad.vivo && arenque1.vivo) {
      arenque1.vivo = 0;
      salmonDad.crecer();
  }
	if (dist(salmonMom.x, salmonMom.y, arenque1.x, arenque1.y) < arenque1.tamano/2 && 
    salmonMom.vivo && arenque1.vivo) {
      arenque1.vivo = 0;
      salmonMom.crecer();
  }
	if (dist(salmonSon.x, salmonSon.y, arenque1.x, arenque1.y) < arenque1.tamano/2 && 
    salmonSon.vivo && arenque1.vivo) {
      arenque1.vivo = 0;
      salmonSon.crecer();
  }
	//pinguinos eats arenques
	if (dist(pinguinoDad.x, pinguinoDad.y, arenque2.x, arenque2.y) < arenque2.tamano/2 && 
    pinguinoDad.vivo && arenque2.vivo) {
      arenque2.vivo = 0;
      pinguinoDad.crecer();
  }
	if (dist(pinguinoMom.x, pinguinoMom.y, arenque2.x, arenque2.y) < arenque2.tamano/2 && 
    pinguinoMom.vivo && arenque2.vivo) {
      arenque2.vivo = 0;
      pinguinoMom.crecer();
  }
	if (dist(pinguinoSon.x, pinguinoSon.y, arenque2.x, arenque2.y) < arenque2.tamano/2 && 
    pinguinoSon.vivo && arenque2.vivo) {
      arenque2.vivo = 0;
      pinguinoSon.crecer();
  }
	
	//Castores eats ramas
	if (dist(beaverDad.x, beaverDad.y, ramaFood.x, ramaFood.y) < ramaFood.tamano/2 && 
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
  }
  //END simbiosis
  
  //print(mouseX + " " + mouseY);
  if (mouseIsPressed == true) {
    bearDad.x = mouseX;
    bearDad.y = mouseY;
  }
  
  
}

function Bear(_genero, _edad) {
  this.x = random(50, 700);
  this.y = random(200, 300);
  this.tamano = 70;
  this.genero = _genero;
  this.vivo = 1;
  this.dir = 1;
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
    this.x = this.x + random(0, 1) * this.dir;
    this.y = this.y + random(0, 1) * this.dir;
        
    if(this.y > LIMITEOSOY2 || this.y < LIMITEOSOY1) { //para cuando sale del limite de Y
      this.dir = this.dir * -1;
      this.x = random(LIMITEOSOX1, LIMITEOSOX2);
      this.y = random(LIMITEOSOY1, LIMITEOSOY2);
    }
    if(this.x > LIMITEOSOX2 || this.x < LIMITEOSOX1) { //para cuando sale del limite de X
      this.dir = this.dir * -1;
      this.x = random(LIMITEOSOX1, LIMITEOSOX2);
      this.y = random(LIMITEOSOY1, LIMITEOSOY2);
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
  this.x = random(300, 340);
  this.y = random(250, 360);
  this.tamano = 30;
  this.genero = _genero;
  this.vivo = 1;
  this.dir = 1;

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
    this.x = this.x + random(0, 2) * this.dir;
    this.y = this.y + random(0, 2) * this.dir;
        
    if(this.y > 350 || this.y < 250) { //para cuando sale del limite de Y
      this.dir = this.dir * -1;
      this.x = random(300, 340);
      this.y = random(250, 350);
    }
    if(this.x > 340 || this.x < 300) { //para cuando sale del limite de X
      this.dir = this.dir * -1;
      this.x = random(300, 340);
      this.y = random(250, 350);
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
	this.LIMITEX1 = 580;
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
  this.x = random(50, 700);
  this.y = random(200, 300);
  this.tamano = 70;
  this.genero = _genero;
  this.vivo = 1;
  this.dir = 1;
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
    this.x = this.x + random(0, 1) * this.dir;
    this.y = this.y + random(0, 1) * this.dir;
        
    if(this.y > LIMITEPINY2 || this.y < LIMITEPINY1) { //para cuando sale del limite de Y
      this.dir = this.dir * -1;
      this.x = random(LIMITEPINX1, LIMITEPINX2);
      this.y = random(LIMITEPINY1, LIMITEPINY2);
    }
    if(this.x > LIMITEPINX2 || this.x < LIMITEPINX1) { //para cuando sale del limite de X
      this.dir = this.dir * -1;
      this.x = random(LIMITEPINX1, LIMITEPINX2);
      this.y = random(LIMITEPINY1, LIMITEPINY2);
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
  this.x = random(50, 700);
  this.y = random(200, 300);
  this.tamano = 40;
  this.genero = _genero;
  this.vivo = 1;
  this.dir = 1;
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
    this.x = this.x + random(0, 1) * this.dir;
    this.y = this.y + random(0, 1) * this.dir;
        
    if(this.y > LIMITEBEAY2 || this.y < LIMITEBEAY1) { //para cuando sale del limite de Y
      this.dir = this.dir * -1;
      this.x = random(LIMITEBEAX1, LIMITEBEAX2);
      this.y = random(LIMITEBEAY1, LIMITEBEAY2);
    }
    if(this.x > LIMITEBEAX2 || this.x < LIMITEBEAX1) { //para cuando sale del limite de X
      this.dir = this.dir * -1;
      this.x = random(LIMITEBEAX1, LIMITEBEAX2);
      this.y = random(LIMITEBEAY1, LIMITEBEAY2);
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
  this.dir = 1;	

	
  this.dibujarse = function() {
    if (this.vivo == 1) {
     image(rama, this.x, this.y, this.tamano, this.tamano); //masculino
    }
  }

  this.morirse = function() {
    this.vivo = 0;
  }

}

