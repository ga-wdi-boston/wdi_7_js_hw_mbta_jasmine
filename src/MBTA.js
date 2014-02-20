function Trip(startingLine, startingStation, endingLine, endingStation, intersectionPoint) {
  this.startingLine = startingLine;
  this.startingStation = startingStation;
  this.endingLine = endingLine;
  this.endingStation = endingStation;
  this.lines = {
    'green': ["haymarket", "government center", "park street", "bolyston", "arlington", "copley"],
    'red': ["south station", "park street", "kendall", "central", "harvard", "porter", "davis", "alewife"],
    'orange': ["north station", "haymarket", "park street", "state", "downtown crossing", "chinatown", "back bay", "forest hills"]
  };
};


