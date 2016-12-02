function Platform(distance) {

	console.log("Platform");

	this.bottom = 270;
	this.x = width + distance;
	this.w = 400;
	this.speed = 2.5;

	this.show = function() {
		fill(255, 150);
		noStroke();
		rect(this.x, this.bottom, this.w, 20);
	}

	this.update = function() {
		this.x -= this.speed;
	}
}