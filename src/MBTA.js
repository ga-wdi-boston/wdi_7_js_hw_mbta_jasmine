var MBTA = {
  lines: {
    'green':['haymarket', 'government center', 'park st', 'bolyston', 'arlington', 'copley'],
    'red': ['south station', 'park st', 'kendall', 'central', 'harvard', 'porter', 'davis', 'alewife'],
    'orange': ['north station', 'haymarket', 'park st', 'state', 'downtown crossing', 'chinatown', 'back bay', 'forest hills']
  },
  distanceToPark: function(line, stop) {

  },
  distance: function(start_line, start_station, stop_line, stop_station) {
    this.start_line;
    this.start_station;
    this.stop_line;
    this.stop_station;
    return MBTA.calcDistance
  },
  calcDistance: function() {
    if (this.start_line === this.stop_line) {
      var totDistance = this.lines[start_line].indexOf(start_station) - this.lines[start_line].indexOf(start_station);
      return Math.abs(totDistance);
    } else {
      var totDistance = distanceToPark(start_line, start_station) + distanceToPark(stop_line, stop_station);
      return totDistance;
    }
  }
};
