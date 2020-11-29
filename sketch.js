
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	ballImage = loadImage();
	TrashImage = loadImage();
}

function setup() {
	createCanvas(800, 800);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball1 = new Ball(280,780,40,40);
	ground = new Ground(600,height,20,20);
	trash = new Trash(580,780,80,80);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ball1.display();
  ground.display();
  trash.display();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
      Matter.body.applyForce,paperObject.body,paperObject.position,{x:85,y:-85}
	}
}
