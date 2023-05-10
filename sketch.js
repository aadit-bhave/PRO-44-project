
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
const Constraint = Matter.Constraint;

var background, backgroundImg;
var tree;
var mango,mangoImg;
var pebble, pebbleImg;
var boy, boyImg,  boyThrowing, boyThrowingImg;
var ground;

var mango_con;
var rope;

function preload() {
  backgroundImg = loadImage("./assets/garden_background.avif");
  boyImg = loadImage("./assets/boy.png");
  boyThrowingImg = loadImage("./assets/boy_throwing.png");
  mangoImg = loadImage("./assets/mango-removebg-preview.png")
}

function setup() {
    canW = windowWidth;
    canH = windowHeight;
    createCanvas(canW,canH);
  
  boy = createSprite(width/2+300,height/2+150,200,200);
  boy.addImage("boy" ,boyImg);
  boy.addImage( "boyThrowing", boyThrowingImg)


  engine = Engine.create();
  world = engine.world;
  


  tree = new Tree(width/2-300,height/2,400,500);

  mango = createSprite(width/2-265,height/2+15,10,10);
  mango.addImage("mango",mangoImg);
  mango.scale=0.25
  

  ground = new Ground(width/2,height/2+300,width, 20);

  
}


function draw() 
{
  background(backgroundImg);
 // Engine.update(engine);
  
  tree.display();

  

  if(keyDown("space")) {

  pebble = new Pebble(width/2+200,height/2+150, 150,150);
  pebble.display();

  console.log('123')

    boy.changeImage("boyThrowing" ,boyThrowingImg);

    //pebble.force();

    mango.velocityY += 8;

  }

if(mango.y >= height/2+300) {
      mango.velocityY = 0;
      console.log('hi')
    }

  drawSprites()

}

