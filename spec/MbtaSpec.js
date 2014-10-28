describe("MBTA", function() {

  beforeEach(function() {
    this.mbta = new MBTA("red", "Davis", "orange", "Chinatown");
  });

  describe("initializer", function(){
    it("is created with appropriate input", function(){
      expect(this.mbta.startLine).toEqual("red");
    });
  });
});
