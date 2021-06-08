const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies; // namespacing


var engine,world,ground;//our world



function setup() {
  createCanvas(500,500);

  engine = Engine.create();
  world = engine.world;

  var groundOptions = {// tuning of physics engine
    isStatic:true
  }

  ground = Bodies.rectangle(250,450,500,30,groundOptions);
  World.add(world,ground);
  
}

function draw() {
  background(0);
  Engine.update(engine); //adding gravity

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,500,30);
  
}