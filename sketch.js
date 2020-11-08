var car, wall;
var speed, weight;
var choice;

function setup() {
  createCanvas(1600,400);
  
  speed = random(55, 90);
  weight = Math.round(random(400, 1500));

  car = createSprite(200, 200, 50, 50);
  

  wall = createSprite(1500, 200, 60, height/2);
  wall.shapeColor = color(80, 80, 80);
}

function draw() {
  background(0, 0, 0);  

  car.velocityX = speed;


  if(car.x-wall.x < (car.width+wall.width)/2 &&
     wall.x-car.x < (car.width+wall.width)/2){
    car.velocityX = 0;

    choice = 0.5*weight*speed*speed/22500;

    if(choice < 100){
      car.shapeColor = "green";
    } else if (choice > 100 && choice < 180){
      car.shapeColor = "yellow";
    } else if (choice > 180){
      car.shapeColor = "red";
    }
  }

  

  drawSprites();
}