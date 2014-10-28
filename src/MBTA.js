var MBTA = {
  lines: {
    'green':['haymarket', 'government center', 'park st', 'bolyston', 'arlington', 'copley'],
    'red': ['south station', 'park st', 'kendall', 'central', 'harvard', 'porter', 'davis', 'alewife'],
    'orange': ['north station', 'haymarket', 'park st', 'state', 'downtown crossing', 'chinatown', 'back bay', 'forest hills']
  },
  distanceToPark: function(line, stop) {
    var current_line = this.lines[line];
    park = current_line.indexOf('park st');
    var current_stop = current_line.indexOf(stop);
    return Math.abs(current_stop - park);
  },
  distance: function(start_line, start_station, stop_line, stop_station) {
    this.start_line = start_line;
    this.start_station = start_station;
    this.stop_line = stop_line;
    this.stop_station = stop_station;
    return MBTA.calcDistance();
  },
  calcDistance: function() {
    if (this.start_line === this.stop_line) {
      var totDistance = this.lines[this.start_line].indexOf(this.start_station) - this.lines[this.stop_line].indexOf(this.start_station);
      // debugger
      return Math.abs(totDistance);
    } else {
      var totDistance = MBTA.distanceToPark(this.start_line, this.start_station) + MBTA.distanceToPark(this.stop_line, this.stop_station);
      return totDistance;
    }
  }
};


// console.log(MBTA.distance('red', 'harvard', 'green', 'copley'));
console.log(MBTA.distance('orange', 'chinatown', 'orange', 'back bay'));
