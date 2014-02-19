function Ride(start_line, start_station, end_line, end_station) {
	this.start_line = start_line;
	this.start_station = start_station;
	this.end_line = end_line;
	this.end_station = end_station;
	this.lines = {
				'green':['haymarket', 'government center', 'park st', 'bolyston', 'arlington', 'copley'],
				'red': ['south station', 'park st', 'kendall', 'central', 'harvard', 'porter', 'davis', 'alewife'],
				'orange': ['north station', 'haymarket', 'park st', 'state', 'downtown crossing', 'chinatown', 'back bay', 'forest hills']
			};
};

Ride.prototype = {
	distance_to_park: function(line) {
		var current_line = this.lines[line],
			park = current_line.indexOf('park st');
		return function(stop) {
			var current_stop = current_line.indexOf(stop);
			return Math.abs(current_stop - park);
		}
	},
	calc_distances: function() {
		this.start_park = this.distance_to_park(this.start_line);
		this.end_park = this.distance_to_park(this.end_line);
		this.first_stop = this.start_park(this.start_station);
		this.last_stop = this.end_park(this.end_station);
		return this.first_stop + this.last_stop;
	}
};
