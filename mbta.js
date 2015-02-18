var MBTA = {
	lines: {
		'green':['haymarket', 'government center', 'park st', 'bolyston', 'arlington', 'copley'],
		'red': ['south station', 'park st', 'kendall', 'central', 'harvard', 'porter', 'davis', 'alewife'],
		'orange': ['north station', 'haymarket', 'park st', 'state', 'downtown crossing', 'chinatown', 'back bay', 'forest hills']
	},
	distance_to_park: function(line) {
		var current_line = this.lines[line],
		park = current_line.indexOf('park st');
		return function(stop) {
			var current_stop = current_line.indexOf(stop);
			return Math.abs(current_stop - park);
		}
	},
	prompts: function() {
		this.startingLine = prompt("Enter the Starting Line: ");
		this.startingStation = prompt("Enter the Starting Station");
		this.endingLine = prompt("Enter the Ending Line");
		this.endingStation =  prompt("Enter the Ending Station");
	},
	calc_distances: function(startLine, startStation, endLine, endStation) {
		this.start_parkst = this.distance_to_park(startLine);
		this.end_parkst = this.distance_to_park(endLine);
		this.first_stop = this.start_parkst(startStation);
		this.ending_stop = this.end_parkst(endStation);
		return this.first_stop + this.ending_stop;
	}
};

//MBTA.prompts();
//alert("The total number of stops for your travel is " + MBTA.calc_distances() + " stops.");
console.log(MBTA.calc_distances("green", "haymarket", "red", "porter"));
console.log(MBTA.calc_distances("orange", "haymarket", "red", "porter"));
console.log(MBTA.calc_distances("red", "porter", "green", "haymarket"));
console.log(MBTA.calc_distances("red", "porter", "orange", "back bay"));