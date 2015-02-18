var startingLine,
startingStation,
endingLine,
endingStation;


lines = {
  'Red': ["Alewife", "Davis", "Porter", "Harvard", "Central", "Kendall", "Park Street", "South Station"],
  'Green': ["Haymarket - Green", "Government Center", "Park Street", "Boylston", "Arlington", "Copley"],
  'Orange': ["North Station", "Haymarket Orange", "Park Street", "State Street", "Downtown Crossing", "Chinatown", "Tufts Medical Center"]
};

var Stops = function(startingLine, startingStation, endingLine, endingStation){
  this.startingLine = startingLine,
  this.startingStation = startingStation,
  this.endingLine = endingLine,
  this.endingStation = endingStation,
  this.origin_stop_index = lines[startingLine].indexOf(startingStation),
  this.destination_stop_index = lines[endingLine].indexOf(endingStation),
  this.origin_park_index = lines[startingLine].indexOf("Park Street"),
  this.destination_park_index = lines[endingLine].indexOf("Park Street");
}

Stops.prototype = {
  numberOfStops: function(){
    if (this.startingLine === this.endingLine){
      return Math.abs(this.origin_stop_index - this.destination_stop_index);
    } else {
      return Math.abs(this.origin_stop_index - this.origin_park_index) + Math.abs(this.destination_stop_index - this.destination_park_index);
    }
  }
}


// startingLine = prompt("Enter the Starting Line: ");
// startingStation = prompt("Enter the Starting Station");
// endingLine = prompt("Enter the Ending Line");
// endingStation =  prompt("Enter the Ending Station");

// var myStops = new Stops(startingLine, startingStation, endingLine, endingStation);

// // alert("My number of stops from\n" + startingLine + ": " + startingStation + "\nto\n" + endingLine + ": " + endingStation + "\nis " + myStops.numberOfStops());

// document.write("<h1>My number of stops is <br>" + startingLine + ": " + startingStation + "<br>to<br>" + endingLine + ": " + endingStation + "<br>is " + myStops.numberOfStops() + "</h1>");

