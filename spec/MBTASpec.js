describe('MBTA', function(){
  var journey;

  beforeEach(function() {
    journey = new MBTA('red', 'alewife');
  });

  it("sets the starting line and starting station", function() {
    expect(journey.startingLine).toEqual('red');
    expect(journey.startingStation).toEqual('alewife');
  });

});
