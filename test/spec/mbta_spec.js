describe("inputs", function(){
  it("assigns input function arguments to variables", function(){
    expect(MBTA.inputs("Red", "South Station", "Green", "Haymarket")).toEqual("Red", "South Station", "Green", "Haymarket");
  });
});
