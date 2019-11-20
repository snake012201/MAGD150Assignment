function setup() {
  let sizew = 400;
  let sizeh = 400;
  createCanvas(sizew, sizeh);
}

function draw() {
  //Valuse
  print("background Valuses "+mouseX, mouseY/mouseX, mouseY);
  //Function
  background(mouseX, mouseY/mouseX, mouseY);
  //Valuse
  print("fill Valuses " + mouseX, mouseY);
   //Function
  fill(mouseX, mouseY, 0);
  //Valuse
  print( "ellipse Valuse "+mouseX, mouseY, pmouseX, pmouseY);
   //Function
  ellipse(mouseX, mouseY, pmouseX, pmouseY);
  //Valuse
  print("fill Valuses " + mouseX, mouseY);
   //Function
  fill(0, mouseY, mouseX);
  //Valuse
  print( "ellipse Valuse "+mouseX/2, mouseY*2, pmouseX-pmouseY+3, pmouseY+pmouseX-3);
   //Function
  ellipse(mouseX/2, mouseY*2, pmouseX-pmouseY+3, pmouseY+pmouseX-3);
}