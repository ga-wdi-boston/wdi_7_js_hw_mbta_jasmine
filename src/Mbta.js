
var lines = {
  'green':['green/haymarket', 'government center', 'park st', 'bolyston', 'arlington', 'copley'],
  'red': ['south station', 'park st', 'kendall', 'central', 'harvard', 'porter', 'davis', 'alewife'],
  'orange': ['north station', 'orange/haymarket', 'park st', 'state', 'downtown crossing', 'chinatown', 'back bay', 'forest hills']
};

var MBTA = function(startingLine, startingStation
, endingLine, endingStation, count){
  this.startingLine = startingLine;
  this.startingStation = startingStation;
  this.endingLine = endingLine;
  this.endingStation = endingStation;
  this.count = 0;
};

MBTA.prototype = {

  station_count: function(){
    if (this.startingLine === this.endingLine){
      count = Math.abs(lines[this.startingLine].indexOf(this.startingStation) - lines[this.startingLine].indexOf(this.endingStation));
    } else {
      count = (Math.abs(lines[this.startingLine].indexOf(this.startingStation) - lines[this.startingLine].indexOf('park st')) + Math.abs(lines[this.endingLine].indexOf(this.endingStation) - lines[this.endingLine].indexOf('park st')));
    };
    this.count = count;
    return this.count;
  }
}



