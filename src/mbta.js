// MBTA object
var MBTA = {
  Journey : function () {
    if (arguments.length < 3) {
      throw new Error ("a journey must have at least 3 arguments.");
    } else if ( arguments.length === 3 ) {
      this.start_line = arguments[0];
      this.start_stop = arguments[1];
      this.end_line   = arguments[0];
      this.end_stop   = arguments[2];
      if ( this.lines[this.start_line].indexOf(this.end_stop) === -1 ) {
        throw new Error ("the end stop isn't on the same line as the start stop!");
      }
    } else {
      this.start_line = arguments[0];
      this.start_stop = arguments[1];
      this.end_line   = arguments[2];
      this.end_stop   = arguments[3];
    }
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
