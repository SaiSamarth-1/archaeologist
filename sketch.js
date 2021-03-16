
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var hammer, ground, stone, rubber;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400, 690, 800, 20);

	hammer = new Hammer(350, 350, 100, 30, "orange");
	stone = new Stone(350, 400, 75, 75, "black");
	rubber = new Rubber(700, 400, 40, "blue");

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightBlue");
  
  drawSprites();

  ground.display();
  hammer.display();
  stone.display();
  rubber.display();
  
  console.log(hammer.body.position.y);
 
}



