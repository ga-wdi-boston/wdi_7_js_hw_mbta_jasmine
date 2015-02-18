// Code here.
var startingLine,
startingStation,
endingLine,
endingStation;

startingLine = prompt("Enter the Starting Line: ");
startingStation = prompt("Enter the Starting Station");
endingLine = prompt("Enter the Ending Line");
endingStation =  prompt("Enter the Ending Station");

// startingLine = 'green';
// startingStation = 'haymarket';
// endingLine = 'red';
// endingStation =  'alewife';

// alert("Staring at " + startingLine + " : " + startingStation);
// alert("Ending at " + endingLine + " : " + endingStation);

// Create a array for each line
lines = {
  'green':["haymarket", "government center", "park st", "bolyston", "arlington", "copley"],
  'red': ["south station", "park st", "kendall", "central", "harvard", "porter", "davis", "alewife"],
  'orange': ["north station", "haymarket", "park st", "state", "downtown crossing", "chinatown", "back bay", "forest hills"]
};

var numberOfStops = function(startingLine, startingStation, endingLine, endingStation){
  if (startingLine === endingLine){
    return Math.abs(lines[startingLine].indexOf(startingStation) - lines[startingLine].indexOf(endingStation));
  } else {
    return Math.abs(lines[startingLine].indexOf(startingStation) - lines[startingLine].indexOf('park st')) + Math.abs(lines[endingLine].indexOf(endingStation) - lines[endingLine].indexOf('park st'));
  };
};

// console.log("There are " + numberOfStops(startingLine, startingStation, endingLine, endingStation) + " stops between " + startingStation + " and "+ endingStation + ".");



