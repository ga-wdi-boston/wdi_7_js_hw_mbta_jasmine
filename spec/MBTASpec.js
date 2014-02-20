describe('Ride', function(){
	var ride1, ride2;
	beforeEach(function(){
		ride1 = new Ride("green", "copley", "orange", "haymarket");
		ride2 = new Ride("red", "south station", "red", "alewife");
	});


	it('has a function called startIndex that calculates the starting station', function(){
		ride1.startIndex();
		expect(ride1.startIndex()).toEqual(5);
		ride2.startIndex();
		expect(ride2.startIndex()).toEqual(0);
	});

	it('has a function called intersectionStart that calculates the index of Park on start line', function(){
		ride1.intersectionStart();
		expect(ride1.intersectionStart()).toEqual(2);
		ride2.intersectionStart();
		expect(ride2.intersectionStart()).toEqual(1);
	});

	it('has a function called startParkIndex that calculates the difference between startIndex and intersectionStart', function(){
		ride1.startParkIndex();
		expect(ride1.startParkIndex()).toEqual(3);
		ride2.startParkIndex();
		expect(ride2.startParkIndex()).toEqual(1);
	});
});
