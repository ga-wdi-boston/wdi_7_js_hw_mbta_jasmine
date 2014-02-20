describe('MBTA', function(){

	beforeEach(function() {
	  trip1 = new MBTA.Trip('red', 'park st', 'red', 'kendall');
	  trip2 = new MBTA.Trip('red', 'porter', 'orange', 'back bay');
	  trip3 = new MBTA.Trip('green', 'haymarket', 'orange', 'state');
	});

	it('should correctly assign starting and ending lines, stops', function() {
	  expect(trip1.starting_line).toBe('red');
	  expect(trip1.starting_station).toBe('park st');
	  expect(trip1.ending_line).toBe('red');
	  expect(trip1.ending_station).toBe('kendall');
	});

	describe('find index', function() {
	  beforeEach(function() {
	    start = trip1.findIndex(trip1.starting_line, trip1.starting_station);
	    end = trip1.findIndex(trip1.ending_line, trip1.ending_station);
	  });

		it('should correctly assign the index of the starting and ending points', function() {
		  expect(start).toBe(1);
		  expect(end).toBe(2);
		});
	});
});
