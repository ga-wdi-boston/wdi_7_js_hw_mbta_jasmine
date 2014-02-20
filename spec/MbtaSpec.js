describe("Mbta", function() {
  var stdTrip,
      tooShortTrip,
      tooLongTrip,
      invalidLine,
      invalidStop,
      atPark,
      ohHay;

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
    it("should throw an error when the origin and destination are identical", function() {
      expect(function() {
        nowhereToGo = new Mbta.Trip("red", "park street", "red", "park street"); }
        ).toThrowError("Origin and destination are identical");
    });
  });
  describe("Mbta.Trip.prototype", function() {

    beforeEach(function() {
      atPark = new Mbta.Trip("red", "park street", "red", "alewife");
      ohHay  = new Mbta.Trip("green", "haymarket", "orange", "haymarket");
    });

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
    it(".distanceToPark(loc) should take a location from a trip and return distance to park",
      function() {
        expect(stdTrip.distanceToPark(stdTrip.startHere)).toEqual(1);
        expect(stdTrip.distanceToPark(stdTrip.endHere)).toEqual(2);


        expect(atPark.distanceToPark(atPark.startHere)).toEqual(0);
        expect(atPark.distanceToPark(atPark.endHere)).toEqual(6);
      });
    it(".tripDistance() should return total stops", function() {
      expect(stdTrip.tripDistance()).toEqual(3);
      expect(atPark.tripDistance()).toEqual(6);
      expect(ohHay.tripDistance()).toEqual(3);
    });
  });
});
