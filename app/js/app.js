'use strict';
+var startingLine,
+startingStation,
+endingLine,
+endingStation;
+
+
+lines = {
+  'green':["haymarket", "government center", "park st", "bolyston", "arlington", "copley"],
+  'red': ["south station", "park st", "kendall", "central", "harvard", "porter", "davis", "alewife"],
+  'orange': ["north station", "haymarket", "park st", "state", "downtown crossing", "chinatown", "back bay", "forest hills"]
+};
+
+var numberOfStops = function(startingLine, startingStation, endingLine, endingStation){
+  if (startingLine === endingLine){
+    return Math.abs(lines[startingLine].indexOf(startingStation) - lines[startingLine].indexOf(endingStation));
+  } else {
+    return Math.abs(lines[startingLine].indexOf(startingStation) - lines[startingLine].indexOf('park st')) + Math.abs(lines[endingLine].indexOf(endingStation) - lines[endingLine].indexOf('park st'));
+  };
+};
