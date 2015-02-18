var lines = {
  'green': ["Haymarket", "Government Center", "Park Street", "Boylston", "Arlington", "Copley"],
  'red': ["Alewife", "Davis", "Porter", "Harvard", "Central", "Kendall/MIT", "Park Street", "South Station"],
  'orange': ["North Station", "Haymarket", "Park Street", "State Street", "Downtown Crossing", "Chinatown", "Tufts"]
};

var Trip = function(startLine, startStation, endLine, endStation){
  this.startLine = startLine;
  this.startStation = startStation;
  this.endLine = endLine;
  this.endStation = endStation;
};

Trip.prototype = {
    calcStops: function() {
        var hub = "Park Street";
        if (this.startLine === this.endLine) {
            return Math.abs(lines[this.startLine].indexOf(this.startStation) - lines[this.startLine].indexOf(this.endStation));
        } else {
            return Math.abs(lines[this.startLine].indexOf(this.startStation) - lines[this.startLine].indexOf(hub)) + Math.abs(lines[this.endLine].indexOf(this.endStation) - lines[this.endLine].indexOf(hub));
        }
    },
    describe: function() {
        return this.startStation + " to " + this.endStation + " is " + this.calcStops() + " stops."
    }
};
