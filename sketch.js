function setup() {
	createCanvas(windowWidth, windowHeight);
	background(0);
}

var x=50,y=50
var vx=3,vy=3
var delta=10

function draw() {
	
	
	delta=mouseX/50
	noStroke()
	fill(x+random(-delta,delta)*50,y+random(-delta,delta)*50,random(-delta,delta)*50);
	ellipse(x+random(-delta,delta), y, 100);
	x=x+vx
	y=y+vy
	vy+=0.2
	
	if(y>height){
  vy=-vy*0.7
  y=height
 }
	
}