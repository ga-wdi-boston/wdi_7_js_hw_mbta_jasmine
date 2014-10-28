describe("#DistanceToPark", function(line, stop) {
  it("calculates the distance to park", function(line, stop) {
    MBTA.DistanceToPark('red', 'harvard');
    MBTA.DistanceToPark('green', 'copley');

    expect(MBTA.DistanceToPark('red', 'harvard')).toEqual(3);
    expect(MBTA.DistanceToPark('green', 'copley')).toEqual(3);
  });
});


describe("#distance", function(start_line, start_station, stop_line, stop_station) {
  it ("gets the inputs", function(start_line, start_station, stop_line, stop_station){
    MBTA.distance('red', 'south station', 'orange', 'haymarket');
    this.start_line;
    this.start_station;
    this.stop_line;
    this.stop_station;

    expect(this.start_line).toEqual('red');
    expect(this.start_station).toEqual('south station');
    expect(this.stop_line).toEqual('orange');
    expect(this.stop_station).toEqual('haymarket');
  });
});


describe("#calcDistances", function() {
  it ("calculates the mbta distances", function() {
    MBTA.calcDistance();

  });
});
