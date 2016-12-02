function Coin(distance) {
	this.top = 100;
	this.x = width + distance;
	this.w = 20;
	this.h = 20;
	this.speed = 2.5;
	this.highlight = false;
	this.acc = createVector(0, 0);

	this.hits = function(person) {
		if ((person.pos.y - 50) < this.top + this.h) {
			if (person.pos.x + 20 > this.x && person.pos.x < this.x + this.w) {
				this.highlight = true;
				return true;
			}
		}
		return false;
	}

	this.passed = function(person) {
		if ((this.x + this.w) === person.pos.x) {
			return true;		
		}
	}

	this.show = function() {
		fill(244, 212, 66);
		if (this.highlight) {
			fill(244, 212, 66);
		}
		ellipse(this.x, this.top, 20, 20);
	}

	this.update = function() {
		this.x -= this.speed;
	}

	this.floataway = function() {
		this.top -= 4;
		fill(255, 0, 150, 50);
	}
}