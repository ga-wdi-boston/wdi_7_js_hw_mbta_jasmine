// Code here.
var startingLine,
startingStation,
endingLine,
endingStation;

//Prompt user for input
// startingLine = prompt("Enter the Starting Line: ");
// startingStation = prompt("Enter the Starting Station");
// endingLine = prompt("Enter the Ending Line");
// endingStation =  prompt("Enter the Ending Station");

//hard coded values for testing: 5 total stops
// startingLine = 'red';
// startingStation = 'central'; // central index = 3, park st index = 1
// endingLine = 'green';
// endingStation =  'copley'; // copley index = 5, park st index = 2

//User feedback based on their input
// console.log("Starting at " + startingLine + " : " + startingStation);
// alert("Starting at " + startingLine + " : " + startingStation);
// console.log("Ending at " + endingLine + " : " + endingStation);
// alert("Ending at " + endingLine + " : " + endingStation);


// Create a array for each line
var lines = {
  'green':['haymarket','government center','park st','boylston','arlington', 'copley'],
  'red': ['south station', 'park st', 'kendall', 'central', 'harvard', 'porter', 'davis', 'alewife'],
  'orange': ['north station', 'haymarket', 'park st', 'state', 'downtown crossing', 'chinatown', 'back bay', 'forest hills']
};

var getStops = function(startingLine, startingStation, endingLine, endingStation){
  if(startingLine === endingLine){
    return Math.abs(lines[startingLine].indexOf(startingStation) - lines[endingLine].indexOf(endingStation) );
  } else {
    return Math.abs(lines[startingLine].indexOf(startingStation) - lines[startingLine].indexOf('park st')) +
            Math.abs(lines[endingLine].indexOf('park st') - lines[endingLine].indexOf(endingStation));
  }
};

//Final output of calculation of the total number of stops
// console.log("Number of stops is: " + getStops(startingLine, startingStation, endingLine, endingStation));
// alert("Number of stops is: " + getStops(startingLine, startingStation, endingLine, endingStation));
