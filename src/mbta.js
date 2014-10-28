function MBTA(originLine, originStop, destLine, destStop) {

  this.originLine = originLine;
  this.originStop = originStop;
  this.destLine = destLine;
  this.destStop = destStop;

  this.lines = {
    "red": {
      "alewife": -6,
      "davis": -5,
      "porter": -4,
      "harvard": -3,
      "central": -2,
      "kendall": -1,
      "park street": 0,
      "south station": 1
    },  
    "green": {
      "haymarket": -2,
      "government center": -1,
      "park street": 0,
      "boylston": 1,
      "arlington": 2,
      "copley": 3
    },  
    "orange": {
      "north station": -2,
      "haymarket": -1,
      "park street": 0,
      "state street": 1,
      "downtown crossing": 2,
      "chinatown": 3,
      "tufts medical center": 4
    }
  },

  this.calculateDistance = function () {
    numStop = Math.abs(this.lines[this.destLine][this.destStop] - this.lines[this.originLine][this.originStop]);
  }
}  

var mbta = new MBTA("red", "davis", "green", "copley");
mbta.calculateDistance();