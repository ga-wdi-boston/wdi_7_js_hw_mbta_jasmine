describe('mbta', function() {
  var travel;

  beforeEach(function() {
    travel = new Trip('red', 'davis', 'orange', 'north station')
  });

  it('should have both a startingLine and startingStation', function() {
    expect(travel.startingLine).toEqual('red');
    expect(travel.startingStation).toEqual('davis');
  });

  it('should have both an endingLine and endingStation', function() {
    expect(travel.endingLine).toEqual('orange');
    expect(travel.endingStation).toEqual('north station');
  });

  // it('should have a triple intersection point at park street station, specified by index', function() {
  //   expect(travel.intersectionPoint).toEqual(1);
  // });

})
