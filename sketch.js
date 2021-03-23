const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var shooter_img;
var chicken1;
var chicken_img;

function preload(){
  shooter_img = loadImage("shooter.png");
  //chicken_img = loadImage("chicken.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(390,175,250,10);
  stand2 = new Stand(700,300,200,10);
 
 
  //level one
  block1 = new Block(300,0,30,30);
  block2 = new Block(330,0,30,30);
  block3 = new Block(360,0,30,30);
  block4 = new Block(390,0,30,30);
  block5 = new Block(420,0,30,30);
  block6 = new Block(450,0,30,30);
  block7 = new Block(480,0,30,30);

  //level two
  block8 = new Block(330,0,30,30);
  block9 = new Block(360,0,30,30);
  block10 = new Block(390,0,30,30);
  block11 = new Block(420,0,30,30);
  block12 = new Block(450,0,30,30);

  //level three
  block13 = new Block(360,35,30,30);
  block14 = new Block(390,35,30,30);
  block15 = new Block(420,35,30,30);

  //top
  block16 = new Block(390,0,30,30);

  //set 2 for second stand
  //level one
  blocks1 = new Block(640,0,30,20);
  blocks2 = new Block(670,0,30,20);
  blocks3 = new Block(700,0,30,20);
  blocks4 = new Block(730,0,30,20);
  blocks5 = new Block(760,0,30,20);
  //level two
  blocks6 = new Block(670,0,30,20);
  blocks7 = new Block(700,0,30,20);
  blocks8 = new Block(730,0,30,20);
  //top
  blocks9 = new Block(700,0,30,20);

  //ball holder with slings
  ball = Bodies.circle(50,200,10);
  World.add(world,ball);
  //chicken1 = Bodies.circle(200, 300, 40);
  //World.add(world, chicken);

  slingShot = new Slingshot(this.ball,{x:100,y:200});

}
function draw() {
  background(26,140,145); 
 
  Engine.update(engine);
  textSize(10);
  fill("black");
  text("Hello there! You want to be in the millitary. As part of your training, you must learn to shoot accurately. Disingage the explosives by knocking them to the ground. Use the shooter to help! ",35,350);

  ground.display();
  stand1.display();
  stand2.display();
 
  strokeWeight(2);
  stroke(15);

  fill(48,22,7);
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

  fill(132,66,4);
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();

  fill(103,62,15);
  block13.display();
  block14.display();
  block15.display();

  fill(207,167,110);
  block16.display();

  fill(48,22,7);
  blocks1.display();
  blocks2.display();
  blocks3.display();
  blocks4.display();
  blocks5.display();

  fill(103,62,15);
  blocks6.display();
  blocks7.display();
  blocks8.display();

  fill(132,66,4)
  blocks9.display();

  fill("gold");
  imageMode(CENTER)
  image(shooter_img ,ball.position.x,ball.position.y,40,40);
 
  slingShot.display();

  
}
function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}