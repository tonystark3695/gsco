var  car,wall,speed,weight

function setup() {
  createCanvas(1400,400);
  speed=random(55,90)
  weight=random(400,1500)
  car=createSprite(50,200,50,50)
  wall=createSprite(1300,200,60,height/2)
  car.velocityX = map(speed,55,90,10,30)
  weight=random(30,52)
}

function draw() {
  background(255,255,255);  
  drawSprites();


  if(wall.x-car.x <=(car.width+wall.width)/2)
  {
car.velocityX=0
var deformation =0.5* weight* speed* speed/22509

if(deformation>500)
{
  wall.shapeColor=("red")
}
if(deformation<500 && deformation>300)
{
  car.shapeColor=("orange")
}
if(deformation<200)
{
  car.shapeColor=("yellow")
}
if(deformation<100){
  car.shapeColor=("green")
}
  }
}
