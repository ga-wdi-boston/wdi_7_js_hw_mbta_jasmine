var Mbta = {
  Trip: function(startingLine, startingStation, endingLine, endingStation) {
    if (arguments.length !== 4) {
      throw new Error("Wrong number of args");
    }
    this.startingLine = startingLine;
    this.startingStation = startingStation;
    this.endingLine = endingLine;
    this.endingStation = endingStation;
  }
}
