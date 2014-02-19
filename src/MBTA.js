
function SubwayTrip(startingLine, startingStation, endingLine, endingStation){
	this.startingLine = startingLine;
	this.startingStation = startingStation;
	this.endingLine = endingLine;
	this.endingStation = endingStation;
};


var lines,
station_index;

lines = {
  'green':["haymarket/green", "government center", "park st", "boylston", "arlington", "copley"],
  'red': ["south station", "park st", "kendall", "central", "harvard", "porter", "davis", "alewife"],
  'orange': ["north station", "haymarket/orange", "park st", "state", "downtown crossing", "chinatown", "back bay", "forest hills"]
};

station_index = function(line, station) {
	return lines[line].indexOf(station);
};


SubwayTrip.prototype.distance = function() {
	var first_station = station_index(this.startingLine,this.startingStation),
			start_line_park_index = station_index(this.startingLine, "park st"),
			last_station = station_index(this.endingLine,this.endingStation),
			end_line_park_index = station_index(this.endingLine, "park st"),
			start_to_park = (first_station - start_line_park_index),
			end_to_park = (last_station - end_line_park_index);
	return (Math.abs(start_to_park) + Math.abs(end_to_park));
};


