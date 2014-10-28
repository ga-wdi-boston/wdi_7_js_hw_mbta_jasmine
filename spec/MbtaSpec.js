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

  describe("#distanceToDestination", function(){
    it("calculates the correct distance from start stop to end stop", function(){
      expect(this.mbta.distanceToDestination()).toEqual(8);
    });
  });

  describe("#distanceToPark", function(){
    it("calculates the correct distance from start stop to Park Street", function(){
      expect(this.mbta.distanceToPark(this.mbta.startLine, this.mbta.startStop)).toEqual(5);
    });

    it("calculates the correct distance from end stop to Park Street", function(){
      expect(this.mbta.distanceToPark(this.mbta.endLine, this.mbta.endStop)).toEqual(3);
    });

    it("calculates the correct distance from Park to Park", function(){
      expect(this.mbta.distanceToPark("red", "Park Street")).toEqual(0);
    });
  });

});
