const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var canvas, angle, tower, ground, cannon;




function preload() {
  bgImage = loadImage("assets/background.gif");

}

function setup() {
  canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);
  angle = 15;


  ground = new Ground(0, height - 1, width * 2, 1);
  tower = new Tower(140, 320, 160, 310);
  cannon = new Cannon(180,110,130,100,angle)
  cannonBall = new CannonBall(cannon.x , cannon.y );

}

function draw() {
  background(189);

  image(bgImage,0,0,width,height);
  
  Engine.update(engine);

  ground.display();
  
  tower.display();

  cannon.display();

  cannonBall.display();
  
 
}

function keyReleased(){
  if(keyCode === DOWN_ARROW ){
    cannonBall.shoot();
  }
}
