describe("MBTA", function(){
  describe("Journey", function(){
    var journey1, journey2, journeyBad;
    beforeEach(function(){
      journey1 = new MBTA.Journey("red", "park st", "central");
      journey2 = new MBTA.Journey("green", "haymarket", "orange", "back bay");
    });

    describe("#initialize and validations", function(){
      it("must have 3-4 args to initialize validly", function(){
        expect(function(){
          journeyBad = new MBTA.Journey("green", "haymarket");
        }).toThrowError("a journey must have at least 3 arguments.")
      });

      it("can have 3 args, only if the end stop is on the same line", function(){
        expect(function(){
          journeyBad = new MBTA.Journey("red", "park st", "copley");
        }).toThrowError("stop doesn't exist.");
      });

      it("throws an error if the line doesn't exist", function(){
        expect(function(){
          journeyBad = new MBTA.Journey("pink", "park st", "central");
        }).toThrowError("line doesn't exist.")
      });

      it("throws an error if the stop doesn't exist", function(){
        expect(function(){
          journeyBad = new MBTA.Journey("red", "banana st", "central");
        }).toThrowError("stop doesn't exist.")
      });
    });
  });
});
