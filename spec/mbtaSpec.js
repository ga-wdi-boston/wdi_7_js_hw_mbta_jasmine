describe('MBTA', function() {
  var journey;

  beforeEach(function() {
    journey = new MBTA.Journey('alewife', 'red', 'red', 'porter');
    journey2 = new MBTA.Journey('alewife', 'red', 'green', 'haymarket');
  });

    describe('Journey', function() {
      it('should expect the location points to be set', function() {
      expect(journey.startingStation).toEqual('alewife');
      expect(journey.startingLine).toEqual('red');
      expect(journey.endingStation).toEqual('porter');
      expect(journey.endingLine).toEqual('red');
      expect(journey2.startingStation).toEqual('alewife');
      expect(journey2.startingLine).toEqual('red');
      expect(journey2.endingStation).toEqual('haymarket');
      expect(journey2.endingLine).toEqual('green');
    });
  });

    describe('numOfStops', function() {
      it('should return the number of stops between stations via Park St', function() {
      expect(journey.numOfStops()).toEqual(2);
      expect(journey2.numOfStops()).toEqual(7);
    });
  });
});

