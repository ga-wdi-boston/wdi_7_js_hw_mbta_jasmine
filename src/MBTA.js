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
}