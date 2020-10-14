var thickness,wall;
var bullet,speed,weight

function setup() {
  createCanvas(1600,400);
  
  bullet =createSprite(50, 200, 60, 10);
  bullet.shapeColor="white";
  bullet.velocityX=random(23,35);
  wall=createSprite(1200,200,50,height/2) ;
  wall.shapeColor=color(80,80,80);

  speed=random(223,321);
  thickness=random(22,83);
  weight=random(30,52);
  
}

function draw() {
  background(0);  


if(hascollided(bullet,wall)){
bullet.velocityX=0;
var damage= 0.5 * weight * speed * speed/(thickness *thickness *thickness );
}

  if(damage>10){
  wall.shapeColor=color(255,0,0);
  }
  
  if(damage<10){
    wall.shapeColor=color(0,255,0);
    }

drawSprites();
}

function hascollided(bullet,wall){

  bulletRightEdge=bullet.x + bullet.width;
  wallLeftEdge=wall.x
  if(bulletRightEdge>=wallLeftEdge){
   return true;
  }
  return false;
}