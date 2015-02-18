var Trip = function(startingLine, startingStation, endingLine, endingStation){
  this.startingLine = startingLine;
  this.startingStation = startingStation;
  this.endingLine = endingLine;
  this.endingStation = endingStation;
};

var Line = function(name, stations) {
    this.name = name
    this.stations = stations;
};

Trip.prototype = {
  distance: function(){
  if(this.startingLine === this.endingLine){
    return Math.abs(this.startingLine.stations.indexOf(this.startingStation) - this.endingLine.stations.indexOf(this.endingStation));
    }
  else{
    return Math.abs(this.startingLine.stations.indexOf(this.startingStation) - this.startingLine.stations.indexOf("park st")) + Math.abs(this.endingLine.stations.indexOf("park st") - this.endingLine.stations.indexOf(this.endingStation));
    }
  }
};

var green_line = new Line('green', ['haymarket', 'park st', 'boylston', 'arlington', 'copley', 'kenmore']);

var red_line = new Line('red', ['south station', 'park st', 'kendall', 'central', 'harvard', 'porter', 'davis', 'alewife']);

var orange_line = new Line('orange', ['north station', 'haymarket', 'park st', 'state', 'downtown crossing', 'chinatown', 'back bay', 'forest hills']);


