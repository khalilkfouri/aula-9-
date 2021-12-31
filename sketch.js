var block;
function setup() {
  createCanvas(500,500);
  block = createSprite(250,250,10,10)
  block.shapeColor =color("lightgreen")
}

function draw() 
{
  background(30);
  if (keyDown("down")){
  //  block.y = block.y + 2
  background("blue")
  }
  if (keyDown("up")){
    background("green")
    }
    if (keyDown("left")){
      background("red")
      }
      if (keyDown("right")){
        background("yellow")
        }
  drawSprites();
}




