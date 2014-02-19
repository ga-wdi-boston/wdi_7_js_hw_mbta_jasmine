describe("SubwayTrip", function() {
  var trip1,
      trip2,
      trip3,
      trip4;

  beforeEach(function() {
    trip1 = new SubwayTrip('green', 'park st', 'red', 'alewife');
    trip2 = new SubwayTrip('orange', 'forest hills', 'red', 'alewife');
    trip3 = new SubwayTrip('red', 'alewife', 'red', 'south station');
    trip4 = new SubwayTrip('red', 'alewife', 'green', 'park st');
  });

  it("SubwayTrip trip to have a start line", function() {
     expect(trip1.startingLine).toEqual("green");
     expect(trip2.startingLine).toEqual("orange");
     expect(trip3.startingLine).toEqual("red");
  });

  it("SubwayTrip trip to have a start station", function() {
     expect(trip1.startingStation).toEqual("park st");
     expect(trip2.startingStation).toEqual("forest hills");
     expect(trip3.startingStation).toEqual("alewife");
  });

  it("SubwayTrip trip to have an ending line", function() {
     expect(trip1.endingLine).toEqual("red");
     expect(trip2.endingLine).toEqual("red");
     expect(trip4.endingLine).toEqual("green");
  });

  describe("when the function distance is called", function() {

    it("should return the number of stops", function() {
      expect(trip1.distance()).toEqual(6);
      expect(trip2.distance()).toEqual(11);
      expect(trip3.distance()).toEqual(7);
    });
  });

});
