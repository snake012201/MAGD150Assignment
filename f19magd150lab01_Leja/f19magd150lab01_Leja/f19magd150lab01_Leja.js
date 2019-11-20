function setup() 
{
  
	createCanvas(300, 300);
	background(100);
}

function draw() 
{
	//Roof/Upper Floor
	 	strokeWeight(2), strokeJoin(MITER);
	 	
	 	line(60, 40, 10, 95);//front tri left side
	 	line(10, 95, 85, 95);//front tri bottom
	 	

	 	strokeWeight(2), noFill(), strokeJoin(ROUND), fill(500);

	 
	 	beginShape();
		 	vertex(85,95);
		 	vertex(60, 40);
		 	vertex(100, 20);
		 	vertex(130, 60);
	 	endShape();
 	//Base/Bottom Floor
	 	//rightwall
		 	rect(10, 95, 75, 100);
		 	fill(500);
		 	beginShape();
			 	vertex(130,60);
			 	vertex(130,160);
			 	vertex(85,195);
			 	vertex(85,95);
		 	endShape();
	
 	//Decore
	 	//door
		 	fill(80);
		 	rect(35, 170, 10, 25);
	 	//door handle
	 		strokeWeight(2);
	 		point(43, 182);
	 	//elliptical window
	 		strokeWeight(2), fill(1000);
			 	ellipse(30, 130, 15, 20);
				 	line(30, 120, 30, 140);
				 	line(23, 130, 37, 130);
			 	ellipse(50, 130, 15, 20);
				 	line(50, 120, 50, 140);
				 	line(43, 130, 57, 130);
			 	ellipse(50, 75, 15, 20);
				 	line(50, 65, 50, 85);
				 	line(43, 75, 57, 75);
	 	//rectangular window
		 	rect(55, 170, 15, 12);
			 	line(62,170,62,182);
			 	line(55,176,70,176);
	 	//divider right first and second floor
	 	strokeWeight(2);
	 		line(85, 95, 130, 60);
}