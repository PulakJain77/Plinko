const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ground;


function setup() {
  createCanvas(480,800);
  engine = Engine.create();
    world = engine.world;
  //createSprite(400, 200, 50, 50);

ground = new Ground(240,780,480,20);

}

function draw() {
  background(0);  
  

  Engine.update(engine);


 
ground.display();
 


}