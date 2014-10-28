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

  distanceToPark: function(line) {
    this.startDistance = Math.abs(this.startLine.indexOf('park street') - this.startLine.indexOf(this.startStop));
    this.endDistance = Math.abs(this.endLine.indexOf('park street') - this.endLine.indexOf(this.endstop));
  },

  calcDistances: function() {

  },

  distance: function(startLine, startStation, endLine, endStation) {
    this.startLine = MBTA[startLine];
    this.startStation = startStation;
    this.endLine = MBTA[endLine];
    this.endStation = endStation;
  }
}

MBTA.distance('red', 'harvard', 'green', 'copley');
