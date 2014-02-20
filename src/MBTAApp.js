var MBTAApp = {
  startingLine: prompt("Enter the Starting Line: "),
  startingStation: prompt("Enter the Starting Station"),
  endingLine: prompt("Enter the Ending Line"),
  endingStation: prompt("Enter the Ending Station"),
  lines: {
    'green':['Haymarket Green', 'Government Center', 'Park St', 'Boylston', 'Arlington', 'Copley'],
    'red': ['South Station', 'Park St', 'Kendall', 'Central', 'Harvard', 'Porter', 'Davis', 'Alewife'],
    'orange': ['Forest Hills', 'Back Bay', 'Chinatown', 'Downtown Crossing', 'State', 'Park St', 'Haymarket Orange', 'North Station']
  },
  distanceToIntersection: function(lines, line, station){
    var start_index = lines[line].indexOf(station),
    intersection_index_on_start_line = lines[line].indexOf('Park St');
    return Math.abs(start_index - intersection_index_on_start_line);
  }
};

// Display alerts to repeat user input back to user
alert("Starting at " + MBTAApp.startingLine + " : " + MBTAApp.startingStation);
alert("Ending at " + MBTAApp.endingLine + " : " + MBTAApp.endingStation);

start_distance = MBTAApp.distanceToIntersection(MBTAApp.lines, MBTAApp.startingLine, MBTAApp.startingStation);
end_distance = MBTAApp.distanceToIntersection(MBTAApp.lines, MBTAApp.endingLine, MBTAApp.endingStation);
total_distance = start_distance + end_distance;

console.log(total_distance);
