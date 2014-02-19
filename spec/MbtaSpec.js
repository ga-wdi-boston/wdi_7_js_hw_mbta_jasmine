describe('MBTA', function(){

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

  describe("#station_count", function(){
    it("should return the correct result of count of stops if the starting line and the ending line are the same", function(){
      expect(mbta_same.station_count()).toEqual(1);
    });

    it("should return the correct result of count of stops if the starting line and the endign line are different", function(){
      expect(mbta_diff.station_count()).toEqual(4);
    });
  });
});