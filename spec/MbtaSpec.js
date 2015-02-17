describe("MBTA", function() {
  beforeAction(function() {
    this.mbta = new MBTA("red", "davis", "green", "copley");
  });

  describe("#calculateDistance", function() {
    it("should calculate the distance between stations traveled", function() {
      expect(this.mbta.calculateDistance()).toEqual(8);
    });
  });

});