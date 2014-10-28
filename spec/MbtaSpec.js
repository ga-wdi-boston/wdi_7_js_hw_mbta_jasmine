describe("MBTA", function() {

  beforeEach(function() {
    this.mbta = new MBTA("red", "Davis", "orange", "Chinatown");
  });

  describe("initializer", function(){
    it("is created with appropriate input", function(){
      expect(this.mbta.startLine).toEqual("red");
      expect(this.mbta.startStop).toEqual("Davis");
      expect(this.mbta.endLine).toEqual("orange");
      expect(this.mbta.endStop).toEqual("Chinatown");
    });
  });
});
