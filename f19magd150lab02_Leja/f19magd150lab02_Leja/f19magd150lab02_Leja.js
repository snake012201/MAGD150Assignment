function setup() {
  createCanvas(800, 400);
  background('#000000');
  stroke('#ffff00');
  for (let i = 0; i < 400; i++) {
    point(random(800) ,random(400));
  }

}

function draw() {
  colorMode(RGB);

  fill(500, 500, 0);
  arc(50, 50, 80, 80, 0, PI + PI, CHORD);
  stroke('#000000');
   fill('#555555');
  triangle(130,175,400,240,400, 300)
  quad(400,300,400,120,650,120, 650, 300);
  fill('#ff8800');
  //quad(550,300,550,120,750,120, 750, 300);
    for (let i = 0; i < 400; i++) 
  {
    triangle(random(550,800) ,random(120,300),
    random(550,800) ,random(120,300),
  random(550,800) ,random(120,300),
   );
  }
  fill('#555555');
  quad(340,240,340,120,650,120, 550, 240);
  fill('#aaaaaa');
    beginShape(TRIANGLES);
vertex(130, 175);
vertex(340, 240);
vertex(340, 120);
endShape();
  fill('#0055');
  beginShape(TRIANGLES);
vertex(130, 175);
vertex(340, 120);
vertex(250, 175);
endShape();
  
  
}