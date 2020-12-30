var END = 0;
var PLAY = 1;
var gameState = PLAY;
var sword;
var swordImg, alien1Img, alien2Img, fruit1Img;
var fruit2Img, fruit3Img, fruit4Img, gameOver_Img;
var fruitGroup, alienGroup;
var score = 0;
var stage = 1;
var fruit2Group;


function preload(){
  fruit1Img = loadImage("fruit1.png");
  fruit2Img = loadImage("fruit2.png");
  fruit3Img = loadImage("fruit3.png");
  fruit4Img = loadImage("fruit4.png");
  swordImg = loadImage("sword.png");
  gameOver_Img = loadImage("gameover.png");
  
  alien1Img = loadImage("alien1.png");
  alien2Img = loadImage("alien2.png");
  
  fruitGroup = new Group();
  alienGroup = new Group();
  fruit2Group = new Group();
}

function setup() {
  createCanvas(600, 400);
  sword = createSprite(200, 200, 20, 20);
  sword.scale = 0.6;
  sword.addImage(swordImg);
}


function draw(){
  background("lightblue");
  text("Score " +score, 300, 50);
  if(gameState === PLAY) {
    
  sword.y = World.mouseY;
  sword.x = World.mouseX;
  text("Stage: " +stage, 100, 50);
  
    if(score > 10) {
      fruit.velocityX = -16;
      stage = 2;
    }
    if(score > 20) {
      fruit.velocityX = -23;
      stage = 2;
    }
    if(score > 30) {
      fruit.velocityX = -28;
      stage = 2;
    }
    
  
  if(sword.isTouching(fruitGroup)) {
    fruitGroup.destroyEach();
    score = score+1;
  }
    
  if(sword.isTouching(fruit2Group)) {
    fruit2Group.destroyEach();
    score = score+1;
  }
  }
  if(sword.isTouching(alienGroup)) {
    gameState = END;
  }
  else if(gameState === END) {
    sword.addImage(gameOver_Img);
  }
  
  fruit();
  alien();
  drawSprites();
  
}

function fruit() {
  if(frameCount%80 === 0) {
    ran = Math.round(random(100, 300));
     var fruit = createSprite(600, ran, 20, 20);
     fruit.scale = 0.2;
    fruitGroup.add(fruit);
    fruit.velocityX = -14;
    r = Math.round(random(1, 4));
    if(r === 1) {
      fruit.addImage(fruit1Img);
    }
    if(r === 2) {
      fruit.addImage(fruit2Img);
    }
    if(r === 3) {
      fruit.addImage(fruit3Img);
    }
    if(r === 4) {
      fruit.addImage(fruit4Img);
    }
  }
  if(stage === 2 || stage > 2){
    if(frameCount%80 === 0) {
    ran2 = Math.round(random(50, 300));
     var fruit2 = createSprite(0, ran2, 20, 20);
     fruit2.scale = 0.2;
    fruit2Group.add(fruit2);
    fruit2.velocityX = 14;
    k = Math.round(random(1, 4));
    if(k === 1) {
      fruit2.addImage(fruit1Img);
    }
    if(k === 2) {
      fruit2.addImage(fruit2Img);
    }
    if(k === 3) {
      fruit2.addImage(fruit3Img);
    }
    if(k === 4) {
      fruit2.addImage(fruit4Img);
    }
  }
  }
  
}

function alien() {
  if(frameCount%150 === 0) {
  var alien = createSprite(600, ran, 20, 20);
     alienGroup.add(alien);
  dec = Math.round(random(1, 2));
  if(dec === 1) {
    alien.addImage(alien1Img);
  }
  if(dec === 2) {
    alien.addImage(alien2Img);
  }
    alien.velocityX = -9;
  }
 
}
