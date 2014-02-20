var MBTAApp = {
  lines: {
    'green':['Haymarket Green', 'Government Center', 'Park St', 'Boylston', 'Arlington', 'Copley'],
    'red': ['South Station', 'Park St', 'Kendall', 'Central', 'Harvard', 'Porter', 'Davis', 'Alewife'],
    'orange': ['Forest Hills', 'Back Bay', 'Chinatown', 'Downtown Crossing', 'State', 'Park St', 'Haymarket Orange', 'North Station']
  },

  totalStops: function(lines, trip) {
    var start_index = lines[trip.startingLine].indexOf(trip.startingStation),
    intersection_index_on_start_line = lines[trip.startingLine].indexOf('Park St'),
    end_index = lines[trip.endingLine].indexOf(trip.endingStation),
    intersection_index_on_end_line = lines[trip.endingLine].indexOf('Park St'),
    start_distance = Math.abs(start_index - intersection_index_on_start_line),
    end_distance = Math.abs(end_index - intersection_index_on_end_line);
    return start_distance + end_distance;
  }
};

var Trip = function(startingLine, endingLine, startingStation, endingStation) {
  this.startingLine = startingLine;
  this.endingLine = endingLine;
  this.startingStation = startingStation;
  this.endingStation = endingStation;
};
