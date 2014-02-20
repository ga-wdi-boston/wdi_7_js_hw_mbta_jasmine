describe('MBTA', function() {
  var journey;

  beforeEach(function() {
    journey = new MBTA.Journey('alewife', 'red', 'green', 'arlington');
  });

    describe('Journey', function() {
      it('should expect the location points to be set', function() {
      expect(journey.startingStation).toEqual('alewife');
      expect(journey.startingLine).toEqual('red');
      expect(journey.endingStation).toEqual('arlington');
      expect(journey.endingLine).toEqual('green');
    });
  });

  //   describe('numOfStops', function() {
  //     it('should return the number of stops between stations via Park St', function() {
  //     expect(MBTA.Journey.prototype.numOfStops(journey)).toEqual(8);
  //   });
  // });
});

