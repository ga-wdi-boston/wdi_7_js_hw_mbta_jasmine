// Code here.
var startingLine,
		startingStation,
		endingLine,
		endingStation,
		lines,
		numStops;

startingLine = prompt("Enter the Starting Line: ");
startingStation = prompt("Enter the Starting Station");
endingLine = prompt("Enter the Ending Line");
endingStation =  prompt("Enter the Ending Station");
startingLine = 'red';
// startingStation = 'alewife';
// endingLine = 'green';
// endingStation = 'haymarket';

alert("Staring at " + startingLine + " : " + startingStation);
alert("Ending at " + endingLine + " : " + endingStation);

// Create a array for each line
 lines = {
  'green':['haymarket', 'government center', 'park st', 'boylston', 'arlington', 'copley'],
  'red': ['south station', 'park st', 'kendall', 'central', 'harvard', 'porter', 'davis', 'alewife'],
  'orange': ['north station', 'haymarket', 'park st', 'state', 'downtown crossing', 'chinatown', 'back bay', 'forest hills']
};


var enter_exit_same_line = function(line, startingStation, endingStation) {
	var stops_array,
			switch_one,
			switch_two;
	stops_array = lines[line];
	switch_one = stops_array.indexOf(startingStation);
	switch_two = stops_array.indexOf(endingStation);
	abs_stop = Math.abs(switch_one - switch_two);
	return abs_stop;
}


var enter_exit_different_lines = function(lines, startingLine, startingStation, endingLine, endingStation) {
	var stops_array1,
			stops_array2,
			start,
			switch_one,
			switch_two,
			stop,
			line1_stops,
			line2_stops;

		stops_array1 = lines[startingLine];
		stops_array2 = lines[endingLine];
		start = stops_array1.indexOf(startingStation);
		switch_one = stops_array1.indexOf('park st');
		switch_two = stops_array2.indexOf('park st');
		stop = stops_array2.indexOf(endingStation);
		line1_stops = Math.abs(start - switch_one);
		line2_stops = Math.abs(stop -switch_two);
		return (line1_stops + line2_stops);
}


if(startingLine === endingLine) {
	numStops = enter_exit_same_line(line, startingStation, endingStation);
} else {
	numStops = enter_exit_different_lines(lines, startingLine, startingStation, endingLine, endingStation);
}

alert('Number of stops between ' + startingLine + ":" + startingStation + ' and ' + endingLine + ":" + endingStation + ' is ' + numStops);
