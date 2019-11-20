let vell = 2;
let fall = 1;
let rectY = 200;
let move = 200;
let backColor = 0;
let bottom = 0;
var x = 50;
var y = 600;
var w = 150;
var h = 80;
var presed = 1;
var check = false;
function setup() 
{
  createCanvas(600, 700);
}

function draw()
{
 background(255);
 rect(x,y,w,h);
  rect(100,100,400,400);
  ellipse(500,640,150,100);
 if(mouseIsPressed)
 {
  if(mouseX>x && mouseX <x+w && mouseY>y && mouseY <y+h)
  {
    if(check == false && presed == 2)
      {
        check = true;
        
      }
      else if (check == true)
      {
        
        check = false;
      }
  }
 } 
  if(mouseIsPressed)
  {
    if(mouseX>500-75 && mouseX <500+75 && mouseY>640-50 && mouseY <640+50)
    {
      if(presed == 1)
      {
        fill(255,0,0);
        presed = 2;
        
      }
      else if (presed == 2)
      {
        fill(255);
        presed = 1;
        check = false;
      }
     //do stuff 
    }
 } 
  if (check == true)
  {
    fill(bottom);
  rect(100, 400, 400,100);
  fill(255,255,0);
  ellipse(move, rectY, 50, 50);
  fill(255,0,0);
  ellipse(move, rectY, 40, 40);
  fill(255,200,0,160);
  ellipse(move, rectY, 40, 40);
 
  }
   
  
  
  //Math
  
  if(rectY != 403)
  {
    rectY += fall;
  }
  else if(move < 130)
  {
    move = 130;
  }
  else if(move > 475)
  {
    move = 475;
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
