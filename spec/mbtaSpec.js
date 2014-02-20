describe('Route', function () {
	var routeA, routeB;

  beforeEach(function() {
    routeA = new Route ("green", "haymarket", "park st");
    routeB = new Route ("red", "green", "haymarket", "alewife");
  });

  it("has a line, startingStation, endingStation", function() {
  	 expect(routeA.line).toEqual("green");
  	 expect(routeA.startingStation).toEqual("haymarket");
  	 expect(routeA.endingStation).toEqual("park st");
  });

  it("has a startingLine, startingStation, endingLine, endingStation", function() {
  	 expect(routeB.startingline).toEqual("green");
  	 expect(routeB.startingStation).toEqual("haymarket");
  	 expect(routeB.endingLine).toEqual("park st");
  	 expect(routeB.endingStation).toEqual("park st");
  });

  it("has a number of stops between starting and ending stop", function() {
  	expect(routeA.enter_exit_same_line).toEqual(2)
  	expect(routeB.enter_exit_different_lines).toEqual()
	});

});