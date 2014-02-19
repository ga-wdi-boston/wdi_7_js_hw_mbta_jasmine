function MBTARide(startingLine, startingStation, endingLine, endingStation) {
	this.startingLine = startingLine;
	this.startingStation = startingStation;
	this.endingLine = endingLine;
	this.endingStation = endingStation;
};



lines: {
  'green':["Haymarket", "Government Center", "Park St", "Bolyston", "Arlington", "Copley"],
  'red': ["South Station", "Park St", "Kendall", "Central", "Harvard", "Porter", "Davis", "Alewife"],
  'orange': ["North Station", "Haymarket", "Park St", "State", "Downtown Crossing", "Chinatown", "Back Bay", "Forest Hills"]
	},



var lines
		start_index = parseInt(this.lines[startingLine].indexOf(startingStation)),
		intersection_start_index = parseInt(this.lines[startingLine].indexOf('Park St')),
		start_park_index = (start_index - intersection_start_index),
		end_index = parseInt(this.lines[endingLine].indexOf(endingStation)),
		intersection_end_index = parseInt(this.lines[endingLine].indexOf('Park St')),
		end_park_index = (end_index - intersection_end_index),
		total_distance = (Math.abs(start_park_index) + Math.abs(end_park_index)),




alert("This distance is: " + total_distance + " stops.");
