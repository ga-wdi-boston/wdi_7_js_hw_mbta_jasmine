var lines = {
  'green':[
    "Haymarket",
    "Government Center",
    "Park Street",
    "Boylston",
    "Arlington",
    "Copley"
  ],
  'red': [
    "Alewife",
    "Davis",
    "Porter",
    "Harvard",
    "Central",
    "Kendall/MIT",
    "Park Street",
    "South Station"
    ],
  'orange': ["North Station",
    "Haymarket",
    "Park Street",
    "State Street",
    "Downtown Crossing",
    "Chinatown",
    "Tufts Medical Center"]
};

var startingLine = prompt("Enter your starting line");
var startingStation = prompt("Enter the Starting Station");
var endingLine = prompt("Enter the Ending Line");
var endingStation =  prompt("Enter the Ending Station");

var numberStops = function(startingLine, startingStation, endingLine, endingStation){
  if (startingLine === endingLine) {
    return Math.abs(startingLine.indexOf(startingStation) - endingLine.indexOf(endingStation));
  } else {
    return Math.abs(startingLine.indexOf(startingStation) - startingLine.indexOf('Park Street')) + Math.abs(endingLine.indexOf("Park Street") - endingLine.indexOf(endingStation));
  }
};