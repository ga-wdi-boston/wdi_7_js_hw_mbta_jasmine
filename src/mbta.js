var MBTA = {
  lines: {
    'green':['haymarket', 'government center', 'park st', 'bolyston', 'arlington', 'copley'],
    'red': ['south station', 'park st', 'kendall', 'central', 'harvard', 'porter', 'davis', 'alewife'],
    'orange': ['north station', 'haymarket', 'park st', 'state', 'downtown crossing', 'chinatown', 'back bay', 'forest hills']
    },
  Journey: function(startingStation, startingLine, endingLine, endingStation) {
    this.startingStation = startingStation;
    this.startingLine = startingLine;
    this.endingLine = endingLine;
    this.endingStation = endingStation;
  }
};

MBTA.Journey.prototype.numOfStops = function(journey) {
  var startToIntersection = Math.abs(MBTA.lines[this.startingLine].indexOf(this.startingStation) - MBTA.lines[this.startingLine].indexOf('Park Street'));
  var endToIntersection = Math.abs(MBTA.lines[this.endingLine].indexOf(this.endingStation) - MBTA.lines[this.endingLine].indexOf('Park Street'));
  return (startToIntersection - endToIntersection);
};
