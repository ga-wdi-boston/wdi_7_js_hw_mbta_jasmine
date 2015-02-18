var MBTA = {
  lines: {
    "Green": ["North Station","Haymarket","Government Center","Park Street","Boylston","Arlington","Copley","Hynes Convention Center", "Kenmore"],
    "Red": ["Alewife","Davis","Porter","Harvard","Central","Kendall/MIT","Charles/MGH","Park Street","Downtown Crossing","South Station"],
    "Orange": ["Oak Grove", "Malden Center", "Wellington", "Assembly","Sullivan Square", "Community College", "North Station","Haymarket","Park Street","State","Downtown Crossing"]
    },

    userInputs: function(startLine, startStation, endLine, endStation){
      startingLine = startLine;
      endingLine = endLine;
      startingStation = endLine;
      endingStation = endStation;
  },
    distance: function(){
      if(this.startingLine === this.endingLine){
        return Math.abs(this.lines[this.startingLine].indexOf(startingStation) - this.lines[this.endingLine].indexOf(this.endingStation));
      } else {
      return Math.abs(this.lines[this.startingLine].indexOf(startingStation) - this.lines[this.startingLine].indexOf(this.lines["Park Street"]) + Math.abs(this.lines[this.endingLine].indexOf("Park Street") - this.lines[this.endingLine].indexOf(endingStation)));
    }
  }
};
