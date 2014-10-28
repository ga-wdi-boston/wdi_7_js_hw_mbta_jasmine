function MBTA(startLine, startStop, endLine, endStop){
  this.startLine = startLine;
  this.startStop = startStop;
  this.endLine = endLine;
  this.endStop = endStop;
}

MBTA.prototype = {
  lines: {
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
   ]
  },
  distanceToPark: function(line, stop){
    return Math.abs( this.lines[line].indexOf(stop) - this.lines[line].indexOf("Park Street") );
  },

  distanceToDestination: function(){
    if (this.startLine === this.endLine) {
      return Math.abs( this.lines[this.startLine].indexOf(this.startStop) - this.lines[this.startLine].indexOf(this.endStop) );
    } else {
      return this.distanceToPark(this.startLine, this.startStop) + this.distanceToPark(this.endLine, this.endStop);
    }
  },
};


var mbta = new MBTA("red", "Davis", "orange", "Chinatown");
console.log(mbta.distanceToDestination());
