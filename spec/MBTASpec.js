describe('lines', function(){
	it('has 3 lines, each with stops', function(){
		expect(lines['green']).toEqual(["haymarket", "government center", "park st", "bolyston", "arlington", "copley"]);
		expect(lines['red']).toEqual(["south station", "park st", "kendall", "central", "harvard", "porter", "davis", "alewife"]);
		expect(lines['orange']).toEqual(["north station", "haymarket", "park st", "state", "downtown crossing", "chinatown", "back bay", "forest hills"]);
	});
});


describe('Ride', function(){
	var ride1, ride2;
	beforeEach(function(){
		ride1 = new Ride("green", "copley", "orange", "haymarket");
		ride2 = new Ride("red", "south station", "red", "alewife");
	});

	it('rides have startingLine, startingStation, endingLine, endingStation', function(){
		expect(ride1.startingLine).toEqual("green");
		expect(ride1.startingStation).toEqual("copley");
		expect(ride2.endingLine).toEqual("red");
		expect(ride2.endingStation).toEqual("alewife");
	});


	it('has a function called startIndex that calculates the starting station index value', function(){
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

	it('has a function called endIndex that calculates the ending station index value', function(){
		ride1.endIndex();
		expect(ride1.endIndex()).toEqual(1);
		ride2.endIndex();
		expect(ride2.endIndex()).toEqual(7);
	});

	it('has a function called intersectionEnd that calculates the index of Park on end line', function(){
		ride1.intersectionEnd();
		expect(ride1.intersectionEnd()).toEqual(2);
		ride2.intersectionStart();
		expect(ride2.intersectionEnd()).toEqual(1);
	});

	it('has a function called endParkIndex that calculates the difference between endIndex and intersectionEnd', function(){
		ride1.endParkIndex();
		expect(ride1.endParkIndex()).toEqual(1);
		ride2.startParkIndex();
		expect(ride2.endParkIndex()).toEqual(6);
	});

	it('has function called totalDistance that calculates the total distance for the ride', function(){
		ride1.totalDistance();
		expect(ride1.totalDistance()).toEqual(4);
		ride2.totalDistance();
		expect(ride2.totalDistance()).toEqual(7);
	});
});
