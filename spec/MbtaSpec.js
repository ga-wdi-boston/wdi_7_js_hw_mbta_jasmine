describe ('mbta', function() {
	var trip;
	beforeEach( function(){
		trip = new Ride('green', 'copley', 'red', 'alewife');
	});
	it ('should take a starting line and station', function() {

		expect(trip.start_line).toEqual('green');
		expect(trip.start_station).toEqual('copley');
	});
	it ('should take an end line and station', function() {

		expect(trip.end_line).toEqual('red');
		expect(trip.end_station).toEqual('alewife');
	});
	it ('has a calculates the distance from start line and station to end line and station', function(){
		expect(trip.calc_distances()).toEqual(9);
	});
});
