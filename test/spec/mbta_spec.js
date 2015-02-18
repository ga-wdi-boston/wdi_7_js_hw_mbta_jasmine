describe("The MBTA", function(){
  it("will be recognizable as an object", function(){
    expect(MBTA).toBeDefined();
    expect(MBTA).toEqual(jasmine.any(Object));
  });
  it("will have lines", function(){
    expect(MBTA.lines).toBeDefined();
    expect(MBTA.lines["Red"]).toBe(["Alewife","Davis","Porter","Harvard","Central","Kendall/MIT","Charles/MGH","Park Street","Downtown Crossing","South Station"]);
    expect(MBTA.lines["Green"]).toBe(["North Station","Haymarket","Government Center","Park Street","Boylston","Arlington","Copley","Hynes Convention Center", "Kenmore"]);
    expect(MBTA.lines["Orange"]).toBe(["Oak Grove", "Malden Center", "Wellington", "Assembly","Sullivan Square", "Community College", "North Station","Haymarket","Park Street","State","Downtown Crossing"]);
  });
});
describe("#userInputs", function(){
  it("assigns input function arguments to variables", function(){
    expect(MBTA.userInputs("Red", "South Station", "Green", "Haymarket")).toContain("Red", "South Station", "Green", "Haymarket");
  });
});
