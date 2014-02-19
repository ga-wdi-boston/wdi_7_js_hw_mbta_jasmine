// MBTA object
var MBTA = {
  Journey : function (startLine, startStop, endLine, endStop) {
    this.start_line = startLine;
    this.start_stop = startStop;
    this.end_line   = endLine;
    this.end_stop   = endStop;
  }
};

MBTA.Journey.prototype = {
  lines :{
    'green':['haymarket', 'government center', 'park st', 'bolyston', 'arlington', 'copley'],
    'red': ['south station', 'park st', 'kendall', 'central', 'harvard', 'porter', 'davis', 'alewife'],
    'orange': ['north station', 'haymarket', 'park st', 'state', 'downtown crossing', 'chinatown', 'back bay', 'forest hills']
  },
  calc_stops: function () {
    var to_park, from_park;
    if ( this.start_line === this.end_line ) {
      return Math.abs( this.lines[this.start_line].indexOf( this.start_stop ) - this.lines[this.end_line].indexOf( this.end_stop ) );
    } else {
      to_park = Math.abs( this.lines[this.start_line].indexOf( this.start_stop ) - this.lines[this.start_line].indexOf( "park st" ) );
      from_park = Math.abs( this.lines[this.end_line].indexOf( "park st" ) - this.lines[this.end_line].indexOf( this.end_stop ) );
      return to_park + from_park;
    }
  }
}
