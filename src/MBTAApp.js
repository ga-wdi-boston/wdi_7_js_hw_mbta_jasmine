var MBTAApp = {
  lines: {
    'green':['Haymarket Green', 'Government Center', 'Park St', 'Boylston', 'Arlington', 'Copley'],
    'red': ['South Station', 'Park St', 'Kendall', 'Central', 'Harvard', 'Porter', 'Davis', 'Alewife'],
    'orange': ['Forest Hills', 'Back Bay', 'Chinatown', 'Downtown Crossing', 'State', 'Park St', 'Haymarket Orange', 'North Station']
  },

  totalDistance: function(lines, startingLine, endingLine, startingStation, endingStation) {
    var start_index = lines[startingLine].indexOf(startingStation),
    intersection_index_on_start_line = lines[startingLine].indexOf('Park St'),
    end_index = lines[endingLine].indexOf(endingStation),
    intersection_index_on_end_line = lines[endingLine].indexOf('Park St'),
    start_distance = Math.abs(start_index - intersection_index_on_start_line),
    end_distance = Math.abs(end_index - intersection_index_on_end_line);
    return start_distance + end_distance;
  }
};

