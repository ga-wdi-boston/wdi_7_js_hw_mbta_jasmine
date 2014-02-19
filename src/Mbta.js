var Mbta = {
  Trip: function(startingLine, startingStation, endingLine, endingStation) {
    // Check argument length
    if (arguments.length !== 4) {
      throw new Error("Wrong number of args");
    }
    if (!(startingLine in this.lines) || !(endingLine in this.lines)) {
      throw new Error("Invalid line name");
    } else if ((this.lines[startingLine].indexOf(startingStation) < 0) ||
               (this.lines[endingLine].indexOf(endingStation) < 0)) {
      throw new Error("Invalid stop name");
    }

    this.startHere = {line: startingLine, station: startingStation};
    this.endHere = {line: endingLine, station: endingStation};
  }
}

Mbta.Trip.prototype.lines = {
  'green':  ["haymarket",
             "government center",
             "park street",
             "boylston",
             "arlington",
             "copley"],
  'red':    ["south station",
             "park street",
             "kendall",
             "central",
             "harvard",
             "porter",
             "davis",
             "alewife"],
  'orange': ["north station",
             "haymarket",
             "park street",
             "state",
             "downtown crossing",
             "chinatown",
             "back bay",
             "forest hills"]
};
