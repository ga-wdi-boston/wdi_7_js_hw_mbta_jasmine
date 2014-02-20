describe ('MBTAApp', function() {
  var lines = {
    'green':['Haymarket Green', 'Government Center', 'Park St', 'Boylston', 'Arlington', 'Copley'],
    'red': ['South Station', 'Park St', 'Kendall', 'Central', 'Harvard', 'Porter', 'Davis', 'Alewife'],
    'orange': ['Forest Hills', 'Back Bay', 'Chinatown', 'Downtown Crossing', 'State', 'Park St', 'Haymarket Orange', 'North Station']
  };

  beforeEach(function() {
    trip_1 = new Trip('red', 'orange', 'South Station', 'Back Bay');
    trip_2 = new Trip('green', 'orange', 'Arlington', 'State');
  });

  describe ('totalStops', function() {
    it("should calculate the total number of stops for a trip", function() {
      expect(MBTAApp.totalStops(lines, trip_1)).toEqual(5);
      expect(MBTAApp.totalStops(lines, trip_2)).toEqual(3);
    });
  });

  describe ('Trip', function() {
    it("should have a start line, end line, start station and end station", function() {
      expect(trip_1.startingLine).toEqual('red');
      expect(trip_1.endingLine).toEqual('orange');
      expect(trip_1.startingStation).toEqual('South Station');
      expect(trip_1.endingStation).toEqual('Back Bay');
    })
  })
});
