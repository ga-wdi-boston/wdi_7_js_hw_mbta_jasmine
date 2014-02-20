var MBTA = {
	Trip: function(starting_line, starting_station, ending_line, ending_station){
		this.starting_line = starting_line;
		this.starting_station = starting_station;
		this.ending_line = ending_line;
		this.ending_station =  ending_station;
		this.intersection = 'park st';
	},
	lines: {
  	'green':['haymarket', 'government center', 'park st', 'bolyston', 'arlington', 'copley'],
  	'red': ['south station', 'park st', 'kendall', 'central', 'harvard', 'porter', 'davis', 'alewife'],
  	'orange': ['north station', 'haymarket', 'park st', 'state', 'downtown crossing', 'chinatown', 'back bay', 'forest hills']
	}
	// defineIndex: function() {
	// 	this.start_index = this.findIndex(this.starting_line, this.starting_station);
	// 	this.end_index = this.findIndex(this.ending_line, this.ending_station);
	// 	this.start_park = this.findIndex(this.startingLine, this.intersection);
	// 	this.end_park = this.findIndex(this.ending_line, this.intersection);
	// }

};


MBTA.Trip.prototype.findIndex = function(line, stop){
	return MBTA.lines[line].indexOf(stop);
};

MBTA.Trip.prototype.defineIndex = function() {
	this.start_index = this.findIndex(this.starting_line, this.starting_station);
	this.end_index = this.findIndex(this.ending_line, this.ending_station);
	this.start_park = this.findIndex(this.starting_line, this.intersection);
	this.end_park = this.findIndex(this.ending_line, this.intersection);
}

// MBTA.defineTrip();
// MBTA.defineIndex();


trip = new MBTA.Trip('red', 'porter', 'orange', 'back bay');
trip.defineIndex();

//Compute total stops
var stops = 0;
if (trip.starting_line === trip.ending_line) {
	stops = Math.abs(trip.start_index - trip.end_index);
} else {
	stops += Math.abs((trip.start_index - trip.start_park));
	stops += Math.abs((trip.end_index - trip.end_park));
}

// alert total stops
alert('You are going to have to make ' + stops + ' stops.');



