describe("#MBTA", function(){
  it("is defined", function(){
    expect(MBTA).toEqual(jasmine.any(Function));
    // expect(MBTA).toBeDefined();
  });
  it("has a hash-like object called lines which contains arrays listing train stations");
    expect(MBTA.lines).toBeDefined();
    spyOn(MBTA.lines)
  });

// describe("#userInputs", function(){
//   it("assigns input function arguments to variables", function(){
//     expect(MBTA.userInputs("Red", "South Station", "Green", "Haymarket")).toContain("Red", "South Station", "Green", "Haymarket");
//   });
// });
