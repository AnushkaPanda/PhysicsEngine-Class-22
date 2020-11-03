const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var world,engine;
var ball;
var ground;


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var ground_options ={
    isStatic:true
  }
  ground = Bodies.rectangle(200,360,200,40, ground_options)
  World.add(world, ground)
  var ball_option={
    restitution:1
  }
  ball = Bodies.circle(200,200,20,ball_option);
  World.add(world,ball)
}

function draw() {
  background(0); 
  Engine.update(engine);
  rectMode (CENTER) 
  //rect(200,200,50,50)
  rect(ground.position.x,ground.position.y, 400,40)
  ellipseMode(CENTER);
  ellipse(ball.position.x,ball.position.y,30)
}