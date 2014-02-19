var MBTAApp = {
	lines: {
  'green':["Haymarket", "Government Center", "Park St", "Bolyston", "Arlington", "Copley"],
  'red': ["South Station", "Park St", "Kendall", "Central", "Harvard", "Porter", "Davis", "Alewife"],
  'orange': ["North Station", "Haymarket", "Park St", "State", "Downtown Crossing", "Chinatown", "Back Bay", "Forest Hills"]
	},

}
// Code here.

MBTAApp.startingLine = prompt("Enter the Starting Line: ");
MBTAApp.startingStation = prompt("Enter the Starting Station");
MBTAApp.endingLine = prompt("Enter the Ending Line");
MBTAApp.endingStation =  prompt("Enter the Ending Station");

alert("Starting at " + MBTAApp.startingLine + " : " + MBTAApp.startingStation);
alert("Ending at " + MBTAApp.endingLine + " : " + MBTAApp.endingStation);

// Create a array for each line

var start_index = parseInt(this.lines[startingLine].indexOf(startingStation)),
		intersection_start_index = parseInt(this.lines[startingLine].indexOf('Park St')),
		start_park_index = (start_index - intersection_start_index),
		end_index = parseInt(this.lines[endingLine].indexOf(endingStation)),
		intersection_end_index = parseInt(this.lines[endingLine].indexOf('Park St')),
		end_park_index = (end_index - intersection_end_index),
		total_distance = (Math.abs(start_park_index) + Math.abs(end_park_index)),




alert("This distance is: " + total_distance + " stops.");
