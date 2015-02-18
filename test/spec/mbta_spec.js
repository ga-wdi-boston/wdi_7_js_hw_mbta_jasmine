describe("Trip constructor", function() {
  var trip;

  beforeEach(function(){
    trip = new Trip("red", "south station", "red", "alewife");
  });

  it("returns the expected value when constructing a trip", function() {
    expect(trip.startingLine).toEqual("red");
    expect(trip.startingStation).toEqual("south station");
    expect(trip.endingLine).toEqual("red");
    expect(trip.endingStation).toEqual("alewife");
  });
});

describe("Line constructor", function() {
  var line;

  beforeEach(function(){
    line = new Line('red', ['south station', 'park st', 'kendall', 'central', 'harvard', 'porter', 'davis', 'alewife']);
  });

  it("returns the expected value when constructing a line", function() {
    expect(line.name).toEqual('red');
    expect(line.stations).toEqual(['south station', 'park st', 'kendall', 'central', 'harvard', 'porter', 'davis', 'alewife']);
  });
});

describe("distance", function() {
  var numStops;
  red_line = new Line('red', ['south station', 'park st', 'kendall', 'central', 'harvard', 'porter', 'davis', 'alewife']);
  trip_1 = new Trip(red_line, "south station", red_line, "alewife");
  var green_line = new Line('green', ['haymarket', 'park st', 'boylston', 'arlington', 'copley', 'kenmore']);
  var trip_2 = new Trip(red_line, "south station", green_line, "kenmore");

  it("returns the number of stops between the start and end stations on the same line", function() {
    expect(trip_1.distance()).toBe(7);
   });

  it("returns the number of stops between the start and end stations on different lines", function() {
    expect(trip_2.distance()).toBe(5);
   });
});
