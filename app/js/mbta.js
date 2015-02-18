var startingLine,
startingStation,
endingLine,
endingStation;

// build out Line that has lines and stops then the var lines are expamples of a Line

var Line = function(name, stops){
  this.name = name;
  this.stops = stops;
}

var lines = {
  'green':['haymarket', 'park st', 'boylston', 'arlington', 'copley', 'kenmore'],
  'red': ['south station', 'park st', 'kendall', 'central', 'harvard', 'porter', 'davis', 'alewife'],
  'orange': ['north station', 'haymarket', 'park st', 'state', 'downtown crossing', 'chinatown', 'back bay', 'forest hills']
};

var distance = function(startingLine, startingStation, endingLine, endingStation){
  if(startingLine === endingLine){
     return Math.abs(lines[startingLine].indexOf(startingStation) - lines[endingLine].indexOf(endingStation));
  }
  else{
    return Math.abs(lines[startingLine].indexOf(startingStation) - lines[startingLine].indexOf("park st")) + Math.abs(lines[endingLine].indexOf("park st") - lines[endingLine].indexOf(endingStation));
  }
}

var Trip = function(startingLine, startingStation, endingLine, endingStation){
  this.startingLine = startingLine;
  this.startingStation = startingStation;
  this.endingLine = endingLine;
  this.endingStation = endingStation;
}

Trip.prototype = {
  describe: function(){
    return "Traveling from " + this.startingStation + " on the " + this.startingLine + " line to " + this.endingStation + " on the " + this.endingLine + " line";
  },
  startingLine
}
