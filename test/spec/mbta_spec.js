describe("#userInputs", function(){
  it("assigns input function arguments to variables", function(){
    expect(MBTA.userInputs("Red", "South Station", "Green", "Haymarket")).toEqual("Red", "South Station", "Green", "Haymarket");
  });
});
