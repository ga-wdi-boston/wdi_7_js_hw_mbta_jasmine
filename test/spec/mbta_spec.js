describe("The MBTA", function(){
  it("determines if it is recognizable as an object", function(){
    expect(MBTA).toBeDefined();
    expect(MBTA).toEqual(jasmine.any(Object));
  });
  it("determines if the MBTA has lines", function(){
    expect(MBTA.lines).toBeDefined();
    expect(MBTA.lines).toEqual(jasmine.any(Object));
    expect(MBTA.lines["Red"]).toContain("Alewife","Davis","Porter","Harvard","Central","Kendall/MIT","Charles/MGH","Park Street","Downtown Crossing","South Station");
    expect(MBTA.lines["Green"]).toContain("North Station","Haymarket","Government Center","Park Street","Boylston","Arlington","Copley","Hynes Convention Center", "Kenmore");
    expect(MBTA.lines["Orange"]).toContain("Oak Grove", "Malden Center", "Wellington", "Assembly","Sullivan Square", "Community College", "North Station","Haymarket","Park Street","State","Downtown Crossing");
  });
});

describe("#userInputs", function(){
  it("determines that #userInputs is a function", function(){
    expect(MBTA.userInputs).toBeDefined();
    expect(MBTA.userInputs).toEqual(jasmine.any(Function));
  });
  it("determines if the method is called", function(){
    expect(MBTA.userInputs.calls.any()).toEqual(false);

    MBTA.userInputs();

    expect(MBTA.userInputs.calls.any()).toEqual(true);
  });

  it("determines if the method takes arguments", function(){
    MBTA.userInputs("Red", "South Station", "Green", "Haymarket");

    expect(MBTA.userInputs.calls.allArgs()).toEqual(["Red", "South Station", "Green", "Haymarket"]);
  });

  it("determines if the arguments are assigned to variables", function(){
    ;
    expect(MBTA.userInputs("Red", "South Station", "Green", "Haymarket")).toBe(Object {startingLine: "Red", endingLine: "Davis", startingStation: "Davis", endingStation: "South Staton"});
  }
});
