
function setup() {
  createCanvas(400,400);
  square = createSprite(200,200,20,20)
}

function draw() 
{
  background("yellow");

  if(keyIsDown(DOWN_ARROW))
  {
    background("red");
  }
     
  if(keyIsDown(UP_ARROW))
  {
    background("blue");
  }
  
  if(keyIsDown(RIGHT_ARROW))
  {
    background("orange");
  }

  if(keyIsDown(LEFT_ARROW))
  {
    background("green");
  }







  drawSprites()
}




