var MBTA = {
  Journey: function(startingStation, startingLine, endingLine, endingStation) {
    this.startingStation = startingStation;
    this.startingLine = startingLine;
    this.endingLine = endingLine;
    this.endingStation = endingStation;
  },

  lines: {
    'green':['haymarket', 'government center', 'park st', 'bolyston', 'arlington', 'copley'],
    'red': ['south station', 'park st', 'kendall', 'central', 'harvard', 'porter', 'davis', 'alewife'],
    'orange': ['north station', 'haymarket', 'park st', 'state', 'downtown crossing', 'chinatown', 'back bay', 'forest hills']
  }
};

// MBTA.Journey.prototype.numOfStops = function() {
//     startToIntersection = Math.abs(MBTA.Journey.lines[this.startingLine].indexOf(this.startingStation) - MBTA.Journey.lines[this.startingLine].indexOf('Park Street'));
//     endToIntersection = Math.abs(MBTA.Journey.lines[this.endingLine].indexOf(this.endingStation) - MBTA.Journey.lines[this.endingLine].indexOf('Park Street'));
//     return startToIntersection + endToIntersection
// }
