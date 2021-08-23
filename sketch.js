var garden,rabbit;
var gardenImg,rabbitImg;
var apple,leaves;
var appleImg,leavesImg;
var score;
var edges;
var gameState;
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leavesImg = loadImage("orangeLeaf.png")
}
function createApple(){
  apple = createSprite(random(50,350),40,10,10);
  apple.addImage(appleImg);
  apple.scale = 0.08;
  apple.velocityY = 5;
}
function createLeaves(){
  leaves = createSprite(random(50,350),40,10,10)
  leaves.addImage(leavesImg);
  leaves.scale=0.08
  leaves.velocityY = 5;
  
}
function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

gameState = "playing"

}


function draw() {
  background(0);
  
  
  
  var select_sprites = Math.round(random(1,2));

  if(frameCount % 30 === 0){
    if(select_sprites === 1){
      createApple();
      }
    if(select_sprites === 2){
      createLeaves();
    }
  }
  edges = createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = mouseX;
  
  
    
    
  drawSprites();
}