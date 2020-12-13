//NameSpacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, box2;
var ground;
function setup() {
  createCanvas(400,400);

  engine = Engine.create(); //creates a variable engine that we can control/manipulate
  world = engine.world;


  box1 = new Box(200, 300, 50, 50); //new =  new object (keyword)
  box2 = new Box(240, 100, 50, 100);
  ground = new Ground(200,390,400,20);

}

function draw() {
  background(0);  
  Engine.update(engine);

  box1.display();
  box2.display();
  ground.display();
}

/*
OOP
Class - DESIGN the objects
1. Properties
2. FUnctions
*/




























