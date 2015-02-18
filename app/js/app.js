'use strict';

var startingLine,
startingStation,
endingLine,
endingStation;

startingLine = "red";
startingStation = "south station";
endingLine = "red";
endingStation =  "central";

var lines = {
  green:["haymerket", "government center", "park st", "bolyston", "arlington", "copley"],
  red: ["south station", "park st", "kendall", "central", "harvard", "porter", "davis", "alewife"],
  orange: ["north station", "haymarket", "park st", "state", "downtown crossing", "chinatown", "back bay", "forest hills"]
};

var calc = function() {
  return Math.abs(lines.red.indexOf(startingStation) - lines.red.indexOf(endingStation));
};

var dualLine = function(line1, line2, station1, station2) {
  return Math.abs(lines[line1].indexOf(station1) - lines[line1].indexOf('park st') + (lines[line2].indexOf(station2) - lines[line2].indexOf('park st')));
};

console.log(calc("red", "red", "south station", "central"));
