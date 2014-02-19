describe("SubwayTrip", function() {
  var trip1;
  var trip2;

  beforeEach(function() {
    trip1 = new SubwayTrip('green', 'park st', 'red', 'alewife');
    trip2 = new SubwayTrip('orange', 'forest hills', 'red', 'alewife');
  });

  it("should return the number of stops", function() {
    expect(trip1.distance()).toEqual(6);
    expect(trip2.distance()).toEqual(11);
  });

});
