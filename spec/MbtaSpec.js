describe('MBTA', function(){
  var mbta;

  beforeEach(function(){
    mbta_same = new MBTA('red', 'kendall', 'red', 'park st');
    mbta_diff = new MBTA('red', 'kendall', 'green', 'copley');
  });

  it("should be able to retrieve the starting line, starting station, ending line and ending.station", function(){
    expect(mbta_same.startingLine).toEqual('red');
    expect(mbta_same.startingStation).toEqual('kendall');
    expect(mbta_same.endingLine).toEqual('red');
    expect(mbta_same.endingStation).toEqual('park st');
  });


});