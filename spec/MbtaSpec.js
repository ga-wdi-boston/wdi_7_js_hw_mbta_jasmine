describe("MbtaApp", function() {
  var mbta;

  beforeEach(function() {

  });

  it("should contains lines as var", function() {
    var lines = {'green':["haymarket", "government center", "park st", "bolyston", "arlington", "copley"],
                'red': ["south station", "park st", "kendall", "central", "harvard", "porter", "davis", "alewife"],
                'orange': ["north station", "haymarket", "park st", "state", "downtown crossing", "chinatown", "back bay", "forest hills"]
                };
    expect(MbtaApp.lines).toEqual(lines);
  });

  it("should have method which can calculate the trip",function(){
    document.forms[0] = "StartingLine";
    document.forms[1] = "StartingStation";
    document.forms[2] = "EndingLine";
    document.forms[3] = "EndingStation";
    document.forms[0].value = "red";
    document.forms[1].value = "south station";
    document.forms[2].value = "green";
    document.forms[3].value = "park st";
    expect(MbtaApp.tripCount(document.forms)).toEqual(1);
  });

});
