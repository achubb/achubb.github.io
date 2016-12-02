var person;

// var obs1;
// var obs2;
// var obs3;

//var obstacles = [];

var hit = false;
var coinhit = false;

var score = 0;

function setup() {
	createCanvas(640, 360);
	person = new Person();
	level = new Level();
	// obs1 = obstacles.push(new Obstacle());
	// obs2 = obstacles.push(new Obstacle());
	// obs3 = obstacles.push(new Obstacle());
	// console.log(obstacles);

	// for (i = 0; i < level.obstacles.length; i++) {
	// 	score.push("hello" + i);
	// }

}

function keyPressed() {
	if (key == ' ') {
		var jump = createVector(0, -10);
		person.applyForce(jump);
	}
}


function draw() {
	background(51);

  	var gravity = createVector(0, 0.5);
	person.applyForce(gravity);

	for (var i = level.obstacles.length-1; i >= 0; i--) {
  		level.obstacles[i].show();
  		level.obstacles[i].update();

  		if (level.obstacles[i].hits(person)) {
  			hit = true;
  		}

  		if (level.obstacles[i].passed(person)) {
  			if (!hit) {
	  			score = score + 10;
	  		}
  		}

  		if (level.obstacles[i].offscreen()) {
  			level.obstacles.splice(i, 1);
  		}
	}

	for (var i = level.coins.length-1; i >= 0; i--) {
		level.coins[i].show();
		level.coins[i].update();

		if (level.coins[i].hits(person)) {
  			console.log("HIT");
  			coinhit = true;
  			level.coins[i].floataway();

		  			//score = score + 50;
		}

  		if (level.coins[i].passed(person)) {
  			if (coinhit) {
	  			score = score + 50;
	  			coinhit = false;
	  		}
  		}
	}

	person.update();
	person.edges();
	person.display();

	textSize(32);
	fill(255, 255, 255);
	noStroke();
	text(score, 10, 60);


	// if (frameCount % 100 == 0) {
	// 	obstacles.push(new Obstacle());
	// }

  // console.log(frameCount);
  //fill(255, 0, 100);
  //rect(400, height-50, 50, 50);
}
