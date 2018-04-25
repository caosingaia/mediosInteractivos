var s;
var scl = 60;
var ambient;


var cenital;
var man;
var food;
var currentFood = 0;

var sounds = [];
var foodArray = [];

function preload() {
  
  ambient = loadSound('steps2.wav');
  sounds[0] = loadSound("assets/almuerzo-01.wav");
  sounds[1] = loadSound("assets/almuerzo-02.wav");
  sounds[2] = loadSound("assets/almuerzo-03.wav");
  sounds[3] = loadSound("assets/almuerzo-04.wav");
  sounds[4] = loadSound("assets/almuerzo-05.wav");
  sounds[5] = loadSound("assets/almuerzo-06.wav");
  sounds[6] = loadSound("assets/almuerzo-07.wav");
  sounds[7] = loadSound("assets/almuerzo-08.wav");
  sounds[8] = loadSound("assets/almuerzo-09.wav");
  sounds[9] = loadSound("assets/luciana-01.wav");
  sounds[10] = loadSound("assets/luciana-02.wav");
  sounds[11] = loadSound("assets/luciana-03.wav");
  sounds[12] = loadSound("assets/luciana-04.wav");
  sounds[13] = loadSound("assets/luciana-05.wav");
  sounds[14] = loadSound("assets/otro2.wav");
  sounds[15] = loadSound("assets/otro3.wav");
  sounds[16] = loadSound("assets/otro.mp3");
  sounds[17] = loadSound("assets/otro4.wav");
  sounds[18] = loadSound("assets/otro5.wav");
  sounds[19] = loadSound("assets/extra.mp4");
  sounds[20] = loadSound("assets/extra2.mp4");
  sounds[21] = loadSound("assets/extra3.mp4");
  sounds[22] = loadSound("assets/extra4.mp4");
  sounds[23] = loadSound("assets/extra5.mp4");
  sounds[24] = loadSound("assets/extra6.mp4");
  
  
  cenital = loadImage("assets/Cenital.jpg");
  man = loadImage("assets/man.png");
  foodArray[0] = loadImage("assets/food.gif");
  foodArray[1] = loadImage("assets/food1.gif");
  foodArray[2] = loadImage("assets/food2.gif");
  foodArray[3] = loadImage("assets/food.png");
  foodArray[4] = loadImage("assets/food2.png");
  foodArray[5] = loadImage("assets/food7.gif");
  foodArray[6] = loadImage("assets/food4.gif");
  foodArray[7] = loadImage("assets/food5.png");
  foodArray[8] = loadImage("assets/food3.gif");
  foodArray[9] = loadImage("assets/food7.png");
  foodArray[10] = loadImage("assets/food8.png");
}


function keyPressed() {
  if (keyCode === UP_ARROW) {
    s.dir(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    s.dir(0, 1);
  } else if (keyCode === RIGHT_ARROW) {
    s.dir(1, 0);
  } else if (keyCode === LEFT_ARROW) {
    s.dir(-1, 0);
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  s = new Snake();
  frameRate(6);
  pickLocation();
  
  ambient.loop();
 
}

function pickLocation() {
 var cols = floor (width/scl);
 var rows = floor (height/scl);
 food = createVector(floor(random(cols)), floor(random(rows)));
 food.mult(scl);
}



function draw() {
  background(0);

  image(cenital, 0, 0, windowWidth, windowHeight);

  if (s.eat(food)){
    pickLocation();  
  }
  s.death();
  s.update();
  s.show();
  image(foodArray[currentFood], food.x, food.y, scl, scl);
} 
  
function Snake() {
  this.x = 0;
  this.y = 0;
  this.xspeed = 1;
  this.yspeed = 0;
  this.total = 0;
  this.tail = [];
  
  this.eat = function(pos) {
    var d = dist(this.x, this.y, pos.x, pos.y);
    if (d < 100 ) {
      this.total++;
      for(var i= 0; i<sounds.length; i++) sounds[i].stop();
      sounds[floor(random(0, sounds.length - 1))].play();
      currentFood = floor(random(0, foodArray.length - 1));
      return true;
    } else {
      return false; 
    }
  }
  
  this.dir = function(x, y) {
    this.xspeed = x;
    this.yspeed = y;
  }

  this.death = function() {
    for (var i = 0; i < this.tail.length; i++) {
      var pos = this.tail[i];
      var d = dist(this.x, this.y, pos.x, pos.y);
      if (d < 1) {
        console.log('starting over');
        this.total = 0;
        this.tail = [];
      }
    }
  }
   
   
   
  this.update = function() {
     
    for (var i = 0; i < this.tail.length - 1; i++) {
      this.tail[i] = this.tail[i + 1];
    }
    if (this.total >= 1) {
      this.tail[this.total - 1] = createVector(this.x, this.y);
    }
    
    this.x = this.x + this.xspeed*scl;
    this.y = this.y + this.yspeed*scl;
     
    this.x = constrain(this.x, 0, width - scl);
    this.y = constrain(this.y, 0, height - scl);
     
  }
  
  this.show = function() {
      
    for (var i = 0; i < this.tail.length; i++) {  
      ellipseMode(CORNER);
      noStroke();
      fill(0, 0, 0, 120);
      ellipse(this.tail[i].x, this.tail[i].y, scl, scl);
      image(man, this.tail[i].x+5, this.tail[i].y+5, scl-10, scl-10);
    }
      
    ellipseMode(CORNER);
    noStroke();
    fill(0, 0, 0, 120);
    ellipse(this.x, this.y, scl, scl);
    image(man, this.x+5, this.y+5, scl-10, scl-10);  
  }
}


   