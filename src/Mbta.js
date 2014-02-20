var MBTA = {
	lines: {
  	'green':['haymarket', 'government center', 'park st', 'bolyston', 'arlington', 'copley'],
  	'red': ['south station', 'park st', 'kendall', 'central', 'harvard', 'porter', 'davis', 'alewife'],
  	'orange': ['north station', 'haymarket', 'park st', 'state', 'downtown crossing', 'chinatown', 'back bay', 'forest hills']
	},
	findIndex: function(lines, line, stop){
		return this.lines[line].indexOf(stop);
	},
	defineTrip: function() {
		this.startingLine = prompt("Enter the Starting Line: ");
		this.startingStation = prompt("Enter the Starting Station");
		this.endingLine = prompt("Enter the Ending Line");
		this.endingStation =  prompt("Enter the Ending Station");
		this.intersection = 'park st';
	},
	defineIndex: function() {
		this.start_index = this.findIndex(this.lines, this.startingLine, this.startingStation);
		this.end_index = this.findIndex(this.lines, this.endingLine, this.endingStation);
		this.start_park = this.findIndex(this.lines, this.startingLine, this.intersection);
		this.end_park = this.findIndex(this.lines, this.endingLine, this.intersection);
	}

};


MBTA.defineTrip();
MBTA.defineIndex();

// Compute total stops
var stops = 0;
if (MBTA.startingLine === MBTA.endingLine) {
	stops = Math.abs(MBTA.start_index - MBTA.end_index);
} else {
	stops += Math.abs((MBTA.start_index - MBTA.start_park));
	stops += Math.abs((MBTA.end_index - MBTA.end_park));
}

// alert total stops
alert('You are going to have to make ' + stops + ' stops.');



