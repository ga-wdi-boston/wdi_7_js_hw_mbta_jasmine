var Line = function(name, stops) {
  this.name = name;
  this.stops = stops;
}

Line.prototype = {
  distanceToPark: function(stop) {
    return Math.abs(this.stops.indexOf(stop) - this.stops.indexOf('park st'));
  },
  distanceSameLine: function(starting, ending) {
    return Math.abs(this.stops.indexOf(starting) - this.stops.indexOf(ending));
  }
};

var Trip = function(startingLine, startingStation, endingLine, endingStation) {
  this.startingLine = startingLine;
  this.startingStation = startingStation;
  this.endingLine = endingLine;
  this.endingStation = endingStation;
}

Trip.prototype = {
  distance: function() {
    if (this.startingLine === this.endingLine) {
    return this.startingLine.distanceSameLine(this.startingStation, this.endingStation);
    } else {
      return this.startingLine.distanceToPark(this.startingStation) + this.endingLine.distanceToPark(this.endingStation);
    }
  },
  distanceSameLine: function(starting, ending) {
    return Math.abs(this.stops.indexOf(starting) - this.stops.indexOf(ending));
  }
}


var green = new Line('green', ['haymarket', 'government center', 'park st', 'bolyston', 'arlington', 'copley']);
var red = new Line('red', ['south station', 'park st', 'kendall', 'central', 'harvard', 'porter', 'davis', 'alewife']);
var orange = new Line('orange', ['north station', 'haymarket', 'park st', 'state', 'downtown crossing', 'chinatown', 'back bay', 'forest hills']);
