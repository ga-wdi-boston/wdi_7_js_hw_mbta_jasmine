var Line = function(color, stations){
  this.color = color;
  this.stations = stations;
};


var green = new Line('green', ['haymarket', 'kenmore', 'park st', 'boylston', 'arlington', 'copley']);
var red = new Line('red', ['south station', 'park st', 'kendall', 'central', 'harvard', 'porter', 'davis', 'alewife']);
var orange = new Line('orange', ['north station', 'haymarket', 'park st', 'state', 'downtown crossing', 'chinatown', 'back bay', 'forest hills']);

var intersection = 'park st';

var Trip = function(startingLine, startingStation, endingLine, endingStation){
  this.startingLine = startingLine;
  this.startingStation = startingStation;
  this.endingLine = endingLine;
  this.endingStation = endingStation;
};

Trip.prototype = {

  stopsForOneLine: function(departure, arrival){
    return Math.abs(this.stations.indexOf(departure) - this.stations.indexOf(arrival));
  },

  stopsToIntersection: function(station){
    return Math.abs(this.stations.indexOf(station) - indexOf(intersection));
  },

  numStops: function() {
    if (this.startingLine === this.endingLine){
      return this.startingLine.stopsForOneLine(this.startingStation, this.endingStation);
    } else {
      return this.startingLine.stopsToIntersection(this.startingStation) + this.endingLine.stopsToIntersection(this.endingStation);
    }
  }

};

// var shopping = new Trip('orange', 'north station', 'green', 'arlington');
// var school = new Trip('orange', 'downtown crossing', 'red', 'south station');
// var food = new Trip('green', 'park st', 'green', 'copley');

// console.log(shopping.numStops());
// console.log(school.numStops());
// console.log(food.numStops());
