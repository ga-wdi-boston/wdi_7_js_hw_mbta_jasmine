function Ride(startingLine, startingStation, endingLine, endingStation) {
	this.startingLine = startingLine;
	this.startingStation = startingStation;
	this.endingLine = endingLine;
	this.endingStation = endingStation;
};


var lines = {
  'green':["haymarket", "government center", "park st", "bolyston", "arlington", "copley"],
  'red': ["south station", "park st", "kendall", "central", "harvard", "porter", "davis", "alewife"],
  'orange': ["north station", "haymarket", "park st", "state", "downtown crossing", "chinatown", "back bay", "forest hills"]
	};


Ride.prototype.startIndex = function() {
	return (lines[this.startingLine].indexOf(this.startingStation));
};

Ride.prototype.intersectionStart = function() {
	return (lines[this.startingLine].indexOf("park st"));
};

Ride.prototype.startParkIndex = function() {
  return Math.abs(this.startIndex() - this.intersectionStart());
};

Ride.prototype.endIndex = function() {
	return (lines[this.endingLine].indexOf(this.endingStation));
};



// 		end_index = parseInt(this.lines[endingLine].indexOf(endingStation)),
// 		intersection_end_index = parseInt(this.lines[endingLine].indexOf('Park St')),
// 		end_park_index = (end_index - intersection_end_index),
// 		total_distance = (Math.abs(start_park_index) + Math.abs(end_park_index)),




	// alert("This distance is: " + total_distance + " stops.");
