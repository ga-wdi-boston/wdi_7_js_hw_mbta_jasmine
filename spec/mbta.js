var MBTA;

MBTA = {
  // a bunch of arrays for mbta lines
  "red": [
    "Alewife",
    "Davis",
    "Porter",
    "Harvard",
    "Central",
    "Kendall/MIT",
    "Park Street",
    "South Station"
  ],
  "green": [
    "Haymarket",
    "Government Center",
    "Park Street",
    "Boylston",
    "Arlington",
    "Copley"
  ],
  "orange": [
    "North Station",
    "Haymarket",
    "Park Street",
    "State Street",
    "Downtown Crossing",
    "Chinatown",
    "Tufts Medical Center"
  ],

  promptUser: function() {
    this.startLine = prompt("Please provide your start line.");
    this.startStop = prompt("Please provide your start stop.");
    this.endLine = prompt("Please provide your end line.");
    this.endStop = prompt("Please provide your end stop.");
  },

  distance_to_park: function() {
    this.startDistance = Math.abs(this.startLine.indexOf("Park Street") - this.startLine.indexOf(this.startStop));
    this.endDistance = Math.abs(this.endLine.indexOf("Park Street") - this.endLine.indexOf(this.endstop));
  },

  // prompt user to input starting line, ending line, starting stop, ending stop, etc.
  calculateDistances: function() {
    debugger
    return this.startDistance + this.endDistance;
  }
}



MBTA.promptUser();
alert("Your total distance is " + MBTA.calculateDistances() + " stops.");
