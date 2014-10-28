var MBTA = {
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
    return Math.abs( MBTA.lines[line].indexOf(stop) - MBTA.lines[line].indexOf("Park Street") );
  },

  distanceToDestination: function(startLine, startStop, endLine, endStop){
    if (startLine === endLine) {
      return Math.abs( MBTA.lines[startLine].indexOf(startStop) - MBTA.lines[startLine].indexOf(endStop) );
    } else {
      return this.distanceToPark(startLine, startStop) + this.distanceToPark(endLine, endStop);
    }
  },

  startLine: function(){
    return prompt("Enter start line");
  },

  startStop: function(){
    return prompt("Enter start stop");
  },

  endLine: function(){
    return prompt("Enter end line");
  },

  endStop: function(){
    return prompt("Enter end stop");
  }
}


alert(MBTA.distanceToDestination(MBTA.startLine(), MBTA.startStop(), MBTA.endLine(), MBTA.endStop()));
