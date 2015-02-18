var startingLine,
startingStation,
endingLine,
endingStation;

startingLine = prompt("Enter the Starting Line: ");
startingStation = prompt("Enter the Starting Station");
endingLine = prompt("Enter the Ending Line");
endingStation =  prompt("Enter the Ending Station");

alert("Staring at " + startingLine + " : " + startingStation);
alert("Ending at " + endingLine + " : " + endingStation);


lines = {
  'green':['haymarket', 'government center', 'park st', 'boylston', 'arlington', 'coply'],
  'red': ['south station', 'park st', 'kendall', 'central', 'harvard', 'porter', 'davis', 'alewife'],
  'orange': ['north station', 'haymarket', 'park st', 'state', 'downtown crossing', 'chinatown', 'back bay', 'forest hills']
};


var numberOfStops = function(startline, startstation, endline, endstation){
  if (startline === endline){
    return Math.abs(lines[startline].indexOf(startstation) - lines[endline].indexOf(endstation));
  } else{
    var trip1 = Math.abs(lines[startline].indexOf(startstation) - lines[startline].indexOf('park st'));
    var trip2 = Math.abs(lines[endline].indexOf(endstation) - lines[endline].indexOf('park st'));
    return trip1 + trip2;
  }
};
