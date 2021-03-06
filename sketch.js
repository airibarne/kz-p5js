function setup() {
	createCanvas(1024, 768);
}

function draw() {
	//general
	background(23,15,8);
	stroke(23,15,8);

	//center triangles
	fill(57,63,45);
	rect(472,0, 168, 93);

	fill(17,148,100);
	rect(592,0, 48, 45);

	fill(67,80,55);
	quad(0,322, 294,0, 387,0, 134,358);

	fill(81,166,142);
	triangle(230,478, 472,50, 820,510);

	fill(73,89,66);
	quad(472,50, 515,107, 476,180, 438,112);

	fill(99,135,111);
	quad(401,176, 438,112, 476,180, 446,232);

	fill(214,195,177);
	triangle(476,180, 345,394, 617,399);

	fill(90,157,131);
	quad(86,407, 387,0, 501,0, 230,478);

	fill(84,113,88);
	quad(218,342, 390,64, 387,0, 146,326);

	fill(90,157,131);
	quad(99,327, 146,326, 86,407, 64,390);
	strokeWeight(4);
	stroke(90,157,131);
	line(145,329, 88,405);
	stroke(23,15,8);
	strokeWeight(1);

	//top-right rectangles
	fill(31,141,112);
	quad(627,0, 891,0, 891,138, 646,140);

	fill(59,130,98);
	quad(646,140, 891,138, 891,172, 648,174);

	fill(54,83,65);
	quad(648,174, 891,172, 891,222, 654,222);

	fill(46,64,48);
	quad(654,222, 891,222, 891,274, 660,261);

	fill(46,59,48);
	quad(660,261, 891,274, 891,310, 660,298);

	noStroke()
	fill(104,141,112);
	quad(627,0, 766,0, 766,45, 634,45);
	stroke(23,15,8);

	fill(48,49,37);
	triangle(951,0, 1024,0, 1024,86);

	fill(94,107,97);
	quad(891,15, 1024,10, 1024,0, 891,0);

	//right triangles
	fill(45,62,45);
	//triangle(674,484, 670,380, 740,382);
	ellipse(714,426, 105);

	fill(45,82,61);
	triangle(640,510, 765,350, 874,508);

	fill(49,109,87);
	triangle(693,500, 783,374, 874,508);

	fill(4,148,128);
	triangle(744,502, 782,438, 825,507);

	//bottom rectangles
	noStroke();
	fill(62,142,125);
	rect(830,690, 55, 78);

	fill(81,99,85);
	rect(886,697, 110, 71)

	fill(48,49,37);
	rect(873,650, 120, 48)

	fill(96,163,142);
	quad(370,700, 470,718, 470,768, 370,768);
	quad(470,719, 504,720, 504,768, 470,768);
	quad(504,720, 544,714, 544,768, 504,768);

	fill(132,155,134);
	rect(544,704, 143, 64);

	fill(56,61,46);
	rect(687,695, 143, 73);

	fill(73,71,56);
	rect(370,700, 50, 68);

	fill(139,151,139);
	quad(886,750, 986,758, 986,768, 886,768);

	fill(93,148,109);
	rect(830,750, 55, 18);
	stroke(23,15,8);

	//right-bottom quads
	fill(54,72,53);
	quad(501,496, 534,494, 544,714, 504,720);

	fill(66,88,63);
	quad(534,494, 578,494, 578,711, 544,714);

	fill(68,94,74);
	quad(578,494, 624,495, 621,711, 578,711);

	fill(16,145,116);
	quad(624,495, 675,498, 687,704, 621,711);

	fill(52,135,116);
	quad(675,498, 724,501, 723,704, 687,704);
	
	fill(70,103,94);
	quad(724,501, 825,507, 830,700, 723,704);

	fill(70,127,115);
	quad(825,507, 874,508, 873,693, 830,700);

	//center-bottom triangles
	fill(58,66,42);
	triangle(254,699, 393,550, 470,718);

	fill(55,80,55);
	triangle(315,706, 410,590, 470,718);

	fill(70,98,76);
	triangle(366,712, 426,626, 470,718);

	noStroke();
	fill(48,49,37);
	quad(1005,226, 1024,226, 1024,768, 987,768);
	stroke(23,15,8);

	// left-bottom corner
	fill(71,101,79);
	triangle(0,322, 64,390, 99,327);
	
	fill(63,73,48);
	triangle(0,322, 64,390, 0,435);

	fill(75,104,82);
	quad(0,552, 0,435, 64,390, 132,444);

	fill(69,155,122);
	quad(9,543, 132,444, 147,466, 27,570);

	fill(69,155,122);
	quad(27,570, 147,466, 182,540, 74,642);

	fill(111,141,116);
	quad(74,642, 182,540, 218,620, 100,710);

	fill(107,153,135)
	triangle(-10,768, 218,620, 290,768);

	fill(103,172,145);
	triangle(0,738, 0,528, 74,642);

	fill(185,175,144);
	triangle(-24,768, 74,642, 132,768);

	

}

