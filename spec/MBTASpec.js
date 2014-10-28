describe("DistanceToPark", function(line, stop)) {
  it("calculates the distance to park", function(line, stop)) {
    MBTA.DistanceToPark('red', 'harvard');
    MBTA.DistanceToPark('green', 'copley');

    expect(MBTA.DistanceToPark('red', 'harvard')).toEqual(3);
    expect(MBTA.DistanceToPark('green', 'copley')).toEqual(3);
  };
};
