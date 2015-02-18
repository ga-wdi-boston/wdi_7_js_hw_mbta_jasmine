lines = {
  'green': [ "Haymarket","Government Center","Park Street","Boylston","Arlington","Copley" ],
  'red': [ "Alewife","Davis","Porter","Harvard","Central","Kendall/MIT","Park Street","South Station"],
  'orange': ["North Station", "Haymarket", "Park Street", "State Street", "Downtown Crossing", "Chinatown", "Tufts"]
};

var findStops = function(line, origin, destination){
  return Math.abs(lines[line].indexOf(origin) - lines[line].indexOf(destination));
};
