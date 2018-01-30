
function setup() { 
  createCanvas(540, 600);
} 

function draw() { 
  background(241, 230, 166);
  ellipseMode(CENTER);  // circulo calculado centro
  
  noStroke(); // sin linea
  fill(222, 205, 186, 100);  // Color circulo beige
ellipse(250, 250, 630, 670);  // Circulo  beige
  
  noStroke(); // sin linea
  fill(236, 192, 61);  // Color circulo amarillo
ellipse(392, 480, 280, 280);  // Circulo  amarillo
  
  noStroke(); // sin linea
  fill(180, 76, 59);  // Color circulo rojo grande
ellipse(250, 250, 500, 500);  // Circulo rojo grande
  
  noStroke(); // sin linea
  fill(220, 100, 85);  // Color circulo rojo ii
ellipse(250, 250, 470, 470);  // Circulo rojo ii
  
  stroke(0); //linea negra circulo rojo
  strokeWeight(.5); // Tamaño pincel
  fill(195, 0, 0);  // Color circulo rojo
ellipse(392, 480, 160, 160);  // Circulo rojo
  
  noStroke(); //sin linea
  fill(0);  // Color circulo negro
ellipse(250, 250, 420, 420);  // Circulo negro
  
  stroke(126, 91, 149); //linea lila
  strokeWeight(1); // Tamaño pincel
    fill(77, 39, 104);  // Color circulo morado claro
ellipse(250, 250, 200, 200);  // Circulo morado claro
  

  
  noStroke(); // sin linea
  fill(50, 21, 72, 40, 100);  // Color circulo morado oscuro
ellipse(250, 250, 100, 100);  // Circulo morado oscuro
  
  
  
  stroke(0); //borde
  strokeWeight(3); // Tamaño pincel
  fill(188, 214, 215);
  beginShape(); // Iniciar una figura
vertex(452,605); // Crear un vertice
vertex(545,492);
  vertex(545,605);
  endShape(CLOSE); // Cerrar una figura
  
  
  stroke(236, 192, 61); //linea amarilla circulo borde
  strokeWeight(8); // Tamaño pincel
  noFill();
ellipse(558, 598, 120, 120);  // Circulo borde2
  
  stroke(0); //linea negra circulo borde
  strokeWeight(8); // Tamaño pincel
  noFill();
ellipse(562, 605, 120, 120);  // Circulo borde1
  
   
  
  
}
