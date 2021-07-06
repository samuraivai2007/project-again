var sea,moving;
var ship,sailing;
function preload(){

seaImg=loadImage("sea.png");
shipImg1=loadImage("ship-1.png,ship-2.png,ship-3.png,ship-4.png");
}

function setup(){
  createCanvas(400,400);

  
}

function draw() {
  background("blue");

  sea.velocityX=-5;

  spriteName.addImage(seaImg);

  if(sea.x<0){
    sea.x=sea.width/2;
  }
 
}