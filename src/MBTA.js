// my work is based on the "solution" branch of wdi_7_js_lab_mbta

var MBTA = function(startingLine, startingStation) {

	// lines: {
	// 	'green':['haymarket', 'government center', 'park st', 'boylston', 'arlington', 'copley'],
	// 	'red': ['south station', 'park st', 'kendall', 'central', 'harvard', 'porter', 'davis', 'alewife'],
	// 	'orange': ['north station', 'haymarket', 'park st', 'state', 'downtown crossing', 'chinatown', 'back bay', 'forest hills']
	// },

	this.startingLine = startingLine;
	this.startingStation = startingStation;

	// distance_to_park_st: function(line, stop) {
	// 	var current_line = this.lines[line], // get the line being calculated on
	// 			index_of_park_st = current_line.indexOf('park st'), // get the index of park st on that line
	// 			index_of_current_stop = current_line.indexOf(stop); // get the index of the stop on that line
	// 			return function(stop) { // calculate and return distance from that stop to park st
	// 				Math.abs(index_of_current_stop - index_of_park_st);
	// 			};
	// },

	// prompts: function() {
	// 	this.startingLine = prompt("Enter the Starting Line: ");
	// 	this.startingStation = prompt("Enter the Starting Station");
	// 	this.endingLine = prompt("Enter the Ending Line");
	// 	this.endingStation =  prompt("Enter the Ending Station");
	// },

	// calc_distances: function() {
	// 	this.start_parkst = this.distance_to_park_st(this.startingLine);
	// 	this.end_parkst = this.distance_to_park_st(this.endingLine);
	// 	this.first_stop = this.start_parkst(this.startingStation);
	// 	this.ending_stop = this.end_parkst(this.endingStation);
	// 	return this.first_stop + this.ending_stop;
	// }

};

// MBTA.prompts();
// alert("The total number of stops for your travel is " + MBTA.calc_distances() + " stops.");

