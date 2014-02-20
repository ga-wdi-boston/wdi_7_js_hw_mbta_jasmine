var MbtaApp = {
	lines: {'green':["haymarket", "government center", "park st", "bolyston", "arlington", "copley"],
	  			 'red': ["south station", "park st", "kendall", "central", "harvard", "porter", "davis", "alewife"],
	  			 'orange': ["north station", "haymarket", "park st", "state", "downtown crossing", "chinatown", "back bay", "forest hills"]
	  			},
  tripCount : function(form){
  	var startingLine = form.StartingLine.value,
  		  startingStation = form.StartingStation.value,
  		  endingLine = form.EndingLine.value,
  		  endingStation = form.EndingStation.value,
  		  countStop;
  	if(startingLine === endingLine){
			countStop = (Math.abs(this.lines[startingLine].indexOf(startingStation) - this.lines[endingLine].indexOf(endingStation)));
		} else {
			countStop = ((Math.abs(this.lines[startingLine].indexOf(startingStation) - this.lines[startingLine].indexOf("park st")) + Math.abs(this.lines[endingLine].indexOf(endingStation) - this.lines[endingLine].indexOf("park st"))));
		}
		return countStop;
		alert("Total number of stops for the trips is " + countStop);
	}
};









