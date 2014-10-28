var MBTA;

MBTA = {
  // a bunch of arrays for mbta lines
  red: [
    "alewife",
    "davis",
    "porter",
    "harvard",
    "central",
    "kendall",
    "park street",
    "south station"
  ],
  green: [
    "haymarket",
    "government center",
    "park street",
    "boylston",
    "arlington",
    "copley"
  ],
  orange: [
    "north station",
    "haymarket",
    "park street",
    "state street",
    "downtown crossing",
    "chinatown",
    "tufts medical"
  ],

  promptUser: function() {
    this.startLine = this.lineLookup(prompt("Please provide your start line."));
    this.startStop = prompt("Please provide your start stop.");
    this.endLine = this.lineLookup(prompt("Please provide your end line."));
    this.endStop = prompt("Please provide your end stop.");
  },

  lineLookup: function(lineName) {
    return this[lineName];
  },

  distanceToPark: function() {
    this.startDistance = Math.abs(this.startLine.indexOf("park street") - this.startLine.indexOf(this.startStop));
    this.endDistance = Math.abs(this.endLine.indexOf("park street") - this.endLine.indexOf(this.endstop));
  },

  // prompt user to input starting line, ending line, starting stop, ending stop, etc.
  totalDistance: function() {
    this.distanceToPark();
    return this.startDistance + this.endDistance;
  }
}

MBTA.promptUser();
alert("Your total distance is " + MBTA.totalDistance() + " stops.");
