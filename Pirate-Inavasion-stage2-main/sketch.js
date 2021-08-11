const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var canvas, angle, tower, ground, cannon;
var ball = []
var Boat
var cannonball

function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");

}

function setup() {
  canvas = createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  angle = -PI / 4;
  ground = new Ground(0, 590, 1200, 1);
  tower = new Tower(150, 350, 160, 310);
  cannon = new Cannon(140, 140, 100, 50, -PI/4);
  Boat = new boat(800,400,400,400)
  

}

function draw() {
  background(189);
  image(backgroundImg, 0, 0, width, height);

  
  

  Engine.update(engine);
  ground.display();
  

  cannon.display();
  tower.display();
  Boat.display()
  for(var i=0; i<ball.length; i++){
    showcannonball(ball[i],i)

  }
 
}

function keyReleased() {
  if (keyCode === DOWN_ARROW) {
    ball[ball.length-1].shoot()
  }
}
  function keyPressed() {
    if (keyCode === DOWN_ARROW) {
      cannonball=new CannonBall(140,140,40)
      ball.push(cannonball)
    }
  
  
  }
function showcannonball(ball,index){
ball.display()


}
