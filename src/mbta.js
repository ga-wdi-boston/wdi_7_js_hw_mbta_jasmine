var MBTA = {
	 lines: {
	  'green':['haymarket', 'government center', 'park st', 'boylston', 'arlington', 'copley'],
	  'red': ['south station', 'park st', 'kendall', 'central', 'harvard', 'porter', 'davis', 'alewife'],
	  'orange': ['north station', 'haymarket', 'park st', 'state', 'downtown crossing', 'chinatown', 'back bay', 'forest hills']
	},

	Route: function(startingLine, startingStation, endingLine, endingStation) {
		this.startingLine;
		this.startingStation;
		this.endingLine;
		this.endingStation;
	},

	MBTA.Route.prototype.distance_same_line = function () {
		var	this.startingLine,
			this.startingStation,
			this.endingStation,
		return enter_exit_same_line;
	},

	MBTA.Route.prototype.distance_different_lines = function () {
		var	this.startingLine,
			this.startingStation,
			this.endingStation,
		return enter_exit_different_lines;

	},

	enter_exit_same_line: function(line, startingStation, endingStation) {
		var stops_array,
				switch_one,
				switch_two;
		this.stops_array = this.lines[line];
		this.switch_one = this.stops_array.indexOf(this.startingStation);
		this.switch_two = this.stops_array.indexOf(this.endingStation);
		abs_stop = Math.abs(this.switch_one - this.switch_two);
		return abs_stop;
	},

	enter_exit_different_lines: function(lines, startingLine, startingStation, endingLine, endingStation) {
		var stops_array1,
				stops_array2,
				start,
				switch_one,
				switch_two,
				stop,
				line1_stops,
				line2_stops;

			this.stops_array1 = this.lines[this.startingLine];
			this.stops_array2 = this.lines[this.endingLine];
			this.start = stops_array1.indexOf(this.startingStation);
			this.switch_one = this.stops_array1.indexOf('park st');
			this.switch_two = this.stops_array2.indexOf('park st');
			this.stop = this.stops_array2.indexOf(this.endingStation);
			this.line1_stops = Math.abs(this.start - this.switch_one);
			this.line2_stops = Math.abs(this.stop - this.switch_two);
			return (this.line1_stops + this.line2_stops);
	}
};


	// if (startingLine === endingLine) {
	// 	this.numStops = MBTA.enter_exit_same_line(line, startingStation, endingStation);
	// } else {
	// 	this.numStops = MBTA.enter_exit_different_lines(lines, startingLine, startingStation, endingLine, endingStation);
	// };

// alert('Number of stops between ' + startingLine + ":" + startingStation + ' and ' + endingLine + ":" + endingStation + ' is ' + numStops);