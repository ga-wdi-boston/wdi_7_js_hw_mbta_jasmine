
var lines = {
  'green':['green/haymarket', 'government center', 'park st', 'bolyston', 'arlington', 'copley'],
  'red': ['south station', 'park st', 'kendall', 'central', 'harvard', 'porter', 'davis', 'alewife'],
  'orange': ['north station', 'orange/haymarket', 'park st', 'state', 'downtown crossing', 'chinatown', 'back bay', 'forest hills']
};

var MBTA = function(startingLine, startingStation
, endingLine, endingStation){
  this.startingLine = startingLine;
  this.startingStation = startingStation;
  this.endingLine = endingLine;
  this.endingStation = endingStation;
};

MBTA.prototype = {
  
  alerts: function(){
    alert("Staring at " + this.startingLine + " : " + this.startingStation);
    alert("Ending at " + this.endingLine + " : " + this.endingStation);
  },
  station_count: function(){
    var count = 0;
    if (this.startingLine === this.endingLine){
      count = Math.abs(lines[this.startingLine].indexOf(this.startingStation) - lines[this.startingLine].indexOf(this.endingStation));
    } else {
      count = (Math.abs(lines[this.startingLine].indexOf(this.startingStation) - lines[this.startingLine].indexOf('park st')) + Math.abs(lines[this.endingLine].indexOf(this.endingStation) - lines[this.endingLine].indexOf('park st')));
    };
    return count;
  }
}

var stops = new MBTA();
stops.prompts();
stops.alerts();
alert('You will take ' + stops.station_count() + ' stations totally!');



