var MBTA = {
  lines: {
    'green':['haymarket', 'government center', 'park st', 'bolyston', 'arlington', 'copley'],
    'red': ['south station', 'park st', 'kendall', 'central', 'harvard', 'porter', 'davis', 'alewife'],
    'orange': ['north station', 'haymarket', 'park st', 'state', 'downtown crossing', 'chinatown', 'back bay', 'forest hills']
  },

  function Journey(startingStation, startingLine, endingLine, endingStation) {
    this.startingStation = startingStation;
    this.startingLine = startingLine;
    this.endingLine = endingLine;
    this.endingStation = endingStation;
  };

  numOfStops: function(line, station) {
    startToIntersection = Math.abs(lines[journey.startingLine].indexOf(startingStation) - lines[startingLine].indexOf('Park Street'));
    endToIntersection = Math.abs(lines[journey.endingLine].indexOf(endingStation) - lines[endingLine].indexOf('Park Street'));
    return (startToIntersection + endToIntersection)
  };
};
