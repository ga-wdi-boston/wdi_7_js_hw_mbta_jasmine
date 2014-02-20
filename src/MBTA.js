// my work is based on the "solution" branch of wdi_7_js_lab_mbta

var MBTA = function(startingLine, startingStation, endingLine, endingStation) {
	this.lines = {
		'green':['haymarket', 'government center', 'park st', 'boylston', 'arlington', 'copley'],
		'red': ['south station', 'park st', 'kendall', 'central', 'harvard', 'porter', 'davis', 'alewife'],
		'orange': ['north station', 'haymarket', 'park st', 'state', 'downtown crossing', 'chinatown', 'back bay', 'forest hills']
	};
	this.startingLine = startingLine;
	this.startingStation = startingStation;
	this.endingLine = endingLine;
	this.endingStation = endingStation;
};

MBTA.prototype.distance_to_park_st = function(line, stop) {
	var current_line = this.lines[line], // array of stops
			index_of_park_st = current_line.indexOf('park st'),
			index_of_current_stop = current_line.indexOf(stop),
			distance = Math.abs(index_of_current_stop - index_of_park_st);
	return distance;
};

MBTA.prototype.distance_single_line = function(line, start_stop, end_stop) {
	var current_line = this.lines[line],
			index_of_start = current_line.indexOf(start_stop),
			index_of_end = current_line.indexOf(end_stop),
			distance = Math.abs(index_of_end - index_of_start);
	return distance;
};

MBTA.prototype.total_distance = function() {
	var distance_on_single = this.distance_single_line(this.startingLine, this.startingStation, this.endingStation),
	distance_with_transfer = this.distance_to_park_st(this.startingLine, this.startingStation) + this.distance_to_park_st(this.endingLine, this.endingStation);
	if (this.startingLine === this.endingLine) {
		return distance_on_single;
	}else if (this.startingLine !== this.endingLine) {
		return distance_with_transfer;
	};
};

var journey;
journey = new MBTA('red', 'alewife', 'orange', 'chinatown');
console.log(journey.total_distance());
