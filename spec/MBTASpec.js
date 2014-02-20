describe('MBTA', function(){
  var journey;

  beforeEach(function() {
    journey = new MBTA('red', 'alewife', 'orange', 'chinatown');
  });

  it("sets the starting line and starting station", function() {
    expect(journey.startingLine).toEqual('red');
    expect(journey.startingStation).toEqual('alewife');
  });

  it("sets the ending line and ending station", function() {
  	expect(journey.endingLine).toEqual('orange');
  	expect(journey.endingStation).toEqual('chinatown');
  });

});
