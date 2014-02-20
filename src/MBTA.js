
var MBTA = {

	Trip: function(startingLine, startingStation, endingLine, endingStation){
		if(arguments.length !== 4){
			throw Error("starting and ending lines and stations are required")
		} else {
			this.startingLine = startingLine;
			this.startingStation = startingStation;
			this.endingLine = endingLine;
			this.endingStation = endingStation;
		};
		if(!(startingLine in this.lines) || !(endingLine in this.lines)){
      throw new Error ("invalid line");
    };
    if(this.lines[startingLine].indexOf(startingStation) === -1 || this.lines[endingLine].indexOf(endingStation) === -1){
      throw new Error ("invalid station");
    };
	}
};

MBTA.Trip.prototype = {
	lines: {
		'green': ['Haymarket', 'Government Center', 'Park St', 'Boylston', 'Arlington', 'Copley'],
		'red': ['South Station', 'Park St', 'Kendall', 'Central', 'Harvard', 'Porter', 'Davis', 'Alewife'],
  	'orange': ['North Station', 'Haymarket', 'Park St', 'State', 'Downtown Crossing', 'Chinatown', 'Back Bay', 'Forest Hills']
	},

	transferStation: 'Park St',

	totalStops: function(){
		var stopsOn1 = Math.abs(this.lines[this.startingLine].indexOf(this.transferStation) - this.lines[this.startingLine].indexOf(this.startingStation));
		var stopsOn2 = Math.abs(this.lines[this.endingLine].indexOf(this.transferStation) - this.lines[this.endingLine].indexOf(this.endingStation));
		return {stopsOn1: stopsOn1, stopsOn2: stopsOn2}
	}

};

