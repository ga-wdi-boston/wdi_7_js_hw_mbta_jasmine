describe("MBTA", function() {
  var trip1;
  var trip2;

  beforeEach(function() {
    trip1 = new MBTA();
    trip2 = new MBTA();
  });

  it("should return the number of stops", function() {
    expect(trip1).toEqual(6);
  });

});
