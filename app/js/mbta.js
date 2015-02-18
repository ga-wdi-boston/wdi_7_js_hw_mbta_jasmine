lines = {
  green:['haymarket', 'park st', 'boylston', 'arlington', 'copley', 'kenmore'],
  red: ['south station', 'park st', 'kendall', 'central', 'harvard', 'porter', 'davis', 'alewife'],
  orange: ['north station', 'haymarket', 'park st', 'state', 'downtown crossing', 'chinatown', 'back bay', 'forest hills']
};

var singleLine = function(line1, line2, station1, station2) {
  return Math.abs(lines[line1].indexOf(station1) - lines[line2].indexOf(station2));
}

var dualLine = function(line1, line2, station1, station2) {
  return Math.abs(lines[line1].indexOf(station1) - lines[line1].indexOf('park st') + (lines[line2].indexOf(station2) - lines[line2].indexOf('park st')));
}
