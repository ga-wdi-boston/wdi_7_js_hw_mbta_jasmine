describe('Ride', function(){
	var ride1, ride2;
	beforeEach(function(){
		ride1 = new Ride("green", "copley", "orange", "haymarket");
		ride2 = new Ride("red", "south station", "red", "alewife");
	});


	it('has a function called startIndex that calculates the starting station', function(){
		ride1.startIndex();
		expect(ride1.startIndex()).toEqual(5);
	});
});
