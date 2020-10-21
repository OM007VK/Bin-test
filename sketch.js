
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin1, dustbin2, dustbin3;
var ball;
var platform;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 400);
    engine = Engine.create();
	world = engine.world;

	platform=createSprite(750,375,1500,15);
	platform.shapeColor = "yellow"

	dustbin1=createSprite(900,300,17,125);
	dustbin1.shapeColor = "white"
	dustbin2=createSprite(1100,300,17,125);
	dustbin2.shapeColor = "white"
	dustbin3=createSprite(1000,360,200,17);
	dustbin3.shapeColor = "white"

	ball=createSprite(200,200,40,40);
	ball.shapeColor = "red"

	Engine.run(engine); 
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  //if(keyDownWent(unescape))
    //{  
	//ball.velocityY = -12;
    //}
	ball.y=mouseY;
	ball.x=mouseX;
 
 
  drawSprites();
}