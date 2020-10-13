var bullet,wall;

var speed,weight;

var thickness;

var bullet1,wall1;





function setup() {

 createCanvas(1280,400);

 bullet = createSprite(80, 200, 10, 10);

 bullet.shapeColor = "white";

 wall = createSprite(1200,200,10,60);

 wall.shapeColor = "grey";

 bullet1 = createSprite(80,200,10,10);

 bullet1.shapeColor = "white";

 wall1 = createSprite(1200,200,10,60);

 wall1.shapeColor = "grey";



}



function draw() {

 background(0);

 speed = random(55,90);

 weight = random(400,1500);

 thickness = random(22,83);





 car.velocityX = speed;

 

 if(wall.x-car < (car.width+wall.width)/2){

  car.velocityX = 0;

  var deformation = 0.5 * weight * speed * speed/22509;

  if(deformation > 180){

   car.shapeColor = Color(255,0,0);

  }

  if(deformation < 180 && deformation > 100)

  {

   car.shapeColor = Color(230,230,0);

  }

  if(deformation < 100)

  {

   car.shapeColor = Color(0,255,0);

  }

 }

   drawSprites();

}

function hasCollided(bullet1,wall1)

{

 bulletRightEdge = bullet1.x + bullet1.width;

 wallLeftEdge = wall1.X;

 if(bulletRightEdge>=wallLeftEdge)

 {

  return true;

 }

  return false;

 

  if(hasCollided(bullet,wall))

  {

   bullet.velocityX = 0;

   var damage = 0.5 * weight * speed/(thickness *thickness);



   if(damage > 10)

   {

​    wall.shapeColor = Color(255,0,0);

   }





   if(damage<10)

   {

​    wall.shapeColor = Color(0,255,0);

   }

  }

}