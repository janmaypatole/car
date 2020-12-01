function setup(){


createCanvas(400,400);
 
car= createSprite( 394,140,20,50)
car.shapeColor = 'black';
car.velocityX = -20

wall  = createSprite(6,140,20,100)
wall.shapeColor = 'yellow'

}

function draw() {
  background('white');  
  if(bullet.x-wall.x<(bullet.width/3+wall.width/2)){
  wall.shapeColor = 'brown'
car.shapeColor = 'blue'  
car.velocityX = 0
}
  else{
    wall.shapColor = 'yellow'
    car.shapeColor = 'black'
   
  }
  drawSprites();
}


