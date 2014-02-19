describe("Mbta", function() {
  var stdTrip,
      tooShortTrip,
      tooLongTrip,
      invalidLine,
      invalidStop;

  beforeEach(function() {
    stdTrip = new Mbta.Trip("red", "kendall", "green", "haymarket")
  });

  describe("Mbta.Trip constructor", function() {
    it("should be initialized with 4 attributes for starting/ending", function() {
      expect(stdTrip.startingLine).toBeValid;
    });
    it("should store starting/ending as from and to object attributes", function() {
      expect(stdTrip.startHere).toEqual({line: "red", station: "kendall"});
      expect(stdTrip.endHere).toEqual({line: "green", station: "haymarket"});
    });
    it("should throw an error when initialized with wrong number of args", function() {
      expect(function() {
        tooShortTrip = new Mbta.Trip("red", "kendall"); }).toThrowError("Wrong number of args");
      expect(function() {
        tooLongTrip = new Mbta.Trip("red", "kendall", "red", "park street",
          "Green", "Haymarket"); }).toThrowError("Wrong number of args");
    });
    it("should throw an error when initialized with an invalid line", function() {
      expect(function() {
        invalidLine = new Mbta.Trip("red", "kendall", "blue", "government center"); }
        ).toThrowError("Invalid line name");
      expect(function() {
        invalidStop = new Mbta.Trip("red", "kendall", "red", "boylston"); }
        ).toThrowError("Invalid stop name");
    });
  });
  describe("Mbta.Trip.prototype", function() {
    it("should give Trip objects lines object with line keys/stop arrays", function() {
      expect(stdTrip.lines.green).toEqual(["haymarket",
                                           "government center",
                                           "park street",
                                           "boylston",
                                           "arlington",
                                           "copley"]);
      expect(stdTrip.lines.red).toEqual(["south station",
                                         "park street",
                                         "kendall",
                                         "central",
                                         "harvard",
                                         "porter",
                                         "davis",
                                         "alewife"]);
      expect(stdTrip.lines.orange).toEqual(["north station",
                                            "haymarket",
                                            "park street",
                                            "state",
                                            "downtown crossing",
                                            "chinatown",
                                            "back bay",
                                            "forest hills"]);
    });
    it(".distanceToPark(place)")
  });
});
