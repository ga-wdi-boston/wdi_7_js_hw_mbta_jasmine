describe("the MBTA stop calculator", function(){
  it("calculates the number of stops from one station to another", function() {
    expect(numberOfStops("green", "haymarket", "green", "copley")).toBe(5);
    expect(numberOfStops("green", "haymarket", "red", "central")).toBe(4);
    expect(numberOfStops("orange", "chinatown", "red", "south station")).toBe(4);
    expect(numberOfStops("orange", "north station", "orange", "park st")).toBe(2);

  });

});
