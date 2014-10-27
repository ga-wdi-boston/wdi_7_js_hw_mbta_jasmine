function MBTA() {
  this.lines = {
    'green':['haymarket', 'government center', 'park st', 'bolyston', 'arlington', 'copley'],
    'red': ['south station', 'park st', 'kendall', 'central', 'harvard', 'porter', 'davis', 'alewife'],
    'orange': ['north station', 'haymarket', 'park st', 'state', 'downtown crossing', 'chinatown', 'back bay', 'forest hills']
  }

  this.tripDistance = function() {
    return this.calculateDistance(this.origin, this.destination);
  }

  this.calculateDistance = function(origin, destination) {
    if (origin['line'] == destination['line']) {
      return this.stopsBetween(origin, destination)
    } else {
      return this.distanceToPark(origin) + this.distanceToPark(destination)
    }
  }

  this.stopsBetween = function(origin, destination) {
    return Math.abs(this.getIndex(origin) - this.getIndex(destination))
  }

  this.getIndex = function(point) {
    var line = this.lines[point['line']];
    var stop = point['stop'];

    return line.indexOf(stop);
  }
}