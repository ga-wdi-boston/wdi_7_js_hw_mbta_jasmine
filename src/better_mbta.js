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
    return "Your total travel distance is " + this.calcDistances() + " stops.";
  },

  indexOfPark: function(line) {
    return line.indexOf("park street");
  },

  calcDistances: function() {
    var startIndex = this.startLine.indexOf(this.startStation);
    var endIndex = this.endLine.indexOf(this.endStation);
    this.startDistance = Math.abs(this.indexOfPark(this.startLine) - startIndex);
    this.endDistance = Math.abs(this.indexOfPark(this.endLine) - endIndex);
    return this.startDistance + this.endDistance;
  }
}


console.log(MBTA.distance('green', 'copley', 'orange', 'tufts'));

