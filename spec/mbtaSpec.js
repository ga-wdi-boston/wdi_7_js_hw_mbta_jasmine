describe('MBTA', function () {
	var route

  beforeEach(function() {
    routeA = new MBTA ("green", "haymarket", "park st");
  });

  it("has a line, startingStation, endingStation", function() {
  	 expect(routeA.line).toEqual("green");
  	 expect(routeA.startingStation).toEqual("haymarket");
  	 expect(routeA.endingStation).toEqual("park st");
  });
