describe("mbta app", function() {
  it("will have a Line constructor", function() {
    expect(Line).toBeDefined();
    expect(Line).toEqual(jasmine.any(Function));

    expect(red.color).toBe("red");
    expect(red.stations).toEqual(jasmine.any(Array));
    expect(red.stations.indexOf("south station")).toBe(0);
    expect(red.stations.indexOf("porter")).toBe(5);
  });

  it("will have a Trip constructor", function(){
    expect(Trip).toBeDefined();
    expect(Trip).toEqual(jasmine.any(Function));

    var shopping = new Trip('orange', 'north station', 'green', 'arlington');
    var school = new Trip('orange', 'downtown crossing', 'red', 'south station');
    var food = new Trip('green', 'park st', 'green', 'copley');

    expect(shopping.startingLine).toBe("orange");
    expect(school.startingStation).toBe("downtown crossing");
    expect(food.endingLine).toBe("green");
  });

  it("will calculate the distance between any two stops", function(){
    var shopping = new Trip('orange', 'north station', 'green', 'arlington');
    var school = new Trip('orange', 'downtown crossing', 'red', 'south station');
    var food = new Trip('green', 'park st', 'green', 'copley');

    // expect(shopping.numStops()).toBe(5);
    // expect(school.numStops()).toBe(3);
    expect(food.numStops()).toBe(3);

  });
});
