// describe("MBTA", function() {

//   beforeEach(function() {
//     line1 = red_line;
//     stop1 = Alewife;

//     line2 = green_line;
//     stop2 = Copley;

//   });


describe("#distanceToPark", function(){

  it("gives the distance from stop1 to Park Street", function(){
  expect(MBTA.distanceToPark("red_line", "Alewife")).toEqual(6);


  });
});

describe("#calculateDistance", function(){

  it("calculates the distance between any two stops", function(){

    expect(MBTA.calculateDistances("red_line", 6, "orange_line", "North Station")).toEqual(8)

  });

  });
describe("#calculateDistance", function(){

  it("calculates the distance between any two stops", function(){

    expect(MBTA.calculateDistances("green_line", 2, "green_line", "North Station")).toEqual(2)

  });

  });
describe("#calculateDistance", function(){

  it("calculates the distance between any two stops", function(){

    expect(MBTA.calculateDistances("red_line", MBTA.distanceToPark("red_line", "Alewife"), "orange_line", "North Station")).toEqual(8)

  });

  });






