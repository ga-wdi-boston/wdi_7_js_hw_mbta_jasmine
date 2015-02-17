describe("the MBTA application", function() {
  it("will have a Line constructor", function() {
    expect(Line).toBeDefined();
    expect(Line).toEqual(jasmine.any(Function));

    var blue = new Line('Blue', ["O'Hare", "Rosemont", "Cumberland"]);

    expect(blue.name).toBe("Blue");
    expect(blue.stops).toEqual(jasmine.any(Array));
    expect(blue.stops.indexOf("O'Hare")).toBe(0);
    expect(blue.stops.indexOf('Rosemont')).toBe(1);
    expect(blue.stops.indexOf('Cumberland')).toBe(2);
  });
  it("will have a Trip constructor", function() {
    expect(Trip).toBeDefined();
    expect(Trip).toEqual(jasmine.any(Function));

    var blue = new Line('Blue', ["O'Hare", "Rosemont", "Cumberland"]);
    var brown = new Line('Brown', ['Kimball', 'Kedzie', 'Francisco']);
    var returnFromVacation = new Trip(blue, "O'Hare", brown, 'Kimball');

    expect(returnFromVacation.startingLine.name).toBe("Blue");
    expect(returnFromVacation.endingLine.name).toBe("Brown");
    expect(returnFromVacation.startingStation).toBe("O'Hare");
    expect(returnFromVacation.endingStation).toBe("Kimball");
  });
  it("will be able to find the distance between two stops on the same line.", function() {
    var brown = new Line('Brown', ['Kimball', 'Kedzie', 'Francisco']);
    var morningCommute = new Trip(brown, "Francisco", brown, 'Kimball');
    var eveningCommute = new Trip(brown, "Kimball", brown, 'Francisco');
    expect(morningCommute.distance).toBe(2);
    expect(eveningCommute.distance).toBe(2);
  });
  it("will be able to find the distance between two stops on different lines.", function() {
    var brown = new Line('Brown', ['Kimball', 'park st', 'Kedzie', 'Francisco']);
    var blue = new Line('Blue', ["O'Hare", "Rosemont", "Cumberland", 'park st']);
    var morningCommute = new Trip(brown, "Francisco", blue, 'Rosemont');
    var eveningCommute = new Trip(blue, "Rosemont", brown, 'Francisco');
    expect(morningCommute.distance).toBe(4);
    expect(eveningCommute.distance).toBe(4);
  });



});
