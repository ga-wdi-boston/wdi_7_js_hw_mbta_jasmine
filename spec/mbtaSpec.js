describe('MBTA', function() {
  var journey;

  beforeEach(function() {
    journey = new MBTA.Journey('alewife', 'red', 'red', 'porter');
  });

    describe('Journey', function() {
      it('should expect the location points to be set', function() {
      expect(journey.startingStation).toEqual('alewife');
      expect(journey.startingLine).toEqual('red');
      expect(journey.endingStation).toEqual('porter');
      expect(journey.endingLine).toEqual('red');
    });
  });

    describe('numOfStops', function() {
      it('should return the number of stops between stations via Park St', function() {
      expect(journey.numOfStops()).toEqual(2);
    });
  });
});

