describe('MBTA', function(){
  var journey_1, journey_2;

  beforeEach(function() {
    journey_1 = new MBTA('red', 'alewife', 'orange', 'chinatown');
    journey_2 = new MBTA('green','copley','green','haymarket');
    journey_3 = new MBTA('orange', 'state', 'orange', 'back bay');
  });

  it("sets the starting line and starting station", function() {
    expect(journey_1.startingLine).toEqual('red');
    expect(journey_1.startingStation).toEqual('alewife');
  });

  it("sets the ending line and ending station", function() {
  	expect(journey_1.endingLine).toEqual('orange');
  	expect(journey_1.endingStation).toEqual('chinatown');
  });

  it("calculates the distance to park st for a given line and stop", function() {
  	expect(journey_1.distance_to_park_st('green','copley')).toEqual(3);
  	expect(journey_1.distance_to_park_st('orange','north station')).toEqual(2);
  });

  it("calculates the distance for a single-line journey", function() {
  	expect(journey_2.distance_single_line('green','copley','green','haymarket'));
  });

  it("calculates the total distance for a given journey", function() {
  	// single line, no transfer, passes through park st
  	expect(journey_2.total_distance()).toEqual(5);
  	// single line, no transfer, doesn't pass through park st
  	expect(journey_3.total_distance()).toEqual(3);
  	// two lines, with a transfer
  	expect(journey_1.total_distance()).toEqual(9);
  });

});
