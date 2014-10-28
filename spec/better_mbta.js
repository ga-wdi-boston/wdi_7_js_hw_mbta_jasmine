var MBTA;

MBTA = {
  // a bunch of arrays for mbta lines
  red: [
    'alewife',
    'davis',
    'porter',
    'harvard',
    'central',
    'kendall',
    'park street',
    'south station'
  ],
  green: [
    'haymarket',
    'government center',
    'park street',
    'boylston',
    'arlington',
    'copley'
  ],
  orange: [
    'north station',
    'haymarket',
    'park street',
    'state street',
    'downtown crossing',
    'chinatown',
    'tufts'
  ],

  distance: function(startLine, startStation, endLine, endStation) {
    this.startLine = MBTA[startLine];
    this.startStation = startStation;
    this.endLine = MBTA[endLine];
    this.endStation = endStation;
    return this.totalDistance
  },

  distanceToPark: function(line) {
    return line.indexOf("park street");
  },

  calcDistances: function() {
    startIndex = this.startLine.indexOf(this.startStation);
    endIndex = this.endLine.indexOf(this.endStation);
    this.startDistance = Math.abs(distanceToPark(this.startLine)-startIndex);
    this.endDistance = Math.abs(distanceToPark(this.endLine)-endIndex);
    this.totalDistance = this.startDistance + this.endDistance;
  },

}

debugger

MBTA.distance('red', 'harvard', 'green', 'copley');
