var MBTA_line = function(line){
  this.line = line;
};

MBTA_line.prototype = {
  describe: function() {
    return this.line + " has " + indexOf(line) + " stops " + this.connection;
  }
};

var MBTA_lineApp = MBTA_lineApp || {};

MBTA_lineApp.green = { line: 'green'};

MBTA_lineApp.createMBTA_line = function(line) {
  var display = function(){
    return this.line + " has " + indexOf(line) + " stops " + this.connection;
  };
  return {
    line: line,
  };
};

var MBTA = {
  green:["haymarket", "government center", "park st", "bolyston", "arlington", "copley"],
  red: ["south station", "park st", "kendall", "central", "harvard", "porter", "davis", "alewife"],
  orange: ["north station", "haymarket", "park st", "state", "downtown crossing", "chinatown", "back bay", "forest hills"]
};

var numberStops = function(startLine, startStation, endingLine, endingStation){
  if(startLine === stopLine) {
    return Math.abs(MBTA[startLine].indexOf(startStation) - MBTA[stopLine].indexOf(stopStation));
} else {
  return Math.abs(MBTA[startLine].indexOf(startStation) - MBTA[startLine].indexOf('Park Street')) + Math.abs(MBTA[stopLine].indexOf('Park Street') - MBTA[stopLine].indexOf(stopStation));
}
};
