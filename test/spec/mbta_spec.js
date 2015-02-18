describe("MBTA stops finder", function(){
  it("finds the number of stops to your target station depending on which line and which station you start at", function(){
    expect(MBTA.distance("Red", "South Station", "Green", "Haymarket")).toBe(6);
  });
});
