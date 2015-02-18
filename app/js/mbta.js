var Line = function(name, stops) {
  this.name = name;
  this.stops = stops;
}
var Trip = function(startingLine, startingStation, endingLine, endingStation) {
  this.startingLine = startingLine;
  this.startingStation = startingStation;
  this.endingLine = endingLine;
  this.endingStation = endingStation;
}
