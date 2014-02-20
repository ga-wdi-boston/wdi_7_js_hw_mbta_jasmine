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

		it('should correctly assign the index of a given stop at a given station', function() {
		  expect(start).toBe(1);
		  expect(end).toBe(2);
		});
	});

	describe('define index', function() {
	  beforeEach(function() {
	    trip2.defineIndex();
	  });

		it('should correctly assign the index of the starting and ending points for a trip', function() {
		  expect(trip2.start_index).toEqual(5);
		  expect(trip2.end_index).toEqual(6);
		  expect(trip2.start_park).toEqual(1);
		  expect(trip2.end_park).toEqual(2);
		});
	});
});
