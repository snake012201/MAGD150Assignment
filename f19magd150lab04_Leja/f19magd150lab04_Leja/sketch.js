let vell = 2;
let fall = 1;
let rectY = 0;
let move = 0;
let backColor = 0;
let bottom = 255;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(backColor);
  fill(bottom);
  rect(0, 300, 400,100);
  fill(255,255,0);
  ellipse(move, rectY, 50, 50);
  fill(255,0,0);
  ellipse(move, rectY, 40, 40);
  fill(255,200,0,160);
  ellipse(move, rectY, 40, 40);
  
  
  
  //Math
  
  if(rectY != 303)
  {
    rectY += fall;
  }
  else if(move < 10)
  {
    move = 10;
  }
  else if(move > 350)
  {
    move = 350;
  }
  if (keyIsDown(LEFT_ARROW)) 
  {
    move -= vell;
  } 
  else if (keyIsDown(RIGHT_ARROW)) 
  {
    move += vell;
    
  }
}
function keyPressed() 
{
  if(rectY >= 300) 
    if(keyCode === UP_ARROW)
    {
  {
    rectY -= vell*10;
  }
    }
  
  
}
function mousePressed() {
  if (backColor === 0) {
    backColor = 255;
    bottom = 0;
  } else {
    backColor = 0;
    bottom = 255;
  }
}

