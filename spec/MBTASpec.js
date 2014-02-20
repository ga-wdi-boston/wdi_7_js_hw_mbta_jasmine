describe("Trip", function(){
	var trip = new MBTA.Trip('green', 'Boylston', 'red', 'Alewife');

	describe("#initialize", function(){

		it("should have a 'lines' property with stored info on 3 subway lines", function(){
			expect(trip.lines.green.length).toEqual(6);
			expect(trip.lines.red.length).toEqual(8);
			expect(trip.lines.orange.length).toEqual(8);
		});

		it("should have a 'transferStation' property with a station name", function(){
			expect(trip.transferStation).toEqual('Park St');

		});

		it("requires 4 parameters to initiate", function(){
			expect(function(){
				new MBTA.Trip()
			}).toThrowError("starting and ending lines and stations are required");
		});

		it("throws an error if invalid lines are entered", function() {
			expect(function(){
				new MBTA.Trip('pink', 'Boylston', 'red', 'Alewife')
			}).toThrowError("invalid line");
			expect(function(){
				new MBTA.Trip('red', 'Boylston', 'yellow', 'Alewife')
			}).toThrowError("invalid line");
		});

		it("throws an error if invalid stations are entered", function() {
			expect(function(){
				new MBTA.Trip('red', 'Home', 'red', 'Alewife')
			}).toThrowError("invalid station");
			expect(function(){
				new MBTA.Trip('red', 'Boylston', 'green', '23 St')
			}).toThrowError("invalid station");
		});

	});

	describe("#totalStops", function(){
		it("should return an object with stores values for stops on first and second lines", function(){
			expect(trip.totalStops().stopsOn1).toEqual(1);
			expect(trip.totalStops().stopsOn2).toEqual(6);
		})
	});

});