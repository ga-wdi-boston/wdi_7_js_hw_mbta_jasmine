describe("Mbta", function() {
  var kendallToHayGreen,
      tooShortTrip,
      tooLongTrip;

  beforeEach(function() {
    kendallToHayGreen = new Mbta.Trip("red", "kendall", "green", "haymarket")
  });

  describe("Mbta.Trip constructor", function() {
    it("should be initialized with 4 attributes for starting/ending", function() {
      expect(kendallToHayGreen.startingLine).toEqual("red");
      expect(kendallToHayGreen.startingStation).toEqual("kendall");
      expect(kendallToHayGreen.endingLine).toEqual("green");
      expect(kendallToHayGreen.endingStation).toEqual("haymarket");
    });
    it("should throw an error when initialized with wrong number of args", function() {
      expect(function() {
        tooShortTrip = new Mbta.Trip("red", "kendall"); }).toThrowError("Wrong number of args");
      expect(function() {
        tooLongTrip = new Mbta.Trip("red", "kendall", "red", "park street",
          "green", "haymarket"); }).toThrowError("Wrong number of args");
    });
  });
});
