'use strict';
var Mbta = function(orig_line, orig_stop, dest_line, dest_stop){
  this.orig_line = orig_line;
  this.orig_stop = orig_stop;
  this.dest_line = dest_line;
  this.dest_stop = dest_stop;
  this.lines = {
      Red: ["Alewife", "Davis", "Porter", "Harvard", "Central", "Kendall/MIT", "Park Street", "South Station"],
      Green: ["Haymarket", "Government Center", "Park Street", "Boylston", "Arlington", "Copley"],
      Orange: ["North Station", "Haymarket", "Park Street", "State Street", "Downtown Crossing", "China Town", "Tufts Medical Center"]
    };
  }

  Mbta.prototype = {
    diffLineCount: function(line_start, start, line_stop, stop){ if(start == stop){
          return 0;
        }else{
          var count1 = this.sameLineCount(line_start, start, "Park Street");
          var count2 = this.sameLineCount(line_stop, stop, "Park Street");
          return count1 + count2;
        }
      },
    sameLineCount: function(line_name, stop1, stop2) {
      debugger;
      var count = this.lines[line_name].indexOf(stop1) - this.lines[line_name].indexOf(stop2);
      if(count < 0){
        return count *= -1;
      }else{
        return count;
      }
    },
    sameLine: function() {
      if(this.orig_line === this.dest_line){
        return true;
      }else{
        return false;
      }
    },
     countStops: function(){
    if(this.sameLine()){
      return this.sameLineCount(this.orig_line, this.orig_stop, this.dest_stop);
    } else {
      return this.diffLineCount(this.orig_line, this.orig_stop, this.dest_line, this.dest_stop);
    }
  }
};
