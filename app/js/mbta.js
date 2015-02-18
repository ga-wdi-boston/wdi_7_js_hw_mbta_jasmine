// Create a array for each line
var lines = {
  'green':["green/haymarket", "kenmore", "park st", "bolyston", "arlington", "copley"],
  'red': ["south station", "park st", "kendall", "central", "harvard", "porter", "davis", "alewife"],
  'orange': ["north station", "orange/haymarket", "park st", "state", "downtown crossing", "chinatown", "back bay", "forest hills"]
};

// Break it down into simple steps

// are the stops on the same line?
// take the difference of stop indexes on same line
// diff between start and park + end and park

var numStops = function(startLine, startStation, stopLine, stopStation){
  if (startLine === stopLine) {
    return Math.abs(lines[startLine].indexOf(startStation) - lines[stopLine].indexOf(stopStation));
  } else {
      return Math.abs(lines['park st'].indexOf(stopStation) - lines[startLine].indexOf('park st'));
  }
}

// console.log('Davis/Alewife 1 stop = ' + numStops('red', 'alewife', 'red', 'davis'));

// all functions
// input
// transforming input/calculating input
// return output

// # of stops
